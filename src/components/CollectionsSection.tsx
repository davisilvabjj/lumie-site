import { LumieButton } from "@/components/ui/lumie-button";
import ringsImage from "@/assets/rings-collection-new.jpg";
import necklacesImage from "@/assets/necklaces-collection-new.jpg";
import earringsImage from "@/assets/earrings-collection-new.jpg";
import alliancesImage from "@/assets/alliances-collection-new.jpg";
import berloquesImage from "@/assets/berloques-collection.jpg";
import pulseirasImage from "@/assets/pulseiras-collection.jpg";
import pingentesImage from "@/assets/pingentes-collection.jpg";
import piercingsImage from "@/assets/piercings-collection.jpg";

const collections = [
  {
    id: 1,
    title: "Anéis",
    image: ringsImage,
    description: "Peças únicas que expressam sua personalidade",
    category: "aneis"
  },
  {
    id: 2,
    title: "Colares",
    image: necklacesImage,
    description: "Elegância que realça sua beleza natural",
    category: "colares"
  },
  {
    id: 3,
    title: "Brincos",
    image: earringsImage,
    description: "Detalhes que fazem toda a diferença",
    category: "brincos"
  },
  {
    id: 4,
    title: "Alianças",
    image: alliancesImage,
    description: "Símbolos eternos do amor verdadeiro",
    category: "aliancas"
  },
  {
    id: 5,
    title: "Berloques",
    image: berloquesImage,
    description: "Pequenos detalhes, grandes significados",
    category: "berloques"
  },
  {
    id: 6,
    title: "Pulseiras",
    image: pulseirasImage,
    description: "Complementos perfeitos para seus looks",
    category: "pulseiras"
  },
  {
    id: 7,
    title: "Pingentes",
    image: pingentesImage,
    description: "Símbolos carregados de significado",
    category: "pingentes"
  },
  {
    id: 8,
    title: "Piercings",
    image: piercingsImage,
    description: "Modernidade e estilo em cada peça",
    category: "piercings"
  }
];

const CollectionsSection = () => {
  return (
    <section id="collections" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            Coleções em Destaque
          </h2>
          <p className="font-sans text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Cada peça é cuidadosamente selecionada para expressar sua individualidade e realçar sua beleza única
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {collections.map((collection, index) => (
            <div 
              key={collection.id}
              className="group cursor-pointer animate-slide-up hover-lift"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-soft group-hover:shadow-elegant transition-elegant">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-64 sm:h-72 lg:h-80 object-cover transition-elegant group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-elegant" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-elegant">
                  <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">{collection.title}</h3>
                  <p className="font-sans text-xs sm:text-sm opacity-90 mb-3 sm:mb-4 line-clamp-2">{collection.description}</p>
                  <LumieButton 
                    variant="outline" 
                    size="sm" 
                    className="border-white text-white hover:bg-white hover:text-primary text-xs sm:text-sm"
                    onClick={() => window.location.href = `/products?category=${collection.category}`}
                  >
                    Ver Mais
                  </LumieButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;