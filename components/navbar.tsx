"use client";

import { Suspense } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import { LogOut } from "lucide-react";
import { SignedIn, SignedOut, UserButton, useClerk, useAuth } from "@clerk/nextjs";
import { SearchInput } from "@/components/search-input"; 
import { isTeacher } from "@/lib/teacher";
import { NavigationButtons } from "@/components/navigation-buttons";

export function Navbar() {
  const { userId } = useAuth();
  const { openSignIn } = useClerk();
  const pathname = usePathname();

  // Check if we are on the teacher side or player side
  const isTeacherPage = pathname?.startsWith("/teacher");
  const isPlayerPage = pathname?.includes("/chapters");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/70 shadow-sm">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4">
        
        {/* Logo Section & Navigation Buttons */}
        <div className="flex items-center gap-2 mr-4">
          <NavigationButtons />
          <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
            <Image
              src="/logo.png"
              alt="JBSS Logo"
              width={250}
              height={80}
              className="object-contain cursor-pointer"
            />
          </Link>
          
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
          <div className="hidden md:block flex-1 max-w-sm ml-auto mr-4">
             <Suspense>
               <SearchInput />
             </Suspense>
          </div>
        </div>

        {/* Right Side (Auth & Utils) */}
        <div className="flex items-center gap-4 ml-auto">
          
          {/* TEACHER MODE TOGGLE */}
          {/* Only show if the user is actually the Admin defined in .env */}
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
          
          <SignedOut>
            <Button variant="ghost" size="sm" onClick={() => openSignIn()}>
              Sign In
            </Button>
            <Button 
              size="sm" 
              className="bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20"
              onClick={() => openSignIn()}
            >
               Get Started
            </Button>
          </SignedOut>

          <SignedIn>
            <UserButton 
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "h-10 w-10"
                }
              }}
            />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}