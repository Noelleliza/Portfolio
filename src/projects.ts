export type Project = {
  id: string;
  title: string;
  kind: string;
  year: string;
  role?: string;
  desc: string;
  className: string;
  tag: string;
  contextTitle?: string;
  approachTitle?: string;
  outcomeTitle?: string;
  context?: string;
  approach?: string;
  learning?: string;
  team?: string;
  duration?: string;
  quote?: string;
  tools?: string[];
  client?: string;
  translations?: Partial<Record<'fr' | 'en', ProjectTranslation>>;
};

export type ProjectTranslation = {
  title?: string;
  kind?: string;
  role?: string;
  desc?: string;
  tag?: string;
  contextTitle?: string;
  approachTitle?: string;
  outcomeTitle?: string;
  context?: string;
  approach?: string;
  learning?: string;
  team?: string;
  duration?: string;
  quote?: string;
  tools?: string[];
  client?: string;
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
    client: 'Legrand',
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
        client: 'Legrand',
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
  {
    id: 'addiction-care-access',
    title: 'Improving access to care for people with alcohol addiction',
    kind: 'Case study',
    year: '',
    role: 'Senior UX Researcher & Service Designer',
    desc: 'How can we support people going through alcohol addiction who cannot easily access care?',
    className: 'art-green',
    tag: 'Kamet - Clariane - Access to Care',
    client: 'Kamet · Clariane',
    contextTitle: 'Making care available to people who need it.',
    context: 'In collaboration with Clariane, the project explored chronic diseases and innovative solutions that could be developed into startups. Addiction was selected as an important area to address: more people need support for substance use than there are care solutions available. The mission was to help people affected by dependency who need care but are not currently able to access treatment.',
    approachTitle: 'Research, co-creation and iterative validation.',
    approach: 'Over the course of a year, I led the design strategy and design work toward a viable proof of concept. We combined market and user research with desk research and interviews with psychiatrists, clinic directors, Alcoholics Anonymous representatives and people who drink alcohol to better understand addiction and its ecosystem.\n\nWe ran collaborative ideation workshops with addiction experts and patient representatives. One workshop brought together 20 participants, including economists, clinic directors, patients and psychologists, to explore four topics using empathy mapping, idea generation and a Design Napkin exercise. We mapped current and future user journeys, then refined the concepts into storyboards.\n\nWe validated the concepts through nine 60-minute interviews with people living with alcohol dependence who had received care from a hospital, rehabilitation facility or psychiatrist. We presented an illustrated storyboard of the target patient journey and used the AXE testing method to gather feedback. The response was overwhelmingly positive and gave us insights to adapt the concept and move into wireframing and visual identity.\n\nAfter validation, we prioritized patient and doctor needs in a story-mapping workshop. This informed the first service pathways and wireframes, evolving from rough paper sketches to high-fidelity screens and prototypes.',
    outcomeTitle: 'A validated concept launched as Eos Care.',
    learning: 'Once the value proposition, business model and MVP were designed and validated, a CEO, CTO and medical team were selected to finalize development and launch the service. Eos Care was launched and now supports people day to day on their alcohol addiction journey and in pursuing their personal goals.',
    team: 'Clariane, addiction experts and patient representatives; a CEO, CTO and medical team were then selected to launch the service.',
    duration: '1 year',
    tools: ['Figma', 'PowerPoint', 'Miro', 'Google Drive'],
    translations: {
      fr: {
        title: 'Faciliter l’accès aux soins pour les personnes concernées par l’alcoolodépendance',
        kind: 'Étude de cas',
        role: 'Senior UX Researcher & Service Designer',
        desc: 'Comment accompagner les personnes confrontées à l’alcoolodépendance qui n’accèdent pas facilement aux soins ?',
        tag: 'Kamet - Clariane - Accès aux soins',
        client: 'Kamet · Clariane',
        contextTitle: 'Rendre les soins accessibles aux personnes qui en ont besoin.',
        context: 'En collaboration avec Clariane, le projet explorait les maladies chroniques et des solutions innovantes pouvant donner naissance à des startups. L’addiction a été choisie comme enjeu prioritaire : les besoins de soutien liés à l’usage de substances dépassent l’offre de soins disponible. La mission était d’aider les personnes concernées par une dépendance qui ont besoin de soins mais ne peuvent pas actuellement accéder à un accompagnement.',
        approachTitle: 'Recherche, co-création et validation itérative.',
        approach: 'Pendant un an, j’ai piloté la stratégie et le travail de design pour aboutir à une preuve de concept viable. Nous avons associé recherche de marché et recherche utilisateur à une recherche documentaire et à des entretiens avec des psychiatres, des directeurs de clinique, des représentants des Alcooliques anonymes et des personnes qui consomment de l’alcool, afin de mieux comprendre l’addiction et son écosystème.\n\nNous avons mené des ateliers d’idéation avec des experts de l’addiction et des représentants de patients. Un atelier a réuni 20 personnes — économistes, directeurs de clinique, patients et psychologues — autour de quatre sujets, à l’aide de cartes d’empathie, d’exercices d’idéation et d’un Design Napkin. Nous avons cartographié les parcours actuels et futurs, puis précisé les concepts sous forme de storyboards.\n\nNous avons validé les concepts au cours de neuf entretiens de 60 minutes avec des personnes vivant avec une dépendance à l’alcool et ayant reçu des soins à l’hôpital, dans un centre de réadaptation ou auprès d’un psychiatre. Nous avons présenté un storyboard illustrant le parcours patient cible et utilisé la méthode de test AXE pour recueillir leurs retours. L’accueil a été très positif et les enseignements nous ont permis d’ajuster le concept avant de passer aux wireframes et à l’identité visuelle.\n\nAprès validation, nous avons priorisé les besoins des patients et des médecins lors d’un atelier de story mapping. Cela a nourri les premiers parcours de service et les wireframes, des croquis papier jusqu’aux écrans et prototypes haute fidélité.',
        outcomeTitle: 'Un concept validé, lancé sous le nom Eos Care.',
        learning: 'Après la conception et la validation de la proposition de valeur, du modèle économique et du MVP, un CEO, un CTO et une équipe médicale ont été réunis pour finaliser le développement et lancer le service. Eos Care a été lancé et accompagne désormais des personnes au quotidien dans leur parcours lié à l’alcoolodépendance et vers leurs objectifs personnels.',
        team: 'Clariane, experts de l’addiction et représentants de patients ; un CEO, un CTO et une équipe médicale ont ensuite été réunis pour lancer le service.',
        duration: '1 an',
        tools: ['Figma', 'PowerPoint', 'Miro', 'Google Drive'],
      },
    },
  },
  {
    id: 'digital-wallonia',
    title: 'Digital Wallonia',
    kind: 'Case study',
    year: '',
    role: 'Senior UX Designer',
    desc: 'Connecting startups and the tech industry.',
    className: 'art-lilac',
    tag: 'DIGITAL WALLONIA · DIGITAL ECOSYSTEM',
    client: 'Digital Wallonia',
    contextTitle: 'Helping people find their way through a data-rich platform.',
    context: 'Digital Wallonia is Belgium’s platform for representing and connecting Wallonia’s digital strategy and network. With a large volume of information to share, the client wanted to refresh the website so it would be more user-friendly and personalize content around the needs of different audiences. My role was to rethink the user journeys and create an MVP prototype.',
    approachTitle: 'Researching needs, structuring content and testing flows.',
    approach: 'We identified stakeholder needs and collaborated with the client and technology team to redesign and develop a more user-friendly MVP. The work included interviews, workshops and usability tests. A UI designer joined midway through the project to define the visual identity and the final look of the screens.\n\nResearch and definition took place in three stages:\n• A short workshop to identify target users and their jobs to be done.\n• Interviews with about a dozen stakeholders, including Digital Wallonia partners, to confirm business expectations.\n• A workshop with the client and users from four groups: government administration, service providers, digital experts and non-expert service seekers. We used empathy maps and Core & Path exercises.\n\nThe research surfaced three main pain points: search was difficult when users did not know the exact terms to enter; without personalized content, people could get lost and miss relevant information; and some users were unsure what Digital Wallonia was and who ran it.\n\nWe used the findings to explore ways to help people find relevant content faster. I drew on Marcia Bates’s model of information seeking to consider useful search tools for each profile. We clustered content in Miro, sketched user journeys and screens, and tested the structure and flows with people from all four groups.',
    outcomeTitle: 'A more relevant entry point, validated with users.',
    learning: 'We tested the prototype with about a dozen participants across all four user groups. Participants saw a substantial improvement over the existing website and felt the direction was right. The most appreciated feature was a personalized entry point. Some participants found the vocabulary too expert-centric. The final phase applied the new visual identity to the screens and developed the MVP.',
    team: 'Digital Wallonia partners, the client and technology team; later, a UI designer and developers.',
    quote: 'I am really satisfied with how things are going. Things are clearer for me now as to what to do. I think it’s important to say something when you’re happy.',
    tools: ['Figma', 'Miro', 'Dropbox', 'PowerPoint'],
    translations: {
      fr: {
        title: 'Digital Wallonia',
        kind: 'Étude de cas',
        role: 'Senior UX Designer',
        desc: 'Relier les startups et le secteur technologique.',
        tag: 'DIGITAL WALLONIA · ÉCOSYSTÈME NUMÉRIQUE',
        client: 'Digital Wallonia',
        contextTitle: 'Aider chacun à se repérer dans une plateforme riche en informations.',
        context: 'Digital Wallonia est la plateforme belge qui représente et relie la stratégie et le réseau numériques de la Wallonie. Face au volume important d’informations à partager, le client souhaitait actualiser le site afin de le rendre plus simple à utiliser et de personnaliser les contenus selon les besoins des différents publics. Mon rôle consistait à repenser les parcours utilisateurs et à créer un prototype de MVP.',
        approachTitle: 'Comprendre les besoins, structurer les contenus et tester les parcours.',
        approach: 'Nous avons identifié les besoins des parties prenantes et collaboré avec le client et l’équipe technique pour repenser et développer un MVP plus simple à utiliser. Le travail comprenait des entretiens, des ateliers et des tests utilisateurs. Une UI designer a rejoint le projet en cours de route pour définir l’identité visuelle et l’apparence finale des écrans.\n\nLa recherche et le cadrage se sont déroulés en trois étapes :\n• Un atelier court pour identifier les publics cibles et leurs tâches à accomplir.\n• Des entretiens avec une douzaine de parties prenantes, dont des partenaires de Digital Wallonia, afin de confirmer les attentes métier.\n• Un atelier avec le client et des utilisateurs de quatre groupes : administrations publiques, prestataires de services, experts du numérique et personnes en recherche de services sans expertise particulière. Nous avons utilisé des cartes d’empathie et des exercices Core & Path.\n\nLa recherche a fait ressortir trois principaux irritants : la recherche était difficile lorsque les utilisateurs ne connaissaient pas les termes exacts ; sans contenus personnalisés, ils pouvaient se perdre et passer à côté d’informations pertinentes ; enfin, certains ne comprenaient pas clairement ce qu’était Digital Wallonia ni qui gérait la plateforme.\n\nÀ partir de ces enseignements, nous avons imaginé des moyens d’aider chacun à trouver plus vite les contenus pertinents. Je me suis appuyée sur le modèle de recherche d’information de Marcia Bates pour envisager des outils de recherche adaptés à chaque profil. Nous avons regroupé les contenus dans Miro, esquissé les parcours et les écrans, puis testé la structure et les flux avec des personnes des quatre groupes.',
        outcomeTitle: 'Une entrée plus pertinente, validée avec les utilisateurs.',
        learning: 'Nous avons testé le prototype avec une douzaine de participants issus des quatre groupes d’utilisateurs. Ils ont constaté une nette amélioration par rapport au site existant et estimaient que le projet allait dans la bonne direction. La fonctionnalité la plus appréciée était la possibilité d’avoir un point d’entrée personnalisé. Certains participants trouvaient le vocabulaire trop centré sur les experts. La dernière phase a consisté à appliquer la nouvelle identité visuelle aux écrans et à développer le MVP.',
        team: 'Partenaires de Digital Wallonia, client et équipe technique ; puis une UI designer et des développeurs.',
        quote: 'Je suis vraiment satisfaite de la façon dont les choses avancent. Je vois plus clairement ce que je dois faire. Je pense qu’il est important de le dire quand on est content.',
        tools: ['Figma', 'Miro', 'Dropbox', 'PowerPoint'],
      },
    },
  },
  {
    id: 'cancer-hospital-experience',
    title: 'Improving the hospital experience for people with cancer',
    kind: 'Healthcare · Pharma · Oncology',
    year: '',
    role: 'UX & Service Designer',
    desc: 'Making hospital treatment more understandable and waiting time more comfortable for people receiving immunotherapy.',
    className: 'art-lilac',
    tag: 'Healthcare - Pharma - Oncology',
    contextTitle: 'Understanding the experience around treatment.',
    context: 'An international medical company providing treatments, including an immunotherapy used for some forms of cancer, wanted to better understand patients’ experience during and after treatment. The team had limited insight into what patients experienced immediately before and after receiving medication. The project explored ways to improve the hospital experience throughout treatment.',
    approachTitle: 'Research, co-creation and concept testing.',
    approach: 'I prepared and co-led a dozen interviews with industry professionals, including hospital oncologists and patient-association representatives. We then observed and interviewed patients and healthcare staff in three hospitals in Paris, Strasbourg and Nantes. In a co-creation workshop, patients and healthcare professionals brainstormed solutions together. I designed several concepts as storyboards and tested them with patients.\n\nInterviews with doctors, nurses and patients across four hospitals around Paris revealed that the main pain point was not a side effect of the medication, as we had expected. Patients spent a long time waiting at the hospital, sometimes losing a whole day for just a few hours of medical attention. They were also confused by the time between an oncologist appointment and receiving treatment, and often did not know why the process took so long.\n\nWe explored three directions: improving treatment preparation and administration to shorten waits; making the waiting room more pleasant; and creating a mobile app or in-hospital terminal to explain schedules, waiting times and appointments. Workshop groups used brainstorming, Crazy 8s, elevator pitches, user journeys and solution napkins to develop ideas. We selected the waiting-room and information-service concepts for testing. Because the services were complex, we used illustrated scenarios and the AXE testing method to validate them.',
    outcomeTitle: 'Patients valued both comfort and clear information.',
    learning: 'Patients responded positively to both concepts and found it difficult to choose between them. They valued being informed in real time about their visit as well as having a more enjoyable waiting space. When asked to choose, most preferred an improved waiting room because it felt warmer and more welcoming during a difficult time.',
    team: 'Patients, healthcare professionals, hospital staff, oncologists and patient-association representatives.',
    tools: ['Figma', 'Dropbox', 'PowerPoint'],
    quote: 'In these scenarios, I’d get great pleasure from waiting. There is meaning in the activities and services proposed. It makes us happy to wait!',
    translations: {
      fr: {
        title: 'Améliorer l’expérience à l’hôpital des personnes atteintes d’un cancer',
        kind: 'Santé · Pharmacie · Oncologie',
        role: 'UX & Service Designer',
        desc: 'Rendre les traitements à l’hôpital plus compréhensibles et les temps d’attente plus agréables pour les personnes recevant une immunothérapie.',
        tag: 'Santé - Pharmacie - Oncologie',
        contextTitle: 'Comprendre l’expérience autour du traitement.',
        context: 'Une entreprise médicale internationale, qui propose notamment une immunothérapie utilisée pour certaines formes de cancer, souhaitait mieux comprendre l’expérience des patients pendant et après leur traitement. L’équipe disposait de peu d’informations sur ce que vivaient les patients juste avant et après l’administration du médicament. Le projet explorait des moyens d’améliorer l’expérience à l’hôpital tout au long du traitement.',
        approachTitle: 'Recherche, co-création et test de concepts.',
        approach: 'J’ai préparé et co-animé une douzaine d’entretiens avec des professionnels du secteur, notamment des oncologues hospitaliers et des représentants d’associations de patients. Nous avons ensuite observé et interrogé des patients et des professionnels de santé dans trois hôpitaux à Paris, Strasbourg et Nantes. Lors d’un atelier de co-création, patients et soignants ont imaginé des solutions ensemble. J’ai conçu plusieurs concepts sous forme de storyboards, puis les ai testés avec des patients.\n\nLes entretiens avec des médecins, des infirmiers et des patients dans quatre hôpitaux autour de Paris ont révélé que le principal irritant n’était pas un effet secondaire du médicament, comme nous l’avions supposé. Les patients passaient beaucoup de temps à attendre à l’hôpital, parfois une journée entière pour seulement quelques heures de prise en charge. Ils ne comprenaient pas toujours le délai entre un rendez-vous avec l’oncologue et l’administration du traitement, ni pourquoi le processus était si long.\n\nNous avons exploré trois pistes : améliorer la préparation et l’administration du traitement pour réduire l’attente ; rendre la salle d’attente plus agréable ; et créer une application mobile ou une borne à l’hôpital pour expliquer les horaires, les temps d’attente et les rendez-vous. Les groupes de l’atelier ont utilisé le brainstorming, les Crazy 8s, des elevator pitches, des parcours utilisateurs et des solution napkins pour développer des idées. Nous avons retenu les concepts de salle d’attente et de service d’information pour les tester. La complexité des services nous a conduits à utiliser des scénarios illustrés et la méthode de test AXE.',
        outcomeTitle: 'Les patients ont apprécié le confort et la clarté des informations.',
        learning: 'Les patients ont réagi positivement aux deux concepts et avaient du mal à choisir entre eux. Ils appréciaient de recevoir des informations en temps réel sur leur visite et de disposer d’un espace d’attente plus agréable. Lorsqu’il a fallu choisir, la majorité a préféré une salle d’attente améliorée, plus chaleureuse et accueillante pendant cette période difficile.',
        team: 'Patients, professionnels de santé, équipes hospitalières, oncologues et représentants d’associations de patients.',
        tools: ['Figma', 'Dropbox', 'PowerPoint'],
        quote: 'Dans ces scénarios, attendre me ferait vraiment plaisir. Les activités et les services proposés ont du sens. Cela nous rend heureux d’attendre !',
      },
    },
  },
  {
    id: 'siview-ai-eye-exams',
    title: 'Building trust in autonomous eye exams with SiView',
    kind: 'UX research · UX design · Healthtech',
    year: '',
    role: 'UX Designer & Researcher',
    desc: 'Refining the SelfRef autonomous eye-exam experience and validating it with US practitioners and patients ahead of Vision Expo.',
    className: 'art-green',
    tag: 'SIVIEW · AUTONOMOUS EYE EXAMS',
    client: 'SiView',
    contextTitle: 'Preparing an autonomous eye exam for a US launch.',
    context: 'SiView, a French scale-up developing AI-driven services for eye exams, was preparing to present its SelfRef autonomous eye-exam product at a US-based expo. The team needed to refine the existing journey, improve the English wording translated from French, and validate the experience. The scope covered the end-to-end autonomous exam and the supporting Android screens.',
    approachTitle: 'Research, design and validate under a tight schedule.',
    approach: 'I structured the work into four phases: onboarding and research to understand the product and its strengths and challenges; rapid UX design to formalize the journey and create clickable test prototypes; user testing with US optometrists, ophthalmologists and patients; then synthesis, design iterations and client validation.\n\nI completed the eye exam myself, facilitated sessions with colleagues, reviewed the existing experience, and interviewed product owners, engineers and optometrists to understand earlier design decisions and technical constraints. I formalized the clinic and store journey and conducted a UX audit of the SelfRef and SiView exam, identifying strengths, pain points and quick wins. Recommendations covered patient onboarding and reassurance, clearer remote-control interactions, simpler practitioner workflows, and concise, less ambiguous instructions adapted for English.\n\nThe design work spanned three layers: UX writing and a clickable prototype for the existing exam flow; a digital simulation of the eye exam to support remote testing; and a monitoring interface for practitioners. Although the product had been validated with industry buyers, it had seen little patient testing. I recommended testing with both practitioners and end users to assess real-world usability and trust, not just commercial interest.\n\nTesting uncovered a key adoption barrier: many US patients worried about the financial consequences of an inaccurate prescription and were hesitant to trust an autonomous exam. This shifted the design focus toward transparency, reassurance and confidence throughout the experience.',
    outcomeTitle: 'A validated experience and clear evidence for adoption.',
    learning: 'Ahead of Vision Expo, the user flow, English copy and product pitch were refined and validated. Feedback from practitioners and patients strengthened SiView’s product narrative and gave the team evidence for discussions with potential customers. Testing also revealed trust barriers that informed later product improvements, including a patient onboarding video and other features to build confidence in the autonomous eye exam.',
    team: 'SiView product owners, engineers, optometrists, ophthalmologists and patients in the United States.',
    tools: ['Figma'],
    translations: {
      fr: {
        title: 'Renforcer la confiance dans l’examen de la vue autonome avec SiView',
        kind: 'Étude de cas',
        role: 'UX Designer & Researcher',
        desc: 'Améliorer l’expérience de l’examen autonome SelfRef et la valider auprès de professionnels de santé et de patients américains avant Vision Expo.',
        tag: 'SIVIEW · EXAMEN DE LA VUE AUTONOME',
        client: 'SiView',
        contextTitle: 'Préparer le lancement américain d’un examen de la vue autonome.',
        context: 'SiView, une scale-up française qui développe des services d’examen de la vue fondés sur l’IA, préparait la présentation de son produit SelfRef lors d’un salon aux États-Unis. L’équipe souhaitait améliorer le parcours existant, retravailler sa version anglaise traduite du français et valider l’expérience. Le périmètre couvrait l’examen autonome de bout en bout et les écrans Android associés.',
        approachTitle: 'Rechercher, concevoir et valider dans un délai serré.',
        approach: 'J’ai structuré le projet en quatre phases : une prise en main et une recherche pour comprendre le produit, ses points forts et ses difficultés ; une conception UX rapide pour formaliser le parcours et créer des prototypes cliquables à tester ; des tests utilisateurs avec des optométristes, ophtalmologues et patients américains ; puis la synthèse, les itérations de design et la validation client.\n\nJ’ai moi-même réalisé l’examen, organisé des sessions avec des collègues, évalué l’expérience existante et interrogé les product owners, ingénieurs et optométristes afin de comprendre les choix de conception antérieurs et les contraintes techniques. J’ai formalisé le parcours en clinique et en magasin et réalisé un audit UX des interfaces SelfRef et SiView, en identifiant les points forts, les irritants et les améliorations rapides. Les recommandations portaient sur l’accueil et la réassurance des patients, des interactions plus claires avec la télécommande, des parcours praticiens simplifiés et des instructions concises, moins ambiguës et adaptées à l’anglais.\n\nLe travail de conception couvrait trois niveaux : le contenu UX et un prototype cliquable du parcours existant ; une simulation numérique de l’examen pour permettre des tests à distance ; et une interface de suivi pour les professionnels. Le produit avait déjà été validé par des acheteurs du secteur, mais très peu testé avec des patients. J’ai recommandé d’inclure praticiens et utilisateurs finaux pour évaluer l’utilisabilité et la confiance en situation réelle, au-delà de l’intérêt commercial.\n\nLes tests ont révélé un frein important à l’adoption : de nombreux patients américains craignaient les conséquences financières d’une prescription inexacte et hésitaient à faire confiance à un examen autonome. Ce constat a réorienté une partie du design vers la transparence, la réassurance et la confiance tout au long du parcours.',
        outcomeTitle: 'Une expérience validée et des éléments concrets pour favoriser l’adoption.',
        learning: 'À temps pour Vision Expo, le parcours utilisateur, les contenus en anglais et le pitch produit ont été affinés et validés. Les retours des praticiens et des patients ont renforcé le discours produit de SiView et apporté à l’équipe des éléments concrets pour échanger avec des clients potentiels. Les tests ont aussi révélé des freins liés à la confiance, qui ont nourri les améliorations ultérieures, notamment l’ajout d’une vidéo d’accueil pour les patients et d’autres fonctionnalités visant à les rassurer.',
        team: 'Product owners, ingénieurs et optométristes de SiView, ainsi que des ophtalmologues et patients aux États-Unis.',
        tools: ['Figma'],
      },
    },
  },
  {
    id: 'kering-new-pos',
    title: 'Choosing and adopting a new POS across Kering',
    kind: 'Service design · POS adoption',
    year: '',
    role: 'Service Designer',
    desc: 'Researching store teams’ needs and mapping a smooth transition to a new point-of-sale system across brands and countries.',
    className: 'art-lilac',
    tag: 'KERING · POS ADOPTION',
    client: 'Kering',
    contextTitle: 'A global POS transition across multiple luxury brands.',
    context: 'Kering needed to transition to a new point-of-sale (POS) system. The group needed help identifying the right solution and creating a deployment plan to organize the switch worldwide and across its brands. My role was to identify relevant use cases and the needs of sales associates, then help shape a user-friendly POS choice and adoption strategy.',
    approachTitle: 'Research, benchmark and plan adoption.',
    approach: 'An adoption factory brought together designers, growth hackers, a product owner and a project manager through several iterations. The first iteration focused on POS use cases and adoption insights through user research, and produced an initial blueprint. The second benchmarked solutions through interviews with bidding clients. The final iteration focused on the adoption strategy and communication plan.\n\nResearch began with stakeholder interviews: nine participants across brands and the Kering group, including brand operation managers, IT and POS experts, and project leaders. We explored business needs, concerns and expectations for the new POS and adoption strategy, while identifying differences between brands.\n\nI then led field research with six major brands — Gucci, Saint Laurent, Alexander McQueen, Balenciaga, Bottega Veneta and Brioni — across five countries: France, the USA, Italy, China and Japan. In three store formats (stand-alone, airport and mall), we used one-to-one interviews, in-situ fly-on-the-wall observations and guerrilla-style interviews with sales associates. I synthesized use cases, needs, pain points and insights by store type, brand and country, then created personas, empathy maps and user journeys.\n\nWe shared the findings at a large workshop with the brands, Kering group IT and project leaders to prioritize needs and collaboratively inform the POS choice. In the next iteration, I interviewed four bidder clients to understand their selection criteria and deployment experiences. I also worked with a growth hacker and communications expert to create a clear, neutral survey that quantified the qualitative findings. Finally, I created a service design blueprint for the international adoption process, coordinating teams and resources across brands.',
    outcomeTitle: 'A POS was selected, with a validated transition plan.',
    learning: 'Kering selected a new POS from the bidding suppliers and validated a rollout plan for integration. In the final iteration, I provided additional research context and updated the blueprint as needed to support the adoption strategy.',
    team: 'Designers, growth hackers, a product owner, a project manager, Kering group IT, brand teams and POS supplier bidders.',
    tools: ['Dropbox', 'PowerPoint', 'Miro', 'Excel', 'UXPressia'],
    translations: {
      fr: {
        title: 'Choisir et déployer un nouveau POS chez Kering',
        kind: 'Étude de cas',
        role: 'Service Designer',
        desc: 'Comprendre les besoins des équipes en magasin et planifier une transition fluide vers un nouveau système de point de vente pour plusieurs marques et pays.',
        tag: 'KERING · ADOPTION DU POS',
        client: 'Kering',
        contextTitle: 'Une transition mondiale pour plusieurs maisons de luxe.',
        context: 'Kering devait migrer vers un nouveau système de point de vente (POS). Le groupe avait besoin d’aide pour identifier la solution adaptée et créer un plan de déploiement à l’échelle mondiale et pour l’ensemble de ses marques. Mon rôle consistait à identifier les cas d’usage pertinents et les besoins des équipes de vente, puis à contribuer au choix d’un POS simple à utiliser et à la stratégie d’adoption.',
        approachTitle: 'Recherche, benchmark et plan d’adoption.',
        approach: 'Une « adoption factory » réunissait designers, growth hackers, un product owner et un chef de projet au fil de plusieurs itérations. La première portait sur les cas d’usage POS et les enseignements liés à l’adoption, grâce à la recherche utilisateur, et a abouti à un premier blueprint. La deuxième comparait les solutions à partir d’entretiens avec des clients ayant participé aux appels d’offres. La dernière était consacrée à la stratégie d’adoption et au plan de communication.\n\nLa recherche a commencé par des entretiens avec neuf parties prenantes de différentes marques et du groupe Kering : responsables des opérations de marque, experts IT et POS et chefs de projet. Nous avons exploré les besoins métier, les préoccupations et les attentes concernant le nouveau POS et sa stratégie d’adoption, tout en identifiant les particularités de chaque maison.\n\nJ’ai ensuite mené une étude de terrain auprès de six grandes marques — Gucci, Saint Laurent, Alexander McQueen, Balenciaga, Bottega Veneta et Brioni — dans cinq pays : la France, les États-Unis, l’Italie, la Chine et le Japon. Dans trois types de magasins (boutiques indépendantes, aéroports et centres commerciaux), nous avons combiné entretiens individuels, observations discrètes en situation et entretiens spontanés avec les équipes de vente. J’ai synthétisé les cas d’usage, besoins, irritants et enseignements par type de magasin, marque et pays, puis créé des personas, cartes d’empathie et parcours utilisateurs.\n\nNous avons partagé les résultats lors d’un grand atelier réunissant les marques, l’IT du groupe Kering et les chefs de projet, afin de prioriser les besoins et d’éclairer collectivement le choix du POS. Lors de l’itération suivante, j’ai interrogé quatre clients des fournisseurs candidats sur leurs critères de choix et leur expérience de déploiement. Avec un growth hacker et une experte en communication, j’ai également contribué à un questionnaire clair et neutre pour quantifier les résultats qualitatifs. Enfin, j’ai conçu un blueprint de service pour le processus d’adoption international, en coordonnant équipes et ressources entre les marques.',
        outcomeTitle: 'Un POS choisi et un plan de transition validé.',
        learning: 'Kering a sélectionné un nouveau POS parmi les fournisseurs candidats et validé un plan de déploiement pour son intégration. Lors de la dernière itération, j’ai apporté des éléments complémentaires issus de la recherche et mis à jour le blueprint pour soutenir la stratégie d’adoption.',
        team: 'Designers, growth hackers, product owner, chef de projet, IT du groupe Kering, équipes des marques et fournisseurs POS candidats.',
        tools: ['Dropbox', 'PowerPoint', 'Miro', 'Excel', 'UXPressia'],
      },
    },
  },
];
