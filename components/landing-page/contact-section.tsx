"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const ContactSection = () => {
  return (
    <section className="py-24 bg-[#e4eaee] container mx-auto px-4 max-w-4xl">
      <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-16 text-center overflow-hidden relative">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/30 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Have Questions?</h2>
          <p className="text-slate-300 mb-10 max-w-lg mx-auto">
            Reach out to our admission team for career guidance and course details.
          </p>
          
          <form className="max-w-md mx-auto space-y-4 text-left">
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="Name" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
              <Input placeholder="Phone" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
            </div>
            <Input placeholder="Email" type="email" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
            <Textarea placeholder="Your Message" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
            <Button size="lg" className="w-full bg-white text-black hover:bg-white/90">
              Send Enquiry
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};