import { Button } from "@/components/ui/button";
import { Phone, Calendar, CheckCircle2, ArrowRight } from "lucide-react";
import genevaImage from "@assets/lake-3638347_1920_1768825738680.jpg";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${genevaImage}')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/70 to-foreground/90" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full border border-primary/30 text-primary-foreground/90 text-sm font-medium">
            <Calendar className="w-4 h-4" />
            <span>Disponible 7 jours sur 7</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Transport PMR Genève
            <span className="block text-primary mt-2">
              pour Personnes à Mobilité Réduite
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Véhicule adapté handicapé en Suisse. Service de transport professionnel 
            pour personnes handicapées, personnes âgées et écoliers à mobilité réduite. 
            Fauteuil roulant à disposition.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="w-full sm:w-auto text-lg px-8 py-6"
              onClick={() => scrollToSection("#contact")}
              data-testid="button-hero-contact"
            >
              <Phone className="w-5 h-5 mr-2" />
              Réserver un Transport
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-lg px-8 py-6 bg-white/10 border-white/30 text-white backdrop-blur-sm hover:bg-white/20"
              onClick={() => scrollToSection("#services")}
              data-testid="button-hero-services"
            >
              Nos Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
            {[
              { text: "Dès 40 CHF", subtext: "Tarifs compétitifs" },
              { text: "Tout Genève", subtext: "et ses alentours" },
              { text: "Fauteuil roulant", subtext: "à disposition" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <CheckCircle2 className="w-6 h-6 text-primary" />
                <span className="font-bold text-white text-lg">{item.text}</span>
                <span className="text-white/70 text-sm">{item.subtext}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
