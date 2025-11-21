"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const achievements = [
  {
    id: 1,
     title: "Warm Welcome at Community Event",
    image: "https://jbss.org.in/web1adminpanel/uploadgallery/68963d161e175.jpg",
  },
  {
    id: 2,
    title: "Green Tribute to Inspiring Leadership",
    image: "https://jbss.org.in/web1adminpanel/uploadgallery/68ac693eb9998.jpg",
   
  },
  {
    id: 3,
    title: "Community Engagement & Public Outreach",
    image: "https://jbss.org.in/web1adminpanel/uploadgallery/68affe607771a.jpg",
  },
  {
    id: 4,
    title: "Leadership Excellence Recognized",
    image: "https://jbss.org.in/web1adminpanel/uploadgallery/68963cfdb70cc.jpg",
    
  },
  {
    id: 5,
    title: "A Journey of Recognition, Outreach & Excellence",
    image: "https://jbss.org.in/web1adminpanel/uploadgallery/68ac15504e79b.jpg",
  },
];

export const GallerySection = () => {
  return (
    <section className="py-16 bg-[#e4eaee] container mx-auto px-4">
     <h3 className="text-3xl md:text-5xl font-extrabold mb-10 text-center tracking-tight text-primary dark:text-black">
    Our Director
</h3>
      <Carousel
        // 1. ADDED OPTIONS FOR SMOOTHNESS & LOOPING
        opts={{
          align: "start",
          loop: true, // Allows smooth, continuous scrolling in both directions
          duration: 30, // Controls the speed/inertia of the slide transition
        }}
        className="w-full"
      >
        <CarouselContent>
          {achievements.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="border-none shadow-none bg-transparent">
                <CardContent className="flex aspect-[4/5] items-center justify-center p-0 relative overflow-hidden rounded-xl">
  <div className="absolute inset-0 overflow-hidden">
    <Image
      src={item.image}
      alt={item.title}
      fill
      className="object-cover transition-transform duration-700 ease-out hover:scale-110"
    />
  </div>

  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 pt-20">
    <h4 className="text-white font-bold text-xl">{item.title}</h4>
  </div>
</CardContent>

                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* 2. Moved controls inside the container and added visual styling */}
        <CarouselPrevious className="absolute left-[-20px] top-1/2 -translate-y-1/2 hidden md:flex" />
        <CarouselNext className="absolute right-[-20px] top-1/2 -translate-y-1/2 hidden md:flex" />
      </Carousel>
    </section>
  );
};