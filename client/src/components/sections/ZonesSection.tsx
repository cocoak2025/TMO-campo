import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const zones = [
  "Genève-ville",
  "Carouge",
  "Lancy",
  "Grand-Lancy",
  "Petit-Lancy",
  "Onex",
  "Meyrin",
  "Vernier",
  "Plan-les-Ouates",
  "Bernex",
  "Thônex",
  "Chêne-Bougeries",
  "Chêne-Bourg",
  "Versoix",
  "Veyrier",
  "Grand-Saconnex",
  "Pregny-Chambésy",
  "Cologny",
  "Vandoeuvres",
  "Collonge-Bellerive",
  "Troinex",
  "Confignon",
  "Aéroport GVA",
  "Hôpitaux et cliniques du canton",
];

export function ZonesSection() {
  return (
    <section
      id="zones"
      className="py-12 md:py-16 bg-secondary/30"
      data-testid="section-zones"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Zones <span className="text-primary">desservies</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Nous couvrons tout le canton de Genève et ses alentours. Voici
            quelques-unes des communes où nous intervenons au quotidien :
          </p>
        </div>

        <Card className="p-5 md:p-6">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            <h3 className="text-sm md:text-base font-semibold text-foreground">
              Communes et lieux couverts
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {zones.map((zone) => (
              <span
                key={zone}
                className="inline-flex items-center px-3 py-1.5 bg-primary/10 text-primary text-xs md:text-sm font-medium rounded-full hover:bg-primary/20 transition-colors cursor-default"
                data-testid={`zone-${zone.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {zone}
              </span>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Votre commune ne figure pas dans la liste ? Nous couvrons également
            les communes voisines et trajets inter-cantonaux sur demande.
          </p>
        </Card>
      </div>
    </section>
  );
}
