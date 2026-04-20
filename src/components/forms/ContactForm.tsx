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
  sujet: z.string().trim().min(1, "Sujet requis").max(160),
  message: z.string().trim().min(10, "Message trop court").max(2000),
});

type FormData = z.infer<typeof schema>;

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const { error } = await supabase.from("contact_submissions").insert({
      prenom: data.prenom,
      nom: data.nom,
      email: data.email,
      telephone: data.telephone || null,
      societe: data.societe || null,
      sujet: data.sujet,
      message: data.message,
    });
    if (error) { toast.error("Une erreur est survenue. Veuillez réessayer."); return; }
    void supabase.functions.invoke("send-transactional-email", {
      body: {
        templateName: "contact-confirmation",
        recipientEmail: data.email,
        idempotencyKey: `contact-${data.email}-${Date.now()}`,
        templateData: { prenom: data.prenom },
      },
    });
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="card-premium p-10 md:p-12 text-center">
        <CheckCircle2 className="h-12 w-12 text-champagne mx-auto" strokeWidth={1.5} />
        <h3 className="display-sm mt-6">Message bien envoyé.</h3>
        <p className="text-muted-foreground mt-4 max-w-md mx-auto">
          Merci. Notre équipe vous répond sous 48 h ouvrées.
        </p>
        <Button variant="outline" className="mt-8" onClick={() => setSubmitted(false)}>Envoyer un autre message</Button>
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
      <Field label="Sujet *" error={errors.sujet?.message}><Input {...register("sujet")} /></Field>
      <Field label="Message *" error={errors.message?.message}><Textarea rows={6} {...register("message")} /></Field>
      <Button type="submit" size="lg" variant="ink" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Envoi en cours…" : "Envoyer mon message"}
      </Button>
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

export default ContactForm;
