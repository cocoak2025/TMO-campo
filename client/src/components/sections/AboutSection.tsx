import { Card } from "@/components/ui/card";
import { CheckCircle2, Award, Users, Truck } from "lucide-react";

const stats = [
  { icon: Users, value: "7/7", label: "Disponibilité" },
  { icon: Award, value: "40 CHF", label: "À partir de" },
  { icon: Truck, value: "100%", label: "Véhicules adaptés" },
];

const features = [
  "Rampe pour fauteuil roulant intégrée",
  "Chauffeurs formés et attentionnés",
  "Prise en charge à domicile",
  "Véhicules propres et entretenus",
  "Tarifs compétitifs et transparents",
  "Flexibilité en cas d'urgence",
  "Couverture Genève et alentours",
  "Accompagnement personnalisé",
];

export function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-20" data-testid="section-about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
                Votre Partenaire de{" "}
                <span className="text-primary">Confiance</span> à Genève
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Notre entreprise offre des solutions de transport adaptées pour les personnes 
                handicapées, écoliers et personnes âgées à Genève. Nous répondons aux besoins 
                de chaque client avec des véhicules adaptés.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 md:gap-3">
              {stats.map((stat, index) => (
                <Card key={index} className="p-2 md:p-3 text-center">
                  <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-primary mx-auto mb-1" />
                  <div className="text-lg md:text-xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-[10px] md:text-xs text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <Card className="p-4 md:p-6">
              <h3 className="text-base md:text-lg font-semibold text-foreground mb-3 md:mb-4">
                Pourquoi Choisir TMO-Campo ?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2"
                    data-testid={`feature-${index}`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-xs md:text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>

            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <h4 className="text-sm md:text-base font-semibold text-foreground mb-1">
                Véhicule adapté handicapé Suisse
              </h4>
              <p className="text-xs md:text-sm text-muted-foreground">
                Véhicule équipé d'une rampe pour chaise roulante, permettant un accès facile. 
                Véhicules propres et bien entretenus pour une expérience agréable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
