import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Combien coûte un transport PMR à Genève ?",
    answer:
      "Nos tarifs démarrent à 40 CHF pour un trajet intra-ville Genève. Pour un trajet vers une commune voisine, compter environ 50 CHF. Les tarifs varient selon la distance et la durée. Nous proposons des tarifs préférentiels pour les trajets réguliers et les partenariats avec les EMS et institutions.",
  },
  {
    question: "Vos véhicules sont-ils équipés pour les fauteuils roulants ?",
    answer:
      "Oui, nos véhicules sont équipés d'une rampe d'accès pour fauteuils roulants et de fixations adaptées pour un transport sécurisé. Le passager peut rester dans son fauteuil pendant tout le trajet.",
  },
  {
    question: "Comment réserver un transport ?",
    answer:
      "Le plus simple est de nous contacter par WhatsApp ou téléphone au 076 772 00 55 — nous répondons rapidement. Vous pouvez également remplir le formulaire de rappel sur le site. Nous recommandons de réserver à l'avance pour garantir la disponibilité, et nous traitons aussi les demandes d'urgence dans la mesure du possible.",
  },
  {
    question: "Êtes-vous disponibles le week-end et les jours fériés ?",
    answer:
      "Oui, nous sommes disponibles 7 jours sur 7, y compris le week-end et les jours fériés. Pour les dimanches et jours fériés, une légère majoration peut s'appliquer selon le trajet.",
  },
  {
    question: "Transportez-vous les écoliers à mobilité réduite ?",
    answer:
      "Oui, nous assurons le transport scolaire d'enfants à mobilité réduite avec une attention particulière à la sécurité et à la ponctualité. Nos chauffeurs sont habitués à prendre en charge les enfants en fauteuil roulant ou avec d'autres besoins spécifiques.",
  },
  {
    question: "Acceptez-vous les paiements par facture ou abonnement ?",
    answer:
      "Pour les particuliers, nous acceptons le paiement en espèces, par carte bancaire ou par TWINT. Pour les institutions (EMS, hôpitaux, écoles), nous proposons la facturation mensuelle avec un interlocuteur dédié.",
  },
  {
    question: "Quelles zones desservez-vous ?",
    answer:
      "Nous couvrons tout le canton de Genève (Genève-ville, Carouge, Lancy, Meyrin, Vernier, Onex, Versoix, Plan-les-Ouates, etc.) et les alentours, y compris l'aéroport et les principaux établissements médicaux. Des trajets inter-cantonaux sont possibles sur demande.",
  },
  {
    question: "Le chauffeur peut-il aider à monter et descendre du véhicule ?",
    answer:
      "Oui. Nos chauffeurs accompagnent les passagers de la porte d'entrée jusqu'au véhicule, les aident à s'installer en toute sécurité, et les accompagnent jusqu'à leur destination finale.",
  },
];

export function FAQSection() {
  return (
    <section
      id="faq"
      className="py-12 md:py-20"
      data-testid="section-faq"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full text-primary text-xs font-medium mb-3">
            <HelpCircle className="w-3 h-3" />
            <span>Questions fréquentes</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Tout ce que vous devez <span className="text-primary">savoir</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Les réponses aux questions les plus posées sur nos services de
            transport PMR à Genève.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="space-y-2"
          data-testid="faq-accordion"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background border rounded-lg px-4 md:px-5"
              data-testid={`faq-item-${index}`}
            >
              <AccordionTrigger className="text-sm md:text-base font-semibold text-left hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-xs md:text-sm text-muted-foreground leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export const faqData = faqs;
