import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-background" data-testid="page-legal">
      <Header />
      <main className="pt-32 md:pt-40 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Mentions légales
          </h1>

          <Card className="p-6 md:p-8 space-y-6 text-sm md:text-base text-foreground/90 leading-relaxed">
            <section>
              <h2 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                Éditeur du site
              </h2>
              <p>
                <strong>TMO-Campo</strong> — Transport PMR Genève
                <br />
                Chemin des Palettes 27
                <br />
                1212 Grand-Lancy, Genève (Suisse)
                <br />
                Téléphone : 076 772 00 55
                <br />
                Email : transportocampo@gmail.com
              </p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                Activité
              </h2>
              <p>
                Service de transport adapté pour personnes à mobilité réduite
                (PMR), personnes handicapées, personnes âgées et écoliers à
                Genève et dans le canton. Véhicules équipés de rampes pour
                fauteuils roulants.
              </p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                Hébergement
              </h2>
              <p>
                Site hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA
                91789, États-Unis.
              </p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                Protection des données
              </h2>
              <p>
                Les informations collectées via les formulaires de contact sont
                utilisées exclusivement pour répondre à vos demandes de
                transport. Elles ne sont ni vendues, ni transmises à des tiers.
                Conformément à la Loi fédérale sur la protection des données
                (LPD), vous disposez d'un droit d'accès, de rectification et de
                suppression de vos données. Pour exercer ce droit, contactez-nous
                par email.
              </p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                Cookies
              </h2>
              <p>
                Ce site n'utilise pas de cookies de traçage publicitaire. Seuls
                des cookies techniques essentiels au fonctionnement du site
                peuvent être déposés.
              </p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                Propriété intellectuelle
              </h2>
              <p>
                L'ensemble du contenu du site (textes, images, logos, vidéos)
                est la propriété exclusive de TMO-Campo. Toute reproduction
                sans autorisation préalable est interdite.
              </p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                Responsabilité
              </h2>
              <p>
                Les informations fournies sur ce site le sont à titre indicatif.
                Les tarifs peuvent varier selon les conditions du trajet (trafic,
                distance, heures). Un devis précis est toujours confirmé avant
                toute prestation.
              </p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                Droit applicable
              </h2>
              <p>
                Le présent site et les prestations de TMO-Campo sont soumis au
                droit suisse. Tout litige relèvera de la compétence des
                tribunaux de Genève.
              </p>
            </section>
          </Card>

          <div className="mt-6 text-center">
            <a
              href="/"
              className="text-sm text-primary hover:underline"
              data-testid="link-back-home"
            >
              ← Retour à l'accueil
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
