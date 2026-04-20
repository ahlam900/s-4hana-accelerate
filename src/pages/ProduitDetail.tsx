import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ShoppingBag, Download, ShieldCheck, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { useCart } from "@/store/cart";
import { toast } from "sonner";

const ProduitDetail = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const add = useCart((s) => s.add);

  if (!product) return <Navigate to="/produits-digitaux" replace />;

  return (
    <>
      <section className="border-b border-border bg-secondary py-6">
        <div className="container-wide">
          <Link to="/produits-digitaux" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" /> Retour aux produits digitaux
          </Link>
        </div>
      </section>

      <section className="section-y">
        <div className="container-wide grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <div className="aspect-[4/5] rounded-sm overflow-hidden relative bg-secondary">
              <div className="absolute inset-0 bg-gradient-to-br from-champagne/25 via-transparent to-ink/15" />
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="font-display text-5xl md:text-6xl text-ink/20 leading-tight text-center">{product.title}</div>
              </div>
              <div className="absolute top-6 left-6 text-[10px] uppercase tracking-[0.2em] bg-background/90 backdrop-blur px-3 py-1.5 rounded-sm">{product.category}</div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="eyebrow mb-6">{product.category}</div>
            <h1 className="display-md">{product.title}</h1>
            <p className="lede mt-6">{product.longDescription}</p>

            <div className="mt-8 grid grid-cols-2 gap-6 text-sm">
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Pour qui</div>
                <div>{product.audience}</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Format</div>
                <div>{product.format}{product.pages && ` · ${product.pages}`}</div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-secondary rounded-sm flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Prix TTC</div>
                <div className="font-display text-4xl mt-1">{product.price}€</div>
              </div>
              <Button size="lg" variant="ink" onClick={() => { add({ id: product.id, title: product.title, price: product.price, format: product.format }); toast.success("Ajouté au panier"); }}>
                <ShoppingBag /> Ajouter au panier
              </Button>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-2"><Download className="h-4 w-4 text-champagne" />Téléchargement immédiat</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-champagne" />Paiement sécurisé</div>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-champagne" />Support inclus</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-secondary">
        <div className="container-wide grid md:grid-cols-2 gap-12">
          <div>
            <div className="eyebrow mb-6">Ce que vous obtenez</div>
            <ul className="space-y-3">
              {product.highlights.map((h) => (
                <li key={h} className="flex gap-3 pb-3 border-b border-border last:border-0">
                  <span className="text-champagne">—</span>
                  <span className="text-sm">{h}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="eyebrow mb-6">Bénéfices attendus</div>
            <ul className="space-y-3">
              {product.benefits.map((b) => (
                <li key={b} className="flex gap-3 pb-3 border-b border-border last:border-0">
                  <span className="text-champagne">—</span>
                  <span className="text-sm">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProduitDetail;
