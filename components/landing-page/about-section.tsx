"use client";

import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter"
        >
          Empowering Education, <br className="hidden md:block" />
          <span className="text-blue-600">Skill. Empower. Elevate.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          Jan Bhawna Sewa Sansthan, Jamui, established on 12 July 2007 (Registration No. 566), is a trusted and registered NGO dedicated to advancing education, skill development, and community welfare in Bihar.

As an accredited training partner of the Bihar Skill Development Mission (BSDM), the institute successfully operates flagship programs such as the Kushal Yuva Program (KYP) and Basic Skill Certificate in Financial Accounting (BSCFA). These initiatives empower youth with essential digital, communication, and employability skills—enhancing their readiness for modern careers.

Our organization continues to work across key development areas including computer literacy, vocational education, health & family welfare, urban and rural development, and poverty alleviation, with a mission to uplift communities through skill, knowledge, and opportunity.
        </motion.p>
      </div>
    </section>
  );
};