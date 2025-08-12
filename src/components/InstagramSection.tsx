import { Instagram, ExternalLink } from "lucide-react";
import { LumieButton } from "@/components/ui/lumie-button";

const instagramPosts = [
  {
    id: 1,
    image: "/placeholder.svg",
    caption: "Nova coleção de anéis delicados ✨",
    likes: 234,
    url: "https://instagram.com/joiaslumie_"
  },
  {
    id: 2,
    image: "/placeholder.svg",
    caption: "Pulseiras que combinam com tudo 💫",
    likes: 189,
    url: "https://instagram.com/joiaslumie_"
  },
  {
    id: 3,
    image: "/placeholder.svg",
    caption: "Brincos para o dia a dia ✨",
    likes: 156,
    url: "https://instagram.com/joiaslumie_"
  },
  {
    id: 4,
    image: "/placeholder.svg",
    caption: "Colares que iluminam seu look 🌟",
    likes: 278,
    url: "https://instagram.com/joiaslumie_"
  },
  {
    id: 5,
    image: "/placeholder.svg",
    caption: "Berloques cheios de significado 💎",
    likes: 201,
    url: "https://instagram.com/joiaslumie_"
  },
  {
    id: 6,
    image: "/placeholder.svg",
    caption: "Piercings modernos e elegantes ✨",
    likes: 167,
    url: "https://instagram.com/joiaslumie_"
  }
];

const InstagramSection = () => {
  return (
    <section id="instagram" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Siga @joiaslumie_
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Acompanhe as novidades, inspirações e looks incríveis com nossas joias no Instagram
          </p>
          <LumieButton variant="outline" size="lg" className="gap-2">
            <Instagram className="w-5 h-5" />
            Seguir no Instagram
          </LumieButton>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post, index) => (
            <div 
              key={post.id}
              className="group cursor-pointer animate-slide-up hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-square rounded-2xl overflow-hidden bg-muted"
              >
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-elegant group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-elegant" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-elegant">
                  <p className="font-sans text-sm mb-2 line-clamp-2">{post.caption}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs opacity-90">❤️ {post.likes}</span>
                    <ExternalLink className="w-4 h-4 opacity-90" />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="https://instagram.com/joiaslumie_"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-primary hover:text-accent transition-smooth font-medium"
          >
            Ver mais no Instagram →
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;