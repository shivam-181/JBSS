import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { File, Lock, ArrowLeft, Home, CheckCircle } from "lucide-react";

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
    <div className="p-4 md:p-8 max-w-6xl mx-auto">
      {/* NAVIGATION BAR */}
      <div className="flex items-center justify-between mb-6">
        <Button asChild className="bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100 border border-slate-900 dark:border-slate-200 transition-all">
          <a 
            href={`/search`} 
            className="flex items-center gap-x-2 font-bold"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Course
          </a>
        </Button>
        <Button asChild className="bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100 border border-slate-900 dark:border-slate-200 transition-all">
          <a 
            href="/" 
            className="flex items-center gap-x-2 font-bold"
          >
            <Home className="h-4 w-4" />
            Home
          </a>
        </Button>
      </div>

      {/* VIDEO PLAYER */}
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 shadow-2xl ring-1 ring-slate-900/5 dark:ring-slate-50/10">
        {!isLocked && muxData && (
           <MuxPlayer
             playbackId={muxData.playbackId!}
             className="w-full h-full"
             autoPlay={false}
             accentColor="#2563eb"
           />
        )}
        {isLocked && (
           <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/90 backdrop-blur-sm text-white gap-y-4">
              <div className="p-4 rounded-full bg-slate-800/50 ring-1 ring-white/10">
                <Lock className="h-8 w-8 text-slate-400" />
              </div>
              <p className="text-lg font-medium text-slate-200">
                This chapter is locked
              </p>
           </div>
        )}
      </div>

      {/* CHAPTER DETAILS */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-6 gap-y-4">
        <div className="flex flex-col gap-y-2">
          <h2 className="text-2xl md:text-3xl font-bold !text-black dark:!text-slate-50">
            {chapter.title}
          </h2>
          <p className="!text-black dark:!text-slate-400 text-sm font-medium">
            Chapter {chapter.position}
          </p>
        </div>
        {purchase ? (
          <div className="flex items-center gap-x-2 text-emerald-600 dark:text-emerald-400 font-medium">
           <CheckCircle className="h-4 w-4" />
           Purchased
        </div>
      ) : (
         <CourseEnrollButton
           courseId={courseId}
           price={course.price!}
         />
      )}
      </div>
      
      <Separator className="my-8 bg-slate-200 dark:bg-slate-800" />
      
      {/* DESCRIPTION */}
      <div className="prose prose-slate dark:prose-invert max-w-none">
         <h3 className="text-xl font-bold mb-4 !text-black dark:!text-slate-50">About this chapter</h3>
         <div className="!text-black dark:!text-slate-300 leading-relaxed font-medium">
            {chapter.description || "No description provided."}
         </div>
      </div>
    </div>
  );
}