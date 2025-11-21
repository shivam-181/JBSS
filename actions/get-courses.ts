import { Category, Course } from "@prisma/client";
import { db } from "@/lib/db";

type GetCourses = {
  userId: string;
  title?: string;
  categoryId?: string;
};

export const getCourses = async ({
  userId,
  title,
  categoryId
}: GetCourses) => {
  try {
    const courses = await db.course.findMany({
      where: {
        isPublished: true,
        title: {
          contains: title,
          mode: "insensitive", // Case insensitive search
        },
        categoryId,
      },
      include: {
        category: true,
        chapters: {
          where: {
            isPublished: true,
          },
          select: {
            id: true,
          }
        },
        purchases: { // We haven't created Purchase model yet, but we will need this structure logic soon.
            where: {
                userId,
            }
        }
      },
      orderBy: {
        createdAt: "desc",
      }
    });

    // For now, we just return the courses with a placeholder for progress
    const coursesWithProgress = await Promise.all(
      courses.map(async (course) => {
        // We will calculate real progress later. For now, 0 or null.
        return {
          ...course,
          progress: null, 
        };
      })
    );

    return coursesWithProgress;

  } catch (error) {
    console.log("[GET_COURSES]", error);
    return [];
  }
};