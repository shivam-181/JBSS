"use client";

import Link from "next/link";

export const IsoButton = () => {
  return (
    <Link 
      href="https://jbss.org.in/files/ISO_Certified.pdf" 
      target="_blank"
      className="inline-flex flex-col items-center justify-center px-6 py-2 bg-[#0047AB] border-2 border-[#FFA500] rounded-full hover:scale-105 transition-transform shadow-lg group"
    >
      <span className="text-white font-bold text-sm md:text-base tracking-wider leading-none">
        ISO 9001:2015
      </span>
      <span className="text-white font-bold text-xs md:text-sm tracking-widest leading-none mt-0.5">
        CERTIFIED
      </span>
    </Link>
  );
};
