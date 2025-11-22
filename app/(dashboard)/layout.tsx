import { Navbar } from "@/components/navbar";
import { Suspense } from "react";
import { SearchInput } from "@/components/search-input"; 
import { Sidebar } from "@/components/sidebar";
import { MobileSidebar } from "@/components/mobile-sidebar";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/mode-toggle";
import { Toaster } from "@/components/ui/sonner";
import { NavigationButtons } from "@/components/navigation-buttons";

const DashboardLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
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

           {/* Moved 'w-full' to 'ml-auto' to push content to the right properly */}
           <div className="ml-auto flex items-center gap-x-4">
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