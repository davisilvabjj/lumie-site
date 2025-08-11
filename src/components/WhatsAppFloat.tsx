import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const phoneNumber = "5585999887766";
  const message = "Olá! Gostaria de saber mais sobre as joias Lumié";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="whatsapp-float animate-float"
      aria-label="Entrar em contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </button>
  );
};

export default WhatsAppFloat;