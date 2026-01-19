import { useState, useEffect } from "react";
import { SiWhatsapp } from "react-icons/si";

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const whatsappNumber = "41767720055";
  const whatsappMessage = encodeURIComponent(
    "Bonjour, je souhaite obtenir des informations sur vos services de transport PMR à Genève."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
      data-testid="whatsapp-button-container"
    >
      <div
        className={`absolute bottom-full right-0 mb-3 px-4 py-2 bg-foreground text-background text-sm rounded-lg shadow-lg whitespace-nowrap transition-all duration-300 ${
          showTooltip ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
        style={{ visibility: showTooltip ? "visible" : "hidden" }}
      >
        Contactez-nous sur WhatsApp
        <div className="absolute -bottom-1 right-6 w-2 h-2 bg-foreground rotate-45" />
      </div>
      
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        data-testid="button-whatsapp"
        aria-label="Contacter via WhatsApp"
      >
        <SiWhatsapp className="w-7 h-7 text-white" />
      </a>
      
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-[#25D366] border-2 border-white"></span>
      </span>
    </div>
  );
}
