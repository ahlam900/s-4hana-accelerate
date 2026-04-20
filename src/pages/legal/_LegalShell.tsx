import PageHero from "@/components/PageHero";

const LegalShell = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <>
    <PageHero eyebrow="Informations légales" title={title} />
    <section className="section-y">
      <div className="container-prose prose prose-sm max-w-none [&_h2]:font-display [&_h2]:text-2xl [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:text-muted-foreground [&_li]:mb-1">
        {children}
      </div>
    </section>
  </>
);

export const Identite = () => (
  <>
    <h2>Identité</h2>
    <p><strong>CBS FINANCE INSTITUTE</strong></p>
    <ul>
      <li>SIRET : 884 903 121 00017</li>
      <li>Déclaration d'activité : 11931243893</li>
      <li>Email : contact@cbs-finance-institute.fr</li>
    </ul>
    <p className="text-xs">L'enregistrement de la déclaration d'activité ne vaut pas agrément de l'État.</p>
  </>
);

export default LegalShell;
