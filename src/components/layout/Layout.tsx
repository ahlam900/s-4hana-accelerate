import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className={isHome ? "flex-1" : "flex-1 pt-20 md:pt-24"}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
