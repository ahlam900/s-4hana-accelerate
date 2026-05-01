import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Download, ExternalLink, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import { useTx } from "@/i18n/tx";

export interface KitLeadTarget {
  id: string;
  title: string;
  interestLabel: string;
}

interface KitLeadDialogProps {
  kit: KitLeadTarget | null;
  onClose: () => void;
}

const leadSchema = z.object({
  firstName: z.string().trim().min(1).max(80),
  lastName: z.string().trim().max(80).optional().or(z.literal("")),
  email: z.string().trim().email().max(255),
});

type Step = "form" | "ready";

const KitLeadDialog = ({ kit, onClose }: KitLeadDialogProps) => {
  const tx = useTx();
  const [step, setStep] = useState<Step>("form");
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleClose = () => {
    onClose();
    setStep("form");
    setForm({ firstName: "", lastName: "", email: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = leadSchema.safeParse(form);
    if (!parsed.success) {
      toast({
        title: tx("Formulaire incomplet", "Form incomplete"),
        description: tx(
          "Merci de renseigner votre prénom et un email professionnel valide.",
          "Please provide your first name and a valid professional email.",
        ),
      });
      return;
    }
    setSubmitting(true);
    // eslint-disable-next-line no-console
    console.log("[Operational Kit Lead]", {
      kit: kit?.id,
      interest: kit?.interestLabel,
      ...parsed.data,
    });
    await new Promise((r) => setTimeout(r, 400));
    setSubmitting(false);
    setStep("ready");
  };

  const handleDownload = () => {
    // eslint-disable-next-line no-console
    console.log("[Download Kit]", kit?.id);
    window.open("about:blank", "_blank", "noopener,noreferrer");
  };

  return (
    <Dialog open={!!kit} onOpenChange={(o) => !o && handleClose()}>
      <DialogContent className="bg-ink text-ivory border-ink/40 max-w-lg">
        {kit && step === "form" && (
          <>
            <DialogHeader>
              <div className="text-[10px] uppercase tracking-[0.2em] text-champagne mb-2">
                {tx("Accès gratuit", "Free access")} · {kit.interestLabel}
              </div>
              <DialogTitle className="font-display text-2xl text-ivory leading-snug">
                {kit.title}
              </DialogTitle>
              <DialogDescription className="sr-only">
                {tx("Formulaire d'accès au kit", "Kit access form")}
              </DialogDescription>
            </DialogHeader>

            {/* Value block */}
            <div className="mt-1 rounded-md border border-ivory/15 bg-ivory/5 p-4">
              <div className="text-[11px] uppercase tracking-[0.18em] text-champagne mb-2.5">
                {tx("Vous allez recevoir :", "You will receive:")}
              </div>
              <ul className="space-y-1.5 text-[13px] text-ivory/85 leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-champagne mt-0.5">›</span>
                  {tx("Kit SAP S/4HANA prêt à l'emploi", "Ready-to-use SAP S/4HANA kit")}
                </li>
                <li className="flex gap-2">
                  <span className="text-champagne mt-0.5">›</span>
                  {tx("Matrices et checklist projet", "Project matrices and checklist")}
                </li>
                <li className="flex gap-2">
                  <span className="text-champagne mt-0.5">›</span>
                  {tx("Cas pratique consultant", "Consultant practical case")}
                </li>
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="mt-3 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="firstName" className="text-ivory/80 text-xs uppercase tracking-wider">
                    {tx("Prénom", "First name")} *
                  </Label>
                  <Input
                    id="firstName"
                    required
                    maxLength={80}
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className="bg-ivory/5 border-ivory/20 text-ivory placeholder:text-ivory/40"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="lastName" className="text-ivory/80 text-xs uppercase tracking-wider">
                    {tx("Nom", "Last name")}{" "}
                    <span className="text-ivory/40 normal-case tracking-normal">
                      ({tx("optionnel", "optional")})
                    </span>
                  </Label>
                  <Input
                    id="lastName"
                    maxLength={80}
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className="bg-ivory/5 border-ivory/20 text-ivory placeholder:text-ivory/40"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-ivory/80 text-xs uppercase tracking-wider">
                  {tx("Email professionnel", "Professional email")} *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-ivory/5 border-ivory/20 text-ivory placeholder:text-ivory/40"
                />
              </div>

              {/* Hidden interest field */}
              <input type="hidden" name="interest" value={kit.interestLabel} />

              <p className="text-[11px] text-ivory/60 text-center pt-1">
                {tx(
                  "Utilisé par des consultants SAP et équipes Finance en projet S/4HANA.",
                  "Used by SAP consultants and Finance teams running S/4HANA projects.",
                )}
              </p>

              <Button
                type="submit"
                variant="champagne"
                size="lg"
                className="w-full"
                disabled={submitting}
              >
                {submitting
                  ? tx("Envoi...", "Sending...")
                  : tx("Télécharger le kit gratuitement", "Download the kit for free")}
              </Button>
              <p className="text-[11px] text-ivory/50 text-center flex items-center justify-center gap-1.5">
                <ShieldCheck className="h-3 w-3" />
                {tx(
                  "Vos données restent strictement confidentielles. Aucun spam.",
                  "Your data stays strictly confidential. No spam.",
                )}
              </p>
            </form>
          </>
        )}

        {kit && step === "ready" && (
          <div className="py-4 animate-in fade-in-0 zoom-in-95 duration-200">
            <div className="flex flex-col items-center text-center">
              <div className="h-14 w-14 rounded-full bg-champagne/15 flex items-center justify-center mb-5">
                <CheckCircle2 className="h-7 w-7 text-champagne" />
              </div>
              <DialogTitle className="font-display text-2xl text-ivory leading-snug">
                {tx("Votre kit est prêt", "Your kit is ready")}
              </DialogTitle>
              <p className="text-ivory/70 text-[14px] mt-3 leading-relaxed max-w-sm">
                {tx(
                  "Merci. Votre ressource SAP Finance est maintenant disponible.",
                  "Thank you. Your SAP Finance resource is now available.",
                )}
              </p>
              <Button
                type="button"
                variant="champagne"
                size="lg"
                className="mt-7 w-full"
                onClick={handleDownload}
              >
                <Download className="h-4 w-4" />
                {tx("Télécharger le kit", "Download the kit")}
                <ExternalLink className="h-3.5 w-3.5 opacity-70" />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="mt-2 w-full bg-transparent border-ivory/25 text-ivory hover:bg-ivory/10 hover:text-ivory"
                onClick={handleClose}
              >
                {tx("Fermer", "Close")}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default KitLeadDialog;
