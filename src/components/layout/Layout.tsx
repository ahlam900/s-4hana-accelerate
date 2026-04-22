import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import EnglishDraftNotice from "@/components/EnglishDraftNotice";
import { getLangFromPath, stripLangPrefix } from "@/i18n/useLang";

// Pages whose EN content is fully translated. Others get a polite notice on /en.
const FULLY_TRANSLATED = new Set<string>(["/"]);

const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  const canonical = stripLangPrefix(pathname);
  const lang = getLangFromPath(pathname);
  const isHome = canonical === "/";
  const showNotice = lang === "en" && !FULLY_TRANSLATED.has(canonical);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className={isHome ? "flex-1" : "flex-1 pt-20 md:pt-24"}>
        {showNotice && <EnglishDraftNotice />}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
