import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Meu anel LUMIÊ é simplesmente perfeito. A qualidade é excepcional e o design é único!",
    author: "Marina Santos",
    location: "São Paulo"
  },
  {
    id: 2,
    text: "Comprei um colar para um presente especial. A delicadeza e sofisticação da peça encantaram.",
    author: "Carolina Oliveira",
    location: "Fortaleza"
  },
  {
    id: 3,
    text: "As alianças LUMIÊ tornaram nosso casamento ainda mais especial. Qualidade incomparável!",
    author: "Júlia & Rafael",
    location: "Brasília"
  },
  {
    id: 4,
    text: "Apaixonada pelos brincos! Uso todos os dias e sempre recebo elogios. Joias que realmente iluminam.",
    author: "Beatriz Costa",
    location: "Rio de Janeiro"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => prev === 0 ? testimonials.length - 1 : prev - 1);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 gradient-elegant">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            O que dizem nossas clientes
          </h2>
          <p className="font-sans text-lg text-foreground/80">
            Histórias reais de quem escolheu iluminar sua essência com LUMIÊ
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-elegant p-8 md:p-12 text-center">
            <div className="mb-6">
              <span className="text-6xl text-lumie-coral opacity-50">"</span>
            </div>
            
            <blockquote className="font-sans text-xl md:text-2xl text-foreground leading-relaxed mb-8 animate-fade-in">
              {testimonials[currentIndex].text}
            </blockquote>
            
            <div className="animate-fade-in">
              <cite className="font-serif text-lg font-medium text-primary not-italic">
                {testimonials[currentIndex].author}
              </cite>
              <p className="font-sans text-muted-foreground mt-1">
                {testimonials[currentIndex].location}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full shadow-soft hover:shadow-elegant transition-elegant flex items-center justify-center group"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full shadow-soft hover:shadow-elegant transition-elegant flex items-center justify-center group"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-elegant ${
                  index === currentIndex 
                    ? 'bg-primary' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;