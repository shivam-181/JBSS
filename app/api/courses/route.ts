import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

// HANDLES: POST /api/courses
export async function POST(req: Request) {
  try {
    const { userId } = await auth(); // Get the user ID from Clerk
    const { title } = await req.json(); // Get the title from the request body

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // 1. Create the course record in the database
    const course = await db.course.create({
      data: {
        userId, // The creator's ID
        title,
      },
    });

    // 2. Return the new course object (including its ID)
    return NextResponse.json(course);
  } catch (error) {
    console.log("[COURSES_POST]", error);
    // Return 500 if anything goes wrong (e.g., database failure)
    return new NextResponse("Internal Error", { status: 500 });
  }
}