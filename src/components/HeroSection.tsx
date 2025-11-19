import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingUp, Calendar } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sls via-sls-gradient-primary to-sls-gradient-secondary animate-gradient-shift bg-[length:400%_400%]"></div>
      
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 mesh-gradient"></div>
      
      {/* Ocean wave patterns */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-full h-32 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-wave-flow"></div>
          <div className="absolute top-1/2 left-0 w-full h-40 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-wave-flow" style={{ animationDelay: '1s', animationDuration: '10s' }}></div>
          <div className="absolute top-3/4 left-0 w-full h-24 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-wave-flow" style={{ animationDelay: '2s', animationDuration: '12s' }}></div>
        </div>
      </div>

      {/* Floating statistical symbols */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-[10%] w-32 h-32 glass-effect rounded-2xl animate-float flex items-center justify-center text-white/70 text-4xl font-bold">σ</div>
        <div className="absolute top-40 right-[15%] w-20 h-20 glass-effect rounded-xl animate-float flex items-center justify-center text-white/70 text-2xl font-bold" style={{ animationDelay: '1s' }}>μ</div>
        <div className="absolute bottom-32 left-[20%] w-24 h-24 glass-effect rounded-2xl animate-float flex items-center justify-center text-white/70 text-3xl font-bold" style={{ animationDelay: '2s' }}>π</div>
        <div className="absolute bottom-20 right-[25%] w-16 h-16 glass-effect rounded-xl animate-float flex items-center justify-center text-white/70 text-xl font-bold" style={{ animationDelay: '0.5s' }}>χ²</div>
        <div className="absolute top-[60%] left-[5%] w-12 h-12 glass-effect rounded-lg animate-float flex items-center justify-center text-white/70 text-lg font-bold" style={{ animationDelay: '1.5s' }}>β</div>
        <div className="absolute top-[30%] right-[5%] w-10 h-10 glass-effect rounded-lg animate-float flex items-center justify-center text-white/70 text-sm font-bold" style={{ animationDelay: '2.5s' }}>α</div>
        <div className="absolute top-[45%] left-[60%] w-14 h-14 glass-effect rounded-xl animate-float flex items-center justify-center text-white/70 text-xl font-bold" style={{ animationDelay: '3s' }}>Σ</div>
        <div className="absolute bottom-[40%] right-[40%] w-18 h-18 glass-effect rounded-xl animate-float flex items-center justify-center text-white/70 text-2xl font-bold" style={{ animationDelay: '2.8s' }}>∫</div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 text-white">
        <div className="max-w-5xl mx-auto">
          {/* Enhanced main heading */}
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-8 animate-fade-in leading-[0.9]" style={{ animationDelay: '0.2s' }}>
            Stats Learning{" "}
            <span className="gradient-text bg-gradient-to-r from-sls-accent via-white to-sls-accent bg-[length:200%_auto] animate-gradient-shift">
              Society
            </span>
          </h1>

          {/* Enhanced subtitle */}
          <p className="font-body text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in font-light" style={{ animationDelay: '0.4s' }}>
            Empowering Aggies to master statistics, machine learning, and data science through 
            collaborative learning, cutting-edge workshops, and transformative real-world projects.
          </p>

          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact-section');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative bg-white text-sls font-semibold px-10 py-4 text-lg rounded-2xl hover:shadow-card-hover transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Join Our Community
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white to-sls-accent opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity"></div>
            </button>
            <button 
              onClick={() => {
                const eventsSection = document.getElementById('events-section');
                eventsSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group glass-effect text-white font-medium px-10 py-4 text-lg rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center justify-center gap-3">
                View Upcoming Events
                <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </button>
          </div>

          {/* Enhanced stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.8s' }}>
            {[
              { icon: Users, value: "100+", label: "Active Members" },
              { icon: TrendingUp, value: "50+", label: "Workshops Hosted" },
              { icon: Calendar, value: "Weekly", label: "Meetings" }
            ].map((stat, index) => (
              <div key={index} className="group glass-effect rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                <stat.icon className="w-10 h-10 mx-auto mb-4 text-sls-accent group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl font-bold mb-2 font-display">{stat.value}</div>
                <div className="text-sm text-white/80 font-medium tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 fill-background">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" className="animate-wave-flow"></path>
        </svg>
        {/* Additional wave layers for depth */}
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 fill-background/50 absolute bottom-0" style={{ animationDelay: '0.5s' }}>
          <path d="M0,80 C400,140 800,20 1200,80 L1200,120 L0,120 Z" className="animate-wave-flow opacity-60"></path>
        </svg>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 fill-background/30 absolute bottom-0" style={{ animationDelay: '1s' }}>
          <path d="M0,70 C350,10 850,130 1200,70 L1200,120 L0,120 Z" className="animate-wave-flow opacity-40"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;