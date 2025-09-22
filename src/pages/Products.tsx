import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState} from 'react'; 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { LumieButton } from "@/components/ui/lumie-button";
import { Heart, Share2, ShoppingBag, ArrowLeft } from "lucide-react";

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
};

type ProductsData = {
  [key: string]: Product[];
};

const Products = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [productsData, setProductsData] = useState<ProductsData>({});

  const category = searchParams.get('category') || 'aneis';
  const products = productsData[category] || [];

  useEffect(() => {
    fetch("/data/products.json")
    .then((res) => res.json())
    .then((data) => setProductsData(data))
    .then((err) => console.log('Erro ao carregar produtos:', err))
  }, []);

  const handleWhatsAppPurchase = (productName: string) => {
    const phoneNumber = "5588996404002";
    const message = `Olá, tenho interesse no produto ${productName} da Lumiê Joias. Poderia me enviar mais informações?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const categoryNames: Record<string, string> = {
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
      <section className="pt-24 bg-gradient-to-br from-muted/30 to-secondary/10">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <div className="mb-8">
            <LumieButton 
              variant="outline" 
              onClick={() => navigate('/')}
              className="group hover:scale-105 transition-transform"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Voltar ao Início
            </LumieButton>
          </div>
          
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6">
              {categoryNames[category]}
            </h1>
            <p className="font-sans text-base sm:text-lg md:text-xl text-gray-500 leading-relaxed px-4">
              Descubra nossa coleção de {categoryNames[category].toLowerCase()} em prata 925 e folheados a ouro. Qualidade e elegância em cada peça.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid justify-items-end grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {products.map((product, index) => (
              <div 
                key={product.id}
                className="group cursor-pointer animate-slide-up hover-lift border rounded-2xl overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-card overflow-hidden shadow-soft group-hover:shadow-elegant transition-elegant">
                  <div className="aspect-square bg-muted relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-elegant group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="p-4 sm:p-6">
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-smooth line-clamp-2">
                      {product.name}
                    </h3>
                    
                    <p className="font-sans text-gray-500 text-sm md:text-base mb-3 sm:mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                      <span className="font-sans text-lg sm:text-xl font-bold text-primary">
                        {product.price}
                      </span>
                      <LumieButton 
                        variant="hero" 
                        size="sm"
                        onClick={() => handleWhatsAppPurchase(product.name)}
                        className="w-full sm:w-auto"
                      >
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