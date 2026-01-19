import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export function ContactSection() {
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response;
    },
    onSuccess: () => {
      setIsSuccess(true);
      form.reset();
      toast({
        title: "Message envoyé",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
    },
    onError: () => {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    mutation.mutate(data);
  };

  const whatsappNumber = "41767720055";
  const whatsappMessage = encodeURIComponent(
    "Bonjour, je souhaite réserver un transport PMR à Genève."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-secondary/30"
      data-testid="section-contact"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contactez-<span className="text-primary">Nous</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Besoin d'un transport PMR à Genève ? Contactez-nous par téléphone, 
            WhatsApp ou via le formulaire ci-dessous. Nous vous répondons rapidement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-6 hover-elevate">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Téléphone</h3>
                <a
                  href="tel:0767720055"
                  className="text-primary font-medium text-lg hover:underline"
                  data-testid="link-contact-phone"
                >
                  076 772 00 55
                </a>
                <p className="text-sm text-muted-foreground mt-1">
                  Disponible 7/7
                </p>
              </Card>

              <Card className="p-6 hover-elevate">
                <div className="w-12 h-12 rounded-lg bg-[#25D366]/10 flex items-center justify-center mb-4">
                  <SiWhatsapp className="w-6 h-6 text-[#25D366]" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">WhatsApp</h3>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] font-medium hover:underline"
                  data-testid="link-contact-whatsapp"
                >
                  Envoyer un message
                </a>
                <p className="text-sm text-muted-foreground mt-1">
                  Réponse rapide
                </p>
              </Card>

              <Card className="p-6 hover-elevate">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <a
                  href="mailto:contact@tmocampo.com"
                  className="text-primary font-medium hover:underline break-all"
                  data-testid="link-contact-email"
                >
                  contact@tmocampo.com
                </a>
              </Card>

              <Card className="p-6 hover-elevate">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Adresse</h3>
                <p className="text-muted-foreground text-sm">
                  Chemin des Palettes 27<br />
                  1212 Grand-Lancy
                </p>
              </Card>
            </div>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Horaires de Disponibilité
                  </h3>
                  <p className="text-muted-foreground">
                    Nous sommes disponibles <strong>7 jours sur 7</strong>. 
                    Flexibles en cas d'urgence, nous nous adaptons à vos besoins.
                  </p>
                  <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                    <p className="text-2xl font-bold text-primary">Dès 40 CHF</p>
                    <p className="text-sm text-muted-foreground">
                      Tarifs compétitifs pour tout Genève et alentours
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {isSuccess ? (
            <Card className="p-8 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Message Envoyé
              </h3>
              <p className="text-muted-foreground mb-6">
                Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.
              </p>
              <Button onClick={() => setIsSuccess(false)} variant="outline">
                Envoyer un autre message
              </Button>
            </Card>
          ) : (
            <Card className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">
                  Envoyez-nous un Message
                </h3>
              </div>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Votre Nom *</Label>
                  <Input
                    id="contact-name"
                    placeholder="Jean Dupont"
                    {...form.register("name")}
                    data-testid="input-contact-name"
                  />
                  {form.formState.errors.name && (
                    <p className="text-sm text-destructive">
                      {form.formState.errors.name.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email *</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="email@exemple.ch"
                      {...form.register("email")}
                      data-testid="input-contact-email"
                    />
                    {form.formState.errors.email && (
                      <p className="text-sm text-destructive">
                        {form.formState.errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Téléphone *</Label>
                    <Input
                      id="contact-phone"
                      placeholder="076 XXX XX XX"
                      {...form.register("phone")}
                      data-testid="input-contact-phone"
                    />
                    {form.formState.errors.phone && (
                      <p className="text-sm text-destructive">
                        {form.formState.errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-message">Votre Message *</Label>
                  <Textarea
                    id="contact-message"
                    placeholder="Décrivez votre besoin de transport (date, heure, lieu de départ et destination, nombre de personnes, fauteuil roulant...)"
                    className="min-h-[120px]"
                    {...form.register("message")}
                    data-testid="textarea-contact-message"
                  />
                  {form.formState.errors.message && (
                    <p className="text-sm text-destructive">
                      {form.formState.errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={mutation.isPending}
                  data-testid="button-submit-contact"
                >
                  {mutation.isPending ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Envoyer le Message
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  En soumettant ce formulaire, vous acceptez d'être contacté 
                  par TMO Campo concernant votre demande de transport.
                </p>
              </form>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
