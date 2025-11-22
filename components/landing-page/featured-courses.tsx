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
    <section className="py-24 bg-slate-50/50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 max-w-screen-2xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#000000] dark:text-slate-50 mb-2">
              Featured Courses
            </h2>
            <p className="font-medium text-[#000000] dark:text-slate-400">
              Explore our top-rated programs designed for your career growth.
            </p>
          </div>
          <a 
            href="/search" 
            className="group flex items-center gap-x-2 text-sm font-bold text-[#000000] dark:text-blue-400 hover:text-slate-800 dark:hover:text-blue-300 transition-colors"
          >
            View All Courses 
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
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