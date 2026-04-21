import { Link } from "react-router-dom";
import { Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-ivory-deep text-foreground">
      {/* Top hairline — premium separation from the dark CTA above */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/50 to-transparent" />

      <div className="container-wide pt-20 md:pt-24 pb-10 grid gap-14 lg:grid-cols-12">
        {/* Brand block */}
        <div className="lg:col-span-4 space-y-6">
          <Link to="/" className="flex items-center gap-4 group w-fit">
            <div className="relative h-[52px] w-[52px] rounded-sm gradient-ink flex items-center justify-center shadow-[var(--shadow-card)] ring-1 ring-champagne/30 group-hover:ring-champagne/60 transition-all">
              <span className="font-display text-ivory text-[24px] leading-none tracking-tight">C</span>
              <span className="absolute -bottom-px left-1/2 -translate-x-1/2 h-px w-7 bg-champagne/70" />
            </div>
            <div className="flex flex-col leading-[1.1]">
              <span className="font-display text-[19px] tracking-tight text-foreground">CBS Finance Institute</span>
              <span className="text-[9px] uppercase tracking-[0.34em] text-champagne mt-2">Expertise · Finance SAP</span>
            </div>
          </Link>
          <p className="text-[14px] text-muted-foreground leading-[1.65] max-w-sm">
            Institut premium dédié à la formation Finance SAP, à la transformation digitale et à l'accompagnement des Key Users — pour les professionnels et les entreprises.
          </p>
          <div className="flex flex-col gap-2.5 text-sm pt-1">
            <a
              href="mailto:contact@cbs-finance-institute.fr"
              className="inline-flex items-center gap-2.5 text-foreground/80 hover:text-champagne transition-colors"
            >
              <Mail className="h-4 w-4 text-champagne" /> contact@cbs-finance-institute.fr
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-foreground/80 hover:text-champagne transition-colors"
            >
              <Linkedin className="h-4 w-4 text-champagne" /> LinkedIn
            </a>
          </div>
        </div>

        {/* Institut */}
        <div className="lg:col-span-2">
          <h4 className="text-[10px] uppercase tracking-[0.28em] text-champagne mb-5 font-medium">Institut</h4>
          <ul className="space-y-3 text-sm text-foreground/80">
            <li><Link to="/a-propos" className="hover:text-champagne transition-colors">À propos</Link></li>
            <li><Link to="/ressources" className="hover:text-champagne transition-colors">Ressources</Link></li>
            <li><Link to="/contact" className="hover:text-champagne transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Offres */}
        <div className="lg:col-span-2">
          <h4 className="text-[10px] uppercase tracking-[0.28em] text-champagne mb-5 font-medium">Offres</h4>
          <ul className="space-y-3 text-sm text-foreground/80">
            <li><Link to="/formations" className="hover:text-champagne transition-colors whitespace-nowrap">Formations Finance SAP</Link></li>
            <li><Link to="/offres-entreprise" className="hover:text-champagne transition-colors">Offres entreprise</Link></li>
            <li><Link to="/produits-digitaux" className="hover:text-champagne transition-colors">Produits digitaux</Link></li>
          </ul>
        </div>

        {/* Identité légale */}
        <div className="lg:col-span-4">
          <h4 className="text-[10px] uppercase tracking-[0.28em] text-champagne mb-5 font-medium">Identité légale</h4>
          <div className="text-sm">
            <div className="font-display text-[15px] text-foreground tracking-tight mb-3">CBS FINANCE INSTITUTE</div>
            <dl className="grid grid-cols-[110px_1fr] gap-y-2 text-foreground/75">
              <dt className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground self-center">SIRET</dt>
              <dd className="tabular-nums text-[13.5px]">884 903 121 00017</dd>
              <dt className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground self-center">Déclaration</dt>
              <dd className="tabular-nums text-[13.5px]">11931243893</dd>
            </dl>
            <p className="text-[11.5px] text-muted-foreground pt-4 mt-4 leading-[1.65] border-t border-border italic">
              L'enregistrement de la déclaration d'activité ne vaut pas agrément de l'État.
            </p>
          </div>
        </div>
      </div>
      </div>

      {/* Bottom bar */}
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
