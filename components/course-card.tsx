"use client";

import Image from "next/image";
import Link from "next/link";
import { BookOpen } from "lucide-react";

import { IconBadge } from "@/components/icon-badge";
import { formatPrice } from "@/lib/format";

interface CourseCardProps {
  id: string;
  title: string;
  imageUrl: string;
  chaptersLength: number;
  price: number;
  progress: number | null;
  category: string;
};

export const CourseCard = ({
  id,
  title,
  imageUrl,
  chaptersLength,
  price,
  progress,
  category
}: CourseCardProps) => {
  return (
    <Link href={`/courses/${id}`}>
      <div className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-slate-200/60 dark:border-slate-700/50 bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-xl h-full shadow-md">
        <div className="relative w-full aspect-video overflow-hidden">
          <Image
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            alt={title}
            src={imageUrl}
          />
        </div>
        <div className="flex flex-col p-4 space-y-2">
          <div className="text-lg md:text-base font-bold group-hover:text-sky-700 dark:group-hover:text-sky-400 transition-colors line-clamp-2 text-black">
            {title}
          </div>
          <p className="text-xs font-bold text-[#000000] dark:text-slate-400 uppercase tracking-wide">
            {category}
          </p>
          <div className="flex items-center gap-x-2 text-sm">
            <div className="flex items-center gap-x-1.5 text-[#000000] dark:text-slate-300 font-medium">
              <IconBadge size="sm" icon={BookOpen} />
              <span className="text-xs">
                {chaptersLength} {chaptersLength === 1 ? "Chapter" : "Chapters"}
              </span>
            </div>
          </div>
          
          <div className="pt-2 mt-auto border-t border-slate-200 dark:border-slate-700">
            <p className="text-lg font-bold text-[#000000] dark:text-slate-50">
              {formatPrice(price)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}