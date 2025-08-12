import { Instagram, Facebook, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-3xl font-bold mb-4">LUMIÊ</h3>
            <p className="font-sans text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
              Joias que iluminam sua essência. Qualidade premium em prata 925 e peças folheadas a ouro. 
              Cada peça é selecionada para expressar sua individualidade única.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/joiaslumie_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-elegant hover:scale-110"
                aria-label="Instagram LUMIÊ"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/joiaslumie"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-elegant hover:scale-110"
                aria-label="Facebook LUMIÊ"
              >
                <Facebook className="w-5 h-5" />
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
                <a href="#aneis" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Anéis
                </a>
              </li>
              <li>
                <a href="#colares" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Colares
                </a>
              </li>
              <li>
                <a href="#brincos" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Brincos
                </a>
              </li>
              <li>
                <a href="#aliancas" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Alianças
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
                  <p className="text-primary-foreground/80">Segunda a Sexta</p>
                  <p className="text-sm text-primary-foreground/60">9h às 18h</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 text-primary-foreground/60" />
                <div>
                  <p className="text-primary-foreground/80">Fortaleza - CE</p>
                  <p className="text-sm text-primary-foreground/60">Atendimento online</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/60 font-sans">
              © 2024 LUMIÊ Joias. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm font-sans">
              <a href="#privacidade" className="text-primary-foreground/60 hover:text-primary-foreground transition-smooth">
                Política de Privacidade
              </a>
              <a href="#termos" className="text-primary-foreground/60 hover:text-primary-foreground transition-smooth">
                Termos de Uso
              </a>
              <a href="#trocas" className="text-primary-foreground/60 hover:text-primary-foreground transition-smooth">
                Trocas e Devoluções
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;