// Données détaillées des formations (hors SAP FICO Consultant Program qui a sa propre page)
// Utilisé par src/pages/FormationDetail.tsx

export interface FormationModule {
  day: string;
  title: string;
  focus: string;
}

export interface FormationDetail {
  slug: string;
  sujet: string; // pré-rempli dans le formulaire de Formations.tsx
  eyebrow: string;
  title: string;
  titleAccent?: string; // partie mise en valeur (champagne)
  duration: string; // ex "3 jours · 21h"
  durationDays: string; // ex "3 jours"
  level: string;
  format: string;
  priceConsultant: string; // ex "1 990 € TTC"
  priceCorporate: string; // ex "4 500 € HT"
  summary: string;
  audience: string[];
  keyPoints: { title: string; desc: string }[];
  modules: FormationModule[];
  outcomes: string[];
  modalities: { label: string; value: string }[];
  prerequisites: string[];
}

export const formationDetails: Record<string, FormationDetail> = {
  "automatiser-cloture-sap": {
    slug: "automatiser-cloture-sap",
    sujet: "Automatiser%20la%20cl%C3%B4ture%20financi%C3%A8re%20dans%20SAP",
    eyebrow: "IA & Automation",
    title: "Automatiser la clôture",
    titleAccent: "SAP",
    duration: "3 jours · 21h",
    durationDays: "3 jours",
    level: "Confirmé",
    format: "Distanciel encadré + sessions live",
    priceConsultant: "1 990 € TTC",
    priceCorporate: "4 500 € HT",
    summary:
      "Une formation dédiée à l'automatisation de la clôture financière sous SAP, utilisant l'IA pour accélérer les contrôles, réduire les risques et optimiser la productivité des équipes Finance.",
    audience: [
      "Consultants SAP Finance souhaitant industrialiser la clôture",
      "Responsables clôture & contrôleurs financiers en environnement SAP",
      "Chefs de projet Finance pilotant un programme d'automation",
      "Experts métier souhaitant intégrer l'IA dans leurs processus",
    ],
    keyPoints: [
      { title: "Automation du Closing Cockpit", desc: "Orchestration, dépendances et fiabilisation des tâches périodiques." },
      { title: "Détection d'anomalies par IA", desc: "Identification automatisée des écritures atypiques et des écarts critiques." },
      { title: "Contrôles intelligents", desc: "Mise en place de contrôles avancés sur les comptes sensibles." },
      { title: "Accélération des tâches périodiques", desc: "Réduction mesurable du délai de clôture mensuel et annuel." },
    ],
    modules: [
      { day: "Jour 01", title: "Cadrage de la clôture SAP & enjeux d'automation", focus: "Vision & maturité" },
      { day: "Jour 02", title: "Closing Cockpit, orchestration & contrôles IA", focus: "Mise en pratique" },
      { day: "Jour 03", title: "Détection d'anomalies, monitoring & cas concrets", focus: "IA appliquée" },
    ],
    outcomes: [
      "Concevoir une clôture SAP automatisée et fiabilisée",
      "Implémenter des contrôles intelligents augmentés par l'IA",
      "Identifier les leviers d'accélération sur votre périmètre",
      "Piloter un chantier d'automation de la clôture",
    ],
    modalities: [
      { label: "Durée", value: "3 jours · 21h" },
      { label: "Modalité", value: "Distanciel encadré + sessions live" },
      { label: "Horaires", value: "9h–12h30 / 14h–17h30" },
      { label: "Supports", value: "Supports premium + cas pratiques SAP" },
      { label: "Certification", value: "Attestation CBS Finance Institute" },
      { label: "Accès", value: "Sur échange préalable" },
    ],
    prerequisites: [
      "Connaissance des processus de clôture financière",
      "Notions de SAP Finance (FI / CO)",
      "Aucun prérequis IA — les concepts sont introduits dans le programme",
    ],
  },

  "relance-client-intelligente-sap": {
    slug: "relance-client-intelligente-sap",
    sujet: "Syst%C3%A8me%20de%20relance%20client%20intelligent%20(SAP%20%2B%20IA)",
    eyebrow: "IA & Scoring",
    title: "Relance client intelligente",
    titleAccent: "SAP",
    duration: "3 jours · 21h",
    durationDays: "3 jours",
    level: "Confirmé",
    format: "Distanciel encadré + sessions live",
    priceConsultant: "2 490 € TTC",
    priceCorporate: "5 500 € HT",
    summary:
      "Maîtriser F150 avancé, construire des scénarios de relance augmentés par l'IA et automatiser les actions de recouvrement pour transformer le poste client en levier de cash.",
    audience: [
      "Consultants SAP AR / Credit Management",
      "Responsables recouvrement & credit managers",
      "Chefs de projet Finance pilotant un programme cash",
      "Experts métier souhaitant intégrer le scoring IA",
    ],
    keyPoints: [
      { title: "F150 avancé", desc: "Paramétrage fin du programme de relance et stratégies multi-niveaux." },
      { title: "Scoring client par IA", desc: "Modèles de scoring comportemental et probabilité de paiement." },
      { title: "Scénarios de relance optimisés", desc: "Segmentation dynamique et personnalisation des actions." },
      { title: "Automatisation des actions", desc: "Orchestration intelligente des relances et workflows recouvrement." },
    ],
    modules: [
      { day: "Jour 01", title: "Poste client SAP & fondamentaux de la relance", focus: "Socle AR" },
      { day: "Jour 02", title: "F150 avancé & scoring client par IA", focus: "Stratégie & IA" },
      { day: "Jour 03", title: "Automatisation des actions & pilotage du cash", focus: "Industrialisation" },
    ],
    outcomes: [
      "Construire une stratégie de relance segmentée et augmentée par l'IA",
      "Paramétrer F150 sur des cas complexes",
      "Industrialiser les actions de recouvrement",
      "Piloter la performance du poste client avec des indicateurs avancés",
    ],
    modalities: [
      { label: "Durée", value: "3 jours · 21h" },
      { label: "Modalité", value: "Distanciel encadré + sessions live" },
      { label: "Horaires", value: "9h–12h30 / 14h–17h30" },
      { label: "Supports", value: "Supports premium + cas réels recouvrement" },
      { label: "Certification", value: "Attestation CBS Finance Institute" },
      { label: "Accès", value: "Sur échange préalable" },
    ],
    prerequisites: [
      "Connaissance du processus Order-to-Cash",
      "Notions de SAP AR / Credit Management",
      "Aucun prérequis IA — les concepts sont introduits",
    ],
  },

  "pilotage-tresorerie-temps-reel": {
    slug: "pilotage-tresorerie-temps-reel",
    sujet: "Pilotage%20tr%C3%A9sorerie%20temps%20r%C3%A9el%20SAP%20Analytics",
    eyebrow: "SAP Analytics",
    title: "Pilotage trésorerie",
    titleAccent: "temps réel",
    duration: "4 jours · 28h",
    durationDays: "4 jours",
    level: "Confirmé",
    format: "Distanciel encadré + sessions live",
    priceConsultant: "3 490 € TTC",
    priceCorporate: "6 900 € HT",
    summary:
      "Mettre en place un pilotage trésorerie temps réel sur SAP, exploiter SAP Analytics pour la cash visibility et bâtir des prévisions augmentées au service du directeur financier.",
    audience: [
      "Consultants SAP Treasury / Cash Management",
      "Trésoriers d'entreprise et responsables cash",
      "Contrôleurs financiers en environnement SAP",
      "Chefs de projet Finance pilotant un chantier trésorerie",
    ],
    keyPoints: [
      { title: "Cash visibility temps réel", desc: "Architecture SAP Cash Management pour une vision consolidée du cash." },
      { title: "SAP Analytics appliqué", desc: "Dashboards trésorerie et indicateurs de pilotage avancés." },
      { title: "Prévisions augmentées", desc: "Modèles de cash forecasting enrichis par l'analytique." },
      { title: "Alertes intelligentes", desc: "Détection automatique des risques de liquidité et écarts." },
    ],
    modules: [
      { day: "Jour 01", title: "Architecture trésorerie SAP & cash visibility", focus: "Socle Treasury" },
      { day: "Jour 02", title: "Cash forecasting & SAP Analytics", focus: "Pilotage" },
      { day: "Jour 03", title: "Dashboards, alertes et indicateurs avancés", focus: "Analytics" },
      { day: "Jour 04", title: "Cas projet & mise en situation", focus: "Synthèse opérationnelle" },
    ],
    outcomes: [
      "Concevoir un pilotage trésorerie temps réel sous SAP",
      "Construire des dashboards SAP Analytics pour la direction financière",
      "Bâtir des prévisions de trésorerie augmentées",
      "Mettre en place une gouvernance cash robuste",
    ],
    modalities: [
      { label: "Durée", value: "4 jours · 28h" },
      { label: "Modalité", value: "Distanciel encadré + sessions live" },
      { label: "Horaires", value: "9h–12h30 / 14h–17h30" },
      { label: "Supports", value: "Supports premium + cas concrets trésorerie" },
      { label: "Certification", value: "Attestation CBS Finance Institute" },
      { label: "Accès", value: "Sur échange préalable" },
    ],
    prerequisites: [
      "Connaissance des processus de trésorerie",
      "Notions de SAP Finance (FI)",
      "Aucun prérequis SAP Analytics — introduits dans le programme",
    ],
  },

  "architecte-transformation-finance-sap": {
    slug: "architecte-transformation-finance-sap",
    sujet: "Architecte%20de%20transformation%20Finance%20SAP",
    eyebrow: "IA & Design",
    title: "Architecte transformation",
    titleAccent: "Finance SAP",
    duration: "5 jours · 35h",
    durationDays: "5 jours",
    level: "Expert",
    format: "Distanciel encadré + sessions live",
    priceConsultant: "4 990 € TTC",
    priceCorporate: "9 800 € HT",
    summary:
      "Le programme premium pour devenir architecte de transformation Finance SAP : design de bout en bout, intégration de l'IA dans les processus financiers et gouvernance de programme.",
    audience: [
      "Consultants SAP Finance confirmés",
      "Architectes SI Finance",
      "Chefs de projet pilotant une transformation S/4HANA Finance",
      "Directeurs de programme Finance",
    ],
    keyPoints: [
      { title: "Architecture Finance SAP de bout en bout", desc: "Vision intégrée FI / CO / Treasury / Analytics sur S/4HANA." },
      { title: "Design des processus", desc: "Modélisation cible et alignement métier / SI / direction financière." },
      { title: "IA appliquée à la Finance", desc: "Identification des cas d'usage et intégration dans l'architecture." },
      { title: "Gouvernance de transformation", desc: "Roadmap, conduite du changement et pilotage par la valeur." },
      { title: "Posture d'architecte", desc: "Cadre de référence, méthodologies et postures attendues." },
    ],
    modules: [
      { day: "Jour 01", title: "Cadrage stratégique & vision Finance SAP", focus: "Stratégie & valeur" },
      { day: "Jour 02", title: "Architecture S/4HANA Finance de bout en bout", focus: "Design technique" },
      { day: "Jour 03", title: "Design des processus & cas d'usage IA", focus: "Processus & IA" },
      { day: "Jour 04", title: "Gouvernance, roadmap & conduite du changement", focus: "Pilotage programme" },
      { day: "Jour 05", title: "Cas projet & posture d'architecte", focus: "Synthèse expert" },
    ],
    outcomes: [
      "Concevoir une architecture Finance SAP cohérente et évolutive",
      "Intégrer des cas d'usage IA pertinents dans la transformation",
      "Construire et piloter une roadmap de transformation Finance",
      "Adopter la posture d'architecte attendue par les directions financières",
    ],
    modalities: [
      { label: "Durée", value: "5 jours · 35h" },
      { label: "Modalité", value: "Distanciel encadré + sessions live" },
      { label: "Horaires", value: "9h–12h30 / 14h–17h30" },
      { label: "Supports", value: "Supports premium + cas de transformation réels" },
      { label: "Certification", value: "Attestation CBS Finance Institute" },
      { label: "Accès", value: "Sur échange préalable" },
    ],
    prerequisites: [
      "Expérience confirmée en SAP Finance (FI / CO)",
      "Connaissance d'au moins un projet de transformation SAP",
      "Vision processus Finance de bout en bout",
    ],
  },

  "specialisation-sap-re-fx": {
    slug: "specialisation-sap-re-fx",
    sujet: "Sp%C3%A9cialisation%20SAP%20RE-FX",
    eyebrow: "Spécialisation sectorielle",
    title: "Spécialisation",
    titleAccent: "SAP RE-FX",
    duration: "10 jours · 70h",
    durationDays: "10 jours intensifs",
    level: "Expert",
    format: "Distanciel encadré + sessions live",
    priceConsultant: "5 900 € TTC",
    priceCorporate: "12 500 € HT",
    summary:
      "Le parcours intensif pour devenir spécialiste SAP RE-FX : maîtrise du module Real Estate avancé, processus immobiliers et patrimoniaux, cas concrets sur environnements réels.",
    audience: [
      "Consultants SAP Finance souhaitant se spécialiser en immobilier",
      "Experts RE-FX en montée en compétence",
      "Chefs de projet pilotant un déploiement RE-FX",
      "Profils Finance gérant un patrimoine immobilier important",
    ],
    keyPoints: [
      { title: "Module RE-FX avancé", desc: "Architecture, objets immobiliers et structure du module." },
      { title: "Processus immobiliers", desc: "Baux, charges, refacturation, indexation." },
      { title: "Processus patrimoniaux", desc: "Gestion d'actifs, valorisation, intégration FI / AA." },
      { title: "Cas concrets sur environnements réels", desc: "Mises en pratique sur cas issus de missions." },
      { title: "Posture de spécialiste", desc: "Méthodologie, bonnes pratiques et cadre d'intervention." },
    ],
    modules: [
      { day: "Jour 01", title: "Introduction RE-FX & architecture du module", focus: "Cadrage" },
      { day: "Jour 02", title: "Objets immobiliers & structure de données", focus: "Socle technique" },
      { day: "Jour 03", title: "Gestion des baux & contrats", focus: "Processus baux" },
      { day: "Jour 04", title: "Charges, refacturation & indexation", focus: "Refacturation" },
      { day: "Jour 05", title: "Intégration FI / AA & comptabilité immobilière", focus: "Intégration Finance" },
      { day: "Jour 06", title: "Gestion patrimoniale & valorisation", focus: "Patrimoine" },
      { day: "Jour 07", title: "Reporting & pilotage RE-FX", focus: "Pilotage" },
      { day: "Jour 08", title: "Cas concrets sectoriels", focus: "Mise en pratique" },
      { day: "Jour 09", title: "Posture consultant & méthodologie", focus: "Posture expert" },
      { day: "Jour 10", title: "Synthèse & mise en situation", focus: "Projection mission" },
    ],
    outcomes: [
      "Maîtriser le module SAP RE-FX de bout en bout",
      "Intervenir sur un déploiement ou une optimisation RE-FX",
      "Concevoir une comptabilité immobilière intégrée à SAP Finance",
      "Adopter la posture de spécialiste RE-FX attendue en mission",
    ],
    modalities: [
      { label: "Durée", value: "10 jours · 70h" },
      { label: "Modalité", value: "Distanciel encadré + sessions live" },
      { label: "Horaires", value: "9h–12h30 / 14h–17h30" },
      { label: "Supports", value: "Supports premium + cas concrets RE-FX" },
      { label: "Certification", value: "Attestation CBS Finance Institute" },
      { label: "Accès", value: "Sur échange préalable" },
    ],
    prerequisites: [
      "Connaissance des fondamentaux SAP Finance (FI)",
      "Notions de comptabilité immobilière",
      "Expérience projet SAP appréciée",
    ],
  },
};
