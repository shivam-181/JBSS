import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/landing-page/footer";

const AboutPage = () => {
  return ( 
    <div className="h-full bg-[#e4eaee]">
      <Navbar />
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">About JBSS</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Empowering Bihar's youth through skill development, technology, and career-focused education.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50/50 p-8 rounded-2xl shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed">
                To bridge the digital divide in Bihar by providing accessible, high-quality computer education and vocational training. We aim to equip students with the practical skills needed to thrive in the modern workforce, fostering economic independence and community growth.
              </p>
            </div>
            <div className="bg-slate-50/50 p-8 rounded-2xl shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed">
                A digitally literate society where every individual has the opportunity to realize their potential. We envision JBSS as a beacon of excellence in skill development, creating a generation of confident, skilled professionals ready to lead.
              </p>
            </div>
          </div>

          {/* Who We Are */}
          <div className="bg-slate-900 text-white p-8 md:p-12 rounded-3xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-3xl rounded-full pointer-events-none" />
            <h2 className="text-3xl font-bold mb-6 relative z-10">Who We Are</h2>
            <div className="space-y-4 text-slate-300 relative z-10 leading-relaxed">
              <p>
                Jan Bhawna Seva Sansthan (JBSS) is a leading NGO-driven educational institute committed to social upliftment through education. Recognized for our excellence in delivering government-certified programs like KYP (Kushal Yuva Program) and BSCFA, we have trained thousands of students across the region.
              </p>
              <p>
                Our curriculum goes beyond textbooks. We focus on holistic development, combining technical expertise with soft skills, communication training, and career counseling. Our state-of-the-art labs and experienced faculty ensure that every student receives the best possible learning experience.
              </p>
            </div>
          </div>

          {/* Stats/Impact */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-6 bg-slate-50/50 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-1">5000+</div>
              <div className="text-sm text-slate-500">Students Trained</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-1">95%</div>
              <div className="text-sm text-slate-500">Placement Support</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-1">50+</div>
              <div className="text-sm text-slate-500">Expert Trainers</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-1">10+</div>
              <div className="text-sm text-slate-500">Years of Excellence</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
   );
}
 
export default AboutPage;
