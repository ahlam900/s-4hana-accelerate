import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock,
  Users,
  Target,
  Sparkles,
  GraduationCap,
  Briefcase,
  Award,
  Cpu,
  LineChart,
  Wallet,
  Building2,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import TrainingInquiryForm from "@/components/forms/TrainingInquiryForm";
import Seo from "@/components/Seo";
import { useTx } from "@/i18n/tx";

const Formations = () => {
  const tx = useTx();

  const newPrograms = [
    {
      icon: Cpu,
      sujet: "Automatiser la cl%C3%B4ture financi%C3%A8re dans SAP",
      title: tx("Automatiser la clôture financière dans SAP", "Automating the financial close in SAP"),
      duration: tx("3 jours · 21h", "3 days · 21h"),
      priceConsultant: tx("1 990 € TTC consultant", "€1,990 incl. tax — consultant"),
      priceCorporate: tx("4 500 € HT entreprise", "€4,500 excl. tax — corporate"),
      points: [
        tx("Closing Cockpit", "Closing Cockpit"),
        tx("Tâches automatisables", "Automatable tasks"),
        tx("Contrôles intelligents", "Intelligent controls"),
      ],
    },
    {
      icon: Sparkles,
      sujet: "Syst%C3%A8me de relance client intelligent (SAP %2B IA)",
      title: tx("Créer un système de relance client intelligent (SAP + IA)", "Build an intelligent dunning system (SAP + AI)"),
      duration: tx("3 jours · 21h", "3 days · 21h"),
      priceConsultant: tx("2 490 € TTC consultant", "€2,490 incl. tax — consultant"),
      priceCorporate: tx("5 500 € HT entreprise", "€5,500 excl. tax — corporate"),
      points: [
        tx("F150 avancé", "Advanced F150"),
        tx("Scoring clients", "Customer scoring"),
        tx("Automatisation des relances", "Dunning automation"),
      ],
    },
    {
      icon: LineChart,
      sujet: "Pilotage tr%C3%A9sorerie temps r%C3%A9el SAP Analytics",
      title: tx("Piloter la trésorerie en temps réel avec SAP Analytics", "Real-time treasury steering with SAP Analytics"),
      duration: tx("4 jours · 28h", "4 days · 28h"),
      priceConsultant: tx("3 490 € TTC consultant", "€3,490 incl. tax — consultant"),
      priceCorporate: tx("6 900 € HT entreprise", "€6,900 excl. tax — corporate"),
      points: [
        tx("Cash visibility", "Cash visibility"),
        tx("Prévisions de trésorerie", "Treasury forecasting"),
        tx("Alertes intelligentes", "Intelligent alerts"),
      ],
    },
    {
      icon: Building2,
      sujet: "Architecte de transformation Finance SAP",
      title: tx("Devenir architecte de transformation Finance SAP", "Become a SAP Finance transformation architect"),
      duration: tx("5 jours · 35h", "5 days · 35h"),
      priceConsultant: tx("4 990 € TTC consultant", "€4,990 incl. tax — consultant"),
      priceCorporate: tx("9 800 € HT entreprise", "€9,800 excl. tax — corporate"),
      points: [
        tx("Architecture Finance SAP", "SAP Finance architecture"),
        tx("Design des processus", "Process design"),
        tx("Gouvernance et transformation", "Governance and transformation"),
      ],
    },
  ];

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
              <span className="text-[10px] uppercase tracking-[0.32em] text-champagne font-medium">
                {tx("FORMATIONS FINANCE SAP", "SAP FINANCE TRAINING")}
              </span>
            </div>
            <h1 className="display-xl text-foreground max-w-[20ch] leading-[1.05]">
              {tx("Devenez consultant SAP Finance ", "Become a next-generation ")}
              <em className="not-italic text-champagne font-display">{tx("nouvelle génération", "SAP Finance consultant")}</em>.
            </h1>
            <p className="lede mt-7 max-w-xl leading-relaxed">
              {tx(
                "Des formations conçues pour les consultants Finance souhaitant maîtriser SAP S/4HANA, l'automatisation, l'analytics et les nouveaux usages de l'IA appliqués à la finance.",
                "Programs designed for finance consultants who want to master SAP S/4HANA, automation, analytics and emerging AI use cases applied to finance."
              )}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="ink">
                <Link to="?sujet=%C3%89change%20avec%20un%20expert#demande">
                  {tx("Parler à un expert", "Speak with an expert")} <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="?sujet=T%C3%A9l%C3%A9chargement%20catalogue%20formations#demande">
                  {tx("Télécharger le catalogue", "Download the catalog")}
                </Link>
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

          <div className="lg:col-span-5 relative">
            <div className="relative bg-background rounded-sm shadow-[var(--shadow-lift)] ring-1 ring-border overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-champagne mb-6">
                  <span className="h-px w-5 bg-champagne" /> {tx("Programmes phares", "Flagship programs")}
                </div>
                <ul className="divide-y divide-border/70">
                  {[
                    { icon: Award, title: "SAP FICO Consultant Program", meta: tx("10 jours intensifs · Cursus certifiant", "10 intensive days · Certifying curriculum") },
                    { icon: Sparkles, title: tx("SAP Finance & Intelligent Transformation", "SAP Finance & Intelligent Transformation"), meta: tx("Automatisation · Analytics · IA", "Automation · Analytics · AI") },
                    { icon: Briefcase, title: tx("Spécialisation SAP RE-FX", "SAP RE-FX Specialization"), meta: tx("10 jours intensifs · Confirmé / Expert", "10 intensive days · Advanced / Expert") },
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
                <Link to="#programme-fico" className="text-[12px] font-medium text-champagne inline-flex items-center gap-1.5 hover:gap-2 transition-all">
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

      {/* AUDIENCE */}
      <section className="section-y">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5">
              <div className="eyebrow mb-6">{tx("À qui s'adressent nos formations", "Who our programs are built for")}</div>
              <h2 className="display-sm leading-[1.15] max-w-md">
                {tx("Pensées pour ceux qui veulent intervenir, pas seulement ", "Built for those who want to deliver, not just ")}
                <em className="not-italic text-champagne font-display">{tx("comprendre", "understand")}</em>.
              </h2>
              <div className="mt-8 h-px w-12 bg-champagne/60" />
              <p className="mt-8 text-[15px] text-muted-foreground leading-relaxed max-w-md">
                {tx(
                  "Nos formations couvrent les besoins de montée en compétence sur les processus Finance et leur usage dans SAP, pour acquérir des repères solides, une lecture projet claire et une posture directement utile en mission.",
                  "Our programs cover upskilling needs on finance processes and their use in SAP — building solid references, a clear project perspective and a stance that is directly useful on engagements."
                )}
              </p>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="text-[10px] uppercase tracking-[0.28em] text-champagne mb-8 flex items-center gap-3">
                <span className="h-px w-6 bg-champagne" /> {tx("Profils ciblés", "Target audiences")}
              </div>
              <ul className="divide-y divide-border/70 border-y border-border/70">
                {[
                  { num: "01", title: tx("Consultants SAP", "SAP Consultants"), detail: tx("En activité ou en évolution vers de nouveaux domaines Finance.", "Active or evolving into new finance domains.") },
                  { num: "02", title: tx("Professionnels Finance", "Finance Professionals"), detail: tx("Souhaitant renforcer leur maîtrise des processus et de leur traduction dans SAP.", "Seeking to strengthen mastery of processes and their translation into SAP.") },
                  { num: "03", title: tx("Chefs de projet & responsables", "Project Managers & Leads"), detail: tx("Pilotant un domaine Finance ou une transformation impliquant SAP.", "Leading a finance domain or a SAP-related transformation.") },
                  { num: "04", title: tx("Profils en reconversion", "Career-Changers"), detail: tx("Souhaitant construire une trajectoire vers les métiers Finance SAP.", "Building a trajectory toward SAP Finance roles.") },
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

      {/* MAIN PROGRAM — SAP FICO Consultant Program (single premium card) */}
      <section id="programme-fico" className="section-y bg-ink text-ivory scroll-mt-24">
        <div className="container-wide">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-6 text-ivory/60">{tx("Parcours principal", "Main program")}</div>
            <h2 className="display-md text-ivory leading-[1.1]">
              {tx("Un parcours unique, ", "A single program, ")}
              <em className="not-italic text-champagne font-display">{tx("entièrement premium", "entirely premium")}</em>.
            </h2>
          </div>

          <Reveal>
            <div className="relative mx-auto max-w-5xl bg-ivory/[0.03] ring-1 ring-ivory/15 rounded-sm overflow-hidden shadow-[var(--shadow-lift)]">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/60 to-transparent" />
              <div className="absolute -top-3 left-10 bg-champagne text-ink text-[10px] uppercase tracking-[0.28em] px-3 py-1 rounded-sm font-medium">
                {tx("Programme phare", "Flagship program")}
              </div>

              <div className="grid lg:grid-cols-12 gap-0">
                <div className="lg:col-span-7 p-10 md:p-14">
                  <h3 className="font-display text-[28px] md:text-[32px] leading-[1.15] text-ivory">
                    SAP FICO Consultant Program
                  </h3>
                  <div className="mt-5 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-champagne/90">
                    <Clock className="h-3.5 w-3.5" />
                    {tx("10 jours intensifs", "10 intensive days")}
                  </div>
                  <p className="mt-7 text-[15.5px] text-ivory/75 leading-relaxed max-w-xl">
                    {tx(
                      "Développer une posture opérationnelle sur les projets SAP Finance et intervenir avec assurance dans des contextes de transformation S/4HANA.",
                      "Build an operational stance on SAP Finance projects and engage with confidence in S/4HANA transformation contexts."
                    )}
                  </p>

                  <div className="mt-9 flex flex-wrap gap-3">
                    <Button asChild size="lg" variant="champagne">
                      <Link to="?sujet=Programme%20SAP%20FICO%20Consultant%20Program#demande">
                        {tx("Recevoir le programme", "Receive the program")} <ArrowRight />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outlineLight">
                      <Link to="?sujet=%C3%89change%20avec%20un%20expert#demande">
                        {tx("Parler à un expert", "Speak with an expert")}
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-ivory/[0.04] border-t lg:border-t-0 lg:border-l border-ivory/10 p-10 md:p-14">
                  <div className="text-[10px] uppercase tracking-[0.28em] text-champagne mb-6 flex items-center gap-3">
                    <span className="h-px w-5 bg-champagne" /> {tx("Résultats clés", "Key outcomes")}
                  </div>
                  <ul className="space-y-4">
                    {[
                      tx("Maîtriser Financial Accounting & Controlling", "Master Financial Accounting & Controlling"),
                      tx("Comprendre l'architecture Finance SAP", "Understand SAP Finance architecture"),
                      tx("Acquérir une méthodologie projet", "Acquire a project methodology"),
                      tx("Savoir intervenir sur des projets SAP réels", "Be able to deliver on real SAP projects"),
                    ].map((o) => (
                      <li key={o} className="flex gap-3 text-[14px] text-ivory/85 leading-snug">
                        <CheckCircle2 className="h-4 w-4 text-champagne mt-0.5 shrink-0" strokeWidth={1.6} />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-9 pt-6 border-t border-ivory/10 text-[11px] uppercase tracking-[0.2em] text-ivory/55">
                    {tx("Certification incluse · Réseau SAP", "Certification included · SAP network")}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SAP FINANCE & INTELLIGENT TRANSFORMATION */}
      <section className="section-y">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-end mb-16">
            <div className="lg:col-span-7">
              <div className="eyebrow mb-6">{tx("Programmes intensifs", "Intensive programs")}</div>
              <h2 className="display-md leading-[1.1] max-w-2xl">
                SAP Finance &{" "}
                <em className="not-italic text-champagne font-display">Intelligent Transformation</em>.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[15px] text-muted-foreground leading-relaxed max-w-md lg:ml-auto">
                {tx(
                  "Des programmes intensifs conçus pour automatiser, piloter et transformer les processus financiers avec SAP, l'analytics et l'intelligence artificielle.",
                  "Intensive programs designed to automate, steer and transform financial processes with SAP, analytics and artificial intelligence."
                )}
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {newPrograms.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <div className="group relative h-full flex flex-col bg-background ring-1 ring-border rounded-sm transition-all duration-500 ease-out hover:-translate-y-0.5 hover:ring-champagne/50 hover:shadow-[var(--shadow-lift)]">
                  <div className="p-9 md:p-10 flex-1 flex flex-col">
                    <div className="flex items-center justify-center h-11 w-11 rounded-sm bg-champagne/[0.08] ring-1 ring-champagne/30 mb-7">
                      <p.icon className="h-5 w-5 text-champagne" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-[20px] md:text-[22px] leading-snug text-foreground">
                      {p.title}
                    </h3>
                    <div className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      <Clock className="h-3.5 w-3.5 text-champagne" /> {p.duration}
                    </div>

                    <div className="mt-6 pt-6 border-t border-border/70">
                      <div className="text-[10px] uppercase tracking-[0.24em] text-champagne mb-3">{tx("Tarifs", "Pricing")}</div>
                      <div className="space-y-1.5">
                        <div className="font-display text-[15.5px] text-foreground">{p.priceConsultant}</div>
                        <div className="text-[13.5px] text-muted-foreground">{p.priceCorporate}</div>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-border/70 flex-1">
                      <div className="text-[10px] uppercase tracking-[0.24em] text-champagne mb-3">{tx("Points clés", "Key topics")}</div>
                      <ul className="space-y-2.5 text-[13.5px]">
                        {p.points.map((pt) => (
                          <li key={pt} className="flex gap-2.5 text-foreground/80 leading-snug">
                            <span className="text-champagne shrink-0">—</span>{pt}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8">
                      <Button asChild size="sm" variant="ink" className="w-full">
                        <Link to={`?sujet=${p.sujet}#demande`}>
                          {tx("Découvrir la formation", "Discover the program")} <ArrowRight />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALISATION RE-FX */}
      <section id="specialisation-refx" className="section-y bg-secondary scroll-mt-24">
        <div className="container-wide">
          <div className="flex items-center gap-4 mb-10">
            <span className="h-px w-10 bg-champagne/60" />
            <span className="text-[10px] uppercase tracking-[0.32em] text-champagne font-medium">
              {tx("SPÉCIALISATION SECTORIELLE", "SECTOR SPECIALIZATION")}
            </span>
          </div>

          <Reveal>
            <div className="group relative grid lg:grid-cols-12 gap-0 items-stretch bg-background rounded-sm ring-1 ring-border transition-all duration-500 ease-out hover:ring-champagne/40 hover:shadow-[var(--shadow-lift)] overflow-hidden">
              <div className="lg:col-span-5 p-10 md:p-14 flex flex-col">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-sm bg-champagne/[0.08] ring-1 ring-champagne/30 mb-7">
                  <Sparkles className="h-5 w-5 text-champagne" strokeWidth={1.5} />
                </div>
                <h3 className="display-sm leading-[1.15]">
                  {tx("Spécialisation ", "")}
                  <em className="not-italic text-champagne font-display">SAP RE-FX</em>
                  {tx("", " Specialization")}
                </h3>
                <p className="mt-6 text-[15px] text-muted-foreground leading-relaxed max-w-md">
                  {tx(
                    "Une spécialisation avancée dédiée aux environnements SAP à forte composante immobilière et patrimoniale.",
                    "An advanced specialization dedicated to SAP environments with a strong real estate and asset component."
                  )}
                </p>
                <div className="mt-7 pt-6 border-t border-border/70 flex items-start gap-3">
                  <Target className="h-4 w-4 text-champagne mt-0.5 shrink-0" strokeWidth={1.5} />
                  <p className="text-[13px] text-foreground/80 leading-relaxed">
                    {tx(
                      "Intervention sur des cas concrets liés aux processus immobiliers dans SAP.",
                      "Hands-on work on real cases tied to real estate processes in SAP."
                    )}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 bg-secondary/70 p-10 md:p-14 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-border">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.28em] text-champagne mb-7 flex items-center gap-3">
                    <span className="h-px w-5 bg-champagne" />
                    {tx("Caractéristiques du module", "Module characteristics")}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-x-12 gap-y-7">
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
                  <Button asChild size="lg" variant="ink">
                    <Link to="?sujet=Sp%C3%A9cialisation%20SAP%20RE-FX#demande">
                      {tx("Se spécialiser en RE-FX", "Specialize in RE-FX")} <ArrowRight />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="?sujet=%C3%89change%20avec%20un%20expert#demande">
                      {tx("Échanger avec un expert", "Speak with an expert")}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PREMIUM CLOSING BLOCK */}
      <section className="section-y bg-ink text-ivory">
        <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-6">
            <div className="eyebrow mb-6 text-ivory/60">{tx("Notre approche", "Our approach")}</div>
            <h2 className="display-md text-ivory leading-[1.1] max-w-xl">
              {tx("Une approche terrain orientée ", "A field-driven approach focused on ")}
              <em className="not-italic text-champagne font-display">{tx("transformation", "transformation")}</em>.
            </h2>
            <p className="lede mt-7 text-ivory/75 max-w-xl">
              {tx(
                "CBS Finance Institute forme des consultants capables d'intervenir sur des projets SAP Finance réels, avec une approche centrée sur les processus, l'automatisation et la performance financière.",
                "CBS Finance Institute trains consultants capable of delivering on real SAP Finance projects, with an approach centered on processes, automation and financial performance."
              )}
            </p>
            <div className="mt-9">
              <Button asChild size="lg" variant="champagne">
                <Link to="?sujet=%C3%89change%20avec%20un%20expert#demande">
                  {tx("Parler à un expert", "Speak with an expert")} <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-5">
            {[
              { icon: Briefcase, label: tx("Cas réels", "Real cases") },
              { icon: Target, label: tx("Approche projet", "Project approach") },
              { icon: Award, label: tx("Expertise transformation", "Transformation expertise") },
              { icon: GraduationCap, label: "SAP S/4HANA" },
              { icon: LineChart, label: "Analytics" },
              { icon: Cpu, label: tx("IA appliquée à la finance", "AI applied to finance") },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 p-6 rounded-sm bg-ivory/[0.03] ring-1 ring-ivory/10 transition-all hover:ring-champagne/40">
                <div className="flex items-center justify-center h-10 w-10 rounded-sm bg-champagne/[0.08] ring-1 ring-champagne/30 shrink-0">
                  <item.icon className="h-[18px] w-[18px] text-champagne" strokeWidth={1.5} />
                </div>
                <div className="font-display text-[15px] text-ivory leading-snug pt-1.5">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section id="demande" className="section-y">
        <div className="container-narrow grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-6">{tx("Demande de formation", "Training inquiry")}</div>
            <h2 className="display-md leading-[1.1]">
              {tx("Recevez le programme détaillé et un avis d'", "Receive the detailed program and the perspective of an ")}
              <em className="not-italic text-champagne font-display">{tx("expert SAP Finance", "SAP Finance expert")}</em>.
            </h2>
            <p className="lede mt-6">
              {tx(
                "Indiquez votre profil et votre objectif. Nous vous adressons le programme complet ainsi qu'une recommandation de parcours adaptée à votre niveau et à votre besoin.",
                "Share your profile and your goal. We'll send you the full program along with a pathway recommendation tailored to your level and need."
              )}
            </p>
            <ul className="mt-10 space-y-4 border-t border-border/70 pt-8">
              {[
                tx("Échange avec un expert Finance SAP", "Exchange with an SAP Finance expert"),
                tx("Recommandation personnalisée orientée usage", "Personalized, usage-oriented recommendation"),
                tx("Accès au programme détaillé et aux modalités", "Access to the detailed program and modalities"),
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
