import { Instagram, ExternalLink, Heart } from "lucide-react";
import ringsCollection from "/assets/products/rings-collection.jpg";
import pulseirasCollection from "/assets/products/pulseiras-collection.jpg";
import earringsCollection from "/assets/products/earrings-collection.jpg";
import necklacesCollection from "/assets/products/necklaces-collection.jpg";
import "../css/my-css.css";

const instagramPosts = [
  {
    id: 1,
    image: ringsCollection,
    caption: "Nova coleção de anéis delicados ✨",
    likes: 234,
    url: "https://www.instagram.com/joiasslumie/"
  },
  {
    id: 2,
    image: pulseirasCollection,
    caption: "Pulseiras que combinam com tudo 💫",
    likes: 189,
    url: "https://www.instagram.com/joiasslumie/"
  },
  {
    id: 3,
    image: earringsCollection,
    caption: "Brincos para o dia a dia ✨",
    likes: 156,
    url: "https://www.instagram.com/joiasslumie/"
  },
  {
    id: 4,
    image: necklacesCollection,
    caption: "Colares que iluminam seu look 🌟",
    likes: 278,
    url: "https://www.instagram.com/joiasslumie/"
  },
];

const InstagramSection = () => {
  return (
    <section id="instagram" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Siga @joiasslumie
          </h2>
          <p className="font-sans text-lg text-gray-500 max-w-2xl mx-auto">
            Acompanhe as novidades, inspirações e looks incríveis com nossas joias no Instagram
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {instagramPosts.map((post, index) => (
            <div 
              key={post.id}
              className="group cursor-pointer animate-slide-up hover-lift card"
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
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-elegant instagram-content">
                  <p className="font-sans text-sm mb-2 line-clamp-2">{post.caption}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex gap-[6px] items-center text-xs opacity-90">
                      <Heart size={20} />
                       {post.likes}
                    </span>
                    <ExternalLink className="w-4 h-4 opacity-90" />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        
        <div className="grid justify-items-center text-center mt-12">
          <a 
            href="https://www.instagram.com/joiasslumie/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border flex justify-center items-center gap-[8px] px-8 py-4 text-base rounded-xl text-primary font-medium border border-primary max-w-max hover:bg-primary hover:text-white transition-smooth"
          >
            <Instagram className="w-5 h-5" />
            Seguir no Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;