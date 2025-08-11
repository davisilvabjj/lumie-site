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
    description: "Peças únicas que expressam sua personalidade"
  },
  {
    id: 2,
    title: "Colares",
    image: necklacesImage,
    description: "Elegância que realça sua beleza natural"
  },
  {
    id: 3,
    title: "Brincos",
    image: earringsImage,
    description: "Detalhes que fazem toda a diferença"
  },
  {
    id: 4,
    title: "Alianças",
    image: alliancesImage,
    description: "Símbolos eternos do amor verdadeiro"
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
            Cada peça é cuidadosamente criada para expressar sua individualidade e realçar sua beleza única
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
                  <LumieButton variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-primary">
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