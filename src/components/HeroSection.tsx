import { LumieButton } from "@/components/ui/lumie-button";
import heroImage from "@/assets/hero-jewelry.jpg";

const HeroSection = () => {
  const scrollToCollections = () => {
    const collectionsSection = document.getElementById('collections');
    collectionsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-lumie-blue-light/30 to-lumie-rose-pale/20" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-shimmer">
          LUMIÊ
        </h1>
        <p className="font-sans text-xl md:text-2xl lg:text-3xl text-foreground/90 mb-8 font-light tracking-wide">
          Joias que iluminam sua essência
        </p>
        <LumieButton 
          variant="hero" 
          size="xl"
          onClick={scrollToCollections}
          className="animate-slide-up font-sans font-medium tracking-wide"
        >
          Conheça a Coleção
        </LumieButton>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;