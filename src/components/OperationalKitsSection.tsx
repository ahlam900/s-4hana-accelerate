import { useState } from "react";
import { z } from "zod";
import { Download, Sparkles, CheckCircle2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Reveal from "@/components/Reveal";
import { toast } from "@/hooks/use-toast";
import { useTx } from "@/i18n/tx";

type KitId = "GL" | "AP" | "F110" | "BANK" | "AR";

interface Kit {
  id: KitId;
  interestLabel: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  outcome: string;
}

const kits: Kit[] = [
  {
    id: "GL",
    interestLabel: "General Ledger",
    title: "General Ledger Configuration Kit",
    subtitle: "Construire et valider le socle financier de SAP S/4HANA.",
    description:
      "Kit opérationnel pour structurer et configurer les principaux objets du General Ledger SAP S/4HANA : plan de comptes, comptes généraux, types de pièces, plages de numéros, ledgers et structure de reporting financier.",
    deliverables: [
      "Matrice de plan de comptes",
      "Fiche de configuration des comptes GL",
      "Types de pièces & plages de numéros",
      "Framework de configuration des ledgers",
      "Checklist de validation GL",
    ],
    outcome: "Configurer un General Ledger complet, cohérent et prêt pour les tests.",
  },
  {
    id: "AP",
    interestLabel: "Accounts Payable",
    title: "Accounts Payable Configuration Kit",
    subtitle: "Structurer et exécuter le cycle comptable fournisseur de bout en bout.",
    description:
      "Kit SAP S/4HANA pour configurer le cycle fournisseurs : Business Partner fournisseur, compte collectif, conditions de paiement, facture fournisseur et gestion des postes ouverts.",
    deliverables: [
      "Guide de paramétrage BP fournisseur",
      "Fiche compte collectif fournisseur",
      "Matrice des conditions de paiement",
      "Flux de traitement des factures fournisseurs",
      "Checklist de validation AP",
    ],
    outcome: "Configurer et valider un cycle fournisseur complet dans SAP S/4HANA.",
  },
  {
    id: "F110",
    interestLabel: "Payment Program",
    title: "Automatic Payment Program F110 Kit",
    subtitle: "Préparer, contrôler et exécuter les paiements fournisseurs automatisés.",
    description:
      "Kit opérationnel dédié au programme de paiement automatique F110 : préparation du run, sélection des postes, proposition de paiement, analyse des exceptions et exécution du paiement.",
    deliverables: [
      "Template de lancement F110",
      "Matrice des modes de paiement",
      "Checklist des prérequis fournisseurs",
      "Framework d'analyse de proposition",
      "Guide de correction des exceptions",
    ],
    outcome:
      "Exécuter un paiement automatique fiable avec contrôle des erreurs et validation comptable.",
  },
  {
    id: "BANK",
    interestLabel: "Bank Accounting",
    title: "Bank Accounting Configuration Kit",
    subtitle: "Structurer les données bancaires et sécuriser la préparation des paiements.",
    description:
      "Kit de configuration bancaire SAP couvrant les clés bancaires, banques société, comptes bancaires, IBAN, liaison GL et dépendances avec le programme de paiement.",
    deliverables: [
      "Guide clé bancaire & banque société",
      "Template compte bancaire & IBAN",
      "Matrice d'intégration Banque–GL",
      "Checklist de readiness paiement",
      "Framework de contrôle des erreurs",
    ],
    outcome: "Garantir une configuration bancaire fiable, cohérente et exploitable pour les paiements.",
  },
  {
    id: "AR",
    interestLabel: "Accounts Receivable",
    title: "Accounts Receivable Configuration Kit",
    subtitle: "Configurer et contrôler le cycle comptable client.",
    description:
      "Kit SAP S/4HANA couvrant le cycle client : Business Partner client, compte collectif, facture client, encaissement, lettrage, postes ouverts et relance.",
    deliverables: [
      "Guide de paramétrage BP client",
      "Fiche compte collectif client",
      "Flux de facturation client",
      "Guide encaissement & lettrage",
      "Checklist de validation AR",
    ],
    outcome: "Configurer et valider un cycle client complet dans SAP S/4HANA.",
  },
];

const leadSchema = z.object({
  firstName: z.string().trim().min(1).max(80),
  lastName: z.string().trim().min(1).max(80),
  email: z.string().trim().email().max(255),
  company: z.string().trim().min(1).max(120),
  role: z.string().trim().min(1).max(120),
});

type Step = "form" | "ready";

const OperationalKitsSection = () => {
  const tx = useTx();
  const [openKit, setOpenKit] = useState<Kit | null>(null);
  const [step, setStep] = useState<Step>("form");
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
  });

  const openModal = (kit: Kit) => {
    setOpenKit(kit);
    setStep("form");
    setForm({ firstName: "", lastName: "", email: "", company: "", role: "" });
  };

  const closeModal = () => {
    setOpenKit(null);
    setStep("form");
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
    // Placeholder: lead capture endpoint to be wired later.
    // eslint-disable-next-line no-console
    console.log("[Operational Kit Lead]", {
      kit: openKit?.id,
      interest: openKit?.interestLabel,
      ...parsed.data,
    });
    await new Promise((r) => setTimeout(r, 400));
    setSubmitting(false);
    setStep("ready");
  };

  const handleDownload = () => {
    // Placeholder download — to be replaced when assets are uploaded.
    // eslint-disable-next-line no-console
    console.log("[Download Kit]", openKit?.id);
    window.open("about:blank", "_blank", "noopener,noreferrer");
  };

  return (
    <section id="kits-operationnels" className="section-y bg-secondary border-y border-border">
      <div className="container-wide">
        <div className="max-w-3xl mb-14">
          <div className="eyebrow mb-6">{tx("Kits opérationnels", "Operational Kits")}</div>
          <h2 className="display-md">
            {tx("Des kits gratuits pour structurer vos processus ", "Free kits to structure your ")}
            <em className="not-italic text-champagne font-display">
              {tx("SAP S/4HANA Finance", "SAP S/4HANA Finance")}
            </em>
            .
          </h2>
          <p className="lede mt-6 text-muted-foreground">
            {tx(
              "Des ressources gratuites et opérationnelles pour structurer, configurer et valider les principaux processus SAP S/4HANA Finance dans un contexte projet.",
              "Free, operational resources to structure, configure and validate the main SAP S/4HANA Finance processes in a project context.",
            )}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {kits.map((kit, i) => (
            <Reveal
              key={kit.id}
              delay={i * 60}
              className="card-premium p-7 flex flex-col bg-background"
            >
              <div className="inline-flex items-center gap-2 self-start text-[10px] uppercase tracking-[0.2em] bg-ink text-ivory px-3 py-1.5 rounded-sm">
                <Sparkles className="h-3 w-3 text-champagne" />
                {tx("Kit gratuit", "Free kit")}
              </div>
              <h3 className="font-display text-xl leading-snug mt-5">{kit.title}</h3>
              <p className="text-[13.5px] text-champagne mt-2 font-medium leading-snug">
                {kit.subtitle}
              </p>
              <p className="text-[14px] text-muted-foreground mt-4 leading-relaxed">
                {kit.description}
              </p>
              <ul className="mt-5 space-y-1.5">
                {kit.deliverables.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-2 text-[13px] text-foreground/85 leading-relaxed"
                  >
                    <span className="text-champagne shrink-0 mt-0.5">✔</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-5 border-t border-border flex-1">
                <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-1.5">
                  {tx("Résultat attendu", "Expected outcome")}
                </div>
                <p className="text-[13.5px] text-foreground/90 leading-relaxed">{kit.outcome}</p>
              </div>
              <Button
                type="button"
                variant="ink"
                size="lg"
                className="mt-6 w-full"
                onClick={() => openModal(kit)}
              >
                <Download className="h-4 w-4" />
                {tx("Télécharger le kit", "Download the kit")}
              </Button>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={!!openKit} onOpenChange={(o) => !o && closeModal()}>
        <DialogContent className="bg-ink text-ivory border-ink/40 max-w-lg">
          {openKit && step === "form" && (
            <>
              <DialogHeader>
                <div className="text-[10px] uppercase tracking-[0.2em] text-champagne mb-2">
                  {tx("Accès gratuit", "Free access")} · {openKit.interestLabel}
                </div>
                <DialogTitle className="font-display text-2xl text-ivory leading-snug">
                  {openKit.title}
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
                    value={openKit.interestLabel}
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

          {openKit && step === "ready" && (
            <div className="py-4">
              <div className="flex flex-col items-center text-center">
                <div className="h-14 w-14 rounded-full bg-champagne/15 flex items-center justify-center mb-5">
                  <CheckCircle2 className="h-7 w-7 text-champagne" />
                </div>
                <DialogTitle className="font-display text-2xl text-ivory leading-snug">
                  {tx("Votre kit est prêt à être téléchargé.", "Your kit is ready to download.")}
                </DialogTitle>
                <p className="text-ivory/70 text-[14px] mt-3 leading-relaxed max-w-sm">
                  {openKit.title}
                </p>
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
    </section>
  );
};

export default OperationalKitsSection;
