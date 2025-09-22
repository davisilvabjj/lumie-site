import { useEffect, useState } from "react";

import { LumieButton } from "@/components/ui/lumie-button";
import '../css/my-css.css';

type Categoria = { id: number; title: string; description: string; image: string; category: string};

const CollectionsSection = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    fetch("/data/categories.json")
    .then(res => res.json())
    .then(data => setCategorias(data))
    .catch(err => console.log('Erro ao carregar categorias:', err));
  }, []);

  return (
    <section id="collections" className="py-16 lg:py-20 bg-muted/30">
      <div className="container grid gap-8 md:gap-12 mx-auto px-4 sm:px-6">
        <div className="text-center animate-fade-in">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            Coleções em Destaque
          </h2>
          <p className="font-sans text-base sm:text-lg text-gray-500 max-w-2xl mx-auto px-4">
            Cada peça é cuidadosamente selecionada para expressar sua individualidade e realçar sua beleza única.
          </p>
        </div>
        
        {/* Grid de Produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {categorias.map((cat, index) => (
            <div 
              key={cat.id}
              className="group cursor-pointer animate-slide-up hover-lift card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-soft group-hover:shadow-elegant transition-elegant">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-64 sm:h-72 lg:h-80 object-cover transition-elegant group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-elegant" />
                <div 
                  className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-elegant hover:bg-none text-box"
                >
                  <h3 className="font-serif text-2xl font-bold mb-1 sm:mb-2">
                    {cat.title}
                  </h3>
                  <p className="font-sans text-sm text-gray-200 mb-3 sm:mb-4 line-clamp-2">
                    {cat.description}
                  </p>
                  <LumieButton 
                    variant="outline" 
                    size="sm" 
                    className="border-white text-white hover:bg-white hover:text-primary text-xs sm:text-sm mb-5 sm:mb-3"
                    onClick={() => window.location.href = `/products?category=${cat.category}`}
                  >
                    Ver mais
                  </LumieButton>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Fim do Grid de Produtos */}
      </div>
    </section>
  );
};

export default CollectionsSection;