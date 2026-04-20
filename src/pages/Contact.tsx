import { Mail, Phone, Linkedin, GraduationCap, Building2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/forms/ContactForm";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre besoin en Finance SAP, formation ou transformation."
        subtitle="Notre équipe vous répond sous 48 h ouvrées. Pour orienter votre demande, choisissez le canal qui correspond le mieux à votre projet."
      />

      {/* CONTACT OPTIONS */}
      <section className="section-y">
        <div className="container-wide grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-10">
            <div>
              <div className="eyebrow mb-6">Coordonnées</div>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-4 pb-4 border-b border-border">
                  <Mail className="h-5 w-5 text-champagne mt-0.5 shrink-0" strokeWidth={1.5} />
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Email</div>
                    <a href="mailto:contact@cbs-finance-institute.fr" className="hover:text-champagne transition-colors">contact@cbs-finance-institute.fr</a>
                  </div>
                </li>
                <li className="flex items-start gap-4 pb-4 border-b border-border">
                  <Phone className="h-5 w-5 text-champagne mt-0.5 shrink-0" strokeWidth={1.5} />
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Téléphone</div>
                    <a href="tel:+33000000000" className="hover:text-champagne transition-colors">+33 (0)X XX XX XX XX</a>
                  </div>
                </li>
                <li className="flex items-start gap-4 pb-4 border-b border-border">
                  <Linkedin className="h-5 w-5 text-champagne mt-0.5 shrink-0" strokeWidth={1.5} />
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Réseau</div>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-champagne transition-colors">LinkedIn CBS Finance Institute</a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="eyebrow mb-2">Orientations</div>
              <Link to="/formations" className="card-premium p-5 flex items-start gap-4 group">
                <GraduationCap className="h-5 w-5 text-champagne shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <div className="font-display text-base group-hover:text-champagne transition-colors">Demande de formation</div>
                  <div className="text-xs text-muted-foreground mt-1">Recevez le programme et inscrivez-vous à une session.</div>
                </div>
              </Link>
              <Link to="/offres-entreprise" className="card-premium p-5 flex items-start gap-4 group">
                <Building2 className="h-5 w-5 text-champagne shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <div className="font-display text-base group-hover:text-champagne transition-colors">Demande entreprise</div>
                  <div className="text-xs text-muted-foreground mt-1">Échangez avec nous sur un Pack Transformation ou Key Users.</div>
                </div>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
