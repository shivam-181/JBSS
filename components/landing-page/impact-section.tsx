import { GraduationCap, Users, Briefcase, Award } from "lucide-react";
import Image from "next/image";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: "10,000+ Students Trained",
      description: "Empowering youth across Bihar with digital and vocational skills since 2007."
    },
    {
      icon: Briefcase,
      title: "Placement Assistance",
      description: "Dedicated support to help certified candidates find employment opportunities."
    },
    {
      icon: Award,
      title: "BSDM Certified",
      description: "Authorized training partner for Kushal Yuva Program (KYP) and other state initiatives."
    },
    {
      icon: GraduationCap,
      title: "Expert Faculty",
      description: "Learn from experienced trainers committed to your professional growth."
    },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Why Choose JBSS?
          </h2>
          <p className="text-lg text-black dark:text-slate-100 font-medium">
            We are committed to bridging the skill gap and creating a future-ready workforce.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side: Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
              <Image
                src="/impact-final.jpg"
                alt="Students training in computer lab"
                width={800}
                height={450}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white font-medium text-lg">
                  Real skills for real careers.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Features Grid */}
          <div className="w-full lg:w-1/2 grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-slate-950 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md transition-all hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
