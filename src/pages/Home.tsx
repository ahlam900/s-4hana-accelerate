import { Link } from "react-router-dom";
import { ArrowRight, Compass, GraduationCap, Building2, ShieldCheck, Sparkles, Layers, Users, Briefcase, BookOpen, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import heroVisual from "@/assets/hero-visual.jpg";
import productsVisual from "@/assets/products-visual.jpg";
import corporateVisual from "@/assets/corporate-visual.jpg";

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-24 md:pt-28 pb-20 md:pb-28 overflow-hidden bg-secondary">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />
        <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative">
          <div className="lg:col-span-7 relative z-10">
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="h-px w-8 bg-champagne" />
              <span className="text-[10px] uppercase tracking-[0.32em] text-champagne font-medium">Institut Finance SAP · Depuis 2019</span>
            </div>
            <h1 className="display-xl text-foreground">
              L'institut de référence de la <em className="not-italic text-champagne font-display">Finance SAP</em>.
            </h1>
            <p className="lede mt-7 max-w-xl leading-relaxed">
              Institut dédié à l'excellence Finance SAP : transformation digitale SAP, montée en puissance des Key Users, et formations certifiantes pour professionnels exigeants.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="ink">
                <Link to="/formations">Découvrir les formations <ArrowRight /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/offres-entreprise">Découvrir nos offres entreprises</Link>
              </Button>
            </div>
            <div className="mt-12 pt-6 border-t border-border/70 flex flex-wrap items-center gap-x-10 gap-y-4 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              <span><span className="text-champagne font-semibold">100 %</span> Finance SAP</span>
              <span className="h-3 w-px bg-border" />
              <span>Pédagogie de haut niveau</span>
              <span className="h-3 w-px bg-border" />
              <span>Réseau d'experts SAP</span>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-[var(--shadow-lift)] ring-1 ring-ink/5">
              <img src={heroVisual} alt="Composition architecturale CBS Finance Institute" className="absolute inset-0 h-full w-full object-cover" width={1080} height={1350} />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="hidden md:block absolute -bottom-6 -left-6 lg:-left-10 bg-ink text-ivory p-5 rounded-sm max-w-[240px] shadow-[var(--shadow-lift)] ring-1 ring-champagne/30">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-champagne mb-2.5">
                <span className="h-px w-4 bg-champagne" /> Programme phare
              </div>
              <div className="font-display text-base leading-snug">SAP FICO Consultant Program</div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-ivory/55 mt-2.5 pt-2.5 border-t border-ivory/10">70 h · Cursus certifiant</div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE POSITIONING — 3 piliers */}
      <section className="section-y border-y border-border">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5">
              <div className="eyebrow mb-6">Notre positionnement</div>
              <h2 className="display-md">Trois domaines d'expertise, un seul focus : la Finance SAP.</h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="lede">
                CBS Finance Institute est exclusivement dédié à la Finance SAP. Notre conviction : la performance d'un projet ou d'une équipe se construit à l'intersection des processus métier et de leur traduction dans SAP.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-border border border-border rounded-sm overflow-hidden">
            {[
              { icon: Compass, title: "Expertise Finance SAP", text: "Une connaissance approfondie des processus Finance et de leur paramétrage dans SAP, pour des projets sécurisés et performants." },
              { icon: Sparkles, title: "Transformation Digitale SAP", text: "Un accompagnement structuré des entreprises engagées dans la modernisation de leur Finance dans un environnement SAP." },
              { icon: GraduationCap, title: "Formations SAP opérationnelles", text: "Des programmes premium, orientés terrain, conçus pour générer un impact immédiat sur les compétences et les missions." },
            ].map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="bg-background p-8 md:p-10 hover:bg-secondary transition-colors duration-500">
                <p.icon className="h-7 w-7 text-champagne" strokeWidth={1.5} />
                <h3 className="display-sm mt-6">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OFFRES PHARES */}
      <section className="section-y bg-secondary">
        <div className="container-wide">
          <div className="max-w-2xl mb-16">
            <div className="eyebrow mb-6">Offres phares</div>
            <h2 className="display-md">Trois offres pour répondre à toutes les ambitions Finance SAP.</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                tag: "Formations",
                title: "Formations Finance SAP",
                text: "Des formations premium pour experts SAP, consultants, professionnels Finance et profils en évolution.",
                cta: { label: "Découvrir les formations", to: "/formations" },
                featured: true,
              },
              {
                tag: "Entreprise",
                title: "Pack Transformation Digitale SAP",
                text: "Accompagnement des entreprises dans leurs enjeux de transformation Finance SAP.",
                cta: { label: "Découvrir l'offre", to: "/offres-entreprise" },
              },
              {
                tag: "Entreprise",
                title: "Pack Formation des Key Users SAP",
                text: "Préparation des utilisateurs clés, adoption, autonomie et sécurisation des processus.",
                cta: { label: "Découvrir l'offre", to: "/offres-entreprise" },
              },
            ].map((o, i) => (
              <Reveal key={o.title} delay={i * 100} className="card-premium p-8 md:p-10 flex flex-col">
                <div className="text-[10px] uppercase tracking-[0.2em] text-champagne mb-6">{o.tag}</div>
                <h3 className="display-sm leading-tight">{o.title}</h3>
                <p className="text-sm text-muted-foreground mt-5 leading-relaxed flex-1">{o.text}</p>
                <Button asChild variant={o.featured ? "ink" : "outline"} className="mt-8 self-start">
                  <Link to={o.cta.to}>{o.cta.label} <ArrowRight /></Link>
                </Button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CBS */}
      <section className="section-y">
        <div className="container-wide grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-6">Pourquoi CBS</div>
            <h2 className="display-md">Une signature unique sur le marché de la Finance SAP.</h2>
            <p className="text-muted-foreground mt-6 leading-relaxed">
              Nous avons construit CBS Finance Institute autour d'une conviction simple : seules les pédagogies ancrées dans le terrain produisent une véritable montée en compétence et de vrais résultats projet.
            </p>
            <Button asChild variant="outline" className="mt-8">
              <Link to="/a-propos">En savoir plus sur l'institut <ArrowRight /></Link>
            </Button>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-border border border-border rounded-sm overflow-hidden">
            {[
              { icon: Layers, title: "Spécialisation 100 % Finance SAP" },
              { icon: Briefcase, title: "Approche terrain et opérationnelle" },
              { icon: Compass, title: "Maîtrise des processus et de SAP" },
              { icon: Sparkles, title: "Pédagogie premium et structurée" },
              { icon: Building2, title: "Vision entreprise et transformation" },
              { icon: ShieldCheck, title: "Engagement de qualité et de rigueur" },
            ].map((d, i) => (
              <Reveal key={d.title} delay={i * 50} className="bg-background p-6 md:p-7 flex items-start gap-4">
                <d.icon className="h-5 w-5 text-champagne mt-1 shrink-0" strokeWidth={1.5} />
                <div className="font-display text-base leading-snug">{d.title}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCES */}
      <section className="section-y bg-ink text-ivory">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <div className="eyebrow mb-6 text-ivory/60">À qui s'adresse l'institut</div>
            <h2 className="display-md text-ivory">Conçu pour les professionnels et les organisations exigeantes.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Professionnels SAP Finance",
              "Consultants SAP",
              "Key users SAP",
              "Directions financières",
              "Équipes projet SAP",
              "Entreprises en transformation",
            ].map((a, i) => (
              <Reveal key={a} delay={i * 60} className="border-t border-ivory/15 pt-6">
                <Users className="h-5 w-5 text-champagne" strokeWidth={1.5} />
                <div className="mt-4 font-display text-xl">{a}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CORPORATE PREVIEW */}
      <section className="section-y">
        <div className="container-wide grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="eyebrow mb-6">Offres entreprise</div>
            <h2 className="display-md">Deux packs phares pour vos transformations SAP.</h2>
            <p className="lede mt-6">
              Le Pack Transformation Digitale SAP et le Pack Formation des Key Users SAP forment notre offre B2B dédiée aux entreprises engagées dans une démarche structurée.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { title: "Pack Transformation Digitale SAP", text: "Accompagnement transformation Finance SAP, alignement métier / outil." },
                { title: "Pack Formation des Key Users SAP", text: "Montée en compétence des relais métier, adoption et autonomie." },
              ].map((p) => (
                <div key={p.title} className="flex gap-4 border-l-2 border-champagne pl-5 py-1">
                  <div>
                    <div className="font-display text-lg">{p.title}</div>
                    <div className="text-sm text-muted-foreground mt-1">{p.text}</div>
                  </div>
                </div>
              ))}
            </div>
            <Button asChild size="lg" variant="ink" className="mt-10">
              <Link to="/offres-entreprise">Découvrir nos offres entreprise <ArrowRight /></Link>
            </Button>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="aspect-[16/10] rounded-sm overflow-hidden shadow-[var(--shadow-card)]">
              <img src={corporateVisual} alt="Salle de conseil corporate" className="h-full w-full object-cover" loading="lazy" width={1600} height={1000} />
            </div>
          </div>
        </div>
      </section>

      {/* DIGITAL PRODUCTS PREVIEW */}
      <section className="section-y bg-secondary">
        <div className="container-wide grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-[var(--shadow-card)]">
              <img src={productsVisual} alt="Produits digitaux premium" className="h-full w-full object-cover object-top" loading="lazy" width={1280} height={960} style={{ clipPath: "inset(0 0 10% 0)" }} />
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="eyebrow mb-6">Produits digitaux</div>
            <h2 className="display-md">Des ressources premium pour aller plus loin.</h2>
            <p className="lede mt-6">
              Playbooks, guides PDF, templates et ressources premium pensés pour outiller les professionnels Finance SAP au quotidien.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
              {[
                { icon: BookOpen, label: "Playbooks" },
                { icon: FileText, label: "Guides PDF" },
                { icon: Layers, label: "Templates" },
                { icon: Sparkles, label: "Ressources premium" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-3 text-sm">
                  <c.icon className="h-4 w-4 text-champagne" strokeWidth={1.5} />
                  {c.label}
                </div>
              ))}
            </div>
            <Button asChild size="lg" variant="ink" className="mt-10">
              <Link to="/produits-digitaux">Découvrir les produits digitaux <ArrowRight /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="section-y">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-border border border-border rounded-sm overflow-hidden">
            {[
              { k: "Expert", v: "Positionnement spécialisé exclusivement Finance SAP" },
              { k: "Pratique", v: "Pédagogie ancrée dans le terrain et les cas réels" },
              { k: "Pro", v: "Orientation professionnelle et carrière SAP" },
              { k: "Business", v: "Pertinence directe pour les enjeux entreprise" },
              { k: "Premium", v: "Approche qualitative et structurée" },
            ].map((t, i) => (
              <Reveal key={t.k} delay={i * 50} className="bg-background p-6 md:p-8">
                <div className="text-[10px] uppercase tracking-[0.2em] text-champagne mb-3">{t.k}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{t.v}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-y bg-ink text-ivory">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="eyebrow mb-6 text-ivory/60">Échangeons</div>
            <h2 className="display-lg text-ivory">Échangeons sur votre besoin en Finance SAP.</h2>
            <p className="lede mt-6 text-ivory/70">
              Que vous souhaitiez recevoir un programme de formation, demander un devis pour votre entreprise ou simplement être contacté par notre équipe — nous sommes à votre écoute.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="champagne">
                <Link to="/formations">Recevoir le programme <ArrowRight /></Link>
              </Button>
              <Button asChild size="lg" variant="outlineLight">
                <Link to="/offres-entreprise">Demander un devis</Link>
              </Button>
              <Button asChild size="lg" variant="outlineLight">
                <Link to="/contact"><Mail className="h-4 w-4" /> Être contacté</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
