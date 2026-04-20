import { Link } from "react-router-dom";
import { ArrowRight, Download, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const articles = [
  { tag: "Processus", title: "Comprendre les processus Finance dans SAP", excerpt: "Une lecture claire de Record-to-Report, Order-to-Cash et Procure-to-Pay dans un environnement SAP." },
  { tag: "S/4HANA", title: "S/4HANA Finance : ce qui change vraiment", excerpt: "Universal Journal, modèle de données simplifié, impacts métier — l'essentiel à comprendre." },
  { tag: "Transformation", title: "Réussir une transformation digitale Finance SAP", excerpt: "Cadrage, gouvernance et bonnes pratiques pour piloter votre programme." },
  { tag: "Key User", title: "Le rôle clé du Key User SAP", excerpt: "Pourquoi le Key User est le pilier de l'adoption SAP et comment bien le préparer." },
  { tag: "Adoption", title: "Adoption et formation SAP : les leviers d'efficacité", excerpt: "Construire un dispositif de formation qui produit un véritable impact opérationnel." },
  { tag: "Bonnes pratiques", title: "Bonnes pratiques Finance SAP", excerpt: "Recommandations issues de notre expérience pour sécuriser vos projets." },
];

const Ressources = () => {
  return (
    <>
      <PageHero
        eyebrow="Ressources"
        title="Contenus, analyses et expertises autour de la Finance SAP."
        subtitle="Articles, expert insights et ressources téléchargeables sur la Finance SAP, les processus et la transformation digitale SAP."
      />

      {/* LISTING */}
      <section className="section-y">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a, i) => (
              <Reveal key={a.title} delay={i * 50} className="card-premium p-7 flex flex-col group">
                <div className="text-[10px] uppercase tracking-[0.2em] text-champagne mb-5">{a.tag}</div>
                <h3 className="font-display text-xl leading-snug">{a.title}</h3>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed flex-1">{a.excerpt}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-champagne transition-colors">
                  <BookOpen className="h-4 w-4" /> Bientôt disponible
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-y bg-ink text-ivory">
        <div className="container-narrow text-center">
          <div className="eyebrow mb-6 text-ivory/60 justify-center inline-flex">Aller plus loin</div>
          <h2 className="display-md text-ivory">Trois façons d'avancer avec CBS Finance Institute.</h2>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg" variant="champagne"><Link to="/formations">Découvrir les formations <ArrowRight /></Link></Button>
            <Button asChild size="lg" variant="outlineLight"><Link to="/offres-entreprise">Découvrir nos offres entreprise</Link></Button>
            <Button asChild size="lg" variant="outlineLight"><Link to="/produits-digitaux"><Download className="h-4 w-4" /> Télécharger une ressource</Link></Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ressources;
