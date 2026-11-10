import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects as initialProjects, type Project } from './projects';
import { fetchPublishedProjects, supabaseConfigured } from './supabase';
import './style.css';

type Language = 'fr' | 'en';
const cvUrl = '/noelle-lewkowicz-cv-en-2026.pdf';
const cvFrUrl = '/noelle-lewkowicz-cv-fr-2026.pdf';
gsap.registerPlugin(ScrollTrigger);

const copy = {
  fr: {
    documentTitle: 'Noëlle Lewkowicz — Lead UX Designer',
    description: 'Noëlle Lewkowicz, Lead UX Designer franco-américaine à Paris. UX research, stratégie et service design.',
    language: 'Choisir la langue', french: 'Français', english: 'Anglais', menuOpen: 'Ouvrir le menu', menuClose: 'Fermer le menu',
    navProjects: 'Projets', navAbout: 'À propos', navCv: 'CV', navContact: 'Me contacter',
    heroEyebrow: 'LEAD UX DESIGNER · UX STRATÉGIE & RECHERCHE · PARIS',
    heroTitle: <>Je suis Noëlle,<br /><em>UX designer</em><br />franco-américaine,<br /><em>researcher et designer<br />de services.</em></>,
    heroDescription: 'J’accompagne les équipes de la recherche à la stratégie et à la conception de services.',
    seeProjects: 'Voir mes projets', letsTalk: 'Parlons-en', heroSticker: <>curiosité<br />en mouvement ↗</>,
    intro: <>Je transforme les sujets complexes en expériences <em>claires, cohérentes et inclusives.</em></>,
    sectionProjects: 'Projets choisis', projectEyebrow: 'PORTFOLIO · UX DESIGN · SERVICE DESIGN', projectIntro: 'Des projets, de la problématique aux résultats.', projectsPending: 'EN PRÉPARATION', projectsEmpty: 'D’autres études de cas seront bientôt disponibles.',
    roleLabel: 'Rôle', aboutLabel: '02 — À PROPOS', aboutTitle: <>La curiosité<br /><em>comme boussole.</em></>,
    aboutParagraphs: [
      'Ayant grandi en France avec une double culture franco-américaine, j’avais deux certitudes très tôt : je voulais exercer un métier créatif, et vivre un jour aux États-Unis.',
      'J’ai eu la chance de réaliser les deux. En 2011, j’ai obtenu mon diplôme à Parsons, à New York, où je suis restée six ans. J’ai travaillé dans la mode et le design graphique. J’ai notamment découvert le plaisir de structurer l’information, de concevoir des présentations et de transformer des idées complexes en récits clairs et engageants.',
      'Je me suis aussi intéressée de plus en plus à ce qui précède le processus de design. Comprenions-nous vraiment les besoins des personnes ? Pourquoi certains produits étaient-ils des « best-sellers » ? Qu’apprendrait-on en posant de meilleures questions plutôt qu’en répétant ce qui avait déjà fonctionné ?',
      'Cette curiosité m’a menée vers l’UX design et la recherche, que j’ai approfondis à SVA et Bloc en 2016–2017, avant de revenir à Paris, où je travaille dans l’UX et le service design depuis.',
      'Aujourd’hui, je travaille au croisement de la recherche, de la stratégie, du design et du storytelling. J’aime explorer des problèmes complexes, donner du sens à ce que j’apprends et transformer les enseignements en expériences, services et orientations concrètes. Mon parcours en design visuel reste au cœur de ma façon de communiquer les idées et d’embarquer les équipes.',
      'J’enseigne aussi, dans le prolongement naturel de ma pratique. J’ai enseigné le Design Fiction au CNAM et, depuis septembre 2026, j’enseigne l’UX & Service Design et le Design Fiction à Penninghen. L’enseignement entretient ma curiosité, me pousse à questionner mes idées reçues et me donne l’occasion de transmettre et de repenser ce que j’ai appris.',
      'Après plus de dix ans entre design visuel, UX, recherche, service design et prospective, je suis particulièrement attirée par les sujets ambigus : ceux qui demandent de poser les bonnes questions avant de se précipiter vers des solutions.',
    ],
    readMore: 'Lire la suite', readLess: 'Réduire', viewCv: 'Voir mon CV',
    cvLabel: '03 — PARCOURS', cvTitle: <>Expérience<br /><em>en bref.</em></>,
    cvSummary: 'Recherche, stratégie et conception dans des secteurs variés, avec une expérience forte en healthtech.',
    openCv: 'Consulter le CV (EN)', openCvFr: 'Consulter le CV (FR)',
    present: 'AUJ.', freelance: 'Indépendante · Paris', freelanceDesc: 'Audit et refonte de produits et sites, recherche exploratoire et conception de nouveaux services.',
    kametRole: 'Lead UX Researcher & Service Designer', kametDesc: 'Stratégies de recherche et de design pour des projets d’innovation en santé.',
    weDigitalDesc: 'Expériences de bout en bout, entre besoins utilisateurs et opportunités business.',
    fashionRole: 'Styliste', fashionDesc: 'Conception et développement de vêtements, notamment pour enfants.',
    fashionPlace: 'Salariée et indépendante · États-Unis', education: 'FORMATION', educationText: 'BLOC, UX/UI & développement front-end (2017) · School of Visual Arts, design graphique (2016) · Parsons, BFA (2011)',
    languages: 'LANGUES', languagesText: 'Français et anglais bilingues · Espagnol intermédiaire',
    contactLabel: '04 — CONTACT', contactTitle: <>On fait<br />connaissance<span> ?</span></>,
    contactText: 'Vous recrutez, vous avez une question ou envie d’échanger sur un projet ? Écrivez-moi, je vous répondrai avec plaisir.',
    footerRole: 'Lead UX Designer', backToTop: 'Retour en haut ↑',
    backToProjects: 'Tous les projets', myRole: 'MON RÔLE', team: 'ÉQUIPE', duration: 'DURÉE',
    context: '01 — CONTEXTE', contextTitle: 'Faciliter l’accès aux informations produits.',
    approach: '02 — DÉMARCHE', approachTitle: 'Recherche, co-création et conception itérative.',
    outcome: '03 — RÉSULTAT', outcomeTitle: 'Un prototype concret pour un besoin mondial.',
    clientFeedback: 'RETOUR CLIENT', tools: 'OUTILS', continue: 'POUR ALLER PLUS LOIN', back: 'Retour aux projets',
    metaDescription: 'Noëlle Lewkowicz, Lead UX Designer franco-américaine à Paris. UX research, stratégie et service design.',
  },
  en: {
    documentTitle: 'Noëlle Lewkowicz — Lead UX Designer',
    description: 'Noëlle Lewkowicz, Franco-American Lead UX Designer in Paris. UX research, strategy and service design.',
    language: 'Choose language', french: 'French', english: 'English', menuOpen: 'Open menu', menuClose: 'Close menu',
    navProjects: 'Projects', navAbout: 'About', navCv: 'CV', navContact: 'Contact',
    heroEyebrow: 'LEAD UX DESIGNER · UX STRATEGY & RESEARCH · PARIS',
    heroTitle: <>I’m Noëlle,<br />a Franco-American<br /><em>UX designer, researcher<br />and service designer</em></>,
    heroDescription: 'I help teams move from research and strategy to the design of meaningful services.',
    seeProjects: 'View my projects', letsTalk: 'Get in touch', heroSticker: <>curiosity<br />in motion ↗</>,
    intro: <>I turn complex topics into experiences that are <em>clear, coherent and inclusive.</em></>,
    sectionProjects: 'Selected projects', projectEyebrow: 'PORTFOLIO · UX DESIGN · SERVICE DESIGN', projectIntro: 'Selected projects, from challenge to outcome.', projectsPending: 'IN PROGRESS', projectsEmpty: 'More case studies coming soon.',
    roleLabel: 'Role', aboutLabel: '02 — ABOUT ME', aboutTitle: <>Curiosity<br /><em>comes first.</em></>,
    aboutParagraphs: [
      'Growing up as a Franco-American in France, I had two certainties from an early age: I wanted to make a living doing something creative, and I wanted to live in the United States one day.',
      'Fortunately, I got to make both happen. In 2011, I graduated from Parsons in New York, where I stayed for six years, working across fashion and graphic design. Along the way, I discovered how much I enjoyed structuring information, designing presentations, and turning complex ideas into clear and engaging stories.',
      'I also became increasingly curious about what happened before the design process. How well did we really understand people’s needs? Why were certain products considered “bestsellers”? And what could we learn by asking better questions rather than simply repeating what had worked before?',
      'That curiosity led me to UX design and research, with further studies at SVA and Bloc in 2016–2017, before returning to Paris, where I have been working in UX and service design ever since.',
      'Today, I work at the intersection of research, strategy, design, and storytelling. I enjoy exploring complex problems, making sense of what I learn, and turning insights into meaningful experiences, services, and actionable directions. My visual design background remains an important part of how I communicate ideas and bring people along in the process.',
      'I also teach, which has become a natural extension of my practice. I previously taught Design Fiction at the CNAM, and since September 2026, I teach UX & Service Design and Design Fiction at Penninghen. Teaching keeps me curious, challenges me to question my assumptions, and gives me the opportunity to share and rethink what I’ve learned.',
      'After more than a decade across visual design, UX, research, service design, and futures thinking, I’m particularly drawn to ambiguous challenges: the ones that require asking the right questions before jumping to solutions.',
    ],
    readMore: 'Read more', readLess: 'Read less', viewCv: 'View my CV',
    cvLabel: '03 — EXPERIENCE', cvTitle: <>Experience<br /><em>at a glance.</em></>,
    cvSummary: 'Research, strategy and design across sectors, with deep experience in healthtech.',
    openCv: 'View CV (English)', openCvFr: 'View CV (French)',
    present: 'PRESENT', freelance: 'Independent · Paris', freelanceDesc: 'Product and website audits and redesigns, exploratory research, and new service design.',
    kametRole: 'Lead UX Researcher & Service Designer', kametDesc: 'Research and design strategies for healthcare innovation projects.',
    weDigitalDesc: 'End-to-end experiences balancing user needs with business opportunities.',
    fashionRole: 'Fashion Designer', fashionDesc: 'Children’s apparel design and development.',
    fashionPlace: 'Full-time & freelance · United States', education: 'EDUCATION', educationText: 'BLOC, UX/UI & Front-end Development (2017) · School of Visual Arts, Graphic Design (2016) · Parsons, BFA (2011)',
    languages: 'LANGUAGES', languagesText: 'French & English (bilingual) · Spanish (intermediate)',
    contactLabel: '04 — CONTACT', contactTitle: <>Let’s<br />connect<span>.</span></>,
    contactText: 'Hiring, have a question, or want to talk about a project? Send me a note and I’ll be happy to get back to you.',
    footerRole: 'Lead UX Designer', backToTop: 'Back to top ↑',
    backToProjects: 'All projects', myRole: 'MY ROLE', team: 'TEAM', duration: 'DURATION',
    context: '01 — CONTEXT', contextTitle: 'Making product information easier to find.',
    approach: '02 — APPROACH', approachTitle: 'Research, co-creation and iterative design.',
    outcome: '03 — OUTCOME', outcomeTitle: 'A practical prototype for a global need.',
    clientFeedback: 'CLIENT FEEDBACK', tools: 'TOOLS', continue: 'CONTINUE EXPLORING', back: 'Back to projects',
    metaDescription: 'Noëlle Lewkowicz, Franco-American Lead UX Designer in Paris. UX research, strategy and service design.',
  },
} satisfies Record<Language, Record<string, React.ReactNode>>;

function IconLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a className="text-link" href={href}>{children}<ArrowUpRight size={15} /></a>;
}

function Header({ language, onLanguageChange, onNavigate }: { language: Language; onLanguageChange: (language: Language) => void; onNavigate: (target: string) => void }) {
  const [open, setOpen] = React.useState(false);
  const t = copy[language];
  return <header className="header">
    <a href="#top" onClick={() => onNavigate('top')} className="wordmark" aria-label="Noëlle Lewkowicz">NL<span>.</span></a>
    <button className="menu-toggle" aria-label={open ? t.menuClose : t.menuOpen} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <nav className={open ? 'nav is-open' : 'nav'} aria-label={language === 'fr' ? 'Navigation principale' : 'Main navigation'}>
      <a onClick={() => { setOpen(false); onNavigate('projets'); }} href="#projets">{t.navProjects}</a>
      <a onClick={() => { setOpen(false); onNavigate('apropos'); }} href="#apropos">{t.navAbout}</a>
      <a onClick={() => { setOpen(false); onNavigate('cv'); }} href="#cv">{t.navCv}</a>
      <a onClick={() => { setOpen(false); onNavigate('contact'); }} className="nav-contact" href="#contact">{t.navContact} <ArrowUpRight size={15} /></a>
      <div className="language-switch" role="group" aria-label={t.language}>
        <button type="button" aria-label={t.french} aria-pressed={language === 'fr'} className={language === 'fr' ? 'selected' : ''} onClick={() => onLanguageChange('fr')}>FR</button>
        <button type="button" aria-label={t.english} aria-pressed={language === 'en'} className={language === 'en' ? 'selected' : ''} onClick={() => onLanguageChange('en')}>EN</button>
      </div>
    </nav>
  </header>;
}

