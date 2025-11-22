import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";

// Import the new client wrapper component
import { ClientTableWrapper } from "./_components/client-table-wrapper"; 
import { columns } from "./_components/columns";


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
      <ClientTableWrapper columns={columns} data={courses} />
    </div>
  );
}