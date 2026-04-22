import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, GraduationCap, Briefcase, HelpCircle, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/forms/ContactForm";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";
import Seo from "@/components/Seo";

type Need = "Formation SAP Finance" | "Projet / Transformation SAP" | "Autre demande";

const needs: { key: Need; icon: typeof GraduationCap; title: string; desc: string }[] = [
  {
    key: "Formation SAP Finance",
    icon: GraduationCap,
    title: "Formation SAP Finance",
    desc: "Former vos équipes ou monter en compétence sur SAP Finance.",
  },
  {
    key: "Projet / Transformation SAP",
    icon: Briefcase,
    title: "Projet / Transformation SAP",
    desc: "Cadrage, structuration ou accompagnement de votre projet S/4HANA.",
  },
  {
    key: "Autre demande",
    icon: HelpCircle,
    title: "Autre demande",
    desc: "Partenariat, information ou besoin spécifique.",
  },
];

const Contact = () => {
  const [selected, setSelected] = useState<Need>("Formation SAP Finance");

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
            <div className="eyebrow mb-6">Contact</div>
            <h1 className="display-lg text-foreground">
              Parlons de votre projet <em className="not-italic text-champagne font-display">SAP Finance</em>.
            </h1>
            <div className="mt-6 max-w-2xl space-y-5 text-muted-foreground">
              <p className="lede">
                Formation, montée en compétence ou transformation S/4HANA : échangeons sur vos enjeux.
              </p>
              <p className="text-[15px] leading-relaxed">
                Notre équipe vous répond sous 24 à 48h avec un premier niveau d'analyse adapté à votre besoin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEED SELECTOR */}
      <section className="section-y">
        <div className="container-wide">
          <div className="max-w-3xl mb-12">
            <div className="eyebrow mb-6">Votre besoin</div>
            <h2 className="display-md">
              Sélectionnez le sujet de votre <em className="not-italic text-champagne font-display">demande</em>.
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
                          <Check className="h-3 w-3" /> Sélectionné
                        </span>
                      )}
                    </div>
                    <div className="font-display text-xl leading-snug">{n.title}</div>
                    <p className="text-[15px] text-muted-foreground mt-3 leading-relaxed flex-1">{n.desc}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                      Choisir <ArrowRight className="h-4 w-4" />
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
            <div className="eyebrow mb-6">Formulaire</div>
            <h2 className="display-md">
              Décrivez-nous votre <em className="not-italic text-champagne font-display">contexte</em>.
            </h2>
            <p className="lede mt-6 text-muted-foreground">
              Plus votre demande est précise, plus notre première réponse pourra être ciblée et utile.
            </p>
            <div className="mt-10 space-y-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <Check className="h-4 w-4 text-champagne mt-1 shrink-0" />
                Réponse personnalisée par un expert SAP Finance
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-4 w-4 text-champagne mt-1 shrink-0" />
                Premier niveau d'analyse de votre besoin
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-4 w-4 text-champagne mt-1 shrink-0" />
                Orientation vers le bon format d'accompagnement
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
          <div className="eyebrow mb-6 justify-center inline-flex">Contact direct</div>
          <h2 className="display-md">
            Ou contactez-nous <em className="not-italic text-champagne font-display">directement</em>.
          </h2>
          <div className="mt-10 inline-flex flex-col items-center gap-5">
            <div className="flex items-center gap-3 text-foreground">
              <Mail className="h-5 w-5 text-champagne" />
              <a href="mailto:contact@cbs-institute.com" className="font-display text-lg hover:text-champagne transition-colors">
                contact@cbs-institute.com
              </a>
            </div>
            <Button asChild size="lg" variant="ink">
              <a href="mailto:contact@cbs-institute.com">Envoyer un email <ArrowRight /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-y bg-ink text-ivory">
        <div className="container-narrow text-center">
          <div className="eyebrow mb-6 text-ivory/60 justify-center inline-flex">Échange rapide</div>
          <h2 className="display-md text-ivory">
            Besoin d'un échange <em className="not-italic text-champagne font-display">rapide</em> ?
          </h2>
          <p className="lede text-ivory/75 mt-6 max-w-2xl mx-auto">
            Nous pouvons organiser un échange rapide pour qualifier votre besoin et vous orienter vers le bon format.
          </p>
          <div className="mt-10 flex justify-center">
            <Button asChild size="lg" variant="champagne">
              <Link to="#formulaire" onClick={(e) => { e.preventDefault(); document.getElementById("formulaire")?.scrollIntoView({ behavior: "smooth" }); }}>
                Parler à un expert <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="mt-5 text-xs uppercase tracking-[0.2em] text-ivory/50">
            Échange confidentiel — réponse sous 24 à 48h
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