function localizedProject(project: Project, language: Language): Project {
  const translation = project.translations?.[language];
  return translation ? { ...project, ...translation } : project;
}

function Art({ p, language }: { p: Project; language: Language }) {
  return <div className={`project-art ${p.className}`} aria-hidden="true">
    {p.id === 'legrand-catalogue' ? <div className="catalog-sheets"><div className="catalog-sheet catalog-sheet-back" /><div className="catalog-sheet catalog-sheet-mid" /><div className="catalog-sheet catalog-sheet-front"><span /><span /><span /><span /></div></div> :
      p.className === 'art-lilac' ? <><div className="sun" /><div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="pill pill-a">{language === 'fr' ? 'écouter' : 'listen'}</div><div className="pill pill-b">{language === 'fr' ? 'comprendre' : 'understand'}</div><div className="pill pill-c">{language === 'fr' ? 'concevoir' : 'design'}</div></> :
        p.className === 'art-green' ? <><div className="route"><i /><i /><i /><i /></div><div className="route-label">{language === 'fr' ? <>le chemin<br />se dessine</> : <>the path<br />unfolds</>}</div><div className="route-dot" /></> :
          <><div className="shape shape-one" /><div className="shape shape-two" /><div className="shape shape-three" /><div className="art-caption">{language === 'fr' ? <>faire place<br />à la rencontre</> : <>make room<br />to connect</>}</div></>}
  </div>;
}

