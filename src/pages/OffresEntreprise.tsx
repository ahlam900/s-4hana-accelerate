import { Link } from "react-router-dom";
import { ArrowRight, Building2, Users, Sparkles, Target, ShieldCheck, Layers, Briefcase, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CorporateInquiryForm from "@/components/forms/CorporateInquiryForm";

const OffresEntreprise = () => {
  return (
    <>
      <section className="section-y border-b border-border bg-ink text-ivory">
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
            <div className="eyebrow mb-6">Our offerings</div>
            <h2 className="display-md">Our Offerings in Detail.</h2>
            <p className="lede mt-6 text-muted-foreground">
              Two consulting engagements designed for finance departments leading SAP S/4HANA transformations — built around measurable outcomes, not generic training.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-px bg-border border border-border rounded-sm overflow-hidden">
            <DetailedOffer
              index="01"
              tag="Engagement n°1"
              title="SAP Digital Transformation Package"
              problem="Many SAP Finance transformations stall on unclear processes, misaligned stakeholders and underestimated change impacts."
              approach={[
                "Diagnostic of Finance processes and S/4HANA target model",
                "Structuring of project governance and key milestones",
                "Alignment of business, IT and finance stakeholders",
                "Change management framework tailored to your context",
              ]}
              impact={[
                "A reliable, documented Finance target architecture",
                "Faster decision-making across the program",
                "Reduced execution risk on critical S/4HANA milestones",
              ]}
              ctaLabel="Frame my transformation"
            />
            <DetailedOffer
              index="02"
              tag="Engagement n°2"
              title="SAP Key User Training Package"
              problem="Key users are often left to absorb SAP complexity alone, weakening adoption and post-go-live performance."
              approach={[
                "Tailored upskilling paths for each key user profile",
                "Hands-on scenarios anchored in your real Finance processes",
                "Train-the-trainer sessions to build internal autonomy",
                "Operational support before, during and after go-live",
              ]}
              impact={[
                "Key users fully autonomous on core SAP Finance processes",
                "Higher adoption rates across business units",
                "Sustained operational performance after deployment",
              ]}
              ctaLabel="Empower my key users"
            />
          </div>

          <p className="mt-12 text-center text-[13.5px] text-muted-foreground">
            Each engagement is shaped with your leadership team — scope, intensity and deliverables are tailored to your transformation roadmap.
          </p>
        </div>
      </section>

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
