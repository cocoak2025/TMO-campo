import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Info, MapPin, ArrowRight } from "lucide-react";

const tarifs = [
  {
    trajet: "Genève - intra-ville",
    exemple: "Ex: Eaux-Vives → HUG",
    prix: "40 CHF",
    highlight: false,
  },
  {
    trajet: "Commune voisine",
    exemple: "Ex: Lancy → Carouge",
    prix: "50 CHF",
    highlight: true,
  },
  {
    trajet: "Canton de Genève",
    exemple: "Ex: Grand-Lancy → Versoix",
    prix: "70 CHF",
    highlight: false,
  },
  {
    trajet: "Aéroport de Genève",
    exemple: "Ex: Grand-Lancy → GVA",
    prix: "65 CHF",
    highlight: false,
  },
];

export function TarifsSection() {
  const scrollToContact = () => {
    document
      .querySelector("#rappel")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="tarifs"
      className="py-12 md:py-20"
      data-testid="section-tarifs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Tarifs <span className="text-primary">transparents</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Prix fixes, pas de mauvaise surprise. Exemples indicatifs TTC pour
            un trajet simple. Tarifs préférentiels pour les institutions et
            trajets réguliers.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6">
          {tarifs.map((tarif, index) => (
            <Card
              key={index}
              className={`p-4 md:p-5 text-center hover-elevate transition-all ${
                tarif.highlight
                  ? "border-primary/40 bg-primary/5 shadow-md"
                  : ""
              }`}
              data-testid={`tarif-${index}`}
            >
              <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary mx-auto mb-2" />
              <h3 className="text-sm md:text-base font-semibold text-foreground mb-1">
                {tarif.trajet}
              </h3>
              <p className="text-[10px] md:text-xs text-muted-foreground mb-3 hidden sm:block">
                {tarif.exemple}
              </p>
              <p className="text-xl md:text-2xl font-bold text-primary">
                {tarif.prix}
              </p>
              <p className="text-[10px] md:text-xs text-muted-foreground mt-1">
                à partir de
              </p>
            </Card>
          ))}
        </div>

        <Card className="p-4 md:p-5 bg-secondary/50 border-dashed">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex items-start gap-3 flex-1">
              <Info className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-sm md:text-base font-semibold text-foreground mb-1">
                  Besoin d'un devis précis ?
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Tarifs dégressifs pour trajets réguliers, EMS, écoles et
                  longues distances. Devis gratuit sous 24 h.
                </p>
              </div>
            </div>
            <Button
              onClick={scrollToContact}
              className="w-full md:w-auto flex-shrink-0"
              data-testid="button-tarif-cta"
            >
              Demander un devis
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
