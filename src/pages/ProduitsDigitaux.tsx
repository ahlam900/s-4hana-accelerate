import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { products, productCategories } from "@/data/products";
import { useCart } from "@/store/cart";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const ProduitsDigitaux = () => {
  const [active, setActive] = useState<string>("Toutes");
  const add = useCart((s) => s.add);
  const filtered = active === "Toutes" ? products : products.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        eyebrow="Produits digitaux"
        title="Des ressources premium pour renforcer votre maîtrise de la Finance SAP."
        subtitle="Playbooks, guides PDF, templates et ressources premium conçus pour les professionnels exigeants."
        primaryCta={{ label: "Découvrir les produits", to: "#catalogue" }}
      />

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
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex-1">{p.shortDescription}</p>
                  <div className="text-xs text-muted-foreground mt-4">{p.audience}</div>
                  <div className="text-xs text-muted-foreground">{p.format}{p.pages && ` · ${p.pages}`}</div>
                  <div className="mt-5 pt-5 border-t border-border flex items-center justify-between gap-3">
                    <div className="font-display text-2xl">{p.price}€</div>
                    <div className="flex gap-2">
                      <Button asChild size="sm" variant="outline">
                        <Link to={`/produits-digitaux/${p.slug}`}>Voir</Link>
                      </Button>
                      <Button size="sm" variant="ink" onClick={() => { add({ id: p.id, title: p.title, price: p.price, format: p.format }); toast.success("Ajouté au panier"); }}>
                        <ShoppingBag className="h-4 w-4" /> Ajouter
                      </Button>
                    </div>
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
          <div className="eyebrow mb-6 justify-center inline-flex">Besoin d'une ressource sur mesure ?</div>
          <h2 className="display-md">Nous concevons aussi des contenus adaptés à votre organisation.</h2>
          <Button asChild size="lg" variant="ink" className="mt-8">
            <Link to="/contact">Nous contacter <ArrowRight /></Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default ProduitsDigitaux;
