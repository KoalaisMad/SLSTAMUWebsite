import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Code, Database, BarChart3, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

  // Import workshop and activity images
  import img1 from "@/assets/WorkshopsAndActivities/IMG_0331.jpeg";
  import img2 from "@/assets/WorkshopsAndActivities/IMG_4960.jpeg";
  import img3 from "@/assets/WorkshopsAndActivities/IMG_5025.jpeg";
  import img4 from "@/assets/WorkshopsAndActivities/IMG_5302.jpeg";
  import img5 from "@/assets/WorkshopsAndActivities/IMG_9789.JPEG";
  import img6 from "@/assets/WorkshopsAndActivities/IMG_9790.JPEG";
  import img7 from "@/assets/WorkshopsAndActivities/DSC08050.JPG";

  const workshopImages = [
    { src: img1, alt: "Learning & Growing Together!" },
    { src: img2, alt: "Stats Never Looked So Good!" },
    { src: img3, alt: "Making Data Friends!" },
    { src: img4, alt: "Coding & Community Vibes!" },
    { src: img5, alt: "Where Statistics Meets Fun!" },
    { src: img6, alt: "Building the Future of Data!" },
    { src: img7, alt: "Community & Connection! 🤗" },
  ];

const AboutSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      setIsPaused(true);
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
      // Resume auto-scroll after 3 seconds
      setTimeout(() => setIsPaused(false), 3000);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      setIsPaused(true);
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
      // Resume auto-scroll after 3 seconds
      setTimeout(() => setIsPaused(false), 3000);
    }
  };
  const features = [
    {
      icon: BookOpen,
      title: "Learn Together",
      description: "Collaborative study sessions covering statistical concepts, R/Python programming, and theoretical foundations."
    },
    {
      icon: Code,
      title: "Hands-On Projects",
      description: "Work on real-world data science projects that build your portfolio and practical experience."
    },
    {
      icon: Database,
      title: "Industry Connections",
      description: "Network with professionals and alumni working in data science, analytics, and research roles."
    },
    {
      icon: BarChart3,
      title: "Skill Building",
      description: "Master tools like R, Python, SQL, and machine learning frameworks through workshops and tutorials."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background via-sls-light/10 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 mesh-gradient opacity-30"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
            About Our <span className="gradient-text">Community</span>
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            We're a passionate group of students, researchers, and professionals at Texas A&M University 
            dedicated to advancing statistical literacy and data science skills in the Aggie community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-20">
          {features.map((feature, index) => (
            <div
              key={index} 
              className="group bg-gradient-to-br from-card via-card/80 to-card/60 rounded-3xl p-8 hover:shadow-card-hover transition-all duration-500 border-0 hover:bg-card/90 animate-fade-in hover:-translate-y-2 backdrop-blur-sm"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-sls/10 to-sls/20 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-sls/20 group-hover:to-sls/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <feature.icon className="w-8 h-8 text-sls group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-semibold text-card-foreground mb-4 group-hover:text-sls transition-colors">
                    {feature.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Workshops & Activities Gallery */}
        <div className="mb-20">
          <h3 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-12 text-center leading-tight">
            Workshops & <span className="gradient-text">Activities</span>
          </h3>
          
          {/* Scrollable Carousel with Navigation */}
          <div className="relative overflow-hidden">
            {/* Scroll Left Button */}
            <Button
              onClick={scrollLeft}
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-background/90 backdrop-blur-sm hover:bg-sls hover:text-white border-sls/20 shadow-lg"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            {/* Scroll Right Button */}
            <Button
              onClick={scrollRight}
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-background/90 backdrop-blur-sm hover:bg-sls hover:text-white border-sls/20 shadow-lg"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
            
            {/* Scrolling Container */}
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
            >
              {/* Workshop images */}
              {workshopImages.map((item, index) => (
                <div
                  key={index}
                  className="group relative flex-shrink-0 w-80 h-80 overflow-hidden rounded-2xl cursor-pointer hover:scale-105 transition-transform duration-500"
                >
                  {/* Image */}
                  <img
                    src={item.src}
                    alt={item.alt}
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                      index === 6 ? 'object-right-top' : 'object-center'
                    }`}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-sls/20 to-sls-gradient-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
                  
                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-display font-semibold text-lg drop-shadow-lg">
                      {item.alt}
                    </p>
                  </div>
                  
                  {/* Border Accent */}
                  <div className="absolute inset-0 border-2 border-sls/0 group-hover:border-sls/50 rounded-2xl transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Community photos - removed placeholder section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 hidden">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-2xl blur-md group-hover:blur-lg transition-all duration-300"></div>
            <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-1 border border-primary/10">
              <img 
                src="/placeholder.svg" 
                alt="SLS Workshop Session" 
                className="w-full h-48 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-display font-semibold">Workshop Sessions</p>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-2xl blur-md group-hover:blur-lg transition-all duration-300"></div>
            <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-1 border border-primary/10">
              <img 
                src="/placeholder.svg" 
                alt="Team Collaboration" 
                className="w-full h-48 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-display font-semibold">Team Projects</p>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-2xl blur-md group-hover:blur-lg transition-all duration-300"></div>
            <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-1 border border-primary/10">
              <img 
                src="/placeholder.svg" 
                alt="Community Networking" 
                className="w-full h-48 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-display font-semibold">Networking Events</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced mission statement */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary-light/5 to-primary/5 rounded-3xl blur-xl"></div>
          <div className="relative bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-3xl p-12 md:p-16 border border-primary/10 backdrop-blur-sm">
            <div className="max-w-5xl mx-auto text-center">
              <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
                Our Mission
              </h3>
              <p className="font-body text-xl text-muted-foreground leading-relaxed mb-10 font-light">
                To foster a collaborative learning environment where Aggies can develop statistical thinking, 
                master data science tools, and apply their skills to solve meaningful problems across disciplines.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {["Statistics", "Machine Learning", "Data Visualization", "Research Methods"].map((tag, index) => (
                  <span key={index} className="bg-gradient-to-r from-sls/10 to-sls/20 text-sls font-medium px-6 py-3 rounded-full text-sm font-display hover:from-sls/20 hover:to-sls/30 transition-all duration-300 hover:scale-105 cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;