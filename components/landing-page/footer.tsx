export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-800">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <h4 className="text-white text-lg font-bold tracking-tight">JBSS Education</h4>
          <p className="text-sm leading-relaxed text-slate-300 max-w-xs">
            Empowering the future through technology and education. Join us to build your career.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm text-slate-300">
            <li><a href="/about" className="hover:text-blue-400 transition-colors">About Us</a></li>
            <li><a href="/search" className="hover:text-blue-400 transition-colors">Courses</a></li>
            <li><a href="/events" className="hover:text-blue-400 transition-colors">Events</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-6">Legal</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            <li><a href="/terms-of-service" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
            <li><a href="/refund-policy" className="hover:text-blue-400 transition-colors">Refund Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-6">Contact Us</h4>
          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2">
              <span className="text-slate-500">Email:</span>
              <a href="mailto:mcccom12@gmail.com" className="hover:text-blue-400 transition-colors">mcccom12@gmail.com</a>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-slate-500">Phone:</span>
              <a href="tel:+919431468630" className="hover:text-blue-400 transition-colors">+91 9431468630</a>
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-slate-700/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© 2025 JBSS Education. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Developed by <span className="text-slate-300 font-medium">Shivam Kumar</span>
        </p>
      </div>
    </footer>
  );
};