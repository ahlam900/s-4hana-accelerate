import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useLang, stripLangPrefix, withLang } from "./useLang";

const BASE = "https://www.cbs-institute.com";

/** Renders canonical and hreflang tags into the document head. */
const SeoHreflang = () => {
  const { pathname } = useLocation();
  const { lang } = useLang();

  const canonical = stripLangPrefix(pathname);
  const frUrl = `${BASE}${withLang(canonical, "fr")}`;
  const enUrl = `${BASE}${withLang(canonical, "en")}`;
  const selfUrl = lang === "en" ? enUrl : frUrl;

  return (
    <Helmet>
      <link rel="canonical" href={selfUrl} />
      <link rel="alternate" hrefLang="fr" href={frUrl} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="x-default" href={frUrl} />
    </Helmet>
  );
};

export default SeoHreflang;
