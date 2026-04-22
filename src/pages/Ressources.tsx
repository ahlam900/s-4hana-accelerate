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

const challenges = [
  {
    icon: Target,
    title: "Comprendre les impacts réels de S/4HANA sur la Finance",
    desc: "Mesurer ce qui change vraiment pour la clôture, le pilotage et le contrôle.",
  },
  {
    icon: AlertTriangle,
    title: "Éviter les erreurs fréquentes en phase de cadrage",
    desc: "Identifier les angles morts qui coûtent le plus cher en exécution.",
  },
  {
    icon: Workflow,
    title: "Structurer efficacement les processus Finance",
    desc: "R2R, P2P, O2C : poser une cible claire, alignée avec le standard SAP.",
  },
  {
    icon: Network,
    title: "Aligner Finance et IT dans un projet SAP",
    desc: "Construire une gouvernance qui sécurise les arbitrages tout au long du programme.",
  },
  {
    icon: GraduationCap,
    title: "Monter rapidement en compétence sur SAP Finance",
    desc: "Acquérir les repères essentiels pour contribuer dès les premiers ateliers.",
  },
];

const featured = [
  {
    title: "S/4HANA Finance : ce qui change vraiment",
    desc: "Universal Journal, modèle de données simplifié, impacts sur le contrôle et le pilotage. Une lecture courte des changements structurants.",
    cta: "Lire",
    icon: BookOpen,
  },
  {
    title: "3 erreurs fréquentes en phase de cadrage SAP",
    desc: "Périmètre flou, gouvernance Finance / IT mal posée, sous-estimation du legacy : ce que l'on observe le plus souvent en programme.",
    cta: "Lire",
    icon: BookOpen,
  },
  {
    title: "Comprendre le Universal Journal simplement",
    desc: "Le concept central de S/4HANA Finance expliqué clairement : structure, intérêt et impacts sur le reporting.",
    cta: "Voir",
    icon: PlayCircle,
  },
  {
    title: "Cadrer un programme S/4HANA en 5 questions",
    desc: "Les questions à poser dès les premiers ateliers pour aligner sponsors, Finance et IT sur la cible.",
    cta: "Lire",
    icon: BookOpen,
  },
  {
    title: "R2R dans S/4HANA : ce qu'il faut savoir",
    desc: "Clôture, allocations, consolidation : comment SAP repense le processus Record-to-Report dans S/4HANA.",
    cta: "Lire",
    icon: BookOpen,
  },
  {
    title: "Finance et IT : comment vraiment s'aligner",
    desc: "Trois leviers concrets pour faire converger les attentes Finance et la réalité d'une plateforme SAP.",
    cta: "Voir",
    icon: PlayCircle,
  },
];

const Ressources = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed) || trimmed.length > 255) {
      toast({ title: "Email invalide", description: "Merci d'indiquer une adresse email valide." });
      return;
    }
    toast({ title: "Inscription enregistrée", description: "Vous recevrez nos prochains insights SAP Finance." });
    setEmail("");
  };

  return (
    <>
      <Seo titleKey="seo.resources_title" descriptionKey="seo.resources_desc" />
      {/* HERO */}
      <section className="section-hero border-b border-border bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="eyebrow mb-6">Ressources</div>
            <h1 className="display-lg text-foreground">
              Des repères concrets pour réussir vos projets <em className="not-italic text-champagne font-display">SAP Finance</em>.
            </h1>
            <div className="mt-6 max-w-2xl space-y-5 text-muted-foreground">
              <p className="lede">
                Comprendre S/4HANA, éviter les erreurs clés et structurer vos projets Finance avec des contenus issus du terrain.
              </p>
              <p className="text-[15px] leading-relaxed">
                Retours d'expérience, décryptages et conseils directement inspirés de projets SAP Finance réels.
              </p>
            </div>
            <div className="mt-10">
              <Button asChild size="lg" variant="ink">
                <a href="#newsletter">Recevoir les prochains insights <ArrowRight /></a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="section-y">
        <div className="container-wide">
          <div className="max-w-3xl mb-14">
            <div className="eyebrow mb-6">Vos enjeux</div>
            <h2 className="display-md">
              Les enjeux que nous <em className="not-italic text-champagne font-display">traitons</em>.
            </h2>
            <p className="lede mt-6 text-muted-foreground">
              Chaque ressource répond à une question concrète rencontrée par les équipes Finance et les programmes SAP.
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
            <div className="eyebrow mb-6">Contenus en avant</div>
            <h2 className="display-md">
              Des repères clairs pour vos projets <em className="not-italic text-champagne font-display">Finance SAP</em>.
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
            <div className="eyebrow mb-6 text-ivory/60">Notre angle</div>
            <h2 className="display-md text-ivory">
              Des contenus issus du <em className="not-italic text-champagne font-display">terrain</em>.
            </h2>
            <p className="lede text-ivory/75 mt-6">
              Chaque contenu est basé sur des projets SAP Finance réels, avec une approche opérationnelle orientée décision et exécution.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 text-ivory/60 text-sm">
              <Compass className="h-4 w-4 text-champagne" />
              Pensé pour les décideurs Finance et les équipes projet.
            </div>
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-5">
              {[
                { k: "Expérience projet S/4HANA", v: "Inspirés de programmes multi-entités, multi-pays et multi-référentiels." },
                { k: "Vision Finance + SAP", v: "Une lecture qui croise les enjeux métier et la réalité de la plateforme." },
                { k: "Contenus directement applicables", v: "Des repères utilisables dès le prochain comité projet." },
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
              <div className="eyebrow">Newsletter</div>
            </div>
            <h2 className="display-md">
              Recevez nos insights <em className="not-italic text-champagne font-display">SAP Finance</em>.
            </h2>
            <p className="lede mt-6 text-muted-foreground">
              Un contenu court, utile et directement applicable pour progresser sur vos projets SAP Finance.
            </p>
            <form onSubmit={handleSubscribe} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl">
              <Input
                type="email"
                required
                maxLength={255}
                placeholder="votre.email@entreprise.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-background"
                aria-label="Adresse email"
              />
              <Button type="submit" size="lg" variant="ink" className="shrink-0">
                Recevoir les contenus <ArrowRight />
              </Button>
            </form>
            <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-champagne" />
              Aucun spam. Contenu à forte valeur uniquement.
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-y bg-ink text-ivory">
        <div className="container-narrow text-center">
          <div className="eyebrow mb-6 text-ivory/60 justify-center inline-flex">Aller plus loin</div>
          <h2 className="display-md text-ivory">
            Besoin d'aller plus <em className="not-italic text-champagne font-display">loin</em> ?
          </h2>
          <p className="lede text-ivory/75 mt-6 max-w-2xl mx-auto">
            Nous accompagnons les entreprises dans la formation SAP Finance et la structuration de leurs projets S/4HANA.
          </p>
          <div className="mt-10 flex justify-center">
            <Button asChild size="lg" variant="champagne">
              <Link to="/contact">Parler à un expert <ArrowRight /></Link>
            </Button>
          </div>
          <div className="mt-5 text-xs uppercase tracking-[0.2em] text-ivory/50">
            Échange confidentiel — réponse sous 24h
          </div>
        </div>
      </section>
    </>
  );
};

export default Ressources;
