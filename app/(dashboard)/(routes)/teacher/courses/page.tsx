import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import React from "react"; // <--- Ensure this import exists!

import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";

export default async function CoursesPage() {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/");
  }

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
      {/* 1. WRAPPER FOR CLIENT-SIDE LOGIC */}
      <React.Suspense fallback={<div>Loading courses...</div>}>
        <DataTable columns={columns} data={courses} />
      </React.Suspense>
    </div>
  );
}