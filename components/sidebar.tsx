"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Compass, 
  BookOpen, 
  BarChart, 
  ListChecks
} from "lucide-react";
import { isTeacher } from "@/lib/teacher";

const guestRoutes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Courses",
    icon: Compass,
    href: "/search",
    color: "text-violet-500",
  },
];

const teacherRoutes = [
  {
    label: "Courses",
    icon: ListChecks,
    href: "/teacher/courses",
    color: "text-sky-500",
  },
  {
    label: "Analytics",
    icon: BarChart,
    href: "/teacher/analytics",
    color: "text-violet-500",
  },
];

export const Sidebar = () => {
  const pathname = usePathname();
  const { userId } = useAuth();
  
  // Check if current route is a teacher route
  const isTeacherPage = pathname?.includes("/teacher");
  
  // Calculate which routes to show
  const routes = isTeacherPage ? teacherRoutes : guestRoutes;

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-card border-r border-border text-card-foreground">
      <div className="px-3 py-2 flex-1">
        <Link href="/" className="flex items-center pl-2 mb-10">
             <Image
               src="/jbsslogo.png"
               alt="JBSS Logo"
               width={250}
               height={80}
               className="object-contain object-left"
             />
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                pathname === route.href ? "text-primary bg-primary/10" : "text-muted-foreground"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* DYNAMIC FOOTER */}
      <div className="px-3 py-2">
         <div className="p-3 text-xs text-center text-muted-foreground border-t border-border pt-4">
            {isTeacherPage ? "Teacher Portal v1.0" : "Student Portal v1.0"}
         </div>
      </div>
    </div>
  );
};