import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useTx } from "@/i18n/tx";

const schema = z.object({
  prenom: z.string().trim().min(1, "Required").max(80),
  nom: z.string().trim().min(1, "Required").max(80),
  email: z.string().trim().email("Invalid email").max(255),
  telephone: z.string().trim().max(40).optional().or(z.literal("")),
  societe: z.string().trim().max(120).optional().or(z.literal("")),
  formation_souhaitee: z.string().trim().min(1, "Required").max(160),
  niveau: z.string().trim().max(120).optional().or(z.literal("")),
  objectif: z.string().trim().max(500).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

type FormData = z.infer<typeof schema>;

interface Props {
  defaultFormation?: string;
}

const TrainingInquiryForm = ({ defaultFormation = "" }: Props) => {
  const tx = useTx();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { formation_souhaitee: defaultFormation },
  });

  const onSubmit = async (data: FormData) => {
    const leadPayload = {
      prenom: data.prenom,
      nom: data.nom,
      email: data.email,
      telephone: data.telephone || "",
      societe: data.societe || "",
      type_demande: data.formation_souhaitee,
      niveau: data.niveau || "",
      objectif: data.objectif || "",
      message: data.message || "",
      source: "website",
      statut: "new",
      formulaire: "formation",
    };

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadPayload),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error("API /api/lead error:", result);
        toast.error(tx("Une erreur est survenue lors de l'envoi. Merci de réessayer.", "An error occurred while sending. Please try again."));
        return;
      }

      toast.success(tx("Merci, votre demande a bien été envoyée. Nous reviendrons vers vous sous 24 à 48h.", "Thank you, your request has been received. We'll get back to you within 24–48 h."));
      setSubmitted(true);
      reset();
    } catch (error) {
      console.error("Submit error:", error);
      toast.error(tx("Une erreur est survenue lors de l'envoi. Merci de réessayer.", "An error occurred while sending. Please try again."));
    }
  };

  if (submitted) {
    return (
      <div className="card-premium p-10 md:p-12 text-center">
        <CheckCircle2 className="h-12 w-12 text-champagne mx-auto" strokeWidth={1.5} />
        <h3 className="display-sm mt-6">{tx("Demande bien reçue.", "Request received.")}</h3>
        <p className="text-muted-foreground mt-4 max-w-md mx-auto">
          {tx(
            "Notre équipe revient vers vous sous 48 h ouvrées avec le programme complet et les modalités d'inscription.",
            "Our team will get back to you within 48 business hours with the full program and enrollment details."
          )}
        </p>
        <Button variant="outline" className="mt-8" onClick={() => setSubmitted(false)}>
          {tx("Envoyer une autre demande", "Send another request")}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card-premium p-8 md:p-10 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label={tx("Prénom *", "First name *")} error={errors.prenom?.message}>
          <Input {...register("prenom")} />
        </Field>
        <Field label={tx("Nom *", "Last name *")} error={errors.nom?.message}>
          <Input {...register("nom")} />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label={tx("Email *", "Email *")} error={errors.email?.message}>
          <Input type="email" {...register("email")} />
        </Field>
        <Field label={tx("Téléphone", "Phone")}>
          <Input type="tel" {...register("telephone")} />
        </Field>
      </div>

      <Field label={tx("Société", "Company")}>
        <Input {...register("societe")} />
      </Field>

      <Field label={tx("Formation souhaitée *", "Program of interest *")} error={errors.formation_souhaitee?.message}>
        <select
          {...register("formation_souhaitee")}
          className="flex h-11 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          defaultValue={defaultFormation}
        >
          <option value="">{tx("Sélectionnez une formation…", "Select a program…")}</option>
          <option value="SAP FICO Consultant Program (confirmé)">{tx("SAP FICO Consultant Program (confirmé)", "SAP FICO Consultant Program (advanced)")}</option>
          <option value="Processus Finance dans SAP (débutant)">{tx("Processus Finance dans SAP (débutant)", "Finance Processes in SAP (beginner)")}</option>
          <option value="SAP S/4HANA Finance avancé (expert)">{tx("SAP S/4HANA Finance avancé (expert)", "Advanced SAP S/4HANA Finance (expert)")}</option>
          <option value="Spécialisation SAP RE-FX">{tx("Spécialisation SAP RE-FX", "SAP RE-FX Specialization")}</option>
          <option value="Je ne sais pas encore">{tx("Je ne sais pas encore", "Not sure yet")}</option>
        </select>
      </Field>

      <Field label={tx("Niveau / profil", "Level / profile")}>
        <select
          {...register("niveau")}
          className="flex h-11 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <option value="">{tx("Sélectionnez votre niveau…", "Select your level…")}</option>
          <option value="Débutant">{tx("Débutant", "Beginner")}</option>
          <option value="Confirmé">{tx("Confirmé", "Advanced")}</option>
          <option value="Expert">{tx("Expert", "Expert")}</option>
          <option value="En reconversion">{tx("En reconversion", "Career-changer")}</option>
        </select>
      </Field>

      <Field label={tx("Objectif", "Objective")}>
        <Input
          {...register("objectif")}
          placeholder={tx(
            "Ex. Devenir consultant SAP Finance, évoluer vers S/4HANA, renforcer mon expertise FI/CO…",
            "E.g. Become an SAP Finance consultant, evolve toward S/4HANA, deepen FI/CO expertise…"
          )}
        />
      </Field>

      <Field label={tx("Message", "Message")}>
        <Textarea rows={4} {...register("message")} />
      </Field>

      <div className="pt-2">
        <p className="text-[12.5px] text-muted-foreground leading-relaxed mb-4">
          {tx(
            "Cette demande vous permet d'accéder au programme détaillé et d'être recontacté par un expert.",
            "This request gives you access to the detailed program and a follow-up from one of our experts."
          )}
        </p>
        <Button type="submit" size="lg" variant="ink" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting
            ? tx("Envoi en cours…", "Sending…")
            : tx("Recevoir mon programme personnalisé →", "Receive my personalized program →")}
        </Button>
        <div className="mt-3 flex flex-col gap-1.5 text-[12px] text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-champagne" />
            {tx("Réponse sous 24h — sans engagement", "Reply within 24 h — no commitment")}
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="text-champagne">✔</span>
            {tx("Aucun spam — uniquement un échange utile", "No spam — only a meaningful exchange")}
          </span>
        </div>
      </div>

      <p className="text-xs text-muted-foreground border-t border-border/60 pt-4">
        {tx(
          "Vos données sont traitées conformément à notre politique de confidentialité.",
          "Your data is processed in accordance with our privacy policy."
        )}
      </p>
    </form>
  );
};

const Field = ({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-2">
    <Label className="text-xs uppercase tracking-[0.12em] text-muted-foreground">{label}</Label>
    {children}
    {error && <p className="text-xs text-destructive">{error}</p>}
  </div>
);

export default TrainingInquiryForm;
