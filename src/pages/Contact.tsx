import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, GraduationCap, Briefcase, HelpCircle, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/forms/ContactForm";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";
import Seo from "@/components/Seo";
import { useTx } from "@/i18n/tx";

type Need = "Formation SAP Finance" | "Projet / Transformation SAP" | "Autre demande";

const Contact = () => {
  const tx = useTx();
  const [selected, setSelected] = useState<Need>("Formation SAP Finance");

  const needs: { key: Need; icon: typeof GraduationCap; title: string; desc: string }[] = [
    {
      key: "Formation SAP Finance",
      icon: GraduationCap,
      title: tx("Formation Finance SAP", "SAP Finance Training"),
      desc: tx(
        "Pour vous-même ou vos équipes : montée en compétence FICO, S/4HANA ou Key Users.",
        "For yourself or your teams: upskilling on FICO, S/4HANA or Key Users."
      ),
    },
    {
      key: "Projet / Transformation SAP",
      icon: Briefcase,
      title: tx("Projet S/4HANA & Key Users", "S/4HANA Project & Key Users"),
      desc: tx(
        "Cadrage, structuration ou sécurisation du go-live d'un programme SAP Finance.",
        "Scoping, structuring or securing the go-live of an SAP Finance program."
      ),
    },
    {
      key: "Autre demande",
      icon: HelpCircle,
      title: tx("Autre demande", "Other inquiry"),
      desc: tx(
        "Partenariat, intervention, information ou besoin spécifique.",
        "Partnership, speaking engagement, information or any specific need."
      ),
    },
  ];

  const handleSelect = (key: Need) => {
    setSelected(key);
    document.getElementById("formulaire")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Seo titleKey="seo.contact_title" descriptionKey="seo.contact_desc" />
      {/* HERO */}
      <section className="hero-uniform bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="eyebrow mb-6">{tx("Contact", "Contact")}</div>
            <h1 className="display-lg text-foreground">
              {tx("Échangeons sur votre besoin ", "Let's discuss your ")}<em className="not-italic text-champagne font-display">{tx("SAP Finance", "SAP Finance need")}</em>.
            </h1>
            <div className="mt-6 max-w-2xl space-y-5 text-muted-foreground">
              <p className="lede">
                {tx(
                  "Formation individuelle, accompagnement entreprise ou préparation Key Users : un seul point d'entrée pour qualifier votre besoin.",
                  "Individual training, enterprise advisory or Key User enablement: a single entry point to qualify your need."
                )}
              </p>
              <p className="text-[15px] leading-relaxed">
                {tx(
                  "Réponse sous 24 à 48h avec une première lecture concrète et l'orientation vers le bon dispositif.",
                  "Reply within 24–48 h with a concrete first read and guidance toward the right format."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEED SELECTOR */}
      <section className="section-y">
        <div className="container-wide">
          <div className="max-w-3xl mb-12">
            <div className="eyebrow mb-6">{tx("Votre besoin", "Your need")}</div>
            <h2 className="display-md">
              {tx("Quelle est la nature de votre ", "What is the nature of your ")}<em className="not-italic text-champagne font-display">{tx("demande", "request")}</em> ?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {needs.map((n, i) => {
              const Icon = n.icon;
              const active = selected === n.key;
              return (
                <Reveal key={n.key} delay={i * 70}>
                  <button
                    type="button"
                    onClick={() => handleSelect(n.key)}
                    aria-pressed={active}
                    className={cn(
                      "card-premium p-8 text-left w-full h-full transition-all flex flex-col",
                      active
                        ? "ring-2 ring-champagne shadow-xl -translate-y-1"
                        : "hover:-translate-y-1 hover:shadow-lg",
                    )}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="h-11 w-11 rounded-sm bg-ink text-ivory flex items-center justify-center">
                        <Icon className="h-5 w-5 text-champagne" />
                      </div>
                      {active && (
                        <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.2em] text-champagne">
                          <Check className="h-3 w-3" /> {tx("Sélectionné", "Selected")}
                        </span>
                      )}
                    </div>
                    <div className="font-display text-xl leading-snug">{n.title}</div>
                    <p className="text-[15px] text-muted-foreground mt-3 leading-relaxed flex-1">{n.desc}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                      {tx("Choisir", "Select")} <ArrowRight className="h-4 w-4" />
                    </span>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* MAIN FORM */}
      <section id="formulaire" className="section-y bg-secondary border-y border-border">
        <div className="container-wide grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-6">{tx("Formulaire", "Form")}</div>
            <h2 className="display-md">
              {tx("Décrivez votre ", "Describe your ")}<em className="not-italic text-champagne font-display">{tx("contexte", "context")}</em>.
            </h2>
            <p className="lede mt-6 text-muted-foreground">
              {tx(
                "Plus votre demande est précise, plus notre première réponse sera ciblée — et utile dès le premier échange.",
                "The more precise your request, the more targeted our first response — and useful from the very first exchange."
              )}
            </p>
            <div className="mt-10 space-y-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <Check className="h-4 w-4 text-champagne mt-1 shrink-0" />
                {tx("Réponse par un expert SAP Finance senior", "Reply from a senior SAP Finance expert")}
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-4 w-4 text-champagne mt-1 shrink-0" />
                {tx("Première lecture concrète de votre besoin", "Concrete first read of your need")}
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-4 w-4 text-champagne mt-1 shrink-0" />
                {tx("Orientation vers le bon format d'accompagnement", "Guidance toward the right support format")}
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ContactForm key={selected} defaultSujet={selected} />
          </div>
        </div>
      </section>

      {/* DIRECT CONTACT */}
      <section className="section-y">
        <div className="container-narrow text-center">
          <div className="eyebrow mb-6 justify-center inline-flex">{tx("Contact direct", "Direct contact")}</div>
          <h2 className="display-md">
            {tx("Ou contactez-nous ", "Or reach us ")}<em className="not-italic text-champagne font-display">{tx("directement", "directly")}</em>.
          </h2>
          <div className="mt-10 inline-flex flex-col items-center gap-5">
            <div className="flex items-center gap-3 text-foreground">
              <Mail className="h-5 w-5 text-champagne" />
              <a href="mailto:contact@cbs-institute.com" className="font-display text-lg hover:text-champagne transition-colors">
                contact@cbs-institute.com
              </a>
            </div>
            <Button asChild size="lg" variant="ink">
              <a href="mailto:contact@cbs-institute.com">{tx("Envoyer un email", "Send an email")} <ArrowRight /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-y bg-ink text-ivory">
        <div className="container-narrow text-center">
          <div className="eyebrow mb-6 text-ivory/60 justify-center inline-flex">{tx("Échange rapide", "Quick discussion")}</div>
          <h2 className="display-md text-ivory">
            {tx("Besoin d'une réponse ", "Need a ")}<em className="not-italic text-champagne font-display">{tx("rapide", "fast response")}</em> ?
          </h2>
          <p className="lede text-ivory/75 mt-6 max-w-2xl mx-auto">
            {tx(
              "Décrivez votre besoin en quelques lignes : nous qualifions votre demande et revenons vers vous avec le bon interlocuteur.",
              "Describe your need in a few lines: we'll qualify your request and come back to you with the right contact."
            )}
          </p>
          <div className="mt-10 flex justify-center">
            <Button asChild size="lg" variant="champagne">
              <Link to="#formulaire" onClick={(e) => { e.preventDefault(); document.getElementById("formulaire")?.scrollIntoView({ behavior: "smooth" }); }}>
                {tx("Planifier un échange", "Schedule a discussion")} <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="mt-5 text-xs uppercase tracking-[0.2em] text-ivory/50">
            {tx("Échange confidentiel — réponse sous 24 à 48h", "Confidential exchange — reply within 24–48 h")}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
