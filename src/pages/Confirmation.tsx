import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Confirmation = () => {
  return (
    <section className="section-y">
      <div className="container-narrow text-center py-16">
        <CheckCircle2 className="h-16 w-16 text-champagne mx-auto" strokeWidth={1.5} />
        <h1 className="display-md mt-8">Merci pour votre commande.</h1>
        <p className="lede mt-6 max-w-xl mx-auto">
          Votre commande a bien été enregistrée. Vous recevez un email de confirmation et la livraison de vos produits digitaux suivra dans les plus brefs délais.
        </p>
        <div className="mt-12 flex flex-wrap gap-3 justify-center">
          <Button asChild size="lg" variant="ink"><Link to="/produits-digitaux">Continuer mes achats <ArrowRight /></Link></Button>
          <Button asChild size="lg" variant="outline"><Link to="/">Retour à l'accueil</Link></Button>
        </div>
      </div>
    </section>
  );
};

export default Confirmation;
