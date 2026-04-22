import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import logoImage from "@assets/logo-tmo.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="col-span-2 lg:col-span-1 space-y-3">
            <div className="flex items-center">
              <img
                src={logoImage}
                alt="TMO-Campo Logo - Transport PMR Genève"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </div>
            <p className="text-background/70 text-xs md:text-sm leading-relaxed">
              Transport PMR à Genève pour personnes à mobilité réduite,
              personnes âgées et écoliers. Véhicules adaptés avec rampe
              fauteuil roulant.
            </p>
            <a
              href="https://wa.me/41767720055"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 bg-[#25D366] text-white text-xs md:text-sm font-medium rounded-md hover:bg-[#20BD5A] transition-colors"
              data-testid="link-footer-whatsapp"
            >
              <SiWhatsapp className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-sm md:text-base">Nos Services</h3>
            <ul className="space-y-1 text-xs md:text-sm text-background/70">
              <li>
                <button
                  onClick={() => scrollToSection("#services")}
                  className="hover:text-background transition-colors text-left"
                >
                  Transport PMR
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#services")}
                  className="hover:text-background transition-colors text-left"
                >
                  Transport personnes âgées
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#services")}
                  className="hover:text-background transition-colors text-left"
                >
                  Transport écoliers handicapés
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#services")}
                  className="hover:text-background transition-colors text-left"
                >
                  Transport médical / hôpitaux
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#institutions")}
                  className="hover:text-background transition-colors text-left"
                >
                  Devis EMS / institutions
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-sm md:text-base">Contact</h3>
            <ul className="space-y-1.5 text-xs md:text-sm">
              <li>
                <a
                  href="tel:+41767720055"
                  className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
                  data-testid="link-footer-phone"
                >
                  <Phone className="w-3 h-3 text-primary" />
                  076 772 00 55
                </a>
              </li>
              <li>
                <a
                  href="mailto:transportocampo@gmail.com"
                  className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
                  data-testid="link-footer-email"
                >
                  <Mail className="w-3 h-3 text-primary" />
                  transportocampo@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-background/70">
                <MapPin className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  Chemin des Palettes 27
                  <br />
                  1212 Grand-Lancy, GE
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-sm md:text-base">Disponibilité</h3>
            <div className="flex items-start gap-2 text-xs md:text-sm text-background/70">
              <Clock className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-background">7 jours / 7</p>
                <p>Réservation la veille recommandée</p>
              </div>
            </div>
            <div className="pt-2">
              <p className="text-lg md:text-xl font-bold text-primary">
                Dès 40 CHF
              </p>
              <p className="text-xs text-background/60">TVA incluse</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-6 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-background/60">
            <p>
              &copy; {currentYear} TMO-Campo — Transport PMR Genève. Tous droits
              réservés.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="/mentions-legales"
                className="hover:text-background transition-colors"
                data-testid="link-footer-legal"
              >
                Mentions légales
              </a>
              <span className="hidden sm:inline text-background/40">·</span>
              <span className="hidden sm:inline">
                Véhicule adapté handicapé Suisse
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
