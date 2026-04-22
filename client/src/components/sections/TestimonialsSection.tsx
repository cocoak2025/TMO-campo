import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MessageCircle, ExternalLink } from "lucide-react";

// Liste des vrais avis clients à remplir une fois récoltés.
// IMPORTANT: n'ajouter ici QUE des avis avec autorisation écrite du client,
// ou des avis publics Google Reviews (avec lien vers l'avis d'origine).
// Ne jamais inventer de témoignages ni citer nommément un établissement
// sans son accord — risque juridique (fausse publicité, usurpation).
const testimonials: {
  name: string;
  role: string;
  rating: number;
  text: string;
}[] = [];

export function TestimonialsSection() {
  // À remplacer par l'URL Google Review réelle une fois le Google Business
  // Profile créé (business.google.com) et le Place ID récupéré.
  const googleReviewUrl =
    "https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID";

  const hasTestimonials = testimonials.length > 0;

  return (
    <section
      id="avis"
      className="py-12 md:py-20 bg-primary/5"
      data-testid="section-testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Votre avis nous{" "}
            <span className="text-primary">intéresse</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Vous avez voyagé avec TMO-Campo ? Partagez votre expérience sur
            Google — vos retours nous aident à faire connaître notre service
            aux personnes qui en ont besoin.
          </p>
        </div>

        {hasTestimonials && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-8">
            {testimonials.map((t, index) => (
              <Card
                key={index}
                className="p-5 flex flex-col gap-3 hover-elevate transition-all"
                data-testid={`testimonial-${index}`}
              >
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
        )}

        <Card className="p-6 md:p-8 bg-primary/10 border-primary/20 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="w-12 h-12 md:w-14 md:h-14 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
              <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-primary" />
            </div>
            <div className="flex items-center justify-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <h3 className="text-base md:text-lg font-bold text-foreground">
              Laissez-nous votre avis sur Google
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              Votre retour compte énormément pour une petite entreprise locale
              comme la nôtre. Deux minutes suffisent.
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
