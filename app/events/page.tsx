import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/landing-page/footer";
import { Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

// Force rebuild
const EventsPage = () => {
  const events = [
    {
      id: 1,
      title: "New IT Portal & LMS Launch",
      date: "December 01, 2025",
      time: "10:00 AM - 1:00 PM",
      location: "Online / All SDCs",
      description: "Launch of the new BSDM IT Portal, Learning Management System (LMS), and e-Content platform. Mandatory training for all SDCs.",
      category: "Launch Event"
    },
    {
      id: 2,
      title: "Enhanced KYP 2025 Orientation",
      date: "December 15, 2025",
      time: "11:00 AM - 2:00 PM",
      location: "JBSS Main Campus Hall",
      description: "Introduction to the new AI-based digital learning modules and hybrid training model for the Kushal Yuva Program.",
      category: "Orientation"
    },
    {
      id: 3,
      title: "Mega Job Fair (Rozgar Mela)",
      date: "January 10, 2026",
      time: "09:00 AM - 5:00 PM",
      location: "Gandhi Maidan, Patna",
      description: "Large-scale job fair organized by BSDM connecting KYP graduates with top employers. Direct interview opportunities available.",
      category: "Career Fair"
    }
  ];

  return ( 
    <div className="h-full bg-[#e4eaee]">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12 max-w-5xl">
        <div className="space-y-8">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Upcoming Events</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Stay updated with the latest workshops, seminars, and activities at JBSS.
            </p>
          </div>

          <div className="grid gap-6">
            {events.map((event) => (
              <div key={event.id} className="bg-slate-50/50 p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-blue-50 text-blue-700 p-4 rounded-xl text-center min-w-[100px]">
                  <div className="text-sm font-semibold uppercase tracking-wider">{event.date.split(" ")[0]}</div>
                  <div className="text-3xl font-bold">{event.date.split(" ")[1].replace(",", "")}</div>
                  <div className="text-xs text-slate-500">{event.date.split(" ")[2]}</div>
                </div>
                
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                      {event.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{event.title}</h3>
                  <p className="text-slate-600">{event.description}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 pt-2">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                  </div>
                </div>

                <div className="mt-4 md:mt-0">
                  <Button variant="outline">Register Now</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
   );
}
 
export default EventsPage;
