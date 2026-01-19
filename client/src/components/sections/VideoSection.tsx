import { Card } from "@/components/ui/card";
import { Play, Truck } from "lucide-react";
import vehicleImage from "@assets/3_edited_1768825738680.jpg";
import demoVideo from "@assets/IMG-sortez_1768825738680.mov";

export function VideoSection() {
  return (
    <section
      id="videos"
      className="py-20 md:py-28 bg-secondary/30"
      data-testid="section-videos"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Découvrez Nos{" "}
            <span className="text-primary">Véhicules en Action</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Regardez comment nos véhicules adaptés permettent un chargement sécurisé 
            et confortable des fauteuils roulants. Transport PMR Genève en toute simplicité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            <div className="p-6">
              <h3 className="font-semibold text-foreground mb-2">
                Démonstration: Chargement du Fauteuil Roulant
              </h3>
              <p className="text-sm text-muted-foreground">
                Découvrez comment notre véhicule permet un accès facile et sécurisé 
                pour les personnes en fauteuil roulant grâce à notre rampe adaptée.
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
                <div className="p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Truck className="w-5 h-5" />
                    <span className="font-medium">Notre Véhicule Adapté</span>
                  </div>
                  <p className="text-sm text-white/80">
                    Véhicule équipé d'une rampe pour un accès facilité
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-foreground mb-2">
                Véhicule Adapté Handicapé Suisse
              </h3>
              <p className="text-sm text-muted-foreground">
                Notre véhicule est équipé d'une rampe électrique permettant un accès 
                autonome et sécurisé pour les personnes en fauteuil roulant.
              </p>
            </div>
          </Card>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { title: "Rampe Électrique", desc: "Accès facile et sécurisé" },
            { title: "Fixations Homologuées", desc: "Sécurité maximale pendant le trajet" },
            { title: "Espace Confortable", desc: "Confort optimal pour les passagers" },
          ].map((item, index) => (
            <div key={index} className="text-center p-4 bg-background rounded-lg border">
              <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
