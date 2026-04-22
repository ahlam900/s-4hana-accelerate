import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { Lang } from "./index";

/** Detect language from URL prefix `/en/...`. Default = fr. */
export function getLangFromPath(pathname: string): Lang {
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  return "fr";
}

/** Strip `/en` prefix to get the canonical (FR) path. */
export function stripLangPrefix(pathname: string): string {
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3) || "/";
  return pathname;
}

/** Build a path with the given language prefix. */
export function withLang(path: string, lang: Lang): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (lang === "fr") return clean;
  if (clean === "/") return "/en";
  return `/en${clean}`;
}

/** Hook: return current language + helpers, and sync i18n + <html lang>. */
export function useLang() {
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const lang = getLangFromPath(pathname);

  useEffect(() => {
    if (i18n.language !== lang) i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
  }, [lang, i18n]);

  const switchTo = (target: Lang) => {
    if (target === lang) return;
    const canonical = stripLangPrefix(pathname);
    navigate(withLang(canonical, target) + search + hash);
  };

  const localize = (path: string) => withLang(path, lang);

  return { lang, switchTo, localize };
}
