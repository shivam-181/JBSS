import { db } from "@/lib/db";
import { redirect } from "next/navigation";

export default async function CourseIdPage({
  params
}: {
  params: Promise<{ courseId: string }>
}) {
  const { courseId } = await params;

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