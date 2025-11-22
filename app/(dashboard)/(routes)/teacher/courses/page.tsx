import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import dynamic from "next/dynamic";
import React from "react";
import { Course } from "@prisma/client";

import { columns } from "./_components/columns";
import { DataTableProps } from "./_components/data-table";

// Dynamically import the DataTable component, disabling Server-Side Rendering (SSR)
const ClientTableWrapper = dynamic(
  () => import("./_components/data-table").then((mod) => mod.DataTable),
  { ssr: false }
) as <TData, TValue>(props: DataTableProps<TData, TValue>) => React.JSX.Element;

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
      <ClientTableWrapper<Course, unknown> columns={columns} data={courses} />
    </div>
  );
}