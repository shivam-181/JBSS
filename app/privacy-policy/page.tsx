import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/landing-page/footer";
import { Shield } from "lucide-react";

const PrivacyPolicyPage = () => {
  return (
    <div className="h-full bg-[#e4eaee]">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="space-y-8">
          {/* Header Section */}
          <div className="text-center space-y-4 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Privacy Policy</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Last Updated: November 24, 2025
            </p>
          </div>

          {/* Content Card */}
          <div className="bg-slate-50/50 p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
            <div className="max-w-none text-slate-700 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-slate-900 [&_h3]:mt-8 [&_h3]:mb-4 [&_p]:mb-4 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_li]:mb-2 [&_strong]:font-semibold [&_strong]:text-slate-900">
              
              <div className="flex items-center gap-4 mb-8 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-slate-700 m-0 !mb-0">
                  Your privacy is critically important to us. This policy outlines how Jan Bhawna Sewa Sansthan (JBSS) collects, uses, and protects your data.
                </p>
              </div>

              <h3>1. Information We Collect</h3>
              <p>
                We collect information to provide better services to all our users. This includes:
              </p>
              <ul>
                <li><strong>Personal Information:</strong> Name, email address, phone number, Aadhaar number (for KYP registration), and other details you provide when registering for courses or contacting us.</li>
                <li><strong>Academic Records:</strong> Educational qualifications, mark sheets, and certificates required for admission into BSDM-approved programs.</li>
                <li><strong>Usage Data:</strong> Information about how you use our website, such as pages visited, time spent, and device information.</li>
              </ul>

              <h3>2. How We Use Information</h3>
              <p>
                We use the information we collect for various purposes, including:
              </p>
              <ul>
                <li>To facilitate enrollment in the Kushal Yuva Program (KYP) and other skill development courses.</li>
                <li>To process your certification and communicate with the Bihar Skill Development Mission (BSDM).</li>
                <li>To notify you about changes to our services, exam schedules, and placement drives.</li>
                <li>To provide customer support and resolve technical issues.</li>
              </ul>

              <h3>3. Data Sharing and Disclosure</h3>
              <p>
                We do not sell your personal data. However, we may share your information with:
              </p>
              <ul>
                <li><strong>Government Bodies:</strong> As a registered training partner, we are mandated to share student data with the Bihar Skill Development Mission (BSDM) for registration, attendance tracking, and certification purposes.</li>
                <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our website and conducting online assessments.</li>
                <li><strong>Legal Requirements:</strong> If required by law or in response to valid requests by public authorities.</li>
              </ul>

              <h3>4. Cookies and Tracking Technologies</h3>
              <p>
                We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>

              <h3>5. Data Retention</h3>
              <p>
                We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. Student records are maintained as per the guidelines issued by BSDM and relevant educational authorities.
              </p>

              <h3>6. Your Data Rights</h3>
              <p>
                You have the right to access, update, or delete the information we have on you. If you wish to exercise these rights, please contact our administration office. Note that certain data related to government certification cannot be deleted once processed.
              </p>

              <h3>7. Data Security</h3>
              <p>
                The security of your data is important to us. We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h3>8. Contact Us</h3>
              <p>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul>
                <li>By email: mcccom12@gmail.com</li>
                <li>By phone: +91 9431468630</li>
                <li>Address: Jan Bhawna Sewa Sansthan, Jamui, Bihar</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
 
export default PrivacyPolicyPage;
