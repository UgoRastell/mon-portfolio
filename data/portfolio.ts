import type { PortfolioData } from "@/types/portfolio";

export const DATA: PortfolioData = {
  name: "Ugo Rastell",
  title: "Développeur Web Full Stack & Chef de Projet Digital",
  description: "Diplômé de l'EEMI, je recherche une alternance en développement web. Je conçois des solutions numériques performantes et esthétiques.",
  about: "Étudiant en Master 'Manager de l’ingénierie numérique' à l'EEMI - Ecole Européenne des Métiers de l'Internet, je suis passionné par le développement web Full Stack (Symfony, C# / .NET, React). Fort d'une double compétence en gestion de projet agile et en développement technique, je cherche une alternance pour concevoir des solutions numériques innovantes et performantes.",
  avatarUrl: "/me.jpg",
  skills: [
    "HTML5 / CSS3",
    "Symfony",
    "C# / .NET",
    "React.js",
    "WordPress",
    "Docker",
    "Gestion de Projet Agile",
    "Anglais Technique",
  ],
  technicalSkills: {
    frontend: ["React", "Next.js", "Tailwind CSS", "HTML5 / CSS3", "JavaScript / TypeScript"],
    backend: ["PHP 8", "Symfony", "C# / .NET", "SQL / MySQL", "WordPress"],
    tools: ["Git / GitHub", "Docker", "Figma", "VS Code"],
    other: ["Méthode Agile / Scrum", "Anglais Technique (Documentation)", "Suite Adobe (Premiere Pro)"]
  },
  experience: [
    {
      company: "Comité régional de Normandie de Gymnastique",
      role: "Développeur Web en Alternance",
      period: "Sept 2022 - Présent",
      description: "Maintenance évolutive et corrective d'un parc de 5 sites WordPress. Conception d'outils internes automatisant les processus administratifs (réduction de 60% du temps de traitement). Amélioration du temps de chargement des pages de 40% et mise en place de sauvegardes automatisées.",
    },
    {
      company: "Comité régional de Normandie de Gymnastique",
      role: "Créateur de Contenu Digital",
      period: "Nov 2021 - Juil 2022",
      description: "Production et post-production de contenus vidéos hebdomadaires (1 vidéo/semaine, 40+ vidéos produites). Stratégie social media ayant généré +20% d'engagement et +35% d'abonnés sur les réseaux de la fédération.",
    },
    {
      company: "Comité régional de Normandie de Gymnastique",
      role: "Support Informatique (Stage)",
      period: "Mai 2018 - 2019",
      description: "Maintenance préventive et corrective du parc informatique (10 postes, 2 serveurs). Résolution de 50+ tickets d'assistance niveau 1 et déploiement de la configuration standard des postes, réduisant les incidents récurrents de 30%.",
    },
  ],
  education: [
    {
      school: "EEMI - Ecole Européenne des Métiers de l'Internet",
      degree: "Master Manager de l’ingénierie numérique",
      period: "2024 - 2026",
    },
    {
      school: "EEMI - Ecole Européenne des Métiers de l'Internet",
      degree: "Chef de projets digitaux Option Développement Web",
      period: "2021 - 2024",
    },
  ],
  socials: {
    github: "https://github.com/UgoRastell",
    linkedin: "https://www.linkedin.com/in/ugo-rastell",
    email: "urastell@protonmail.com",
    tel: "+33 6 95 05 18 98",
  },
  projects: [
    {
      id: 1,
      title: "Portfolio Personnel",
      desc: "Site vitrine néo-brutaliste pour présenter mes compétences et projets. Architecture Next.js 16 avec App Router, SEO optimisé (sitemap, JSON-LD, OpenGraph) et score Lighthouse élevé.",
      tech: ["Next.js 16", "Tailwind CSS", "TypeScript"],
      link: process.env.NEXT_PUBLIC_SITE_URL || "https://ugorastell.com",
      sourceUrl: "https://github.com/UgoRastell/mon-portfolio",
    },
    {
      id: 2,
      title: "Plateforme E-commerce",
      desc: "Développement d'une application complète de vente en ligne avec architecture MVC. Gestion des produits, panier, commandes et paiement sécurisé.",
      tech: ["Symfony 6", "MySQL", "Stripe API", "Twig", "Bootstrap"],
      link: "",
      sourceUrl: "https://github.com/UgoRastell/ecommerce-platform",
    },
  ],
};
