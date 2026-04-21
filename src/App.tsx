import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import Formations from "./pages/Formations";
import SapFicoConsultantProgram from "./pages/SapFicoConsultantProgram";
import OffresEntreprise from "./pages/OffresEntreprise";
import ProduitsDigitaux from "./pages/ProduitsDigitaux";
import ProduitDetail from "./pages/ProduitDetail";
import Panier from "./pages/Panier";
import Checkout from "./pages/Checkout";
import Confirmation from "./pages/Confirmation";
import APropos from "./pages/APropos";
import Ressources from "./pages/Ressources";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/legal/MentionsLegales";
import Confidentialite from "./pages/legal/Confidentialite";
import CGV from "./pages/legal/CGV";
import Cookies from "./pages/legal/Cookies";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();


const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
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
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
