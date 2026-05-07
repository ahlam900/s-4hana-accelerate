import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { stripLangPrefix, getLangFromPath } from "@/i18n/useLang";

interface SeoProps {
  titleKey?: string;
  title?: string;
  descriptionKey?: string;
  description?: string;
  /** Override canonical URL. Defaults to current path. */
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogType?: string;
  /** Absolute URL or path of the OG image. Defaults to /og-image.png. */
  ogImage?: string;
  /** Set to true to add noindex,nofollow (cart/checkout/confirmation/unsubscribe/404). */
  noindex?: boolean;
}

const SITE = "CBS Finance Institute";
const BASE = "https://www.cbs-institute.com";
const DEFAULT_OG_IMAGE = `${BASE}/og-image.png`;

const Seo = ({
  titleKey,
  title,
  descriptionKey,
  description,
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogUrl,
  ogType = "website",
  ogImage,
  noindex,
}: SeoProps) => {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const lang = getLangFromPath(pathname);

  const resolvedTitle = titleKey ? t(titleKey) : title;
  const resolvedDescription = descriptionKey ? t(descriptionKey) : description;
  const fullTitle = resolvedTitle
    ? (resolvedTitle.includes(SITE) ? resolvedTitle : `${resolvedTitle} | ${SITE}`)
    : undefined;
  const resolvedOgTitle = ogTitle ?? fullTitle;
  const resolvedOgDescription = ogDescription ?? resolvedDescription;

  // Canonical = self URL (lang-aware)
  const canonical = stripLangPrefix(pathname);
  const selfPath = lang === "en" ? (canonical === "/" ? "/en" : `/en${canonical}`) : canonical;
  const resolvedCanonical = canonicalUrl ?? `${BASE}${selfPath}`;
  const resolvedOgUrl = ogUrl ?? resolvedCanonical;
  const resolvedOgImage = ogImage
    ? (ogImage.startsWith("http") ? ogImage : `${BASE}${ogImage.startsWith("/") ? "" : "/"}${ogImage}`)
    : DEFAULT_OG_IMAGE;

  return (
    <Helmet prioritizeSeoTags>
      {fullTitle ? <title>{fullTitle}</title> : null}
      {resolvedDescription ? <meta name="description" content={resolvedDescription} /> : null}
      <link rel="canonical" href={resolvedCanonical} />
      {noindex ? <meta name="robots" content="noindex,nofollow" /> : <meta name="robots" content="index,follow" />}

      {/* Open Graph */}
      {resolvedOgTitle ? <meta property="og:title" content={resolvedOgTitle} /> : null}
      {resolvedOgDescription ? <meta property="og:description" content={resolvedOgDescription} /> : null}
      <meta property="og:url" content={resolvedOgUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE} />
      <meta property="og:locale" content={lang === "en" ? "en_US" : "fr_FR"} />
      <meta property="og:image" content={resolvedOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      {resolvedOgTitle ? <meta name="twitter:title" content={resolvedOgTitle} /> : null}
      {resolvedOgDescription ? <meta name="twitter:description" content={resolvedOgDescription} /> : null}
      <meta name="twitter:image" content={resolvedOgImage} />

      <html lang={i18n.language?.startsWith("en") ? "en" : "fr"} />
    </Helmet>
  );
};

export default Seo;
