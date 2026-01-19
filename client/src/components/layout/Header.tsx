import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logoImage from "@assets/Fond_noir_o-campo_pdf.pdf_(1)_1768826371979.png";

const navLinks = [
  { href: "#services", label: "Nos Services" },
  { href: "#about", label: "À Propos" },
  { href: "#videos", label: "Vidéos" },
  { href: "#institutions", label: "Institutions" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            className="flex items-center gap-2"
            data-testid="link-logo"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img 
              src={logoImage} 
              alt="TMO Campo Logo" 
              className="w-12 h-12 object-contain"
              style={{ mixBlendMode: isScrolled ? 'multiply' : 'screen' }}
            />
            <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-foreground' : 'text-white'}`}>
              TMO Campo
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1" data-testid="nav-desktop">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors hover-elevate ${
                  isScrolled
                    ? "text-foreground"
                    : "text-white/90 hover:text-white"
                }`}
                data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:0767720055"
              className="flex items-center gap-2 text-sm font-medium"
              data-testid="link-phone-header"
            >
              <Phone className={`w-4 h-4 ${isScrolled ? 'text-primary' : 'text-white'}`} />
              <span className={isScrolled ? 'text-foreground' : 'text-white'}>076 772 00 55</span>
            </a>
            <Button
              onClick={() => scrollToSection("#contact")}
              data-testid="button-contact-header"
            >
              Nous Contacter
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t" data-testid="nav-mobile">
          <nav className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-foreground hover-elevate rounded-md"
                data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 border-t">
              <a
                href="tel:0767720055"
                className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-primary"
                data-testid="link-phone-mobile"
              >
                <Phone className="w-4 h-4" />
                076 772 00 55
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
