import { Card } from "@/components/ui/card";
import { Play, Truck } from "lucide-react";
import vehicleImage from "@assets/3_edited_1768825738680.jpg";
import demoVideo from "@assets/IMG-sortez_1768825738680.mov";

export function VideoSection() {
  return (
    <section
      id="videos"
      className="py-12 md:py-20 bg-secondary/30"
      data-testid="section-videos"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Nos{" "}
            <span className="text-primary">Véhicules en Action</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Découvrez nos véhicules adaptés pour le transport PMR à Genève.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <Card className="overflow-hidden" data-testid="video-section-1">
            <div className="aspect-video relative overflow-hidden">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster={vehicleImage}
                preload="auto"
                data-testid="video-demo"
              >
                <source src={demoVideo} type="video/quicktime" />
                <source src={demoVideo} type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
            </div>
            <div className="p-3 md:p-4">
              <h3 className="text-sm md:text-base font-semibold text-foreground mb-1">
                Démonstration: Chargement Fauteuil Roulant
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground hidden sm:block">
                Accès facile et sécurisé grâce à notre rampe adaptée.
              </p>
            </div>
          </Card>

          <Card className="overflow-hidden" data-testid="video-section-2">
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={vehicleImage} 
                alt="Véhicule adapté PMR TMO-Campo avec rampe pour fauteuil roulant" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-3 md:p-4 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <Truck className="w-4 h-4" />
                    <span className="text-sm font-medium">Notre Véhicule Adapté</span>
                  </div>
                  <p className="text-xs text-white/80 hidden sm:block">
                    Rampe pour un accès facilité
                  </p>
                </div>
              </div>
            </div>
            <div className="p-3 md:p-4">
              <h3 className="text-sm md:text-base font-semibold text-foreground mb-1">
                Véhicule Adapté Handicapé Suisse
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground hidden sm:block">
                Rampe électrique pour un accès autonome et sécurisé.
              </p>
            </div>
          </Card>
        </div>

        <div className="mt-6 md:mt-8 grid grid-cols-3 gap-2 md:gap-4">
          {[
            { title: "Rampe Électrique", desc: "Accès sécurisé" },
            { title: "Fixations Homologuées", desc: "Sécurité maximale" },
            { title: "Espace Confortable", desc: "Confort optimal" },
          ].map((item, index) => (
            <div key={index} className="text-center p-2 md:p-3 bg-background rounded-lg border">
              <h4 className="text-xs md:text-sm font-semibold text-foreground mb-0.5">{item.title}</h4>
              <p className="text-[10px] md:text-xs text-muted-foreground hidden sm:block">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
