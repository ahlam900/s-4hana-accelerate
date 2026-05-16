import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock,
  Target,
  Sparkles,
  GraduationCap,
  Briefcase,
  Award,
  Cpu,
  LineChart,
  Building2,
  MapPin,
  Monitor,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import TrainingInquiryForm from "@/components/forms/TrainingInquiryForm";
import Seo from "@/components/Seo";
import { useTx } from "@/i18n/tx";

const Formations = () => {
  const tx = useTx();

  const programs = [
    {
      icon: Award,
      flagship: true,
      to: "/formations/sap-fico-consultant-program",
      sujet: "Programme%20SAP%20FICO%20Consultant%20Program",
      title: "SAP FICO Consultant Program",
      duration: tx("10 jours intensifs · 70h", "10 intensive days · 70h"),
      priceConsultant: tx("6 900 € TTC consultant", "€6,900 incl. tax — consultant"),
      priceCorporate: tx("14 900 € HT entreprise", "€14,900 excl. tax — corporate"),
      points: [
        tx("Financial Accounting & Controlling", "Financial Accounting & Controlling"),
        tx("Architecture SAP S/4HANA Finance", "SAP S/4HANA Finance architecture"),
        tx("Méthodologie projet & mise en mission", "Project methodology & engagement-ready"),
      ],
    },
    {
      icon: Cpu,
      to: "/formations/automatiser-cloture-sap",
      sujet: "Automatiser%20la%20cl%C3%B4ture%20financi%C3%A8re%20dans%20SAP",
      title: tx("Automatiser la clôture SAP", "Automating the SAP close"),
      duration: tx("3 jours · 21h", "3 days · 21h"),
      priceConsultant: tx("1 990 € TTC consultant", "€1,990 incl. tax — consultant"),
      priceCorporate: tx("4 500 € HT entreprise", "€4,500 excl. tax — corporate"),
      points: [
        tx("Closing Cockpit & orchestration", "Closing Cockpit & orchestration"),
        tx("Tâches automatisables (IA + RPA)", "Automatable tasks (AI + RPA)"),
        tx("Contrôles intelligents de clôture", "Intelligent close controls"),
      ],
    },
    {
      icon: Sparkles,
      to: "/formations/relance-client-intelligente-sap",
      sujet: "Syst%C3%A8me%20de%20relance%20client%20intelligent%20(SAP%20%2B%20IA)",
      title: tx("Système de relance intelligent SAP", "Intelligent SAP dunning system"),
      duration: tx("3 jours · 21h", "3 days · 21h"),
      priceConsultant: tx("2 490 € TTC consultant", "€2,490 incl. tax — consultant"),
      priceCorporate: tx("5 500 € HT entreprise", "€5,500 excl. tax — corporate"),
      points: [
        tx("F150 avancé & stratégie de relance", "Advanced F150 & dunning strategy"),
        tx("Scoring client par IA", "AI-driven customer scoring"),
        tx("Automatisation des actions de recouvrement", "Collections automation"),
      ],
    },
    {
      icon: LineChart,
      to: "/formations/pilotage-tresorerie-temps-reel",
      sujet: "Pilotage%20tr%C3%A9sorerie%20temps%20r%C3%A9el%20SAP%20Analytics",
      title: tx("Pilotage trésorerie temps réel", "Real-time treasury steering"),
      duration: tx("4 jours · 28h", "4 days · 28h"),
      priceConsultant: tx("3 490 € TTC consultant", "€3,490 incl. tax — consultant"),
      priceCorporate: tx("6 900 € HT entreprise", "€6,900 excl. tax — corporate"),
      points: [
        tx("Cash visibility & SAP Analytics", "Cash visibility & SAP Analytics"),
        tx("Prévisions de trésorerie augmentées", "Augmented treasury forecasting"),
        tx("Alertes intelligentes & dashboards", "Intelligent alerts & dashboards"),
      ],
    },
    {
      icon: Building2,
      to: "/formations/architecte-transformation-finance-sap",
      sujet: "Architecte%20de%20transformation%20Finance%20SAP",
      title: tx("Architecte transformation Finance SAP", "SAP Finance transformation architect"),
      duration: tx("5 jours · 35h", "5 days · 35h"),
      priceConsultant: tx("4 990 € TTC consultant", "€4,990 incl. tax — consultant"),
      priceCorporate: tx("9 800 € HT entreprise", "€9,800 excl. tax — corporate"),
      points: [
        tx("Architecture Finance SAP de bout en bout", "End-to-end SAP Finance architecture"),
        tx("Design des processus & IA appliquée", "Process design & applied AI"),
        tx("Gouvernance et conduite de transformation", "Governance & transformation leadership"),
      ],
    },
    {
      icon: Briefcase,
      to: "/formations/specialisation-sap-re-fx",
      sujet: "Sp%C3%A9cialisation%20SAP%20RE-FX",
      title: tx("Spécialisation SAP RE-FX", "SAP RE-FX Specialization"),
      duration: tx("10 jours intensifs · 70h", "10 intensive days · 70h"),
      priceConsultant: tx("5 900 € TTC consultant", "€5,900 incl. tax — consultant"),
      priceCorporate: tx("12 500 € HT entreprise", "€12,500 excl. tax — corporate"),
      points: [
        tx("Module Real Estate avancé", "Advanced Real Estate module"),
        tx("Processus immobiliers & patrimoniaux", "Real estate & asset processes"),
        tx("Cas concrets sur environnements réels", "Hands-on cases on real environments"),
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
                {tx("FORMATIONS SAP FINANCE & IA", "SAP FINANCE & AI TRAINING")}
              </span>
            </div>
            <h1 className="display-xl text-foreground max-w-[22ch] leading-[1.05]">
              {tx("Formations SAP Finance & IA, conçues pour ", "SAP Finance & AI training, built to ")}
              <em className="not-italic text-champagne font-display">{tx("intervenir en mission", "deliver on engagements")}</em>.
            </h1>
            <p className="lede mt-7 max-w-xl leading-relaxed">
              {tx(
                "Développez des compétences opérationnelles en SAP S/4HANA, automation, analytics et IA appliquée aux processus financiers.",
                "Build operational skills in SAP S/4HANA, automation, analytics and AI applied to financial processes."
              )}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="ink">
                <Link to="#programmes">
                  {tx("Découvrir les formations", "Discover the programs")} <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="?sujet=%C3%89change%20avec%20un%20expert#demande">
                  {tx("Parler à un expert", "Speak with an expert")}
                </Link>
              </Button>
            </div>
            <div className="mt-12 pt-6 border-t border-border/70 flex flex-nowrap items-center gap-x-6 md:gap-x-8 text-[10.5px] md:text-[11px] uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">
              <span><span className="text-champagne font-semibold">6</span> {tx("programmes premium", "premium programs")}</span>
              <span className="h-3 w-px bg-border shrink-0" />
              <span>{tx("SAP S/4HANA · IA · Analytics", "SAP S/4HANA · AI · Analytics")}</span>
              <span className="h-3 w-px bg-border shrink-0" />
              <span>{tx("Experts SAP en mission", "Active SAP experts")}</span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative bg-background rounded-sm shadow-[var(--shadow-lift)] ring-1 ring-border overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-champagne mb-6">
                  <span className="h-px w-5 bg-champagne" /> {tx("Catalogue", "Catalog")}
                </div>
                <ul className="divide-y divide-border/70">
                  {[
                    { icon: Award, title: "SAP FICO Consultant Program", meta: tx("Programme phare · 10 jours", "Flagship · 10 days") },
                    { icon: Sparkles, title: tx("4 programmes IA & automation", "4 AI & automation programs"), meta: tx("Clôture · Relance · Trésorerie · Architecte", "Close · Dunning · Treasury · Architect") },
                    { icon: Briefcase, title: tx("Spécialisation SAP RE-FX", "SAP RE-FX Specialization"), meta: tx("10 jours intensifs", "10 intensive days") },
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
                <Link to="#programmes" className="text-[12px] font-medium text-champagne inline-flex items-center gap-1.5 hover:gap-2 transition-all">
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
                {tx("Pensées pour ceux qui veulent ", "Built for those who want to ")}
                <em className="not-italic text-champagne font-display">{tx("intervenir", "deliver")}</em>
                {tx(", pas seulement comprendre", ", not just understand")}.
              </h2>
              <div className="mt-8 h-px w-12 bg-champagne/60" />
              <p className="mt-8 text-[15px] text-muted-foreground leading-relaxed max-w-md">
                {tx(
                  "Nos formations couvrent les besoins de montée en compétence sur les processus Finance, SAP S/4HANA et leurs usages augmentés par l'IA — pour acquérir une posture directement utile en mission.",
                  "Our programs cover upskilling on finance processes, SAP S/4HANA and AI-augmented uses — building a stance that is directly useful on engagements."
                )}
              </p>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="text-[10px] uppercase tracking-[0.28em] text-champagne mb-8 flex items-center gap-3">
                <span className="h-px w-6 bg-champagne" /> {tx("Profils ciblés", "Target audiences")}
              </div>
              <ul className="divide-y divide-border/70 border-y border-border/70">
                {[
                  { num: "01", title: tx("Consultants SAP Finance", "SAP Finance consultants"), detail: tx("En activité ou en évolution vers de nouveaux domaines Finance.", "Active or evolving into new finance domains.") },
                  { num: "02", title: tx("Professionnels Finance souhaitant maîtriser SAP", "Finance professionals seeking SAP mastery"), detail: tx("Pour renforcer la traduction des processus dans SAP.", "To strengthen the translation of processes into SAP.") },
                  { num: "03", title: tx("Chefs de projet Finance / SI", "Finance / IT project managers"), detail: tx("Pilotant un domaine Finance ou une transformation SAP.", "Leading a finance domain or a SAP transformation.") },
                  { num: "04", title: tx("Profils en reconversion", "Career-changers"), detail: tx("Construisant une trajectoire vers les métiers Finance SAP.", "Building a trajectory toward SAP Finance roles.") },
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

      {/* PROGRAMS GRID */}
      <section id="programmes" className="section-y bg-secondary scroll-mt-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-end mb-14">
            <div className="lg:col-span-7">
              <div className="eyebrow mb-6">{tx("Nos programmes", "Our programs")}</div>
              <h2 className="display-md leading-[1.1] max-w-2xl">
                {tx("Nos programmes ", "Our ")}
                <em className="not-italic text-champagne font-display">SAP Finance & IA</em>
                {tx("", " programs")}.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[15px] text-muted-foreground leading-relaxed max-w-md lg:ml-auto">
                {tx(
                  "Un parcours phare, quatre programmes intensifs IA & automation, et une spécialisation sectorielle — pour intervenir avec impact sur les transformations Finance SAP.",
                  "A flagship program, four intensive AI & automation programs, and a sector specialization — to deliver impact on SAP Finance transformations."
                )}
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {programs.map((p, i) => (
              <Reveal key={p.title} delay={i * 50}>
                <div className={`group relative h-full flex flex-col bg-background ring-1 rounded-sm transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] ${p.flagship ? "ring-champagne/50 hover:ring-champagne" : "ring-border hover:ring-champagne/50"}`}>
                  {p.flagship && (
                    <div className="absolute -top-3 left-8 bg-champagne text-ink text-[10px] uppercase tracking-[0.28em] px-3 py-1 rounded-sm font-medium">
                      {tx("Programme phare", "Flagship")}
                    </div>
                  )}
                  <div className="p-8 md:p-9 flex-1 flex flex-col">
                    <div className="flex items-center justify-center h-11 w-11 rounded-sm bg-champagne/[0.08] ring-1 ring-champagne/30 mb-6">
                      <p.icon className="h-5 w-5 text-champagne" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-[19px] md:text-[20px] leading-snug text-foreground min-h-[3em]">
                      {p.title}
                    </h3>
                    <div className="mt-3 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      <Clock className="h-3.5 w-3.5 text-champagne" /> {p.duration}
                    </div>

                    <div className="mt-6 pt-6 border-t border-border/70">
                      <div className="text-[10px] uppercase tracking-[0.24em] text-champagne mb-3">{tx("Tarifs", "Pricing")}</div>
                      <div className="space-y-1.5">
                        <div className="font-display text-[15px] text-foreground">{p.priceConsultant}</div>
                        <div className="text-[13px] text-muted-foreground">{p.priceCorporate}</div>
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

                    <div className="mt-7">
                      <Button asChild size="sm" variant={p.flagship ? "champagne" : "ink"} className="w-full">
                        <Link to={p.to}>
                          {tx("Découvrir la formation", "Discover the program")} <ArrowRight />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" variant="ink">
              <Link to="?sujet=T%C3%A9l%C3%A9chargement%20catalogue%20formations#demande">
                {tx("Recevoir le catalogue complet", "Receive the full catalog")} <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="?sujet=%C3%89change%20avec%20un%20expert#demande">
                {tx("Parler à un expert", "Speak with an expert")}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* WHY CBS */}
      <section className="section-y bg-ink text-ivory">
        <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-6">
            <div className="eyebrow mb-6 text-ivory/60">{tx("Pourquoi CBS", "Why CBS")}</div>
            <h2 className="display-md text-ivory leading-[1.1] max-w-xl">
              {tx("Une approche terrain orientée ", "A field-driven approach focused on ")}
              <em className="not-italic text-champagne font-display">{tx("transformation", "transformation")}</em>.
            </h2>
            <p className="lede mt-7 text-ivory/75 max-w-xl">
              {tx(
                "CBS Finance Institute forme des consultants capables d'intervenir sur des projets SAP Finance réels — avec une approche centrée sur les processus, l'automatisation, l'analytics et l'IA appliquée.",
                "CBS Finance Institute trains consultants able to deliver on real SAP Finance projects — centered on processes, automation, analytics and applied AI."
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
              { icon: Cpu, label: tx("Automatisation", "Automation") },
              { icon: LineChart, label: "Analytics" },
              { icon: Sparkles, label: tx("IA appliquée", "Applied AI") },
              { icon: Target, label: tx("Finance SAP", "SAP Finance") },
              { icon: GraduationCap, label: "SAP S/4HANA" },
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

      {/* FORMATS DISPONIBLES */}
      <section className="section-y">
        <div className="container-wide">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-6">{tx("Formats disponibles", "Available formats")}</div>
            <h2 className="display-md leading-[1.1]">
              {tx("Choisissez le format ", "Choose the format ")}
              <em className="not-italic text-champagne font-display">{tx("le plus adapté", "that fits best")}</em>.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-7">
            {[
              {
                icon: MapPin,
                title: tx("Présentiel Paris", "On-site in Paris"),
                detail: tx("Sessions intensives en petit comité, animées par des experts SAP Finance en mission.", "Intensive small-group sessions led by active SAP Finance experts."),
                cta: { label: tx("Réserver une session", "Book a session"), to: "?sujet=Formation%20pr%C3%A9sentiel%20Paris#demande" },
              },
              {
                icon: Monitor,
                title: tx("Distanciel encadré", "Guided remote learning"),
                detail: tx("Live sessions, suivi individuel et cas pratiques sur environnements SAP réels.", "Live sessions, individual coaching and hands-on cases on real SAP environments."),
                cta: { label: tx("Démarrer à distance", "Start remote"), to: "?sujet=Formation%20distanciel%20encadr%C3%A9#demande" },
              },
              {
                icon: Users,
                title: tx("Séminaires entreprise", "Corporate seminars"),
                detail: tx("Programmes intra-entreprise sur-mesure pour vos équipes Finance et SI.", "Tailored on-site programs for your Finance and IT teams."),
                cta: { label: tx("Voir les offres entreprise", "See corporate offers"), to: "/offres-entreprise" },
              },
            ].map((f) => (
              <div key={f.title} className="group flex flex-col bg-background ring-1 ring-border rounded-sm p-8 md:p-9 transition-all duration-500 hover:ring-champagne/50 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]">
                <div className="flex items-center justify-center h-11 w-11 rounded-sm bg-champagne/[0.08] ring-1 ring-champagne/30 mb-6">
                  <f.icon className="h-5 w-5 text-champagne" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-[20px] leading-snug text-foreground">{f.title}</h3>
                <p className="mt-4 text-[14px] text-muted-foreground leading-relaxed flex-1">{f.detail}</p>
                <div className="mt-7 pt-6 border-t border-border/70">
                  <Link to={f.cta.to} className="text-[13px] font-medium text-champagne inline-flex items-center gap-1.5 hover:gap-2 transition-all">
                    {f.cta.label} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section id="demande" className="section-y bg-secondary scroll-mt-24">
        <div className="container-narrow grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-6">{tx("Demande de formation", "Training inquiry")}</div>
            <h2 className="display-md leading-[1.1]">
              {tx("Recevez le programme détaillé et un avis d'", "Receive the detailed program and the perspective of an ")}
              <em className="not-italic text-champagne font-display">{tx("expert SAP Finance", "SAP Finance expert")}</em>.
            </h2>
            <p className="lede mt-6">
              {tx(
                "Indiquez votre profil et votre objectif. Nous vous adressons le programme complet ainsi qu'une recommandation de parcours adaptée à votre besoin.",
                "Share your profile and your goal. We'll send you the full program along with a pathway recommendation tailored to your need."
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
