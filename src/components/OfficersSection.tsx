import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Import officer images
import presidentImg from "@/assets/DSC07857.JPG";
import vpImg from "@/assets/DSC07810.JPG";
import treasurerImg from "@/assets/DSC07797.JPG";
import projectOfficer1Img from "@/assets/DSC07748.JPG";
import projectOfficer2Img from "@/assets/DSC07754.JPG";
import socialOfficerImg from "@/assets/DSC07742.JPG";
import secretaryImg from "@/assets/DSC07777.JPG";

const OfficersSection = () => {
  const { toast } = useToast();

  const copyEmailToClipboard = async (email: string, name: string) => {
    try {
      await navigator.clipboard.writeText(email);
      toast({
        title: "Email copied!",
        description: `${name}'s email has been copied to your clipboard.`,
      });
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      toast({
        title: "Email copied!",
        description: `${name}'s email has been copied to your clipboard.`,
      });
    }
  };
  const officers = [
    {
      name: "Skyler Sax",
      role: "President",
      image: presidentImg,
      initials: "SS",
      email: "sax@tamu.edu",
      linkedin: "https://www.linkedin.com/in/skyler-sax/"
    },
    {
      name: "Zoe Teran",
      role: "Vice President",
      image: vpImg,
      initials: "ZT",
      email: "teranzoe@tamu.edu",
      linkedin: "https://www.linkedin.com/in/zoeteran/"
    },
    {
      name: "Shane Klingelberger",
      role: "Treasurer",
      image: treasurerImg,
      initials: "SK",
      email: "shane.klingelberger@tamu.edu",
      linkedin: "https://www.linkedin.com/in/shane-klingelberger-79283532a/"
    },
    {
      name: "Pranav Gaddam",
      role: "Projects Officer",
      image: projectOfficer1Img,
      initials: "PG",
      email: "prabunny_1@tamu.edu",
      linkedin: "https://www.linkedin.com/in/p-gaddam/"
    },
    {
      name: "Jyo Madhavarapu",
      role: "Projects Officer",
      image: projectOfficer2Img,
      initials: "JM",
      email: "jyo.mad@tamu.edu",
      linkedin: "https://www.linkedin.com/in/jyoshitha-madhavarapu/"
    },
    {
      name: "Basel Haque",
      role: "Social Officer",
      image: socialOfficerImg,
      initials: "BH",
      email: "baselhaque8@email.tamu.edu",
      linkedin: "https://www.linkedin.com/in/basel-haque-a76164352/"
    },
    {
      name: "Avery Liddell",
      role: "Secretary",
      image: secretaryImg,
      initials: "AL",
      email: "avery.liddell@tamu.edu",
      linkedin: "https://www.linkedin.com/in/avery-liddell-bab057334/"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-primary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 mesh-gradient opacity-20"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
            Meet Our <span className="gradient-text">Officers</span>
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            The dedicated team leading TAMU Stats Learning Society forward, bringing diverse expertise 
            and passion for statistical learning to our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-8xl mx-auto">
          {officers.map((officer, index) => (
            <div
              key={index}
              className="group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="bg-gradient-to-br from-card via-card/90 to-card/80 border-primary/10 hover:border-primary/20 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-2 backdrop-blur-sm animate-slide-up-fade overflow-hidden group-hover:scale-105">
                <div className="p-6 text-center">
                  {/* Avatar */}
                  <div className="relative mb-6 mx-auto w-32 h-32 animate-float" style={{ animationDelay: `${index * 200 + 1000}ms` }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-full blur-md group-hover:blur-lg group-hover:animate-pulse-glow transition-all duration-300"></div>
                    <Avatar className="relative w-32 h-32 mx-auto border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <AvatarImage 
                        src={officer.image} 
                        alt={officer.name}
                        className="object-cover object-top"
                      />
                      <AvatarFallback className="bg-gradient-to-br from-primary/10 to-primary-light/10 text-primary font-display font-semibold text-lg group-hover:scale-110 transition-transform">
                        {officer.initials}
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  {/* Name and Role */}
                  <h3 className="font-display text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                    {officer.name}
                  </h3>
                  <p className="font-body text-primary/80 font-medium mb-4 text-sm uppercase tracking-wide">
                    {officer.role}
                  </p>

                  {/* Contact Links */}
                  <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <button 
                      onClick={() => copyEmailToClipboard(officer.email, officer.name)}
                      className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary hover:scale-110 hover:rotate-12 transition-all duration-200 hover:animate-wiggle"
                      aria-label={`Copy ${officer.name}'s email`}
                    >
                      <Mail className="w-4 h-4" />
                    </button>
                    <a 
                      href={officer.linkedin}
                      className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary hover:scale-110 hover:-rotate-12 transition-all duration-200 hover:animate-wiggle"
                      aria-label={`${officer.name}'s LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="font-body text-lg text-muted-foreground mb-6">
            Interested in joining our leadership team?
          </p>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-primary-light/10 text-primary font-medium px-6 py-3 rounded-full text-sm font-display hover:from-primary/20 hover:to-primary-light/20 transition-all duration-300 hover:scale-105 cursor-pointer border border-primary/20 animate-bounce-in hover:animate-wiggle">
            <span className="animate-pulse">📝</span>
            Check out our Instagram for application details!
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficersSection;