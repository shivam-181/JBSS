"use client";

import { motion } from "framer-motion";
import { ThumbsUp, Trophy, SlidersHorizontal, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

// Define the static features based on your image
const features = [
  {
    icon: Trophy,
    title: "Experienced & Certified Faculty",
    description: "Our instructors are industry veterans, bringing real-world knowledge and certified expertise directly to the classroom.",
  },
  {
    icon: SlidersHorizontal,
    title: "Practical & Job-Focused Training",
    description: "We focus heavily on landmark projects and simulations, ensuring you gain hands-on, job-ready skills from day one.",
  },
  {
    icon: ThumbsUp,
    title: "Affordable Fees",
    description: "Quality education should be accessible to all. We maintain competitive and affordable fees without compromising standards.",
  },
  {
    icon: Users,
    title: "Well-Equipped Computer Labs",
    description: "Access state-of-the-art computer labs with the latest hardware and software necessary for advanced technical training.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-12 text-center tracking-tight"
        >
          We Deliver Landmark Projects
        </motion.h3>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white dark:bg-card/30 border border-slate-200 dark:border-border/50 backdrop-blur-sm"
            >
              <feature.icon className="w-8 h-8 md:w-10 md:h-10 mb-4 text-blue-600 dark:text-blue-400" />
              <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-50">
                {feature.title}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Descriptive text */}
        <p className="mt-16 max-w-4xl mx-auto text-lg text-center text-slate-600 dark:text-slate-400">
          At our institute, we offer a wide range of courses and programs to meet the needs of students at all levels. Whether you are just starting out in your career or looking to enhance your existing skills, we have a program that can help you achieve your goals.
        </p>
      </div>
    </section>
  );
};