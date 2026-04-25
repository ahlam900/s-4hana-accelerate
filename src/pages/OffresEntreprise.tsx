import { Link } from "react-router-dom";
import { ArrowRight, Building2, Sparkles, Target, ShieldCheck, Layers, Briefcase, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import CorporateInquiryForm from "@/components/forms/CorporateInquiryForm";
import Seo from "@/components/Seo";
import { useTx } from "@/i18n/tx";

const OffresEntreprise = () => {
  const tx = useTx();
  return (
    <>
      <Seo titleKey="seo.corporate_title" descriptionKey="seo.corporate_desc" />
      <section className="section-y border-b border-border bg-ink text-ivory">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="eyebrow mb-6 text-ivory/60">{tx("Offres entreprise", "Enterprise Services")}</div>
            <h1 className="display-lg text-ivory leading-[1.05]">
              {tx("Cadrez, sécurisez et faites aboutir vos ", "Scope, secure and deliver your ")}<em className="not-italic text-champagne font-display">{tx("transformations Finance SAP", "SAP Finance transformations")}</em>.
            </h1>
            <p className="lede mt-6 max-w-2xl text-ivory/75">
              {tx(
                "Nous accompagnons les directions Finance et les équipes projet dans les phases clés de leurs transformations SAP : cadrage des processus, alignement métier-outil, montée en compétence des équipes et sécurisation de l'adoption.",
                "We support finance leaders and project teams through the key phases of their SAP transformations: process scoping, business–tool alignment, team upskilling and adoption security."
              )}
            </p>
            <p className="mt-4 max-w-2xl text-ivory/70 leading-relaxed text-[15px]">
              {tx(
                "Une intervention structurée, pensée pour les programmes exigeants qui doivent avancer vite, réduire les angles morts et renforcer l'autonomie des acteurs.",
                "A structured engagement, designed for demanding programs that must move fast, reduce blind spots and strengthen the autonomy of stakeholders."
              )}
            </p>
            <ul className="mt-9 space-y-3 max-w-xl border-t border-ivory/15 pt-7">
              {[
                tx("Cadrage des processus Finance SAP (R2R, P2P, O2C)", "SAP Finance process scoping (R2R, P2P, O2C)"),
                tx("Préparation des Key Users et des relais métier", "Key User and business relay enablement"),
                tx("Sécurisation des projets et de l'adoption", "Securing projects and adoption"),
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-[14.5px] text-ivory/85 leading-relaxed">
                  <span className="text-champagne shrink-0 mt-0.5">✔</span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button asChild size="lg" variant="champagne">
                <Link to="#devis">{tx("Demander un devis entreprise", "Request a proposal")} <ArrowRight /></Link>
              </Button>
              <p className="mt-4 text-[12.5px] text-ivory/65 inline-flex items-center gap-2">
                <span className="text-champagne">✔</span> {tx("Réponse sous 24 à 48h — échange confidentiel", "Reply within 24–48 h — confidential exchange")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR OFFERINGS IN DETAIL */}
      <section className="section-y">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <div className="eyebrow mb-6">{tx("Nos offres", "Our services")}</div>
            <h2 className="display-md">{tx("Deux packs pour structurer vos transformations Finance SAP.", "Two packs to structure your SAP Finance transformations.")}</h2>
            <p className="lede mt-6 text-muted-foreground">
              {tx(
                "Du cadrage initial à la montée en autonomie des équipes, nos deux offres couvrent les enjeux les plus critiques des programmes Finance SAP : alignement, exécution, adoption et continuité après déploiement.",
                "From initial scoping to team autonomy, our two offers cover the most critical stakes of SAP Finance programs: alignment, execution, adoption and post-deployment continuity."
              )}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-px bg-border border border-border rounded-sm overflow-hidden">
            <DetailedOffer
              index="01"
              tag={tx("Pour les directions Finance & IT", "For Finance & IT Leaders")}
              title={tx("Pack Transformation Digitale SAP", "SAP Digital Transformation Pack")}
              subtitle={tx(
                "Pour les directions Finance et IT engagées dans une transformation SAP : du cadrage à la sécurisation de l'exécution.",
                "For finance and IT leaders engaged in an SAP transformation: from scoping to execution security."
              )}
              approachLabel={tx("Ce que nous délivrons", "What we deliver")}
              approachIntro={tx("Nos interventions couvrent les étapes structurantes d'un programme Finance SAP :", "Our engagements cover the structuring stages of an SAP Finance program:")}
              approach={[
                tx("Cadrage des processus Finance cible (R2R, P2P, O2C) et alignement métier-paramétrage", "Scoping of target finance processes (R2R, P2P, O2C) and business–configuration alignment"),
                tx("Identification et traitement des risques de transformation", "Identification and treatment of transformation risks"),
                tx("Alignement Finance, IT et équipes projet sur la cible et la gouvernance", "Alignment of Finance, IT and project teams on the target and governance"),
                tx("Définition du modèle opérationnel cible et des instances de pilotage", "Definition of the target operating model and steering bodies"),
                tx("Accélération de la préparation et de l'exécution du programme", "Acceleration of program preparation and execution"),
                tx("Accompagnement de l'adoption et de la conduite du changement", "Support for adoption and change management"),
              ]}
              closingLine={tx(
                "Résultat attendu : un projet mieux structuré, des arbitrages plus sûrs et une trajectoire d'exécution plus fluide.",
                "Expected outcome: a better-structured project, safer arbitrations and a smoother execution trajectory."
              )}
              ctaLabel={tx("Demander un devis entreprise", "Request a proposal")}
            />
            <DetailedOffer
              index="02"
              tag={tx("Pour les équipes projet & Key Users", "For Project Teams & Key Users")}
              title={tx("Pack Formation Key Users SAP", "SAP Key User Enablement Pack")}
              problem={tx(
                "Sans préparation structurée, les Key Users restent dépendants, les usages se fragilisent et l'adoption décroche après le déploiement.",
                "Without structured preparation, Key Users stay dependent, usage weakens and adoption drops off after deployment."
              )}
              approachLabel={tx("Notre approche", "Our approach")}
              approach={[
                tx("Parcours de montée en compétence calibrés par profil Key User", "Upskilling paths calibrated by Key User profile"),
                tx("Cas pratiques construits sur vos processus Finance réels", "Hands-on cases built on your real finance processes"),
                tx("Sessions train-the-trainer pour renforcer l'autonomie interne", "Train-the-trainer sessions to strengthen internal autonomy"),
                tx("Accompagnement opérationnel avant, pendant et après le go-live", "Operational support before, during and after go-live"),
              ]}
              impactLabel={tx("Résultat attendu", "Expected outcome")}
              impact={[
                tx("Key Users autonomes sur les processus Finance SAP critiques", "Key Users fully autonomous on critical SAP Finance processes"),
                tx("Adoption renforcée dans les équipes métier", "Strengthened adoption across business teams"),
                tx("Performance opérationnelle plus durable après déploiement", "More sustainable operational performance after deployment"),
              ]}
              ctaLabel={tx("Structurer mon dispositif Key Users", "Structure my Key User program")}
            />
          </div>

          <p className="mt-12 text-center text-[13.5px] text-muted-foreground">
            {tx(
              "Chaque engagement est cadré avec votre organisation, votre feuille de route et votre niveau de maturité, pour garantir des livrables utiles et une intensité d'accompagnement adaptée.",
              "Each engagement is framed with your organization, your roadmap and your maturity level, to guarantee useful deliverables and a fitting level of support."
            )}
          </p>
        </div>
      </section>

      {/* WHY WORK WITH CBS */}
      <section className="section-y bg-ink text-ivory">
        <div className="container-wide">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-6 text-ivory/60">{tx("Pourquoi CBS Finance Institute", "Why CBS Finance Institute")}</div>
            <h2 className="display-md text-ivory">{tx("Un partenaire spécialisé, focalisé sur l'exécution.", "A specialized partner, focused on execution.")}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ivory/10 border border-ivory/10 rounded-sm overflow-hidden">
            {[
              { icon: Compass, title: tx("Spécialisation 100 % SAP Finance", "100% SAP Finance specialization"), text: tx("Une seule discipline, traitée en profondeur, sans dispersion.", "A single discipline, treated in depth, without dispersion.") },
              { icon: Building2, title: tx("Lecture Finance alignée métier", "Business-aligned finance perspective"), text: tx("Nos recommandations partent des enjeux de la direction Finance, pas d'une logique outil isolée.", "Our recommendations start from the finance leadership's stakes, not from an isolated tool logic.") },
              { icon: Sparkles, title: tx("Standards de conseil senior", "Senior consulting standards"), text: tx("Un niveau d'exigence aligné sur les programmes les plus structurants.", "A level of demand aligned with the most structuring programs.") },
              { icon: Target, title: tx("Adoption mesurable au go-live", "Measurable adoption at go-live"), text: tx("Des dispositifs Key Users pensés pour sécuriser l'usage réel et la continuité dans la durée.", "Key User programs designed to secure real usage and lasting continuity.") },
              { icon: Briefcase, title: tx("Ancrage projet, pas conseil hors-sol", "Project anchored, not abstract advisory"), text: tx("Du cadrage à la mise en œuvre, avec une présence opérationnelle continue.", "From scoping to implementation, with continuous operational presence.") },
              { icon: ShieldCheck, title: tx("Exigence sur les livrables", "Demand on deliverables"), text: tx("Structure, traçabilité et qualité appliquées à chaque phase et chaque artefact.", "Structure, traceability and quality applied to every phase and every artifact.") },
            ].map((b, i) => (
              <Reveal key={b.title} delay={i * 50} className="bg-ink p-7">
                <b.icon className="h-6 w-6 text-champagne" strokeWidth={1.5} />
                <div className="font-display text-lg mt-5 text-ivory">{b.title}</div>
                <p className="text-sm text-ivory/70 mt-3 leading-relaxed">{b.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section id="devis" className="section-y">
        <div className="container-narrow grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-6">{tx("Demande entreprise", "Enterprise inquiry")}</div>
            <h2 className="display-md">{tx("Décrivons votre besoin en Finance SAP.", "Let's outline your SAP Finance need.")}</h2>
            <p className="lede mt-6">
              {tx("Partagez votre contexte, votre périmètre et l'étape où vous en êtes.", "Share your context, your scope and where you stand today.")}
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {tx(
                "Nous revenons vers vous avec une première lecture claire de votre situation et les options d'accompagnement les plus pertinentes.",
                "We come back to you with a clear first read of your situation and the most relevant support options."
              )}
            </p>
            <ul className="mt-8 space-y-3 border-t border-border pt-6">
              {[
                tx("Échange direct avec un expert SAP Finance senior", "Direct exchange with a senior SAP Finance expert"),
                tx("Première analyse de votre contexte projet", "Initial analysis of your project context"),
                tx("Recommandations concrètes et actionnables", "Concrete, actionable recommendations"),
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-[14.5px] text-foreground/85 leading-relaxed">
                  <span className="text-champagne shrink-0 mt-0.5">✔</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <CorporateInquiryForm />
          </div>
        </div>
      </section>
    </>
  );
};

const DetailedOffer = ({
  index,
  tag,
  title,
  subtitle,
  problem,
  approach,
  approachLabel = "Our approach",
  approachIntro,
  impact,
  impactLabel = "Measurable impact",
  closingLine,
  ctaLabel,
}: {
  index: string;
  tag: string;
  title: string;
  subtitle?: string;
  problem?: string;
  approach: string[];
  approachLabel?: string;
  approachIntro?: string;
  impact?: string[];
  impactLabel?: string;
  closingLine?: string;
  ctaLabel: string;
}) => {
  const tx = useTx();
  return (
    <Reveal className="bg-background p-10 md:p-12 flex flex-col h-full">
      <div className="flex items-baseline justify-between mb-6">
        <div className="font-display text-6xl text-champagne/30 leading-none">{index}</div>
        <div className="eyebrow text-muted-foreground">{tag}</div>
      </div>
      <h3 className="font-display text-2xl md:text-[28px] leading-tight text-foreground">{title}</h3>
      {subtitle && (
        <p className="mt-4 text-[14.5px] text-muted-foreground leading-relaxed italic">{subtitle}</p>
      )}

      {problem && (
        <div className="mt-8">
          <div className="text-[10px] uppercase tracking-[0.22em] text-champagne mb-3">{tx("L'enjeu", "The stake")}</div>
          <p className="text-[14.5px] text-muted-foreground leading-relaxed">{problem}</p>
        </div>
      )}

      <div className="mt-7">
        <div className="text-[10px] uppercase tracking-[0.22em] text-champagne mb-3">{approachLabel}</div>
        {approachIntro && (
          <p className="text-[14px] text-muted-foreground leading-relaxed mb-4">{approachIntro}</p>
        )}
        <ul className="space-y-2.5">
          {approach.map((p) => (
            <li key={p} className="flex gap-3 text-[14px] leading-relaxed text-foreground/85">
              <Layers className="h-3.5 w-3.5 text-champagne mt-1.5 shrink-0" strokeWidth={1.5} />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>

      {impact && impact.length > 0 && (
        <div className="mt-7 pt-6 border-t border-border">
          <div className="text-[10px] uppercase tracking-[0.22em] text-champagne mb-3">{impactLabel}</div>
          <ul className="space-y-2">
            {impact.map((p) => (
              <li key={p} className="flex gap-3 text-[14px] leading-relaxed text-foreground">
                <span className="text-champagne mt-0.5">→</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {closingLine && (
        <p className="mt-6 pt-6 border-t border-border text-[14px] leading-relaxed text-foreground/90">
          {closingLine}
        </p>
      )}

      <div className="mt-10 pt-2 mt-auto">
        <Button asChild size="lg" variant="ink">
          <Link to="#devis">{ctaLabel} <ArrowRight /></Link>
        </Button>
      </div>
    </Reveal>
  );
};

export default OffresEntreprise;
