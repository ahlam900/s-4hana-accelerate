import { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/store/cart";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const schema = z.object({
  prenom: z.string().trim().min(1).max(80),
  nom: z.string().trim().min(1).max(80),
  email: z.string().trim().email().max(255),
  societe: z.string().trim().max(120).optional().or(z.literal("")),
});
type FormData = z.infer<typeof schema>;

const Checkout = () => {
  const { items, total, clear } = useCart();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const subtotal = total();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

  if (items.length === 0) return <Navigate to="/produits-digitaux/panier" replace />;

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    const { error } = await supabase.from("digital_orders").insert({
      prenom: data.prenom,
      nom: data.nom,
      email: data.email,
      societe: data.societe || null,
      items: items.map((i) => ({ id: i.id, title: i.title, price: i.price, quantity: i.quantity })),
      total_eur: subtotal,
      status: "pending",
    });
    if (error) {
      toast.error("Erreur lors de l'enregistrement de votre commande.");
      setSubmitting(false);
      return;
    }
    void supabase.functions.invoke("send-transactional-email", {
      body: {
        templateName: "order-confirmation",
        recipientEmail: data.email,
        idempotencyKey: `order-${data.email}-${Date.now()}`,
        templateData: { prenom: data.prenom, total: subtotal.toFixed(0) },
      },
    });
    clear();
    navigate("/produits-digitaux/confirmation");
  };

  return (
    <section className="section-y">
      <div className="container-wide grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <div className="eyebrow mb-6">Commande</div>
          <h1 className="display-md">Vos coordonnées</h1>
          <p className="lede mt-4 mb-8">Entrez vos informations pour finaliser votre commande. La livraison de vos produits digitaux se fera par email.</p>

          <form onSubmit={handleSubmit(onSubmit)} className="card-premium p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Prénom *" error={errors.prenom?.message}><Input {...register("prenom")} /></Field>
              <Field label="Nom *" error={errors.nom?.message}><Input {...register("nom")} /></Field>
            </div>
            <Field label="Email *" error={errors.email?.message}><Input type="email" {...register("email")} /></Field>
            <Field label="Société (optionnel)"><Input {...register("societe")} /></Field>

            <div className="rounded-sm bg-secondary p-5 text-sm flex gap-3 items-start">
              <Lock className="h-4 w-4 text-champagne mt-0.5 shrink-0" />
              <div>
                <div className="font-medium">Paiement en mode démonstration</div>
                <div className="text-muted-foreground text-xs mt-1">Le paiement en ligne sera activé prochainement. Pour cette démo, votre commande est enregistrée et vous recevez un email de confirmation.</div>
              </div>
            </div>

            <Button type="submit" size="lg" variant="ink" disabled={submitting} className="w-full">
              {submitting ? "Traitement…" : <>Confirmer la commande <ArrowRight /></>}
            </Button>
          </form>
        </div>

        <div className="lg:col-span-5">
          <div className="card-premium p-7 sticky top-28">
            <div className="text-[10px] uppercase tracking-[0.2em] text-champagne mb-5">Votre commande</div>
            <div className="space-y-4">
              {items.map((i) => (
                <div key={i.id} className="flex justify-between gap-4 pb-4 border-b border-border last:border-0">
                  <div>
                    <div className="text-sm font-medium leading-snug">{i.title}</div>
                    <div className="text-xs text-muted-foreground">Qté {i.quantity}</div>
                  </div>
                  <div className="font-display text-lg">{(i.price * i.quantity).toFixed(0)}€</div>
                </div>
              ))}
            </div>
            <div className="border-t border-border mt-5 pt-5 flex justify-between items-baseline">
              <span className="font-medium">Total TTC</span>
              <span className="font-display text-3xl">{subtotal.toFixed(0)}€</span>
            </div>
            <Link to="/produits-digitaux/panier" className="block text-center text-sm text-muted-foreground hover:text-foreground mt-4">Modifier le panier</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) => (
  <div className="space-y-2">
    <Label className="text-xs uppercase tracking-[0.12em] text-muted-foreground">{label}</Label>
    {children}
    {error && <p className="text-xs text-destructive">{error}</p>}
  </div>
);

export default Checkout;
