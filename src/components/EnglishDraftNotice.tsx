import { useLang } from "@/i18n/useLang";

/** Subtle notice shown on EN routes for pages not yet fully translated. */
const EnglishDraftNotice = () => {
  const { lang } = useLang();
  if (lang !== "en") return null;
  return (
    <div className="bg-secondary border-b border-border">
      <div className="container-wide py-2.5 text-[12px] text-muted-foreground flex items-center gap-3">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-champagne" aria-hidden />
        <span>
          This page is being translated. Some sections may still appear in French —{" "}
          <a href="mailto:contact@cbs-finance-institute.fr" className="underline hover:text-foreground">
            contact us in English
          </a>{" "}
          for any question.
        </span>
      </div>
    </div>
  );
};

export default EnglishDraftNotice;
