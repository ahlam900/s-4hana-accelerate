import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import aboutVisual from "@/assets/about-visual.jpg";
import Seo from "@/components/Seo";

const APropos = () => {
  return (
    <>
      <Seo titleKey="seo.about_title" descriptionKey="seo.about_desc" />
      {/* HERO — Positioning */}
      <section className="hero-y border-b border-border bg-secondary flex items-center min-h-[420px] md:min-h-[480px] lg:min-h-[520px]">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="eyebrow mb-6">CBS Finance Institute</div>
            <h1 className="display-lg text-foreground">
              Le partenaire de référence pour l'<em className="not-italic text-champagne font-display">exécution</em> et la montée en compétence sur SAP Finance.
            </h1>
            <div className="mt-6 max-w-2xl space-y-5 text-muted-foreground">
              <p className="lede">
                Nous accompagnons les directions Finance et les programmes SAP S/4HANA dans des environnements à fort enjeu, en combinant exécution de transformation et développement des capacités internes.
              </p>
              <p className="text-[15px] leading-relaxed">
                Là où la complexité technique rencontre les exigences métier, notre rôle est d'apporter la rigueur, la structure et l'expertise qui sécurisent la valeur créée.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONING — Identity clarification */}
      <section className="section-y">
        <div className="container-wide grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="eyebrow mb-6">Notre identité</div>
            <h2 className="display-md">
              Un partenaire de transformation, pas un simple <em className="not-italic text-champagne font-display">centre de formation</em>.
            </h2>
            <div className="mt-6 space-y-5">
              <p className="lede">
                CBS Finance Institute intervient au cœur des programmes SAP S/4HANA des directions Finance et IT — sur les processus core, l'architecture cible, l'alignement organisationnel et la conduite de l'exécution.
              </p>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                Nos dispositifs de capability building prolongent cette même expertise terrain : ils préparent les équipes à intervenir avec le même niveau d'exigence sur des environnements réels et structurants.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="aspect-[4/5] rounded-sm overflow-hidden">
              <img src={aboutVisual} alt="Composition éditoriale" className="h-full w-full object-cover" loading="lazy" width={1280} height={1600} />
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATION */}
      <section className="section-y bg-secondary border-y border-border">
        <div className="container-wide">
          <div className="max-w-3xl mb-14">
            <div className="eyebrow mb-6">Notre différence</div>
            <h2 className="display-md">
              Une approche distincte de la transformation <em className="not-italic text-champagne font-display">SAP Finance</em>.
            </h2>
            <div className="mt-6 space-y-2 text-muted-foreground lede">
              <p>Nous n'enseignons pas SAP Finance.</p>
              <p>Nous préparons des organisations à le maîtriser dans la durée.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Logique projet, pas logique académique",
                text: "Nos interventions et nos parcours sont structurés autour des cycles réels de transformation S/4HANA : cadrage, design, déploiement, run.",
              },
              {
                title: "Double expertise Finance & SAP",
                text: "Maîtrise des processus Finance et de leur traduction dans une architecture S/4HANA — sans rupture entre la vision métier et l'implémentation.",
              },
              {
                title: "Capability building opérationnel",
                text: "Nous développons des profils et des équipes capables d'intervenir, pas seulement de comprendre — autonomie, décision, exécution.",
              },
              {
                title: "Standards et exigence d'exécution",
                text: "Un niveau de rigueur aligné sur les programmes SAP les plus structurants : structure, livrables, gouvernance, qualité.",
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 70} className="card-premium p-8 group">
                <div className="flex items-start gap-5">
                  <div className="font-display text-champagne text-sm tracking-[0.2em] pt-1">
                    0{i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-display text-xl leading-tight">{c.title}</div>
                    <p className="text-[15px] text-muted-foreground mt-3 leading-relaxed">{c.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE — 3 pillars */}
      <section className="section-y">
        <div className="container-wide">
          <div className="max-w-3xl mb-14">
            <div className="eyebrow mb-6">Expertise</div>
            <h2 className="display-md">
              À la croisée de trois <em className="not-italic text-champagne font-display">capacités critiques</em>.
            </h2>
            <p className="lede mt-6 text-muted-foreground">
              La valeur que nous créons naît de la combinaison rare de trois expertises rarement maîtrisées ensemble.
            </p>
          </div>
          <div className="bg-ink text-ivory rounded-sm p-10 lg:p-14">
            <div className="grid sm:grid-cols-3 gap-px bg-ivory/15 rounded-sm overflow-hidden">
              {[
                {
                  k: "Finance",
                  master: "Processus core (R2R, P2P, O2C), normes comptables, pilotage et contrôle.",
                  why: "Garantir que la cible SAP serve réellement les enjeux de la direction Finance.",
                },
                {
                  k: "SAP",
                  master: "Expertise fonctionnelle et technique avancée sur S/4HANA Finance.",
                  why: "Concevoir une architecture solide, performante et cohérente avec la vision métier.",
                },
                {
                  k: "Transformation",
                  master: "Méthodologie projet, gouvernance, conduite du changement, go-live readiness.",
                  why: "Sécuriser l'exécution, l'adoption et la création de valeur sur la durée.",
                },
              ].map((p, i) => (
                <div key={p.k} className="bg-ink p-8">
                  <div className="text-champagne font-display text-sm tracking-[0.2em] mb-3">0{i + 1}</div>
                  <div className="font-display text-2xl text-ivory mb-5">{p.k}</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-ivory/50 mb-2">Ce que nous maîtrisons</div>
                  <p className="text-[14px] text-ivory/80 leading-relaxed mb-5">{p.master}</p>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-ivory/50 mb-2">Pourquoi c'est décisif</div>
                  <p className="text-[14px] text-ivory/80 leading-relaxed">{p.why}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXECUTION — high value */}
      <section className="section-y bg-secondary border-y border-border">
        <div className="container-wide">
          <div className="max-w-3xl mb-14">
            <div className="eyebrow mb-6">Exécution</div>
            <h2 className="display-md">
              Un partenaire pour exécuter vos transformations <em className="not-italic text-champagne font-display">SAP Finance</em>.
            </h2>
            <p className="lede mt-6 text-muted-foreground">
              Sur des programmes à fort enjeu, la qualité d'exécution conditionne directement la valeur créée. Notre rôle est d'apporter le niveau de rigueur que ces environnements exigent.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-px bg-border border border-border rounded-sm overflow-hidden mb-10">
            {/* What we deliver */}
            <div className="bg-background p-10">
              <div className="text-[10px] uppercase tracking-[0.2em] text-champagne mb-5">Ce que nous délivrons</div>
              <h3 className="font-display text-2xl leading-tight mb-6">Les leviers d'une transformation Finance réussie.</h3>
              <ul className="space-y-4">
                {[
                  { k: "Processus Finance core", v: "Record-to-Report, Procure-to-Pay, Order-to-Cash." },
                  { k: "Transformation S/4HANA", v: "Cadrage, design, déploiement et reprises de données." },
                  { k: "Alignement Finance / IT", v: "Traduction des exigences métier en architecture cible." },
                  { k: "Gouvernance & operating model", v: "Organisation cible, responsabilités, instances de pilotage." },
                  { k: "Team enablement", v: "Montée en compétence des équipes pour sécuriser l'autonomie post-projet." },
                ].map((m) => (
                  <li key={m.k} className="flex gap-4 border-t border-border pt-4 first:border-0 first:pt-0">
                    <span className="text-champagne font-display text-xs tracking-[0.15em] pt-1 shrink-0 w-2">—</span>
                    <div>
                      <div className="font-display text-[15px] leading-snug">{m.k}</div>
                      <div className="text-sm text-muted-foreground mt-1 leading-relaxed">{m.v}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Risks we address */}
            <div className="bg-background p-10">
              <div className="text-[10px] uppercase tracking-[0.2em] text-champagne mb-5">Les risques que nous adressons</div>
              <h3 className="font-display text-2xl leading-tight mb-6">Sécuriser les zones critiques d'un programme SAP.</h3>
              <ul className="space-y-4">
                {[
                  "Désalignement entre vision Finance et conception SAP.",
                  "Faible adoption des nouveaux processus par les équipes opérationnelles.",
                  "Dérives de planning et explosion des coûts en phase de réalisation.",
                  "Dépendance excessive vis-à-vis des intégrateurs externes.",
                  "Go-live readiness insuffisante : reprises de données, tests, cutover.",
                ].map((r) => (
                  <li key={r} className="flex gap-4 border-t border-border pt-4 first:border-0 first:pt-0">
                    <span className="text-champagne font-display text-xs tracking-[0.15em] pt-1 shrink-0 w-2">—</span>
                    <p className="text-[15px] leading-relaxed">{r}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-10">
            <p className="font-display text-xl md:text-2xl leading-snug max-w-3xl">
              <span className="text-champagne">Notre rôle :</span> apporter la structure, la rigueur et l'expertise qui sécurisent l'exécution et garantissent la création de valeur.
            </p>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="section-y">
        <div className="container-wide">
          <div className="max-w-3xl mb-12">
            <div className="eyebrow mb-6">Impact</div>
            <h2 className="display-md">
              Un impact <em className="not-italic text-champagne font-display">mesurable</em>, à chaque étape du programme.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border border border-border rounded-sm overflow-hidden">
            {[
              { k: "Risque", v: "Réduction des risques projet, financiers et de conformité." },
              { k: "Accélération", v: "Cycles de design et de déploiement raccourcis." },
              { k: "Autonomie", v: "Indépendance accrue vis-à-vis des intégrateurs externes." },
              { k: "Adoption", v: "Appropriation rapide par les équipes Finance et opérationnelles." },
              { k: "Performance", v: "Processus Finance plus fiables, plus rapides, plus auditables." },
            ].map((it) => (
              <div key={it.k} className="bg-background p-6">
                <div className="text-[10px] uppercase tracking-[0.2em] text-champagne mb-3">{it.k}</div>
                <p className="text-[14px] leading-relaxed">{it.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDIBILITY — Built for complex SAP environments */}
      <section className="section-y bg-secondary border-y border-border">
        <div className="container-wide">
          <div className="max-w-3xl mb-12">
            <div className="eyebrow mb-6">Crédibilité</div>
            <h2 className="display-md">
              Pensé pour les environnements <em className="not-italic text-champagne font-display">SAP les plus complexes</em>.
            </h2>
            <p className="lede mt-6 text-muted-foreground">
              Nos méthodes et nos contenus sont conçus pour répondre aux exigences des organisations Finance les plus structurantes et des programmes de transformation à fort enjeu.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-sm overflow-hidden">
            {[
              { k: "S/4HANA", v: "Programmes de transformation full-scope." },
              { k: "Multi-entités", v: "Environnements internationaux et consolidés." },
              { k: "Standardisation", v: "Harmonisation des processus Finance core." },
              { k: "Go-live readiness", v: "Migration de données, tests et cutover sécurisés." },
            ].map((c) => (
              <div key={c.k} className="bg-background p-8">
                <div className="text-[10px] uppercase tracking-[0.2em] text-champagne mb-3">{c.k}</div>
                <div className="font-display text-xl leading-tight">{c.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="section-y bg-ink text-ivory">
        <div className="container-wide grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-6 text-ivory/60">Notre vision</div>
            <h2 className="display-md text-ivory">
              Devenir la référence du <em className="not-italic text-champagne font-display">capability building</em> SAP Finance.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 text-ivory/75 leading-relaxed space-y-5">
            <p>Nous portons une conviction simple : la spécialisation absolue est la condition d'une expertise réellement utile.</p>
            <p>Nous refusons la dispersion thématique, la légèreté pédagogique et les positionnements génériques. C'est en restant exclusivement focalisés sur SAP Finance et la transformation S/4HANA que nous délivrons un niveau d'exigence différenciant — pour nos clients comme pour les profils que nous formons.</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-y bg-secondary">
        <div className="container-narrow text-center">
          <h2 className="display-md">
            Passez un cap sur votre transformation <em className="not-italic text-champagne font-display">SAP Finance</em>.
          </h2>
          <p className="lede text-muted-foreground mt-6 max-w-2xl mx-auto">
            Un échange structuré pour analyser votre contexte, sécuriser vos décisions et aligner vos équipes sur les enjeux clés de votre programme.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" variant="ink">
              <Link to="/contact">Échanger avec un expert <ArrowRight /></Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Demander une analyse</Link>
            </Button>
          </div>
          <div className="mt-5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Échange confidentiel — réponse sous 24h
          </div>
        </div>
      </section>
    </>
  );
};

export default APropos;
