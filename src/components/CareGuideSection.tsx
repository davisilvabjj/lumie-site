import { Sparkles, Gem, Zap, Crown, HeartHandshake, ShieldCheck, Check } from "lucide-react";

const CareGuideSection = () => {
  const silverCare = [
    "Guarde em local seco e arejado",
    "Evite contato com perfumes e cremes",
    "Limpe com flanela macia após o uso",
    "Use produtos específicos para prata 925"
  ];

  const goldCare = [
    "Armazene separadamente em estojo",
    "Evite contato com água e perfumes",
    "Limpe com pano macio e seco",
    "Guarde em saquinhos individuais"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Cuidados & Curiosidades
          </h2>
          <p className="font-sans text-lg text-gray-500 max-w-3xl mx-auto">
            Preserve a beleza das suas joias LUMIÊ com os cuidados adequados e descubra mais sobre nossos materiais premium
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Prata 925 */}
          <div className="bg-white rounded-3xl shadow-soft hover:shadow-elegant transition-elegant p-8 hover-lift border">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mr-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-primary">Prata 925</h3>
                <p className="font-sans text-gray-500">92,5% prata pura</p>
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
                  <ShieldCheck className="w-5 h-5 text-gray-500 mt-0.5 mr-3 flex-shrink-0" />
                  {care}
                </li>
              ))}
            </ul>
          </div>

          {/* Folheado a Ouro */}
          <div className="border bg-white rounded-3xl shadow-soft hover:shadow-elegant transition-elegant p-8 hover-lift">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                <Gem className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-primary">Folheado a Ouro</h3>
                <p className="font-sans text-gray-500">Banho de ouro sobre metal nobre</p>
              </div>
            </div>
            
            <p className="font-sans text-foreground/80 mb-6 leading-relaxed">
              Peças folheadas a ouro possuem uma camada de ouro aplicada sobre metal nobre, 
              oferecendo beleza e durabilidade com excelente custo-benefício.
            </p>
            
            <h4 className="font-serif text-lg font-bold text-primary mb-4">Cuidados Essenciais:</h4>
            <ul className="space-y-3">
              {goldCare.map((care, index) => (
                <li key={index} className="flex items-start font-sans text-foreground/80">
                  <ShieldCheck className="w-5 h-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                  {care}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Curiosidades */}
        <div className="py-8 md:p-12 text-center">
          <h3 className="font-serif text-3xl font-bold text-primary mb-8">Você Sabia?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in bg-white border rounded-xl p-6">
              <div className="w-16 h-16 mx-auto mb-4 gradient-ocean rounded-full flex items-center justify-center gradient-icon">
                <Zap color="white" size={28} />
              </div>
              <p className="font-sans text-foreground/80">
                A prata é o metal com maior condutividade térmica e elétrica, sendo também naturalmente antibacteriana.
              </p>
            </div>
            
            <div className="animate-fade-in bg-white border rounded-xl p-6" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 mx-auto mb-4 bg-lumie-coral rounded-full flex items-center justify-center gradient-icon">
                <Crown color="white" size={28} />
              </div>
              <p className="font-sans text-foreground/80">
                Peças folheadas a ouro mantêm sua beleza por muito tempo quando cuidadas adequadamente.
              </p>
            </div>
            
            <div className="animate-fade-in bg-white border rounded-xl p-6" style={{ animationDelay: "0.4s" }}>
              <div className="w-16 h-16 mx-auto mb-4 bg-lumie-aqua rounded-full flex items-center justify-center gradient-icon">
                <HeartHandshake color="white" size={28} />
              </div>
              <p className="font-sans text-foreground/80">
                Todas as joias LUMIÊ são hipoalergênicas, seguras para peles sensíveis e uso prolongado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareGuideSection;