const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8">
            Sobre a LUMIÊ
          </h2>
          <div className="space-y-6 text-lg text-foreground/80 font-sans leading-relaxed">
            <p>
              A <span className="text-primary font-medium">LUMIÊ</span> nasceu da paixão por criar joias que transcendem o comum. 
              Cada peça é desenvolvida com design autoral e atenção aos mínimos detalhes, 
              utilizando apenas materiais de qualidade premium.
            </p>
            <p>
              Trabalhamos exclusivamente com <span className="text-lumie-coral font-medium">prata 925</span> e 
              <span className="text-lumie-coral font-medium"> peças folheadas e banhadas a ouro</span>, garantindo durabilidade, 
              brilho e resistência que acompanham você em todos os momentos especiais da vida.
            </p>
            <p className="text-xl font-medium text-primary">
              "Porque cada mulher merece joias que iluminam sua essência única"
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl shadow-soft hover:shadow-elegant transition-elegant hover-lift">
              <div className="w-16 h-16 mx-auto mb-4 gradient-ocean rounded-full flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-2">Design Autoral</h3>
              <p className="font-sans text-muted-foreground">Criações exclusivas e únicas</p>
            </div>
            
            <div className="p-6 rounded-xl shadow-soft hover:shadow-elegant transition-elegant hover-lift">
              <div className="w-16 h-16 mx-auto mb-4 bg-lumie-coral rounded-full flex items-center justify-center">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-2">Qualidade Premium</h3>
              <p className="font-sans text-muted-foreground">Prata 925 e folheados a ouro certificados</p>
            </div>
            
            <div className="p-6 rounded-xl shadow-soft hover:shadow-elegant transition-elegant hover-lift">
              <div className="w-16 h-16 mx-auto mb-4 bg-lumie-aqua rounded-full flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-2">Estilo Sofisticado</h3>
              <p className="font-sans text-muted-foreground">Elegância atemporal e moderna</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;