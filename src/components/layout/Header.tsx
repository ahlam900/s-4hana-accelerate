import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useCart } from "@/store/cart";
import { cn } from "@/lib/utils";
import { LLink, LNavLink } from "@/i18n/LLink";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import logo from "@/assets/cbs-finance-institute-logo.png";

const Header = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const itemCount = useCart((s) => s.items.reduce((n, i) => n + i.quantity, 0));

  const NAV = [
    { to: "/", label: t("nav.home") },
    { to: "/formations", label: t("nav.trainings") },
    { to: "/offres-entreprise", label: t("nav.corporate") },
    { to: "/produits-digitaux", label: t("nav.digital") },
    { to: "/a-propos", label: t("nav.about") },
    { to: "/ressources", label: t("nav.resources") },
    { to: "/contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled || open
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-background/80 backdrop-blur-sm",
      )}
    >
      <div className="container-wide flex items-center justify-between gap-6 h-28 md:h-32 lg:h-36 xl:h-40">
        <LLink
          to="/"
          className="flex items-center shrink-0 h-full"
          aria-label="CBS Finance Institute"
        >
          <img
            src={logo}
            alt="CBS Finance Institute — SAP Finance Expertise"
            className="block w-auto object-contain object-left h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36"
            loading="eager"
            decoding="async"
          />
        </LLink>

        <nav className="hidden lg:flex items-center gap-3 xl:gap-5 whitespace-nowrap mx-auto">
          {NAV.map((item) => (
            <LNavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "text-[11px] xl:text-[12px] font-medium tracking-[0.015em] transition-colors relative py-1.5",
                  isActive
                    ? "text-foreground after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-px after:bg-accent"
                    : "text-muted-foreground hover:text-foreground",
                )
              }
            >
              {item.label}
            </LNavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <LanguageSwitcher className="hidden md:inline-flex" />

          <LLink
            to="/produits-digitaux/panier"
            aria-label={t("nav.cart")}
            className="relative h-10 w-10 inline-flex items-center justify-center text-foreground hover:bg-secondary rounded-sm transition-colors"
          >
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 h-5 min-w-5 px-1 rounded-full bg-accent text-accent-foreground text-[10px] font-semibold inline-flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </LLink>

          <Button asChild size="sm" variant="ink" className="hidden md:inline-flex shrink-0">
            <LLink to="/contact">{t("nav.cta")}</LLink>
          </Button>

          <button
            className="lg:hidden h-10 w-10 inline-flex items-center justify-center text-foreground"
            onClick={() => setOpen((o) => !o)}
            aria-label={t("nav.menu")}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <nav className="container-wide py-6 flex flex-col gap-1">
            {NAV.map((item) => (
              <LNavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "py-3 text-base border-b border-border/60 transition-colors",
                    isActive ? "text-foreground font-medium" : "text-muted-foreground",
                  )
                }
              >
                {item.label}
              </LNavLink>
            ))}
            <div className="pt-4 flex items-center justify-between">
              <LanguageSwitcher variant="mobile" />
            </div>
            <Button asChild size="lg" variant="ink" className="mt-3">
              <LLink to="/contact">{t("nav.cta")}</LLink>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
