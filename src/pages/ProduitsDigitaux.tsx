import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BellRing, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

import Reveal from "@/components/Reveal";
import { products, productCategories } from "@/data/products";
import Seo from "@/components/Seo";
import { cn } from "@/lib/utils";

const ProduitsDigitaux = () => {
  const [active, setActive] = useState<string>("Toutes");
  const filtered = active === "Toutes" ? products : products.filter((p) => p.category === active);

  return (
    <>
      <Seo titleKey="seo.digital_title" descriptionKey="seo.digital_desc" />
      <section className="hero-uniform bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="eyebrow mb-6">Produits digitaux</div>
            <h1 className="display-lg text-foreground">
              Playbooks, guides et templates <em className="not-italic text-champagne font-display">SAP Finance</em>.
            </h1>
            <p className="lede mt-6 max-w-2xl text-muted-foreground">
              Des outils opérationnels issus de projets S/4HANA réels, prêts à être utilisés en mission ou en formation interne — pour les professionnels et les équipes Finance qui veulent gagner du temps sur l'essentiel.
            </p>
            <ul className="mt-9 space-y-3 max-w-xl border-t border-border pt-7">
              {[
                "Méthodes éprouvées sur des projets S/4HANA réels",
                "Templates directement utilisables en mission",
                "Référentiels pour structurer formation et adoption",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-[14.5px] text-foreground/85 leading-relaxed">
                  <span className="text-champagne shrink-0 mt-0.5">✔</span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button asChild size="lg" variant="ink">
                <Link to="/contact">Demander un accès anticipé <ArrowRight /></Link>
              </Button>
              <p className="mt-4 text-[12.5px] text-muted-foreground inline-flex items-center gap-2">
                <span className="text-champagne">✦</span> Catalogue en cours de finalisation — accès prioritaire sur demande
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="catalogue" className="pt-16">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2">
            {(["Toutes", ...productCategories] as string[]).map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "px-5 h-10 rounded-sm text-sm font-medium transition-all border",
                  active === c
                    ? "bg-ink text-ivory border-ink"
                    : "bg-transparent text-foreground border-border hover:border-ink",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS LIST */}
      <section className="section-y-sm pb-24">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <Reveal key={p.id} delay={i * 50} className="card-premium overflow-hidden flex flex-col group">
                <div className="aspect-[4/3] bg-secondary relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-champagne/20 via-transparent to-ink/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="font-display text-5xl text-ink/15 leading-none">{p.title.split(" ").slice(0, 2).join(" ")}</div>
                  </div>
                  <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] bg-background/90 backdrop-blur px-3 py-1.5 rounded-sm">{p.category}</div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-lg leading-snug">
                    <Link to={`/produits-digitaux/${p.slug}`} className="hover:text-champagne transition-colors">{p.title}</Link>
                  </h3>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{p.shortDescription}</p>
                  <ul className="mt-4 space-y-1.5 flex-1">
                    {p.valueBullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-[13px] text-foreground/80 leading-relaxed">
                        <span className="text-champagne shrink-0 mt-0.5">✔</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-xs text-muted-foreground mt-4">{p.audience}</div>
                  <div className="text-xs text-muted-foreground">{p.format}{p.pages && ` · ${p.pages}`}</div>
                  <div className="mt-5 pt-5 border-t border-border space-y-4">
                    <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-champagne font-semibold">
                      <Clock className="h-3.5 w-3.5" strokeWidth={2} />
                      Disponible prochainement
                    </div>
                    <Button asChild size="sm" variant="outline" className="w-full">
                      <Link to="/contact">
                        <BellRing className="h-4 w-4" /> Être informé du lancement
                      </Link>
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-y bg-secondary">
        <div className="container-narrow text-center">
          <div className="eyebrow mb-6 justify-center inline-flex">Sur mesure</div>
          <h2 className="display-md">
            Vos équipes ont besoin d'un livrable <em className="not-italic text-champagne font-display">spécifique</em> ?
          </h2>
          <p className="lede mt-6 max-w-2xl mx-auto text-muted-foreground">
            Nous concevons playbooks, supports de formation et templates calibrés sur vos processus, votre organisation et votre feuille de route S/4HANA.
          </p>
          <Button asChild size="lg" variant="ink" className="mt-8">
            <Link to="/contact">Demander un livrable sur mesure <ArrowRight /></Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default ProduitsDigitaux;
