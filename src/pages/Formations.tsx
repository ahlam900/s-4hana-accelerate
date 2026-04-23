import { Link } from "react-router-dom";
import { ArrowRight, Clock, Users, Target, Sparkles, GraduationCap, Briefcase, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import TrainingInquiryForm from "@/components/forms/TrainingInquiryForm";
import { trainings } from "@/data/trainings";
import Seo from "@/components/Seo";
import { useTx } from "@/i18n/tx";

const Formations = () => {
  const featured = trainings.find((t) => t.featured);
  const tx = useTx();

  return (
    <>
      <Seo titleKey="seo.trainings_title" descriptionKey="seo.trainings_desc" />
      {/* HERO */}
      <section className="relative pt-24 md:pt-28 pb-16 md:pb-20 overflow-hidden bg-secondary border-b border-border">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />
        <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-20 items-center relative">
          <div className="lg:col-span-7 relative z-10">
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="h-px w-8 bg-champagne" />
              <span className="text-[10px] uppercase tracking-[0.32em] text-champagne font-medium">{tx("FORMATIONS FINANCE SAP", "SAP FINANCE TRAINING")}</span>
            </div>
            <h1 className="display-xl text-foreground max-w-[18ch] leading-[1.05]">
              {tx("Devenez un professionnel ", "Become an operational ")}<em className="not-italic text-champagne font-display">{tx("Finance SAP", "SAP Finance")}</em>{tx(" opérationnel.", " professional.")}
            </h1>
            <p className="lede mt-7 max-w-lg leading-relaxed">
              {tx(
                "Des parcours structurés pour consultants, professionnels Finance et profils en reconversion qui veulent maîtriser FICO, S/4HANA et les processus de bout en bout — et le prouver dès la première mission.",
                "Structured programs for consultants, finance professionals and career-changers seeking to master FICO, S/4HANA and end-to-end processes — and prove it from the first engagement."
              )}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="ink">
                <Link to="#demande">{tx("Recevoir le programme détaillé", "Receive the detailed program")} <ArrowRight /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="#catalogue">{tx("Voir les parcours", "Explore the programs")}</Link>
              </Button>
            </div>
            <div className="mt-12 pt-6 border-t border-border/70 flex flex-nowrap items-center gap-x-6 md:gap-x-8 text-[10.5px] md:text-[11px] uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">
              <span><span className="text-champagne font-semibold">100 %</span> {tx("Finance SAP", "SAP Finance")}</span>
              <span className="h-3 w-px bg-border shrink-0" />
              <span>{tx("Programmes certifiants", "Certifying programs")}</span>
              <span className="h-3 w-px bg-border shrink-0" />
              <span>{tx("Experts SAP actifs", "Active SAP experts")}</span>
            </div>
          </div>

          {/* Premium summary block */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-background rounded-sm shadow-[var(--shadow-lift)] ring-1 ring-border overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-champagne mb-6">
                  <span className="h-px w-5 bg-champagne" /> {tx("Programmes phares", "Flagship programs")}
                </div>
                <ul className="divide-y divide-border/70">
                  {[
                    { icon: Award, title: "SAP FICO Consultant Program", meta: tx("70 h · Cursus certifiant", "70 h · Certifying curriculum") },
                    { icon: GraduationCap, title: tx("Parcours Finance SAP", "SAP Finance pathways"), meta: tx("Formats intensifs · Niveau avancé", "Intensive formats · Advanced level") },
                    { icon: Briefcase, title: tx("Formations pour experts SAP", "Programs for SAP experts"), meta: tx("Sessions ciblées · Cas projet", "Targeted sessions · Real cases") },
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
                <span className="text-[10.5px] uppercase tracking-[0.2em] text-muted-foreground">{tx("Catalogue complet", "Full catalog")}</span>
                <Link to="#catalogue" className="text-[12px] font-medium text-champagne inline-flex items-center gap-1.5 hover:gap-2 transition-all">
                  {tx("Explorer", "Explore")} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-3 absolute -bottom-5 -left-4 lg:-left-6 bg-ink/90 backdrop-blur-md text-ivory pl-3 pr-5 py-2.5 rounded-sm shadow-[var(--shadow-lift)] ring-1 ring-champagne/15">
              <span className="h-8 w-px bg-champagne/40" />
              <div>
                <div className="text-[9px] uppercase tracking-[0.28em] text-champagne/90 mb-0.5">{tx("Sur-mesure", "Tailored")}</div>
                <div className="font-display text-[12.5px] leading-tight">{tx("Sessions intra-entreprise", "On-site corporate sessions")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section-y">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5">
              <div className="eyebrow mb-6">{tx("À qui s'adressent nos formations", "Who our programs are built for")}</div>
              <h2 className="display-sm leading-[1.15] max-w-md">
                {tx("Pensées pour ceux qui veulent intervenir, pas seulement ", "Built for those who want to deliver, not just ")}<em className="not-italic text-champagne font-display">{tx("comprendre", "understand")}</em>.
              </h2>
              <div className="mt-8 h-px w-12 bg-champagne/60" />
              <p className="mt-8 text-[15px] text-muted-foreground leading-relaxed max-w-md">
                {tx(
                  "Nos formations couvrent les besoins de montée en compétence sur SAP comme sur les processus Finance — pour acquérir une lecture précise et une posture immédiatement utile en mission.",
                  "Our programs address upskilling needs across SAP and finance processes alike — building the analytical depth and stance that prove useful from day one of your engagement."
                )}
              </p>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="text-[10px] uppercase tracking-[0.28em] text-champagne mb-8 flex items-center gap-3">
                <span className="h-px w-6 bg-champagne" /> {tx("Profils ciblés", "Target audiences")}
              </div>
              <ul className="divide-y divide-border/70 border-y border-border/70">
                {[
                  { num: "01", title: tx("Consultants SAP", "SAP Consultants"), detail: tx("En activité ou en évolution vers de nouveaux modules", "Active consultants or those expanding into new modules") },
                  { num: "02", title: tx("Professionnels Finance", "Finance Professionals"), detail: tx("Souhaitant renforcer leur expertise SAP S/4HANA", "Looking to deepen their SAP S/4HANA expertise") },
                  { num: "03", title: tx("Chefs de projet & responsables", "Project Managers & Leads"), detail: tx("Pilotant un domaine Finance ou une transformation", "Driving a finance domain or a transformation program") },
                  { num: "04", title: tx("Profils en reconversion", "Career-Changers"), detail: tx("Vers le métier de consultant SAP Finance", "Transitioning into SAP Finance consulting") },
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

      {/* FEATURED — SAP FICO */}
      {featured && (
        <section className="pt-20 md:pt-24 pb-16 md:pb-20 bg-ink text-ivory">
          <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="eyebrow mb-6 text-ivory/60">{tx("Programme phare", "Flagship program")}</div>
              <h2 className="display-md text-ivory leading-[1.1]">{featured.title}</h2>
              <div className="mt-5 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-champagne/90">
                <span className="h-px w-6 bg-champagne/60" />
                {featured.duration}
              </div>
              <p className="lede mt-7 text-ivory/75">
                {tx(
                  "Le parcours intensif de référence pour préparer consultants et professionnels Finance à intervenir avec autorité sur des projets S/4HANA — fondamentaux FICO, architecture cible et posture projet.",
                  "The reference intensive program preparing consultants and finance professionals to operate with authority on S/4HANA projects — FICO fundamentals, target architecture and project stance."
                )}
              </p>
              <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ivory/80">
                <span className="inline-flex items-center gap-2"><Users className="h-4 w-4 text-champagne" />{featured.audience.split(',')[0]}</span>
                <span className="inline-flex items-center gap-2"><GraduationCap className="h-4 w-4 text-champagne" />{featured.format}</span>
              </div>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild size="lg" variant="champagne"><Link to="#demande">{tx("S'inscrire à la formation", "Enroll in the program")} <ArrowRight /></Link></Button>
                <Button asChild size="lg" variant="outlineLight"><Link to="#demande">{tx("Recevoir le programme", "Receive the program")}</Link></Button>
              </div>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-10 sm:gap-8">
              <div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-champagne mb-5 flex items-center gap-3">
                  <span className="h-px w-5 bg-champagne" /> {tx("Au programme", "Inside the program")}
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
                  <span className="h-px w-5 bg-champagne" /> {tx("Débouchés", "Career outcomes")}
                </div>
                <ul className="space-y-3 text-sm">
                  {[
                    { title: "SAP Functional Consultant", meta: tx("Projets S/4HANA · TMA", "S/4HANA projects · AMS") },
                    { title: "SAP Finance Consultant", meta: tx("Cadrage & paramétrage FI/CO", "FI/CO scoping & configuration") },
                    { title: "ERP Transformation Specialist", meta: tx("Conduite du changement", "Change management") },
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
                  {tx("Certification incluse · Réseau SAP", "Certification included · SAP network")}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* PARCOURS */}
      <section id="catalogue" className="section-y">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-end mb-16">
            <div className="lg:col-span-7">
              <div className="eyebrow mb-6">{tx("Parcours de formation", "Training pathways")}</div>
              <h2 className="display-md leading-[1.1] max-w-2xl">
                {tx("Trois niveaux, une ", "Three levels, one ")}<em className="not-italic text-champagne font-display">{tx("trajectoire claire", "clear trajectory")}</em>{tx(" en Finance SAP.", " in SAP Finance.")}
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[15px] text-muted-foreground leading-relaxed max-w-md lg:ml-auto">
                {tx(
                  "Du socle métier à l'expertise S/4HANA, complété par une spécialisation sectorielle pour les profils qui veulent un positionnement différenciant.",
                  "From the business foundation to S/4HANA expertise, complemented by a sector specialization for professionals seeking a differentiating positioning."
                )}
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-[42px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />

            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 relative items-stretch">
              {[
                {
                  step: "01",
                  level: tx("Niveau Débutant", "Beginner Level"),
                  programme: tx("Processus Finance dans SAP", "Finance Processes in SAP"),
                  duration: tx("10 jours", "10 days"),
                  description: tx(
                    "Structurer une compréhension complète des processus Finance et de leur traduction dans SAP.",
                    "Build a complete understanding of finance processes and how they translate into SAP."
                  ),
                  outcomes: [
                    tx("Comprendre Record-to-Report, OTC, P2P", "Understand Record-to-Report, OTC, P2P"),
                    tx("Visualiser la traduction métier dans SAP", "Visualize the business-to-SAP translation"),
                    tx("Identifier les points clés de paramétrage", "Identify the critical configuration points"),
                  ],
                  cta: tx("Découvrir le parcours", "Discover the program"),
                },
                {
                  step: "02",
                  level: tx("Niveau Confirmé", "Advanced Level"),
                  programme: "SAP FICO Consultant Program",
                  duration: tx("10 jours intensifs", "10 intensive days"),
                  description: tx(
                    "Développer une posture opérationnelle de consultant SAP Finance sur des projets S/4HANA.",
                    "Develop the operational stance of an SAP Finance consultant on S/4HANA programs."
                  ),
                  outcomes: [
                    tx("Maîtriser Financial Accounting & Controlling", "Master Financial Accounting & Controlling"),
                    tx("Naviguer l'architecture S/4HANA Finance", "Navigate the S/4HANA Finance architecture"),
                    tx("Acquérir une méthodologie projet SAP", "Acquire a structured SAP project method"),
                  ],
                  cta: tx("Recevoir le programme", "Receive the program"),
                  highlight: true,
                },
                {
                  step: "03",
                  level: tx("Niveau Expert", "Expert Level"),
                  programme: tx("SAP S/4HANA Finance avancé", "Advanced SAP S/4HANA Finance"),
                  duration: tx("10 jours", "10 days"),
                  description: tx(
                    "Approfondir l'expertise SAP Finance sur les sujets critiques et structurants des projets S/4HANA.",
                    "Deepen SAP Finance expertise on the critical, structuring topics of S/4HANA programs."
                  ),
                  outcomes: [
                    tx("Maîtriser l'Universal Journal", "Master the Universal Journal"),
                    tx("Appréhender Central Finance", "Grasp Central Finance"),
                    tx("Optimiser la clôture financière", "Optimize the financial close"),
                  ],
                  cta: tx("Approfondir le programme", "Go deeper into the program"),
                },
              ].map((lvl) => (
                <Reveal key={lvl.step} className={`relative h-full ${lvl.highlight ? "lg:-my-3" : ""}`}>
                  <div className={`group relative h-full flex flex-col rounded-sm bg-background ring-1 transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] hover:ring-champagne/50 ${lvl.highlight ? "ring-champagne/40 shadow-[var(--shadow-lift)]" : "ring-border"}`}>
                    {lvl.highlight && (
                      <div className="absolute -top-3 left-8 bg-ink text-champagne text-[10px] uppercase tracking-[0.28em] px-3 py-1 rounded-sm">
                        {tx("Programme phare", "Flagship program")}
                      </div>
                    )}
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
                        <div className="text-[10px] uppercase tracking-[0.24em] text-champagne mb-4">{tx("Résultats clés", "Key outcomes")}</div>
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

          {/* Spécialisation RE-FX */}
          <div className="mt-20 lg:mt-24">
            <div className="flex items-center gap-4 mb-10">
              <span className="h-px w-10 bg-champagne/60" />
              <span className="text-[10px] uppercase tracking-[0.32em] text-champagne font-medium">{tx("Spécialisation sectorielle", "Sector specialization")}</span>
            </div>

            <Reveal>
              <div className="group relative grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch bg-secondary/60 rounded-sm ring-1 ring-border transition-all duration-500 ease-out hover:ring-champagne/40 hover:shadow-[var(--shadow-lift)] overflow-hidden">
                <div className="lg:col-span-5 p-10 md:p-12 flex flex-col">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-sm bg-champagne/[0.08] ring-1 ring-champagne/30 mb-6">
                    <Sparkles className="h-5 w-5 text-champagne" strokeWidth={1.5} />
                  </div>
                  <h3 className="display-sm leading-[1.15]">
                    {tx("Spécialisation ", "")}<em className="not-italic text-champagne font-display">SAP RE-FX</em>{tx("", " specialization")}
                  </h3>
                  <p className="mt-5 text-[14.5px] text-muted-foreground leading-relaxed max-w-md">
                    {tx(
                      "Une spécialisation dédiée aux environnements SAP à forte composante immobilière. Ce module permet de développer une expertise ciblée et recherchée sur les projets SAP RE-FX.",
                      "A specialization dedicated to SAP environments with a strong real estate component. This module builds a targeted, sought-after expertise on SAP RE-FX programs."
                    )}
                  </p>
                  <div className="mt-6 pt-6 border-t border-border/70 flex items-start gap-3">
                    <Target className="h-4 w-4 text-champagne mt-0.5 shrink-0" strokeWidth={1.5} />
                    <p className="text-[13px] text-foreground/80 leading-relaxed">
                      {tx(
                        "Intervention sur des cas concrets liés aux processus immobiliers dans SAP.",
                        "Hands-on work on real cases tied to real estate processes in SAP."
                      )}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-7 bg-secondary p-10 md:p-12 lg:pl-14 flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.28em] text-champagne mb-6 flex items-center gap-3">
                      <span className="h-px w-5 bg-champagne" />
                      {tx("Caractéristiques du module", "Module characteristics")}
                    </div>
                    <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
                      <div className="border-b border-border/70 pb-4">
                        <div className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground mb-1.5">{tx("Format", "Format")}</div>
                        <div className="font-display text-[16px] text-foreground">{tx("10 jours intensifs", "10 intensive days")}</div>
                      </div>
                      <div className="border-b border-border/70 pb-4">
                        <div className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground mb-1.5">{tx("Niveau", "Level")}</div>
                        <div className="font-display text-[16px] text-foreground">{tx("Confirmé / Expert", "Advanced / Expert")}</div>
                      </div>
                      <div className="border-b border-border/70 pb-4">
                        <div className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground mb-1.5">{tx("Prérequis", "Prerequisites")}</div>
                        <div className="font-display text-[16px] text-foreground">{tx("Bases solides en SAP Finance", "Solid SAP Finance foundation")}</div>
                      </div>
                      <div className="border-b border-border/70 pb-4">
                        <div className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground mb-1.5">{tx("Modalité", "Format")}</div>
                        <div className="font-display text-[16px] text-foreground">{tx("Distanciel encadré + sessions live", "Guided remote learning + live sessions")}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 pt-6 border-t border-border/70 flex flex-wrap gap-3">
                    <Button asChild size="sm" variant="ink" className="transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]">
                      <Link to="#demande">{tx("Se spécialiser en RE-FX", "Specialize in RE-FX")} <ArrowRight className="h-4 w-4" /></Link>
                    </Button>
                    <Button asChild size="sm" variant="outline" className="transition-all duration-300 hover:-translate-y-0.5">
                      <Link to="#demande">{tx("Échanger avec un expert", "Speak with an expert")}</Link>
                    </Button>
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
          <div className="max-w-3xl mb-16">
            <div className="eyebrow mb-6">{tx("Pourquoi nos formations", "Why our programs")}</div>
            <h2 className="display-md">{tx("Une pédagogie pensée pour le terrain projet.", "A pedagogy designed for project reality.")}</h2>
            <p className="mt-6 text-[15px] text-muted-foreground leading-relaxed max-w-2xl">
              {tx(
                "Nos contenus sont issus de missions SAP Finance réelles. Vous repartez avec des repères, des méthodes et un vocabulaire directement utilisables dès le prochain atelier.",
                "Our content is drawn from real SAP Finance engagements. You leave with the references, methods and vocabulary directly usable from your next workshop."
              )}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: tx("Spécialisation métier + système", "Business + system specialization"), text: tx("Une lecture complète des processus Finance et de leur traduction dans SAP, directement exploitable en projet.", "A complete reading of finance processes and their translation into SAP, directly usable in project.") },
              { icon: Briefcase, title: tx("Pédagogie ancrée projet", "Project-anchored pedagogy"), text: tx("Des cas réels, des mises en situation et une approche inspirée des environnements SAP.", "Real cases, simulations and an approach inspired by live SAP environments.") },
              { icon: Sparkles, title: tx("Vision des enjeux SAP Finance", "SAP Finance strategic perspective"), text: tx("Une compréhension des enjeux de transformation, au-delà de la simple utilisation de l'outil.", "A grasp of transformation stakes that goes beyond simple tool usage.") },
              { icon: GraduationCap, title: tx("Exigence pédagogique élevée", "High pedagogical standards"), text: tx("Des parcours structurés, des contenus exigeants et un accompagnement pour profils ambitieux.", "Structured paths, demanding content and dedicated guidance for ambitious profiles.") },
            ].map((b, i) => (
              <Reveal key={b.title} delay={i * 60}>
                <div className="card-premium p-8 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] group h-full">
                  <b.icon className="h-7 w-7 text-champagne" strokeWidth={1.4} />
                  <div className="font-display text-lg mt-6">{b.title}</div>
                  <p className="text-[14px] text-muted-foreground mt-3.5 leading-relaxed">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-16 pt-8 border-t border-border/60 text-center">
            <p className="text-[13.5px] text-muted-foreground font-medium">
              {tx("Une formation pensée pour être utilisée, pas seulement comprise.", "Training designed to be applied — not just understood.")}
            </p>
          </div>
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section id="demande" className="section-y">
        <div className="container-narrow grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-6">{tx("Demande de formation", "Training inquiry")}</div>
            <h2 className="display-md leading-[1.1]">
              {tx("Recevez le programme détaillé et un avis d'", "Receive the detailed program and the perspective of an ")}<em className="not-italic text-champagne font-display">{tx("expert SAP Finance", "SAP Finance expert")}</em>.
            </h2>
            <p className="lede mt-6">
              {tx(
                "Indiquez votre profil et votre objectif. Nous vous adressons le programme complet et une recommandation de parcours adaptée à votre point de départ.",
                "Share your profile and your goal. We'll send you the full program and a path recommendation tailored to your starting point."
              )}
            </p>
            <ul className="mt-10 space-y-4 border-t border-border/70 pt-8">
              {[
                tx("Échange avec un expert SAP Finance", "Exchange with an SAP Finance expert"),
                tx("Recommandation personnalisée et orientée projet", "Personalized, project-oriented recommendation"),
                tx("Accès au programme détaillé et aux modalités d'accompagnement", "Access to the detailed program and support modalities"),
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-[14.5px] text-foreground/85">
                  <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-champagne shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
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
