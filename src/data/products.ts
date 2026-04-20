export interface DigitalProduct {
  id: string;
  slug: string;
  title: string;
  category: "Playbooks" | "Guides PDF" | "Templates" | "Ressources premium";
  shortDescription: string;
  longDescription: string;
  audience: string;
  format: string;
  price: number;
  pages?: string;
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
      "Cadre méthodologique premium pour piloter une transformation Finance SAP de bout en bout.",
    longDescription:
      "Un playbook structuré qui couvre l’ensemble des étapes clés d’une transformation Finance SAP : cadrage, cartographie des processus, design de la cible, gouvernance, conduite du changement et déploiement.",
    audience: "Directions financières, chefs de projet SAP, consultants Finance",
    format: "PDF interactif",
    pages: "78 pages",
    price: 149,
    highlights: [
      "Cadre méthodologique structuré",
      "Cartographie des processus Finance SAP",
      "Modèle de gouvernance projet",
      "Roadmap type sur 12 mois",
    ],
    benefits: [
      "Sécuriser le cadrage d’un projet Finance SAP",
      "Aligner directions métier et équipes projet",
      "Anticiper les points de vigilance majeurs",
    ],
  },
  {
    id: "guide-s4hana-finance",
    slug: "guide-s4hana-finance-essentiel",
    title: "Guide essentiel S/4HANA Finance",
    category: "Guides PDF",
    shortDescription:
      "Le guide de référence pour comprendre les fondamentaux fonctionnels de S/4HANA Finance.",
    longDescription:
      "Un guide pédagogique qui expose, de façon claire et opérationnelle, les concepts clés de S/4HANA Finance : Universal Journal, modèle de données, architecture, périmètre fonctionnel et incidences sur les processus.",
    audience: "Professionnels Finance, key users, consultants en évolution",
    format: "PDF haute qualité",
    pages: "62 pages",
    price: 89,
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
      "Modèle prêt à l’emploi pour cartographier les processus Finance dans un environnement SAP.",
    longDescription:
      "Un template structuré pour cartographier vos processus Finance SAP — Record-to-Report, Order-to-Cash, Procure-to-Pay — avec les niveaux de détail attendus dans un projet de transformation.",
    audience: "Chefs de projet, key users, consultants",
    format: "Excel + PDF guide",
    price: 49,
    highlights: [
      "3 macro-processus modélisés",
      "Niveaux L1 → L4",
      "Champs prêts à compléter",
      "Guide d’utilisation",
    ],
    benefits: [
      "Gagner du temps sur la phase d’analyse",
      "Structurer un atelier de cartographie",
      "Disposer d’un livrable professionnel",
    ],
  },
  {
    id: "checklist-go-live",
    slug: "checklist-go-live-sap-finance",
    title: "Checklist Go-Live Finance SAP",
    category: "Templates",
    shortDescription:
      "Checklist exhaustive pour sécuriser un démarrage Finance SAP, du cutover à l’hypercare.",
    longDescription:
      "Une checklist opérationnelle couvrant l’ensemble des points de contrôle d’un go-live Finance SAP : reprise des données, balance d’ouverture, paramétrage final, hypercare et stabilisation.",
    audience: "Chefs de projet, équipes Finance, key users",
    format: "PDF + Excel",
    price: 39,
    highlights: [
      "Cutover détaillé",
      "Balance d’ouverture",
      "Hypercare structuré",
      "Suivi des incidents",
    ],
    benefits: [
      "Réduire les risques de démarrage",
      "Aligner toutes les équipes",
      "Disposer d’un référentiel partagé",
    ],
  },
  {
    id: "ressource-key-user",
    slug: "kit-cle-key-user-sap",
    title: "Kit clé du Key User SAP",
    category: "Ressources premium",
    shortDescription:
      "Ressource premium pour outiller le Key User SAP : posture, missions, livrables et bonnes pratiques.",
    longDescription:
      "Un kit complet conçu pour les Key Users SAP : compréhension du rôle, missions clés, posture pédagogique, supports types et bonnes pratiques pour devenir un véritable relais métier.",
    audience: "Key users SAP, équipes projet, responsables formation interne",
    format: "PDF + supports",
    pages: "54 pages",
    price: 79,
    highlights: [
      "Rôle et missions du Key User",
      "Posture et soft skills",
      "Modèles de supports utilisateurs",
      "Bonnes pratiques d’adoption",
    ],
    benefits: [
      "Renforcer l’autonomie des relais métier",
      "Sécuriser l’adoption SAP",
      "Préparer un déploiement sereinement",
    ],
  },
  {
    id: "guide-controlling",
    slug: "guide-controlling-sap-co",
    title: "Guide Controlling SAP CO",
    category: "Guides PDF",
    shortDescription:
      "Comprendre les concepts fondamentaux du Controlling dans SAP, du contrôle de gestion à l’analyse.",
    longDescription:
      "Un guide pédagogique pour appréhender les fondamentaux du Controlling dans SAP : centres de coûts, ordres internes, comptabilité analytique, profitability analysis et reporting.",
    audience: "Contrôleurs de gestion, professionnels Finance, consultants",
    format: "PDF haute qualité",
    pages: "70 pages",
    price: 99,
    highlights: [
      "Centres de coûts & ordres internes",
      "Profitability Analysis",
      "Reporting CO",
      "Bonnes pratiques métier",
    ],
    benefits: [
      "Maîtriser les concepts CO",
      "Dialoguer avec les équipes SAP",
      "Améliorer la qualité du reporting",
    ],
  },
];

export const productCategories = [
  "Playbooks",
  "Guides PDF",
  "Templates",
  "Ressources premium",
] as const;
