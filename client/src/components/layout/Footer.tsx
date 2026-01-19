import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logoImage from "@assets/Fond_noir_o-campo_pdf.pdf_(2)_1768826370048.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src={logoImage} 
                alt="TMO-Campo Logo - Transport Médical" 
                className="h-16 w-auto object-contain"
                style={{ mixBlendMode: 'screen' }}
              />
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Service de transport PMR à Genève pour personnes à mobilité réduite, 
              personnes âgées et écoliers. Véhicules adaptés avec rampe pour fauteuil roulant.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Nos Services</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Transport PMR Genève</li>
              <li>Transport personnes handicapées</li>
              <li>Transport personnes âgées</li>
              <li>Transport écoliers mobilité réduite</li>
              <li>Transport médical</li>
              <li>Transport EMS & institutions</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:0767720055"
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
                  data-testid="link-footer-phone"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  076 772 00 55
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@tmocampo.com"
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
                  data-testid="link-footer-email"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  contact@tmocampo.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-background/70">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>
                  Chemin des Palettes 27<br />
                  1212 Grand-Lancy, Genève
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Horaires</h3>
            <div className="flex items-start gap-3 text-sm text-background/70">
              <Clock className="w-4 h-4 text-primary mt-0.5" />
              <div>
                <p className="font-medium text-background">Disponible 7/7</p>
                <p>Du lundi au dimanche</p>
                <p>Flexibles en cas d'urgence</p>
              </div>
            </div>
            <div className="pt-2">
              <p className="text-2xl font-bold text-primary">Dès 40 CHF</p>
              <p className="text-sm text-background/70">Prix de départ</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>&copy; {currentYear} TMO-Campo. Tous droits réservés.</p>
            <div className="flex items-center gap-6">
              <span>Transport PMR Genève</span>
              <span>Véhicule adapté handicapé Suisse</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
