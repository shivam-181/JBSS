"use server";

import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function simulatePurchase(courseId: string) {
  // SAFETY CHECK: This action only works in development mode
  if (process.env.NODE_ENV !== "development") {
    throw new Error("This action is only available in development mode");
  }

  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const course = await db.course.findUnique({
    where: {
      id: courseId,
    }
  });

  if (!course) {
    throw new Error("Course not found");
  }

  const existingPurchase = await db.purchase.findUnique({
    where: {
      userId_courseId: {
        userId,
        courseId,
      }
    }
  });

  if (existingPurchase) {
    return { success: true, message: "Already purchased" };
  }

  await db.purchase.create({
    data: {
      courseId: courseId,
      userId: userId,
    }
  });

  revalidatePath(`/courses/${courseId}`);
  return { success: true };
}
