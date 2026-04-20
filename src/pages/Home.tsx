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
      <section className="relative pt-24 md:pt-28 pb-16 md:pb-20 overflow-hidden bg-secondary">
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
            <p className="lede mt-7 max-w-lg leading-relaxed">
              Excellence Finance SAP : transformation digitale, formation des Key Users et programmes certifiants pour les professionnels exigeants.
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
            <div className="hidden md:block absolute bottom-6 -left-6 lg:-left-10 bg-ink text-ivory p-5 rounded-sm max-w-[240px] shadow-[var(--shadow-lift)] ring-1 ring-champagne/30">
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
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-20 lg:mb-24">
            <div className="lg:col-span-5">
              <div className="eyebrow mb-6">Notre positionnement</div>
              <h2 className="display-md">Trois domaines d'expertise, un seul focus : la <em className="not-italic text-champagne font-display">Finance SAP</em>.</h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end">
              <p className="lede leading-relaxed">
                CBS Finance Institute est exclusivement dédié à la Finance SAP. Notre conviction : la performance d'un projet, d'une équipe ou d'une transformation se construit à l'intersection des processus métier, de leur traduction dans SAP et de la montée en compétence des acteurs.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-border/80 border border-border rounded-sm overflow-hidden shadow-[var(--shadow-soft)]">
            {[
              { icon: Compass, title: "Expertise Finance", text: "Une maîtrise approfondie des processus Finance et de leur traduction dans SAP, pour des projets plus cohérents, plus sécurisés et plus performants." },
              { icon: Sparkles, title: "Transformation Digitale", text: "Un accompagnement structuré des entreprises engagées dans l'évolution de leur Finance SAP, avec une approche orientée adoption, alignement et efficacité opérationnelle." },
              { icon: GraduationCap, title: "Formations opérationnelles", text: "Des programmes premium conçus pour accélérer la montée en compétence des professionnels, des experts et des équipes engagées dans les transformations." },
            ].map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 80}
                className="group relative bg-background p-10 md:p-12 transition-all duration-500 hover:bg-secondary/50"
              >
                <span className="absolute top-0 left-0 h-px w-0 bg-champagne transition-all duration-700 ease-out group-hover:w-full" />
                <div className="flex items-center justify-center h-12 w-12 rounded-sm bg-champagne/[0.07] ring-1 ring-champagne/25 transition-all duration-500 group-hover:bg-champagne/15 group-hover:ring-champagne/50 group-hover:-translate-y-0.5">
                  <p.icon className="h-[22px] w-[22px] text-champagne" strokeWidth={1.4} />
                </div>
                <h3 className="font-display text-[22px] md:text-[23px] font-medium leading-[1.25] mt-8 tracking-tight text-foreground">{p.title}</h3>
                <div className="mt-5 h-px w-8 bg-border transition-all duration-500 group-hover:w-12 group-hover:bg-champagne/60" />
                <p className="text-[14.5px] text-muted-foreground mt-5 leading-[1.7]">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OFFRES PHARES */}
      <section className="section-y bg-secondary">
        <div className="container-wide">
          <div className="max-w-3xl mb-16 lg:mb-20">
            <div className="eyebrow mb-6">Offres phares</div>
            <h2 className="display-md">Trois offres phares pour accompagner vos enjeux <em className="not-italic text-champagne font-display">Finance SAP</em>.</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-7">
            {[
              {
                tag: "Offre individuelle",
                title: "Formations Finance",
                text: "Des formations premium pensées pour les experts SAP, les consultants, les professionnels Finance et les profils en évolution souhaitant renforcer leur maîtrise opérationnelle.",
                cta: { label: "Découvrir les formations", to: "/formations" },
                featured: true,
              },
              {
                tag: "Offre entreprise",
                title: "Pack Transformation Digitale",
                text: "Un accompagnement structuré des entreprises engagées dans leurs enjeux de transformation Finance SAP, avec une approche orientée adoption, alignement et performance.",
                cta: { label: "Découvrir l'offre", to: "/offres-entreprise" },
              },
              {
                tag: "Offre entreprise",
                title: "Pack Formation des Key Users",
                text: "Une offre dédiée à la préparation des utilisateurs clés, à l'adoption des processus, au renforcement de l'autonomie et à la sécurisation du déploiement.",
                cta: { label: "Découvrir l'offre", to: "/offres-entreprise" },
              },
            ].map((o, i) => (
              <Reveal
                key={o.title}
                delay={i * 100}
                className="group relative bg-card border border-border rounded-sm p-9 md:p-11 flex flex-col transition-all duration-500 hover:border-champagne/40 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
              >
                <span className="absolute top-0 left-0 h-px w-0 bg-champagne transition-all duration-700 ease-out group-hover:w-full" />
                <div className="flex items-center gap-2.5 mb-7">
                  <span className="h-px w-5 bg-champagne" />
                  <span className="text-[10px] uppercase tracking-[0.24em] text-champagne font-medium">{o.tag}</span>
                </div>
                <h3 className="font-display text-[26px] md:text-[28px] font-medium leading-[1.2] tracking-tight text-foreground">{o.title}</h3>
                <div className="mt-6 h-px w-10 bg-border transition-all duration-500 group-hover:w-14 group-hover:bg-champagne/60" />
                <p className="text-[14.5px] text-muted-foreground mt-6 leading-[1.7] flex-1">{o.text}</p>
                <Button asChild variant={o.featured ? "ink" : "outline"} className="mt-9 self-start">
                  <Link to={o.cta.to}>{o.cta.label} <ArrowRight /></Link>
                </Button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CBS */}
      <section className="section-y">
        <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="eyebrow mb-6">Pourquoi CBS</div>
            <h2 className="display-md">Une signature unique sur le marché de la <em className="not-italic text-champagne font-display">Finance SAP</em>.</h2>
            <p className="text-[15.5px] text-muted-foreground mt-7 leading-[1.75] max-w-md">
              CBS Finance Institute repose sur une conviction simple : seules les pédagogies ancrées dans le terrain, les processus et les réalités projet produisent une véritable montée en compétence.
            </p>
            <Button asChild variant="outline" className="mt-9">
              <Link to="/a-propos">Découvrir l'institut <ArrowRight /></Link>
            </Button>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-border/80 border border-border rounded-sm overflow-hidden shadow-[var(--shadow-soft)]">
            {[
              { icon: Layers, title: "Spécialisation 100 % Finance SAP" },
              { icon: Briefcase, title: "Approche terrain et opérationnelle" },
              { icon: Compass, title: "Maîtrise des processus et de SAP" },
              { icon: Sparkles, title: "Pédagogie premium et structurée" },
              { icon: Building2, title: "Vision entreprise et transformation" },
              { icon: ShieldCheck, title: "Exigence de qualité et de rigueur" },
            ].map((d, i) => (
              <Reveal
                key={d.title}
                delay={i * 50}
                className="group relative bg-background p-7 md:p-8 flex items-start gap-5 transition-all duration-500 hover:bg-secondary/50"
              >
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

      {/* AUDIENCES */}
      <section className="section-y bg-ink text-ivory">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <div className="eyebrow mb-6 text-ivory/60">À qui s'adresse l'institut</div>
            <h2 className="display-md text-ivory">Conçu pour les professionnels et les organisations exigeantes.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { label: "Professionnels Finance SAP", desc: "Experts souhaitant renforcer leur maîtrise opérationnelle" },
              { label: "Consultants SAP", desc: "Profils en évolution et consultants en renforcement" },
              { label: "Key Users SAP", desc: "Utilisateurs clés préparant leur montée en compétence" },
              { label: "Directions financières", desc: "Décideurs engagés dans la transformation Finance" },
              { label: "Équipes projet SAP", desc: "Acteurs projet en quête d'alignement et d'efficacité" },
              { label: "Entreprises en transformation", desc: "Organisations restructurant leur système et leurs processus" },
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
                      <div className="text-[13px] text-ivory/50 leading-[1.55] mt-2">{a.desc}</div>
                    </div>
                  </div>
                </div>
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
              Le Pack Transformation Digitale SAP et le Pack Formation des Key Users SAP structurent notre offre B2B dédiée aux entreprises souhaitant renforcer l'alignement, l'adoption et la montée en compétence autour de la Finance SAP.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { title: "Pack Transformation Digitale SAP", text: "Accompagnement des entreprises dans leurs enjeux de transformation Finance SAP, d'alignement métier / outil et d'appropriation de nouveaux repères." },
                { title: "Pack Formation des Key Users SAP", text: "Montée en compétence des relais métier, adoption des processus, renforcement de l'autonomie et sécurisation du déploiement." },
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
            <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-[var(--shadow-card)] ring-1 ring-ink/5">
              <img src={productsVisual} alt="Ressources éditoriales premium Finance SAP" className="h-full w-full object-cover" loading="lazy" width={1280} height={960} />
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="eyebrow mb-6">Produits digitaux</div>
            <h2 className="display-md">Des ressources premium pour aller plus loin.</h2>
            <p className="lede mt-6">
              Playbooks, guides PDF, templates et ressources premium conçus pour prolonger la montée en compétence et outiller les professionnels de la Finance SAP au quotidien.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 max-w-md">
              {[
                { icon: BookOpen, label: "Playbooks" },
                { icon: FileText, label: "Guides PDF" },
                { icon: Layers, label: "Templates" },
                { icon: Sparkles, label: "Ressources premium" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4 text-[14.5px] text-foreground/85">
                  <span className="flex items-center justify-center h-8 w-8 rounded-sm bg-champagne/[0.07] ring-1 ring-champagne/25 shrink-0">
                    <c.icon className="h-[15px] w-[15px] text-champagne" strokeWidth={1.5} />
                  </span>
                  <span className="font-display tracking-tight">{c.label}</span>
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
