import { ArrowRight, Compass, GraduationCap, Building2, ShieldCheck, Sparkles, Layers, Users, Briefcase, BookOpen, FileText, Mail, Award, Cpu, BarChart3, Network, Building, MapPin, Monitor, Users2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import { LLink } from "@/i18n/LLink";
import Seo from "@/components/Seo";
import heroVisual from "@/assets/hero-visual.jpg";
import heroLocationsVisual from "@/assets/hero-locations-visual.jpg";
import productsVisual from "@/assets/products-visual.jpg";
import corporateVisual from "@/assets/corporate-visual.jpg";
import { useTx } from "@/i18n/tx";

const Home = () => {
  const { t } = useTranslation();
  const tx = useTx();
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % 2), 7000);
    return () => clearInterval(id);
  }, []);

  const pillars = [
    { icon: Compass, title: t("home.pillar_1_title"), text: t("home.pillar_1_text") },
    { icon: Sparkles, title: t("home.pillar_2_title"), text: t("home.pillar_2_text") },
    { icon: GraduationCap, title: t("home.pillar_3_title"), text: t("home.pillar_3_text") },
  ];

  const offers = [
    { tag: t("home.offer_1_tag"), title: t("home.offer_1_title"), text: t("home.offer_1_text"), cta: { label: t("home.offer_1_cta"), to: "/formations" }, featured: true },
    { tag: t("home.offer_2_tag"), title: t("home.offer_2_title"), text: t("home.offer_2_text"), cta: { label: t("home.offer_2_cta"), to: "/offres-entreprise" } },
    { tag: t("home.offer_3_tag"), title: t("home.offer_3_title"), text: t("home.offer_3_text"), cta: { label: t("home.offer_3_cta"), to: "/offres-entreprise" } },
  ];

  const whyItems = [
    { icon: Layers, title: t("home.why_1") },
    { icon: Briefcase, title: t("home.why_2") },
    { icon: Compass, title: t("home.why_3") },
    { icon: Sparkles, title: t("home.why_4") },
    { icon: Building2, title: t("home.why_5") },
    { icon: ShieldCheck, title: t("home.why_6") },
  ];

  const audiences = [
    { label: t("home.aud_1"), desc: t("home.aud_1_desc") },
    { label: t("home.aud_2"), desc: t("home.aud_2_desc") },
    { label: t("home.aud_3"), desc: t("home.aud_3_desc") },
    { label: t("home.aud_4"), desc: t("home.aud_4_desc") },
    { label: t("home.aud_5"), desc: t("home.aud_5_desc") },
    { label: t("home.aud_6"), desc: t("home.aud_6_desc") },
  ];

  const trust = [
    { k: t("home.trust_k_1"), v: t("home.trust_v_1") },
    { k: t("home.trust_k_2"), v: t("home.trust_v_2") },
    { k: t("home.trust_k_3"), v: t("home.trust_v_3") },
    { k: t("home.trust_k_4"), v: t("home.trust_v_4") },
    { k: t("home.trust_k_5"), v: t("home.trust_v_5") },
  ];

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
                <img src={heroVisual} alt="CBS Finance Institute" className="absolute inset-0 h-full w-full object-cover" width={1080} height={1350} />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="hidden md:block absolute bottom-8 -left-5 lg:-left-8 bg-ink/95 backdrop-blur-sm text-ivory p-4 rounded-sm max-w-[220px] shadow-[var(--shadow-lift)] ring-1 ring-champagne/20">
                <div className="flex items-center gap-2 text-[9.5px] uppercase tracking-[0.28em] text-champagne mb-2">
                  <span className="h-px w-4 bg-champagne" /> {tx("PROGRAMME PHARE", "FLAGSHIP")}
                </div>
                <div className="font-display text-[15px] leading-snug">SAP FICO Consultant Program</div>
                <div className="text-[10.5px] uppercase tracking-[0.18em] text-ivory/55 mt-2 pt-2 border-t border-ivory/10">{tx("Présentiel Paris · Distanciel", "On-site Paris · Remote")}</div>
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
              { label: tx("Consultants SAP Finance", "SAP Finance consultants"), desc: tx("Qui veulent intervenir sur des projets S/4HANA exigeants.", "Who want to operate on demanding S/4HANA projects.") },
              { label: tx("Contrôleurs & équipes Finance", "Controllers & Finance teams"), desc: tx("Qui souhaitent automatiser et fiabiliser leurs processus.", "Who want to automate and reinforce their processes.") },
              { label: tx("Key Users & responsables SAP", "Key Users & SAP leads"), desc: tx("Qui pilotent l'adoption SAP au sein de leurs équipes.", "Who drive SAP adoption within their teams.") },
              { label: tx("Directions Finance & SI", "Finance & IT leadership"), desc: tx("Qui mènent la transformation SAP S/4HANA et IA.", "Who lead the SAP S/4HANA and AI transformation.") },
            ].map((a, i) => (
              <Reveal key={a.label} delay={i * 60}>
                <div className="group relative border-t border-ivory/15 pt-7 pb-2 pr-4 transition-all duration-500 hover:pl-3">
                  <span className="absolute top-0 left-0 h-px w-0 bg-champagne transition-all duration-700 ease-out group-hover:w-8" />
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center h-9 w-9 rounded-sm bg-champagne/[0.07] ring-1 ring-champagne/25 shrink-0 transition-all duration-500 group-hover:bg-champagne/15 group-hover:ring-champagne/40">
                      <Users className="h-4 w-4 text-champagne" strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0">
                      <div className="font-display text-lg md:text-[19px] leading-[1.35] tracking-tight text-ivory">{a.label}</div>
                      <div className="text-[13px] text-ivory/55 leading-[1.6] mt-2">{a.desc}</div>
                    </div>
                  </div>
                </div>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {[
              { icon: Award, flagship: true, title: "SAP FICO Consultant Program", tag: tx("Programme phare", "Flagship"), to: "/formations/sap-fico-consultant-program", desc: tx("Devenir consultant SAP FICO opérationnel sur S/4HANA, de la conception au déploiement.", "Become an operational SAP FICO consultant on S/4HANA, from design to deployment.") },
              { icon: Cpu, title: tx("Automatiser la clôture SAP", "Automating the SAP close"), tag: tx("IA & Automation", "AI & Automation"), to: "/formations", desc: tx("Réduire les délais de clôture grâce à l'automatisation et à l'IA.", "Cut close cycles through automation and AI.") },
              { icon: Sparkles, title: tx("Relance intelligente SAP", "Smart SAP collections"), tag: tx("IA appliquée", "Applied AI"), to: "/formations", desc: tx("Activer une relance client intelligente pilotée par l'IA dans SAP.", "Activate AI-driven smart collections inside SAP.") },
              { icon: BarChart3, title: tx("Trésorerie temps réel SAP Analytics", "Real-time treasury · SAP Analytics"), tag: tx("Analytics", "Analytics"), to: "/formations", desc: tx("Construire une trésorerie temps réel avec SAP Analytics Cloud.", "Build a real-time treasury practice with SAP Analytics Cloud.") },
              { icon: Network, title: tx("Architecte transformation Finance SAP", "Finance SAP transformation architect"), tag: tx("Transformation", "Transformation"), to: "/formations", desc: tx("Concevoir et piloter une transformation Finance SAP de bout en bout.", "Design and lead an end-to-end SAP Finance transformation.") },
              { icon: Building, title: tx("Spécialisation SAP RE-FX", "SAP RE-FX specialization"), tag: tx("Spécialisation", "Specialization"), to: "/formations", desc: tx("Maîtriser la gestion immobilière SAP RE-FX sur S/4HANA.", "Master SAP RE-FX real estate management on S/4HANA.") },
            ].map((p, i) => (
              <Reveal key={p.title} delay={i * 70} className={`group relative bg-card border rounded-sm p-8 md:p-9 flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] ${p.flagship ? "border-champagne/50 ring-1 ring-champagne/20" : "border-border hover:border-champagne/40"}`}>
                <span className="absolute top-0 left-0 h-px w-0 bg-champagne transition-all duration-700 ease-out group-hover:w-full" />
                <div className="flex items-center justify-between mb-7">
                  <div className="flex items-center justify-center h-11 w-11 rounded-sm bg-champagne/[0.07] ring-1 ring-champagne/25">
                    <p.icon className="h-[20px] w-[20px] text-champagne" strokeWidth={1.4} />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.24em] text-champagne font-medium">{p.tag}</span>
                </div>
                <h3 className="font-display text-[22px] md:text-[23px] font-medium leading-[1.25] tracking-tight text-foreground min-h-[3.2em]">{p.title}</h3>
                <div className="mt-5 h-px w-10 bg-border transition-all duration-500 group-hover:w-14 group-hover:bg-champagne/60" />
                <p className="text-[14px] text-muted-foreground mt-5 leading-[1.7] flex-1">{p.desc}</p>
                <Button asChild variant={p.flagship ? "ink" : "outline"} className="mt-8 self-start">
                  <LLink to={p.to}>{tx("Découvrir", "Discover")} <ArrowRight /></LLink>
                </Button>
              </Reveal>
            ))}
          </div>
          <div className="mt-14 flex justify-center">
            <Button asChild size="lg" variant="ink">
              <LLink to="/formations">{tx("Découvrir toutes les formations", "Discover all programs")} <ArrowRight /></LLink>
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

      {/* TRUST */}
      <section className="pt-20 md:pt-24 pb-10 md:pb-14">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-border border border-border rounded-sm overflow-hidden">
            {trust.map((tr, i) => (
              <Reveal key={tr.k} delay={i * 50} className="bg-background p-6 md:p-8">
                <div className="text-[10px] uppercase tracking-[0.2em] text-champagne mb-3">{tr.k}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{tr.v}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

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
