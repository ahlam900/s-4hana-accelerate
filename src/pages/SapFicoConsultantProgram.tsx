import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Clock,
  Users,
  Award,
  Sparkles,
  Layers,
  Target,
  Compass,
  GraduationCap,
  BookOpen,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";

const quickInfo = [
  { icon: Clock, label: "10 jours" },
  { icon: GraduationCap, label: "Niveau confirmé" },
  { icon: Sparkles, label: "Format intensif" },
  { icon: Layers, label: "Distanciel encadré + sessions live" },
];

const summaryHighlights = [
  { label: "Durée", value: "10 jours" },
  { label: "Niveau", value: "Confirmé" },
  { label: "Reconnaissance", value: "Parcours certifiant" },
  { label: "Pédagogie", value: "Cas concrets" },
  { label: "Périmètre", value: "S/4HANA Finance" },
];

const audience = [
  "Professionnels Finance souhaitant évoluer vers SAP",
  "Profils en reconversion vers le consulting SAP Finance",
  "Consultants juniors ou généralistes souhaitant se spécialiser",
  "Key users souhaitant monter en compétence sur les processus Finance",
];

const skills = [
  "Comprendre les fondamentaux de Financial Accounting",
  "Structurer une lecture claire de Controlling",
  "Naviguer dans l’architecture SAP S/4HANA Finance",
  "Comprendre la traduction des processus métier dans SAP",
  "Identifier les points clés de paramétrage",
  "Développer une logique projet et une posture de consultant",
];

const modules = [
  { day: "Jour 01", title: "Introduction Finance SAP & architecture globale", focus: "Cadrage & vision" },
  { day: "Jour 02", title: "Fondamentaux Financial Accounting", focus: "FI — socle comptable" },
  { day: "Jour 03", title: "Clients / fournisseurs / flux opérationnels", focus: "AR · AP · flux" },
  { day: "Jour 04", title: "Immobilisations & clôture", focus: "AA · clôtures" },
  { day: "Jour 05", title: "Introduction Controlling", focus: "CO — pilotage" },
  { day: "Jour 06", title: "Intégration FI/CO", focus: "Cohérence comptable & analytique" },
  { day: "Jour 07", title: "S/4HANA Finance", focus: "Architecture nouvelle génération" },
  { day: "Jour 08", title: "Cas projet & lecture de besoin", focus: "Analyse & cadrage" },
  { day: "Jour 09", title: "Posture consultant & méthode projet", focus: "Méthodologie & posture" },
  { day: "Jour 10", title: "Mise en situation / synthèse", focus: "Restitution & projection" },
];

const outcomes = [
  "Lire et expliquer les principaux processus Finance dans SAP",
  "Comprendre l’articulation entre FI, CO et S/4HANA Finance",
  "Identifier les objets et structures clés d’un projet Finance SAP",
  "Dialoguer avec des équipes métier, projet et SAP avec plus d’assurance",
  "Aborder un projet ou une mission avec une base méthodologique solide",
];

const differentiators = [
  {
    title: "Approche terrain",
    desc: "Construite à partir de missions réelles, loin des supports génériques.",
    icon: Target,
  },
  {
    title: "Double lecture métier + SAP",
    desc: "Comprendre les processus avant l’outil, puis traduire en SAP.",
    icon: Compass,
  },
  {
    title: "Positionnement consultant",
    desc: "Développer la posture, le vocabulaire et la méthode projet attendus.",
    icon: Briefcase,
  },
  {
    title: "Encadrement premium",
    desc: "Un suivi resserré, par des experts SAP Finance en activité.",
    icon: Award,
  },
];

const formatItems = [
  { label: "Durée", value: "10 jours" },
  { label: "Modalité", value: "Distanciel encadré + sessions live" },
  { label: "Niveau", value: "Confirmé" },
  { label: "Supports", value: "Supports pédagogiques premium" },
  { label: "Public visé", value: "Finance, consultants, key users" },
  { label: "Accès", value: "Sur échange préalable" },
];

const afterProgram = [
  "Consultant SAP Finance junior / en montée en puissance",
  "Key user Finance renforcé",
  "Préparation à des environnements projet S/4HANA",
  "Poursuite vers un niveau expert",
  "Spécialisation RE-FX possible ensuite",
];

