"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/landing-page/footer";
import { Target, Users, Award, History as HistoryIcon } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="h-full bg-[#e4eaee]">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12 max-w-5xl">
        <div className="space-y-8">
          {/* Header Section */}
          <div className="text-center space-y-4 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">About JBSS</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Jan Bhawna Sewa Sansthan: Dedicated to empowering Bihar's youth through education, skill development, and community welfare since 2007.
            </p>
          </div>

          {/* Mission, Vision, Legacy Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To uplift the underprivileged sections of society by providing quality education, vocational training, and employment opportunities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                A self-reliant and skilled Bihar where every youth has the capability, confidence, and opportunity to contribute meaningfully.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Our Legacy</h3>
              <p className="text-slate-600 leading-relaxed">
                Registered in 2007 (Reg No. 566), trusted partner of BSDM, running flagship programs like KYP and BSCFA.
              </p>
            </div>
          </div>

          {/* Detailed Content Card */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl font-bold text-slate-900">
                  Transforming Lives Through <span className="text-blue-600">Skill & Knowledge</span>
                </h2>
                <div className="max-w-none text-slate-600 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-slate-900 [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:mb-4 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_li]:mb-1 [&_strong]:font-semibold [&_strong]:text-slate-900">
                  <p>
                    Jan Bhawna Sewa Sansthan (JBSS) is more than just an NGO; it is a movement for social change. Based in Jamui, Bihar, we have been working tirelessly for over a decade to bridge the gap between education and employability.
                  </p>
                  <p>
                    As an accredited training partner of the <strong>Bihar Skill Development Mission (BSDM)</strong>, we operate state-of-the-art Skill Development Centers (SDCs).
                  </p>
                  
                  <h3>Our Impact</h3>
                  <ul>
                    <li><strong>10,000+</strong> Students Trained & Certified</li>
                    <li><strong>85%</strong> Placement Success Rate</li>
                    <li><strong>2</strong> Active Skill Development Centers</li>
                    <li><strong>15+</strong> Years of Community Service</li>
                  </ul>

                  <h3>Beyond Skill Development</h3>
                  <p>
                    We are actively involved in holistic community development:
                  </p>
                  <ul>
                    <li><strong>Health & Family Welfare:</strong> Organizing free medical camps.</li>
                    <li><strong>Women Empowerment:</strong> Special vocational batches for women.</li>
                    <li><strong>Environmental Awareness:</strong> Tree plantation drives.</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex-1 w-full space-y-6">
                <div className="aspect-video rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm relative">
                  <img 
                    src="https://jbss.org.in/web1adminpanel/uploadgallery/68963d07969de.jpg" 
                    alt="JBSS Campus" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-3 mb-4">
                    <HistoryIcon className="w-6 h-6 text-orange-500" />
                    <h3 className="font-bold text-slate-900">Our Journey</h3>
                  </div>
                  <div className="space-y-4 relative pl-4 border-l-2 border-slate-200">
                    <div className="relative">
                      <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-blue-500 border-2 border-white"></div>
                      <p className="text-sm font-bold text-slate-900">2007</p>
                      <p className="text-sm text-slate-600">Established & Registered as an NGO.</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-blue-500 border-2 border-white"></div>
                      <p className="text-sm font-bold text-slate-900">2016</p>
                      <p className="text-sm text-slate-600">Partnered with BSDM for KYP.</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-blue-500 border-2 border-white"></div>
                      <p className="text-sm font-bold text-slate-900">2020</p>
                      <p className="text-sm text-slate-600">Expanded to 2 Centers in Jamui.</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-blue-500 border-2 border-white"></div>
                      <p className="text-sm font-bold text-slate-900">2025</p>
                      <p className="text-sm text-slate-600">Launching Advanced IT & AI Courses.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
