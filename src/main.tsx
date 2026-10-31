import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react';
import { projects as initialProjects, type Project } from './projects';
import { fetchPublishedProjects, supabaseConfigured } from './supabase';
import './style.css';

const cvUrl = '/noelle-lewkowicz-cv-en-2026.pdf';

const IconLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a className="text-link" href={href}>{children}<ArrowUpRight size={15} /></a>
);

function Header() {
  const [open, setOpen] = React.useState(false);
  return <header className="header">
    <a href="#top" className="wordmark" aria-label="Noëlle Lewkowicz, accueil">NL<span>.</span></a>
    <button className="menu-toggle" aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <nav className={open ? 'nav is-open' : 'nav'} aria-label="Navigation principale">
      <a onClick={() => setOpen(false)} href="#projets">Projets</a>
      <a onClick={() => setOpen(false)} href="#apropos">À propos</a>
      <a onClick={() => setOpen(false)} href="#cv">CV</a>
      <a onClick={() => setOpen(false)} className="nav-contact" href="#contact">Me contacter <ArrowUpRight size={15} /></a>
    </nav>
  </header>;
}

function Art({ p }: { p: Project }) {
  return <div className={`project-art ${p.className}`} aria-hidden="true">
    <span className="art-note">{p.tag}</span>
    {p.className === 'art-lilac' ? <><div className="sun" /><div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="pill pill-a">écouter</div><div className="pill pill-b">accompagner</div><div className="pill pill-c">prendre soin</div></> :
      p.className === 'art-green' ? <><div className="route"><i /><i /><i /><i /></div><div className="route-label">le chemin<br />se dessine</div><div className="route-dot" /></> :
        <><div className="shape shape-one" /><div className="shape shape-two" /><div className="shape shape-three" /><div className="art-caption">faire place<br />à la rencontre</div></>}
  </div>;
}

function CaseStudy({ p, onBack }: { p: Project; onBack: () => void }) {
  return <main className="case-page">
    <button className="back-link" onClick={onBack}><ArrowLeft size={16} /> Tous les projets</button>
    <div className="case-heading"><p className="eyebrow">{p.kind} <span>·</span> {p.year}</p><h1>{p.title}</h1><p className="case-intro">{p.desc}</p></div>
    <Art p={p} />
    <div className="case-meta"><div><small>MON RÔLE</small><p>{p.role}</p></div><div><small>ÉQUIPE</small><p>{p.team || 'Équipe pluridisciplinaire'}</p></div><div><small>DURÉE</small><p>{p.duration || 'À préciser'}</p></div></div>
    <div className="case-body">
      <section><p className="eyebrow">01 — Le contexte</p><h2>Le point de départ.</h2><p>{p.context}</p></section>
      <section><p className="eyebrow">02 — La démarche</p><h2>Comprendre, puis concevoir.</h2><p>{p.approach}</p></section>
      <section><p className="eyebrow">03 — Résultats et apprentissages</p><h2>Ce que le projet a permis.</h2><p>{p.learning}</p></section>
    </div>
    <section className="next-project"><p className="eyebrow">Continuer la visite</p><a href="#projets" onClick={onBack}>Découvrir les autres projets <ArrowRight /></a></section>
  </main>;
}

const healthProjects = [
  { title: 'Prise en charge des addictions', label: 'Eos', style: 'art-lilac' },
  { title: 'Solutions numériques pour les infirmier·ères', label: 'Santé · outils numériques', style: 'art-green' },
  { title: 'Détection des troubles neurodéveloppementaux', label: 'Novadev', style: 'art-orange' },
];

function ExperienceHighlights() {
  return <div className="experience-highlights">
    {healthProjects.map((item) => <article className="highlight-card" key={item.title}>
      <div className={`project-art ${item.style}`} aria-hidden="true"><span className="art-note">{item.label}</span><div className="highlight-shape" /></div>
      <div className="highlight-copy"><p className="project-kind">KAMET VENTURES <span>·</span> SANTÉ</p><h3>{item.title}</h3><p>Projet d’innovation santé auquel j’ai contribué au sein de mon rôle de Lead UX Researcher & Service Designer.</p></div>
    </article>)}
  </div>;
}

