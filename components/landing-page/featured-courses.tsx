import { Course } from "@prisma/client";
import { CourseCard } from "@/components/course-card";
import Image from "next/image";
import Link from "next/link";

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
    <section className="py-24 bg-slate-50/50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-screen-2xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="flex items-center gap-6">
             <div className="hidden md:block relative w-24 h-24 shrink-0">
                <Image 
                  src="/featured-learning.png" 
                  alt="Learning illustration" 
                  fill 
                  className="object-contain drop-shadow-md"
                />
             </div>
             <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-2">
                  Featured Courses
                </h2>
                <p className="font-medium text-slate-700 dark:text-slate-300 text-lg">
                  Explore our top-rated programs designed for your career growth.
                </p>
             </div>
          </div>
          
          <Link 
            href="/search" 
            className="group flex items-center gap-x-2 text-sm font-bold text-black transition-colors bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full"
          >
            View All Courses 
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
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