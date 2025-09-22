import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { LumieButton } from "@/components/ui/lumie-button";
import { Link, useLocation } from "react-router-dom";
import lumieLogo from "/assets/brand/logo-primary.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const location = useLocation();

  const navItems = [
    { name: "Início", href: "#hero" },
    { name: "Coleções", href: "#collections" },
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

  //ativar o link quando estiver na seção
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 }
    );

    navItems
      .filter((item) => item.href.startsWith("#"))
      .forEach((item) => {
        const section = document.getElementById(item.href.replace("#", ""));
        if (section) observer.observe(section);
      });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-background/90 backdrop-blur-md border-b">
      <div className="container">
        <div className="my-class-navcontent flex items-center justify-between h-[56px] md:h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
              <img 
                src={lumieLogo} 
                alt="Lumiê Joias" 
                className="w-[68px] md:w-24"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-baseline md:space-x-7">
              {navItems.map((item) => (
                item.href.startsWith("#") ? (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`font-sans text-sm font-medium px-3 py-2 rounded-md transition-smooth ${activeSection === item.href ? "text-primary bg-gray-200/50" : "text-foreground hover:text-primary hover:bg-gray-200/50"}`}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="font-sans text-sm font-medium text-foreground hover:text-primary transition-smooth px-3 py-2 rounded-md hover:bg-gray-200/50"
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
              onClick={() => window.open('https://wa.me/5588996404002?text=Olá, gostaria de saber mais sobre as joias da Lumiê!', '_blank')}
            >
              Fale Conosco
            </LumieButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-gray-300/50 transition-smooth"
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
            <div className="pt-2 pb-6 space-y-1 border-t transition">
              {navItems.map((item) => (
                item.href.startsWith("#") ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    className="font-sans text-base font-medium text-foreground hover:text-primary block px-3 py-4 rounded-md hover:bg-muted/50 transition-smooth w-full text-left"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="font-sans text-base font-medium text-foreground hover:text-primary block px-3 py-4 rounded-md hover:bg-muted/50 transition-smooth"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <div className="pt-4">
                <LumieButton 
                  variant="hero" 
                  size="icon" 
                  className="w-full"
                  onClick={() => {
                    setIsOpen(false);
                    window.open('https://wa.me/5588996404002?text=Olá, gostaria de saber mais sobre as joias da Lumiê!', '_blank');
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