import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export function ContactSection() {
  const whatsappNumber = "41767720055";
  const whatsappMessage = encodeURIComponent(
    "Bonjour, je souhaite réserver un transport PMR à Genève."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section
      id="contact"
      className="py-12 md:py-20 bg-secondary/30"
      data-testid="section-contact"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Contactez-<span className="text-primary">Nous</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Besoin d'un transport PMR à Genève ? Contactez-nous par WhatsApp !
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-5 md:p-8 mb-6 bg-[#25D366]/5 border-[#25D366]/20">
            <div className="text-center space-y-4">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366]/20 flex items-center justify-center mx-auto">
                <SiWhatsapp className="w-7 h-7 md:w-8 md:h-8 text-[#25D366]" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                  WhatsApp - Réponse Rapide
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground max-w-lg mx-auto">
                  Le moyen le plus rapide de nous joindre !
                </p>
              </div>
              <Button
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white px-6"
                asChild
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="button-whatsapp-main"
                >
                  <SiWhatsapp className="w-4 h-4 mr-2" />
                  Envoyer un Message
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </Card>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <Card className="p-3 md:p-4 hover-elevate text-center">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2 mx-auto">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>
              <h3 className="text-xs md:text-sm font-semibold text-foreground mb-1">Téléphone</h3>
              <a
                href="tel:0767720055"
                className="text-primary font-medium text-sm md:text-base hover:underline"
                data-testid="link-contact-phone"
              >
                076 772 00 55
              </a>
            </Card>

            <Card className="p-3 md:p-4 hover-elevate text-center">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2 mx-auto">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>
              <h3 className="text-xs md:text-sm font-semibold text-foreground mb-1">Email</h3>
              <a
                href="mailto:contact@tmocampo.com"
                className="text-primary text-xs md:text-sm font-medium hover:underline break-all"
                data-testid="link-contact-email"
              >
                contact@tmocampo.com
              </a>
            </Card>

            <Card className="p-3 md:p-4 hover-elevate text-center">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2 mx-auto">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>
              <h3 className="text-xs md:text-sm font-semibold text-foreground mb-1">Adresse</h3>
              <p className="text-muted-foreground text-[10px] md:text-xs">
                Ch. des Palettes 27<br />
                1212 Grand-Lancy
              </p>
            </Card>

            <Card className="p-3 md:p-4 hover-elevate text-center">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2 mx-auto">
                <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>
              <h3 className="text-xs md:text-sm font-semibold text-foreground mb-1">Horaires</h3>
              <p className="text-muted-foreground text-[10px] md:text-xs">
                <strong className="text-foreground">7/7</strong> - Flexibles
              </p>
            </Card>
          </div>

          <div className="mt-6 text-center">
            <div className="inline-block p-3 md:p-4 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-xl md:text-2xl font-bold text-primary">Dès 40 CHF</p>
              <p className="text-xs md:text-sm text-muted-foreground">
                Tarifs compétitifs pour Genève
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
