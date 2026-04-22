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

const TYPES = [
  "Formation SAP Finance",
  "Projet / Transformation SAP",
  "Autre demande",
] as const;

const schema = z.object({
  prenom: z.string().trim().min(1, "Prénom requis").max(80),
  nom: z.string().trim().min(1, "Nom requis").max(80),
  email: z.string().trim().email("Email invalide").max(255),
  telephone: z.string().trim().min(1, "Téléphone requis").max(40),
  societe: z.string().trim().min(1, "Société requise").max(120),
  sujet: z.string().refine(
    (v): v is (typeof TYPES)[number] => (TYPES as readonly string[]).includes(v),
    { message: "Sélectionnez un type de demande" }
  ),
  message: z.string().trim().min(10, "Message trop court").max(2000),
});

type FormData = z.input<typeof schema>;

interface ContactFormProps {
  defaultSujet?: (typeof TYPES)[number];
}

const ContactForm = ({ defaultSujet }: ContactFormProps) => {
  const [submitted, setSubmitted] = useState(false);

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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leadPayload),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error("API /api/lead error:", result);
        toast.error("Une erreur est survenue lors de l'envoi. Merci de réessayer.");
        return;
      }

      toast.success("Merci, votre demande a bien été envoyée. Nous reviendrons vers vous sous 24 à 48h.");
      setSubmitted(true);
      reset();
    } catch (error) {
      console.error("Submit error:", error);
      toast.error("Une erreur est survenue lors de l'envoi. Merci de réessayer.");
    }
  };

  if (submitted) {
    return (
      <div className="card-premium p-10 md:p-12 text-center">
        <CheckCircle2 className="h-12 w-12 text-champagne mx-auto" strokeWidth={1.5} />
        <h3 className="display-sm mt-6">Demande bien envoyée.</h3>
        <p className="text-muted-foreground mt-4 max-w-md mx-auto">
          Merci. Notre équipe vous répond sous 24 à 48h avec un premier niveau d'analyse.
        </p>
        <Button
          variant="outline"
          className="mt-8"
          onClick={() => setSubmitted(false)}
        >
          Envoyer une autre demande
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card-premium p-8 md:p-10 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Prénom *" error={errors.prenom?.message}>
          <Input {...register("prenom")} />
        </Field>
        <Field label="Nom *" error={errors.nom?.message}>
          <Input {...register("nom")} />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Email *" error={errors.email?.message}>
          <Input type="email" {...register("email")} />
        </Field>
        <Field label="Téléphone *" error={errors.telephone?.message}>
          <Input type="tel" {...register("telephone")} />
        </Field>
      </div>

      <Field label="Société *" error={errors.societe?.message}>
        <Input {...register("societe")} />
      </Field>

      <Field label="Type de demande *" error={errors.sujet?.message}>
        <Select
          value={sujetValue ?? ""}
          onValueChange={(v) =>
            setValue("sujet", v as (typeof TYPES)[number], { shouldValidate: true })
          }
        >
          <SelectTrigger className="h-10">
            <SelectValue placeholder="Sélectionnez votre besoin" />
          </SelectTrigger>
          <SelectContent>
            {TYPES.map((t) => (
              <SelectItem key={t} value={t}>
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>

      <Field label="Message *" error={errors.message?.message}>
        <Textarea
          rows={6}
          placeholder="Décrivez brièvement votre contexte, vos enjeux et l'horizon de votre projet."
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
        {isSubmitting ? "Envoi en cours…" : "Envoyer ma demande"}
      </Button>

      <div className="pt-4 border-t border-border grid sm:grid-cols-3 gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-champagne" />
          <span>Réponse sous 24 à 48h</span>
        </div>
        <div className="flex items-center gap-2">
          <Lock className="h-4 w-4 text-champagne" />
          <span>Données confidentielles</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-champagne" />
          <span>Aucun démarchage</span>
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
