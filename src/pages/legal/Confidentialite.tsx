import LegalShell, { Identite } from "./_LegalShell";

const Confidentialite = () => (
  <LegalShell title="Politique de confidentialité">
    <Identite />
    <h2>Données collectées</h2>
    <p>Nous collectons les données que vous nous transmettez via nos formulaires (contact, demande de formation, demande entreprise, commande de produits digitaux) ainsi que des données techniques de navigation.</p>
    <h2>Finalités</h2>
    <ul>
      <li>Répondre à vos demandes</li>
      <li>Vous adresser un programme ou une proposition</li>
      <li>Traiter vos commandes de produits digitaux</li>
      <li>Vous tenir informé de nos actualités si vous y consentez</li>
    </ul>
    <h2>Conservation</h2>
    <p>Vos données sont conservées pendant la durée nécessaire à la finalité du traitement, puis archivées conformément aux obligations légales.</p>
    <h2>Vos droits</h2>
    <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'opposition, d'effacement et de portabilité. Pour exercer vos droits : contact@cbs-institute.com.</p>
  </LegalShell>
);
export default Confidentialite;
