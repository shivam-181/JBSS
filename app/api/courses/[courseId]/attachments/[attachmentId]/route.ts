import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

// HANDLES: POST /api/courses/[courseId]/attachments (for creation)
export async function POST(
  req: Request,
  { params }: { params: Promise<{ courseId: string }> }
) {
  try {
    const { userId } = await auth();
    const { courseId } = await params;
    const { url } = await req.json(); // Gets the file URL sent from the frontend

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Security check: Ensure the user owns the course
    const courseOwner = await db.course.findUnique({
      where: {
        id: courseId,
        userId: userId,
      }
    });

    if (!courseOwner) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Create the attachment record
    const attachment = await db.attachment.create({
      data: {
        url,
        name: url.split("/").pop(), // Extract filename from URL
        courseId: courseId,
      }
    });

    return NextResponse.json(attachment);
  } catch (error) {
    console.log("COURSE_ID_ATTACHMENTS_POST", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}