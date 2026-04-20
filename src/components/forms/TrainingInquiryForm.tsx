import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const schema = z.object({
  prenom: z.string().trim().min(1, "Prénom requis").max(80),
  nom: z.string().trim().min(1, "Nom requis").max(80),
  email: z.string().trim().email("Email invalide").max(255),
  telephone: z.string().trim().max(40).optional().or(z.literal("")),
  societe: z.string().trim().max(120).optional().or(z.literal("")),
  formation_souhaitee: z.string().trim().min(1, "Formation requise").max(160),
  niveau: z.string().trim().max(120).optional().or(z.literal("")),
  objectif: z.string().trim().max(500).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

type FormData = z.infer<typeof schema>;

interface Props {
  defaultFormation?: string;
}

const TrainingInquiryForm = ({ defaultFormation = "" }: Props) => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { formation_souhaitee: defaultFormation },
  });

  const onSubmit = async (data: FormData) => {
    const { error } = await supabase.from("training_inquiries").insert({
      prenom: data.prenom,
      nom: data.nom,
      email: data.email,
      telephone: data.telephone || null,
      societe: data.societe || null,
      formation_souhaitee: data.formation_souhaitee,
      niveau: data.niveau || null,
      objectif: data.objectif || null,
      message: data.message || null,
    });
    if (error) {
      toast.error("Une erreur est survenue. Veuillez réessayer.");
      return;
    }
    // Confirmation email (non-blocking)
    void supabase.functions.invoke("send-transactional-email", {
      body: {
        templateName: "training-inquiry-confirmation",
        recipientEmail: data.email,
        idempotencyKey: `training-${data.email}-${Date.now()}`,
        templateData: { prenom: data.prenom, formation: data.formation_souhaitee },
      },
    });
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="card-premium p-10 md:p-12 text-center">
        <CheckCircle2 className="h-12 w-12 text-champagne mx-auto" strokeWidth={1.5} />
        <h3 className="display-sm mt-6">Demande bien reçue.</h3>
        <p className="text-muted-foreground mt-4 max-w-md mx-auto">
          Notre équipe revient vers vous sous 48 h ouvrées avec le programme complet et les modalités d'inscription.
        </p>
        <Button variant="outline" className="mt-8" onClick={() => setSubmitted(false)}>Envoyer une autre demande</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card-premium p-8 md:p-10 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Prénom *" error={errors.prenom?.message}><Input {...register("prenom")} /></Field>
        <Field label="Nom *" error={errors.nom?.message}><Input {...register("nom")} /></Field>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Email *" error={errors.email?.message}><Input type="email" {...register("email")} /></Field>
        <Field label="Téléphone"><Input type="tel" {...register("telephone")} /></Field>
      </div>
      <Field label="Société"><Input {...register("societe")} /></Field>
      <Field label="Formation souhaitée *" error={errors.formation_souhaitee?.message}>
        <Input {...register("formation_souhaitee")} placeholder="Ex. SAP FICO Consultant Program — 70 h" />
      </Field>
      <Field label="Niveau / profil"><Input {...register("niveau")} placeholder="Ex. Consultant junior, Key user, Contrôleur de gestion…" /></Field>
      <Field label="Objectif"><Input {...register("objectif")} placeholder="Ex. Devenir consultant SAP Finance" /></Field>
      <Field label="Message"><Textarea rows={4} {...register("message")} /></Field>
      <Button type="submit" size="lg" variant="ink" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Envoi en cours…" : "Envoyer ma demande"}
      </Button>
      <p className="text-xs text-muted-foreground">
        Vos données sont traitées conformément à notre politique de confidentialité.
      </p>
    </form>
  );
};

const Field = ({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) => (
  <div className="space-y-2">
    <Label className="text-xs uppercase tracking-[0.12em] text-muted-foreground">{label}</Label>
    {children}
    {error && <p className="text-xs text-destructive">{error}</p>}
  </div>
);

export default TrainingInquiryForm;