const SapFicoConsultantProgram = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-24 md:pt-28 pb-20 md:pb-24 overflow-hidden bg-secondary border-b border-border">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />
        <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-20 items-start relative">
          <div className="lg:col-span-7 relative z-10">
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="h-px w-8 bg-champagne" />
              <span className="text-[10px] uppercase tracking-[0.32em] text-champagne font-medium">
                Programme phare
              </span>
            </div>
            <h1 className="display-xl text-foreground max-w-[16ch] leading-[1.04]">
              SAP <em className="not-italic text-champagne font-display">FICO</em> Consultant Program
            </h1>
            <p className="lede mt-7 max-w-2xl leading-relaxed">
              Le parcours intensif de référence pour maîtriser les fondamentaux Finance SAP, comprendre l’architecture
              S/4HANA Finance et développer une posture opérationnelle de consultant.
            </p>

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
                <Link to="#programme-cta">
                  Recevoir le programme <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Échanger avec un expert</Link>
              </Button>
            </div>
          </div>

          {/* Right premium summary block */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-background rounded-sm shadow-[var(--shadow-lift)] ring-1 ring-border overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-champagne mb-6">
                  <span className="h-px w-5 bg-champagne" /> En un regard
                </div>
                <dl className="divide-y divide-border/70">
                  {summaryHighlights.map((s) => (
                    <div key={s.label} className="py-4 first:pt-0 last:pb-0 flex items-baseline justify-between gap-6">
                      <dt className="text-[10.5px] uppercase tracking-[0.22em] text-muted-foreground">{s.label}</dt>
                      <dd className="font-display text-[16px] text-foreground text-right">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="border-t border-border bg-secondary/60 px-8 md:px-10 py-4 flex items-center justify-between">
                <span className="text-[10.5px] uppercase tracking-[0.2em] text-muted-foreground">Accès sélectif</span>
                <Link
                  to="#programme-cta"
                  className="text-[12px] font-medium text-champagne inline-flex items-center gap-1.5 hover:gap-2 transition-all"
                >
                  Candidater <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-3 absolute -bottom-5 -left-4 lg:-left-6 bg-ink/90 backdrop-blur-md text-ivory pl-3 pr-5 py-2.5 rounded-sm shadow-[var(--shadow-lift)] ring-1 ring-champagne/15">
              <Award className="h-4 w-4 text-champagne" strokeWidth={1.6} />
              <span className="h-6 w-px bg-champagne/40" />
              <span className="text-[11px] uppercase tracking-[0.22em]">Parcours certifiant</span>
            </div>
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="section-y border-b border-border">
        <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <Reveal className="lg:col-span-5">
            <div className="eyebrow mb-6">Public</div>
            <h2 className="display-md text-foreground max-w-[18ch]">
              Conçu pour les profils qui veulent franchir un cap en{" "}
              <em className="not-italic text-champagne font-display">Finance SAP</em>.
            </h2>
            <div className="mt-8 h-px w-12 bg-champagne/60" />
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7">
            <ul className="divide-y divide-border/70 border-y border-border/70">
              {audience.map((a, i) => (
                <li key={a} className="group py-6 flex items-start gap-6">
                  <span className="font-display text-champagne text-[13px] tracking-[0.2em] mt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 flex items-start gap-5">
                    <span className="mt-3 h-px w-6 bg-champagne/60 shrink-0 transition-all duration-300 group-hover:w-10" />
                    <p className="font-display text-[18px] md:text-[19px] text-foreground leading-snug">{a}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section-y bg-secondary border-b border-border">
        <div className="container-wide">
          <Reveal className="max-w-3xl mb-14">
            <div className="eyebrow mb-6">Compétences</div>
            <h2 className="display-md text-foreground">
              Les compétences développées au fil du{" "}
              <em className="not-italic text-champagne font-display">parcours</em>.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-5">
            {skills.map((s, i) => (
              <Reveal key={s} delay={i * 40}>
                <div className="flex items-start gap-4 py-4 border-b border-border/70">
                  <span className="font-display text-[12px] tracking-[0.22em] text-champagne mt-1.5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[16px] text-foreground/90 leading-relaxed">{s}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED PROGRAMME — 10 days */}
      <section className="section-y border-b border-border">
        <div className="container-wide">
          <Reveal className="max-w-3xl mb-14">
            <div className="eyebrow mb-6">Programme détaillé</div>
            <h2 className="display-md text-foreground">
              Un programme intensif sur{" "}
              <em className="not-italic text-champagne font-display">10 jours</em>.
            </h2>
            <p className="lede mt-6 max-w-2xl">
              Une progression structurée du socle comptable jusqu’à la posture consultant, pensée pour ancrer la
              compréhension métier et SAP en parallèle.
            </p>
          </Reveal>

          <div className="relative">
            <div className="absolute left-[7.5rem] top-0 bottom-0 w-px bg-border hidden md:block" />
            <ol className="space-y-0">
              {modules.map((m, i) => (
                <Reveal key={m.day} delay={i * 30}>
                  <li className="group relative grid md:grid-cols-[7.5rem_1fr] gap-y-2 gap-x-8 py-6 border-b border-border/70">
                    <div className="flex md:flex-col md:items-end md:text-right items-baseline gap-3 md:gap-1">
                      <span className="font-display text-champagne text-[12.5px] tracking-[0.22em]">{m.day}</span>
                      <span className="hidden md:block text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground">
                        Module {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="md:pl-8 relative">
                      <span className="hidden md:block absolute -left-[6px] top-2 h-2.5 w-2.5 rounded-full bg-background ring-1 ring-champagne/60 group-hover:bg-champagne transition-colors" />
                      <h3 className="font-display text-[19px] md:text-[20px] text-foreground leading-snug">
                        {m.title}
                      </h3>
                      <p className="mt-1.5 text-[12px] uppercase tracking-[0.2em] text-muted-foreground">{m.focus}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="section-y bg-ink text-ivory border-b border-border">
        <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <Reveal className="lg:col-span-5">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-champagne" />
              <span className="text-[10px] uppercase tracking-[0.32em] text-champagne font-medium">Résultats</span>
            </div>
            <h2 className="display-md text-ivory max-w-[18ch]">
              À l’issue du programme, vous serez{" "}
              <em className="not-italic text-champagne font-display">capable de</em> :
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7">
            <ul className="space-y-4">
              {outcomes.map((o) => (
                <li key={o} className="flex items-start gap-4 py-4 border-b border-ivory/15">
                  <Check className="h-4 w-4 text-champagne mt-1.5 shrink-0" strokeWidth={2} />
                  <p className="text-[16px] text-ivory/90 leading-relaxed">{o}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* DIFFERENTIATION */}
      <section className="section-y border-b border-border">
        <div className="container-wide">
          <Reveal className="max-w-3xl mb-14">
            <div className="eyebrow mb-6">Différenciation</div>
            <h2 className="display-md text-foreground">
              Une approche conçue pour l’opérationnel, pas pour la{" "}
              <em className="not-italic text-champagne font-display">théorie seule</em>.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} delay={i * 50}>
                <div className="bg-background p-8 md:p-10 h-full">
                  <div className="flex items-center justify-center h-10 w-10 rounded-sm bg-champagne/[0.08] ring-1 ring-champagne/25 mb-5">
                    <d.icon className="h-[18px] w-[18px] text-champagne" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-[20px] text-foreground">{d.title}</h3>
                  <p className="mt-3 text-[14.5px] text-muted-foreground leading-relaxed">{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FORMAT */}
      <section className="section-y bg-secondary border-b border-border">
        <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <Reveal className="lg:col-span-5">
            <div className="eyebrow mb-6">Modalités</div>
            <h2 className="display-md text-foreground">
              Format du <em className="not-italic text-champagne font-display">programme</em>.
            </h2>
            <p className="lede mt-6 max-w-md">
              Une organisation pensée pour l’engagement, la régularité et la qualité de l’encadrement.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7">
            <dl className="bg-background ring-1 ring-border rounded-sm divide-y divide-border/70">
              {formatItems.map((f) => (
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

      {/* AFTER THE PROGRAMME */}
      <section className="section-y border-b border-border">
        <div className="container-wide">
          <Reveal className="max-w-3xl mb-14">
            <div className="eyebrow mb-6">Trajectoires</div>
            <h2 className="display-md text-foreground">
              Et <em className="not-italic text-champagne font-display">après</em> ?
            </h2>
            <p className="lede mt-6 max-w-2xl">
              Le programme ouvre plusieurs trajectoires, selon votre point de départ et vos ambitions.
            </p>
          </Reveal>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {afterProgram.map((a, i) => (
              <Reveal key={a} delay={i * 40}>
                <li className="bg-background p-8 h-full flex items-start gap-4">
                  <span className="font-display text-[12px] tracking-[0.22em] text-champagne mt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-display text-[17px] text-foreground leading-snug">{a}</p>
                </li>
              </Reveal>
            ))}
          </ul>
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
              Recevez le programme complet et échangeons sur votre{" "}
              <em className="not-italic text-champagne font-display">positionnement</em>.
            </h2>
            <p className="lede mt-6 max-w-2xl text-ivory/75">
              Que vous soyez en reconversion, en montée en compétence ou en préparation à une mission SAP Finance, nous
              vous aidons à vérifier si ce programme est le bon niveau pour vous.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="champagne">
                <Link to="/contact">
                  Recevoir le programme <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outlineLight">
                <Link to="/contact">Échanger avec un expert</Link>
              </Button>
              <Button asChild size="lg" variant="outlineLight">
                <Link to="/contact">Candidater</Link>
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
                  { icon: BookOpen, label: "Le programme détaillé sur 10 jours" },
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

export default SapFicoConsultantProgram;
