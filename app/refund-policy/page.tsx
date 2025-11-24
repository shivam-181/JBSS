import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/landing-page/footer";
import { RefreshCw } from "lucide-react";

const RefundPolicyPage = () => {
  return (
    <div className="h-full bg-[#e4eaee]">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="space-y-8">
          {/* Header Section */}
          <div className="text-center space-y-4 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Refund Policy</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Effective Date: November 24, 2025
            </p>
          </div>

          {/* Content Card */}
          <div className="bg-slate-50/50 p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
            <div className="max-w-none text-slate-700 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-slate-900 [&_h3]:mt-8 [&_h3]:mb-4 [&_p]:mb-4 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_li]:mb-2 [&_strong]:font-semibold [&_strong]:text-slate-900">
              
              <div className="flex items-center gap-4 mb-8 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <div className="p-2 bg-purple-50 rounded-lg">
                  <RefreshCw className="w-6 h-6 text-purple-600" />
                </div>
                <p className="text-sm font-medium text-slate-700 m-0 !mb-0">
                  We believe in transparency. Here is everything you need to know about our fee and refund structure.
                </p>
              </div>

              <h3>1. Registration & Course Fees</h3>
              <p>
                <strong>General Courses:</strong> Fees paid for private courses (e.g., DCA, ADCA) are generally non-refundable once the batch has commenced.
              </p>
              <p>
                <strong>Government Programs (KYP):</strong> The Kushal Yuva Program (KYP) does not charge a tuition fee. However, a refundable security deposit is required as per BSDM norms.
              </p>

              <h3>2. KYP Security Deposit Refund</h3>
              <p>
                The security deposit of ₹1000 collected for the Kushal Yuva Program (KYP) is <strong>fully refundable</strong> directly to the candidate's bank account by BSDM, subject to the following conditions:
              </p>
              <ul>
                <li><strong>Course Completion:</strong> The candidate must successfully complete the 3-month training program.</li>
                <li><strong>Certification:</strong> The candidate must pass the final assessment and receive the KYP certificate.</li>
                <li><strong>Bank Account:</strong> The candidate must have a valid, Aadhaar-seeded bank account.</li>
              </ul>
              <p><em>Note: Candidates who drop out mid-course or fail to appear for the final exam may forfeit their security deposit as per government rules.</em></p>

              <h3>3. Refund Eligibility for Private Courses</h3>
              <p>
                For non-government courses, refunds may be considered in the following exceptional cases:
              </p>
              <ul>
                <li><strong>Institute Cancellation:</strong> If a course is cancelled by JBSS due to unforeseen circumstances, 100% of the fee will be refunded.</li>
                <li><strong>Early Withdrawal:</strong> If a student withdraws admission at least 7 days before the batch start date, a refund may be processed after deducting a 10% administrative fee.</li>
                <li><strong>Double Payment:</strong> In case of accidental double payment or transaction failure where money is deducted, the excess amount will be refunded automatically.</li>
              </ul>

              <h3>4. Processing Time</h3>
              <p>
                <strong>BSDM Refunds:</strong> Security deposit refunds are processed centrally by the Bihar Skill Development Mission and typically take 30-60 days after certification.
              </p>
              <p>
                <strong>Institute Refunds:</strong> Approved refunds for private courses will be processed within 10-15 working days and credited back to the original method of payment.
              </p>

              <h3>5. Dispute Resolution</h3>
              <p>
                If you have not received a refund within the stipulated time, please contact our accounts department with your receipt number and transaction details.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
 
export default RefundPolicyPage;
