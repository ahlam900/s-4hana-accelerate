import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLang, stripLangPrefix, withLang } from "@/i18n/useLang";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  variant?: "default" | "mobile";
}

const LanguageSwitcher = ({ className, variant = "default" }: Props) => {
  const { lang } = useLang();
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();
  const canonical = stripLangPrefix(pathname);

  const go = (target: "fr" | "en") => {
    if (target === lang) return;
    navigate(withLang(canonical, target) + search + hash);
  };

  return (
    <div
      className={cn(
        "inline-flex items-center text-[11px] font-medium tracking-[0.18em] uppercase select-none",
        variant === "default" ? "h-8" : "h-9",
        className,
      )}
      aria-label="Language switcher"
    >
      <button
        type="button"
        onClick={() => go("fr")}
        aria-current={lang === "fr"}
        className={cn(
          "px-2 py-1 transition-colors",
          lang === "fr" ? "text-foreground" : "text-muted-foreground hover:text-foreground",
        )}
      >
        FR
      </button>
      <span className="h-3 w-px bg-border" aria-hidden />
      <button
        type="button"
        onClick={() => go("en")}
        aria-current={lang === "en"}
        className={cn(
          "px-2 py-1 transition-colors",
          lang === "en" ? "text-foreground" : "text-muted-foreground hover:text-foreground",
        )}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
