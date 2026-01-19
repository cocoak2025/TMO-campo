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
      className="py-20 md:py-28 bg-secondary/30"
      data-testid="section-services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nos Services de{" "}
            <span className="text-primary">Transport Adapté</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Chez TMO Campo, nous offrons des solutions de transport adaptées pour 
            les personnes handicapées, les écoliers et les personnes âgées à Genève. 
            Véhicule adapté handicapé en Suisse, disponible 7 jours sur 7.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate transition-all duration-300"
              data-testid={`card-service-${index}`}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 bg-primary rounded-lg text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Transport écoliers mobilité réduite
            </h3>
            <p className="text-primary-foreground/90 mb-6">
              Service spécialisé pour le transport scolaire des enfants à mobilité réduite. 
              Nous accompagnons vos enfants en toute sécurité, du domicile à l'école et retour.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-primary-foreground/80">
              <span className="px-4 py-2 bg-primary-foreground/10 rounded-full">
                Ponctualité garantie
              </span>
              <span className="px-4 py-2 bg-primary-foreground/10 rounded-full">
                Chauffeurs formés
              </span>
              <span className="px-4 py-2 bg-primary-foreground/10 rounded-full">
                Véhicules sécurisés
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
