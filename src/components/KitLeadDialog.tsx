import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Download, ExternalLink } from "lucide-react";
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
  lastName: z.string().trim().min(1).max(80),
  email: z.string().trim().email().max(255),
  company: z.string().trim().min(1).max(120),
  role: z.string().trim().min(1).max(120),
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
    company: "",
    role: "",
  });

  const handleClose = () => {
    onClose();
    setStep("form");
    setForm({ firstName: "", lastName: "", email: "", company: "", role: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = leadSchema.safeParse(form);
    if (!parsed.success) {
      toast({
        title: tx("Formulaire incomplet", "Form incomplete"),
        description: tx(
          "Merci de renseigner tous les champs avec un email professionnel valide.",
          "Please fill in all fields with a valid professional email.",
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
              <DialogDescription className="text-ivory/70 text-[14px] leading-relaxed pt-2">
                {tx(
                  "Renseignez vos coordonnées professionnelles pour accéder au kit.",
                  "Provide your professional details to access the kit.",
                )}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="mt-2 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="firstName" className="text-ivory/80 text-xs uppercase tracking-wider">
                    {tx("Prénom", "First name")}
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
                    {tx("Nom", "Last name")}
                  </Label>
                  <Input
                    id="lastName"
                    required
                    maxLength={80}
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className="bg-ivory/5 border-ivory/20 text-ivory placeholder:text-ivory/40"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-ivory/80 text-xs uppercase tracking-wider">
                  {tx("Email professionnel", "Professional email")}
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
              <div className="space-y-1.5">
                <Label htmlFor="company" className="text-ivory/80 text-xs uppercase tracking-wider">
                  {tx("Société", "Company")}
                </Label>
                <Input
                  id="company"
                  required
                  maxLength={120}
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="bg-ivory/5 border-ivory/20 text-ivory placeholder:text-ivory/40"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="role" className="text-ivory/80 text-xs uppercase tracking-wider">
                  {tx("Rôle", "Role")}
                </Label>
                <Input
                  id="role"
                  required
                  maxLength={120}
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className="bg-ivory/5 border-ivory/20 text-ivory placeholder:text-ivory/40"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="interest" className="text-ivory/80 text-xs uppercase tracking-wider">
                  {tx("Intérêt", "Interest")}
                </Label>
                <Input
                  id="interest"
                  readOnly
                  value={kit.interestLabel}
                  className="bg-ivory/10 border-ivory/20 text-champagne font-medium cursor-not-allowed"
                />
              </div>
              <Button
                type="submit"
                variant="champagne"
                size="lg"
                className="w-full mt-2"
                disabled={submitting}
              >
                {submitting
                  ? tx("Envoi...", "Sending...")
                  : tx("Recevoir le kit", "Receive the kit")}
              </Button>
              <p className="text-[11px] text-ivory/50 text-center">
                {tx(
                  "Vos données restent strictement professionnelles et confidentielles.",
                  "Your data remains strictly professional and confidential.",
                )}
              </p>
            </form>
          </>
        )}

        {kit && step === "ready" && (
          <div className="py-4">
            <div className="flex flex-col items-center text-center">
              <div className="h-14 w-14 rounded-full bg-champagne/15 flex items-center justify-center mb-5">
                <CheckCircle2 className="h-7 w-7 text-champagne" />
              </div>
              <DialogTitle className="font-display text-2xl text-ivory leading-snug">
                {tx("Votre kit est prêt à être téléchargé.", "Your kit is ready to download.")}
              </DialogTitle>
              <p className="text-ivory/70 text-[14px] mt-3 leading-relaxed max-w-sm">{kit.title}</p>
              <Button
                type="button"
                variant="champagne"
                size="lg"
                className="mt-7 w-full"
                onClick={handleDownload}
              >
                <Download className="h-4 w-4" />
                {tx("Télécharger maintenant", "Download now")}
                <ExternalLink className="h-3.5 w-3.5 opacity-70" />
              </Button>
              <p className="text-[11px] text-ivory/50 mt-4">
                {tx(
                  "Une copie vous est également envoyée par email.",
                  "A copy is also sent to your email.",
                )}
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default KitLeadDialog;
