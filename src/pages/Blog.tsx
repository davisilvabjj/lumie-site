import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Calendar, User, ArrowRight } from "lucide-react";
import { LumieButton } from "@/components/ui/lumie-button";

const blogPosts = [
  {
    id: 1,
    title: "Como Cuidar da Sua Prata 925",
    excerpt: "Dicas essenciais para manter suas joias de prata sempre brilhantes e conservadas.",
    date: "2024-01-15",
    author: "LUMIÊ Team",
    image: "/placeholder.svg",
    category: "Cuidados"
  },
  {
    id: 2,
    title: "Tendências em Joias Folheadas 2024",
    excerpt: "Descubra as principais tendências em joias folheadas a ouro para este ano.",
    date: "2024-01-10",
    author: "LUMIÊ Team",
    image: "/placeholder.svg",
    category: "Tendências"
  },
  {
    id: 3,
    title: "A Arte dos Berloques Personalizados",
    excerpt: "Como os berloques podem contar sua história pessoal através de joias únicas.",
    date: "2024-01-05",
    author: "LUMIÊ Team",
    image: "/placeholder.svg",
    category: "Personalização"
  },
  {
    id: 4,
    title: "Combinando Pulseiras: Guia de Estilo",
    excerpt: "Aprenda a combinar diferentes pulseiras para criar looks incríveis.",
    date: "2023-12-28",
    author: "LUMIÊ Team",
    image: "/placeholder.svg",
    category: "Estilo"
  },
  {
    id: 5,
    title: "Piercings: Cuidados e Tendências",
    excerpt: "Tudo sobre piercings: desde os cuidados necessários até as últimas tendências.",
    date: "2023-12-20",
    author: "LUMIÊ Team",
    image: "/placeholder.svg",
    category: "Piercings"
  },
  {
    id: 6,
    title: "Pingentes com Significado",
    excerpt: "Descubra o simbolismo por trás dos diferentes tipos de pingentes.",
    date: "2023-12-15",
    author: "LUMIÊ Team",
    image: "/placeholder.svg",
    category: "Significados"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-muted/30 to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
              Blog LUMIÊ
            </h1>
            <p className="font-sans text-xl text-muted-foreground leading-relaxed">
              Descobra dicas, tendências e segredos do mundo das joias. 
              Seu guia completo para escolher e cuidar das suas peças favoritas.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={post.id}
                className="group cursor-pointer animate-slide-up hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-soft group-hover:shadow-elegant transition-elegant">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-elegant group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    
                    <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-smooth">
                      {post.title}
                    </h3>
                    
                    <p className="font-sans text-muted-foreground text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center text-primary text-sm font-medium group-hover:text-accent transition-smooth">
                      <span>Ler mais</span>
                      <ArrowRight className="w-4 h-4 ml-1 transition-elegant group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            <LumieButton variant="outline" size="lg">
              Carregar Mais Posts
            </LumieButton>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Blog;