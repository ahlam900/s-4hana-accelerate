import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, FileText, Layers, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";

const categories = [
  {
    icon: BookOpen,
    title: "Insights projet",
    desc: "Retours d'expérience et observations issues des projets SAP Finance — points d'attention, arbitrages, signaux faibles.",
    value: "Mieux lire les dynamiques d'un programme avant de prendre vos décisions.",
  },
  {
    icon: Layers,
    title: "Repères SAP Finance",
    desc: "Décryptages courts sur S/4HANA, l'Universal Journal, les processus core et les choix d'architecture Finance.",
    value: "Disposer de repères clairs pour cadrer vos discussions Finance / IT.",
  },
  {
    icon: FileText,
    title: "Guides pratiques",
    desc: "Mini-guides et formats synthétiques sur les sujets récurrents : cadrage, gouvernance, adoption, go-live.",
    value: "Gagner du temps sur les sujets que l'on rencontre dans tout projet SAP Finance.",
  },
  {
    icon: Sparkles,
    title: "Formats courts à venir",
    desc: "Tips, checklists et décryptages en préparation, pensés pour une lecture rapide entre deux comités projet.",
    value: "Suivre une publication régulière de contenus utiles et applicables.",
  },
];

const featured = [
  {
    tag: "Décryptage",
    title: "S/4HANA Finance : ce qui change vraiment",
    desc: "Universal Journal, modèle de données simplifié, impacts sur le contrôle et le pilotage. Une lecture courte des changements structurants.",
    audience: "DAF, contrôleurs financiers, responsables programme S/4HANA.",
    gain: "Une vision claire des arbitrages techniques et métier à anticiper.",
  },
  {
    tag: "Guide court",
    title: "Processus Finance core dans SAP",
    desc: "R2R, P2P, O2C : structure, points de friction et leviers de standardisation dans un contexte multi-entités.",
    audience: "Process owners, équipes projet Finance, architectes fonctionnels.",
    gain: "Identifier les zones de valeur et les points de vigilance sur vos processus core.",
  },
  {
    tag: "Format à venir",
    title: "Réussir une transformation Finance SAP",
    desc: "Cadrage, gouvernance, alignement Finance / IT, go-live readiness — les repères clés d'une exécution maîtrisée.",
    audience: "Sponsors, directeurs de programme, PMO transformation.",
    gain: "Un cadre simple pour structurer votre réflexion sur le programme.",
  },
];

const Ressources = () => {
  return (
    <>
      {/* HERO */}
      <section className="section-y border-b border-border bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="eyebrow mb-6">Ressources</div>
            <h1 className="display-lg text-foreground">
              Insights, repères et ressources utiles pour les projets <em className="not-italic text-champagne font-display">SAP Finance</em>.
            </h1>
            <div className="mt-6 max-w-2xl space-y-5 text-muted-foreground">
              <p className="lede">
                Des formats courts pour mieux comprendre les enjeux SAP Finance, sécuriser vos décisions et progresser sur vos projets S/4HANA.
              </p>
              <p className="text-[15px] leading-relaxed">
                Tips, décryptages, mini-guides et contenus pratiques inspirés des réalités du terrain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="section-y">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="eyebrow mb-6">Notre approche</div>
            <p className="font-display text-2xl md:text-3xl leading-snug">
              Des contenus courts, utiles et directement inspirés des réalités des projets SAP Finance.
            </p>
            <p className="font-display text-2xl md:text-3xl leading-snug mt-2 text-muted-foreground">
              Une base de ressources pensée pour aider les équipes Finance et projet à mieux comprendre, cadrer et exécuter.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section-y bg-secondary border-y border-border">
        <div className="container-wide">
          <div className="max-w-3xl mb-14">
            <div className="eyebrow mb-6">Catégories</div>
            <h2 className="display-md">
              Des repères simples pour des sujets <em className="not-italic text-champagne font-display">complexes</em>.
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
                      <div className="mt-5 pt-4 border-t border-border">
                        <div className="text-[10px] uppercase tracking-[0.2em] text-champagne mb-2">Ce que ça vous apporte</div>
                        <p className="text-sm leading-relaxed">{c.value}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="section-y">
        <div className="container-wide">
          <div className="max-w-3xl mb-14">
            <div className="eyebrow mb-6">Contenus en avant</div>
            <h2 className="display-md">
              Trois lectures courtes pour vos projets <em className="not-italic text-champagne font-display">Finance SAP</em>.
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {featured.map((f, i) => (
              <Reveal key={f.title} delay={i * 70} className="card-premium p-8 flex flex-col">
                <div className="text-[10px] uppercase tracking-[0.2em] text-champagne mb-5">{f.tag}</div>
                <h3 className="font-display text-xl leading-snug">{f.title}</h3>
                <p className="text-[15px] text-muted-foreground mt-4 leading-relaxed">{f.desc}</p>
                <div className="mt-6 pt-5 border-t border-border space-y-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Pour qui</div>
                    <p className="text-sm leading-relaxed">{f.audience}</p>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Ce que vous y trouverez</div>
                    <p className="text-sm leading-relaxed">{f.gain}</p>
                  </div>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                  <BookOpen className="h-4 w-4" /> Bientôt disponible
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="section-y bg-ink text-ivory">
        <div className="container-wide grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-6 text-ivory/60">Notre angle</div>
            <h2 className="display-md text-ivory">
              Pensé pour les enjeux réels des projets <em className="not-italic text-champagne font-display">SAP Finance</em>.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-5">
              {[
                { k: "Environnements S/4HANA complexes", v: "Multi-entités, multi-pays, multi-référentiels — les contextes que l'on rencontre vraiment." },
                { k: "Alignement Finance / IT", v: "Aider les deux mondes à se comprendre sur la cible, le périmètre et les arbitrages." },
                { k: "Programmes de transformation", v: "Cadrage, gouvernance, exécution — les sujets qui structurent un projet." },
                { k: "Contenus utiles et applicables", v: "Des formats courts, lisibles, utilisables dès le prochain comité." },
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

      {/* RESOURCE ACCESS */}
      <section className="section-y bg-secondary border-y border-border">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="eyebrow mb-6">Accès aux ressources</div>
              <h2 className="display-md">
                Accédez à nos ressources <em className="not-italic text-champagne font-display">SAP Finance</em>.
              </h2>
              <p className="lede mt-6 text-muted-foreground max-w-2xl">
                Retrouvez nos analyses, repères et contenus utiles pour mieux comprendre les projets Finance SAP.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-3">
              <Button asChild size="lg" variant="ink" className="justify-between">
                <Link to="/produits-digitaux">Consulter les ressources <ArrowRight /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="justify-between">
                <Link to="/contact">Être informé des prochaines publications <ArrowRight /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-y bg-ink text-ivory">
        <div className="container-narrow text-center">
          <div className="eyebrow mb-6 text-ivory/60 justify-center inline-flex">Aller plus loin</div>
          <h2 className="display-md text-ivory">
            Besoin d'un éclairage sur votre projet <em className="not-italic text-champagne font-display">SAP Finance</em> ?
          </h2>
          <p className="lede text-ivory/75 mt-6 max-w-2xl mx-auto">
            Notre équipe peut vous aider à prendre du recul sur vos enjeux et à structurer votre réflexion.
          </p>
          <div className="mt-10 flex justify-center">
            <Button asChild size="lg" variant="champagne">
              <Link to="/contact">Échanger avec un expert <ArrowRight /></Link>
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
