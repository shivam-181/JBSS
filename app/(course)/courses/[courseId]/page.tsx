import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { CoursePaymentProcessing } from "./_components/course-payment-processing";

export default async function CourseIdPage({
  params,
  searchParams
}: {
  params: Promise<{ courseId: string }>;
  searchParams: Promise<{ success?: string }>;
}) {
  const { userId } = await auth();
  const { courseId } = await params;
  const { success } = await searchParams;

  const course = await db.course.findUnique({
    where: {
      id: courseId,
    },
    include: {
      chapters: {
        where: {
          isPublished: true,
        },
        orderBy: {
          position: "asc",
        },
      },
    },
  });

  if (!course) {
    return redirect("/");
  }

  // Check for purchase if we have a success param
  if (userId && success) {
    const purchase = await db.purchase.findUnique({
      where: {
        userId_courseId: {
          userId,
          courseId,
        }
      }
    });

    if (!purchase) {
      return <CoursePaymentProcessing />;
    }
  }

  // Redirect to the first chapter
  if (course.chapters.length > 0) {
    return redirect(`/courses/${course.id}/chapters/${course.chapters[0].id}`);
  }

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-4">
      <h1 className="text-2xl font-bold">Course not ready</h1>
      <p className="text-muted-foreground">This course has no published chapters yet.</p>
    </div>
  );
}