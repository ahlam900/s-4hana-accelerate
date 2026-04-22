import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Compass, GraduationCap, Target, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import aboutVisual from "@/assets/about-visual.jpg";

const APropos = () => {
  return (
    <>
      <section className="section-y border-b border-border bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="eyebrow mb-6">À propos</div>
            <h1 className="display-lg text-foreground">
              Le partenaire de référence pour la <em className="not-italic text-champagne font-display">montée en compétence</em> et la transformation SAP Finance.
            </h1>
            <div className="mt-6 max-w-2xl space-y-5 text-muted-foreground">
              <p className="lede">
                CBS Finance Institute est un institut spécialisé dédié à la Finance SAP et aux environnements S/4HANA. Nous accompagnons les professionnels et les entreprises dans la maîtrise des processus Finance, leur traduction dans SAP, et la réussite de leurs transformations digitales.
              </p>
              <p className="text-[15px] leading-relaxed">
                Notre approche combine expertise projet, pédagogie opérationnelle et exigence de qualité, afin de former des profils immédiatement performants en environnement réel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="section-y">
        <div className="container-wide grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="eyebrow mb-6">Notre mission</div>
            <h2 className="display-md">
              Élever le niveau d'exigence et de <em className="not-italic text-champagne font-display">performance</em> en Finance SAP.
            </h2>
            <div className="mt-6 space-y-5">
              <p className="lede">
                Maîtriser SAP Finance ne peut plus être théorique. Nous formons des professionnels capables de comprendre, structurer et piloter des environnements S/4HANA complexes, avec une approche directement ancrée dans la réalité des projets.
              </p>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                Notre ambition est de développer des profils immédiatement performants, capables d'intervenir avec rigueur sur des transformations à fort enjeu, en combinant expertise métier, maîtrise de l'outil et vision projet.
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

      {/* DIFFERENCE */}
      <section className="section-y bg-secondary border-y border-border">
        <div className="container-wide">
          <div className="max-w-3xl mb-14">
            <div className="eyebrow mb-6">Notre différence</div>
            <h2 className="display-md">
              Une approche ancrée dans la <em className="not-italic text-champagne font-display">réalité des projets SAP</em>.
            </h2>
            <div className="mt-6 space-y-2 text-muted-foreground lede">
              <p>Nous ne formons pas à SAP Finance.</p>
              <p>Nous formons à performer en environnement réel.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Approche orientée projet",
                text: "Des formations construites sur les réalités des projets S/4HANA : cadrage, conception, paramétrage, déploiement.",
              },
              {
                title: "Expertise Finance & SAP",
                text: "Une double expertise : processus Finance et implémentation avancée dans SAP.",
              },
              {
                title: "Pédagogie opérationnelle",
                text: "Cas réels, scénarios concrets, logique terrain : intervenir, pas seulement comprendre.",
              },
              {
                title: "Exigence et standards élevés",
                text: "Un niveau d'exigence aligné avec les environnements SAP les plus structurants.",
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

          <div className="mt-14 pt-10 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="font-display text-xl md:text-2xl leading-snug max-w-2xl">
              Former des profils capables d'avoir un <em className="not-italic text-champagne">impact immédiat</em> sur des projets SAP Finance.
            </p>
            <Button asChild size="lg" variant="ink" className="shrink-0">
              <Link to="/formations">Accéder aux programmes <ArrowRight /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* EXPERTISE & EXÉCUTION */}
      <section className="section-y">
        <div className="container-wide">
          {/* Intro */}
          <div className="max-w-3xl mb-16">
            <div className="eyebrow mb-6">Expertise & exécution</div>
            <h2 className="display-md">
              Un partenaire d'<em className="not-italic text-champagne font-display">exécution</em> pour vos transformations SAP Finance.
            </h2>
            <p className="lede mt-6 text-muted-foreground">
              Nous accompagnons les directions Finance et IT dans la conduite de leurs programmes SAP S/4HANA — des environnements à fort enjeu où la qualité d'exécution conditionne la valeur créée.
            </p>
          </div>

          {/* Two columns: maîtrise + risques */}
          <div className="grid lg:grid-cols-2 gap-px bg-border border border-border rounded-sm overflow-hidden mb-10">
            {/* Maîtrise */}
            <div className="bg-background p-10">
              <div className="text-[10px] uppercase tracking-[0.2em] text-champagne mb-5">Ce que nous maîtrisons</div>
              <h3 className="font-display text-2xl leading-tight mb-6">Les leviers d'une transformation Finance réussie.</h3>
              <ul className="space-y-4">
                {[
                  { k: "Processus Finance core", v: "Record-to-Report, Procure-to-Pay, Order-to-Cash." },
                  { k: "Transformation S/4HANA", v: "Cadrage, design, déploiement et reprises de données." },
                  { k: "Alignement Finance / IT", v: "Traduction des exigences métier en architecture cible." },
                  { k: "Operating model & gouvernance", v: "Organisation cible, responsabilités, instances de pilotage." },
                  { k: "Team enablement", v: "Montée en compétence des équipes internes pour sécuriser l'autonomie post-projet." },
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

            {/* Risques */}
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
              <div className="mt-8 pt-6 border-t border-border">
                <p className="font-display text-[15px] leading-snug">
                  <span className="text-champagne">Notre rôle :</span> apporter le niveau d'exigence, de structure et d'expertise qui sécurise l'exécution du programme et garantit la création de valeur.
                </p>
              </div>
            </div>
          </div>

          {/* Position unique */}
          <div className="bg-ink text-ivory rounded-sm p-10 lg:p-14 mb-10">
            <div className="grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-4">
                <div className="text-[10px] uppercase tracking-[0.2em] text-champagne mb-5">Notre position unique</div>
                <h3 className="font-display text-2xl lg:text-3xl leading-tight text-ivory">
                  À la croisée de trois expertises rarement réunies.
                </h3>
              </div>
              <div className="lg:col-span-8 grid sm:grid-cols-3 gap-px bg-ivory/15 rounded-sm overflow-hidden">
                {[
                  { k: "Finance", v: "Maîtrise des processus, des normes et des enjeux de pilotage." },
                  { k: "SAP", v: "Expertise fonctionnelle et technique avancée sur S/4HANA Finance." },
                  { k: "Projet", v: "Méthodologie de transformation, gouvernance et conduite du changement." },
                ].map((p, i) => (
                  <div key={p.k} className="bg-ink p-7">
                    <div className="text-champagne font-display text-sm tracking-[0.2em] mb-3">0{i + 1}</div>
                    <div className="font-display text-xl text-ivory mb-3">{p.k}</div>
                    <p className="text-[14px] text-ivory/70 leading-relaxed">{p.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Impact mesurable */}
          <div className="mb-12">
            <div className="max-w-2xl mb-8">
              <div className="eyebrow mb-5">Impact mesurable</div>
              <h3 className="font-display text-2xl lg:text-3xl leading-tight">
                Des résultats tangibles, à chaque étape du programme.
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border border border-border rounded-sm overflow-hidden">
              {[
                { k: "Risque", v: "Réduction des risques projet et financiers." },
                { k: "Vélocité", v: "Accélération des phases de design et de déploiement." },
                { k: "Autonomie", v: "Indépendance accrue vis-à-vis des intégrateurs." },
                { k: "Adoption", v: "Appropriation rapide par les équipes Finance." },
                { k: "Performance", v: "Processus Finance plus fiables et plus performants." },
              ].map((it) => (
                <div key={it.k} className="bg-background p-6">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-champagne mb-3">{it.k}</div>
                  <p className="text-[14px] leading-relaxed">{it.v}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Signature + CTA */}
          <div className="border-t border-border pt-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <p className="font-display text-2xl lg:text-3xl leading-snug max-w-3xl">
              Nous ne formons pas à SAP. Nous préparons des organisations à <em className="not-italic text-champagne">réussir</em> leur transformation Finance.
            </p>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Button asChild size="lg" variant="ink"><Link to="/contact">Parler à un expert <ArrowRight /></Link></Button>
              <Button asChild size="lg" variant="outline"><Link to="/contact">Demander une analyse</Link></Button>
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="section-y bg-ink text-ivory">
        <div className="container-wide grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-6 text-ivory/60">Notre vision</div>
            <h2 className="display-md text-ivory">Devenir la référence française de la formation Finance SAP.</h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 text-ivory/75 leading-relaxed space-y-5">
            <p>Nous portons l'ambition d'aider professionnels et entreprises à renforcer leurs capacités Finance SAP, par des dispositifs pratiques, premium et structurés.</p>
            <p>Notre approche refuse à la fois la dispersion thématique et la légèreté pédagogique. C'est en restant exclusivement spécialisés que nous délivrons un niveau d'expertise réellement utile et différenciant.</p>
          </div>
        </div>
      </section>

      {/* CREDIBILITY */}
      <section className="section-y">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-px bg-border border border-border rounded-sm overflow-hidden">
            {[
              { k: "Spécialisation", v: "100 % Finance SAP" },
              { k: "Pédagogie", v: "Approche terrain et opérationnelle" },
              { k: "Standard", v: "Premium, exigeant et structuré" },
            ].map((c) => (
              <div key={c.k} className="bg-background p-8">
                <div className="text-[10px] uppercase tracking-[0.2em] text-champagne mb-3">{c.k}</div>
                <div className="font-display text-2xl leading-tight">{c.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-y bg-secondary">
        <div className="container-narrow text-center">
          <h2 className="display-md">Échangeons sur votre besoin.</h2>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg" variant="ink"><Link to="/contact">Être contacté <ArrowRight /></Link></Button>
            <Button asChild size="lg" variant="outline"><Link to="/formations">Découvrir les formations</Link></Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default APropos;
