import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { Course } from "@prisma/client";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

import { columns } from "./_components/columns";
import { ClientTableWrapper } from "./_components/client-table-wrapper";

export default async function CoursesPage() {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/");
  }

  // Ensure the database query runs on the server (faster)
  const courses = await db.course.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="p-6">
      {/* Pass the server-fetched data to the client wrapper */}
      <Suspense fallback={<div>Loading courses...</div>}>
        <ClientTableWrapper<Course, unknown> columns={columns} data={courses} />
      </Suspense>
    </div>
  );
}