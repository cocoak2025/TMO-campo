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
      className="py-20 md:py-28 bg-secondary/30"
      data-testid="section-contact"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contactez-<span className="text-primary">Nous</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Besoin d'un transport PMR à Genève ? Contactez-nous par WhatsApp 
            pour une réponse rapide, ou par téléphone et email.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 mb-8 bg-[#25D366]/5 border-[#25D366]/20">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-[#25D366]/20 flex items-center justify-center mx-auto">
                <SiWhatsapp className="w-10 h-10 text-[#25D366]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Contactez-nous sur WhatsApp
                </h3>
                <p className="text-muted-foreground max-w-lg mx-auto">
                  Le moyen le plus rapide de nous joindre ! Envoyez-nous un message 
                  WhatsApp et recevez une réponse en quelques minutes.
                </p>
              </div>
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white text-lg px-8 py-6"
                asChild
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="button-whatsapp-main"
                >
                  <SiWhatsapp className="w-5 h-5 mr-2" />
                  Envoyer un Message WhatsApp
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </Card>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="p-6 hover-elevate text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Téléphone</h3>
              <a
                href="tel:0767720055"
                className="text-primary font-medium text-lg hover:underline"
                data-testid="link-contact-phone"
              >
                076 772 00 55
              </a>
              <p className="text-sm text-muted-foreground mt-1">
                Disponible 7/7
              </p>
            </Card>

            <Card className="p-6 hover-elevate text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <a
                href="mailto:contact@tmocampo.com"
                className="text-primary font-medium hover:underline break-all"
                data-testid="link-contact-email"
              >
                contact@tmocampo.com
              </a>
            </Card>

            <Card className="p-6 hover-elevate text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Adresse</h3>
              <p className="text-muted-foreground text-sm">
                Chemin des Palettes 27<br />
                1212 Grand-Lancy
              </p>
            </Card>

            <Card className="p-6 hover-elevate text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Horaires</h3>
              <p className="text-muted-foreground text-sm">
                <strong className="text-foreground">7/7</strong><br />
                Flexibles en cas d'urgence
              </p>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-block p-6 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-3xl font-bold text-primary">Dès 40 CHF</p>
              <p className="text-muted-foreground">
                Tarifs compétitifs pour tout Genève et alentours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
