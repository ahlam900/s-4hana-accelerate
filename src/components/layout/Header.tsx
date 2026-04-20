import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/store/cart";
import { cn } from "@/lib/utils";

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
      <div className="container-wide flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-9 w-9 rounded-sm gradient-ink flex items-center justify-center">
            <span className="font-display text-ivory text-lg leading-none">C</span>
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-[15px] tracking-tight text-foreground">CBS Finance Institute</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Expertise Finance SAP</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "text-[13px] font-medium transition-colors relative py-1",
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

        <div className="flex items-center gap-2">
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
            <Link to="/contact">Être contacté</Link>
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
              <Link to="/contact">Être contacté</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
