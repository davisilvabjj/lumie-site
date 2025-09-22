import { Instagram, Facebook, Mail, MapPin, Clock } from "lucide-react";
import lumieLogoSecondary from "../assets/brand/logo-secondary.svg";
import code72logo from "../assets/brand/code-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 pt-8 pb-4 md:pt-16 md:pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={lumieLogoSecondary} 
                alt="Lumiê Jóias" 
                className="w-32"
              />
            </div>
            <p className="font-sans text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
              Seu brilho em cada detalhe!
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/joiasslumie/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-elegant hover:scale-110"
                aria-label="Instagram LUMIÊ"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:contato@joiaslumie.com"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-elegant hover:scale-110"
                aria-label="Email LUMIÊ"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Coleções */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-6">Nossas Coleções</h4>
            <ul className="space-y-3 font-sans">
              <li>
                <a href="/products?category=aneis" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Anéis
                </a>
              </li>
              <li>
                <a href="/products?category=colares" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Colares
                </a>
              </li>
              <li>
                <a href="/products?category=brincos" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Brincos
                </a>
              </li>
              <li>
                <a href="/products?category=aliancas" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Alianças
                </a>
              </li>
              <li>
                <a href="/products?category=berloques" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Berloques
                </a>
              </li>
              <li>
                <a href="/products?category=pulseiras" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Pulseiras
                </a>
              </li>
            </ul>
          </div>

          {/* Links de navegação */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-6">Navegação</h4>
            <ul className="space-y-3 font-sans">
              <li>
                <a href="#hero" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Início
                </a>
              </li>
              <li>
                <a href="#collections" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Coleções
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Sobre
                </a>
              </li>
              <li>
                <a href="/blog" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Blog
                </a>
              </li>
              <li>
                <a href="#instagram" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Informações */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-6">Atendimento</h4>
            <div className="space-y-4 font-sans">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 mt-0.5 text-primary-foreground/60" />
                <div>
                  <p className="text-white">Segunda a Sexta</p>
                  <p className="text-sm text-primary-foreground/60">9h às 18h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col gap-8 md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white font-sans">
              © 2025 LUMIÊ Joias. Todos os direitos reservados.
            </div>
            <div className="flex flex-col gap-2 justify-center space-x-6 text-sm font-sans">
              <span className="text-gray-200 text-center md:text-right">Desenvolvido por:</span>
              <a href="https://www.code72.com.br" target="_blank" className="hover:opacity-75 transition-smooth">
                <img src={code72logo} alt="Code setenta e dois" className="w-[108px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;