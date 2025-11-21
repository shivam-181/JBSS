import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { db } from "@/lib/db";

// Import Sections
import { AboutSection } from "@/components/landing-page/about-section";
import { GallerySection } from "@/components/landing-page/gallery-section";
import {Certificates} from "@/components/landing-page/certificates";
import { FeaturedCourses } from "@/components/landing-page/featured-courses";
import { ContactSection } from "@/components/landing-page/contact-section";
import { Footer } from "@/components/landing-page/footer";
import { FeaturesSection } from "@/components/landing-page/impact-section";
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
    <div className="min-h-screen bg-[#e4eaee] flex flex-col bg-background">
      <Navbar />
      
      {/* 1. HERO SECTION */}
      <main className="flex flex-col items-center bg-[#e4eaee] justify-center text-center p-4 pt-32 pb-32 overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none opacity-50 dark:opacity-20" />
        
        <div className="inline-flex items-center gap-2 bg-[#ffffff] text-black px-3 py-1 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm font-medium text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span className="flex h-2  w-2 rounded-full bg-blue-500 animate-pulse" />
          New Batch starting soon
        </div>

        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          Empower Your Future with <br />
          <span className="text-gradient">JBSS Education</span>
        </h1>
        <h2 className="text-lg md:text-2xl font-medium tracking-tight text-gray-600 max-w-3xl animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
  Bihar’s Leading NGO-Driven Skill & Career Institute
</h2>

        <p className="text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          Gain industry-ready skills through BSDM-certified programs like KYP & BSCFA.
Learn from expert trainers, build real digital skills, and unlock new career opportunities.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <Button asChild size="lg" className="rounded-full h-12 px-8 text-base bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/25">
            <Link href="/search">
              Start Learning Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full h-12 px-8 text-base border-border hover:bg-secondary/80">
            View Curriculum
          </Button>
        </div>
      </main>
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