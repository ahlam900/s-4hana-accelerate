import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, BookOpen, Layers, Lightbulb, PlayCircle, Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Reveal from "@/components/Reveal";
import { toast } from "@/hooks/use-toast";

const categories = [
  {
    icon: BookOpen,
    title: "Insights projet",
    desc: "Retours d'expérience réels sur projets SAP Finance — risques, arbitrages, erreurs fréquentes et signaux faibles à anticiper.",
  },
  {
    icon: Layers,
    title: "Décryptages S/4HANA",
    desc: "Explications simples des concepts clés : Universal Journal, R2R, P2P, O2C, modèle de données Finance et architecture.",
  },
  {
    icon: Lightbulb,
    title: "Tips & bonnes pratiques",
    desc: "Conseils rapides directement applicables en mission, issus du terrain et des programmes de transformation.",
  },
  {
    icon: PlayCircle,
    title: "Vidéos courtes",
    desc: "Formats pédagogiques rapides (1 à 3 minutes) pour comprendre l'essentiel d'un concept SAP Finance entre deux réunions.",
  },
];

const featured = [
  {
    tag: "Décryptage",
    title: "S/4HANA Finance : ce qui change vraiment",
    desc: "Universal Journal, modèle de données simplifié, impacts sur le contrôle et le pilotage. Une lecture courte des changements structurants.",
    cta: "Lire",
    icon: BookOpen,
  },
  {
    tag: "Insight projet",
    title: "3 erreurs fréquentes en phase de cadrage SAP",
    desc: "Périmètre flou, gouvernance Finance / IT mal posée, sous-estimation du legacy : ce que l'on observe le plus souvent.",
    cta: "Lire",
    icon: BookOpen,
  },
  {
    tag: "Vidéo",
    title: "Comprendre le Universal Journal en 2 minutes",
    desc: "Le concept central de S/4HANA Finance expliqué simplement : structure, intérêt et impacts sur le reporting.",
    cta: "Voir la vidéo",
    icon: PlayCircle,
  },
  {
    tag: "Tip",
    title: "Cadrer un programme S/4HANA en 5 questions",
    desc: "Les questions à poser dès les premiers ateliers pour aligner sponsors, Finance et IT sur la cible.",
    cta: "Lire",
    icon: BookOpen,
  },
  {
    tag: "Décryptage",
    title: "R2R dans S/4HANA : ce qu'il faut savoir",
    desc: "Clôture, allocations, consolidation : comment SAP repense le processus Record-to-Report dans S/4HANA.",
    cta: "Lire",
    icon: BookOpen,
  },
  {
    tag: "Vidéo",
    title: "Finance et IT : comment vraiment s'aligner",
    desc: "Trois leviers concrets pour faire converger les attentes Finance et la réalité d'une plateforme SAP.",
    cta: "Voir la vidéo",
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
    toast({ title: "Inscription enregistrée", description: "Vous recevrez nos prochains contenus SAP Finance." });
    setEmail("");
  };

  return (
    <>
      {/* HERO */}
      <section className="section-y border-b border-border bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="eyebrow mb-6">Ressources</div>
            <h1 className="display-lg text-foreground">
              Insights, repères et contenus utiles pour vos projets <em className="not-italic text-champagne font-display">SAP Finance</em>.
            </h1>
            <div className="mt-6 max-w-2xl space-y-5 text-muted-foreground">
              <p className="lede">
                Des formats courts, concrets et directement inspirés de projets S/4HANA pour mieux comprendre, décider et exécuter.
              </p>
              <p className="text-[15px] leading-relaxed">
                Décryptages, retours terrain, vidéos courtes et tips opérationnels pour les équipes Finance et les projets SAP.
              </p>
            </div>
            <div className="mt-10">
              <Button asChild size="lg" variant="ink">
                <a href="#newsletter">Recevoir les prochains contenus <ArrowRight /></a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section-y">
        <div className="container-wide">
          <div className="max-w-3xl mb-14">
            <div className="eyebrow mb-6">Catégories</div>
            <h2 className="display-md">
              Quatre formats pour suivre les sujets <em className="not-italic text-champagne font-display">SAP Finance</em>.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.title} delay={i * 70} className="card-premium p-8">
                  <div className="flex items-start gap-5">
                    <div className="shrink-0 h-11 w-11 rounded-sm bg-ink text-ivory flex items-center justify-center">
                      <Icon className="h-5 w-5 text-champagne" />
                    </div>
                    <div className="flex-1">
                      <div className="font-display text-xl leading-tight">{c.title}</div>
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
              Des lectures courtes et des vidéos pour vos projets <em className="not-italic text-champagne font-display">Finance SAP</em>.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal key={f.title} delay={i * 60} className="card-premium p-8 flex flex-col">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-champagne mb-5">{f.tag}</div>
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

      {/* EXPERT POSITIONING */}
      <section className="section-y bg-ink text-ivory">
        <div className="container-wide grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-6 text-ivory/60">Notre angle</div>
            <h2 className="display-md text-ivory">
              Des contenus issus du <em className="not-italic text-champagne font-display">terrain</em>.
            </h2>
            <p className="lede text-ivory/75 mt-6">
              Tous nos contenus sont basés sur des projets SAP Finance réels, conçus pour apporter des repères concrets et directement exploitables par les équipes Finance et IT.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-5">
              {[
                { k: "Cas réels S/4HANA", v: "Inspirés de programmes multi-entités, multi-pays et multi-référentiels." },
                { k: "Vision Finance + SAP", v: "Une lecture qui croise les enjeux métier et la réalité de la plateforme." },
                { k: "Approche opérationnelle", v: "Des repères utilisables dès le prochain comité projet." },
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
              Un contenu utile, court et directement applicable chaque semaine pour progresser sur vos projets SAP Finance.
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
