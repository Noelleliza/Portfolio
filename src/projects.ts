export type Project = {
  id: string;
  title: string;
  kind: string;
  year: string;
  role: string;
  desc: string;
  className: string;
  tag: string;
  context: string;
  approach: string;
  learning: string;
  team?: string;
  duration?: string;
  quote?: string;
  tools?: string[];
  translations?: Partial<Record<'fr' | 'en', ProjectTranslation>>;
};

export type ProjectTranslation = {
  title?: string;
  kind?: string;
  role?: string;
  desc?: string;
  tag?: string;
  context?: string;
  approach?: string;
  learning?: string;
  team?: string;
  duration?: string;
  quote?: string;
  tools?: string[];
};

export const projects: Project[] = [
  {
    id: 'legrand-catalogue',
    title: 'A digital catalog for global users',
    kind: 'UX research · Digital catalog',
    year: '',
    role: 'UX research, analysis, design and prototype testing',
    desc: 'Helping global users find current product information, related products and local-language documentation.',
    className: 'art-lilac',
    tag: 'LEGRAND · GLOBAL CATALOG',
    context: 'Legrand, a specialist in electronic products and infrastructures, needed a digital catalog for its global users. Smaller countries had less equal access to resources and faced greater difficulty finding the documentation they needed.',
    approach: 'During a two-month scoping phase, we followed a Double Diamond approach: researching, designing, testing and iterating. My role was to identify user needs through research and analysis, then design and test a prototype against user and business requirements.\n\nResearch was conducted in seven countries by a team of researchers and Legrand stakeholders. I gathered and analyzed the findings to synthesize user needs, pain points and local differences. Users struggled to find up-to-date product information, identify associated products needed for an installation, and access legal documentation in their local language. They often had to consult multiple sources, losing valuable time.\n\nWe shared these findings in a co-creation workshop to define MVP-level features. Using How Might We questions, Idea Napkin and story mapping, participants worked in groups focused on installer, architect and distributor personas.\n\nI then mapped user journeys and developed rough paper sketches before moving to a high-fidelity Figma prototype. We tested and iterated the prototype with end users across roles and countries.',
    learning: 'The tested prototype received an average score of 8/10. It addressed a long-standing need for a digital catalog while remaining simple and accessible.',
    team: 'Researchers and Legrand stakeholders in 7 countries, with data and strategy teams working alongside design.',
    duration: '2-month scoping phase',
    quote: 'I liked what I saw! I don’t really know what there is to improve. It’s looking pretty positive so far. I’m old and used to our old processes, yet what I’m seeing here seems very practical.',
    tools: ['Figma', 'Drive', 'PowerPoint', 'Dropbox'],
    translations: {
      fr: {
        title: 'Un catalogue numérique pour des utilisateurs partout dans le monde',
        kind: 'Recherche UX · Catalogue numérique',
        role: 'Recherche utilisateur, analyse, conception et test du prototype',
        desc: 'Aider les utilisateurs à trouver les informations produits à jour, les produits associés et la documentation dans leur langue.',
        tag: 'LEGRAND · CATALOGUE MONDIAL',
        context: 'Legrand, spécialiste des produits et infrastructures électriques, souhaitait créer un catalogue numérique pour ses utilisateurs à travers le monde. Les petits marchés avaient un accès plus limité aux ressources et rencontraient davantage de difficultés pour trouver la documentation nécessaire.',
        approach: 'Pendant une phase de cadrage de deux mois, nous avons suivi une démarche de Double Diamond : recherche, conception, test et itération. Mon rôle consistait à identifier les besoins utilisateurs par la recherche et l’analyse, puis à concevoir et tester un prototype à partir de ces besoins et des exigences métier.\n\nLa recherche a été menée dans sept pays par une équipe de chercheurs et de parties prenantes de Legrand. J’ai rassemblé et analysé les résultats pour synthétiser les besoins, les irritants et les spécificités locales. Les utilisateurs avaient du mal à trouver les informations produit à jour, à identifier les produits associés nécessaires à une installation et à accéder aux documents juridiques dans leur langue. Ils devaient souvent consulter plusieurs sources et y perdaient du temps.\n\nNous avons présenté ces enseignements lors d’un atelier de co-création pour définir les grandes fonctionnalités du MVP. À l’aide de questions « How might we », de l’exercice Idea Napkin et du story mapping, les participants ont travaillé en groupes autour des profils d’installateur, d’architecte et de distributeur.\n\nJ’ai ensuite cartographié les parcours et réalisé des croquis papier basse fidélité avant de passer à un prototype haute fidélité dans Figma. Nous avons testé et fait évoluer le prototype avec des utilisateurs finaux, dans différents rôles et pays.',
        learning: 'Le prototype testé a obtenu une note moyenne de 8/10. Il répondait à un besoin exprimé de longue date pour un catalogue numérique, tout en restant simple et accessible.',
        team: 'Équipe de recherche et parties prenantes de Legrand dans 7 pays ; les équipes data et stratégie travaillaient en parallèle avec le design.',
        duration: 'Cadrage de 2 mois',
        quote: 'J’ai aimé ce que j’ai vu ! Je ne sais pas vraiment ce qu’il faudrait améliorer. Pour l’instant, ça semble très positif. Je suis âgé et habitué à nos anciens processus, mais ce que je vois ici me paraît très pratique.',
        tools: ['Figma', 'Drive', 'PowerPoint', 'Dropbox'],
      },
    },
  },
];
