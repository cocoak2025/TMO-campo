import { useState, useEffect } from "react";
import { Phone } from "lucide-react";

export function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-6 left-6 z-50 transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
      data-testid="floating-call-container"
    >
      <a
        href="tel:+41767720055"
        className="flex items-center justify-center w-14 h-14 bg-primary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        aria-label="Appeler TMO-Campo au 076 772 00 55"
        data-testid="button-floating-call"
      >
        <Phone className="w-6 h-6 text-primary-foreground" />
      </a>
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-primary border-2 border-white"></span>
      </span>
    </div>
  );
}
