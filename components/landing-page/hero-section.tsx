import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IsoButton } from "@/components/landing-page/iso-button";

export const HeroSection = () => {
  return (
    <main className="flex flex-col items-center justify-center text-center p-6 pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden relative bg-gradient-to-b from-background to-secondary/20 dark:from-background dark:to-slate-900/50">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-final.jpg"
          alt="Students learning"
          fill
          className="object-cover object-center opacity-[0.59] dark:opacity-50"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] bg-blue-500/10 dark:bg-blue-500/20 blur-[120px] rounded-full pointer-events-none z-0" />
      
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/50 bg-background/50 backdrop-blur-md text-sm font-medium text-black mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 shadow-sm">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
        </span>
        New Batch starting soon
      </div>

      <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-5xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 z-10">
        Empower Your Future with <br className="hidden md:block" />
        <span className="text-black">
          JBSS Education
        </span>
      </h1>
      
      <h2 className="text-lg md:text-2xl font-medium tracking-tight text-black dark:text-slate-100 max-w-3xl animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300 z-10 drop-shadow-sm">
        Bihar’s Leading NGO-Driven Skill & Career Institute
      </h2>

      <p className="text-lg text-slate-950 dark:text-slate-100 max-w-2xl mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 mt-6 z-10 font-bold drop-shadow-sm">
        Gain industry-ready skills through BSDM-certified programs like KYP & BSCFA.
        Learn from expert trainers, build real digital skills, and unlock new career opportunities.
      </p>

      <div className="flex flex-col items-center gap-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 z-10">
        <IsoButton />
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="rounded-full h-12 px-8 text-base bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-105">
            <Link href="/search">
              Start Learning Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-8 text-base border-slate-200 dark:border-slate-700 hover:bg-secondary/80 transition-all hover:scale-105 bg-background/50 backdrop-blur-sm">
            <Link href="/search">
              View Curriculum
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
};
