import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ExternalLink } from "lucide-react";

// IMPORTANT — À REMPLACER PAR DE VRAIS AVIS CLIENTS
// Ces témoignages sont des exemples. Remplace-les par des vrais avis
// récoltés auprès de clients (WhatsApp, email, Google Reviews).
// L'idéal : demander l'autorisation par écrit et stocker l'accord.
const testimonials = [
  {
    name: "Marie L.",
    role: "Proche aidante, Carouge",
    rating: 5,
    text: "Chauffeur ponctuel et très attentionné avec ma mère. Le véhicule est adapté et confortable. Je recommande sans hésiter pour les rendez-vous médicaux.",
  },
  {
    name: "EMS Les Tilleuls",
    role: "Établissement médico-social",
    rating: 5,
    text: "Partenaire fiable depuis plusieurs mois. Transports réguliers de nos résidents vers les HUG, toujours dans les temps et avec professionnalisme.",
  },
  {
    name: "Jean-Pierre M.",
    role: "Client régulier, Lancy",
    rating: 5,
    text: "Service impeccable pour mes trajets en fauteuil roulant. La rampe fonctionne parfaitement et le chauffeur prend vraiment soin des passagers.",
  },
  {
    name: "Famille C.",
    role: "Parents d'élève, Meyrin",
    rating: 5,
    text: "Transport scolaire de notre fils assuré avec une régularité exemplaire. Rassurant pour nous et notre fils se sent en confiance.",
  },
];

export function TestimonialsSection() {
  const googleReviewUrl =
    "https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID";

  return (
    <section
      id="avis"
      className="py-12 md:py-20 bg-primary/5"
      data-testid="section-testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Ils nous font{" "}
            <span className="text-primary">confiance</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Particuliers, familles, EMS et institutions : découvrez pourquoi nos
            clients choisissent TMO-Campo pour leurs transports adaptés à Genève.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-8">
          {testimonials.map((t, index) => (
            <Card
              key={index}
              className="p-5 flex flex-col gap-3 hover-elevate transition-all"
              data-testid={`testimonial-${index}`}
            >
              <Quote className="w-6 h-6 text-primary/40 flex-shrink-0" />
              <div className="flex items-center gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-sm text-foreground/90 leading-relaxed italic flex-1">
                « {t.text} »
              </p>
              <div className="pt-2 border-t">
                <p className="text-sm font-semibold text-foreground">
                  {t.name}
                </p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-5 md:p-6 bg-primary/10 border-primary/20 text-center">
          <div className="max-w-2xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <h3 className="text-base md:text-lg font-bold text-foreground">
              Vous avez voyagé avec nous ?
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              Partagez votre expérience sur Google — cela nous aide énormément
              à faire connaître notre service.
            </p>
            <Button asChild className="mt-2" data-testid="button-google-review">
              <a
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Laisser un avis Google
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
