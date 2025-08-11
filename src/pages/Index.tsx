import HeroSection from "@/components/HeroSection";
import CollectionsSection from "@/components/CollectionsSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CareGuideSection from "@/components/CareGuideSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <CollectionsSection />
      <AboutSection />
      <TestimonialsSection />
      <CareGuideSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
