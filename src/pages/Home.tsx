import { ArrowRight, Compass, GraduationCap, Building2, ShieldCheck, Sparkles, Layers, Users, Briefcase, BookOpen, FileText, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import { LLink } from "@/i18n/LLink";
import Seo from "@/components/Seo";
import heroVisual from "@/assets/hero-visual.jpg";
import productsVisual from "@/assets/products-visual.jpg";
import corporateVisual from "@/assets/corporate-visual.jpg";

const Home = () => {
  const { t } = useTranslation();

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
      <Seo titleKey="seo.home_title" descriptionKey="seo.home_desc" />
      {/* HERO */}
      <section className="relative pt-24 md:pt-28 pb-16 md:pb-20 overflow-hidden bg-secondary">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />
        <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-20 items-center relative">
          <div className="lg:col-span-7 relative z-10">
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="h-px w-8 bg-champagne" />
              <span className="text-[10px] uppercase tracking-[0.32em] text-champagne font-medium">{t("home.eyebrow")}</span>
            </div>
            <h1 className="display-xl text-foreground">
              {t("home.title_a")}<em className="not-italic text-champagne font-display">{t("home.title_em")}</em>{t("home.title_b")}
            </h1>
            <p className="lede mt-7 max-w-lg leading-relaxed">{t("home.lede")}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="ink">
                <LLink to="/formations">{t("home.cta_trainings")} <ArrowRight /></LLink>
              </Button>
              <Button asChild size="lg" variant="outline">
                <LLink to="/offres-entreprise">{t("home.cta_corporate")}</LLink>
              </Button>
            </div>
            <div className="mt-12 pt-6 border-t border-border/70 grid grid-cols-1 sm:grid-cols-3 sm:divide-x divide-border max-w-2xl">
              <span className="flex items-center justify-center sm:justify-start sm:px-5 first:sm:pl-0 py-2 sm:py-0 text-center sm:text-left text-[11px] leading-[1.4] uppercase tracking-[0.2em] font-medium text-muted-foreground">
                {t("home.trust_1")}
              </span>
              <span className="flex items-center justify-center sm:px-5 py-2 sm:py-0 text-center text-[11px] leading-[1.4] uppercase tracking-[0.2em] font-medium text-muted-foreground">
                {t("home.trust_2")}
              </span>
              <span className="flex items-center justify-center sm:justify-end sm:px-5 last:sm:pr-0 py-2 sm:py-0 text-center sm:text-right text-[11px] leading-[1.4] uppercase tracking-[0.2em] font-medium text-muted-foreground">
                {t("home.trust_3")}
              </span>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-[var(--shadow-lift)] ring-1 ring-ink/5">
              <img src={heroVisual} alt="CBS Finance Institute" className="absolute inset-0 h-full w-full object-cover" width={1080} height={1350} />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="hidden md:block absolute bottom-8 -left-5 lg:-left-8 bg-ink/95 backdrop-blur-sm text-ivory p-4 rounded-sm max-w-[220px] shadow-[var(--shadow-lift)] ring-1 ring-champagne/20">
              <div className="flex items-center gap-2 text-[9.5px] uppercase tracking-[0.28em] text-champagne mb-2">
                <span className="h-px w-4 bg-champagne" /> {t("home.flagship")}
              </div>
              <div className="font-display text-[15px] leading-snug">{t("home.flagship_program")}</div>
              <div className="text-[10.5px] uppercase tracking-[0.18em] text-ivory/55 mt-2 pt-2 border-t border-ivory/10">{t("home.flagship_meta")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE POSITIONING */}
      <section className="section-y border-y border-border">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-20 lg:mb-24">
            <div className="lg:col-span-5">
              <div className="eyebrow mb-6">{t("home.positioning_eyebrow")}</div>
              <h2 className="display-md">{t("home.positioning_title_a")}<em className="not-italic text-champagne font-display">{t("home.positioning_title_em")}</em>{t("home.positioning_title_b")}</h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end">
              <p className="lede leading-relaxed">{t("home.positioning_lede")}</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-border/80 border border-border rounded-sm overflow-hidden shadow-[var(--shadow-soft)]">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="group relative bg-background p-10 md:p-12 transition-all duration-500 hover:bg-secondary/50">
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
            <div className="eyebrow mb-6">{t("home.offers_eyebrow")}</div>
            <h2 className="display-md">{t("home.offers_title_a")}<em className="not-italic text-champagne font-display">{t("home.offers_title_em")}</em>{t("home.offers_title_b")}</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-7">
            {offers.map((o, i) => (
              <Reveal key={o.title} delay={i * 100} className="group relative bg-card border border-border rounded-sm p-9 md:p-11 flex flex-col transition-all duration-500 hover:border-champagne/40 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                <span className="absolute top-0 left-0 h-px w-0 bg-champagne transition-all duration-700 ease-out group-hover:w-full" />
                <div className="flex items-center gap-2.5 mb-7">
                  <span className="h-px w-5 bg-champagne" />
                  <span className="text-[10px] uppercase tracking-[0.24em] text-champagne font-medium">{o.tag}</span>
                </div>
                <h3 className="font-display text-[26px] md:text-[28px] font-medium leading-[1.2] tracking-tight text-foreground">{o.title}</h3>
                <div className="mt-6 h-px w-10 bg-border transition-all duration-500 group-hover:w-14 group-hover:bg-champagne/60" />
                <p className="text-[14.5px] text-muted-foreground mt-6 leading-[1.7] flex-1">{o.text}</p>
                <Button asChild variant={o.featured ? "ink" : "outline"} className="mt-9 self-start">
                  <LLink to={o.cta.to}>{o.cta.label} <ArrowRight /></LLink>
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
            <div className="eyebrow mb-6">{t("home.why_eyebrow")}</div>
            <h2 className="display-md">{t("home.why_title_a")}<em className="not-italic text-champagne font-display">{t("home.why_title_em")}</em>{t("home.why_title_b")}</h2>
            <p className="text-[15.5px] text-muted-foreground mt-7 leading-[1.75] max-w-md">{t("home.why_text")}</p>
            <Button asChild variant="outline" className="mt-9">
              <LLink to="/a-propos">{t("home.why_cta")} <ArrowRight /></LLink>
            </Button>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-border/80 border border-border rounded-sm overflow-hidden shadow-[var(--shadow-soft)]">
            {whyItems.map((d, i) => (
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

      {/* AUDIENCES */}
      <section className="section-y bg-ink text-ivory">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <div className="eyebrow mb-6 text-ivory/60">{t("home.audience_eyebrow")}</div>
            <h2 className="display-md text-ivory">{t("home.audience_title")}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {audiences.map((a, i) => (
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
            <div className="eyebrow mb-6">{t("home.corp_eyebrow")}</div>
            <h2 className="display-md">{t("home.corp_title")}</h2>
            <p className="lede mt-6">{t("home.corp_lede")}</p>
            <div className="mt-8 space-y-4">
              {[
                { title: t("home.corp_p1_title"), text: t("home.corp_p1_text") },
                { title: t("home.corp_p2_title"), text: t("home.corp_p2_text") },
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
              <LLink to="/offres-entreprise">{t("home.corp_cta")} <ArrowRight /></LLink>
            </Button>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="aspect-[16/10] rounded-sm overflow-hidden shadow-[var(--shadow-card)]">
              <img src={corporateVisual} alt="Corporate boardroom" className="h-full w-full object-cover" loading="lazy" width={1600} height={1000} />
            </div>
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
