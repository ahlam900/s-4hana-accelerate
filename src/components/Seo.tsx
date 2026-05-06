import { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface SeoProps {
  /** i18n key for the page title (without site suffix) */
  titleKey?: string;
  /** Plain title fallback (used if titleKey not provided) */
  title?: string;
  /** i18n key for the meta description */
  descriptionKey?: string;
  /** Plain description fallback */
  description?: string;
}

const SITE = "CBS Finance Institute";

/**
 * Per-page SEO component: updates <title> and meta description.
 * Hreflang/canonical are handled globally by SeoHreflang.
 */
const Seo = ({ titleKey, title, descriptionKey, description }: SeoProps) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const resolvedTitle = titleKey ? t(titleKey) : title;
    const resolvedDesc = descriptionKey ? t(descriptionKey) : description;
    const fullTitle = resolvedTitle
      ? (resolvedTitle.includes(SITE) ? resolvedTitle : `${resolvedTitle} | ${SITE}`)
      : undefined;

    if (fullTitle) {
      document.title = fullTitle;
    }

    if (resolvedDesc) {
      let meta = document.head.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }
      meta.content = resolvedDesc;

      let og = document.head.querySelector<HTMLMetaElement>('meta[property="og:description"]');
      if (!og) {
        og = document.createElement("meta");
        og.setAttribute("property", "og:description");
        document.head.appendChild(og);
      }
      og.content = resolvedDesc;
    }

    if (fullTitle) {
      let ogTitle = document.head.querySelector<HTMLMetaElement>('meta[property="og:title"]');
      if (!ogTitle) {
        ogTitle = document.createElement("meta");
        ogTitle.setAttribute("property", "og:title");
        document.head.appendChild(ogTitle);
      }
      ogTitle.content = fullTitle;
    }
  }, [titleKey, title, descriptionKey, description, t, i18n.language]);

  return null;
};

export default Seo;
