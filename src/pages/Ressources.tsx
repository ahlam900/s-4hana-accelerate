import { Link } from "react-router-dom";
import { ArrowRight, Download, BookOpen, FileText, Layers, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";

const categories = [
  {
    icon: BookOpen,
    title: "Expert Insights",
    desc: "Analyses et points de vue sur les enjeux structurants de la Finance SAP et des programmes S/4HANA.",
    value: "Comprendre les dynamiques de transformation avant de prendre les décisions critiques.",
  },
  {
    icon: Layers,
    title: "SAP Finance Guides",
    desc: "Deep dives, frameworks et méthodologies sur les processus core, l'architecture S/4HANA et la gouvernance projet.",
    value: "Cadrer vos décisions techniques et organisationnelles avec des références solides.",
  },
  {
    icon: FileText,
    title: "Transformation Resources",
    desc: "Ressources téléchargeables : checklists, matrices de décision, modèles de gouvernance et de pilotage.",
    value: "Accélérer le cadrage et la mise en exécution de vos programmes Finance.",
  },
  {
    icon: Users,
    title: "Key User & Capability Building",
    desc: "Contenus dédiés à la montée en compétence des équipes Finance, Key Users et profils projet.",
    value: "Sécuriser l'adoption et l'autonomie post-go-live de vos équipes internes.",
  },
];

const featured = [
  {
    tag: "Framework",
    title: "S/4HANA Finance : ce qui change vraiment",
    desc: "Universal Journal, modèle de données simplifié, impacts sur le contrôle et le pilotage. Une lecture exécutive des changements structurants.",
    audience: "DAF, contrôleurs financiers, responsables programme S/4HANA.",
    gain: "Une vision claire des arbitrages techniques et métier à anticiper.",
  },
  {
    tag: "Deep Dive",
    title: "Processus Finance core dans SAP",
    desc: "R2R, P2P, O2C : structure, points de friction et leviers de standardisation dans un contexte multi-entités.",
    audience: "Process owners, équipes projet Finance, architectes fonctionnels.",
    gain: "Identifier les zones de valeur et les risques d'exécution sur vos processus core.",
  },
  {
    tag: "Playbook",
    title: "Réussir une transformation Finance SAP",
    desc: "Cadrage, gouvernance, alignement Finance / IT, go-live readiness — les leviers d'une exécution sécurisée.",
    audience: "Sponsors, directeurs de programme, PMO transformation.",
    gain: "Un cadre structurant pour piloter la création de valeur du programme.",
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
              Analyses et ressources expertes pour la transformation <em className="not-italic text-champagne font-display">SAP Finance</em>.
            </h1>
            <div className="mt-6 max-w-2xl space-y-5 text-muted-foreground">
              <p className="lede">
                Un hub de contenus stratégiques destiné aux directions Finance, aux responsables de programmes SAP et aux équipes de transformation.
              </p>
              <p className="text-[15px] leading-relaxed">
                Analyses, frameworks et ressources opérationnelles — conçus pour sécuriser vos décisions et votre exécution dans les environnements S/4HANA les plus complexes.
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
              Ce n'est pas une bibliothèque de contenus.
            </p>
            <p className="font-display text-2xl md:text-3xl leading-snug mt-2 text-muted-foreground">
              C'est une base de connaissance curatée, issue de la pratique réelle de la transformation SAP Finance.
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
              Une structure claire pour des décisions <em className="not-italic text-champagne font-display">éclairées</em>.
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
                        <div className="text-[10px] uppercase tracking-[0.2em] text-champagne mb-2">Valeur business</div>
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
            <div className="eyebrow mb-6">Contenus phares</div>
            <h2 className="display-md">
              Trois lectures pour structurer votre <em className="not-italic text-champagne font-display">programme Finance</em>.
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
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Ce que vous y gagnez</div>
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
            <div className="eyebrow mb-6 text-ivory/60">Notre exigence</div>
            <h2 className="display-md text-ivory">
              Pensé pour les défis <em className="not-italic text-champagne font-display">SAP réels</em>.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-5">
              {[
                { k: "S/4HANA complexes", v: "Environnements multi-entités, multi-pays, multi-référentiels." },
                { k: "Alignement Finance / IT", v: "Traduction des exigences métier en architecture cible cohérente." },
                { k: "Programmes à fort enjeu", v: "Transformations stratégiques avec contraintes de planning et de coût." },
                { k: "Orientation exécution", v: "Contenus actionnables — pas de théorie déconnectée du terrain." },
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

      {/* LEAD GEN */}
      <section className="section-y bg-secondary border-y border-border">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="eyebrow mb-6">Accès premium</div>
              <h2 className="display-md">
                Accédez à nos ressources <em className="not-italic text-champagne font-display">SAP Finance</em>.
              </h2>
              <p className="lede mt-6 text-muted-foreground max-w-2xl">
                Téléchargez nos guides, recevez nos analyses en avant-première et restez informé des publications utiles à vos programmes de transformation.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-3">
              <Button asChild size="lg" variant="ink" className="justify-between">
                <Link to="/contact">Être informé des nouvelles publications <ArrowRight /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="justify-between">
                <Link to="/produits-digitaux">
                  <span className="inline-flex items-center gap-2"><Download className="h-4 w-4" /> Accéder aux ressources premium</span>
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC CTA */}
      <section className="section-y bg-ink text-ivory">
        <div className="container-narrow text-center">
          <div className="eyebrow mb-6 text-ivory/60 justify-center inline-flex">Aller plus loin</div>
          <h2 className="display-md text-ivory">
            Besoin de plus que des <em className="not-italic text-champagne font-display">insights</em> ?
          </h2>
          <p className="lede text-ivory/75 mt-6 max-w-2xl mx-auto">
            Si vous pilotez une transformation SAP Finance, notre équipe vous accompagne au-delà des contenus — du cadrage à l'exécution.
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