function CaseStudy({ project, language, onBack }: { project: Project; language: Language; onBack: () => void }) {
  const t = copy[language];
  const p = localizedProject(project, language);
  return <main className="case-page" lang={language}>
    <button className="back-link" onClick={onBack}><ArrowLeft size={16} /> {t.backToProjects}</button>
    <div className="case-heading"><p className="eyebrow">{p.client || p.kind}{p.year && <> <span>·</span> {p.year}</>}</p><h1>{p.title}</h1><p className="case-intro">{p.desc}</p></div>
    <Art p={p} language={language} />
    {(p.role || p.team || p.duration || p.tools?.length) && <div className="case-meta">{p.role && <div><small>{t.myRole}</small><p>{p.role}</p></div>}{p.team && <div><small>{t.team}</small><p>{p.team}</p></div>}{p.duration && <div><small>{t.duration}</small><p>{p.duration}</p></div>}{!!p.tools?.length && <div className="case-meta-tools"><small>{t.tools}</small><ul>{p.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul></div>}</div>}
    <div className="case-body">
      {p.context && <section><p className="eyebrow">{t.context}</p><h2>{p.contextTitle || t.contextTitle}</h2><p>{p.context}</p></section>}
      {p.approach && <section><p className="eyebrow">{t.approach}</p><h2>{p.approachTitle || t.approachTitle}</h2><p className="case-copy">{p.approach}</p></section>}
      {p.learning && <section><p className="eyebrow">{t.outcome}</p><h2>{p.outcomeTitle || t.outcomeTitle}</h2><p>{p.learning}</p></section>}
      {p.quote && <figure className="client-quote"><p className="eyebrow">{t.clientFeedback}</p><blockquote>“{p.quote}”</blockquote></figure>}
    </div>
    <section className="next-project"><p className="eyebrow">{t.continue}</p><a href="#projets" onClick={onBack}>{t.back} <ArrowRight /></a></section>
  </main>;
}

function App() {
  const [language, setLanguage] = React.useState<Language>(() => {
    try { return localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'fr'; }
    catch { return 'fr'; }
  });
  const [active, setActive] = React.useState<Project | null>(null);
  const [projects, setProjects] = React.useState<Project[]>(supabaseConfigured ? [] : initialProjects);
  const [aboutExpanded, setAboutExpanded] = React.useState(false);
  const lenisRef = React.useRef<Lenis | null>(null);
  const t = copy[language];

  React.useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let lenis: Lenis | null = null;
    const tick = (time: number) => lenis?.raf(time * 1000);

    const configureScroll = () => {
      if (motionPreference.matches) {
        lenis?.destroy();
        lenis = null;
        lenisRef.current = null;
        gsap.ticker.remove(tick);
        return;
      }
      if (lenis) return;
      lenis = new Lenis({ duration: 1.05, smoothWheel: true, anchors: false });
      lenisRef.current = lenis;
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
    };

    configureScroll();
    motionPreference.addEventListener('change', configureScroll);
    return () => {
      motionPreference.removeEventListener('change', configureScroll);
      gsap.ticker.remove(tick);
      lenis?.destroy();
      lenis = null;
      lenisRef.current = null;
    };
  }, []);

  React.useLayoutEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const context = gsap.context(() => {
      const hero = document.querySelector('.hero');
      if (!active && hero) {
        const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
        intro
          .fromTo('.hero-copy > *', { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.75, stagger: 0.1 })
          .fromTo('.hero-art', { y: 28, scale: 0.97, autoAlpha: 0 }, { y: 0, scale: 1, autoAlpha: 1, duration: 1 }, '-=0.65');

        gsap.to('.hero-loop', { rotate: '+=9', duration: 7, ease: 'sine.inOut', yoyo: true, repeat: -1, stagger: 0.4 });
        gsap.to('.hero-sticker', { y: -8, rotate: 4, duration: 2.8, ease: 'sine.inOut', yoyo: true, repeat: -1 });
      }

      gsap.utils.toArray<HTMLElement>('.intro-strip, .section-header, .about-side, .about-content, .cv-section > div:first-child, .contact-section > *').forEach((element) => {
        gsap.fromTo(element, { y: 28, autoAlpha: 0 }, {
          y: 0, autoAlpha: 1, duration: 0.75, ease: 'power2.out',
          scrollTrigger: { trigger: element, start: 'top 88%', once: true },
        });
      });

      if (document.querySelector('.project-grid')) {
        gsap.fromTo('.project-card', { y: 38, autoAlpha: 0 }, {
          y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.12, ease: 'power2.out',
          scrollTrigger: { trigger: '.project-grid', start: 'top 86%', once: true },
        });
      }
      if (document.querySelector('.timeline')) {
        gsap.fromTo('.timeline-item, .cv-extra > div', { x: 18, autoAlpha: 0 }, {
          x: 0, autoAlpha: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: '.timeline', start: 'top 84%', once: true },
        });
      }
      if (active) {
        gsap.fromTo('.case-heading > *', { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.65, stagger: 0.12, ease: 'power2.out' });
        gsap.fromTo('.case-page > .project-art', { scale: 0.98, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.8, ease: 'power2.out', delay: 0.15 });
        gsap.utils.toArray<HTMLElement>('.case-meta, .case-body > section, .next-project').forEach((element) => {
          gsap.fromTo(element, { y: 24, autoAlpha: 0 }, {
            y: 0, autoAlpha: 1, duration: 0.65, ease: 'power2.out',
            scrollTrigger: { trigger: element, start: 'top 88%', once: true },
          });
        });
      }
      if (!active) {
        gsap.to('.hero-art', {
          yPercent: 6,
          ease: 'none',
          scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.7 },
        });
      }
    });

    return () => context.revert();
  }, [active, language, projects.length]);

  React.useEffect(() => {
    if (!supabaseConfigured) return;
    fetchPublishedProjects().then(setProjects).catch(() => { /* Keep local case studies visible if Supabase is temporarily unavailable. */ });
  }, []);
  React.useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.documentTitle;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.description);
    try { localStorage.setItem('portfolio-language', language); } catch { /* Language still works for this visit. */ }
  }, [language, t.description, t.documentTitle]);
  React.useLayoutEffect(() => {
    if (!active) return;
    const frame = window.requestAnimationFrame(() => {
      lenisRef.current?.scrollTo(0, { force: true, immediate: true });
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [active]);
  function changeLanguage(nextLanguage: Language) {
    setLanguage(nextLanguage);
    setAboutExpanded(false);
  }

  const visibleProjects = projects.filter((project) => language === 'en' || Boolean(project.translations?.fr));
  const about = t.aboutParagraphs as string[];

  function navigateTo(target: string) {
    setActive(null);
    if (target === 'top' && !active) window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function openProject(project: Project) {
    setActive(project);
  }

  return <><div id="top" /><Header language={language} onLanguageChange={changeLanguage} onNavigate={navigateTo} />{active ? <CaseStudy project={active} language={language} onBack={() => navigateTo('projets')} /> : <main>
    <section className="hero">
      <div className="hero-copy"><p className="eyebrow">{t.heroEyebrow}</p>
        <h1 className="hero-title-long">{t.heroTitle}</h1>
        <p className="hero-desc">{t.heroDescription}</p>
        <div className="hero-actions"><a className="button button-dark" href="#projets">{t.seeProjects} <ArrowDown size={16} /></a><a className="text-link" href="mailto:noelle.lewkowicz.pro@gmail.com">{t.letsTalk} <ArrowUpRight size={15} /></a></div>
      </div>
      <div className="hero-art" aria-label={language === 'fr' ? 'Composition abstraite en formes courbes' : 'Abstract composition of curved shapes'}><div className="hero-sun" /><div className="hero-loop loop-one" /><div className="hero-loop loop-two" /><div className="hero-sticker">{t.heroSticker}</div><span className="hero-index">PARIS · FR / EN</span></div>
    </section>
    <section className="intro-strip"><span className="section-num">01</span><p>{t.intro}</p><a href="#apropos" aria-label={language === 'fr' ? 'En savoir plus sur mon approche' : 'Learn more about my approach'}><ArrowDown /></a></section>
    <section className="projects-section" id="projets">
      <div className="section-header"><div><p className="eyebrow">{t.projectEyebrow}</p><h2>{t.sectionProjects}<span>.</span></h2></div><p>{t.projectIntro}</p></div>
      {visibleProjects.length ? <div className="project-grid">{visibleProjects.map((project) => {
        const p = localizedProject(project, language);
        return <button key={p.id} className="project-card" onClick={() => openProject(project)}><Art p={project} language={language} /><div className="project-info"><div><p className="project-kind">{p.tag}</p><h3>{p.title}</h3><p className="project-desc">{p.desc}</p>{p.role && <p className="project-role">{t.roleLabel}: {p.role}</p>}</div><span className="card-arrow"><ArrowUpRight /></span></div></button>;
      })}</div> : <div className="projects-empty"><span>{t.projectsPending}</span><p>{t.projectsEmpty}</p></div>}
    </section>
    <section className="about-section" id="apropos"><div className="about-side"><p className="eyebrow">{t.aboutLabel}</p><div className="portrait-placeholder"><img src="/noelle-lewkowicz.jpg" alt={language === 'fr' ? 'Noëlle Lewkowicz, designer UX à Paris' : 'Noëlle Lewkowicz, UX designer in Paris'} /></div></div>
      <div className="about-content" lang={language}><h2>{t.aboutTitle}</h2>
        <div className="about-story">
          {about.slice(0, 2).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {!aboutExpanded && <p className="about-ellipsis" aria-hidden="true">…</p>}
          <div id="about-rest" hidden={!aboutExpanded}>{about.slice(2).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </div>
        <button className="about-read-more" type="button" aria-expanded={aboutExpanded} aria-controls="about-rest" onClick={() => setAboutExpanded(!aboutExpanded)}>{aboutExpanded ? t.readLess : t.readMore}<ArrowDown className={aboutExpanded ? 'is-expanded' : ''} size={14} /></button>
        <div className="about-links"><IconLink href={cvUrl}>{t.viewCv}</IconLink></div>
      </div>
    </section>
    <section className="cv-section" id="cv"><div><p className="eyebrow">{t.cvLabel}</p><h2>{t.cvTitle}</h2><p className="cv-hint">{t.cvSummary}</p><div className="cv-download"><a className="button button-outline" href={cvUrl} target="_blank" rel="noreferrer">{t.openCv} <ArrowUpRight size={16} /></a><a className="button button-outline" href={cvFrUrl} target="_blank" rel="noreferrer">{t.openCvFr} <ArrowUpRight size={16} /></a></div></div>
      <div className="timeline">
        <div className="timeline-item"><span>2025 — {t.present}</span><div><h3>Lead UX &amp; Service Designer</h3><p>{t.freelance}</p><p>{t.freelanceDesc}</p></div></div>
        <div className="timeline-item"><span>2022 — 2025</span><div><h3>{t.kametRole}</h3><p>Kamet Ventures · Paris</p><p>{t.kametDesc}</p></div></div>
        <div className="timeline-item"><span>2017 — 2022</span><div><h3>UX &amp; Service Designer</h3><p>WeDigitalGarden · Paris</p><p>{t.weDigitalDesc}</p></div></div>
        <div className="timeline-item"><span>2011 — 2017</span><div><h3>{t.fashionRole}</h3><p>{t.fashionPlace}</p><p>{t.fashionDesc}</p></div></div>
        <div className="cv-extra"><div><small>{t.education}</small><p>{t.educationText}</p></div><div><small>{t.languages}</small><p>{t.languagesText}</p></div></div>
      </div>
    </section>
    <section className="contact-section" id="contact"><div className="contact-left"><p className="eyebrow">{t.contactLabel}</p><h2>{t.contactTitle}</h2></div><div className="contact-right"><p>{t.contactText}</p><a className="contact-email" href="mailto:noelle.lewkowicz.pro@gmail.com">noelle.lewkowicz.pro@gmail.com <ArrowUpRight /></a></div></section>
  </main>}<footer className="footer"><a href="#top" className="wordmark" onClick={() => navigateTo('top')}>NL<span>.</span></a><span>Noëlle Lewkowicz · {t.footerRole}</span><a href="#top" onClick={() => navigateTo('top')}>{t.backToTop}</a><span>© 2026</span></footer></>;
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
