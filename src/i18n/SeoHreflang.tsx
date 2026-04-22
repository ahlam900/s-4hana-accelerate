import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLang, stripLangPrefix, withLang } from "./useLang";

const BASE = "https://cbs-finance-institute.fr";

/** Injects/updates <link rel="alternate" hreflang> and <link rel="canonical">. */
const SeoHreflang = () => {
  const { pathname } = useLocation();
  const { lang } = useLang();

  useEffect(() => {
    const canonical = stripLangPrefix(pathname);
    const frUrl = `${BASE}${withLang(canonical, "fr")}`;
    const enUrl = `${BASE}${withLang(canonical, "en")}`;
    const selfUrl = lang === "en" ? enUrl : frUrl;

    const set = (rel: string, href: string, hreflang?: string) => {
      const sel = hreflang
        ? `link[rel="${rel}"][hreflang="${hreflang}"]`
        : `link[rel="${rel}"]`;
      let el = document.head.querySelector<HTMLLinkElement>(sel);
      if (!el) {
        el = document.createElement("link");
        el.rel = rel;
        if (hreflang) el.hreflang = hreflang;
        document.head.appendChild(el);
      }
      el.href = href;
    };

    set("canonical", selfUrl);
    set("alternate", frUrl, "fr");
    set("alternate", enUrl, "en");
    set("alternate", frUrl, "x-default");
  }, [pathname, lang]);

  return null;
};

export default SeoHreflang;
