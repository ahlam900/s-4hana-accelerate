import { Link } from "react-router-dom";
import { ArrowRight, Clock, Users, Target, Sparkles, GraduationCap, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import TrainingInquiryForm from "@/components/forms/TrainingInquiryForm";
import { trainings } from "@/data/trainings";

const Formations = () => {
  const featured = trainings.find((t) => t.featured);
  const others = trainings.filter((t) => !t.featured);
  const experts = others.filter((t) => t.category === "Formations pour experts SAP");
  const parcours = others.filter((t) => t.category === "Parcours Finance SAP");

  return (
    <>
      <PageHero
        eyebrow="Formations Finance SAP"
        title="Des formations Finance SAP pensées pour générer un impact concret."
        subtitle="Programmes premium pour développer une expertise opérationnelle, immédiatement utile sur des projets et missions Finance SAP."
        primaryCta={{ label: "Recevoir le programme", to: "#demande" }}
        secondaryCta={{ label: "Voir les formations", to: "#catalogue" }}
      />

      {/* INTRO */}
      <section className="section-y">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="eyebrow mb-6">À qui s'adressent nos formations</div>
              <h2 className="display-md">Conçues pour les professionnels qui exigent un haut niveau de pertinence.</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Nos formations Finance SAP couvrent les besoins de montée en compétence avancée, sur SAP comme sur les processus Finance qui les sous-tendent.</p>
              <ul className="space-y-2 text-sm">
                {[
                  "Consultants SAP en activité ou en évolution",
                  "Professionnels Finance souhaitant renforcer leur expertise SAP",
                  "Chefs de projet et responsables de domaine Finance",
                  "Profils en reconversion vers le métier de consultant SAP Finance",
                ].map((a) => (
                  <li key={a} className="flex items-start gap-3 border-l-2 border-champagne pl-4 py-1">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED — SAP FICO 70h */}
      {featured && (
        <section className="section-y bg-ink text-ivory">
          <div className="container-wide grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <div className="eyebrow mb-6 text-ivory/60">Programme phare</div>
              <h2 className="display-md text-ivory">{featured.title}</h2>
              <p className="lede mt-6 text-ivory/75">
                Programme professionnel conçu pour préparer de futurs consultants SAP Finance et professionnels Finance à intervenir dans des environnements SAP S/4HANA.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ivory/80">
                <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-champagne" />{featured.duration}</span>
                <span className="inline-flex items-center gap-2"><Users className="h-4 w-4 text-champagne" />{featured.audience.split(',')[0]}</span>
                <span className="inline-flex items-center gap-2"><GraduationCap className="h-4 w-4 text-champagne" />{featured.format}</span>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button asChild size="lg" variant="champagne"><Link to="#demande">S'inscrire à la formation <ArrowRight /></Link></Button>
                <Button asChild size="lg" variant="outlineLight"><Link to="#demande">Recevoir le programme</Link></Button>
              </div>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-champagne mb-4">Au programme</div>
                <ul className="space-y-3 text-sm">
                  {featured.objectives.map((o) => (
                    <li key={o} className="flex gap-3 text-ivory/85">
                      <span className="text-champagne">—</span> {o}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-champagne mb-4">Débouchés</div>
                <ul className="space-y-3 text-sm">
                  {["SAP Functional Consultant", "SAP Finance Consultant", "ERP Transformation Specialist"].map((o) => (
                    <li key={o} className="flex gap-3 text-ivory/85">
                      <Briefcase className="h-4 w-4 text-champagne mt-0.5 shrink-0" /> {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CATÉGORIES + LISTING */}
      <section id="catalogue" className="section-y">
        <div className="container-wide">
          <Category title="Formations pour experts SAP" trainings={experts} />
          <Category title="Parcours Finance SAP" trainings={parcours} />
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="section-y bg-secondary">
        <div className="container-wide">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-6">Pourquoi nos formations</div>
            <h2 className="display-md">Une exigence pédagogique qui se ressent à chaque session.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: "Spécialisation métier + système", text: "Une approche qui relie le processus Finance à sa traduction SAP." },
              { icon: Briefcase, title: "Pédagogie orientée terrain", text: "Cas concrets, exercices guidés, mise en situation projet." },
              { icon: Sparkles, title: "Vision transformation", text: "Une lecture stratégique des projets SAP, au-delà de la technique." },
              { icon: GraduationCap, title: "Contenu structuré et premium", text: "Des supports clairs, des parcours cohérents, un accompagnement haut de gamme." },
            ].map((b, i) => (
              <Reveal key={b.title} delay={i * 60} className="card-premium p-7">
                <b.icon className="h-6 w-6 text-champagne" strokeWidth={1.5} />
                <div className="font-display text-lg mt-5">{b.title}</div>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{b.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section id="demande" className="section-y">
        <div className="container-narrow grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-6">Demande de formation</div>
            <h2 className="display-md">Recevez le programme et échangeons sur votre projet.</h2>
            <p className="lede mt-6">
              Indiquez la formation qui vous intéresse, votre niveau et votre objectif. Notre équipe vous adresse le programme détaillé et les modalités d'inscription.
            </p>
          </div>
          <div className="lg:col-span-7">
            <TrainingInquiryForm />
          </div>
        </div>
      </section>
    </>
  );
};

const Category = ({ title, trainings }: { title: string; trainings: typeof import("@/data/trainings").trainings }) => (
  <div className="mb-16 last:mb-0">
    <div className="flex items-end justify-between gap-6 mb-8 pb-6 border-b border-border">
      <h3 className="display-sm">{title}</h3>
      <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground hidden md:block">{trainings.length} formations</span>
    </div>
    <div className="grid md:grid-cols-2 gap-6">
      {trainings.map((t, i) => (
        <Reveal key={t.id} delay={i * 60} className="card-premium p-7 flex flex-col">
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground mb-4">
            <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-champagne" />{t.duration}</span>
            <span className="inline-flex items-center gap-1.5"><GraduationCap className="h-3.5 w-3.5 text-champagne" />{t.format}</span>
          </div>
          <h4 className="font-display text-xl leading-snug">{t.title}</h4>
          <p className="text-sm text-muted-foreground mt-3">{t.audience}</p>
          <ul className="mt-5 space-y-2 text-sm flex-1">
            {t.highlights.slice(0, 3).map((h) => (
              <li key={h} className="flex gap-2"><span className="text-champagne">—</span>{h}</li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            <Button asChild size="sm" variant="ink"><Link to="#demande">Demander à s'inscrire</Link></Button>
            <Button asChild size="sm" variant="outline"><Link to="#demande">Recevoir le programme</Link></Button>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
);

export default Formations;
