import { Mail, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LLink } from "@/i18n/LLink";
import logo from "@/assets/cbs-finance-institute-logo.png";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-secondary text-foreground border-t border-border">
      <div className="container-wide py-16 md:py-20 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4 space-y-6">
          <LLink to="/" className="inline-flex items-center group" aria-label="CBS Finance Institute">
            <img
              src={logo}
              alt="CBS Finance Institute"
              className="h-8 sm:h-9 md:h-10 lg:h-11 xl:h-[48px] w-auto object-contain transition-opacity group-hover:opacity-90"
              loading="lazy"
              decoding="async"
            />
          </LLink>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
            {t("footer.tagline")}
          </p>
          <div className="flex flex-col gap-2.5 text-sm text-foreground/80 pt-1">
            <a href="mailto:contact@cbs-institute.com" className="inline-flex items-center gap-2 hover:text-champagne transition-colors">
              <Mail className="h-4 w-4" /> contact@cbs-institute.com
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-champagne transition-colors">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-[11px] uppercase tracking-[0.2em] text-champagne mb-4">{t("footer.institute")}</h4>
          <ul className="space-y-2.5 text-sm text-foreground/80">
            <li><LLink to="/a-propos" className="hover:text-champagne transition-colors">{t("nav.about")}</LLink></li>
            <li><LLink to="/ressources" className="hover:text-champagne transition-colors">{t("nav.resources")}</LLink></li>
            <li><LLink to="/contact" className="hover:text-champagne transition-colors">{t("nav.contact")}</LLink></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-[11px] uppercase tracking-[0.2em] text-champagne mb-4">{t("footer.offers")}</h4>
          <ul className="space-y-2.5 text-sm text-foreground/80">
            <li><LLink to="/formations" className="hover:text-champagne transition-colors">{t("nav.trainings")}</LLink></li>
            <li><LLink to="/offres-entreprise" className="hover:text-champagne transition-colors">{t("nav.corporate")}</LLink></li>
            <li><LLink to="/produits-digitaux" className="hover:text-champagne transition-colors">{t("nav.digital")}</LLink></li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h4 className="text-[11px] uppercase tracking-[0.2em] text-champagne mb-4">{t("footer.legal")}</h4>
          <div className="text-sm text-muted-foreground space-y-1.5">
            <div className="font-medium text-foreground">CBS FINANCE INSTITUTE</div>
            <div>SIRET : 884 903 121 00017</div>
            <div>Déclaration d'activité : 11931243893</div>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-wide py-6 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} CBS Finance Institute. {t("footer.rights")}</div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <LLink to="/mentions-legales" className="hover:text-champagne transition-colors">{t("footer.mentions")}</LLink>
            <LLink to="/confidentialite" className="hover:text-champagne transition-colors">{t("footer.privacy")}</LLink>
            <LLink to="/cgv" className="hover:text-champagne transition-colors">{t("footer.cgv")}</LLink>
            <LLink to="/cookies" className="hover:text-champagne transition-colors">{t("footer.cookies")}</LLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
