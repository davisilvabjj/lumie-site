import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LumieButton } from "@/components/ui/lumie-button";
import { Link, useLocation } from "react-router-dom";
import lumieLogo from "@/assets/lumie-logo-full.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Início", href: "/" },
    { name: "Coleções", href: "/products" },
    { name: "Sobre", href: "#about" },
    { name: "Blog", href: "/blog" },
    { name: "Instagram", href: "#instagram" },
  ];

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const section = document.getElementById(sectionId.replace("#", ""));
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavigation = (href: string) => {
    if (href.startsWith("#")) {
      scrollToSection(href);
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img 
                src={lumieLogo} 
                alt="Lumiê Joias" 
                className="h-8 w-auto sm:h-10"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                item.href.startsWith("#") ? (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="font-sans text-sm font-medium text-foreground hover:text-primary transition-smooth px-3 py-2 rounded-md hover:bg-muted/50"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="font-sans text-sm font-medium text-foreground hover:text-primary transition-smooth px-3 py-2 rounded-md hover:bg-muted/50"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <LumieButton 
              variant="hero" 
              size="sm"
              onClick={() => window.open('https://wa.me/5511999999999?text=Olá, gostaria de saber mais sobre as joias da Lumiê!', '_blank')}
            >
              Fale Conosco
            </LumieButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-muted/50 transition-smooth"
              aria-expanded="false"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              {navItems.map((item) => (
                item.href.startsWith("#") ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    className="font-sans text-sm font-medium text-foreground hover:text-primary block px-3 py-2 rounded-md hover:bg-muted/50 transition-smooth w-full text-left"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="font-sans text-sm font-medium text-foreground hover:text-primary block px-3 py-2 rounded-md hover:bg-muted/50 transition-smooth"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <div className="pt-4">
                <LumieButton 
                  variant="hero" 
                  size="sm" 
                  className="w-full"
                  onClick={() => {
                    setIsOpen(false);
                    window.open('https://wa.me/5511999999999?text=Olá, gostaria de saber mais sobre as joias da Lumiê!', '_blank');
                  }}
                >
                  Fale Conosco
                </LumieButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;