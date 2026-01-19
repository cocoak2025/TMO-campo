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
      className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${genevaImage}')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/70 to-foreground/90" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/20 rounded-full border border-primary/30 text-primary-foreground/90 text-xs md:text-sm font-medium">
            <Calendar className="w-3 h-3 md:w-4 md:h-4" />
            <span>Disponible 7/7</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Transport PMR Genève
            <span className="block text-primary mt-1 md:mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Personnes à Mobilité Réduite
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Véhicule adapté handicapé en Suisse. Transport professionnel 
            pour personnes handicapées, âgées et écoliers. Fauteuil roulant à disposition.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Button
              className="w-full sm:w-auto px-6"
              onClick={() => scrollToSection("#contact")}
              data-testid="button-hero-contact"
            >
              <Phone className="w-4 h-4 mr-2" />
              Réserver un Transport
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto px-6 bg-white/10 border-white/30 text-white backdrop-blur-sm hover:bg-white/20"
              onClick={() => scrollToSection("#services")}
              data-testid="button-hero-services"
            >
              Nos Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 md:pt-10 max-w-2xl mx-auto">
            {[
              { text: "Dès 40 CHF", subtext: "Tarifs compétitifs" },
              { text: "Tout Genève", subtext: "et alentours" },
              { text: "Fauteuil roulant", subtext: "à disposition" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-1 p-2 sm:p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                <span className="font-bold text-white text-xs sm:text-sm md:text-base">{item.text}</span>
                <span className="text-white/70 text-[10px] sm:text-xs hidden sm:block">{item.subtext}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
