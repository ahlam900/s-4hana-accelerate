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
  societe: z.string().trim().min(1, "Required").max(120),
  fonction: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.string().trim().email("Invalid email").max(255),
  telephone: z.string().trim().max(40).optional().or(z.literal("")),
  offre_souhaitee: z.string().trim().min(1, "Required").max(160),
  besoin: z.string().trim().max(500).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

type FormData = z.infer<typeof schema>;

interface Props {
  defaultOffre?: string;
}

const CorporateInquiryForm = ({ defaultOffre = "" }: Props) => {
  const tx = useTx();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { offre_souhaitee: defaultOffre },
  });

  const onSubmit = async (data: FormData) => {
    const leadPayload = {
      prenom: data.prenom,
      nom: data.nom,
      societe: data.societe,
      fonction: data.fonction || "",
      email: data.email,
      telephone: data.telephone || "",
      type_demande: data.offre_souhaitee,
      besoin: data.besoin || "",
      message: data.message || "",
      source: "website",
      statut: "new",
      formulaire: "entreprise",
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
        <h3 className="display-sm mt-6">{tx("Votre demande nous est bien parvenue.", "Your request has been received.")}</h3>
        <p className="text-muted-foreground mt-4 max-w-md mx-auto">
          {tx(
            "Un membre de notre équipe vous recontacte sous 48 h ouvrées pour échanger sur votre besoin et préparer une proposition adaptée.",
            "A member of our team will reach out within 48 business hours to discuss your needs and prepare a tailored proposal."
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
        <Field label={tx("Société *", "Company *")} error={errors.societe?.message}>
          <Input {...register("societe")} />
        </Field>
        <Field label={tx("Fonction", "Role")}>
          <Input {...register("fonction")} />
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

      <Field label={tx("Type d'accompagnement *", "Type of engagement *")} error={errors.offre_souhaitee?.message}>
        <select
          {...register("offre_souhaitee")}
          className="flex h-10 w-full rounded-sm border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <option value="">{tx("— Sélectionner —", "— Select —")}</option>
          <option>{tx("Pack Transformation Digitale SAP", "SAP Digital Transformation Pack")}</option>
          <option>{tx("Pack Formation Key Users SAP", "SAP Key User Enablement Pack")}</option>
          <option>{tx("Accompagnement projet S/4HANA", "S/4HANA project advisory")}</option>
          <option>{tx("Audit / cadrage SAP Finance", "SAP Finance audit / scoping")}</option>
          <option>{tx("Autre besoin", "Other need")}</option>
        </select>
      </Field>

      <Field label={tx("Besoin", "Need")}>
        <Input
          {...register("besoin")}
          placeholder={tx(
            "Ex. Cadrage d'un projet S/4HANA, montée en compétence des équipes, optimisation des processus Finance…",
            "E.g. S/4HANA project scoping, team upskilling, finance process optimization…"
          )}
        />
      </Field>

      <Field label={tx("Message", "Message")}>
        <Textarea
          rows={5}
          {...register("message")}
          placeholder={tx(
            "Décrivez brièvement votre contexte, vos enjeux et vos objectifs.",
            "Briefly describe your context, your stakes and your objectives."
          )}
        />
      </Field>

      <div className="pt-2">
        <Button type="submit" size="lg" variant="ink" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? tx("Envoi en cours…", "Sending…") : tx("Être recontacté par un expert", "Get contacted by an expert")}
        </Button>
        <p className="mt-3 text-[12.5px] text-muted-foreground">
          {tx("Réponse sous 24–48h — échange confidentiel — sans engagement", "Reply within 24–48 h — confidential exchange — no commitment")}
        </p>
      </div>

      <p className="text-xs text-muted-foreground">
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

export default CorporateInquiryForm;
