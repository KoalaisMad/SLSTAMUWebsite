import { BarChart3, Mail, MessageCircle, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Mail, href: "mailto:statisticslearningsociety@gmail.com", label: "Email" },
    { icon: MessageCircle, href: "https://groupme.com/join_group/102496662/SjjOET0W", label: "GroupMe" },
    { icon: Instagram, href: "https://www.instagram.com/tamu_sls/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/tamu-sls/", label: "LinkedIn" }
  ];

  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Events", href: "#events" },
    { label: "Officers", href: "#officers" },
    { label: "Join Us", href: "#contact" }
  ];

  return (
    <footer className="bg-sls text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2 animate-fade-in">
            <div className="flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
              <img src="/logo.png" alt="SLS Logo" className="w-full h-full object-cover" />
            </div>
              <div>
                <h3 className="font-bold text-lg group-hover:text-blue-100 transition-colors">Stats Learning Society</h3>
                <p className="text-sm text-white/80">Texas A&M University</p>
              </div>
            </div>
            <p className="text-white/90 leading-relaxed max-w-md">
              Empowering Aggies to master statistics, machine learning, and data science through 
              collaborative learning and hands-on experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={link.label} style={{ animationDelay: `${300 + index * 100}ms` }} className="animate-fade-in">
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-white transition-all duration-300 text-sm hover:translate-x-2 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
            <h4 className="font-semibold text-lg mb-4">Connect With Us</h4>
            <div className="space-y-3">
              <p className="text-white/80 text-sm animate-fade-in" style={{ animationDelay: "500ms" }}>
                Rudder Building, Room 504<br />
                Texas A&M University<br />
                College Station, TX 77843
              </p>
              <p className="text-white/80 text-sm animate-fade-in" style={{ animationDelay: "600ms" }}>
                Weekly meetings: Wednesdays at 5:30 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 text-sm mb-4 md:mb-0">
            © 2025 Stats Learning Society at TAMU. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 group hover:scale-110 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${700 + index * 100}ms` }}
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;