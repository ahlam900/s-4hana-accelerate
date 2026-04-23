import { useLang } from "./useLang";

/**
 * Lightweight bilingual helper.
 *
 * Usage inside a component:
 *   const tx = useTx();
 *   <h1>{tx("Bonjour", "Hello")}</h1>
 *
 * Keeps page-level copy collocated with the JSX while honoring the
 * current language (driven by URL prefix `/en`).
 */
export function useTx() {
  const { lang } = useLang();
  return (fr: string, en: string) => (lang === "en" ? en : fr);
}
