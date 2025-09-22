import whatsappIcon from '../assets/others/whats.svg';

const WhatsAppFloat = () => {
  const phoneNumber = "5588996404002";
  const message = "Olá! Gostaria de saber mais sobre as joias Lumiê!";
  
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
      <img src={whatsappIcon} alt="" />
    </button>
  );
};

export default WhatsAppFloat;