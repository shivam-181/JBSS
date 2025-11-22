"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export const NavigationButtons = () => {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <div className="flex items-center gap-2 mr-2">
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => router.back()} 
        className="h-9 w-9 bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-900 dark:text-white"
        title="Go Back"
      >
        <ArrowLeft className="h-4 w-4" />
      </Button>
      <Link href="/">
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-9 w-9 bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-900 dark:text-white"
          title="Go Home"
        >
          <Home className="h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
};
