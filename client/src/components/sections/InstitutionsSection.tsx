import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertQuoteSchema, type InsertQuote } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Building2, Send, CheckCircle2 } from "lucide-react";

const institutionTypes = [
  { value: "ems", label: "EMS (Établissement médico-social)" },
  { value: "hopital", label: "Hôpital / Clinique" },
  { value: "ecole", label: "École / Institution scolaire" },
  { value: "association", label: "Association" },
  { value: "entreprise", label: "Entreprise" },
  { value: "autre", label: "Autre" },
];

const frequencies = [
  { value: "ponctuel", label: "Transport ponctuel" },
  { value: "hebdomadaire", label: "Hebdomadaire" },
  { value: "quotidien", label: "Quotidien" },
  { value: "mensuel", label: "Mensuel" },
  { value: "autre", label: "À définir" },
];

export function InstitutionsSection() {
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<InsertQuote>({
    resolver: zodResolver(insertQuoteSchema),
    defaultValues: {
      institutionName: "",
      contactName: "",
      email: "",
      phone: "",
      institutionType: "",
      numberOfPatients: "",
      frequency: "",
      pickupAddress: "",
      destinationAddress: "",
      wheelchairRequired: false,
      additionalInfo: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertQuote) => {
      const response = await apiRequest("POST", "/api/quote", data);
      return response;
    },
    onSuccess: () => {
      setIsSuccess(true);
      form.reset();
      toast({
        title: "Demande envoyée",
        description: "Nous vous contacterons dans les plus brefs délais.",
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

  const onSubmit = (data: InsertQuote) => {
    mutation.mutate(data);
  };

  if (isSuccess) {
    return (
      <section
        id="institutions"
        className="py-12 md:py-20"
        data-testid="section-institutions"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="p-6 md:p-8">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
              Demande Envoyée avec Succès
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Notre équipe vous contactera dans les 24 heures.
            </p>
            <Button onClick={() => setIsSuccess(false)} variant="outline" size="sm">
              Nouvelle demande
            </Button>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section
      id="institutions"
      className="py-12 md:py-20"
      data-testid="section-institutions"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-4 md:space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full text-primary text-xs font-medium mb-3">
                <Building2 className="w-3 h-3" />
                <span>Pour les Professionnels</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">EMS & Institutions</h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">Solutions de transport PMR adaptées avec tarifs préférentiels pour les partenariats réguliers.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm md:text-base font-semibold text-foreground">
                Avantages
              </h3>
              <ul className="space-y-1.5 md:space-y-2">
                {[
                  "Tarifs préférentiels",
                  "Facturation mensuelle",
                  "Interlocuteur dédié",
                  "Flexibilité horaire",
                  "Véhicules adaptés",
                  "Rapports détaillés",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0" />
                    <span className="text-xs md:text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Card className="p-4 md:p-6">
            <h3 className="text-base md:text-lg font-semibold text-foreground mb-4">
              Demande de Devis
            </h3>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 md:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label htmlFor="institutionName" className="text-xs md:text-sm">Institution *</Label>
                  <Input
                    id="institutionName"
                    placeholder="Ex: EMS Les Acacias"
                    {...form.register("institutionName")}
                    data-testid="input-institution-name"
                  />
                  {form.formState.errors.institutionName && (
                    <p className="text-sm text-destructive">
                      {form.formState.errors.institutionName.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactName">Nom du contact *</Label>
                  <Input
                    id="contactName"
                    placeholder="Votre nom"
                    {...form.register("contactName")}
                    data-testid="input-contact-name"
                  />
                  {form.formState.errors.contactName && (
                    <p className="text-sm text-destructive">
                      {form.formState.errors.contactName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@institution.ch"
                    {...form.register("email")}
                    data-testid="input-email"
                  />
                  {form.formState.errors.email && (
                    <p className="text-sm text-destructive">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone *</Label>
                  <Input
                    id="phone"
                    placeholder="022 XXX XX XX"
                    {...form.register("phone")}
                    data-testid="input-phone"
                  />
                  {form.formState.errors.phone && (
                    <p className="text-sm text-destructive">
                      {form.formState.errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Type d'institution *</Label>
                  <Select
                    onValueChange={(value) => form.setValue("institutionType", value)}
                    data-testid="select-institution-type"
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner" />
                    </SelectTrigger>
                    <SelectContent>
                      {institutionTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {form.formState.errors.institutionType && (
                    <p className="text-sm text-destructive">
                      {form.formState.errors.institutionType.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label>Fréquence souhaitée</Label>
                  <Select
                    onValueChange={(value) => form.setValue("frequency", value)}
                    data-testid="select-frequency"
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner" />
                    </SelectTrigger>
                    <SelectContent>
                      {frequencies.map((freq) => (
                        <SelectItem key={freq.value} value={freq.value}>
                          {freq.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="numberOfPatients">Nombre de patients/résidents à transporter</Label>
                <Input
                  id="numberOfPatients"
                  placeholder="Ex: 5-10 personnes par semaine"
                  {...form.register("numberOfPatients")}
                  data-testid="input-number-patients"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="pickupAddress">Adresse de départ</Label>
                  <Input
                    id="pickupAddress"
                    placeholder="Adresse principale"
                    {...form.register("pickupAddress")}
                    data-testid="input-pickup-address"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="destinationAddress">Destination(s) fréquente(s)</Label>
                  <Input
                    id="destinationAddress"
                    placeholder="Ex: HUG, cliniques..."
                    {...form.register("destinationAddress")}
                    data-testid="input-destination-address"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Checkbox
                  id="wheelchairRequired"
                  onCheckedChange={(checked) =>
                    form.setValue("wheelchairRequired", checked as boolean)
                  }
                  data-testid="checkbox-wheelchair"
                />
                <Label htmlFor="wheelchairRequired" className="text-sm font-normal">
                  Transport de personnes en fauteuil roulant nécessaire
                </Label>
              </div>

              <div className="space-y-2">
                <Label htmlFor="additionalInfo">Informations complémentaires</Label>
                <Textarea
                  id="additionalInfo"
                  placeholder="Besoins spécifiques, contraintes horaires, équipements particuliers..."
                  className="min-h-[100px]"
                  {...form.register("additionalInfo")}
                  data-testid="textarea-additional-info"
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={mutation.isPending}
                data-testid="button-submit-quote"
              >
                {mutation.isPending ? (
                  "Envoi en cours..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Demander un Devis
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
