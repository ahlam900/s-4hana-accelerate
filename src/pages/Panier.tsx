import { Link } from "react-router-dom";
import { ArrowRight, Trash2, Minus, Plus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/store/cart";

const Panier = () => {
  const { items, setQuantity, remove, total } = useCart();
  const subtotal = total();

  if (items.length === 0) {
    return (
      <section className="section-y">
        <div className="container-narrow text-center py-16">
          <ShoppingBag className="h-12 w-12 text-champagne mx-auto" strokeWidth={1.5} />
          <h1 className="display-md mt-6">Votre panier est vide.</h1>
          <p className="lede mt-4">Découvrez nos ressources premium dédiées à la Finance SAP.</p>
          <Button asChild size="lg" variant="ink" className="mt-8">
            <Link to="/produits-digitaux">Voir les produits digitaux <ArrowRight /></Link>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="section-y">
      <div className="container-wide">
        <div className="eyebrow mb-6">Votre panier</div>
        <h1 className="display-md mb-12">{items.length} article{items.length > 1 ? "s" : ""} dans votre panier.</h1>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-3">
            {items.map((item) => (
              <div key={item.id} className="card-premium p-6 flex flex-wrap items-center gap-6">
                <div className="flex-1 min-w-[200px]">
                  <div className="font-display text-lg leading-tight">{item.title}</div>
                  <div className="text-xs text-muted-foreground mt-1">{item.format}</div>
                </div>
                <div className="flex items-center border border-border rounded-sm">
                  <button onClick={() => setQuantity(item.id, item.quantity - 1)} className="h-9 w-9 inline-flex items-center justify-center hover:bg-secondary"><Minus className="h-3.5 w-3.5" /></button>
                  <div className="w-10 text-center text-sm">{item.quantity}</div>
                  <button onClick={() => setQuantity(item.id, item.quantity + 1)} className="h-9 w-9 inline-flex items-center justify-center hover:bg-secondary"><Plus className="h-3.5 w-3.5" /></button>
                </div>
                <div className="font-display text-xl w-20 text-right">{(item.price * item.quantity).toFixed(0)}€</div>
                <button onClick={() => remove(item.id)} className="h-9 w-9 inline-flex items-center justify-center text-muted-foreground hover:text-destructive">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="lg:col-span-4">
            <div className="card-premium p-7 sticky top-28">
              <div className="text-[10px] uppercase tracking-[0.2em] text-champagne mb-5">Récapitulatif</div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Sous-total</span><span>{subtotal.toFixed(0)}€</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">TVA incluse</span><span>—</span></div>
              </div>
              <div className="border-t border-border my-5 pt-5 flex justify-between items-baseline">
                <span className="font-medium">Total TTC</span>
                <span className="font-display text-3xl">{subtotal.toFixed(0)}€</span>
              </div>
              <Button asChild size="lg" variant="ink" className="w-full">
                <Link to="/produits-digitaux/checkout">Passer commande <ArrowRight /></Link>
              </Button>
              <Button asChild variant="link" className="w-full mt-3">
                <Link to="/produits-digitaux">Continuer mes achats</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Panier;
