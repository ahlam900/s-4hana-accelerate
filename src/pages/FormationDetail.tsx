import { Link, useParams, Navigate } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Clock,
  Award,
  Sparkles,
  Layers,
  GraduationCap,
  BookOpen,
  Users,
  Target,
  Compass,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import { formationDetails } from "@/data/formationDetails";

const FormationDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? formationDetails[slug] : undefined;

  if (!data) return <Navigate to="/formations" replace />;

  const quickInfo = [
    { icon: Clock, label: data.duration },
    { icon: GraduationCap, label: `Niveau ${data.level}` },
    { icon: Sparkles, label: "Format intensif" },
    { icon: Layers, label: data.format },
  ];

  const summaryHighlights = [
    { label: "Durée", value: data.duration },
    { label: "Niveau", value: data.level },
    { label: "Consultant", value: `${data.priceConsultant}` },
    { label: "Entreprise", value: `${data.priceCorporate}` },
    { label: "Format", value: data.format },
  ];

  const inscriptionLink = `/formations?sujet=${data.sujet}#demande`;
  const programLink = `/formations?sujet=${data.sujet}#demande`;

  const whyCbs = [
    { icon: Target, title: "Approche terrain", desc: "Construite à partir de missions réelles." },
    { icon: Compass, title: "Double lecture", desc: "Processus métier d'abord, traduction SAP ensuite." },
    { icon: Briefcase, title: "Posture consultant", desc: "Vocabulaire, méthode et cadre projet attendus." },
    { icon: Award, title: "Encadrement premium", desc: "Par des experts SAP Finance en activité." },
  ];

  return (
    <>
      <Seo
        title={`${data.title} ${data.titleAccent ?? ""} — CBS Finance Institute`}
        description={data.summary}
        keywords={`${data.title}, formation SAP Finance, CBS Finance Institute, ${data.eyebrow}`}
      />

      {/* HERO */}
      <section className="relative pt-24 md:pt-28 pb-20 md:pb-24 overflow-hidden bg-secondary border-b border-border">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />
        <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-20 items-start relative">
          <div className="lg:col-span-7 relative z-10">
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="h-px w-8 bg-champagne" />
              <span className="text-[10px] uppercase tracking-[0.32em] text-champagne font-medium">
                {data.eyebrow}
              </span>
            </div>
            <h1 className="display-xl text-foreground max-w-[18ch] leading-[1.04]">
              {data.title}{" "}
              {data.titleAccent && (
                <em className="not-italic text-champagne font-display">{data.titleAccent}</em>
              )}
            </h1>
            <p className="lede mt-7 max-w-2xl leading-relaxed">{data.summary}</p>

            <ul className="mt-9 grid sm:grid-cols-2 gap-x-8 gap-y-3 max-w-xl">
              {quickInfo.map((q) => (
                <li key={q.label} className="flex items-center gap-3 text-[13.5px] text-foreground/85">
                  <q.icon className="h-4 w-4 text-champagne shrink-0" strokeWidth={1.6} />
                  <span>{q.label}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="ink">
                <Link to={programLink}>
                  Demander le programme détaillé <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to={inscriptionLink}>S'inscrire / Être contacté</Link>
              </Button>
            </div>
          </div>

          {/* Pricing summary block */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-background rounded-sm shadow-[var(--shadow-lift)] ring-1 ring-border overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-champagne mb-6">
                  <span className="h-px w-5 bg-champagne" /> Tarifs & informations
                </div>
                <dl className="divide-y divide-border/70">
                  {summaryHighlights.map((s) => (
                    <div
                      key={s.label}
                      className="py-4 first:pt-0 last:pb-0 flex items-baseline justify-between gap-6"
                    >
                      <dt className="text-[10.5px] uppercase tracking-[0.22em] text-muted-foreground">
                        {s.label}
                      </dt>
                      <dd className="font-display text-[16px] text-foreground text-right">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="border-t border-border bg-secondary/60 px-8 md:px-10 py-4 flex items-center justify-between">
                <span className="text-[10.5px] uppercase tracking-[0.2em] text-muted-foreground">
                  Sessions limitées
                </span>
                <Link
                  to={inscriptionLink}
                  className="text-[12px] font-medium text-champagne inline-flex items-center gap-1.5 hover:gap-2 transition-all"
                >
                  S'inscrire <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="section-y border-b border-border">
        <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <Reveal className="lg:col-span-5">
            <div className="eyebrow mb-6">Public visé</div>
            <h2 className="display-md text-foreground max-w-[18ch]">
              Conçu pour les profils qui veulent{" "}
              <em className="not-italic text-champagne font-display">intervenir</em>.
            </h2>
            <div className="mt-8 h-px w-12 bg-champagne/60" />
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7">
            <ul className="divide-y divide-border/70 border-y border-border/70">
              {data.audience.map((a, i) => (
                <li key={a} className="group py-6 flex items-start gap-6">
                  <span className="font-display text-champagne text-[13px] tracking-[0.2em] mt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 flex items-start gap-5">
                    <span className="mt-3 h-px w-6 bg-champagne/60 shrink-0 transition-all duration-300 group-hover:w-10" />
                    <p className="font-display text-[18px] md:text-[19px] text-foreground leading-snug">
                      {a}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* KEY POINTS */}
      <section className="section-y bg-secondary border-b border-border">
        <div className="container-wide">
          <Reveal className="max-w-3xl mb-14">
            <div className="eyebrow mb-6">Points clés</div>
            <h2 className="display-md text-foreground">
              Les{" "}
              <em className="not-italic text-champagne font-display">bénéfices</em> du programme.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {data.keyPoints.map((k, i) => (
              <Reveal key={k.title} delay={i * 50}>
                <div className="bg-background p-8 md:p-10 h-full">
                  <div className="flex items-center justify-center h-10 w-10 rounded-sm bg-champagne/[0.08] ring-1 ring-champagne/25 mb-5">
                    <span className="font-display text-[12px] tracking-[0.18em] text-champagne">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display text-[20px] text-foreground">{k.title}</h3>
                  <p className="mt-3 text-[14.5px] text-muted-foreground leading-relaxed">{k.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED PROGRAMME */}
      <section className="section-y border-b border-border">
        <div className="container-wide">
          <Reveal className="max-w-3xl mb-14">
            <div className="eyebrow mb-6">Programme détaillé</div>
            <h2 className="display-md text-foreground">
              Un programme intensif sur{" "}
              <em className="not-italic text-champagne font-display">{data.durationDays}</em>.
            </h2>
            <p className="lede mt-6 max-w-2xl">
              Une progression structurée, pensée pour ancrer la compréhension métier et SAP en parallèle.
            </p>
          </Reveal>

          <div className="relative">
            <div className="absolute left-[7.5rem] top-0 bottom-0 w-px bg-border hidden md:block" />
            <ol className="space-y-0">
              {data.modules.map((m, i) => (
                <Reveal key={m.day} delay={i * 30}>
                  <li className="group relative grid md:grid-cols-[7.5rem_1fr] gap-y-2 gap-x-8 py-6 border-b border-border/70">
                    <div className="flex md:flex-col md:items-end md:text-right items-baseline gap-3 md:gap-1">
                      <span className="font-display text-champagne text-[12.5px] tracking-[0.22em]">
                        {m.day}
                      </span>
                      <span className="hidden md:block text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground">
                        Module {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="md:pl-8 relative">
                      <span className="hidden md:block absolute -left-[6px] top-2 h-2.5 w-2.5 rounded-full bg-background ring-1 ring-champagne/60 group-hover:bg-champagne transition-colors" />
                      <h3 className="font-display text-[19px] md:text-[20px] text-foreground leading-snug">
                        {m.title}
                      </h3>
                      <p className="mt-1.5 text-[12px] uppercase tracking-[0.2em] text-muted-foreground">
                        {m.focus}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="ink">
              <Link to={programLink}>
                Demander la fiche programme <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to={inscriptionLink}>S'inscrire / Être contacté</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="section-y bg-ink text-ivory border-b border-border">
        <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <Reveal className="lg:col-span-5">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-champagne" />
              <span className="text-[10px] uppercase tracking-[0.32em] text-champagne font-medium">
                Résultats
              </span>
            </div>
            <h2 className="display-md text-ivory max-w-[18ch]">
              À l'issue du programme, vous serez{" "}
              <em className="not-italic text-champagne font-display">capable de</em>.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7">
            <ul className="space-y-4">
              {data.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-4 py-4 border-b border-ivory/15">
                  <Check className="h-4 w-4 text-champagne mt-1.5 shrink-0" strokeWidth={2} />
                  <p className="text-[16px] text-ivory/90 leading-relaxed">{o}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* MODALITIES */}
      <section className="section-y bg-secondary border-b border-border">
        <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <Reveal className="lg:col-span-5">
            <div className="eyebrow mb-6">Modalités</div>
            <h2 className="display-md text-foreground">
              Format du <em className="not-italic text-champagne font-display">programme</em>.
            </h2>
            <p className="lede mt-6 max-w-md">
              Une organisation pensée pour l'engagement, la régularité et la qualité de l'encadrement.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7">
            <dl className="bg-background ring-1 ring-border rounded-sm divide-y divide-border/70">
              {data.modalities.map((f) => (
                <div key={f.label} className="grid grid-cols-[10rem_1fr] gap-4 px-6 md:px-8 py-5">
                  <dt className="text-[10.5px] uppercase tracking-[0.22em] text-muted-foreground self-center">
                    {f.label}
                  </dt>
                  <dd className="font-display text-[16px] text-foreground">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* PREREQUISITES */}
      <section className="section-y border-b border-border">
        <div className="container-wide">
          <Reveal className="max-w-3xl mb-14">
            <div className="eyebrow mb-6">Prérequis</div>
            <h2 className="display-md text-foreground">
              Avant de <em className="not-italic text-champagne font-display">commencer</em>.
            </h2>
          </Reveal>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {data.prerequisites.map((p, i) => (
              <Reveal key={p} delay={i * 40}>
                <li className="bg-background p-8 h-full flex items-start gap-4">
                  <span className="font-display text-[12px] tracking-[0.22em] text-champagne mt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-display text-[16px] text-foreground leading-snug">{p}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* WHY CBS — condensed */}
      <section className="section-y border-b border-border bg-secondary">
        <div className="container-wide">
          <Reveal className="max-w-3xl mb-14">
            <div className="eyebrow mb-6">Pourquoi CBS</div>
            <h2 className="display-md text-foreground">
              Une approche conçue pour{" "}
              <em className="not-italic text-champagne font-display">l'opérationnel</em>.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {whyCbs.map((d, i) => (
              <Reveal key={d.title} delay={i * 50}>
                <div className="bg-background p-7 h-full">
                  <div className="flex items-center justify-center h-10 w-10 rounded-sm bg-champagne/[0.08] ring-1 ring-champagne/25 mb-5">
                    <d.icon className="h-[18px] w-[18px] text-champagne" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-[17px] text-foreground">{d.title}</h3>
                  <p className="mt-2.5 text-[13.5px] text-muted-foreground leading-relaxed">{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="programme-cta" className="section-y bg-ink text-ivory">
        <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-champagne" />
              <span className="text-[10px] uppercase tracking-[0.32em] text-champagne font-medium">
                Prochaine étape
              </span>
            </div>
            <h2 className="display-md text-ivory max-w-[22ch]">
              Recevez le programme et validons votre{" "}
              <em className="not-italic text-champagne font-display">positionnement</em>.
            </h2>
            <p className="lede mt-6 max-w-2xl text-ivory/75">
              Échangeons sur votre contexte et vérifions ensemble que cette formation correspond à votre
              objectif.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="champagne">
                <Link to={programLink}>
                  Demander la fiche programme <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outlineLight">
                <Link to={inscriptionLink}>S'inscrire / Être contacté</Link>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative bg-ivory/[0.04] ring-1 ring-ivory/15 rounded-sm p-8 md:p-10 backdrop-blur-sm">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-champagne mb-6">
                <span className="h-px w-5 bg-champagne" /> Ce que vous recevez
              </div>
              <ul className="space-y-4 text-[14.5px] text-ivory/85">
                {[
                  { icon: BookOpen, label: "Le programme détaillé" },
                  { icon: Users, label: "Un échange avec un expert SAP Finance" },
                  { icon: Award, label: "Vérification du niveau & du positionnement" },
                ].map((it) => (
                  <li key={it.label} className="flex items-start gap-3">
                    <it.icon className="h-4 w-4 text-champagne mt-0.5 shrink-0" strokeWidth={1.6} />
                    <span>{it.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormationDetail;
