import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Instagram, Linkedin, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      value: "statisticslearningsociety@gmail.com",
      description: "General inquiries and membership questions",
      action: "mailto:statisticslearningsociety@gmail.com"
    },
    {
      icon: MessageCircle,
      title: "Group Community",
      value: "Join our GroupMe",
      description: "Real-time Updates and study groups", 
      action: "https://groupme.com/join_group/102496662/SjjOET0W"
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@tamu_sls",
      description: "Follow for updates and event announcements",
      action: "https://www.instagram.com/tamu_sls/"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Texas A&M SLS",
      description: "Professional networking and alumni connections",
      action: "https://www.linkedin.com/company/tamu-sls/"
    }
  ];

  const meetingInfo = {
    location: "Rudder Building, Room 504",
    time: "Wednesdays at 5:30 PM",
    additional: "Additional workshops scheduled monthly"
  };

  return (
    <section id="contact-section" className="py-20 bg-gradient-to-b from-background to-sls/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get <span className="text-sls">Connected</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to join our community? Reach out to us through any of these channels or attend 
            one of our weekly meetings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Methods */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-6">Contact Methods</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 bg-card hover:bg-card/80 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => window.open(method.action, method.action.startsWith('mailto:') ? '_self' : '_blank')}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-sls/10 rounded-xl flex items-center justify-center group-hover:bg-sls/20 transition-colors">
                        <method.icon className="w-6 h-6 text-sls" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-card-foreground mb-1 group-hover:text-sls transition-colors">
                          {method.title}
                        </h4>
                        <p className="text-sm font-medium text-sls mb-2">
                          {method.value}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Meeting Information */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-foreground mb-6">Meeting Info</h3>
            <Card className="border-0 bg-gradient-to-br from-sls/10 to-sls-accent/5 animate-fade-in animation-delay-400">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-sls flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-1">Location</h4>
                      <p className="text-muted-foreground">{meetingInfo.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-sls flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-1">Regular Meetings</h4>
                      <p className="text-muted-foreground">{meetingInfo.time}</p>
                      <p className="text-sm text-muted-foreground mt-1">{meetingInfo.additional}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="mt-6 border-0 bg-card/50 animate-fade-in animation-delay-600">
              <CardContent className="p-6">
                <h4 className="font-semibold text-card-foreground mb-4 text-center">Quick Stats</h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-sls">100+</div>
                    <div className="text-xs text-muted-foreground">Members</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-sls">3</div>
                    <div className="text-xs text-muted-foreground">Years Active</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-sls">50+</div>
                    <div className="text-xs text-muted-foreground">Workshops</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-sls">15</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;