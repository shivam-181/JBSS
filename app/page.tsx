import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { db } from "@/lib/db";

// Import Sections
import { AboutSection } from "@/components/landing-page/about-section";
import { GallerySection } from "@/components/landing-page/gallery-section";
import {Certificates} from "@/components/landing-page/certificates";
import { IsoButton } from "@/components/landing-page/iso-button";
import { HeroSection } from "@/components/landing-page/hero-section";
import { FeaturedCourses } from "@/components/landing-page/featured-courses";
import { ContactSection } from "@/components/landing-page/contact-section";
import { Footer } from "@/components/landing-page/footer";
import { FeaturesSection } from "@/components/landing-page/features-section";
export default async function Home() {
  // Fetch top 4 courses for the featured section
  const courses = await db.course.findMany({
    where: { isPublished: true },
    take: 4,
    orderBy: { createdAt: "desc" },
    include: {
      category: true,
      chapters: {
        where: { isPublished: true },
        select: { id: true },
      },
    },
  });

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-blue-500/30">
      <Navbar />
      
      {/* 1. HERO SECTION */}
      <HeroSection />
      {/* 2. FEATURES SECTION (NEW POSITION) */}
      <FeaturesSection />

      {/* 2. ABOUT SECTION */}
      <AboutSection />

      {/* 3. GALLERY CAROUSEL */}
      <GallerySection />
    {/* Certificates */}
      <Certificates/>

      

      {/* 4. FEATURED COURSES */}
      <FeaturedCourses courses={courses} />

      {/* 5. CONTACT FORM */}
      <ContactSection />

      {/* 6. FOOTER */}
      <Footer />
    </div>
  );
}