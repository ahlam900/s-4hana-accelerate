export interface Training {
  id: string;
  title: string;
  category: "Formations pour experts SAP" | "Parcours Finance SAP";
  audience: string;
  objectives: string[];
  duration: string;
  format: string;
  highlights: string[];
  featured?: boolean;
}

export const trainings: Training[] = [
  {
    id: "sap-fico-consultant-program",
    title: "SAP FICO Consultant Program — 70 heures",
    category: "Parcours Finance SAP",
    audience: "Professionnels Finance et profils en évolution souhaitant devenir consultant SAP Finance",
    duration: "70 heures",
    format: "Distanciel encadré + sessions live",
    objectives: [
      "Maîtriser les fondamentaux de Financial Accounting",
      "Comprendre les processus de Controlling",
      "Naviguer l’architecture S/4HANA Finance",
      "Acquérir une méthodologie projet SAP",
      "S’approprier l’intégration des processus métier",
    ],
    highlights: [
      "Programme structuré de 70 heures",
      "Préparation au métier de consultant SAP Finance",
      "Cas pratiques et exercices guidés",
      "Accompagnement personnalisé",
    ],
    featured: true,
  },
  {
    id: "sap-finance-experts",
    title: "SAP Finance pour experts",
    category: "Formations pour experts SAP",
    audience: "Consultants SAP confirmés, experts Finance souhaitant approfondir",
    duration: "5 jours",
    format: "Présentiel ou distanciel intensif",
    objectives: [
      "Approfondir les processus Finance avancés",
      "Optimiser le paramétrage SAP",
      "Renforcer l’expertise sur les sujets critiques",
    ],
    highlights: [
      "Niveau expert",
      "Cas concrets de transformation",
      "Approche orientée terrain",
    ],
  },
  {
    id: "s4hana-finance-avance",
    title: "SAP S/4HANA Finance avancé",
    category: "Formations pour experts SAP",
    audience: "Consultants Finance, experts SAP, chefs de projet",
    duration: "4 jours",
    format: "Distanciel encadré",
    objectives: [
      "Maîtriser l’Universal Journal",
      "Comprendre les apports de S/4HANA Finance",
      "Appréhender Central Finance",
      "Optimiser la clôture financière",
    ],
    highlights: [
      "Architecture S/4HANA Finance",
      "Universal Journal en profondeur",
      "Cas d’usage avancés",
    ],
  },
  {
    id: "processus-finance-sap",
    title: "Processus Finance dans SAP",
    category: "Parcours Finance SAP",
    audience: "Professionnels Finance, chefs de projet, profils en évolution",
    duration: "3 jours",
    format: "Distanciel ou présentiel",
    objectives: [
      "Comprendre les processus Record-to-Report, OTC, P2P",
      "Visualiser leur traduction dans SAP",
      "Identifier les points clés de paramétrage",
    ],
    highlights: [
      "Vision processus + outil",
      "Pédagogie orientée métier",
      "Cas pratiques",
    ],
  },
  {
    id: "expertise-fi-co",
    title: "Expertise SAP FI/CO",
    category: "Formations pour experts SAP",
    audience: "Consultants Finance souhaitant renforcer leur expertise FI/CO",
    duration: "5 jours",
    format: "Distanciel encadré",
    objectives: [
      "Approfondir le General Ledger, Asset Accounting, AP/AR",
      "Maîtriser les fondamentaux du Controlling",
      "Sécuriser le paramétrage cross-modules",
    ],
    highlights: [
      "Couverture FI + CO",
      "Niveau confirmé",
      "Approche projet",
    ],
  },
  {
    id: "transformation-finance-sap",
    title: "Transformation Finance SAP",
    category: "Parcours Finance SAP",
    audience: "Chefs de projet, experts métier, consultants en transformation",
    duration: "3 jours",
    format: "Distanciel intensif",
    objectives: [
      "Cadrer une transformation Finance SAP",
      "Construire la roadmap projet",
      "Aligner métier, IT et direction financière",
    ],
    highlights: [
      "Vision stratégique + opérationnelle",
      "Cas concrets",
      "Méthodologie premium",
    ],
  },
];
