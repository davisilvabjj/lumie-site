import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { LumieButton } from "@/components/ui/lumie-button";
import { Heart, Share2, ShoppingBag } from "lucide-react";

const productsByCategory = {
  aneis: [
    { id: 1, name: "Anel Solitário Delicado", price: "R$ 89,90", image: "/placeholder.svg", description: "Anel em prata 925 com banho de ouro" },
    { id: 2, name: "Anel Infinity", price: "R$ 69,90", image: "/placeholder.svg", description: "Anel símbolo do infinito em prata" },
    { id: 3, name: "Anel Trio Minimalista", price: "R$ 129,90", image: "/placeholder.svg", description: "Conjunto de 3 anéis delicados" },
  ],
  colares: [
    { id: 4, name: "Colar Coração Vazado", price: "R$ 119,90", image: "/placeholder.svg", description: "Colar em prata 925 com pingente coração" },
    { id: 5, name: "Colar Camadas", price: "R$ 89,90", image: "/placeholder.svg", description: "Colar duplo em camadas douradas" },
    { id: 6, name: "Colar Lua e Estrelas", price: "R$ 99,90", image: "/placeholder.svg", description: "Colar temático celestial" },
  ],
  brincos: [
    { id: 7, name: "Brinco Argola Pequena", price: "R$ 59,90", image: "/placeholder.svg", description: "Argola clássica em prata 925" },
    { id: 8, name: "Brinco Gota Cristal", price: "R$ 79,90", image: "/placeholder.svg", description: "Brinco formato gota com cristal" },
    { id: 9, name: "Brinco Borboleta", price: "R$ 69,90", image: "/placeholder.svg", description: "Brinco delicado formato borboleta" },
  ],
  aliancas: [
    { id: 10, name: "Aliança Clássica Lisa", price: "R$ 149,90", image: "/placeholder.svg", description: "Aliança lisa em prata 925" },
    { id: 11, name: "Aliança Texturizada", price: "R$ 169,90", image: "/placeholder.svg", description: "Aliança com textura especial" },
    { id: 12, name: "Aliança Dupla", price: "R$ 189,90", image: "/placeholder.svg", description: "Par de alianças combinando" },
  ],
  berloques: [
    { id: 13, name: "Berloque Coração", price: "R$ 39,90", image: "/placeholder.svg", description: "Berloque coração em prata" },
    { id: 14, name: "Berloque Trevo", price: "R$ 34,90", image: "/placeholder.svg", description: "Berloque da sorte trevo" },
    { id: 15, name: "Berloque Letra", price: "R$ 29,90", image: "/placeholder.svg", description: "Berloque com inicial personalizada" },
  ],
  pulseiras: [
    { id: 16, name: "Pulseira Corrente", price: "R$ 79,90", image: "/placeholder.svg", description: "Pulseira corrente delicada" },
    { id: 17, name: "Pulseira Rígida", price: "R$ 99,90", image: "/placeholder.svg", description: "Bracelete rígido dourado" },
    { id: 18, name: "Pulseira Berloques", price: "R$ 119,90", image: "/placeholder.svg", description: "Pulseira com berloques inclusos" },
  ],
  pingentes: [
    { id: 19, name: "Pingente Mandala", price: "R$ 69,90", image: "/placeholder.svg", description: "Pingente mandala em prata" },
    { id: 20, name: "Pingente Árvore da Vida", price: "R$ 79,90", image: "/placeholder.svg", description: "Pingente árvore da vida" },
    { id: 21, name: "Pingente Cruz", price: "R$ 59,90", image: "/placeholder.svg", description: "Pingente cruz delicada" },
  ],
  piercings: [
    { id: 22, name: "Piercing Helix", price: "R$ 49,90", image: "/placeholder.svg", description: "Piercing para helix em prata" },
    { id: 23, name: "Piercing Tragus", price: "R$ 54,90", image: "/placeholder.svg", description: "Piercing para tragus dourado" },
    { id: 24, name: "Piercing Nostril", price: "R$ 39,90", image: "/placeholder.svg", description: "Piercing para nariz delicado" },
  ],
};

const Products = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category') || 'aneis';
  const products = productsByCategory[category as keyof typeof productsByCategory] || [];

  const categoryNames = {
    aneis: 'Anéis',
    colares: 'Colares',
    brincos: 'Brincos',
    aliancas: 'Alianças',
    berloques: 'Berloques',
    pulseiras: 'Pulseiras',
    pingentes: 'Pingentes',
    piercings: 'Piercings',
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-muted/30 to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
              {categoryNames[category as keyof typeof categoryNames]}
            </h1>
            <p className="font-sans text-xl text-muted-foreground leading-relaxed">
              Descubra nossa coleção de {categoryNames[category as keyof typeof categoryNames].toLowerCase()} 
              em prata 925 e folheados a ouro. Qualidade e elegância em cada peça.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div 
                key={product.id}
                className="group cursor-pointer animate-slide-up hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-soft group-hover:shadow-elegant transition-elegant">
                  <div className="aspect-square bg-muted relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-elegant group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4 space-y-2">
                      <button className="w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-smooth">
                        <Heart className="w-5 h-5 text-muted-foreground hover:text-accent" />
                      </button>
                      <button className="w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-smooth">
                        <Share2 className="w-5 h-5 text-muted-foreground hover:text-primary" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-serif text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-smooth">
                      {product.name}
                    </h3>
                    
                    <p className="font-sans text-muted-foreground text-sm mb-4">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-xl font-bold text-primary">
                        {product.price}
                      </span>
                      <LumieButton variant="hero" size="sm">
                        <ShoppingBag className="w-4 h-4 mr-2" />
                        Comprar
                      </LumieButton>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Products;