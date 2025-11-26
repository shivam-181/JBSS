import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/landing-page/footer";
import { FileText } from "lucide-react";

const TermsOfServicePage = () => {
  return (
    <div className="h-full bg-[#e4eaee]">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12 max-w-5xl">
        <div className="space-y-8">
          {/* Header Section */}
          <div className="text-center space-y-4 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Terms of Service</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Effective Date: November 24, 2025
            </p>
          </div>

          {/* Content Card */}
          <div className="bg-slate-50/50 p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
            <div className="max-w-none text-slate-700 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-slate-900 [&_h3]:mt-8 [&_h3]:mb-4 [&_p]:mb-4 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_li]:mb-2 [&_strong]:font-semibold [&_strong]:text-slate-900">
              
              <div className="flex items-center gap-4 mb-8 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <div className="p-2 bg-emerald-50 rounded-lg">
                  <FileText className="w-6 h-6 text-emerald-600" />
                </div>
                <p className="text-sm font-medium text-slate-700 m-0 !mb-0">
                  Please read these terms carefully before using our services. By enrolling, you agree to abide by JBSS and BSDM regulations.
                </p>
              </div>

              <h3>1. Acceptance of Terms</h3>
              <p>
                By accessing or using the JBSS Education website and services, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
              </p>

              <h3>2. Course Enrollment & Eligibility</h3>
              <p>
                Enrollment in courses like the Kushal Yuva Program (KYP) is subject to eligibility criteria defined by the Bihar Skill Development Mission (BSDM).
              </p>
              <ul>
                <li><strong>Age Limit:</strong> Applicants must fall within the age bracket specified for each program (typically 15-25 years for KYP).</li>
                <li><strong>Documents:</strong> You must provide authentic documents (Aadhaar, 10th Marksheet, Bank Passbook) for verification.</li>
                <li><strong>Attendance:</strong> A minimum of 80% attendance is mandatory to appear for the final examination and receive certification.</li>
              </ul>

              <h3>3. User Conduct</h3>
              <p>
                You agree to use our services only for lawful purposes. You are prohibited from:
              </p>
              <ul>
                <li>Sharing your login credentials with others.</li>
                <li>Engaging in any activity that disrupts the learning environment or damages institute property.</li>
                <li>Attempting to cheat or manipulate online assessments.</li>
              </ul>

              <h3>4. Certification</h3>
              <p>
                Certificates are issued directly by the Bihar Skill Development Mission (BSDM) upon successful completion of the course and passing the final assessment. JBSS is a facilitator and does not issue independent government certificates.
              </p>

              <h3>5. Intellectual Property</h3>
              <p>
                The Service and its original content (excluding BSDM course material), features, and functionality are and will remain the exclusive property of Jan Bhawna Sewa Sansthan and its licensors. Unauthorized reproduction of course materials is strictly prohibited.
              </p>

              <h3>6. Limitation of Liability</h3>
              <p>
                In no event shall Jan Bhawna Sewa Sansthan, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>

              <h3>7. Termination</h3>
              <p>
                We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>

              <h3>8. Governing Law</h3>
              <p>
                These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes shall be subject to the jurisdiction of courts in Jamui, Bihar.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
 
export default TermsOfServicePage;