function App() {
  const [active, setActive] = React.useState<Project | null>(null);
  const [projects, setProjects] = React.useState<Project[]>(supabaseConfigured ? [] : initialProjects);
  React.useEffect(() => { fetchPublishedProjects().then(setProjects).catch(() => { /* Keep experience highlights available if Supabase is temporarily unavailable. */ }); }, []);
  React.useEffect(() => { window.scrollTo(0, 0); }, [active]);

  return <><div id="top" /><Header />{active ? <CaseStudy p={active} onBack={() => setActive(null)} /> : <main>
    <section className="hero">
      <div className="hero-copy"><p className="eyebrow">LEAD UX DESIGNER <span>·</span> UX STRATÉGIE & RECHERCHE <span>·</span> PARIS</p>
        <h1>Des expériences<br />plus <em>humaines.</em></h1>
        <p className="hero-desc">Je suis Noëlle Lewkowicz, designer UX franco-américaine, chercheuse et service designer. J’accompagne les équipes de la recherche à la stratégie et à la conception de services.</p>
        <div className="hero-actions"><a className="button button-dark" href="#projets">Voir mes projets <ArrowDown size={16} /></a><a className="text-link" href="mailto:noelle.lewkowicz.pro@gmail.com">Parlons-en <ArrowUpRight size={15} /></a></div>
      </div>
      <div className="hero-art" aria-label="Composition abstraite en formes courbes"><div className="hero-sun" /><div className="hero-loop loop-one" /><div className="hero-loop loop-two" /><div className="hero-sticker">curiosité<br />en mouvement ↗</div><span className="hero-index">PARIS · FR / EN</span></div>
      <div className="hero-foot"><span>Designer indépendante · Paris</span><span>Recherche · Stratégie · Service design</span></div>
    </section>
    <section className="intro-strip"><span className="section-num">01</span><p>Je transforme les sujets complexes en expériences <em>claires, cohérentes et inclusives.</em></p><a href="#apropos" aria-label="En savoir plus sur mon approche"><ArrowDown /></a></section>
    <section className="projects-section" id="projets">
      <div className="section-header"><div><p className="eyebrow">SANTÉ · INNOVATION · 2022—2025</p><h2>{projects.length ? 'Études de cas' : 'Projets en santé'}<span>.</span></h2></div><p>{projects.length ? 'Recherche et conception au service d’expériences plus utiles.' : 'Quelques projets de santé auxquels j’ai contribué chez Kamet Ventures.'}</p></div>
      {projects.length ? <><div className="project-grid">{projects.map((p) => <button key={p.id} className="project-card" onClick={() => setActive(p)}><Art p={p} /><div className="project-info"><div><p className="project-kind">{p.kind} <span>·</span> {p.year}</p><h3>{p.title}</h3><p className="project-desc">{p.desc}</p><p className="project-role">Rôle : {p.role}</p></div><span className="card-arrow"><ArrowUpRight /></span></div></button>)}</div></> : <ExperienceHighlights />}
    </section>
    <section className="about-section" id="apropos"><div className="about-side"><p className="eyebrow">02 — À PROPOS</p><div className="portrait-placeholder"><img src="/noelle-lewkowicz.jpg" alt="Noëlle Lewkowicz, designer UX à Paris" /><span className="portrait-caption">Noëlle<br />Lewkowicz</span></div></div>
      <div className="about-content"><h2>Le design commence<br />par <em>l’écoute.</em></h2><p>Je suis une designer UX franco-américaine, bilingue français-anglais, basée à Paris. J’aide les organisations à transformer des besoins complexes en produits et services viables.</p><p>Mon expérience couvre la recherche qualitative et quantitative, la stratégie UX et le service design. J’aime travailler avec des équipes pluridisciplinaires, faire émerger les opportunités et transformer les premiers concepts en prototypes testables et en feuilles de route concrètes.</p><div className="skills"><span>Recherche utilisateur</span><span>Entretiens & observation</span><span>Stratégie UX</span><span>Service blueprints</span><span>Prototypage & tests</span><span>Ateliers de co-création</span></div><IconLink href={cvUrl} >Voir mon CV</IconLink></div>
    </section>
    <section className="cv-section" id="cv"><div><p className="eyebrow">03 — PARCOURS</p><h2>Expérience<br /><em>en bref.</em></h2><p className="cv-hint">Recherche, stratégie et conception dans des secteurs variés, avec une expérience forte en healthtech.</p><div className="cv-download"><a className="button button-outline" href={cvUrl} target="_blank" rel="noreferrer">Consulter le CV (EN) <ArrowUpRight size={16} /></a><a className="text-link" href={cvUrl} download>Télécharger le PDF <ArrowDown size={14} /></a></div></div>
      <div className="timeline">
        <div className="timeline-item"><span>2025 — AUJ.</span><div><h3>Lead UX & Service Designer</h3><p>Indépendante · Paris</p><p>Audit et refonte de produits et sites, recherche exploratoire et conception de nouveaux services.</p></div></div>
        <div className="timeline-item"><span>2022 — 2025</span><div><h3>Lead UX Researcher & Service Designer</h3><p>Kamet Ventures · Paris</p><p>Stratégies de recherche et de design pour des projets d’innovation en santé.</p></div></div>
        <div className="timeline-item"><span>2017 — 2022</span><div><h3>UX & Service Designer</h3><p>WeDigitalGarden · Paris</p><p>Expériences de bout en bout, entre besoins utilisateurs et opportunités business.</p></div></div>
        <div className="timeline-item"><span>2011 — 2017</span><div><h3>Fashion Designer</h3><p>Salariée et indépendante · États-Unis</p><p>Conception et développement de vêtements, notamment pour enfants.</p></div></div>
        <div className="cv-extra"><div><small>FORMATION</small><p>BLOC UX/UI & développement front-end (2017) · School of Visual Arts, design graphique (2016) · Parsons, BFA (2011)</p></div><div><small>LANGUES</small><p>Français et anglais bilingues · Espagnol intermédiaire</p></div></div>
      </div>
    </section>
    <section className="contact-section" id="contact"><div className="contact-left"><p className="eyebrow">04 — CONTACT</p><h2>On fait<br />connaissance<span> ?</span></h2></div><div className="contact-right"><p>Vous recrutez, vous avez une question ou envie d’échanger sur un projet ? Écrivez-moi, je vous répondrai avec plaisir.</p><a className="contact-email" href="mailto:noelle.lewkowicz.pro@gmail.com">noelle.lewkowicz.pro@gmail.com <ArrowUpRight /></a></div></section>
  </main>}<footer className="footer"><a href="#top" className="wordmark">NL<span>.</span></a><span>Noëlle Lewkowicz · Lead UX Designer</span><a href="#top">Retour en haut ↑</a><span>© 2026</span></footer></>;
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
