import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";

const EventsSection = () => {
 
  const calendarEmbedUrl = "https://calendar.google.com/calendar/embed?src=c_90b5d6bea56208555ac062cebdc76a67f735bab6a67f0d7e4014b2b0e2e6215e%40group.calendar.google.com&ctz=America%2FChicago";

  const calendarSubscribeUrl = "https://calendar.google.com/calendar/u/0?cid=c_90b5d6bea56208555ac062cebdc76a67f735bab6a67f0d7e4014b2b0e2e6215e%40group.calendar.google.com";

  const regularMeetings = [
    {
      title: "Weekly Study Group",
      schedule: "Every Wednesday",
      time: "5:30 PM - 6:30 PM",
      location: "Rudder 504",
      description: "Collaborative problem-solving and homework help sessions."
    },
    {
      title: "Fun Socials",
      schedule: "Thursday of each week",
      time: "TBD", 
      location: "TBD",
      description: "Members gather for games, food, and fun activities."
    }
  ];

  return (
    <section id="events-section" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight">
            EVENTS
          </h2>
        </div>

        {/* Featured Calendar Section */}
        <div className="relative bg-gradient-to-br from-sls via-sls-dark to-sls rounded-2xl overflow-hidden mb-24 shadow-2xl animate-fade-in">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="p-8 md:p-12 lg:p-16">
              <p className="text-white/70 text-xs md:text-sm font-bold mb-3 uppercase tracking-widest">
                Featured
              </p>
              <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                UPCOMING EVENTS
              </h3>
              <p className="text-white/90 text-base md:text-lg mb-8 leading-relaxed max-w-md">
                Stay connected with our workshops, seminars, and meetings. Add our calendar to never miss an event.
              </p>
              <Button 
                onClick={() => window.open(calendarSubscribeUrl, '_blank')}
                className="bg-white text-sls hover:bg-white/90 font-bold text-base px-6 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                view calendar information →
              </Button>
            </div>
            
            <div className="relative hidden md:block p-8 lg:p-12">
              <div className="relative w-full aspect-square">
                {/* Placeholder for floating calendar mockup images */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center">
                  <Calendar className="w-32 h-32 text-white/30" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Calendar Embed */}
        <div className="mb-24">
          <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
            <div className="relative w-full rounded-xl overflow-hidden shadow-2xl border border-border">
              <div className="aspect-[16/10] bg-background">
                <iframe
                  src={calendarEmbedUrl}
                  className="w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                  title="TAMU SLS Events Calendar"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Regular Meetings */}
        <div>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-12 tracking-tight">
            REGULAR MEETINGS
          </h3>
          <div className="space-y-6">
            {regularMeetings.map((meeting, index) => (
              <div
                key={index} 
                className="group grid md:grid-cols-[300px,1fr] gap-6 bg-muted/30 rounded-2xl overflow-hidden hover:bg-muted/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon/Image Section */}
                <div className="bg-gradient-to-br from-sls/20 to-sls/5 flex items-center justify-center p-12">
                  <Calendar className="w-24 h-24 text-sls" />
                </div>
                
                {/* Content Section */}
                <div className="p-8 md:py-12 md:pr-12 flex flex-col justify-center">
                  <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-sls transition-colors">
                    {meeting.title}
                  </h4>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                    {meeting.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm md:text-base">
                    <div className="flex items-center gap-2 text-muted-foreground font-medium">
                      <Clock className="w-5 h-5 text-sls" />
                      {meeting.schedule} • {meeting.time}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground font-medium">
                      <MapPin className="w-5 h-5 text-sls" />
                      {meeting.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;