import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Compass, GraduationCap, Target, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import aboutVisual from "@/assets/about-visual.jpg";

const APropos = () => {
  return (
    <>
      <section className="section-y border-b border-border bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="eyebrow mb-6">À propos</div>
            <h1 className="display-lg text-foreground">
              Le partenaire de référence pour la <em className="not-italic text-champagne font-display">montée en compétence</em> et la transformation SAP Finance.
            </h1>
            <div className="mt-6 max-w-2xl space-y-5 text-muted-foreground">
              <p className="lede">
                CBS Finance Institute est un institut spécialisé dédié à la Finance SAP et aux environnements S/4HANA. Nous accompagnons les professionnels et les entreprises dans la maîtrise des processus Finance, leur traduction dans SAP, et la réussite de leurs transformations digitales.
              </p>
              <p className="text-[15px] leading-relaxed">
                Notre approche combine expertise projet, pédagogie opérationnelle et exigence de qualité, afin de former des profils immédiatement performants en environnement réel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="section-y">
        <div className="container-wide grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="eyebrow mb-6">Notre mission</div>
            <h2 className="display-md">Élever durablement le niveau d'expertise Finance SAP.</h2>
            <p className="lede mt-6">
              CBS Finance Institute a été fondé pour offrir aux professionnels et aux entreprises un standard de formation Finance SAP à la hauteur de leurs ambitions : exigeant, structuré, ancré dans le terrain.
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="aspect-[4/5] rounded-sm overflow-hidden">
              <img src={aboutVisual} alt="Composition éditoriale" className="h-full w-full object-cover" loading="lazy" width={1280} height={1600} />
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="section-y bg-secondary">
        <div className="container-wide">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-6">Notre expertise</div>
            <h2 className="display-md">Quatre piliers fondateurs.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Compass, title: "Expertise Finance SAP", text: "Une connaissance fine du fonctionnel et du paramétrage Finance dans SAP." },
              { icon: Target, title: "Compréhension des processus", text: "Une lecture claire des processus métier et de leur traduction système." },
              { icon: Building2, title: "Maîtrise des enjeux de transformation SAP", text: "Une vision stratégique des projets de transformation Finance." },
              { icon: GraduationCap, title: "Pédagogie premium", text: "Un standard pédagogique exigeant, au service de la montée en compétence." },
            ].map((b, i) => (
              <Reveal key={b.title} delay={i * 60} className="card-premium p-7">
                <b.icon className="h-6 w-6 text-champagne" strokeWidth={1.5} />
                <div className="font-display text-lg mt-5">{b.title}</div>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{b.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="section-y bg-ink text-ivory">
        <div className="container-wide grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-6 text-ivory/60">Notre vision</div>
            <h2 className="display-md text-ivory">Devenir la référence française de la formation Finance SAP.</h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 text-ivory/75 leading-relaxed space-y-5">
            <p>Nous portons l'ambition d'aider professionnels et entreprises à renforcer leurs capacités Finance SAP, par des dispositifs pratiques, premium et structurés.</p>
            <p>Notre approche refuse à la fois la dispersion thématique et la légèreté pédagogique. C'est en restant exclusivement spécialisés que nous délivrons un niveau d'expertise réellement utile et différenciant.</p>
          </div>
        </div>
      </section>

      {/* CREDIBILITY */}
      <section className="section-y">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-px bg-border border border-border rounded-sm overflow-hidden">
            {[
              { k: "Spécialisation", v: "100 % Finance SAP" },
              { k: "Pédagogie", v: "Approche terrain et opérationnelle" },
              { k: "Standard", v: "Premium, exigeant et structuré" },
            ].map((c) => (
              <div key={c.k} className="bg-background p-8">
                <div className="text-[10px] uppercase tracking-[0.2em] text-champagne mb-3">{c.k}</div>
                <div className="font-display text-2xl leading-tight">{c.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-y bg-secondary">
        <div className="container-narrow text-center">
          <h2 className="display-md">Échangeons sur votre besoin.</h2>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg" variant="ink"><Link to="/contact">Être contacté <ArrowRight /></Link></Button>
            <Button asChild size="lg" variant="outline"><Link to="/formations">Découvrir les formations</Link></Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default APropos;
