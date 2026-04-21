import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin } from "lucide-react";
import logo from "@/assets/cbs-finance-institute-logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-foreground border-t border-border">
      <div className="container-wide py-16 md:py-20 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4 space-y-5">
          <Link to="/" className="inline-flex items-center group" aria-label="CBS Finance Institute — Accueil">
            <img
              src={logo}
              alt="CBS Finance Institute — Expertise Finance SAP"
              className="h-12 md:h-14 w-auto object-contain transition-opacity group-hover:opacity-90"
              loading="lazy"
              decoding="async"
            />
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
            Institut premium dédié à la formation Finance SAP, à la transformation digitale SAP et à la formation des Key Users SAP, pour les professionnels et les entreprises.
          </p>
          <div className="flex flex-col gap-2 text-sm text-foreground/80 pt-2">
            <a href="mailto:contact@cbs-finance-institute.fr" className="inline-flex items-center gap-2 hover:text-champagne transition-colors">
              <Mail className="h-4 w-4" /> contact@cbs-finance-institute.fr
            </a>
            <a href="tel:+33000000000" className="inline-flex items-center gap-2 hover:text-champagne transition-colors">
              <Phone className="h-4 w-4" /> +33 (0)X XX XX XX XX
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-champagne transition-colors">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-[11px] uppercase tracking-[0.2em] text-champagne mb-4">Institut</h4>
          <ul className="space-y-2.5 text-sm text-foreground/80">
            <li><Link to="/a-propos" className="hover:text-champagne transition-colors">À propos</Link></li>
            <li><Link to="/ressources" className="hover:text-champagne transition-colors">Ressources</Link></li>
            <li><Link to="/contact" className="hover:text-champagne transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-[11px] uppercase tracking-[0.2em] text-champagne mb-4">Offres</h4>
          <ul className="space-y-2.5 text-sm text-foreground/80">
            <li><Link to="/formations" className="hover:text-champagne transition-colors">Formations Finance SAP</Link></li>
            <li><Link to="/offres-entreprise" className="hover:text-champagne transition-colors">Offres entreprise</Link></li>
            <li><Link to="/produits-digitaux" className="hover:text-champagne transition-colors">Produits digitaux</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h4 className="text-[11px] uppercase tracking-[0.2em] text-champagne mb-4">Identité légale</h4>
          <div className="text-sm text-muted-foreground space-y-1.5">
            <div className="font-medium text-foreground">CBS FINANCE INSTITUTE</div>
            <div>SIRET : 884 903 121 00017</div>
            <div>Déclaration d'activité : 11931243893</div>
            <div className="text-xs text-muted-foreground/80 pt-2">
              L'enregistrement de la déclaration d'activité ne vaut pas agrément de l'État.
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-wide py-6 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} CBS Finance Institute. Tous droits réservés.</div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link to="/mentions-legales" className="hover:text-champagne transition-colors">Mentions légales</Link>
            <Link to="/confidentialite" className="hover:text-champagne transition-colors">Confidentialité</Link>
            <Link to="/cgv" className="hover:text-champagne transition-colors">CGV</Link>
            <Link to="/cookies" className="hover:text-champagne transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
