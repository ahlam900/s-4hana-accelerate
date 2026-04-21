import { Link } from "react-router-dom";
import { ArrowRight, Clock, Users, Target, Sparkles, GraduationCap, Briefcase, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import TrainingInquiryForm from "@/components/forms/TrainingInquiryForm";
import { trainings } from "@/data/trainings";

const Formations = () => {
  const featured = trainings.find((t) => t.featured);

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


      {/* INTRO — À qui s'adressent nos formations */}
      <section className="section-y">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5">
              <div className="eyebrow mb-6">À qui s'adressent nos formations</div>
              <h2 className="display-sm leading-[1.15] max-w-md">
                Conçues pour les professionnels qui exigent un haut niveau de <em className="not-italic text-champagne font-display">pertinence</em>.
              </h2>
              <div className="mt-8 h-px w-12 bg-champagne/60" />
              <p className="mt-8 text-[15px] text-muted-foreground leading-relaxed max-w-md">
                Nos formations Finance SAP couvrent les besoins de montée en compétence avancée, sur SAP comme sur les processus Finance qui les sous-tendent.
              </p>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="text-[10px] uppercase tracking-[0.28em] text-champagne mb-8 flex items-center gap-3">
                <span className="h-px w-6 bg-champagne" /> Profils ciblés
              </div>
              <ul className="divide-y divide-border/70 border-y border-border/70">
                {[
                  { num: "01", title: "Consultants SAP", detail: "En activité ou en évolution vers de nouveaux modules" },
                  { num: "02", title: "Professionnels Finance", detail: "Souhaitant renforcer leur expertise SAP S/4HANA" },
                  { num: "03", title: "Chefs de projet & responsables", detail: "Pilotant un domaine Finance ou une transformation" },
                  { num: "04", title: "Profils en reconversion", detail: "Vers le métier de consultant SAP Finance" },
                ].map((a) => (
                  <li key={a.num} className="group flex items-start gap-6 py-5 transition-colors hover:bg-secondary/40 -mx-4 px-4 rounded-sm">
                    <span className="font-display text-[13px] text-champagne tracking-[0.18em] mt-1 shrink-0">{a.num}</span>
                    <div className="min-w-0 flex-1">
                      <div className="font-display text-[17px] text-foreground leading-snug">{a.title}</div>
                      <div className="text-[13.5px] text-muted-foreground mt-1.5 leading-relaxed">{a.detail}</div>
                    </div>
                    <span className="h-px w-6 bg-border mt-3.5 shrink-0 transition-all duration-500 group-hover:w-10 group-hover:bg-champagne/60" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED — SAP FICO 70h */}
      {featured && (
        <section className="pt-20 md:pt-24 pb-16 md:pb-20 bg-ink text-ivory">
          <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="eyebrow mb-6 text-ivory/60">Programme phare</div>
              <h2 className="display-md text-ivory leading-[1.1]">{featured.title}</h2>
              <div className="mt-5 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-champagne/90">
                <span className="h-px w-6 bg-champagne/60" />
                {featured.duration}
              </div>
              <p className="lede mt-7 text-ivory/75">
                Programme professionnel conçu pour préparer de futurs consultants SAP Finance et professionnels Finance à intervenir dans des environnements SAP S/4HANA.
              </p>
              <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ivory/80">
                <span className="inline-flex items-center gap-2"><Users className="h-4 w-4 text-champagne" />{featured.audience.split(',')[0]}</span>
                <span className="inline-flex items-center gap-2"><GraduationCap className="h-4 w-4 text-champagne" />{featured.format}</span>
              </div>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild size="lg" variant="champagne"><Link to="#demande">S'inscrire à la formation <ArrowRight /></Link></Button>
                <Button asChild size="lg" variant="outlineLight"><Link to="#demande">Recevoir le programme</Link></Button>
              </div>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-10 sm:gap-8">
              <div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-champagne mb-5 flex items-center gap-3">
                  <span className="h-px w-5 bg-champagne" /> Au programme
                </div>
                <ul className="space-y-3 text-sm">
                  {featured.objectives.map((o) => (
                    <li key={o} className="flex gap-3 text-ivory/85 leading-relaxed">
                      <span className="text-champagne shrink-0">—</span> {o}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col">
                <div className="text-[10px] uppercase tracking-[0.28em] text-champagne mb-5 flex items-center gap-3">
                  <span className="h-px w-5 bg-champagne" /> Débouchés
                </div>
                <ul className="space-y-3 text-sm">
                  {[
                    { title: "SAP Functional Consultant", meta: "Projets S/4HANA · TMA" },
                    { title: "SAP Finance Consultant", meta: "Cadrage & paramétrage FI/CO" },
                    { title: "ERP Transformation Specialist", meta: "Conduite du changement" },
                  ].map((o) => (
                    <li key={o.title} className="flex gap-3 text-ivory/85">
                      <Briefcase className="h-4 w-4 text-champagne mt-0.5 shrink-0" />
                      <div className="min-w-0">
                        <div className="leading-snug">{o.title}</div>
                        <div className="text-[11.5px] text-ivory/50 mt-0.5">{o.meta}</div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6 border-t border-ivory/10 text-[11px] uppercase tracking-[0.2em] text-ivory/55">
                  Certification incluse · Réseau SAP
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* PARCOURS STRUCTURÉ — 3 niveaux + 1 spécialisation */}
      <section id="catalogue" className="section-y">
        <div className="container-wide">
          {/* En-tête */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-end mb-16">
            <div className="lg:col-span-7">
              <div className="eyebrow mb-6">Parcours de formation</div>
              <h2 className="display-md leading-[1.1] max-w-2xl">
                Un parcours <em className="not-italic text-champagne font-display">structuré</em> pour évoluer en Finance SAP.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[15px] text-muted-foreground leading-relaxed max-w-md lg:ml-auto">
                Trois niveaux de progression cohérents, du fondamental à l'expertise, complétés par une spécialisation sectorielle ciblée.
              </p>
            </div>
          </div>

          {/* 3 niveaux */}
          <div className="relative">
            {/* Ligne de progression */}
            <div className="hidden lg:block absolute top-[42px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />

            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 relative items-stretch">
              {[
                {
                  step: "01",
                  level: "Niveau Débutant",
                  programme: "Processus Finance dans SAP",
                  duration: "10 jours",
                  description: "Structurer une compréhension complète des processus Finance et de leur traduction dans SAP.",
                  outcomes: [
                    "Comprendre Record-to-Report, OTC, P2P",
                    "Visualiser la traduction métier dans SAP",
                    "Identifier les points clés de paramétrage",
                  ],
                  cta: "Découvrir le parcours",
                },
                {
                  step: "02",
                  level: "Niveau Confirmé",
                  programme: "SAP FICO Consultant Program",
                  duration: "10 jours intensifs",
                  description: "Développer une posture opérationnelle de consultant SAP Finance sur des projets S/4HANA.",
                  outcomes: [
                    "Maîtriser Financial Accounting & Controlling",
                    "Naviguer l'architecture S/4HANA Finance",
                    "Acquérir une méthodologie projet SAP",
                  ],
                  cta: "Recevoir le programme",
                  highlight: true,
                },
                {
                  step: "03",
                  level: "Niveau Expert",
                  programme: "SAP S/4HANA Finance avancé",
                  duration: "10 jours",
                  description: "Approfondir l'expertise SAP Finance sur les sujets critiques et structurants des projets S/4HANA.",
                  outcomes: [
                    "Maîtriser l'Universal Journal",
                    "Appréhender Central Finance",
                    "Optimiser la clôture financière",
                  ],
                  cta: "Approfondir le programme",
                },
              ].map((lvl) => (
                <Reveal key={lvl.step} className={`relative h-full ${lvl.highlight ? "lg:-my-3" : ""}`}>
                  <div className={`group relative h-full flex flex-col rounded-sm bg-background ring-1 transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] hover:ring-champagne/50 ${lvl.highlight ? "ring-champagne/40 shadow-[var(--shadow-lift)]" : "ring-border"}`}>
                    {lvl.highlight && (
                      <div className="absolute -top-3 left-8 bg-ink text-champagne text-[10px] uppercase tracking-[0.28em] px-3 py-1 rounded-sm">
                        Programme phare
                      </div>
                    )}
                    {/* Pastille étape */}
                    <div className={`flex items-center gap-4 ${lvl.highlight ? "px-9 pt-11" : "px-8 pt-9"}`}>
                      <div className={`flex items-center justify-center rounded-full font-display tracking-[0.05em] ${lvl.highlight ? "h-[56px] w-[56px] text-[16px] bg-champagne text-ink" : "h-[52px] w-[52px] text-[15px] bg-secondary text-foreground ring-1 ring-border"}`}>
                        {lvl.step}
                      </div>
                      <div className="text-[10.5px] uppercase tracking-[0.28em] text-champagne">{lvl.level}</div>
                    </div>

                    <div className={`flex flex-col flex-1 ${lvl.highlight ? "px-9 pt-7 pb-9" : "px-8 pt-7 pb-8"}`}>
                      <h3 className={`font-display leading-snug text-foreground ${lvl.highlight ? "text-[22px]" : "text-[20px]"}`}>{lvl.programme}</h3>
                      <div className="mt-3 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                        <Clock className="h-3.5 w-3.5 text-champagne" /> {lvl.duration}
                      </div>
                      <p className="mt-5 text-[14px] text-muted-foreground leading-relaxed">{lvl.description}</p>

                      <div className="mt-6 pt-6 border-t border-border/70 flex-1">
                        <div className="text-[10px] uppercase tracking-[0.24em] text-champagne mb-4">Résultats clés</div>
                        <ul className="space-y-2.5 text-[13.5px]">
                          {lvl.outcomes.map((o) => (
                            <li key={o} className="flex gap-2.5 text-foreground/80 leading-snug">
                              <span className="text-champagne shrink-0">—</span>{o}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-7">
                        <Button asChild size="sm" variant={lvl.highlight ? "ink" : "outline"} className="w-full">
                          <Link to="#demande">{lvl.cta} <ArrowRight /></Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Spécialisation — bloc séparé */}
          <div className="mt-20 lg:mt-24">
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-10 bg-champagne/60" />
              <span className="text-[10px] uppercase tracking-[0.32em] text-champagne font-medium">Spécialisation complémentaire</span>
            </div>

            <Reveal>
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-secondary rounded-sm ring-1 ring-border p-8 md:p-12">
                <div className="lg:col-span-5">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-sm bg-champagne/[0.08] ring-1 ring-champagne/30 mb-6">
                    <Sparkles className="h-5 w-5 text-champagne" strokeWidth={1.5} />
                  </div>
                  <div className="text-[10.5px] uppercase tracking-[0.28em] text-muted-foreground mb-3">Module sectoriel</div>
                  <h3 className="display-sm leading-[1.15]">
                    Spécialisation <em className="not-italic text-champagne font-display">SAP RE-FX</em>
                  </h3>
                  <p className="mt-5 text-[14.5px] text-muted-foreground leading-relaxed max-w-md">
                    Module avancé dédié à la gestion immobilière dans SAP. Une expertise sectorielle ciblée pour les profils Finance évoluant dans des environnements à forte composante immobilière.
                  </p>
                </div>

                <div className="lg:col-span-7 lg:border-l lg:border-border/70 lg:pl-12">
                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
                    {[
                      { label: "Format", value: "3 jours intensifs" },
                      { label: "Niveau", value: "Confirmé / Expert" },
                      { label: "Prérequis", value: "Bases SAP Finance" },
                      { label: "Modalité", value: "Distanciel encadré" },
                    ].map((m) => (
                      <div key={m.label} className="border-b border-border/70 pb-3">
                        <div className="text-[10px] uppercase tracking-[0.24em] text-champagne mb-1.5">{m.label}</div>
                        <div className="font-display text-[15px] text-foreground">{m.value}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button asChild size="sm" variant="ink"><Link to="#demande">Recevoir le programme RE-FX <ArrowRight /></Link></Button>
                    <Button asChild size="sm" variant="outline"><Link to="#demande">Échanger avec un expert</Link></Button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
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

export default Formations;
