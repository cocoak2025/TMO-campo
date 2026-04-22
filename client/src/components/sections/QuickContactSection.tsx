import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Clock, CheckCircle2, Send } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const web3FormsAccessKey =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim() ||
  "3dd6ec9f-04c6-4a8f-a8c6-82339de43b9d";
const quoteRecipientEmail =
  import.meta.env.VITE_QUOTE_RECIPIENT_EMAIL?.trim() ||
  "transportocampo@gmail.com";

export function QuickContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    need: "",
    when: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast({
        title: "Champs obligatoires",
        description: "Merci de renseigner au minimum votre nom et téléphone.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: web3FormsAccessKey,
          subject: `Demande de rappel rapide (${formData.name})`,
          from_name: "Site TMO-Campo - Rappel rapide",
          to: quoteRecipientEmail,
          nom: formData.name,
          telephone: formData.phone,
          besoin: formData.need || "Non précisé",
          quand: formData.when || "Non précisé",
        }),
      });
      const result = (await response.json()) as { success?: boolean };
      if (!result.success) throw new Error("Envoi échoué");
      setIsSuccess(true);
      setFormData({ name: "", phone: "", need: "", when: "" });
      toast({
        title: "Demande envoyée !",
        description: "Nous vous rappelons dans moins d'une heure.",
      });
    } catch {
      toast({
        title: "Erreur",
        description:
          "Impossible d'envoyer. Appelez directement le 076 772 00 55.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappUrl = `https://wa.me/41767720055?text=${encodeURIComponent(
    "Bonjour, je souhaite réserver un transport PMR à Genève."
  )}`;

  return (
    <section
      id="rappel"
      className="py-10 md:py-16"
      data-testid="section-quick-contact"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 md:p-8 bg-primary text-primary-foreground">
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                Besoin d'un transport ?
              </h2>
              <p className="text-sm text-primary-foreground/90 mb-4">
                Remplissez le formulaire, nous vous rappelons dans l'heure.
                Ou contactez-nous directement :
              </p>
              <div className="space-y-3">
                <a
                  href="tel:+41767720055"
                  className="flex items-center gap-3 p-3 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                  data-testid="link-quickcontact-phone"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-primary-foreground/80">
                      Appelez-nous
                    </p>
                    <p className="text-base md:text-lg font-bold">
                      076 772 00 55
                    </p>
                  </div>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-[#25D366] rounded-lg hover:bg-[#20BD5A] transition-colors"
                  data-testid="link-quickcontact-whatsapp"
                >
                  <SiWhatsapp className="w-5 h-5 flex-shrink-0 text-white" />
                  <div>
                    <p className="text-xs text-white/90">Message rapide</p>
                    <p className="text-base md:text-lg font-bold text-white">
                      WhatsApp
                    </p>
                  </div>
                </a>
                <div className="flex items-center gap-2 text-xs md:text-sm text-primary-foreground/80 pt-2">
                  <Clock className="w-4 h-4" />
                  <span>Disponible 7 jours / 7</span>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8">
              {isSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-3 py-8">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    Demande reçue !
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Nous vous rappelons dans moins d'une heure.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsSuccess(false)}
                  >
                    Nouvelle demande
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-3"
                  data-testid="form-quick-contact"
                >
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-1">
                    On vous rappelle
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">
                    Réponse sous 1 h (heures ouvrables)
                  </p>
                  <div className="space-y-1.5">
                    <Label htmlFor="qc-name" className="text-xs">
                      Votre nom *
                    </Label>
                    <Input
                      id="qc-name"
                      placeholder="Ex: Marie Dupont"
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      data-testid="input-qc-name"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="qc-phone" className="text-xs">
                      Téléphone *
                    </Label>
                    <Input
                      id="qc-phone"
                      type="tel"
                      inputMode="tel"
                      placeholder="07X XXX XX XX"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                      data-testid="input-qc-phone"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-1.5">
                      <Label htmlFor="qc-when" className="text-xs">
                        Quand ?
                      </Label>
                      <Input
                        id="qc-when"
                        placeholder="Ex: demain 14 h"
                        value={formData.when}
                        onChange={(e) =>
                          setFormData({ ...formData, when: e.target.value })
                        }
                        data-testid="input-qc-when"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="qc-need" className="text-xs">
                        Trajet
                      </Label>
                      <Input
                        id="qc-need"
                        placeholder="Ex: Lancy → HUG"
                        value={formData.need}
                        onChange={(e) =>
                          setFormData({ ...formData, need: e.target.value })
                        }
                        data-testid="input-qc-need"
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                    data-testid="button-qc-submit"
                  >
                    {isSubmitting ? (
                      "Envoi..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Être rappelé
                      </>
                    )}
                  </Button>
                  <p className="text-[10px] text-muted-foreground text-center">
                    Vos données ne sont utilisées que pour vous recontacter.
                  </p>
                </form>
              )}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
