export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-white font-bold mb-4">JBSS</h4>
          <p className="text-sm">Empowering the future through technology and education.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/search" className="hover:text-white">Courses</a></li>
            <li><a href="/events" className="hover:text-white">Events</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="/terms-of-service" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Contact</h4>
          <p className="text-sm">
            <a href="mailto:mcccom12@gmail.com" className="hover:text-white">mcccom12@gmail.com</a>
          </p>
          <p className="text-sm">
            <a href="tel:+919431468630" className="hover:text-white">+91 9431468630</a>
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>© 2025 JBSS. All rights reserved.</p>
        <p>Developed by Shivam Kumar.</p>
      </div>
    </footer>
  );
};