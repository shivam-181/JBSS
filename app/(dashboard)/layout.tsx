"use client";

import { Navbar } from "@/components/navbar";
import { Suspense } from "react";
import { SearchInput } from "@/components/search-input"; 
import { Sidebar } from "@/components/sidebar";
import { MobileSidebar } from "@/components/mobile-sidebar";
import { UserButton, useAuth } from "@clerk/nextjs";
import { ModeToggle } from "@/components/mode-toggle";
import { Toaster } from "@/components/ui/sonner";
import { NavigationButtons } from "@/components/navigation-buttons";
import { usePathname } from "next/navigation";
import { isTeacher } from "@/lib/teacher";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

const DashboardLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const { userId } = useAuth();
  const isTeacherPage = pathname?.startsWith("/teacher");

  return (
    <div className="h-full relative">
      {/* Desktop Sidebar (Hidden on Mobile) */}
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <main className="md:pl-72 pb-10">
        {/* Dashboard Header */}
        <div className="flex items-center p-4 border-b h-full gap-x-4 sticky top-0 z-50 bg-background/50 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
           <MobileSidebar />
           <NavigationButtons />
           
           {/* Show Search on Desktop only */}
           <div className="hidden md:block">
             <Suspense>
               <SearchInput />
             </Suspense>
           </div>

            {/* Home and Courses Links */}
           <div className="hidden md:flex items-center gap-x-2 ml-6">
            <Link href="/">
              <Button size="sm" variant="ghost">
                Home
              </Button>
            </Link>
            <Link href="/search">
              <Button size="sm" variant="ghost">
                Courses
              </Button>
            </Link>
          </div>

           {/* Moved 'w-full' to 'ml-auto' to push content to the right properly */}
           <div className="ml-auto flex items-center gap-x-4">
              {/* Teacher Mode Toggle */}
              {isTeacher(userId) && (
                <Link href={isTeacherPage ? "/dashboard" : "/teacher/courses"}>
                  <Button size="sm" variant="ghost">
                    {isTeacherPage ? (
                      <div className="flex items-center">
                        <LogOut className="h-4 w-4 mr-2" />
                        Exit Teacher Mode
                      </div>
                    ) : (
                      "Teacher Mode"
                    )}
                  </Button>
                </Link>
              )}

              <ModeToggle />
              <UserButton afterSignOutUrl="/" />
           </div>
        </div>
        
        {/* Page Content */}
        <div className="p-8">
           {children}
        </div>
      </main>
      
      {/* Note: Ideally Toaster should be in app/layout.tsx (Root), 
          but if you prefer it here, make sure it's not duplicated in Root! */}
      {/* <Toaster /> */} 
    </div>
  );
}

export default DashboardLayout;