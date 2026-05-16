import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import trainingRoomVisual from "@/assets/cbs-training-room.png";
import Seo from "@/components/Seo";
import { useTx } from "@/i18n/tx";
import { useLang } from "@/i18n/useLang";

const APropos = () => {
  const tx = useTx();
  const { localize } = useLang();
  return (
    <>
      <Seo titleKey="seo.about_title" descriptionKey="seo.about_desc" />
      {/* HERO */}
      <section className="hero-uniform bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="eyebrow mb-6">CBS Finance Institute</div>
            <h1 className="display-lg text-foreground">
              {tx("L'institut spécialisé pour former, transformer et rendre la ", "The specialized institute to train, transform and make ")}<em className="not-italic text-champagne font-display">{tx("Finance SAP durable", "SAP Finance sustainable")}</em>.
            </h1>
            <div className="mt-6 max-w-2xl space-y-5 text-muted-foreground">
              <p className="lede">
                {tx(
                  "Nous formons les professionnels Finance SAP, accompagnons les directions Finance dans leurs transformations et préparons les équipes à sécuriser l'adoption des nouveaux processus.",
                  "We train SAP Finance professionals, support finance leaders through their transformations and prepare teams to secure the adoption of new processes."
                )}
              </p>
              <p className="text-[15px] leading-relaxed">
                {tx(
                  "Une seule discipline, traitée en profondeur : la Finance SAP — des processus à leur traduction dans SAP, et des équipes à leur autonomie.",
                  "A single discipline, treated in depth: SAP Finance — from processes to their translation into SAP, and from teams to autonomy."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="section-y">
        <div className="container-wide grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="eyebrow mb-6">{tx("Notre identité", "Our identity")}</div>
            <h2 className="display-md">
              {tx("Un institut de formation et un partenaire de ", "A training institute and a ")}<em className="not-italic text-champagne font-display">{tx("transformation", "transformation partner")}</em>.
            </h2>
            <div className="mt-6 space-y-5">
              <p className="lede">
                {tx(
                  "Nous intervenons au cœur des programmes Finance SAP des directions Finance et IT : processus core, architecture cible, alignement organisationnel et conduite de l'exécution.",
                  "We operate at the heart of SAP Finance programs run by finance and IT leaders: core processes, target architecture, organizational alignment and execution leadership."
                )}
              </p>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                {tx(
                  "Nos parcours de formation prolongent cette expertise terrain et préparent professionnels, consultants et key users à intervenir avec le même niveau d'exigence en environnement réel.",
                  "Our training programs extend this field expertise and prepare professionals, consultants and key users to perform with the same level of rigor in real environments."
                )}
              </p>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="aspect-[4/5] rounded-sm overflow-hidden relative bg-secondary">
              <img
                src={trainingRoomVisual}
                alt={tx("Salle de formation CBS Finance Institute", "CBS Finance Institute training room")}
                className="h-full w-full object-cover object-center"
                loading="lazy"
                width={1080}
                height={1920}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-background/15 via-transparent to-ink/10" />
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATION */}
      <section className="section-y bg-secondary border-y border-border">
        <div className="container-wide">
          <div className="max-w-3xl mb-14">
            <div className="eyebrow mb-6">{tx("Notre différence", "Our difference")}</div>
            <h2 className="display-md">
              {tx("Une approche distincte de la transformation ", "A distinct approach to ")}<em className="not-italic text-champagne font-display">{tx("Finance SAP", "SAP Finance transformation")}</em>.
            </h2>
            <div className="mt-6 space-y-2 text-muted-foreground lede">
              <p>{tx("Nous n'enseignons pas seulement la Finance SAP.", "We don't simply teach SAP Finance.")}</p>
              <p>{tx("Nous préparons les organisations à la maîtriser dans la durée.", "We prepare organizations to master it over the long term.")}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: tx("Logique projet, pas logique académique", "Project logic, not academic logic"),
                text: tx(
                  "Nos interventions et nos parcours sont structurés autour des cycles réels de transformation : cadrage, design, déploiement et autonomie post-projet.",
                  "Our engagements and programs are structured around the real cycles of transformation: scoping, design, deployment and post-project autonomy."
                ),
              },
              {
                title: tx("Double expertise Finance & SAP", "Dual Finance & SAP expertise"),
                text: tx(
                  "Maîtrise des processus Finance et de leur traduction dans SAP, sans rupture entre vision métier et mise en œuvre.",
                  "Mastery of finance processes and their translation into SAP, with no rupture between business vision and execution."
                ),
              },
              {
                title: tx("Montée en compétence opérationnelle", "Operational capability building"),
                text: tx(
                  "Nous développons des profils et des équipes capables d'intervenir, de décider et d'exécuter avec plus d'autonomie.",
                  "We develop people and teams able to act, decide and execute with greater autonomy."
                ),
              },
              {
                title: tx("Standards et exigence d'exécution", "Standards and execution rigor"),
                text: tx(
                  "Un niveau de rigueur aligné sur les programmes les plus structurants : structure, livrables, gouvernance et qualité.",
                  "A level of rigor aligned with the most structuring programs: structure, deliverables, governance and quality."
                ),
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

      {/* EXPERTISE */}
      <section className="section-y">
        <div className="container-wide">
          <div className="max-w-3xl mb-14">
            <div className="eyebrow mb-6">{tx("Expertise", "Expertise")}</div>
            <h2 className="display-md">
              {tx("À la croisée de trois ", "At the intersection of three ")}<em className="not-italic text-champagne font-display">{tx("capacités critiques", "critical capabilities")}</em>.
            </h2>
            <p className="lede mt-6 text-muted-foreground">
              {tx(
                "La valeur que nous créons naît de la combinaison rare de trois expertises rarement maîtrisées ensemble.",
                "The value we create stems from the rare combination of three expertises seldom mastered together."
              )}
            </p>
          </div>
          <div className="bg-ink text-ivory rounded-sm p-10 lg:p-14">
            <div className="grid sm:grid-cols-3 gap-px bg-ivory/15 rounded-sm overflow-hidden">
              {[
                {
                  k: "Finance",
                  master: tx("Processus core (R2R, P2P, O2C), normes comptables, pilotage et contrôle.", "Core processes (R2R, P2P, O2C), accounting standards, steering and control."),
                  why: tx("Garantir que la cible SAP serve réellement les enjeux de la direction Finance.", "Ensure the SAP target genuinely serves the CFO agenda."),
                },
                {
                  k: "SAP",
                  master: tx("Expertise fonctionnelle et architecture Finance dans SAP.", "Functional expertise and finance architecture within SAP."),
                  why: tx("Concevoir une cible cohérente, robuste et alignée avec les besoins métier.", "Design a target that is coherent, robust and aligned with business needs."),
                },
                {
                  k: tx("Transformation", "Transformation"),
                  master: tx("Méthodologie projet, gouvernance, conduite du changement, préparation du déploiement.", "Project methodology, governance, change management, deployment readiness."),
                  why: tx("Sécuriser l'exécution, l'adoption et la création de valeur dans la durée.", "Secure execution, adoption and value creation over time."),
                },
              ].map((p, i) => (
                <div key={p.k} className="bg-ink p-8">
                  <div className="text-champagne font-display text-sm tracking-[0.2em] mb-3">0{i + 1}</div>
                  <div className="font-display text-2xl text-ivory mb-5">{p.k}</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-ivory/50 mb-2">{tx("Ce que nous maîtrisons", "What we master")}</div>
                  <p className="text-[14px] text-ivory/80 leading-relaxed mb-5">{p.master}</p>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-ivory/50 mb-2">{tx("Pourquoi c'est décisif", "Why it's decisive")}</div>
                  <p className="text-[14px] text-ivory/80 leading-relaxed">{p.why}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXECUTION */}
      <section className="section-y bg-secondary border-y border-border">
        <div className="container-wide">
          <div className="max-w-3xl mb-14">
            <div className="eyebrow mb-6">{tx("Exécution", "Execution")}</div>
            <h2 className="display-md">
              {tx("Un partenaire pour exécuter vos transformations ", "A partner to execute your ")}<em className="not-italic text-champagne font-display">{tx("Finance SAP", "SAP Finance transformations")}</em>.
            </h2>
            <p className="lede mt-6 text-muted-foreground">
              {tx(
                "Sur les programmes à fort enjeu, la qualité d'exécution conditionne directement la valeur créée. Notre rôle est d'apporter le niveau de structure, de rigueur et de maîtrise que ces environnements exigent.",
                "On high-stakes programs, the quality of execution directly conditions value creation. Our role is to bring the level of structure, rigor and mastery these environments demand."
              )}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-px bg-border border border-border rounded-sm overflow-hidden mb-10">
            <div className="bg-background p-10">
              <div className="text-[10px] uppercase tracking-[0.2em] text-champagne mb-5">{tx("Ce que nous délivrons", "What we deliver")}</div>
              <h3 className="font-display text-2xl leading-tight mb-6">{tx("Les leviers d'une transformation Finance réussie.", "The levers of a successful finance transformation.")}</h3>
              <ul className="space-y-4">
                {[
                  { k: tx("Processus Finance core", "Core finance processes"), v: tx("Record-to-Report, Procure-to-Pay, Order-to-Cash.", "Record-to-Report, Procure-to-Pay, Order-to-Cash.") },
                  { k: tx("Transformation SAP Finance", "SAP Finance transformation"), v: tx("Cadrage, design, déploiement et structuration des transitions.", "Scoping, design, deployment and structuring of transitions.") },
                  { k: tx("Alignement Finance / IT", "Finance / IT alignment"), v: tx("Traduction des exigences métier en cible exploitable.", "Translating business requirements into an operable target.") },
                  { k: tx("Gouvernance & operating model", "Governance & operating model"), v: tx("Organisation cible, responsabilités, instances de pilotage.", "Target organization, responsibilities, steering bodies.") },
                  { k: tx("Team enablement", "Team enablement"), v: tx("Montée en compétence des équipes pour sécuriser l'autonomie post-projet.", "Team upskilling to secure post-project autonomy.") },
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

            <div className="bg-background p-10">
              <div className="text-[10px] uppercase tracking-[0.2em] text-champagne mb-5">{tx("Les risques que nous adressons", "The risks we address")}</div>
              <h3 className="font-display text-2xl leading-tight mb-6">{tx("Sécuriser les zones critiques d'un programme SAP.", "Securing the critical zones of an SAP program.")}</h3>
              <ul className="space-y-4">
                {[
                  tx("Désalignement entre vision Finance et conception SAP.", "Misalignment between finance vision and SAP design."),
                  tx("Faible adoption des nouveaux processus par les équipes.", "Weak adoption of new processes by the teams."),
                  tx("Dérives de planning et explosion des coûts en phase de réalisation.", "Schedule slippage and cost overruns during build phase."),
                  tx("Dépendance excessive vis-à-vis des intégrateurs externes.", "Excessive dependency on external integrators."),
                  tx("Préparation insuffisante au déploiement : tests, données, cutover.", "Insufficient deployment readiness: testing, data, cutover."),
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
              <span className="text-champagne">{tx("Notre rôle :", "Our role:")}</span> {tx("apporter la structure, la rigueur et l'expertise qui sécurisent l'exécution et soutiennent la création de valeur.", "to bring the structure, rigor and expertise that secure execution and sustain value creation.")}
            </p>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="section-y">
        <div className="container-wide">
          <div className="max-w-3xl mb-12">
            <div className="eyebrow mb-6">{tx("Impact", "Impact")}</div>
            <h2 className="display-md">
              {tx("Un impact ", "A ")}<em className="not-italic text-champagne font-display">{tx("mesurable", "measurable")}</em>{tx(", à chaque étape du programme.", " impact at every stage of the program.")}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border border border-border rounded-sm overflow-hidden">
            {[
              { k: tx("Risque", "Risk"), v: tx("Réduction des risques projet, financiers et de conformité.", "Reduced project, financial and compliance risks.") },
              { k: tx("Accélération", "Acceleration"), v: tx("Cycles de design et de déploiement plus courts et mieux maîtrisés.", "Shorter, better-controlled design and deployment cycles.") },
              { k: tx("Autonomie", "Autonomy"), v: tx("Indépendance accrue vis-à-vis des partenaires externes.", "Greater independence from external partners.") },
              { k: tx("Adoption", "Adoption"), v: tx("Appropriation plus rapide par les équipes Finance et opérationnelles.", "Faster ownership by finance and operational teams.") },
              { k: tx("Performance", "Performance"), v: tx("Processus Finance plus fiables, plus rapides et plus auditables.", "Finance processes that are more reliable, faster and more auditable.") },
            ].map((it) => (
              <div key={it.k} className="bg-background p-6">
                <div className="text-[10px] uppercase tracking-[0.2em] text-champagne mb-3">{it.k}</div>
                <p className="text-[14px] leading-relaxed">{it.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDIBILITY */}
      <section className="section-y bg-secondary border-y border-border">
        <div className="container-wide">
          <div className="max-w-3xl mb-12">
            <div className="eyebrow mb-6">{tx("Crédibilité", "Credibility")}</div>
            <h2 className="display-md">
              {tx("Pensé pour les environnements ", "Built for the most ")}<em className="not-italic text-champagne font-display">{tx("SAP les plus complexes", "complex SAP environments")}</em>.
            </h2>
            <p className="lede mt-6 text-muted-foreground">
              {tx(
                "Nos méthodes et nos contenus sont conçus pour répondre aux exigences des organisations Finance les plus structurantes et des programmes de transformation à fort enjeu.",
                "Our methods and content are designed to meet the demands of the most structuring finance organizations and high-stakes transformation programs."
              )}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-sm overflow-hidden">
            {[
              { k: tx("Transformation", "Transformation"), v: tx("Programmes de transformation Finance à forte intensité organisationnelle.", "Finance transformation programs with high organizational intensity.") },
              { k: tx("Multi-entités", "Multi-entity"), v: tx("Environnements internationaux, consolidés et multi-acteurs.", "International, consolidated, multi-stakeholder environments.") },
              { k: tx("Standardisation", "Standardization"), v: tx("Harmonisation des processus Finance core et des pratiques de pilotage.", "Harmonization of core finance processes and steering practices.") },
              { k: tx("Déploiement", "Deployment"), v: tx("Préparation des tests, des données, du cutover et de la stabilisation.", "Preparation of testing, data, cutover and stabilization.") },
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
            <div className="eyebrow mb-6 text-ivory/60">{tx("Notre vision", "Our vision")}</div>
            <h2 className="display-md text-ivory">
              {tx("Devenir la référence du ", "Becoming the reference for ")}<em className="not-italic text-champagne font-display">{tx("capability building", "capability building")}</em>{tx(" SAP Finance.", " in SAP Finance.")}
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 text-ivory/75 leading-relaxed space-y-5">
            <p>{tx("Nous portons une conviction simple : la spécialisation absolue est la condition d'une expertise réellement utile.", "We hold one simple conviction: absolute specialization is the condition of expertise that truly proves useful.")}</p>
            <p>{tx(
              "Nous refusons la dispersion thématique, la légèreté pédagogique et les positionnements génériques. C'est en restant exclusivement focalisés sur SAP Finance et la transformation S/4HANA que nous délivrons un niveau d'exigence différenciant — pour nos clients comme pour les profils que nous formons.",
              "We reject thematic dispersion, pedagogical lightness and generic positioning. By staying exclusively focused on SAP Finance and S/4HANA transformation, we deliver a differentiating standard — for our clients as much as for the professionals we train."
            )}</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-y bg-secondary">
        <div className="container-narrow text-center">
          <h2 className="display-md">
            {tx("Parlons de votre prochaine étape ", "Let's discuss your next ")}<em className="not-italic text-champagne font-display">{tx("SAP Finance", "SAP Finance step")}</em>.
          </h2>
          <p className="lede text-muted-foreground mt-6 max-w-2xl mx-auto">
            {tx(
              "Un échange structuré pour qualifier votre contexte, sécuriser vos arbitrages et orienter vos équipes vers le bon dispositif — formation, cadrage projet ou préparation Key Users.",
              "A structured exchange to qualify your context, secure your arbitrations and direct your teams toward the right format — training, project scoping or Key User enablement."
            )}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" variant="ink">
              <Link to={localize("/contact")}>{tx("Planifier un échange", "Schedule a discussion")} <ArrowRight /></Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to={localize("/offres-entreprise")}>{tx("Voir les offres entreprise", "Explore enterprise services")}</Link>
            </Button>
          </div>
          <div className="mt-5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {tx("Échange confidentiel — réponse sous 24 à 48h", "Confidential exchange — reply within 24–48 h")}
          </div>
        </div>
      </section>
    </>
  );
};

export default APropos;
