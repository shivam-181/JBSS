import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Eye, LayoutDashboard, Video } from "lucide-react";

import { db } from "@/lib/db";
import { IconBadge } from "@/components/icon-badge";

// Import the forms we have built
import { ChapterTitleForm } from "./_components/chapter-title-form";
import { ChapterVideoForm } from "./_components/chapter-video-form";
import { ChapterActions } from "./_components/chapter-actions"; // <--- New Import
import { ChapterDescriptionForm } from "./_components/chapter-description-form";

export default async function ChapterIdPage({
  params
}: {
  params: Promise<{ courseId: string; chapterId: string }>
}) {
  const { courseId, chapterId } = await params;
  const { userId } = await auth();

  if (!userId) {
    return redirect("/");
  }

  const chapter = await db.chapter.findUnique({
    where: {
      id: chapterId,
      courseId: courseId
    },
    include: {
      muxData: true,
    },
  });

  if (!chapter) {
    return redirect("/");
  }

  // Define what fields are required to Publish
  const requiredFields = [
    chapter.title,
    chapter.description,
    chapter.videoUrl,
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;
  const completionText = `(${completedFields}/${totalFields})`;

  // Check if ready to publish
  const isComplete = requiredFields.every(Boolean);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <div className="w-full">
          <Link
            href={`/teacher/courses/${courseId}`}
            className="flex items-center text-sm hover:opacity-75 transition mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to course setup
          </Link>
          
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col gap-y-2">
              <h1 className="text-2xl font-medium">
                Chapter Creation
              </h1>
              <span className="text-sm text-muted-foreground">
                Complete all fields {completionText}
              </span>
            </div>
            
            {/* ACTIONS BAR (Publish / Delete) */}
            <ChapterActions
              disabled={!isComplete}
              courseId={courseId}
              chapterId={chapterId}
              isPublished={chapter.isPublished}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        {/* LEFT COLUMN */}
        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={LayoutDashboard} />
              <h2 className="text-xl font-semibold">
                Customize your chapter
              </h2>
            </div>
            
            <ChapterTitleForm
              initialData={chapter}
              courseId={courseId}
              chapterId={chapterId}
            />

            {/* Placeholder for Description Form - You can clone the Course Description form later */}
           <ChapterDescriptionForm
          initialData={chapter}
          courseId={courseId}
          chapterId={chapterId}
        />
          </div>
          
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={Eye} />
              <h2 className="text-xl font-semibold">
                Access Settings
              </h2>
            </div>
            {/* Placeholder for Access Form (Free Preview toggle) */}
            <div className="p-4 border rounded-md mt-4 bg-slate-100 dark:bg-slate-100">
               <p className="text-sm text-muted-foreground">Access Settings Form (Coming Soon)</p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div>
          <div className="flex items-center gap-x-2">
            <IconBadge icon={Video} />
            <h2 className="text-xl font-semibold">
              Add a video
            </h2>
          </div>
          
          <ChapterVideoForm
            initialData={chapter}
            chapterId={chapterId}
            courseId={courseId}
          />
        </div>
      </div>
    </div>
  );
}