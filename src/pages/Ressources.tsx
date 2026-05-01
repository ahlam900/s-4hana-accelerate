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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Reveal from "@/components/Reveal";
import { toast } from "@/hooks/use-toast";
import Seo from "@/components/Seo";
import { useTx } from "@/i18n/tx";
import { useLang } from "@/i18n/useLang";

const Ressources = () => {
  const tx = useTx();
  const { localize } = useLang();
  const [email, setEmail] = useState("");

  const challenges = [
    {
      icon: Target,
      title: tx("Comprendre ce qui change vraiment pour la Finance", "Understanding what really changes for Finance"),
      desc: tx("Clôture, pilotage, contrôle, architecture cible : aller au-delà des slogans.", "Close, steering, control, target architecture: going beyond slogans."),
    },
    {
      icon: AlertTriangle,
      title: tx("Éviter les erreurs fréquentes en phase de cadrage", "Avoiding common pitfalls during the scoping phase"),
      desc: tx("Identifier les angles morts qui coûtent le plus cher en exécution.", "Identify the blind spots that cost the most during execution."),
    },
    {
      icon: Workflow,
      title: tx("Structurer efficacement les processus Finance", "Effectively structuring finance processes"),
      desc: tx("R2R, P2P, O2C : poser une cible claire et exploitable.", "R2R, P2P, O2C: set a clear, actionable target."),
    },
    {
      icon: Network,
      title: tx("Aligner Finance et IT dans un projet SAP", "Aligning Finance and IT within an SAP project"),
      desc: tx("Construire une gouvernance qui sécurise les arbitrages.", "Build governance that secures arbitrations."),
    },
    {
      icon: GraduationCap,
      title: tx("Monter plus rapidement en compétence sur SAP Finance", "Upskilling faster on SAP Finance"),
      desc: tx("Acquérir les repères essentiels pour contribuer dès les premiers ateliers.", "Acquire the essential references to contribute from the very first workshops."),
    },
  ];

  const featured = [
    {
      title: tx("Ce que la Finance doit vraiment anticiper dans un projet SAP", "What Finance really needs to anticipate in an SAP project"),
      desc: tx("Les changements qui comptent vraiment pour la clôture, le pilotage, le contrôle et les équipes.", "The changes that really matter for close, steering, control and teams."),
      cta: tx("Lire", "Read"),
      icon: BookOpen,
    },
    {
      title: tx("3 erreurs fréquentes en phase de cadrage SAP", "3 common pitfalls during SAP scoping"),
      desc: tx("Périmètre flou, gouvernance Finance / IT mal posée, sous-estimation du legacy : ce que l'on observe le plus souvent.", "Blurred scope, weak Finance/IT governance, underestimated legacy: what we observe most often."),
      cta: tx("Lire", "Read"),
      icon: BookOpen,
    },
    {
      title: tx("Universal Journal : ce qu'il change vraiment", "Universal Journal: what it really changes"),
      desc: tx("Une lecture claire de son intérêt, de ses impacts et de ce qu'il modifie pour la Finance.", "A clear read of its value, impacts and what it changes for Finance."),
      cta: tx("Voir", "Watch"),
      icon: PlayCircle,
    },
    {
      title: tx("Cadrer un programme SAP Finance en 5 questions", "Framing an SAP Finance program in 5 questions"),
      desc: tx("Les questions à poser dès les premiers ateliers pour aligner sponsors, Finance et IT sur la cible.", "The questions to ask in the very first workshops to align sponsors, Finance and IT on the target."),
      cta: tx("Lire", "Read"),
      icon: BookOpen,
    },
    {
      title: tx("R2R, P2P, O2C : comment poser une cible exploitable", "R2R, P2P, O2C: how to set an actionable target"),
      desc: tx("Structurer les processus de bout en bout sans perdre la logique métier.", "Structure end-to-end processes without losing the business logic."),
      cta: tx("Lire", "Read"),
      icon: BookOpen,
    },
    {
      title: tx("Finance et IT : comment vraiment s'aligner", "Finance and IT: how to truly align"),
      desc: tx("Trois leviers concrets pour faire converger les attentes métier et la réalité de la plateforme SAP.", "Three concrete levers to converge business expectations with the reality of the SAP platform."),
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
                  "Notre bibliothèque experte rassemble analyses, retours d'expérience et repères méthodologiques pour aider les directions Finance, les consultants et les équipes projet à mieux cadrer, comprendre et exécuter leurs transformations.",
                  "Our expert library brings together analyses, lessons learned and methodological references to help Finance leaders, consultants and project teams better frame, understand and execute their transformations."
                )}
              </p>
              <p className="text-[15px] leading-relaxed">
                {tx(
                  "Des contenus courts, issus du terrain, pensés pour éclairer les décisions et renforcer les repères utiles en Finance SAP.",
                  "Short, field-tested content designed to inform decisions and strengthen the useful reference points in SAP Finance."
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
                "Chaque ressource répond à une problématique concrète rencontrée par les directions Finance, les consultants et les équipes projet.",
                "Every resource addresses a concrete challenge faced by Finance leaders, consultants and project teams."
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
                "Chaque contenu est basé sur des projets Finance SAP réels, avec une approche opérationnelle orientée décision, cadrage et exécution.",
                "Every piece is grounded in real SAP Finance projects, with an operational approach oriented toward decision, scoping and execution."
              )}
            </p>
            <div className="mt-8 inline-flex items-center gap-3 text-ivory/60 text-sm">
              <Compass className="h-4 w-4 text-champagne" />
              {tx("Pensé pour les décideurs Finance et les équipes projet.", "Designed for Finance decision-makers and project teams.")}
            </div>
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-5">
              {[
                { k: tx("Expérience projet SAP", "SAP project experience"), v: tx("Inspirés de programmes multi-entités, multi-pays et à forts enjeux de transformation.", "Drawn from multi-entity, multi-country programs with high transformation stakes.") },
                { k: tx("Vision Finance + SAP", "Finance + SAP perspective"), v: tx("Une lecture qui croise les enjeux métier et la réalité de la plateforme.", "A reading that intersects business stakes and platform reality.") },
                { k: tx("Contenus directement applicables", "Directly applicable content"), v: tx("Des repères réutilisables dès le prochain atelier, comité ou cadrage.", "References reusable from your next workshop, committee or scoping session.") },
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
