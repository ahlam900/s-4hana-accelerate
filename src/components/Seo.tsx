import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

interface SeoProps {
  /** i18n key for the page title (without site suffix) */
  titleKey?: string;
  /** Plain title fallback (used if titleKey not provided) */
  title?: string;
  /** i18n key for the meta description */
  descriptionKey?: string;
  /** Plain description fallback */
  description?: string;
  /** Plain canonical URL fallback */
  canonicalUrl?: string;
  /** Plain Open Graph title fallback */
  ogTitle?: string;
  /** Plain Open Graph description fallback */
  ogDescription?: string;
  /** Plain Open Graph URL fallback */
  ogUrl?: string;
  /** Open Graph type */
  ogType?: string;
}

const SITE = "CBS Finance Institute";

/**
 * Per-page SEO component rendered into the actual document <head>.
 */
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
}: SeoProps) => {
  const { t, i18n } = useTranslation();

  const resolvedTitle = titleKey ? t(titleKey) : title;
  const resolvedDescription = descriptionKey ? t(descriptionKey) : description;
  const fullTitle = resolvedTitle
    ? (resolvedTitle.includes(SITE) ? resolvedTitle : `${resolvedTitle} | ${SITE}`)
    : undefined;
  const resolvedOgTitle = ogTitle ?? fullTitle;
  const resolvedOgDescription = ogDescription ?? resolvedDescription;

  return (
    <Helmet prioritizeSeoTags>
      {fullTitle ? <title>{fullTitle}</title> : null}
      {resolvedDescription ? <meta name="description" content={resolvedDescription} /> : null}
      {canonicalUrl ? <link rel="canonical" href={canonicalUrl} /> : null}
      {resolvedOgTitle ? <meta property="og:title" content={resolvedOgTitle} /> : null}
      {resolvedOgDescription ? <meta property="og:description" content={resolvedOgDescription} /> : null}
      {ogUrl ? <meta property="og:url" content={ogUrl} /> : null}
      {ogType ? <meta property="og:type" content={ogType} /> : null}
      {resolvedOgTitle ? <meta name="twitter:title" content={resolvedOgTitle} /> : null}
      {resolvedOgDescription ? <meta name="twitter:description" content={resolvedOgDescription} /> : null}
      <html lang={i18n.language?.startsWith("en") ? "en" : "fr"} />
    </Helmet>
  );
};

export default Seo;
