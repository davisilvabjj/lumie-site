import { Sparkles, Shield, Heart, Star } from "lucide-react";

const CareGuideSection = () => {
  const silverCare = [
    "Guarde em local seco e arejado",
    "Evite contato com perfumes e cremes",
    "Limpe com flanela macia após o uso",
    "Use produtos específicos para prata 925"
  ];

  const goldCare = [
    "Armazene separadamente em estojo",
    "Evite produtos químicos e cloro",
    "Limpe com água morna e sabão neutro",
    "Seque completamente antes de guardar"
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Cuidados & Curiosidades
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
            Preserve a beleza das suas joias LUMIÊ com os cuidados adequados e descubra mais sobre nossos materiais premium
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Prata 925 */}
          <div className="bg-white rounded-3xl shadow-soft hover:shadow-elegant transition-elegant p-8 hover-lift">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-lumie-blue-soft rounded-full flex items-center justify-center mr-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-primary">Prata 925</h3>
                <p className="font-sans text-muted-foreground">92,5% prata pura</p>
              </div>
            </div>
            
            <p className="font-sans text-foreground/80 mb-6 leading-relaxed">
              A prata 925 é uma liga composta por 92,5% de prata pura e 7,5% de outros metais, 
              garantindo durabilidade sem perder o brilho característico da prata.
            </p>
            
            <h4 className="font-serif text-lg font-bold text-primary mb-4">Cuidados Essenciais:</h4>
            <ul className="space-y-3">
              {silverCare.map((care, index) => (
                <li key={index} className="flex items-start font-sans text-foreground/80">
                  <Shield className="w-5 h-5 text-lumie-blue-soft mt-0.5 mr-3 flex-shrink-0" />
                  {care}
                </li>
              ))}
            </ul>
          </div>

          {/* Ouro 18k */}
          <div className="bg-white rounded-3xl shadow-soft hover:shadow-elegant transition-elegant p-8 hover-lift">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-lumie-coral rounded-full flex items-center justify-center mr-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-primary">Ouro 18k</h3>
                <p className="font-sans text-muted-foreground">75% ouro puro</p>
              </div>
            </div>
            
            <p className="font-sans text-foreground/80 mb-6 leading-relaxed">
              O ouro 18k possui 75% de ouro puro em sua composição, oferecendo a combinação perfeita 
              entre beleza, durabilidade e resistência ao desgaste diário.
            </p>
            
            <h4 className="font-serif text-lg font-bold text-primary mb-4">Cuidados Essenciais:</h4>
            <ul className="space-y-3">
              {goldCare.map((care, index) => (
                <li key={index} className="flex items-start font-sans text-foreground/80">
                  <Star className="w-5 h-5 text-lumie-coral mt-0.5 mr-3 flex-shrink-0" />
                  {care}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Curiosidades */}
        <div className="bg-gradient-to-r from-lumie-blue-soft/10 to-lumie-gold-light/20 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="font-serif text-3xl font-bold text-primary mb-6">Você Sabia?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="w-16 h-16 mx-auto mb-4 gradient-ocean rounded-full flex items-center justify-center">
                <span className="text-2xl">💍</span>
              </div>
              <p className="font-sans text-foreground/80">
                A prata é o metal com maior condutividade térmica e elétrica, sendo também naturalmente antibacteriana
              </p>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 mx-auto mb-4 bg-lumie-coral rounded-full flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <p className="font-sans text-foreground/80">
                O ouro é um dos metais mais duráveis do mundo, sendo praticamente indestrutível e imune à oxidação
              </p>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="w-16 h-16 mx-auto mb-4 bg-lumie-aqua rounded-full flex items-center justify-center">
                <span className="text-2xl">🌟</span>
              </div>
              <p className="font-sans text-foreground/80">
                Todas as joias LUMIÊ são hipoalergênicas, seguras para peles sensíveis e uso prolongado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareGuideSection;