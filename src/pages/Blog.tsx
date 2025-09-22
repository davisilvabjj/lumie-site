import { useEffect, useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Calendar, User, ArrowRight } from "lucide-react";
import { LumieButton } from "@/components/ui/lumie-button";

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch("/data/blog.json")
    .then((res) => res.json())
    .then((data) => setBlogPosts(data))
    .catch((err) => console.error("Erro ao carregar JSON:", err));
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-muted/30 to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-6">
              Blog LUMIÊ
            </h1>
            <p className="font-sans text-xl text-gray-500 leading-relaxed">
              Descubra dicas, tendências e segredos do mundo das joias. 
              Seu guia completo para escolher e cuidar das suas peças favoritas.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={post.id}
                className="group cursor-pointer animate-slide-up hover-lift border rounded-2xl"
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
                    
                    <p className="font-sans text-gray-500 text-sm leading-relaxed mb-4">
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