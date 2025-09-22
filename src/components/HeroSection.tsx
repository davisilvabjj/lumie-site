import { LumieButton } from "@/components/ui/lumie-button";
import heroImage from "@/assets/others/hero-jewelry.jpg";
import logo from "../assets/brand/logotype.svg";

const HeroSection = () => {
  const scrollToCollections = () => {
    const collectionsSection = document.getElementById('collections');
    collectionsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden" id="hero">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat"
        style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.35)), url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-lumie-blue-light/30 to-lumie-rose-pale/20" />
      </div>
      
      {/* Content */}
      <div className="grid justify-items-center relative z-10 max-w-4xl mx-auto px-6 animate-fade-in">
        <img src={logo} alt="Lumiê Jóias" className="w-44 sm:w-56 md:w-72 mb-2 md:mb-3" />
        <p className="font-sans text-xl text-center md:text-2xl lg:text-3xl text-white font-light tracking-wide text-shadow-md mb-6 md:mb-8">
          Seu brilho em cada detalhe!
        </p>
        <LumieButton 
          variant="hero" 
          size="xl"
          onClick={scrollToCollections}
          className="animate-slide-up font-sans font-medium tracking-wide shadow-md"
        >
          Conheça a Coleção
        </LumieButton>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;