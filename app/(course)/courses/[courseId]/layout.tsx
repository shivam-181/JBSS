import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { Navbar } from "@/components/navbar"; // We reuse the main navbar for now

export default async function CourseLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ courseId: string }>;
}) {
  const { userId } = await auth();
  const { courseId } = await params;

  if (!userId) {
    return redirect("/");
  }

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

  return (
    <div className="h-full">
      {/* We can add a specific Course Navbar here later */}
      <div className="h-full w-full font-sans">
        {/* For now, we will keep it simple and just render the children. 
           In a real app, you would put a <CourseSidebar /> here on the left.
        */}
        <main className="h-full">
          {children}
        </main>
      </div>
    </div>
  );
}