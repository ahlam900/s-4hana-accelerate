export interface DigitalProduct {
  id: string;
  slug: string;
  title: string;
  category: "Playbooks" | "Guides" | "Templates" | "Kits opérationnels";
  shortDescription: string;
  longDescription: string;
  audience: string;
  format: string;
  price: number;
  pages?: string;
  valueBullets: string[];
  highlights: string[];
  benefits: string[];
}

export const products: DigitalProduct[] = [
  {
    id: "playbook-sap-finance",
    slug: "playbook-sap-finance-transformation",
    title: "Playbook Transformation Finance SAP",
    category: "Playbooks",
    shortDescription:
      "Le framework opérationnel pour structurer et piloter une transformation Finance SAP de bout en bout.",
    longDescription:
      "Un playbook structuré qui couvre l'ensemble des étapes clés d'une transformation Finance SAP : cadrage, cartographie des processus, design de la cible, gouvernance, conduite du changement et déploiement.",
    audience: "Directions financières, chefs de projet SAP, consultants Finance",
    format: "PDF interactif",
    pages: "78 pages",
    price: 149,
    valueBullets: [
      "Méthodologie issue de projets réels",
      "Structuration des phases, livrables et gouvernance",
      "Aide à la décision et au pilotage du programme",
    ],
    highlights: [
      "Cadre méthodologique structuré",
      "Cartographie des processus Finance SAP",
      "Modèle de gouvernance projet",
      "Roadmap type sur 12 mois",
    ],
    benefits: [
      "Sécuriser le cadrage d'un projet Finance SAP",
      "Aligner directions métier et équipes projet",
      "Anticiper les points de vigilance majeurs",
    ],
  },
  {
    id: "guide-s4hana-finance",
    slug: "guide-essentiel-sap-finance",
    title: "Guide essentiel SAP Finance",
    category: "Guides",
    shortDescription:
      "Le socle de référence pour comprendre les grands repères, concepts et logiques structurantes de la Finance SAP.",
    longDescription:
      "Un guide pédagogique qui expose, de façon claire et opérationnelle, les concepts clés de la Finance SAP : modèle de données, architecture fonctionnelle, périmètre métier et incidences sur les processus Finance.",
    audience: "Professionnels Finance, key users, consultants en évolution",
    format: "PDF haute qualité",
    pages: "62 pages",
    price: 89,
    valueBullets: [
      "Vision claire des concepts clés Finance SAP",
      "Montée en compétence accélérée",
      "Support utile pour consultants, key users et professionnels Finance",
    ],
    highlights: [
      "Universal Journal expliqué",
      "Architecture S/4HANA Finance",
      "Impacts sur les processus clés",
      "Glossaire fonctionnel",
    ],
    benefits: [
      "Acquérir les fondamentaux S/4HANA Finance",
      "Dialoguer avec des consultants SAP",
      "Préparer un projet de migration",
    ],
  },
  {
    id: "template-cartographie-processus",
    slug: "template-cartographie-processus-finance-sap",
    title: "Template Cartographie des processus Finance SAP",
    category: "Templates",
    shortDescription:
      "Le template utilisé pour cartographier efficacement les processus Finance et préparer les phases de cadrage.",
    longDescription:
      "Un template structuré pour cartographier vos processus Finance SAP — Record-to-Report, Order-to-Cash, Procure-to-Pay — avec les niveaux de détail attendus dans un projet de transformation.",
    audience: "Chefs de projet, key users, consultants",
    format: "Excel + PDF guide",
    price: 49,
    valueBullets: [
      "Prêt à l'emploi en mission ou en projet",
      "Structure standard des processus R2R, P2P, O2C",
      "Gain de temps immédiat en phase de cadrage",
    ],
    highlights: [
      "3 macro-processus modélisés",
      "Niveaux L1 → L4",
      "Champs prêts à compléter",
      "Guide d'utilisation",
    ],
    benefits: [
      "Gagner du temps sur la phase d'analyse",
      "Structurer un atelier de cartographie",
      "Disposer d'un livrable professionnel",
    ],
  },
  {
    id: "kit-general-ledger",
    slug: "general-ledger-configuration-kit",
    title: "General Ledger Configuration Kit",
    category: "Kits opérationnels",
    shortDescription:
      "Construire et valider le socle financier de SAP S/4HANA : plan de comptes, comptes GL, types de pièces et ledgers.",
    longDescription:
      "Kit opérationnel pour structurer et configurer les principaux objets du General Ledger SAP S/4HANA : plan de comptes, comptes généraux, types de pièces, plages de numéros, ledgers et structure de reporting financier.",
    audience: "Consultants Finance, key users, équipes projet S/4HANA",
    format: "Kit opérationnel · PDF + templates",
    price: 0,
    valueBullets: [
      "Matrice de plan de comptes",
      "Fiche de configuration des comptes GL",
      "Types de pièces & plages de numéros",
      "Framework de configuration des ledgers",
      "Checklist de validation GL",
    ],
    highlights: [
      "Plan de comptes structuré",
      "Configuration des ledgers",
      "Types de pièces & numérotation",
      "Checklist de validation",
    ],
    benefits: [
      "Configurer un General Ledger complet, cohérent et prêt pour les tests",
      "Sécuriser les fondations Finance du système",
      "Accélérer les phases de configuration et de validation",
    ],
  },
  {
    id: "kit-accounts-payable",
    slug: "accounts-payable-configuration-kit",
    title: "Accounts Payable Configuration Kit",
    category: "Kits opérationnels",
    shortDescription:
      "Structurer et exécuter le cycle comptable fournisseur de bout en bout dans SAP S/4HANA.",
    longDescription:
      "Kit SAP S/4HANA pour configurer le cycle fournisseurs : Business Partner fournisseur, compte collectif, conditions de paiement, facture fournisseur et gestion des postes ouverts.",
    audience: "Consultants Finance, key users AP, équipes projet S/4HANA",
    format: "Kit opérationnel · PDF + templates",
    price: 0,
    valueBullets: [
      "Guide de paramétrage BP fournisseur",
      "Fiche compte collectif fournisseur",
      "Matrice des conditions de paiement",
      "Flux de traitement des factures fournisseurs",
      "Checklist de validation AP",
    ],
    highlights: [
      "Business Partner fournisseur",
      "Compte collectif & conditions",
      "Traitement des factures",
      "Postes ouverts fournisseurs",
    ],
    benefits: [
      "Configurer et valider un cycle fournisseur complet dans SAP S/4HANA",
      "Sécuriser la chaîne facture-paiement",
      "Aligner Finance, achats et IT sur un référentiel commun",
    ],
  },
  {
    id: "kit-f110-payment-program",
    slug: "automatic-payment-program-f110-kit",
    title: "Automatic Payment Program F110 Kit",
    category: "Kits opérationnels",
    shortDescription:
      "Préparer, contrôler et exécuter les paiements fournisseurs automatisés via la transaction F110.",
    longDescription:
      "Kit opérationnel dédié au programme de paiement automatique F110 : préparation du run, sélection des postes, proposition de paiement, analyse des exceptions et exécution du paiement.",
    audience: "Consultants Finance, key users trésorerie, équipes AP",
    format: "Kit opérationnel · PDF + templates",
    price: 0,
    valueBullets: [
      "Template de lancement F110",
      "Matrice des modes de paiement",
      "Checklist des prérequis fournisseurs",
      "Framework d'analyse de proposition",
      "Guide de correction des exceptions",
    ],
    highlights: [
      "Préparation du run F110",
      "Modes de paiement",
      "Analyse de proposition",
      "Traitement des exceptions",
    ],
    benefits: [
      "Exécuter un paiement automatique fiable avec contrôle des erreurs",
      "Réduire les rejets et incidents de paiement",
      "Sécuriser les contrôles comptables et trésorerie",
    ],
  },
  {
    id: "kit-bank-accounting",
    slug: "bank-accounting-configuration-kit",
    title: "Bank Accounting Configuration Kit",
    category: "Kits opérationnels",
    shortDescription:
      "Structurer les données bancaires SAP et sécuriser la préparation des paiements.",
    longDescription:
      "Kit de configuration bancaire SAP couvrant les clés bancaires, banques société, comptes bancaires, IBAN, liaison GL et dépendances avec le programme de paiement.",
    audience: "Consultants Finance, key users trésorerie, équipes projet",
    format: "Kit opérationnel · PDF + templates",
    price: 0,
    valueBullets: [
      "Guide clé bancaire & banque société",
      "Template compte bancaire & IBAN",
      "Matrice d'intégration Banque–GL",
      "Checklist de readiness paiement",
      "Framework de contrôle des erreurs",
    ],
    highlights: [
      "Clés bancaires & banques société",
      "Comptes bancaires & IBAN",
      "Liaison Banque – GL",
      "Readiness paiement",
    ],
    benefits: [
      "Garantir une configuration bancaire fiable et exploitable",
      "Sécuriser les flux de paiement entrants et sortants",
      "Réduire les anomalies de rapprochement bancaire",
    ],
  },
  {
    id: "kit-accounts-receivable",
    slug: "accounts-receivable-configuration-kit",
    title: "Accounts Receivable Configuration Kit",
    category: "Kits opérationnels",
    shortDescription:
      "Configurer et contrôler le cycle comptable client dans SAP S/4HANA.",
    longDescription:
      "Kit SAP S/4HANA couvrant le cycle client : Business Partner client, compte collectif, facture client, encaissement, lettrage, postes ouverts et relance.",
    audience: "Consultants Finance, key users AR, équipes projet S/4HANA",
    format: "Kit opérationnel · PDF + templates",
    price: 0,
    valueBullets: [
      "Guide de paramétrage BP client",
      "Fiche compte collectif client",
      "Flux de facturation client",
      "Guide encaissement & lettrage",
      "Checklist de validation AR",
    ],
    highlights: [
      "Business Partner client",
      "Facturation client",
      "Encaissement & lettrage",
      "Postes ouverts clients",
    ],
    benefits: [
      "Configurer et valider un cycle client complet dans SAP S/4HANA",
      "Sécuriser le recouvrement et la qualité du poste client",
      "Aligner Finance, ventes et IT sur un référentiel commun",
    ],
  },
  {
    id: "playbook-adoption-post-go-live",
    slug: "playbook-adoption-post-go-live",
    title: "Playbook d'adoption post go-live",
    category: "Playbooks",
    shortDescription:
      "Le playbook pour éviter la chute d'adhésion après déploiement et ancrer les nouveaux usages Finance SAP.",
    longDescription:
      "Un playbook orienté adoption pour pérenniser les nouveaux usages Finance SAP après le go-live : relais internes, rituels d'ancrage, mesure d'adoption et continuité de la conduite du changement.",
    audience: "Responsables transformation, équipes projet, key users",
    format: "PDF expert",
    pages: "58 pages",
    price: 119,
    valueBullets: [
      "Ancrage des usages dans la durée",
      "Structuration des relais internes",
      "Continuité après le go-live",
    ],
    highlights: [
      "Plan d'adoption post déploiement",
      "Réseau de relais internes",
      "Rituels d'ancrage",
      "Indicateurs d'adoption",
    ],
    benefits: [
      "Éviter la chute d'adhésion",
      "Ancrer les nouveaux usages",
      "Mesurer l'adoption réelle",
    ],
  },
  {
    id: "template-plan-montee-competence-key-users",
    slug: "template-plan-montee-competence-key-users",
    title: "Template plan de montée en compétence Key Users",
    category: "Templates",
    shortDescription:
      "Le modèle opérationnel pour structurer un dispositif de montée en compétence par profil, rôle et niveau d'autonomie.",
    longDescription:
      "Un template prêt à l'emploi pour structurer la montée en compétence des Key Users SAP : parcours par profil, niveaux d'autonomie attendus, suivi pédagogique et logique train-the-trainer.",
    audience: "Responsables formation, chefs de projet, managers métiers",
    format: "Excel + PDF guide",
    price: 59,
    valueBullets: [
      "Progression par profil",
      "Pilotage pédagogique clair",
      "Support train-the-trainer",
    ],
    highlights: [
      "Parcours par profil",
      "Niveaux d'autonomie",
      "Suivi pédagogique",
      "Logique train-the-trainer",
    ],
    benefits: [
      "Structurer la montée en compétence",
      "Piloter la pédagogie projet",
      "Préparer un dispositif train-the-trainer",
    ],
  },
  {
    id: "guide-gouvernance-projet-sap-finance",
    slug: "guide-gouvernance-projet-sap-finance",
    title: "Guide de gouvernance projet SAP Finance",
    category: "Guides",
    shortDescription:
      "Les repères essentiels pour piloter un programme Finance SAP avec plus de clarté, de maîtrise et de cohérence entre acteurs.",
    longDescription:
      "Un guide pour structurer la gouvernance d'un programme Finance SAP : instances, rythmes de pilotage, indicateurs clés, articulation Finance / IT / intégrateur et gestion des arbitrages.",
    audience: "Sponsors, directions Finance, PMO, responsables transformation",
    format: "PDF haute qualité",
    pages: "66 pages",
    price: 109,
    valueBullets: [
      "Clarifie les instances et décisions",
      "Aide à structurer le pilotage",
      "Renforce l'alignement des parties prenantes",
    ],
    highlights: [
      "Instances de gouvernance",
      "Rythmes de pilotage",
      "Indicateurs clés programme",
      "Articulation Finance / IT / intégrateur",
    ],
    benefits: [
      "Clarifier le pilotage du programme",
      "Aligner sponsors et équipes",
      "Sécuriser les arbitrages clés",
    ],
  },
];

export const productCategories = [
  "Playbooks",
  "Guides",
  "Templates",
  "Kits opérationnels",
] as const;
