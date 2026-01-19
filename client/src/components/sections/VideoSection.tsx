import { Card } from "@/components/ui/card";
import { Play, Video } from "lucide-react";

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
          <Card className="overflow-hidden" data-testid="video-placeholder-1">
            <div className="aspect-video bg-muted relative flex items-center justify-center group cursor-pointer hover-elevate">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
              <div className="relative z-10 text-center p-8">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Play className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Chargement du Fauteuil Roulant
                </h3>
                <p className="text-sm text-muted-foreground">
                  Démonstration de la rampe d'accès et du système de fixation sécurisé
                </p>
              </div>
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs text-muted-foreground">
                <Video className="w-4 h-4" />
                <span>Emplacement pour vidéo 1</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-foreground mb-2">
                Accès Facilité pour Fauteuil Roulant
              </h3>
              <p className="text-sm text-muted-foreground">
                Notre véhicule est équipé d'une rampe électrique permettant un accès 
                autonome et sécurisé pour les personnes en fauteuil roulant.
              </p>
            </div>
          </Card>

          <Card className="overflow-hidden" data-testid="video-placeholder-2">
            <div className="aspect-video bg-muted relative flex items-center justify-center group cursor-pointer hover-elevate">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
              <div className="relative z-10 text-center p-8">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Play className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Sécurité du Transport
                </h3>
                <p className="text-sm text-muted-foreground">
                  Système de sécurité et confort pendant le trajet
                </p>
              </div>
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs text-muted-foreground">
                <Video className="w-4 h-4" />
                <span>Emplacement pour vidéo 2</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-foreground mb-2">
                Confort et Sécurité Maximale
              </h3>
              <p className="text-sm text-muted-foreground">
                Nos systèmes de fixation et notre conduite adaptée garantissent 
                un transport confortable et sécurisé pour tous nos passagers.
              </p>
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Ces emplacements sont prévus pour intégrer vos vidéos de démonstration. 
            Contactez-nous pour ajouter vos propres contenus vidéo.
          </p>
        </div>
      </div>
    </section>
  );
}
