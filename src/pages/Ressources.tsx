import { Link } from "react-router-dom";
import { useState } from "react";
import {
  ArrowRight,
  Mail,
  CheckCircle2,
  BookOpen,
  PlayCircle,
  Target,
  AlertTriangle,
  Workflow,
  Network,
  GraduationCap,
  Compass,
  Download,
  Landmark,
  Receipt,
  Banknote,
  Wallet,
  FileSpreadsheet,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Reveal from "@/components/Reveal";
import { toast } from "@/hooks/use-toast";
import Seo from "@/components/Seo";
import { useTx } from "@/i18n/tx";
import { useLang } from "@/i18n/useLang";

const Ressources = () => {
  const tx = useTx();
  const { localize } = useLang();
  const [email, setEmail] = useState("");
  const [kitDialogOpen, setKitDialogOpen] = useState(false);
  const [selectedKit, setSelectedKit] = useState<string>("");
  const [leadForm, setLeadForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    interest: "",
  });

  const kits = [
    {
      id: "gl",
      icon: Landmark,
      label: "Free SAP Finance Kit",
      title: "General Ledger Configuration Kit",
      subtitle: "Build and validate the financial backbone of SAP S/4HANA.",
      description:
        "A consulting-grade operational kit to structure and configure the core General Ledger components in SAP S/4HANA — chart of accounts, GL accounts, document control and financial reporting structure.",
      deliverables: [
        "Chart of accounts matrix",
        "GL account configuration sheet",
        "Document types & number ranges",
        "Ledger configuration framework",
        "Financial Statement Version (FSV)",
        "GL validation checklist",
      ],
      outcome: "Configure a complete and auditable General Ledger ready for testing.",
    },
    {
      id: "ap",
      icon: Receipt,
      label: "Free SAP Finance Kit",
      title: "Accounts Payable Configuration Kit",
      subtitle: "Structure and execute the end-to-end vendor accounting cycle.",
      description:
        "A practical SAP S/4HANA kit to configure supplier accounting processes — Business Partner, reconciliation accounts, invoice processing and open item management.",
      deliverables: [
        "Vendor Business Partner setup",
        "Reconciliation account configuration",
        "Payment terms matrix",
        "Vendor invoice process flow",
        "Open item management setup",
        "AP validation checklist",
      ],
      outcome: "Configure and validate a complete vendor accounting cycle.",
    },
    {
      id: "f110",
      icon: Wallet,
      label: "Free SAP Finance Kit",
      title: "Automatic Payment Program (F110) Kit",
      subtitle: "Prepare, control and execute automated vendor payments.",
      description:
        "An execution-focused kit covering the full F110 payment cycle: run preparation, item selection, payment proposal analysis, error correction and payment execution.",
      deliverables: [
        "F110 run configuration template",
        "Payment method matrix",
        "Vendor payment prerequisites",
        "Payment proposal analysis framework",
        "Exception handling guide",
        "Payment validation checklist",
      ],
      outcome: "Execute and control a full payment run with accurate accounting results.",
    },
    {
      id: "bank",
      icon: Banknote,
      label: "Free SAP Finance Kit",
      title: "Bank Accounting Configuration Kit",
      subtitle: "Structure banking data and secure payment readiness.",
      description:
        "A complete kit to configure SAP banking structures — bank key, house bank, bank accounts, IBAN — and integrate with the General Ledger and payment program.",
      deliverables: [
        "Bank key & house bank setup",
        "Bank account & IBAN structure",
        "Bank-to-GL integration matrix",
        "Payment readiness checklist",
        "Banking configuration sheet",
        "Error control framework",
      ],
      outcome: "Ensure banking configuration is consistent, reliable and ready for payments.",
    },
    {
      id: "ar",
      icon: FileSpreadsheet,
      label: "Free SAP Finance Kit",
      title: "Accounts Receivable Configuration Kit",
      subtitle: "Configure and control the customer accounting cycle.",
      description:
        "A structured SAP S/4HANA kit covering the customer cycle: Business Partner, customer invoice, incoming payment, open items and dunning process.",
      deliverables: [
        "Customer Business Partner setup",
        "Reconciliation account configuration",
        "Customer invoice process flow",
        "Incoming payment & clearing",
        "Dunning process basics (F150)",
        "AR validation checklist",
      ],
      outcome: "Configure and validate a complete customer accounting cycle.",
    },
  ];

  const openKitDialog = (kitId: string, interest: string) => {
    setSelectedKit(kitId);
    setLeadForm((p) => ({ ...p, interest }));
    setKitDialogOpen(true);
  };

  const handleKitSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { firstName, lastName, email: em, company, role, interest } = leadForm;
    if (!firstName.trim() || !lastName.trim() || !company.trim() || !role.trim() || !interest) {
      toast({ title: "Missing information", description: "Please fill in all required fields." });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em.trim()) || em.length > 255) {
      toast({ title: "Invalid email", description: "Please provide a valid professional email." });
      return;
    }
    toast({
      title: "Kit on its way",
      description: "Your free SAP Finance kit will be sent to your inbox shortly.",
    });
    setKitDialogOpen(false);
    setLeadForm({ firstName: "", lastName: "", email: "", company: "", role: "", interest: "" });
  };

  const challenges = [
    {
      icon: Target,
      title: tx("Comprendre les impacts réels de S/4HANA sur la Finance", "Understanding the real impact of S/4HANA on finance"),
      desc: tx("Mesurer ce qui change vraiment pour la clôture, le pilotage et le contrôle.", "Measure what really changes for close, steering and control."),
    },
    {
      icon: AlertTriangle,
      title: tx("Éviter les erreurs fréquentes en phase de cadrage", "Avoiding common pitfalls during the scoping phase"),
      desc: tx("Identifier les angles morts qui coûtent le plus cher en exécution.", "Identify the blind spots that cost the most during execution."),
    },
    {
      icon: Workflow,
      title: tx("Structurer efficacement les processus Finance", "Effectively structuring finance processes"),
      desc: tx("R2R, P2P, O2C : poser une cible claire, alignée avec le standard SAP.", "R2R, P2P, O2C: set a clear target aligned with the SAP standard."),
    },
    {
      icon: Network,
      title: tx("Aligner Finance et IT dans un projet SAP", "Aligning Finance and IT within an SAP project"),
      desc: tx("Construire une gouvernance qui sécurise les arbitrages tout au long du programme.", "Build governance that secures arbitrations throughout the program."),
    },
    {
      icon: GraduationCap,
      title: tx("Monter rapidement en compétence sur SAP Finance", "Rapidly upskilling in SAP Finance"),
      desc: tx("Acquérir les repères essentiels pour contribuer dès les premiers ateliers.", "Acquire the essential references to contribute from the very first workshops."),
    },
  ];

  const featured = [
    {
      title: tx("S/4HANA Finance : ce qui change vraiment", "S/4HANA Finance: what really changes"),
      desc: tx("Universal Journal, modèle de données simplifié, impacts sur le contrôle et le pilotage. Une lecture courte des changements structurants.", "Universal Journal, simplified data model, impacts on control and steering. A concise read of the structuring changes."),
      cta: tx("Lire", "Read"),
      icon: BookOpen,
    },
    {
      title: tx("3 erreurs fréquentes en phase de cadrage SAP", "3 common pitfalls during SAP scoping"),
      desc: tx("Périmètre flou, gouvernance Finance / IT mal posée, sous-estimation du legacy : ce que l'on observe le plus souvent en programme.", "Blurred scope, weak Finance/IT governance, underestimated legacy: what we observe most often on programs."),
      cta: tx("Lire", "Read"),
      icon: BookOpen,
    },
    {
      title: tx("Comprendre le Universal Journal simplement", "Understanding the Universal Journal — simply"),
      desc: tx("Le concept central de S/4HANA Finance expliqué clairement : structure, intérêt et impacts sur le reporting.", "The central concept of S/4HANA Finance explained clearly: structure, value and impact on reporting."),
      cta: tx("Voir", "Watch"),
      icon: PlayCircle,
    },
    {
      title: tx("Cadrer un programme S/4HANA en 5 questions", "Framing an S/4HANA program in 5 questions"),
      desc: tx("Les questions à poser dès les premiers ateliers pour aligner sponsors, Finance et IT sur la cible.", "The questions to ask in the very first workshops to align sponsors, Finance and IT on the target."),
      cta: tx("Lire", "Read"),
      icon: BookOpen,
    },
    {
      title: tx("R2R dans S/4HANA : ce qu'il faut savoir", "R2R in S/4HANA: what you need to know"),
      desc: tx("Clôture, allocations, consolidation : comment SAP repense le processus Record-to-Report dans S/4HANA.", "Close, allocations, consolidation: how SAP rethinks the Record-to-Report process in S/4HANA."),
      cta: tx("Lire", "Read"),
      icon: BookOpen,
    },
    {
      title: tx("Finance et IT : comment vraiment s'aligner", "Finance and IT: how to truly align"),
      desc: tx("Trois leviers concrets pour faire converger les attentes Finance et la réalité d'une plateforme SAP.", "Three concrete levers to converge finance expectations with the reality of an SAP platform."),
      cta: tx("Voir", "Watch"),
      icon: PlayCircle,
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed) || trimmed.length > 255) {
      toast({ title: tx("Email invalide", "Invalid email"), description: tx("Merci d'indiquer une adresse email valide.", "Please provide a valid email address.") });
      return;
    }
    toast({ title: tx("Inscription enregistrée", "Subscription confirmed"), description: tx("Vous recevrez nos prochains insights SAP Finance.", "You'll receive our next SAP Finance insights.") });
    setEmail("");
  };

  return (
    <>
      <Seo titleKey="seo.resources_title" descriptionKey="seo.resources_desc" />
      {/* HERO */}
      <section className="hero-uniform bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="eyebrow mb-6">{tx("Bibliothèque experte", "Expert Library")}</div>
            <h1 className="display-lg text-foreground">
              {tx("Insights et décryptages ", "Insights and analyses on ")}<em className="not-italic text-champagne font-display">{tx("SAP Finance", "SAP Finance")}</em>{tx(", en accès libre.", " — freely accessible.")}
            </h1>
            <div className="mt-6 max-w-2xl space-y-5 text-muted-foreground">
              <p className="lede">
                {tx(
                  "Notre bibliothèque experte rassemble analyses, retours d'expérience et repères méthodologiques pour comprendre S/4HANA et structurer vos décisions Finance.",
                  "Our expert library brings together analyses, lessons learned and methodological references to understand S/4HANA and structure your finance decisions."
                )}
              </p>
              <p className="text-[15px] leading-relaxed">
                {tx(
                  "Des contenus courts, issus de projets réels — pensés pour les directions Finance, les consultants SAP et les équipes projet.",
                  "Concise content drawn from real projects — designed for finance leaders, SAP consultants and project teams."
                )}
              </p>
            </div>
            <div className="mt-10">
              <Button asChild size="lg" variant="ink">
                <a href="#newsletter">{tx("Recevoir les prochains décryptages", "Receive our next analyses")} <ArrowRight /></a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="section-y">
        <div className="container-wide">
          <div className="max-w-3xl mb-14">
            <div className="eyebrow mb-6">{tx("Vos enjeux", "Your challenges")}</div>
            <h2 className="display-md">
              {tx("Les questions que nos contenus ", "The questions our content ")}<em className="not-italic text-champagne font-display">{tx("éclairent", "illuminates")}</em>.
            </h2>
            <p className="lede mt-6 text-muted-foreground">
              {tx(
                "Chaque ressource répond à une problématique concrète rencontrée par les directions Finance et les équipes projet S/4HANA.",
                "Every resource addresses a concrete challenge faced by finance leaders and S/4HANA project teams."
              )}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.title} delay={i * 60} className="card-premium p-8">
                  <div className="flex items-start gap-5">
                    <div className="shrink-0 h-11 w-11 rounded-sm bg-ink text-ivory flex items-center justify-center">
                      <Icon className="h-5 w-5 text-champagne" />
                    </div>
                    <div className="flex-1">
                      <div className="font-display text-lg leading-snug">{c.title}</div>
                      <p className="text-[15px] text-muted-foreground mt-3 leading-relaxed">{c.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED CONTENT */}
      <section className="section-y bg-secondary border-y border-border">
        <div className="container-wide">
          <div className="max-w-3xl mb-14">
            <div className="eyebrow mb-6">{tx("Contenus en avant", "Featured content")}</div>
            <h2 className="display-md">
              {tx("Des repères clairs pour vos projets ", "Clear references for your ")}<em className="not-italic text-champagne font-display">{tx("Finance SAP", "SAP Finance")}</em>{tx("", " projects")}.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal key={f.title} delay={i * 60} className="card-premium p-8 flex flex-col">
                  <h3 className="font-display text-xl leading-snug">{f.title}</h3>
                  <p className="text-[15px] text-muted-foreground mt-4 leading-relaxed flex-1">{f.desc}</p>
                  <button
                    type="button"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-champagne transition-colors self-start"
                  >
                    <Icon className="h-4 w-4" /> {f.cta}
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="section-y bg-ink text-ivory">
        <div className="container-wide grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-6 text-ivory/60">{tx("Notre angle", "Our angle")}</div>
            <h2 className="display-md text-ivory">
              {tx("Des contenus issus du ", "Content drawn from the ")}<em className="not-italic text-champagne font-display">{tx("terrain", "field")}</em>.
            </h2>
            <p className="lede text-ivory/75 mt-6">
              {tx(
                "Chaque contenu est basé sur des projets SAP Finance réels, avec une approche opérationnelle orientée décision et exécution.",
                "Every piece is grounded in real SAP Finance projects, with an operational approach oriented toward decision and execution."
              )}
            </p>
            <div className="mt-8 inline-flex items-center gap-3 text-ivory/60 text-sm">
              <Compass className="h-4 w-4 text-champagne" />
              {tx("Pensé pour les décideurs Finance et les équipes projet.", "Designed for finance decision-makers and project teams.")}
            </div>
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-5">
              {[
                { k: tx("Expérience projet S/4HANA", "S/4HANA project experience"), v: tx("Inspirés de programmes multi-entités, multi-pays et multi-référentiels.", "Drawn from multi-entity, multi-country, multi-standard programs.") },
                { k: tx("Vision Finance + SAP", "Finance + SAP perspective"), v: tx("Une lecture qui croise les enjeux métier et la réalité de la plateforme.", "A reading that intersects business stakes and platform reality.") },
                { k: tx("Contenus directement applicables", "Directly applicable content"), v: tx("Des repères utilisables dès le prochain comité projet.", "References usable from your next project committee.") },
              ].map((v) => (
                <li key={v.k} className="flex gap-5 border-t border-ivory/15 pt-5 first:border-0 first:pt-0">
                  <span className="text-champagne font-display text-sm tracking-[0.15em] pt-1 shrink-0">—</span>
                  <div>
                    <div className="font-display text-lg text-ivory leading-snug">{v.k}</div>
                    <p className="text-[14px] text-ivory/70 mt-1 leading-relaxed">{v.v}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* EMAIL CAPTURE */}
      <section id="newsletter" className="section-y">
        <div className="container-narrow">
          <div className="card-premium p-10 md:p-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-sm bg-ink text-ivory flex items-center justify-center">
                <Mail className="h-5 w-5 text-champagne" />
              </div>
              <div className="eyebrow">{tx("Newsletter", "Newsletter")}</div>
            </div>
            <h2 className="display-md">
              {tx("Recevez nos insights ", "Receive our ")}<em className="not-italic text-champagne font-display">{tx("SAP Finance", "SAP Finance insights")}</em>.
            </h2>
            <p className="lede mt-6 text-muted-foreground">
              {tx(
                "Un contenu court, utile et directement applicable pour progresser sur vos projets SAP Finance.",
                "Short, useful, directly applicable content to make progress on your SAP Finance projects."
              )}
            </p>
            <form onSubmit={handleSubscribe} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl">
              <Input
                type="email"
                required
                maxLength={255}
                placeholder={tx("votre.email@entreprise.com", "your.email@company.com")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-background"
                aria-label={tx("Adresse email", "Email address")}
              />
              <Button type="submit" size="lg" variant="ink" className="shrink-0">
                {tx("Recevoir les contenus", "Receive the content")} <ArrowRight />
              </Button>
            </form>
            <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-champagne" />
              {tx("Aucun spam. Contenu à forte valeur uniquement.", "No spam. High-value content only.")}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-y bg-ink text-ivory">
        <div className="container-narrow text-center">
          <div className="eyebrow mb-6 text-ivory/60 justify-center inline-flex">{tx("Aller plus loin", "Go further")}</div>
            <h2 className="display-md text-ivory">
              {tx("Vous voulez aller au-delà de la ", "Want to go beyond ")}<em className="not-italic text-champagne font-display">{tx("lecture", "reading")}</em> ?
            </h2>
            <p className="lede text-ivory/75 mt-6 max-w-2xl mx-auto">
              {tx(
                "Nous formons vos équipes Finance SAP et accompagnons les directions dans la structuration de leurs programmes S/4HANA.",
                "We train your SAP Finance teams and support leaders in structuring their S/4HANA programs."
              )}
            </p>
            <div className="mt-10 flex justify-center">
              <Button asChild size="lg" variant="champagne">
                <Link to={localize("/contact")}>{tx("Planifier un échange", "Schedule a discussion")} <ArrowRight /></Link>
              </Button>
            </div>
            <div className="mt-5 text-xs uppercase tracking-[0.2em] text-ivory/50">
              {tx("Échange confidentiel — réponse sous 24 à 48h", "Confidential exchange — reply within 24–48 h")}
            </div>
        </div>
      </section>
    </>
  );
};

export default Ressources;
