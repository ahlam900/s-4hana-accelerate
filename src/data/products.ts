export type ProductBadge = "Best-seller" | "Indispensable" | "Recommandé";

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
  badge?: ProductBadge;
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
    badge: "Best-seller",
    shortDescription:
      "Le framework opérationnel utilisé pour structurer et piloter une transformation SAP Finance de bout en bout.",
    longDescription:
      "Un playbook structuré qui couvre l'ensemble des étapes clés d'une transformation Finance SAP : cadrage, cartographie des processus, design de la cible, gouvernance, conduite du changement et déploiement.",
    audience: "Directions financières, chefs de projet SAP, consultants Finance",
    format: "PDF interactif",
    pages: "78 pages",
    price: 149,
    valueBullets: [
      "Méthodologie issue de projets S/4HANA réels",
      "Structuration des phases, livrables et gouvernance",
      "Accélère la prise de décision et la maîtrise projet",
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
    slug: "guide-s4hana-finance-essentiel",
    title: "Guide essentiel S/4HANA Finance",
    category: "Guides PDF",
    badge: "Indispensable",
    shortDescription:
      "Le socle indispensable pour comprendre rapidement l'architecture et les fondamentaux S/4HANA Finance.",
    longDescription:
      "Un guide pédagogique qui expose, de façon claire et opérationnelle, les concepts clés de S/4HANA Finance : Universal Journal, modèle de données, architecture, périmètre fonctionnel et incidences sur les processus.",
    audience: "Professionnels Finance, key users, consultants en évolution",
    format: "PDF haute qualité",
    pages: "62 pages",
    price: 89,
    valueBullets: [
      "Vision claire des concepts clés (FI / CO / Universal Journal)",
      "Accélère la montée en compétence",
      "Idéal pour consultants et key users",
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
    badge: "Recommandé",
    shortDescription:
      "Le template utilisé en projet pour cartographier efficacement les processus Finance SAP.",
    longDescription:
      "Un template structuré pour cartographier vos processus Finance SAP — Record-to-Report, Order-to-Cash, Procure-to-Pay — avec les niveaux de détail attendus dans un projet de transformation.",
    audience: "Chefs de projet, key users, consultants",
    format: "Excel + PDF guide",
    price: 49,
    valueBullets: [
      "Prêt à l'emploi (missions / projets)",
      "Structure standard des processus R2R, P2P, OTC",
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
    id: "checklist-go-live",
    slug: "checklist-go-live-sap-finance",
    title: "Checklist Go-Live Finance SAP",
    category: "Templates",
    shortDescription:
      "La checklist complète pour sécuriser un go-live SAP Finance sans risque.",
    longDescription:
      "Une checklist opérationnelle couvrant l'ensemble des points de contrôle d'un go-live Finance SAP : reprise des données, balance d'ouverture, paramétrage final, hypercare et stabilisation.",
    audience: "Chefs de projet, équipes Finance, key users",
    format: "PDF + Excel",
    price: 39,
    valueBullets: [
      "Points de contrôle critiques",
      "Sécurisation du cutover",
      "Support hypercare structuré",
    ],
    highlights: [
      "Cutover détaillé",
      "Balance d'ouverture",
      "Hypercare structuré",
      "Suivi des incidents",
    ],
    benefits: [
      "Réduire les risques de démarrage",
      "Aligner toutes les équipes",
      "Disposer d'un référentiel partagé",
    ],
  },
  {
    id: "ressource-key-user",
    slug: "kit-cle-key-user-sap",
    title: "Kit clé du Key User SAP",
    category: "Ressources premium",
    badge: "Best-seller",
    shortDescription:
      "Le kit opérationnel pour rendre un key user SAP autonome et performant.",
    longDescription:
      "Un kit complet conçu pour les Key Users SAP : compréhension du rôle, missions clés, posture pédagogique, supports types et bonnes pratiques pour devenir un véritable relais métier.",
    audience: "Key users SAP, équipes projet, responsables formation interne",
    format: "PDF + supports",
    pages: "54 pages",
    price: 79,
    valueBullets: [
      "Missions et responsabilités clés",
      "Outils et livrables essentiels",
      "Bonnes pratiques terrain",
    ],
    highlights: [
      "Rôle et missions du Key User",
      "Posture et soft skills",
      "Modèles de supports utilisateurs",
      "Bonnes pratiques d'adoption",
    ],
    benefits: [
      "Renforcer l'autonomie des relais métier",
      "Sécuriser l'adoption SAP",
      "Préparer un déploiement sereinement",
    ],
  },
  {
    id: "guide-controlling",
    slug: "guide-controlling-sap-co",
    title: "Guide Controlling SAP CO",
    category: "Guides PDF",
    shortDescription:
      "Le guide complet pour maîtriser les fondamentaux et les logiques du Controlling SAP.",
    longDescription:
      "Un guide pédagogique pour appréhender les fondamentaux du Controlling dans SAP : centres de coûts, ordres internes, comptabilité analytique, profitability analysis et reporting.",
    audience: "Contrôleurs de gestion, professionnels Finance, consultants",
    format: "PDF haute qualité",
    pages: "70 pages",
    price: 99,
    valueBullets: [
      "Vision métier + SAP",
      "Compréhension des flux analytiques",
      "Support idéal pour consultants et contrôleurs",
    ],
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
