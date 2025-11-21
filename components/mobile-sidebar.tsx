"use client";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Sidebar } from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export const MobileSidebar = () => {
  // Fix hydration mismatch by ensuring this only renders on client
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-card">
        <div className="sr-only">
            <SheetTitle>Mobile Navigation Menu</SheetTitle>
        </div>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};