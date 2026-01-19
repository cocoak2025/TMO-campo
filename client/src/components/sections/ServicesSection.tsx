import { Card } from "@/components/ui/card";
import {
  Accessibility,
  Users,
  GraduationCap,
  Heart,
  Clock,
  Shield,
  MapPin,
  Truck,
} from "lucide-react";

const services = [
  {
    icon: Accessibility,
    title: "Transport PMR",
    description:
      "Transport adapté pour personnes à mobilité réduite avec véhicules équipés de rampes pour fauteuils roulants.",
  },
  {
    icon: Users,
    title: "Personnes Âgées",
    description:
      "Accompagnement personnalisé pour les seniors, de la porte jusqu'à la destination finale.",
  },
  {
    icon: GraduationCap,
    title: "Transport Écoliers",
    description:
      "Transport scolaire adapté pour les enfants à mobilité réduite, en toute sécurité.",
  },
  {
    icon: Heart,
    title: "Transport Médical",
    description:
      "Trajets vers les hôpitaux, cliniques et rendez-vous médicaux à Genève et environs.",
  },
  {
    icon: Clock,
    title: "Disponible 7/7",
    description:
      "Service disponible tous les jours de la semaine, avec flexibilité en cas d'urgence.",
  },
  {
    icon: Shield,
    title: "Sécurité Garantie",
    description:
      "Véhicules entretenus, chauffeurs formés et assurance complète pour votre tranquillité.",
  },
  {
    icon: MapPin,
    title: "Tout Genève",
    description:
      "Couverture complète de Genève et ses alentours, du canton aux communes voisines.",
  },
  {
    icon: Truck,
    title: "Véhicules Adaptés",
    description:
      "Flotte de véhicules spécialement équipés pour le transport de personnes handicapées.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-12 md:py-20 bg-secondary/30"
      data-testid="section-services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Nos Services de{" "}
            <span className="text-primary">Transport Adapté</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Chez TMO-Campo, nous offrons des solutions de transport adaptées pour 
            les personnes handicapées, les écoliers et les personnes âgées à Genève.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-3 md:p-5 hover-elevate transition-all duration-300"
              data-testid={`card-service-${index}`}
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2 md:mb-3">
                <service.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>
              <h3 className="text-sm md:text-base font-semibold text-foreground mb-1">
                {service.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed hidden sm:block">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-8 md:mt-12 p-4 md:p-6 bg-primary rounded-lg text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-lg md:text-xl font-bold text-primary-foreground mb-2 md:mb-3">
              Transport écoliers mobilité réduite
            </h3>
            <p className="text-sm text-primary-foreground/90 mb-4 hidden sm:block">
              Service spécialisé pour le transport scolaire des enfants à mobilité réduite.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-xs text-primary-foreground/80">
              <span className="px-3 py-1.5 bg-primary-foreground/10 rounded-full">
                Ponctualité
              </span>
              <span className="px-3 py-1.5 bg-primary-foreground/10 rounded-full">
                Chauffeurs formés
              </span>
              <span className="px-3 py-1.5 bg-primary-foreground/10 rounded-full">
                Sécurisé
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
