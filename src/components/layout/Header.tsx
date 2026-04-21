import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/store/cart";
import { cn } from "@/lib/utils";
import logo from "@/assets/cbs-finance-institute-logo.png";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/formations", label: "Formations Finance SAP" },
  { to: "/offres-entreprise", label: "Offres entreprise" },
  { to: "/produits-digitaux", label: "Produits digitaux" },
  { to: "/a-propos", label: "À propos" },
  { to: "/ressources", label: "Ressources" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const itemCount = useCart((s) => s.items.reduce((n, i) => n + i.quantity, 0));

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
      <div className="container-wide grid grid-cols-[auto_1fr_auto] items-center gap-8 lg:gap-12 xl:gap-16 h-24 md:h-28 lg:h-32">
        <Link to="/" className="flex items-center group shrink-0" aria-label="CBS Finance Institute — Accueil">
          <img
            src={logo}
            alt="CBS Finance Institute — Expertise Finance SAP"
            className="h-20 sm:h-24 md:h-[104px] lg:h-[120px] xl:h-[132px] w-auto object-contain transition-opacity group-hover:opacity-90"
            loading="eager"
            decoding="async"
          />
        </Link>

        <nav className="hidden lg:flex items-center justify-center gap-x-8 xl:gap-x-10">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "text-[13px] font-medium tracking-wide transition-colors relative py-1 whitespace-nowrap",
                  isActive
                    ? "text-foreground after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-px after:bg-accent"
                    : "text-muted-foreground hover:text-foreground",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3 justify-self-end">
          <Link
            to="/produits-digitaux/panier"
            aria-label="Panier"
            className="relative h-10 w-10 inline-flex items-center justify-center text-foreground hover:bg-secondary rounded-sm transition-colors"
          >
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 h-5 min-w-5 px-1 rounded-full bg-accent text-accent-foreground text-[10px] font-semibold inline-flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>

          <Button asChild size="sm" variant="ink" className="hidden md:inline-flex">
            <Link to="/contact">Parler à un expert</Link>
          </Button>

          <button
            className="lg:hidden h-10 w-10 inline-flex items-center justify-center text-foreground"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <nav className="container-wide py-6 flex flex-col gap-1">
            {NAV.map((item) => (
              <NavLink
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
              </NavLink>
            ))}
            <Button asChild size="lg" variant="ink" className="mt-4">
              <Link to="/contact">Parler à un expert</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
