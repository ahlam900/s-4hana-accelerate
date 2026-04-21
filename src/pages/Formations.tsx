import { Link } from "react-router-dom";
import { ArrowRight, Clock, Users, Target, Sparkles, GraduationCap, Briefcase, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
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
      {/* HERO — aligné avec la direction homepage */}
      <section className="relative pt-24 md:pt-28 pb-16 md:pb-20 overflow-hidden bg-secondary border-b border-border">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />
        <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-20 items-center relative">
          <div className="lg:col-span-7 relative z-10">
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="h-px w-8 bg-champagne" />
              <span className="text-[10px] uppercase tracking-[0.32em] text-champagne font-medium">FORMATIONS FINANCE SAP</span>
            </div>
            <h1 className="display-xl text-foreground max-w-[18ch] leading-[1.05]">
              Formations <em className="not-italic text-champagne font-display">Finance SAP</em> à impact concret.
            </h1>
            <p className="lede mt-7 max-w-lg leading-relaxed">
              Programmes premium pour développer une expertise opérationnelle, immédiatement utile sur des projets et missions Finance SAP.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="ink">
                <Link to="#demande">Recevoir le programme <ArrowRight /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="#catalogue">Découvrir les programmes</Link>
              </Button>
            </div>
            <div className="mt-12 pt-6 border-t border-border/70 flex flex-nowrap items-center gap-x-6 md:gap-x-8 text-[10.5px] md:text-[11px] uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">
              <span><span className="text-champagne font-semibold">100 %</span> Finance SAP</span>
              <span className="h-3 w-px bg-border shrink-0" />
              <span>Programmes certifiants</span>
              <span className="h-3 w-px bg-border shrink-0" />
              <span>Experts SAP actifs</span>
            </div>
          </div>

          {/* Bloc résumé premium — équilibre la composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-background rounded-sm shadow-[var(--shadow-lift)] ring-1 ring-border overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-champagne mb-6">
                  <span className="h-px w-5 bg-champagne" /> Programmes phares
                </div>
                <ul className="divide-y divide-border/70">
                  {[
                    { icon: Award, title: "SAP FICO Consultant Program", meta: "70 h · Cursus certifiant" },
                    { icon: GraduationCap, title: "Parcours Finance SAP", meta: "Formats intensifs · Niveau avancé" },
                    { icon: Briefcase, title: "Formations pour experts SAP", meta: "Sessions ciblées · Cas projet" },
                  ].map((item) => (
                    <li key={item.title} className="py-4 first:pt-0 last:pb-0 flex items-start gap-4">
                      <div className="flex items-center justify-center h-9 w-9 rounded-sm bg-champagne/[0.07] ring-1 ring-champagne/25 shrink-0">
                        <item.icon className="h-[18px] w-[18px] text-champagne" strokeWidth={1.4} />
                      </div>
                      <div className="min-w-0">
                        <div className="font-display text-[16px] leading-snug text-foreground">{item.title}</div>
                        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-1.5">{item.meta}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-border bg-secondary/60 px-8 md:px-10 py-4 flex items-center justify-between">
                <span className="text-[10.5px] uppercase tracking-[0.2em] text-muted-foreground">Catalogue complet</span>
                <Link to="#catalogue" className="text-[12px] font-medium text-champagne inline-flex items-center gap-1.5 hover:gap-2 transition-all">
                  Explorer <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
            {/* Petite carte flottante — écho au hero homepage */}
            <div className="hidden md:flex items-center gap-3 absolute -bottom-5 -left-4 lg:-left-6 bg-ink/90 backdrop-blur-md text-ivory pl-3 pr-5 py-2.5 rounded-sm shadow-[var(--shadow-lift)] ring-1 ring-champagne/15">
              <span className="h-8 w-px bg-champagne/40" />
              <div>
                <div className="text-[9px] uppercase tracking-[0.28em] text-champagne/90 mb-0.5">Sur-mesure</div>
                <div className="font-display text-[12.5px] leading-tight">Sessions intra-entreprise</div>
              </div>
            </div>
          </div>
        </div>
      </section>


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
