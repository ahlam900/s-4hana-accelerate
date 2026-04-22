import { Link } from "react-router-dom";
import { ArrowRight, Building2, Users, Sparkles, Target, ShieldCheck, Layers, Briefcase, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CorporateInquiryForm from "@/components/forms/CorporateInquiryForm";
import Seo from "@/components/Seo";

const OffresEntreprise = () => {
  return (
    <>
      <Seo titleKey="seo.corporate_title" descriptionKey="seo.corporate_desc" />
      <section className="section-hero border-b border-border bg-ink text-ivory">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="eyebrow mb-6 text-ivory/60">Offres entreprise</div>
            <h1 className="display-lg text-ivory leading-[1.05]">
              Structurez et sécurisez vos <em className="not-italic text-champagne font-display">transformations Finance SAP</em>.
            </h1>
            <p className="lede mt-6 max-w-2xl text-ivory/75">
              CBS Finance Institute supports finance departments in structuring, securing, and accelerating their SAP Finance transformations.
            </p>
            <p className="mt-4 max-w-2xl text-ivory/70 leading-relaxed text-[15px]">
              Our approach ensures process reliability, team alignment, and successful execution of S/4HANA projects in demanding environments.
            </p>
            <ul className="mt-9 space-y-3 max-w-xl border-t border-ivory/15 pt-7">
              {[
                "Structuration des processus Finance SAP",
                "Formation des équipes clés (Key Users & experts)",
                "Accompagnement des projets S/4HANA",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-[14.5px] text-ivory/85 leading-relaxed">
                  <span className="text-champagne shrink-0 mt-0.5">✔</span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button asChild size="lg" variant="champagne">
                <Link to="#devis">Discuss your transformation <ArrowRight /></Link>
              </Button>
              <p className="mt-4 text-[12.5px] text-ivory/65 inline-flex items-center gap-2">
                <span className="text-champagne">✔</span> Response within 24h — confidential exchange
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR OFFERINGS IN DETAIL */}
      <section className="section-y">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <div className="eyebrow mb-6">Nos offres</div>
            <h2 className="display-md">Deux offres stratégiques pour vos transformations SAP Finance.</h2>
            <p className="lede mt-6 text-muted-foreground">
              Deux offres conçues pour accompagner les directions financières dans leurs transformations SAP S/4HANA, avec une approche orientée résultats et non formation générique.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-px bg-border border border-border rounded-sm overflow-hidden">
            <DetailedOffer
              index="01"
              tag="Engagement n°1"
              title="Pack Transformation Digitale SAP"
              subtitle="Conçu pour les directions financières pilotant des programmes de transformation SAP Finance critiques."
              approachLabel="Livrables clés & impact"
              approachIntro="Nous intervenons sur les étapes clés des programmes de transformation SAP Finance :"
              approach={[
                "Structuration de bout en bout des processus Finance SAP (Record-to-Report, P2P, OTC)",
                "Identification et sécurisation des risques de transformation",
                "Alignement entre Finance, IT et équipes projet",
                "Définition du modèle opérationnel cible et de la gouvernance",
                "Accélération de la préparation et de l'exécution des projets S/4HANA",
                "Accompagnement de l'adoption et de la conduite du changement",
              ]}
              closingLine="Notre approche garantit une exécution fiable, une réduction des risques et un time-to-value accéléré."
              ctaLabel="Demander un devis"
            />
            <DetailedOffer
              index="02"
              tag="Engagement n°2"
              title="Pack Formation Key Users SAP"
              problem="Les key users sont souvent laissés seuls face à la complexité SAP, ce qui freine l'adoption et la performance post go-live."
              approachLabel="Notre approche"
              approach={[
                "Parcours de montée en compétence adaptés à chaque profil key user",
                "Cas pratiques ancrés dans vos processus Finance réels",
                "Sessions de type train-the-trainer pour renforcer l'autonomie interne",
                "Accompagnement opérationnel avant, pendant et après le go-live",
              ]}
              impactLabel="Impact mesurable"
              impact={[
                "Key users autonomes sur les processus Finance SAP clés",
                "Taux d'adoption renforcé dans les équipes",
                "Performance opérationnelle durable après déploiement",
              ]}
              ctaLabel="Former mes key users"
            />
          </div>

          <p className="mt-12 text-center text-[13.5px] text-muted-foreground">
            Chaque engagement est défini avec votre comité de direction — périmètre, intensité et livrables sont adaptés à votre feuille de route de transformation.
          </p>
        </div>
      </section>

      {/* WHY WORK WITH CBS */}
      <section className="section-y bg-ink text-ivory">
        <div className="container-wide">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-6 text-ivory/60">Pourquoi CBS Finance Institute</div>
            <h2 className="display-md text-ivory">Un partenaire spécialisé pour vos transformations SAP Finance critiques.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ivory/10 border border-ivory/10 rounded-sm overflow-hidden">
            {[
              { icon: Compass, title: "Expertise 100 % dédiée SAP Finance", text: "Une spécialisation pointue exclusivement dédiée aux transformations SAP Finance." },
              { icon: Building2, title: "Compréhension des enjeux métier", text: "Une lecture Finance alignée avec vos priorités stratégiques et opérationnelles." },
              { icon: Sparkles, title: "Approche de conseil haut de gamme", text: "Un niveau d'exigence et d'exécution aligné avec les standards des grands programmes de transformation." },
              { icon: Target, title: "Adoption et performance mesurable", text: "Des dispositifs structurés garantissant une adoption réelle et une performance durable." },
              { icon: Briefcase, title: "Culture orientée exécution", text: "Du cadrage au go-live, avec un ancrage opérationnel fort." },
              { icon: ShieldCheck, title: "Exigence de qualité des livrables", text: "Un haut niveau d'exigence appliqué à l'ensemble des livrables et des phases projet." },
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
            <div className="eyebrow mb-6">Demande entreprise</div>
            <h2 className="display-md">Parlons de votre transformation SAP Finance.</h2>
            <p className="lede mt-6">
              Décrivez votre contexte et vos enjeux.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Nous vous recontactons sous 24 à 48h avec une première analyse et des recommandations adaptées à votre projet.
            </p>
            <ul className="mt-8 space-y-3 border-t border-border pt-6">
              {[
                "Échange avec un expert SAP Finance",
                "Analyse rapide de votre situation",
                "Recommandations concrètes et actionnables",
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
}) => (
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
        <div className="text-[10px] uppercase tracking-[0.22em] text-champagne mb-3">L'enjeu</div>
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

export default OffresEntreprise;
