import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import Mux from "@mux/mux-node";

const { video } = new Mux({
  tokenId: process.env.MUX_TOKEN_ID!,
  tokenSecret: process.env.MUX_TOKEN_SECRET!,
});

// DELETE THE ENTIRE CHAPTER
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ courseId: string; chapterId: string }> }
) {
  try {
    const { userId } = await auth();
    const { courseId, chapterId } = await params;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const courseOwner = await db.course.findUnique({
      where: {
        id: courseId,
        userId,
      }
    });

    if (!courseOwner) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const chapter = await db.chapter.findUnique({
      where: {
        id: chapterId,
        courseId: courseId,
      }
    });

    if (!chapter) {
      return new NextResponse("Not Found", { status: 404 });
    }

    // 1. Cleanup Mux Data if it exists
    if (chapter.videoUrl) {
      const existingMuxData = await db.muxData.findFirst({
        where: {
          chapterId: chapterId,
        }
      });

      if (existingMuxData) {
        await video.assets.delete(existingMuxData.assetId);
        await db.muxData.delete({
          where: {
            id: existingMuxData.id,
          }
        });
      }
    }

    // 2. Delete the Chapter
    const deletedChapter = await db.chapter.delete({
      where: {
        id: chapterId,
      }
    });

    // 3. Check if there are any published chapters left in the course
    // If not, we should unpublish the course (logic for later, but good practice)
    const publishedChaptersInCourse = await db.chapter.findMany({
      where: {
        courseId: courseId,
        isPublished: true,
      }
    });

    if (!publishedChaptersInCourse.length) {
      await db.course.update({
        where: {
          id: courseId,
        },
        data: {
          isPublished: false,
        }
      });
    }

    return NextResponse.json(deletedChapter);
  } catch (error) {
    console.log("[CHAPTER_ID_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

// UPDATE THE CHAPTER (AND HANDLE VIDEO LOGIC)
export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ courseId: string; chapterId: string }> }
) {
  try {
    const { userId } = await auth();
    const { courseId, chapterId } = await params;
    const { isPublished, ...values } = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const courseOwner = await db.course.findUnique({
      where: {
        id: courseId,
        userId,
      }
    });

    if (!courseOwner) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // 1. Update basic chapter data first
    const chapter = await db.chapter.update({
      where: {
        id: chapterId,
        courseId: courseId,
      },
      data: {
        ...values,
      }
    });

    // 2. Handle Video Logic (Upload OR Delete)
    if (values.videoUrl || values.videoUrl === null) {
      const existingMuxData = await db.muxData.findFirst({
        where: {
          chapterId: chapterId,
        }
      });

      // If there is existing data, we clean it up from Mux
      if (existingMuxData) {
        try {
           await video.assets.delete(existingMuxData.assetId);
        } catch (e) {
           console.log("Skipping Mux delete (asset might be already gone)");
        }
        await db.muxData.delete({
          where: {
            id: existingMuxData.id,
          }
        });
      }

      // If this was a NEW video upload (not just a deletion), create new Mux asset
      if (values.videoUrl) {
        const asset = await video.assets.create({
          inputs: [{ url: values.videoUrl }],
          playback_policy: ["public"],
          test: false,
        });

        await db.muxData.create({
          data: {
            chapterId: chapterId,
            assetId: asset.id,
            playbackId: asset.playback_ids?.[0]?.id,
          }
        });
      }
    }

    return NextResponse.json(chapter);
  } catch (error) {
    console.log("[CHAPTER_ID_PATCH]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}