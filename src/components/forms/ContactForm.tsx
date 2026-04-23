import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, ShieldCheck, Clock, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useTx } from "@/i18n/tx";

const TYPES = [
  "Formation SAP Finance",
  "Projet / Transformation SAP",
  "Autre demande",
] as const;

const schema = z.object({
  prenom: z.string().trim().min(1, "Required").max(80),
  nom: z.string().trim().min(1, "Required").max(80),
  email: z.string().trim().email("Invalid email").max(255),
  telephone: z.string().trim().min(1, "Required").max(40),
  societe: z.string().trim().min(1, "Required").max(120),
  sujet: z.string().refine(
    (v): v is (typeof TYPES)[number] => (TYPES as readonly string[]).includes(v),
    { message: "Select a request type" }
  ),
  message: z.string().trim().min(10, "Message too short").max(2000),
});

type FormData = z.input<typeof schema>;

interface ContactFormProps {
  defaultSujet?: (typeof TYPES)[number];
}

const ContactForm = ({ defaultSujet }: ContactFormProps) => {
  const tx = useTx();
  const [submitted, setSubmitted] = useState(false);

  const labelFor = (t: (typeof TYPES)[number]) => {
    if (t === "Formation SAP Finance") return tx("Formation SAP Finance", "SAP Finance Training");
    if (t === "Projet / Transformation SAP") return tx("Projet / Transformation SAP", "SAP Project / Transformation");
    return tx("Autre demande", "Other inquiry");
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { sujet: defaultSujet },
  });

  useEffect(() => {
    if (defaultSujet) {
      setValue("sujet", defaultSujet, { shouldValidate: false });
    }
  }, [defaultSujet, setValue]);

  const sujetValue = watch("sujet");

  const onSubmit = async (data: FormData) => {
    const leadPayload = {
      prenom: data.prenom,
      nom: data.nom,
      email: data.email,
      telephone: data.telephone,
      societe: data.societe,
      type_demande: data.sujet,
      message: data.message,
      source: "website",
      statut: "new",
      formulaire: "contact",
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
        <h3 className="display-sm mt-6">{tx("Demande bien envoyée.", "Request sent.")}</h3>
        <p className="text-muted-foreground mt-4 max-w-md mx-auto">
          {tx(
            "Merci. Notre équipe vous répond sous 24 à 48h avec un premier niveau d'analyse.",
            "Thank you. Our team will respond within 24–48 h with a first-level analysis."
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
        <Field label={tx("Téléphone *", "Phone *")} error={errors.telephone?.message}>
          <Input type="tel" {...register("telephone")} />
        </Field>
      </div>

      <Field label={tx("Société *", "Company *")} error={errors.societe?.message}>
        <Input {...register("societe")} />
      </Field>

      <Field label={tx("Type de demande *", "Request type *")} error={errors.sujet?.message}>
        <Select
          value={sujetValue ?? ""}
          onValueChange={(v) =>
            setValue("sujet", v as (typeof TYPES)[number], { shouldValidate: true })
          }
        >
          <SelectTrigger className="h-10">
            <SelectValue placeholder={tx("Sélectionnez votre besoin", "Select your need")} />
          </SelectTrigger>
          <SelectContent>
            {TYPES.map((t) => (
              <SelectItem key={t} value={t}>
                {labelFor(t)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>

      <Field label={tx("Message *", "Message *")} error={errors.message?.message}>
        <Textarea
          rows={6}
          placeholder={tx(
            "Décrivez brièvement votre contexte, vos enjeux et l'horizon de votre projet.",
            "Briefly describe your context, your stakes and your project horizon."
          )}
          {...register("message")}
        />
      </Field>

      <Button
        type="submit"
        size="lg"
        variant="ink"
        disabled={isSubmitting}
        className="w-full sm:w-auto"
      >
        {isSubmitting ? tx("Envoi en cours…", "Sending…") : tx("Envoyer ma demande", "Send my request")}
      </Button>

      <div className="pt-4 border-t border-border grid sm:grid-cols-3 gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-champagne" />
          <span>{tx("Réponse sous 24 à 48h", "Reply within 24–48 h")}</span>
        </div>
        <div className="flex items-center gap-2">
          <Lock className="h-4 w-4 text-champagne" />
          <span>{tx("Données confidentielles", "Confidential data")}</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-champagne" />
          <span>{tx("Aucun démarchage", "No cold outreach")}</span>
        </div>
      </div>
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
}) => {
  return (
    <div className="space-y-2">
      <Label className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
        {label}
      </Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
};

export default ContactForm;
