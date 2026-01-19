import { MapPin, Truck, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    title: "Prise en Charge",
    description: "Vous serez pris en charge à votre porte en fonction de vos besoins",
    color: "bg-primary",
  },
  {
    icon: Truck,
    title: "Trajet Sécurisé",
    description: "Vous serez transporté en toute sécurité par des véhicules adaptés à vos besoins",
    color: "bg-primary/80",
  },
  {
    icon: CheckCircle2,
    title: "Destination",
    description: "Vous êtes arrivé à votre destination en toute tranquillité",
    color: "bg-primary/60",
  },
];

export function ProcessSection() {
  return (
    <section className="py-16 bg-primary/5" data-testid="section-process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Comment ça fonctionne ?
          </h2>
          <p className="text-muted-foreground">
            Un service simple et efficace en 3 étapes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
              data-testid={`process-step-${index}`}
            >
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold mb-4">
                {index + 1}
              </div>
              <div
                className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mb-4`}
              >
                <step.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
