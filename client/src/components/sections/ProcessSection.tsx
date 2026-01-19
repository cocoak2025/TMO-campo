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
    <section className="py-10 md:py-16 bg-primary/5" data-testid="section-process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2">
            Comment ça fonctionne ?
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Un service simple et efficace en 3 étapes
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 md:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
              data-testid={`process-step-${index}`}
            >
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs md:text-sm font-bold mb-2 md:mb-3">
                {index + 1}
              </div>
              <div
                className={`w-10 h-10 md:w-14 md:h-14 rounded-full ${step.color} flex items-center justify-center mb-2 md:mb-3`}
              >
                <step.icon className="w-5 h-5 md:w-7 md:h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xs sm:text-sm md:text-base font-semibold text-foreground mb-1">
                {step.title}
              </h3>
              <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground max-w-xs hidden sm:block">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
