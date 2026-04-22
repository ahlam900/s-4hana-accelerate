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
import { insertLead } from "@/integrations/leads/client";
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
    const { error } = await insertLead({
      prenom: data.prenom,
      nom: data.nom,
      email: data.email,
      telephone: data.telephone || null,
      societe: data.societe || null,
      type_demande: data.formation_souhaitee,
      niveau: data.niveau || null,
      objectif: data.objectif || null,
      message: data.message || null,
      source: "website",
      statut: "new",
      formulaire: "formation",
    });
    if (error) {
      toast.error("Une erreur est survenue lors de l'envoi. Merci de réessayer.");
      return;
    }
    toast.success("Merci, votre demande a bien été envoyée. Nous reviendrons vers vous sous 24 à 48h.");
    // Notification email to CBS team (non-blocking)
    void supabase.functions.invoke("send-transactional-email", {
      body: {
        templateName: "lead-notification",
        idempotencyKey: `lead-formation-${data.email}-${Date.now()}`,
        templateData: {
          formulaire: "formation",
          type_demande: data.formation_souhaitee,
          prenom: data.prenom,
          nom: data.nom,
          email: data.email,
          telephone: data.telephone || "",
          societe: data.societe || "",
          niveau: data.niveau || "",
          objectif: data.objectif || "",
          message: data.message || "",
          source: "website",
          statut: "new",
        },
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
        <select
          {...register("formation_souhaitee")}
          className="flex h-11 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          defaultValue={defaultFormation}
        >
          <option value="">Sélectionnez une formation…</option>
          <option value="SAP FICO Consultant Program (confirmé)">SAP FICO Consultant Program (confirmé)</option>
          <option value="Processus Finance dans SAP (débutant)">Processus Finance dans SAP (débutant)</option>
          <option value="SAP S/4HANA Finance avancé (expert)">SAP S/4HANA Finance avancé (expert)</option>
          <option value="Spécialisation SAP RE-FX">Spécialisation SAP RE-FX</option>
          <option value="Je ne sais pas encore">Je ne sais pas encore</option>
        </select>
      </Field>
      <Field label="Niveau / profil">
        <select
          {...register("niveau")}
          className="flex h-11 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <option value="">Sélectionnez votre niveau…</option>
          <option value="Débutant">Débutant</option>
          <option value="Confirmé">Confirmé</option>
          <option value="Expert">Expert</option>
          <option value="En reconversion">En reconversion</option>
        </select>
      </Field>
      <Field label="Objectif">
        <Input {...register("objectif")} placeholder="Ex. Devenir consultant SAP Finance, évoluer vers S/4HANA, renforcer mon expertise FI/CO…" />
      </Field>
      <Field label="Message"><Textarea rows={4} {...register("message")} /></Field>
      <div className="pt-2">
        <p className="text-[12.5px] text-muted-foreground leading-relaxed mb-4">
          Cette demande vous permet d'accéder au programme détaillé et d'être recontacté par un expert.
        </p>
        <Button type="submit" size="lg" variant="ink" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? "Envoi en cours…" : "Recevoir mon programme personnalisé →"}
        </Button>
        <div className="mt-3 flex flex-col gap-1.5 text-[12px] text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-champagne" />
            Réponse sous 24h — sans engagement
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="text-champagne">✔</span>
            Aucun spam — uniquement un échange utile
          </span>
        </div>
      </div>
      <p className="text-xs text-muted-foreground border-t border-border/60 pt-4">
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
