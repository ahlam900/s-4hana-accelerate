import { Link } from "react-router-dom";
import { ArrowRight, Building2, Users, Sparkles, Target, ShieldCheck, Layers, Briefcase, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CorporateInquiryForm from "@/components/forms/CorporateInquiryForm";

const OffresEntreprise = () => {
  return (
    <>
      <PageHero
        eyebrow="Offres entreprise"
        title="Deux offres phares pour accompagner vos transformations Finance SAP."
        subtitle="CBS Finance Institute accompagne les entreprises à travers le Pack Transformation Digitale SAP et le Pack Formation des Key Users SAP."
        primaryCta={{ label: "Demander un devis", to: "#devis" }}
        variant="ink"
      />

      {/* INTRO */}
      <section className="section-y">
        <div className="container-narrow">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <div className="eyebrow mb-6">Notre approche entreprise</div>
              <h2 className="display-md">Deux leviers majeurs pour structurer votre transformation.</h2>
            </div>
            <div className="md:col-span-7 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Nos offres entreprise s'articulent autour de deux leviers majeurs : la transformation digitale SAP et la formation des Key Users SAP.
              </p>
              <p>
                Cette structuration permet aux directions financières et aux équipes projet d'avancer en confiance, avec un partenaire spécialisé qui partage leurs enjeux et leur vocabulaire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OFFER 1 — Transformation Digitale */}
      <OfferBlock
        index="01"
        tag="Pack n°1"
        title="Pack Transformation Digitale SAP"
        description="Pour accompagner les entreprises dans leurs enjeux de transformation Finance SAP."
        points={[
          "Compréhension fine des processus Finance SAP",
          "Accompagnement des équipes dans la transformation",
          "Préparation projet structurée",
          "Acculturation métier / outil",
          "Alignement des utilisateurs avec les enjeux SAP",
          "Soutien à l'adoption du changement",
        ]}
        ctaLabel="Demander un devis"
      />

      {/* OFFER 2 — Key Users */}
      <OfferBlock
        index="02"
        tag="Pack n°2"
        title="Pack Formation des Key Users SAP"
        description="Pour former les utilisateurs clés, sécuriser l'adoption, renforcer l'autonomie des relais métiers et soutenir le déploiement SAP."
        points={[
          "Préparation des key users",
          "Montée en compétence métier / outil",
          "Appropriation des processus",
          "Relais support et transmission interne",
          "Accompagnement avant / pendant / après déploiement",
          "Renforcement de l'autonomie opérationnelle",
        ]}
        ctaLabel="Échanger sur mon besoin"
        reverse
      />

      {/* WHY WORK WITH CBS */}
      <section className="section-y bg-ink text-ivory">
        <div className="container-wide">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-6 text-ivory/60">Pourquoi CBS Finance Institute</div>
            <h2 className="display-md text-ivory">Un partenaire spécialisé, à la hauteur de vos enjeux.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ivory/10 border border-ivory/10 rounded-sm overflow-hidden">
            {[
              { icon: Compass, title: "Expertise 100 % SAP Finance", text: "Une spécialisation exclusive qui fait toute la différence." },
              { icon: Building2, title: "Compréhension des enjeux entreprise", text: "Une lecture business des projets de transformation Finance." },
              { icon: Sparkles, title: "Approche premium", text: "Un niveau d'exigence aligné avec vos standards." },
              { icon: Target, title: "Adoption et performance", text: "Des dispositifs structurés pour des résultats mesurables." },
              { icon: Briefcase, title: "Vision opérationnelle", text: "Du cadrage au go-live, ancrage terrain permanent." },
              { icon: ShieldCheck, title: "Engagement de qualité", text: "Une exigence de rigueur sur l'ensemble des livrables." },
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
            <h2 className="display-md">Construisons ensemble votre programme SAP.</h2>
            <p className="lede mt-6">
              Décrivez votre besoin et l'offre qui vous intéresse. Nous revenons vers vous sous 48 h ouvrées avec une première analyse et un cadrage adapté.
            </p>
          </div>
          <div className="lg:col-span-7">
            <CorporateInquiryForm />
          </div>
        </div>
      </section>
    </>
  );
};

const OfferBlock = ({ index, tag, title, description, points, ctaLabel, reverse }: {
  index: string; tag: string; title: string; description: string; points: string[]; ctaLabel: string; reverse?: boolean;
}) => (
  <section className={`section-y ${reverse ? "bg-secondary" : ""}`}>
    <div className="container-wide grid lg:grid-cols-12 gap-12 items-start">
      <div className={`lg:col-span-5 ${reverse ? "lg:order-2" : ""}`}>
        <div className="font-display text-7xl text-champagne/30 leading-none mb-6">{index}</div>
        <div className="eyebrow mb-4">{tag}</div>
        <h2 className="display-md">{title}</h2>
        <p className="lede mt-6">{description}</p>
        <Button asChild size="lg" variant="ink" className="mt-10">
          <Link to="#devis">{ctaLabel} <ArrowRight /></Link>
        </Button>
      </div>
      <div className={`lg:col-span-6 ${reverse ? "lg:col-start-1 lg:order-1" : "lg:col-start-7"}`}>
        <div className="card-premium p-8 md:p-10">
          <div className="text-[10px] uppercase tracking-[0.2em] text-champagne mb-6">Ce que comprend le pack</div>
          <ul className="space-y-4">
            {points.map((p) => (
              <li key={p} className="flex gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                <Layers className="h-4 w-4 text-champagne mt-1 shrink-0" strokeWidth={1.5} />
                <span className="text-sm leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default OffresEntreprise;
