import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { File, Lock } from "lucide-react";

import { db } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { IconBadge } from "@/components/icon-badge";
import MuxPlayer from "@mux/mux-player-react";
import { CourseEnrollButton } from "./_components/course-enroll-button";

export default async function ChapterIdPage({
  params
}: {
  params: Promise<{ courseId: string; chapterId: string }>
}) {
  const { userId } = await auth();
  const { courseId, chapterId } = await params;

  if (!userId) {
    return redirect("/");
  }

  // 1. Fetch Chapter, Course, and MuxData
  const chapter = await db.chapter.findUnique({
    where: {
      id: chapterId,
      isPublished: true,
    },
  });

  const course = await db.course.findUnique({
    where: {
      id: courseId,
    },
    select: {
      price: true,
      purchases: {
        where: {
          userId,
        }
      }
    }
  });

  const muxData = await db.muxData.findUnique({
    where: {
      chapterId: chapterId,
    }
  });

  const userProgress = await db.userProgress.findUnique({
    where: {
      userId_chapterId: {
        userId,
        chapterId,
      }
    }
  });

  if (!chapter || !course) {
    return redirect("/");
  }

  // 2. Check Access Logic
  const purchase = course.purchases[0]; // Since we filtered by userId, this is either the purchase or undefined
  const isLocked = !chapter.isFree && !purchase; 
  const completeOnEnd = !!purchase && !userProgress?.isCompleted; // Logic for auto-completing

  return (
    <div className="p-4 max-w-4xl mx-auto">
      {/* VIDEO PLAYER */}
      <div className="relative aspect-video border rounded-md overflow-hidden bg-slate-100">
        {!isLocked && muxData && (
           <MuxPlayer
             playbackId={muxData.playbackId!}
             className="w-full h-full"
             autoPlay={false}
           />
        )}
        {isLocked && (
           <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-800 text-white gap-y-2">
              <Lock className="h-8 w-8" />
              <p className="text-sm">
                This chapter is locked.
              </p>
           </div>
        )}
      </div>

      {/* HEADER INFO */}
      <div className="p-4 flex flex-col md:flex-row items-center justify-between border rounded-md mt-4 shadow-sm">
        <h2 className="text-2xl font-semibold mb-2">
          {chapter.title}
        </h2>
        {/* Enroll Button Placeholder */}
        {purchase ? (
        <Button variant="outline" className="text-emerald-700 border-emerald-700 hover:bg-emerald-50">
           You own this course
        </Button>
      ) : (
         <CourseEnrollButton
           courseId={courseId}
           price={course.price!}
         />
      )}
      </div>
      
      <Separator className="my-4" />
      
      {/* DESCRIPTION */}
      <div className="mt-4">
         <h3 className="text-lg font-semibold mb-2">Description</h3>
         <div className="text-muted-foreground text-sm">
            {chapter.description}
         </div>
      </div>
    </div>
  );
}