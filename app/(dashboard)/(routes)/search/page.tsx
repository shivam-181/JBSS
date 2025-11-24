import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Suspense } from "react";

import { db } from "@/lib/db";
import { SearchInput } from "@/components/search-input";
import { getCourses } from "@/actions/get-courses";
import { CoursesList } from "@/components/courses-list";

import { Categories } from "./_components/categories";

export const dynamic = "force-dynamic";

interface SearchPageProps {
  searchParams: Promise<{
    title: string;
    categoryId: string;
  }>
};

export default async function SearchPage({
  searchParams
}: SearchPageProps) {
  const { userId } = await auth();
  
  // Await search params for Next 15
  const { title, categoryId } = await searchParams;

  if (!userId) {
    return redirect("/sign-in");
  }

  const categories = await db.category.findMany({
    orderBy: {
      name: "asc"
    }
  });

  const courses = await getCourses({
    userId,
    title, // Pass the search term
    categoryId // Pass the category filter
  });

  return (
    <>
      <div className="px-6 pt-6 md:hidden md:mb-0 block">
        <Suspense>
          <SearchInput />
        </Suspense>
      </div>
      <div className="p-6 space-y-4">
        <Suspense>
          <Categories items={categories} />
        </Suspense>
        
        {/* RENDER THE COURSE LIST */}
        <CoursesList items={courses} />
      </div>
    </>
  );
}