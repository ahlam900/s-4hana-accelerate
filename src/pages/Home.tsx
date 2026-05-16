import { ArrowRight, Compass, Building2, ShieldCheck, Sparkles, Layers, Users, Briefcase, BookOpen, FileText, Mail, Award, Cpu, BarChart3, Network, Building, MapPin, Monitor, Users2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import { LLink } from "@/i18n/LLink";
import Seo from "@/components/Seo";
import KeyMetrics from "@/components/KeyMetrics";
import heroVisual from "@/assets/hero-visual.jpg";
import heroLocationsVisual from "@/assets/hero-locations-visual.jpg";
import productsVisual from "@/assets/products-visual.jpg";
import { useTx } from "@/i18n/tx";

const Home = () => {
  const { t } = useTranslation();
  const tx = useTx();
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % 2), 5000);
    return () => clearInterval(id);
  }, []);



  return (
    <>
      <Seo
        titleKey="seo.home_title"
        descriptionKey="seo.home_desc"
        keywords="SAP Finance, SAP FI/CO, SAP S/4HANA Finance, formation SAP Finance, SAP Key User, transformation digitale SAP, conseil SAP Finance, CBS Finance Institute, SAP FICO, RE-FX, Group Reporting"
        ogType="website"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://www.cbs-institute.com/#service",
          "name": "CBS Finance Institute — SAP Finance Training & Transformation",
          "url": "https://www.cbs-institute.com",
          "image": "https://www.cbs-institute.com/og-image.png",
          "areaServed": ["FR", "EU", "Worldwide"],
          "provider": { "@id": "https://www.cbs-institute.com/#organization" },
          "serviceType": [
            "SAP Finance Training",
            "SAP S/4HANA Finance Consulting",
            "SAP FI/CO Consulting",
            "SAP Key User Enablement",
            "Finance Digital Transformation"
          ]
        }}
      />
      {/* HERO */}
      <section className="relative pt-24 md:pt-28 pb-16 md:pb-20 overflow-hidden bg-secondary">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />
        <div className="container-wide relative">
          {/* Slide 1 */}
          <div
            className={`grid lg:grid-cols-12 gap-12 lg:gap-20 items-center transition-opacity duration-700 ${slide === 0 ? "opacity-100" : "opacity-0 pointer-events-none absolute inset-0"}`}
          >
            <div className="lg:col-span-7 relative z-10">
              <div className="inline-flex items-center gap-3 mb-8">
                <span className="h-px w-8 bg-champagne" />
                <span className="text-[10px] uppercase tracking-[0.32em] text-champagne font-medium">{tx("SAP FINANCE & IA", "SAP FINANCE & AI")}</span>
              </div>
              <h1 className="display-xl text-foreground">
                {tx("Accélérez votre carrière avec ", "Accelerate your career with ")}
                <em className="not-italic text-champagne font-display">{tx("SAP Finance & l'Intelligence Artificielle", "SAP Finance & Artificial Intelligence")}</em>.
              </h1>
              <p className="lede mt-7 max-w-xl leading-relaxed">
                {tx(
                  "Des formations intensives pour maîtriser SAP S/4HANA, automatiser vos processus et exploiter l'IA dans vos missions.",
                  "Intensive programs to master SAP S/4HANA, automate your processes and leverage AI in your missions.",
                )}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild size="lg" variant="ink">
                  <LLink to="/formations">{tx("Découvrir les formations", "Discover the programs")} <ArrowRight /></LLink>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <LLink to="/contact">{tx("Parler à un expert", "Talk to an expert")}</LLink>
                </Button>
              </div>
              <div className="mt-12 pt-6 border-t border-border/70 flex flex-nowrap items-center justify-between max-w-2xl divide-x divide-border/40">
                {[
                  tx("Automation", "Automation"),
                  tx("Analytics avancés", "Advanced analytics"),
                  tx("IA appliquée", "Applied AI"),
                  tx("Finance S/4HANA", "Finance S/4HANA"),
                ].map((label) => (
                  <span key={label} className="flex-1 whitespace-nowrap text-center px-2 sm:px-3 text-[9px] sm:text-[10px] leading-[1.4] uppercase tracking-[0.15em] font-medium text-muted-foreground">
                    {label}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-[var(--shadow-lift)] ring-1 ring-ink/5">
                <img src={heroVisual} alt="CBS Finance Institute" className="absolute inset-0 h-full w-full object-cover" width={1080} height={1350} fetchPriority="high" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-ink/15 pointer-events-none" />
              </div>
              <div className="hidden md:block absolute bottom-6 -left-4 lg:-left-6 bg-ink/95 backdrop-blur-sm text-ivory px-3.5 py-3 rounded-sm max-w-[200px] shadow-[var(--shadow-lift)] ring-1 ring-champagne/20">
                <div className="flex items-center gap-2 text-[8.5px] uppercase tracking-[0.26em] text-champagne mb-1.5">
                  <span className="h-px w-3 bg-champagne" /> {tx("PROGRAMME PHARE", "FLAGSHIP")}
                </div>
                <div className="font-display text-[13.5px] leading-snug">SAP FICO Consultant Program</div>
                <div className="text-[9.5px] uppercase tracking-[0.18em] text-ivory/55 mt-1.5 pt-1.5 border-t border-ivory/10">{tx("Présentiel Paris · Distanciel", "On-site Paris · Remote")}</div>
                <div className="text-[8.5px] uppercase tracking-wide text-ivory/40 mt-1">{tx("Prochaine session : Juin 2025", "Next session: June 2025")}</div>
              </div>
            </div>
          </div>

          {/* Slide 2 — Entreprise */}
          <div
            className={`grid lg:grid-cols-12 gap-12 lg:gap-20 items-center transition-opacity duration-700 ${slide === 1 ? "opacity-100" : "opacity-0 pointer-events-none absolute inset-0"}`}
          >
            <div className="lg:col-span-7 relative z-10">
              <div className="inline-flex items-center gap-3 mb-8">
                <span className="h-px w-8 bg-champagne" />
                <span className="text-[10px] uppercase tracking-[0.32em] text-champagne font-medium">{tx("OFFRES ENTREPRISE", "CORPORATE OFFERS")}</span>
              </div>
              <h1 className="display-xl text-foreground">
                {tx("Accélérez la performance de vos ", "Accelerate the performance of your ")}
                <em className="not-italic text-champagne font-display">{tx("équipes Finance & SAP", "Finance & SAP teams")}</em>.
              </h1>
              <p className="lede mt-7 max-w-xl leading-relaxed">
                {tx(
                  "Formations Key Users, séminaires dédiés et accompagnement sur mesure. Disponible à Paris et à Dubaï.",
                  "Key User training, dedicated seminars and tailored support. Available in Paris and Dubai.",
                )}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild size="lg" variant="ink">
                  <LLink to="/offres-entreprise">{tx("Découvrir les offres entreprise", "Discover corporate offers")} <ArrowRight /></LLink>
                </Button>
              </div>
              <div className="mt-12 pt-6 border-t border-border/70 flex flex-nowrap items-center justify-between max-w-2xl divide-x divide-border/40">
                {[
                  tx("Key Users SAP", "SAP Key Users"),
                  tx("Séminaires entreprise", "Corporate seminars"),
                  tx("Sessions personnalisées", "Tailored sessions"),
                  tx("Paris & Dubaï", "Paris & Dubai"),
                ].map((label) => (
                  <span key={label} className="flex-1 whitespace-nowrap text-center px-2 sm:px-3 text-[9px] sm:text-[10px] leading-[1.4] uppercase tracking-[0.15em] font-medium text-muted-foreground">
                    {label}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-[var(--shadow-lift)] ring-1 ring-ink/5">
                <img src={heroLocationsVisual} alt={tx("Offres entreprise — Paris & Dubaï", "Corporate offers — Paris & Dubai")} className="absolute inset-0 h-full w-full object-cover" width={1080} height={1350} loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="hidden md:block absolute bottom-8 -left-5 lg:-left-8 bg-ink/95 backdrop-blur-sm text-ivory p-4 rounded-sm max-w-[220px] shadow-[var(--shadow-lift)] ring-1 ring-champagne/20">
                <div className="flex items-center gap-2 text-[9.5px] uppercase tracking-[0.28em] text-champagne mb-2">
                  <span className="h-px w-4 bg-champagne" /> {tx("PROGRAMME KEY USER", "KEY USER PROGRAM")}
                </div>
                <div className="font-display text-[15px] leading-snug">{tx("Key User SAP", "Key User SAP")}<br/><span className="text-champagne">Paris · Dubaï</span></div>
                <div className="text-[10.5px] uppercase tracking-[0.18em] text-ivory/55 mt-2 pt-2 border-t border-ivory/10">{tx("Présentiel & séminaire entreprise", "On-site & corporate seminar")}</div>
              </div>
            </div>
          </div>

          {/* Slide indicators */}
          <div className="mt-10 flex items-center justify-center gap-3">
            {[0, 1].map((i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-1 rounded-sm transition-all duration-500 ${slide === i ? "w-10 bg-champagne" : "w-5 bg-ink/20 hover:bg-ink/40"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* VALEUR CLÉ */}
      <section className="section-y border-y border-border">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            <div className="lg:col-span-6">
              <div className="eyebrow mb-6">{tx("NOTRE MISSION", "OUR MISSION")}</div>
              <h2 className="display-md">
                {tx("Former, transformer et faire ", "Train, transform and drive the success of ")}
                <em className="not-italic text-champagne font-display">{tx("réussir la Finance SAP", "SAP Finance")}</em>.
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="lede leading-relaxed">
                {tx(
                  "Nous accompagnons les professionnels Finance dans la maîtrise de SAP S/4HANA, l'automatisation, l'analytics et l'intelligence artificielle — pour intervenir en mission et générer de la valeur dès le premier jour.",
                  "We support Finance professionals in mastering SAP S/4HANA, automation, analytics and AI — to operate in mission and create value from day one.",
                )}
              </p>
              <Button asChild size="lg" variant="ink" className="mt-8">
                <LLink to="/formations">{tx("Voir les formations", "View the programs")} <ArrowRight /></LLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* À QUI S'ADRESSENT NOS PROGRAMMES */}
      <section className="section-y bg-ink text-ivory">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <div className="eyebrow mb-6 text-ivory/60">{tx("PUBLIC CIBLE", "TARGET AUDIENCE")}</div>
            <h2 className="display-md text-ivory">
              {tx("Pensées pour ceux qui doivent ", "Designed for those who need to ")}
              <em className="not-italic text-champagne font-display">{tx("intervenir", "deliver")}</em>
              {tx(", pas seulement comprendre.", ", not just understand.")}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { label: tx("Consultants SAP Finance", "SAP Finance consultants"), desc: tx("Qui veulent intervenir sur des projets S/4HANA exigeants.", "Who want to operate on demanding S/4HANA projects."), to: "/formations/sap-fico-consultant-program" },
              { label: tx("Contrôleurs & équipes Finance", "Controllers & Finance teams"), desc: tx("Qui souhaitent automatiser et fiabiliser leurs processus.", "Who want to automate and reinforce their processes."), to: "/formations" },
              { label: tx("Key Users & responsables SAP", "Key Users & SAP leads"), desc: tx("Qui pilotent l'adoption SAP au sein de leurs équipes.", "Who drive SAP adoption within their teams."), to: "/offres-entreprise" },
              { label: tx("Directions Finance & SI", "Finance & IT leadership"), desc: tx("Qui mènent la transformation SAP S/4HANA et IA.", "Who lead the SAP S/4HANA and AI transformation."), to: "/offres-entreprise" },
            ].map((a, i) => (
              <Reveal key={a.label} delay={i * 60}>
                <LLink to={a.to} className="group relative block border-t border-ivory/15 pt-7 pb-7 pr-4 transition-all duration-500 hover:pl-3 h-full">
                  <span className="absolute top-0 left-0 h-px w-0 bg-champagne transition-all duration-700 ease-out group-hover:w-8" />
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center h-9 w-9 rounded-sm bg-champagne/[0.07] ring-1 ring-champagne/25 shrink-0 transition-all duration-500 group-hover:bg-champagne/15 group-hover:ring-champagne/40">
                      <Users className="h-4 w-4 text-champagne" strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0">
                      <div className="font-display text-lg md:text-[19px] leading-[1.35] tracking-tight text-ivory">{a.label}</div>
                      <div className="text-[13px] text-ivory/55 leading-[1.6] mt-2">{a.desc}</div>
                      <div className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-wide text-champagne font-medium group-hover:gap-3 transition-all">
                        {tx("Voir le programme adapté", "See the matching program")} <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </div>
                </LLink>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NOS PROGRAMMES SAP FINANCE & IA */}
      <section className="section-y bg-secondary">
        <div className="container-wide">
          <div className="max-w-3xl mb-16 lg:mb-20">
            <div className="eyebrow mb-6">{tx("NOS PROGRAMMES", "OUR PROGRAMS")}</div>
            <h2 className="display-md">
              {tx("Une offre ", "A focused ")}
              <em className="not-italic text-champagne font-display">{tx("SAP Finance & IA", "SAP Finance & AI")}</em>
              {tx(" construite pour la performance.", " program portfolio built for performance.")}
            </h2>
          </div>
          {/* Bloc 1 — Programme phare */}
          <Reveal className="group relative border border-[#D6B06A]/45 ring-1 ring-[#D6B06A]/15 rounded-sm p-8 md:p-12 lg:p-14 mb-10 lg:mb-12 overflow-hidden shadow-[0_1px_2px_rgba(20,20,20,0.04),0_18px_40px_-22px_rgba(120,90,30,0.18)] hover:shadow-[0_1px_2px_rgba(20,20,20,0.05),0_26px_56px_-22px_rgba(120,90,30,0.28)] hover:border-[#D6B06A]/65 transition-all duration-500 bg-[#F7F3EC]">
            <span className="absolute top-0 left-0 h-px w-0 bg-[#D6B06A] transition-all duration-700 ease-out group-hover:w-full" />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-[#D6B06A]/[0.04]" />
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center h-11 w-11 rounded-sm bg-champagne/[0.07] ring-1 ring-champagne/25">
                    <Award className="h-[20px] w-[20px] text-champagne" strokeWidth={1.4} />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.24em] text-champagne font-medium">{tx("Programme phare", "Flagship program")}</span>
                </div>
                <h3 className="font-display text-[28px] md:text-[34px] lg:text-[38px] font-medium leading-[1.15] tracking-tight text-foreground">SAP FICO Consultant Program</h3>
                <p className="mt-4 text-[14px] uppercase tracking-[0.18em] text-muted-foreground">{tx("10 jours intensifs — Programme opérationnel", "10 intensive days — Operational program")}</p>
              </div>
              <div className="lg:col-span-5 flex flex-col">
                <ul className="space-y-3 text-[14.5px] text-muted-foreground leading-[1.7]">
                  {[
                    tx("Maîtrise complète des modules FI & CO sur S/4HANA", "Full mastery of FI & CO modules on S/4HANA"),
                    tx("Méthodologie projet et cas concrets de mission", "Project methodology and real mission case studies"),
                    tx("Préparation à l'intervention en mission consultant", "Ready to intervene on consulting missions"),
                  ].map((b) => (
                    <li key={b} className="flex gap-3"><span className="mt-[10px] h-px w-4 bg-champagne shrink-0" />{b}</li>
                  ))}
                </ul>
                <Button asChild variant="ink" size="lg" className="mt-8 self-start">
                  <LLink to="/formations/sap-fico-consultant-program">{tx("Découvrir la formation", "Discover the program")} <ArrowRight /></LLink>
                </Button>
              </div>
            </div>
          </Reveal>

          {/* Bloc 2 — Programmes SAP + IA (2x2) */}
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-7">
            {[
              {
                icon: Cpu,
                title: tx("Automatiser la clôture financière dans SAP", "Automate the financial close in SAP"),
                tag: tx("IA & Automation", "AI & Automation"),
                duration: tx("5 jours", "5 days"),
                points: [
                  tx("Robotiser les écritures et rapprochements récurrents", "Automate recurring entries and reconciliations"),
                  tx("Détection d'anomalies par IA sur le cycle de clôture", "AI-driven anomaly detection on the close cycle"),
                  tx("Réduction mesurable des délais et risques", "Measurable reduction in lead times and risks"),
                ],
              },
              {
                icon: Sparkles,
                title: tx("Système de relance intelligent SAP", "Smart SAP collections system"),
                tag: tx("IA + Scoring", "AI + Scoring"),
                duration: tx("4 jours", "4 days"),
                points: [
                  tx("Scoring client prédictif intégré à SAP", "Predictive customer scoring inside SAP"),
                  tx("Workflows de relance multicanal automatisés", "Automated multi-channel dunning workflows"),
                  tx("Amélioration directe du DSO", "Direct DSO improvement"),
                ],
              },
              {
                icon: BarChart3,
                title: tx("Pilotage trésorerie temps réel avec SAP Analytics", "Real-time treasury with SAP Analytics"),
                tag: tx("Analytics", "Analytics"),
                duration: tx("4 jours", "4 days"),
                points: [
                  tx("Dashboards trésorerie sur SAP Analytics Cloud", "Treasury dashboards on SAP Analytics Cloud"),
                  tx("Prévisions de cash pilotées par la donnée", "Data-driven cash forecasting"),
                  tx("Connexion aux flux bancaires et ERP", "Bank flow and ERP integration"),
                ],
              },
              {
                icon: Network,
                title: tx("Architecte transformation Finance SAP", "Finance SAP transformation architect"),
                tag: tx("IA + Design", "AI + Design"),
                duration: tx("6 jours", "6 days"),
                points: [
                  tx("Concevoir l'architecture cible Finance S/4HANA", "Design the target Finance S/4HANA architecture"),
                  tx("Intégrer l'IA dans la roadmap de transformation", "Embed AI in the transformation roadmap"),
                  tx("Piloter le programme de bout en bout", "Lead the program end-to-end"),
                ],
              },
            ].map((p, i) => (
              <Reveal key={p.title} delay={i * 70} className="group relative bg-card border border-border hover:border-champagne/40 rounded-sm p-8 md:p-9 flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                <span className="absolute top-0 left-0 h-px w-0 bg-champagne transition-all duration-700 ease-out group-hover:w-full" />
                <div className="flex items-center justify-between mb-7">
                  <div className="flex items-center justify-center h-11 w-11 rounded-sm bg-champagne/[0.07] ring-1 ring-champagne/25">
                    <p.icon className="h-[20px] w-[20px] text-champagne" strokeWidth={1.4} />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.24em] text-champagne font-medium">{p.tag}</span>
                </div>
                <h3 className="font-display text-[22px] md:text-[23px] font-medium leading-[1.25] tracking-tight text-foreground min-h-[2.6em]">{p.title}</h3>
                <p className="mt-3 text-[12px] uppercase tracking-[0.2em] text-muted-foreground">{p.duration}</p>
                <div className="mt-5 h-px w-10 bg-border transition-all duration-500 group-hover:w-14 group-hover:bg-champagne/60" />
                <ul className="mt-5 space-y-2.5 text-[13.5px] text-muted-foreground leading-[1.65] flex-1">
                  {p.points.map((b) => (
                    <li key={b} className="flex gap-2.5"><span className="mt-[9px] h-px w-3 bg-champagne/60 shrink-0" />{b}</li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="mt-8 self-start">
                  <LLink to="/formations">{tx("Découvrir la formation", "Discover the program")} <ArrowRight /></LLink>
                </Button>
              </Reveal>
            ))}
          </div>

          {/* Bloc 3 — Spécialisation RE-FX */}
          <Reveal className="group relative bg-card border border-border hover:border-champagne/40 rounded-sm p-8 md:p-10 mt-10 lg:mt-12 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
            <span className="absolute top-0 left-0 h-px w-0 bg-champagne transition-all duration-700 ease-out group-hover:w-full" />
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex items-center justify-center h-11 w-11 rounded-sm bg-champagne/[0.07] ring-1 ring-champagne/25">
                    <Building className="h-[20px] w-[20px] text-champagne" strokeWidth={1.4} />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.24em] text-champagne font-medium">{tx("Spécialisation avancée", "Advanced specialization")}</span>
                </div>
                <h3 className="font-display text-[24px] md:text-[28px] font-medium leading-[1.2] tracking-tight text-foreground">{tx("Spécialisation SAP RE-FX", "SAP RE-FX specialization")}</h3>
                <p className="mt-3 text-[12px] uppercase tracking-[0.2em] text-muted-foreground">{tx("10 jours intensifs", "10 intensive days")}</p>
              </div>
              <div className="lg:col-span-5">
                <ul className="space-y-3 text-[14px] text-muted-foreground leading-[1.7]">
                  {[
                    tx("Gestion immobilière complète sur SAP S/4HANA", "End-to-end real estate management on SAP S/4HANA"),
                    tx("Contrats, baux, refacturations et reporting", "Contracts, leases, rebilling and reporting"),
                    tx("Intégration native avec FI/CO", "Native integration with FI/CO"),
                  ].map((b) => (
                    <li key={b} className="flex gap-3"><span className="mt-[10px] h-px w-4 bg-champagne shrink-0" />{b}</li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-2 flex lg:justify-end">
                <Button asChild variant="ink" className="self-start">
                  <LLink to="/formations">{tx("Se spécialiser en RE-FX", "Specialize in RE-FX")} <ArrowRight /></LLink>
                </Button>
              </div>
            </div>
          </Reveal>

          <div className="mt-14 flex justify-center">
            <Button asChild size="lg" variant="ink">
              <LLink to="/formations">{tx("Voir toutes les formations", "View all programs")} <ArrowRight /></LLink>
            </Button>
          </div>
        </div>
      </section>

      {/* POURQUOI CBS */}
      <section className="section-y">
        <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="eyebrow mb-6">{tx("POURQUOI CBS", "WHY CBS")}</div>
            <h2 className="display-md">
              {tx("Une expertise terrain ", "Field expertise ")}
              <em className="not-italic text-champagne font-display">{tx("orientée transformation", "built for transformation")}</em>.
            </h2>
            <p className="text-[15.5px] text-muted-foreground mt-7 leading-[1.75] max-w-md">
              {tx(
                "Nos programmes sont conçus par des consultants en mission, sur des problématiques SAP S/4HANA réelles. Pas de théorie déconnectée — uniquement ce qui compte sur le terrain.",
                "Our programs are designed by consultants in active missions, on real SAP S/4HANA challenges. No disconnected theory — only what matters in the field.",
              )}
            </p>
            <Button asChild variant="outline" className="mt-9">
              <LLink to="/a-propos">{tx("Découvrir CBS", "About CBS")} <ArrowRight /></LLink>
            </Button>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-border/80 border border-border rounded-sm overflow-hidden shadow-[var(--shadow-soft)]">
            {[
              { icon: Briefcase, title: tx("Cas réels", "Real cases") },
              { icon: Layers, title: tx("Approche projet", "Project approach") },
              { icon: Compass, title: tx("Expertise Finance SAP", "SAP Finance expertise") },
              { icon: Cpu, title: tx("Automatisation", "Automation") },
              { icon: BarChart3, title: tx("Analytics", "Analytics") },
              { icon: Sparkles, title: tx("IA appliquée", "Applied AI") },
              { icon: Building2, title: "SAP S/4HANA" },
              { icon: ShieldCheck, title: tx("Standards consulting", "Consulting standards") },
            ].map((d, i) => (
              <Reveal key={d.title} delay={i * 50} className="group relative bg-background p-7 md:p-8 flex items-start gap-5 transition-all duration-500 hover:bg-secondary/50">
                <span className="absolute top-0 left-0 h-px w-0 bg-champagne transition-all duration-700 ease-out group-hover:w-full" />
                <div className="flex items-center justify-center h-10 w-10 rounded-sm bg-champagne/[0.07] ring-1 ring-champagne/25 shrink-0 transition-all duration-500 group-hover:bg-champagne/15 group-hover:ring-champagne/50">
                  <d.icon className="h-[18px] w-[18px] text-champagne" strokeWidth={1.4} />
                </div>
                <div className="font-display text-[17px] leading-[1.35] tracking-tight pt-1.5">{d.title}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FORMATS & LIEUX */}
      <section className="section-y bg-secondary">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <div className="eyebrow mb-6">{tx("FORMATS & LIEUX", "FORMATS & LOCATIONS")}</div>
            <h2 className="display-md">
              {tx("Choisissez le format qui correspond à ", "Choose the format that fits ")}
              <em className="not-italic text-champagne font-display">{tx("votre contexte", "your context")}</em>.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
            {[
              { icon: MapPin, title: tx("Présentiel Paris", "On-site Paris"), desc: tx("Sessions intensives au cœur de Paris.", "Intensive sessions in central Paris."), to: "/formations" },
              { icon: MapPin, title: tx("Présentiel Dubaï", "On-site Dubai"), desc: tx("Programmes Key Users & séminaires à Dubaï.", "Key User programs & seminars in Dubai."), to: "/offres-entreprise" },
              { icon: Monitor, title: tx("Distanciel encadré", "Guided remote"), desc: tx("Sessions live avec un consultant expert.", "Live sessions with an expert consultant."), to: "/formations" },
              { icon: Users2, title: tx("Séminaires entreprise", "Corporate seminars"), desc: tx("Sur-mesure pour vos équipes Finance & SAP.", "Tailored to your Finance & SAP teams."), to: "/offres-entreprise" },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 70} className="group relative bg-card border border-border rounded-sm p-7 md:p-8 flex flex-col transition-all duration-500 hover:border-champagne/40 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                <span className="absolute top-0 left-0 h-px w-0 bg-champagne transition-all duration-700 ease-out group-hover:w-full" />
                <div className="flex items-center justify-center h-10 w-10 rounded-sm bg-champagne/[0.07] ring-1 ring-champagne/25">
                  <f.icon className="h-[18px] w-[18px] text-champagne" strokeWidth={1.4} />
                </div>
                <h3 className="font-display text-[19px] md:text-[20px] font-medium leading-[1.3] tracking-tight text-foreground mt-6">{f.title}</h3>
                <p className="text-[14px] text-muted-foreground mt-3 leading-[1.65] flex-1">{f.desc}</p>
                <LLink to={f.to} className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-champagne font-medium mt-6 group-hover:gap-3 transition-all">
                  {tx("Découvrir", "Discover")} <ArrowRight className="h-3.5 w-3.5" />
                </LLink>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIGITAL PRODUCTS PREVIEW */}
      <section className="section-y bg-secondary">
        <div className="container-wide grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-[var(--shadow-card)] ring-1 ring-ink/5">
              <img src={productsVisual} alt="Premium SAP Finance editorial resources" className="h-full w-full object-cover" loading="lazy" width={1280} height={960} />
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="eyebrow mb-6">{t("home.digital_eyebrow")}</div>
            <h2 className="display-md">{t("home.digital_title")}</h2>
            <p className="lede mt-6">{t("home.digital_lede")}</p>
            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 max-w-md">
              {[
                { icon: BookOpen, label: t("home.digital_c1") },
                { icon: FileText, label: t("home.digital_c2") },
                { icon: Layers, label: t("home.digital_c3") },
                { icon: Sparkles, label: t("home.digital_c4") },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4 text-[14.5px] text-foreground/85">
                  <span className="flex items-center justify-center h-9 w-9 rounded-sm bg-champagne/[0.07] ring-1 ring-champagne/25 shrink-0">
                    <c.icon className="h-4 w-4 text-champagne" strokeWidth={1.5} />
                  </span>
                  <span className="font-display tracking-tight leading-none">{c.label}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[12px] text-muted-foreground italic">
              {tx(
                "Ex : Guide SAP FI/CO en migration S/4HANA · Checklist de clôture financière SAP",
                "E.g. SAP FI/CO migration to S/4HANA guide · SAP financial close checklist",
              )}
            </p>
            <Button asChild size="lg" variant="ink" className="mt-10">
              <LLink to="/produits-digitaux">{t("home.digital_cta")} <ArrowRight /></LLink>
            </Button>
          </div>
        </div>
      </section>

      {/* RÉFÉRENCES PROJETS */}
      <section className="bg-ink text-ivory py-16 md:py-20">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center mb-7 md:mb-9">
            <div className="inline-flex items-center gap-3 mb-7">
              <span className="h-px w-8 bg-champagne" />
              <span className="text-[10px] uppercase tracking-[0.32em] text-champagne font-medium">{t("home.refs_eyebrow")}</span>
              <span className="h-px w-8 bg-champagne" />
            </div>
            <h2 className="display-md text-ivory">
              {t("home.refs_title_a")}<em className="not-italic text-champagne font-display">{t("home.refs_title_em")}</em>{t("home.refs_title_b")}
            </h2>
            <p className="lede mt-7 text-ivory/70 mx-auto">{t("home.refs_lede")}</p>
          </div>

          <Reveal>
            <div className="max-w-4xl mx-auto border-t border-ivory/[0.05] pt-7 md:pt-10">
              {(() => {
                const lines = [
                  ["SAP", "Radio France", "Vodafone", "Imerys", "Europ Assistance", "Fareva"],
                  ["Lafarge", "Suez", "Engie", "EDF", "GRDF", "TotalEnergies"],
                  ["Carrefour", "JCDecaux", "Qualiconsult", "L'Oréal", "Dior"],
                ];
                return (
                  <div className="space-y-5 md:space-y-7 text-center">
                    {lines.map((line, li) => (
                      <p key={li} className="font-display text-[18px] md:text-[22px] tracking-tight text-ivory/90 leading-[1.6]">
                        {line.map((ref, i) => (
                          <span key={ref}>
                            <span className="hover:text-champagne transition-colors duration-500">{ref}</span>
                            {i < line.length - 1 && <span className="inline-block w-10 md:w-16" aria-hidden />}
                          </span>
                        ))}
                      </p>
                    ))}
                  </div>
                );
              })()}
            </div>
          </Reveal>

          <p className="text-[11px] md:text-[11.5px] text-ivory/55 mt-5 md:mt-6 text-center max-w-xl mx-auto leading-[1.7] tracking-[0.01em]">
            {t("home.refs_disclaimer")}
          </p>
        </div>
      </section>

      {/* KEY METRICS */}
      <KeyMetrics />

      {/* FINAL CTA */}
      <section className="pt-10 md:pt-14 pb-20 md:pb-24 bg-ink text-ivory">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="eyebrow mb-6 text-ivory/60">{t("home.final_eyebrow")}</div>
            <h2 className="display-lg text-ivory">{t("home.final_title")}</h2>
            <p className="lede mt-6 text-ivory/70">{t("home.final_lede")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="champagne">
                <LLink to="/formations">{t("home.final_cta_program")} <ArrowRight /></LLink>
              </Button>
              <Button asChild size="lg" variant="outlineLight">
                <LLink to="/offres-entreprise">{t("home.final_cta_quote")}</LLink>
              </Button>
              <Button asChild size="lg" variant="outlineLight">
                <LLink to="/contact"><Mail className="h-4 w-4" /> {t("home.final_cta_contact")}</LLink>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
