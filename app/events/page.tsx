import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/landing-page/footer";
import { Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const EventsPage = () => {
  const events = [
    {
      id: 1,
      title: "Annual Tech Symposium 2025",
      date: "March 15, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "JBSS Main Campus Hall",
      description: "Join us for a day of innovation and technology. Featuring guest speakers from top tech companies, project showcases by our students, and networking opportunities.",
      category: "Technology"
    },
    {
      id: 2,
      title: "Career Counseling Workshop",
      date: "April 05, 2025",
      time: "11:00 AM - 2:00 PM",
      location: "Online (Zoom)",
      description: "Expert guidance on choosing the right career path in the digital age. Open to all students and parents.",
      category: "Workshop"
    },
    {
      id: 3,
      title: "New Batch Orientation: KYP",
      date: "April 10, 2025",
      time: "09:00 AM - 12:00 PM",
      location: "Room 101, JBSS Campus",
      description: "Orientation session for the upcoming Kushal Yuva Program batch. Learn about the curriculum, facilities, and placement support.",
      category: "Orientation"
    }
  ];

  return ( 
    <div className="h-full bg-[#e4eaee]">
      <Navbar />
      <main className="container mx-auto px-4 py-12 max-w-5xl">
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
