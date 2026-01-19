import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logoImage from "@assets/Fond_noir_o-campo_pdf.pdf_(2)_1768826370048.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="col-span-2 lg:col-span-1 space-y-3">
            <div className="flex items-center">
              <img 
                src={logoImage} 
                alt="TMO-Campo Logo - Transport Médical" 
                className="h-12 md:h-14 w-auto object-contain"
                style={{ mixBlendMode: 'screen' }}
              />
            </div>
            <p className="text-background/70 text-xs md:text-sm leading-relaxed">
              Transport PMR à Genève pour personnes à mobilité réduite et âgées.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-sm md:text-base">Services</h3>
            <ul className="space-y-1 text-xs md:text-sm text-background/70">
              <li>Transport PMR</li>
              <li>Personnes handicapées</li>
              <li>Personnes âgées</li>
              <li>Transport écoliers</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-sm md:text-base">Contact</h3>
            <ul className="space-y-1.5 text-xs md:text-sm">
              <li>
                <a
                  href="tel:0767720055"
                  className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
                  data-testid="link-footer-phone"
                >
                  <Phone className="w-3 h-3 text-primary" />
                  076 772 00 55
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@tmocampo.com"
                  className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
                  data-testid="link-footer-email"
                >
                  <Mail className="w-3 h-3 text-primary" />
                  contact@tmocampo.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-background/70">
                <MapPin className="w-3 h-3 text-primary mt-0.5" />
                <span>Grand-Lancy, GE</span>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-sm md:text-base">Horaires</h3>
            <div className="flex items-start gap-2 text-xs md:text-sm text-background/70">
              <Clock className="w-3 h-3 text-primary mt-0.5" />
              <div>
                <p className="font-medium text-background">7/7</p>
                <p>Flexibles</p>
              </div>
            </div>
            <p className="text-lg md:text-xl font-bold text-primary">Dès 40 CHF</p>
          </div>
        </div>

        <div className="border-t border-background/20 mt-6 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-background/60">
            <p>&copy; {currentYear} TMO-Campo</p>
            <div className="flex items-center gap-4">
              <span>Transport PMR Genève</span>
              <span className="hidden sm:inline">Véhicule adapté handicapé Suisse</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
