import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { LayoutDashboard, ListChecks, CircleDollarSign, File } from "lucide-react";
import { IconBadge } from "@/components/icon-badge";

// Import all Form Components
import { TitleForm } from "./_components/title-form";
import { DescriptionForm } from "./_components/description-form";
import { ImageForm } from "./_components/image-form";
import { CategoryForm } from "./_components/category-form";
import { PriceForm } from "./_components/price-form";
import { ChaptersForm } from "./_components/chapters-form";
import { AttachmentForm } from "./_components/attachment-form";

// Import the Actions Component
import { CourseActions } from "./_components/course-actions";


export default async function CourseIdPage({
  params
}: {
  params: Promise<{ courseId: string }>
}) {
  const { courseId } = await params;
  const { userId } = await auth();

  if (!userId) {
    return redirect("/");
  }

  // 1. Fetch Categories
  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  // 2. Fetch Course
  const course = await db.course.findUnique({
    where: {
      id: courseId,
      userId
    },
    include: {
      chapters: {
        orderBy: {
          position: "asc",
        },
      },
      attachments: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  if (!course) {
    return redirect("/");
  }

  // 3. Check Completion Status
  const requiredFields = [
    course.title,
    course.description,
    course.imageUrl,
    course.price,
    course.categoryId,
    course.chapters.some(chapter => chapter.isPublished), // Must have at least 1 published chapter
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;
  const completionText = `(${completedFields}/${totalFields})`;

  const isComplete = requiredFields.every(Boolean);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-2xl font-medium">
            Course Setup
          </h1>
          <span className="text-sm text-muted-foreground">
            Complete all fields {completionText}
          </span>
        </div>

        {/* COURSE ACTIONS (Publish / Delete) */}
        <CourseActions
          disabled={!isComplete}
          courseId={courseId}
          isPublished={course.isPublished}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        {/* LEFT COLUMN */}
        <div>
          <div className="flex items-center gap-x-2">
            <IconBadge icon={LayoutDashboard} />
            <h2 className="text-xl font-semibold">
              Customize your course
            </h2>
          </div>
          
          <TitleForm
            initialData={course}
            courseId={course.id}
          />
          
          <DescriptionForm
            initialData={course}
            courseId={course.id}
          />
          
          <ImageForm
            initialData={course}
            courseId={course.id}
          />

          <CategoryForm
            initialData={course}
            courseId={course.id}
            options={categories.map((category) => ({
              label: category.name,
              value: category.id,
            }))}
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={ListChecks} />
              <h2 className="text-xl font-semibold">
                Course chapters
              </h2>
            </div>
            <ChaptersForm
              initialData={course}
              courseId={course.id}
            />
          </div>

          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={CircleDollarSign} />
              <h2 className="text-xl font-semibold">
                Sell your course
              </h2>
            </div>
            <PriceForm
              initialData={course}
              courseId={course.id}
            />
          </div>
          
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={File} />
              <h2 className="text-xl font-semibold">
                Resources & Attachments
              </h2>
            </div>
            {/* We haven't built AttachmentForm yet, keeping placeholder */}
             <div className="p-4 border rounded-md mt-4 bg-slate-100 dark:bg-slate-100">
              <AttachmentForm
          initialData={course}
          courseId={course.id}
        />
            </div>
          </div> 

        </div>
      </div>
    </div>
  );
}