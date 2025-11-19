import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import ContactSection from "@/components/ContactSection";
import OfficersSection from "@/components/OfficersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <div id="about">
          <AboutSection />
        </div>
        <div id="events">
          <EventsSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
        <div id="officers">
          <OfficersSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
