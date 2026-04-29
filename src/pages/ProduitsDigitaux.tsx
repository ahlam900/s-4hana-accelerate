import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BellRing, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

import Reveal from "@/components/Reveal";
import { products, productCategories } from "@/data/products";
import Seo from "@/components/Seo";
import { cn } from "@/lib/utils";
import { useTx } from "@/i18n/tx";
import { useLang } from "@/i18n/useLang";
import playbookTransformationImage from "@/assets/product-playbook-transformation-finance-sap.jpg";
import guideS4HanaFinanceImage from "@/assets/product-guide-s4hana-finance.jpg";
import processMappingImage from "@/assets/product-template-process-mapping-finance-sap.jpg";
import goLiveChecklistImage from "@/assets/product-checklist-go-live-finance-sap.jpg";
import keyUserKitImage from "@/assets/product-kit-key-user-sap.jpg";
import controllingGuideImage from "@/assets/product-guide-controlling-sap-co.jpg";

const productImages: Record<string, string> = {
  "playbook-sap-finance": playbookTransformationImage,
  "guide-s4hana-finance": guideS4HanaFinanceImage,
  "template-cartographie-processus": processMappingImage,
  "checklist-go-live": goLiveChecklistImage,
  "ressource-key-user": keyUserKitImage,
  "guide-controlling": controllingGuideImage,
  "playbook-cadrage-finance-cible": playbookTransformationImage,
  "template-raci-projet-sap-finance": processMappingImage,
  "kit-hypercare-finance-sap": goLiveChecklistImage,
  "playbook-adoption-post-go-live": keyUserKitImage,
  "template-plan-montee-competence-key-users": processMappingImage,
  "guide-gouvernance-projet-sap-finance": controllingGuideImage,
};

const ProduitsDigitaux = () => {
  const tx = useTx();
  const { localize } = useLang();
  const allLabel = tx("Toutes", "All");
  const [active, setActive] = useState<string>(allLabel);
  const filtered = active === allLabel ? products : products.filter((p) => p.category === active);

  return (
    <>
      <Seo titleKey="seo.digital_title" descriptionKey="seo.digital_desc" />
      <section className="hero-uniform bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="eyebrow mb-6">{tx("Ressources premium", "Premium Resources")}</div>
            <h1 className="display-lg text-foreground">
              {tx("Des ressources premium pour structurer vos enjeux ", "Premium resources to structure your ")}<em className="not-italic text-champagne font-display">{tx("Finance SAP", "SAP Finance")}</em>{tx(".", " priorities.")}
            </h1>
            <p className="lede mt-6 max-w-2xl text-muted-foreground">
              {tx(
                "Playbooks, guides, templates et kits opérationnels conçus pour aider les professionnels et les équipes Finance SAP à cadrer, exécuter, former et sécuriser leurs projets.",
                "Playbooks, guides, templates and operational kits designed to help SAP Finance professionals and teams scope, execute, train and secure their projects."
              )}
            </p>
            <ul className="mt-9 space-y-3 max-w-xl border-t border-border pt-7">
              {[
                tx("Méthodes issues de contextes Finance SAP réels", "Methods drawn from real SAP Finance contexts"),
                tx("Templates directement exploitables en mission", "Templates ready to use in delivery"),
                tx("Supports conçus pour la formation, l'adoption et l'exécution", "Materials designed for training, adoption and execution"),
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-[14.5px] text-foreground/85 leading-relaxed">
                  <span className="text-champagne shrink-0 mt-0.5">✔</span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button asChild size="lg" variant="ink">
                <Link to={localize("/contact")}>{tx("Demander un accès anticipé", "Request early access")} <ArrowRight /></Link>
              </Button>
              <p className="mt-4 text-[12.5px] text-muted-foreground inline-flex items-center gap-2">
                <span className="text-champagne">✦</span> {tx("Catalogue en cours de finalisation · accès prioritaire sur demande", "Catalog being finalized · priority access on request")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="catalogue" className="pt-16">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2">
            {([allLabel, ...productCategories] as string[]).map((c) => (
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
                  {productImages[p.id] ? (
                    <img
                      src={productImages[p.id]}
                      alt={p.title}
                      className="h-full w-full object-cover saturate-[0.82] contrast-[0.96] transition-transform duration-700 group-hover:scale-[1.035]"
                      loading="lazy"
                      width={1280}
                      height={960}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-secondary">
                      <div className="font-display text-5xl text-ink/15 leading-none">{p.title.split(" ").slice(0, 2).join(" ")}</div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/20 to-ink/20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/45 via-transparent to-background/15" />
                  <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] bg-background/90 backdrop-blur px-3 py-1.5 rounded-sm">{p.category}</div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-lg leading-snug">
                    <Link to={localize(`/produits-digitaux/${p.slug}`)} className="hover:text-champagne transition-colors">{p.title}</Link>
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
                      {tx("Disponible prochainement", "Available soon")}
                    </div>
                    <Button asChild size="sm" variant="outline" className="w-full">
                      <Link to={localize("/contact")}>
                        <BellRing className="h-4 w-4" /> {tx("Être informé du lancement", "Get notified at launch")}
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
          <div className="eyebrow mb-6 justify-center inline-flex">{tx("Sur mesure", "Tailored")}</div>
          <h2 className="display-md">
            {tx("Vos équipes ont besoin d'un livrable ", "Your teams need a ")}<em className="not-italic text-champagne font-display">{tx("spécifique", "specific deliverable")}</em> ?
          </h2>
          <p className="lede mt-6 max-w-2xl mx-auto text-muted-foreground">
            {tx(
              "Nous concevons des playbooks, supports de formation, kits opérationnels et templates adaptés à vos processus, à votre organisation et à vos enjeux Finance SAP.",
              "We design playbooks, training materials, operational kits and templates tailored to your processes, organization and SAP Finance priorities."
            )}
          </p>
          <Button asChild size="lg" variant="ink" className="mt-8">
            <Link to={localize("/contact")}>{tx("Demander un livrable sur mesure", "Request a tailored deliverable")} <ArrowRight /></Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default ProduitsDigitaux;
