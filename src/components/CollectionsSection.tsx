import { LumieButton } from "@/components/ui/lumie-button";
import ringsImage from "@/assets/rings-collection.jpg";
import necklacesImage from "@/assets/necklaces-collection.jpg";
import earringsImage from "@/assets/earrings-collection.jpg";
import alliancesImage from "@/assets/alliances-collection.jpg";

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
    image: ringsImage, // Reutilizando imagem temporariamente
    description: "Pequenos detalhes, grandes significados",
    category: "berloques"
  },
  {
    id: 6,
    title: "Pulseiras",
    image: necklacesImage, // Reutilizando imagem temporariamente
    description: "Complementos perfeitos para seus looks",
    category: "pulseiras"
  },
  {
    id: 7,
    title: "Pingentes",
    image: earringsImage, // Reutilizando imagem temporariamente
    description: "Símbolos carregados de significado",
    category: "pingentes"
  },
  {
    id: 8,
    title: "Piercings",
    image: alliancesImage, // Reutilizando imagem temporariamente
    description: "Modernidade e estilo em cada peça",
    category: "piercings"
  }
];

const CollectionsSection = () => {
  return (
    <section id="collections" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Coleções em Destaque
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada peça é cuidadosamente selecionada para expressar sua individualidade e realçar sua beleza única
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  className="w-full h-80 object-cover transition-elegant group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-elegant" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-elegant">
                  <h3 className="font-serif text-2xl font-bold mb-2">{collection.title}</h3>
                  <p className="font-sans text-sm opacity-90 mb-4">{collection.description}</p>
                  <LumieButton 
                    variant="outline" 
                    size="sm" 
                    className="border-white text-white hover:bg-white hover:text-primary"
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