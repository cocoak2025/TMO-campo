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
    <section id="about" className="py-20 md:py-28" data-testid="section-about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
                Votre Partenaire de{" "}
                <span className="text-primary">Confiance</span> à Genève
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Notre entreprise se consacre à offrir des solutions de transport adaptées 
                pour les personnes handicapées physiquement, les écoliers, les personnes âgées 
                et ceux avec une mobilité réduite. Nous sommes basés à Genève et nous nous 
                efforçons de fournir le meilleur service de transport accessible pour tous les besoins.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nous sommes équipés pour répondre aux besoins de chaque client, que ce soit 
                une personne se déplaçant en chaise roulante ou une personne âgée nécessitant 
                une aide supplémentaire pour entrer et sortir du véhicule.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="p-4 text-center">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Pourquoi Choisir TMO Campo ?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                    data-testid={`feature-${index}`}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>

            <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">
                Véhicule adapté handicapé Suisse
              </h4>
              <p className="text-sm text-muted-foreground">
                Nous avons un véhicule équipé d'une rampe pour chaise roulante, ce qui permet 
                aux personnes handicapées de monter et de descendre en toute facilité. 
                Nous veillons également à ce que nos véhicules soient toujours propres et 
                bien entretenus, afin de garantir une expérience de voyage agréable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
