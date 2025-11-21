import { Course } from "@prisma/client";
import { CourseCard } from "@/components/course-card";

// Define the precise type for the course data fetched from the DB
type CourseWithCategoryAndChapters = Course & {
  category: { name: string } | null;
  chapters: { id: string }[];
};

interface FeaturedCoursesProps {
  courses: CourseWithCategoryAndChapters[];
}

export const FeaturedCourses = ({ courses }: FeaturedCoursesProps) => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4"> {/* <-- ADDED MISSING CONTAINER HERE */}
        <div className="flex justify-between items-center mb-10">
          <h3 className="text-3xl font-bold dark:text-white">
            Popular Courses
          </h3>
          <a 
            href="/search" 
            className="text-sm font-medium hover:underline text-blue-600 dark:text-sky-400"
          >
            View All &rarr;
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              imageUrl={course.imageUrl!}
              chaptersLength={course.chapters.length}
              price={course.price!}
              progress={null}
              category={course.category?.name!}
            />
          ))}
        </div>
      </div>
    </section>
  );
};