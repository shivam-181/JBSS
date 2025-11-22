import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/landing-page/footer";

const TermsOfServicePage = () => {
  return ( 
    <div className="h-full bg-[#e4eaee]">
      <Navbar />
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-slate-50/50 p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 space-y-8">
          <div className="border-b border-slate-100 pb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Terms of Service</h1>
            <p className="text-slate-500">Last Updated: November 22, 2025</p>
          </div>

          <div className="space-y-6 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the Jan Bhawna Seva Sansthan (JBSS) website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">2. Use of Services</h2>
              <p>
                You agree to use our website and services only for lawful purposes. You are prohibited from violating or attempting to violate the security of the website, including, without limitation, accessing data not intended for you or logging into a server or account which you are not authorized to access.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">3. Intellectual Property</h2>
              <p>
                All content included on this site, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of JBSS or its content suppliers and protected by international copyright laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">4. Course Enrollment and Fees</h2>
              <p>
                Enrollment in our courses is subject to availability and acceptance by JBSS. Fees for courses are subject to change without notice. We reserve the right to refuse service to anyone for any reason at any time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">5. Limitation of Liability</h2>
              <p>
                JBSS shall not be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses resulting from the use of or inability to use the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">6. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
   );
}
 
export default TermsOfServicePage;
