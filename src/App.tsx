import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/layout/Layout";
import SeoHreflang from "./i18n/SeoHreflang";

// Eager: home (LCP-critical)
import Home from "./pages/Home";

// Lazy: rest of the pages
const Formations = lazy(() => import("./pages/Formations"));
const SapFicoConsultantProgram = lazy(() => import("./pages/SapFicoConsultantProgram"));
const OffresEntreprise = lazy(() => import("./pages/OffresEntreprise"));
const ProduitsDigitaux = lazy(() => import("./pages/ProduitsDigitaux"));
const ProduitDetail = lazy(() => import("./pages/ProduitDetail"));
const Panier = lazy(() => import("./pages/Panier"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Confirmation = lazy(() => import("./pages/Confirmation"));
const APropos = lazy(() => import("./pages/APropos"));
const Ressources = lazy(() => import("./pages/Ressources"));
const Contact = lazy(() => import("./pages/Contact"));
const MentionsLegales = lazy(() => import("./pages/legal/MentionsLegales"));
const Confidentialite = lazy(() => import("./pages/legal/Confidentialite"));
const CGV = lazy(() => import("./pages/legal/CGV"));
const Cookies = lazy(() => import("./pages/legal/Cookies"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const RouteFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="h-6 w-6 rounded-full border-2 border-champagne/30 border-t-champagne animate-spin" aria-label="Loading" />
  </div>
);

const AppRoutes = () => (
  <Suspense fallback={<RouteFallback />}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/formations" element={<Formations />} />
      <Route path="/formations/sap-fico-consultant-program" element={<SapFicoConsultantProgram />} />
      <Route path="/offres-entreprise" element={<OffresEntreprise />} />
      <Route path="/produits-digitaux" element={<ProduitsDigitaux />} />
      <Route path="/produits-digitaux/panier" element={<Panier />} />
      <Route path="/produits-digitaux/checkout" element={<Checkout />} />
      <Route path="/produits-digitaux/confirmation" element={<Confirmation />} />
      <Route path="/produits-digitaux/:slug" element={<ProduitDetail />} />
      <Route path="/a-propos" element={<APropos />} />
      <Route path="/ressources" element={<Ressources />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/mentions-legales" element={<MentionsLegales />} />
      <Route path="/confidentialite" element={<Confidentialite />} />
      <Route path="/cgv" element={<CGV />} />
      <Route path="/cookies" element={<Cookies />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <SeoHreflang />
        <Layout>
          <Routes>
            <Route path="/en/*" element={<AppRoutes />} />
            <Route path="/*" element={<AppRoutes />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
