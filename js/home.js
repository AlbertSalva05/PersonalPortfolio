const EMAIL = 'albertsalva360@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/james-albert-salva-b05164158/';
const TECH_masspro = ['HTML5', 'SCSS', 'JavaScript', 'Responsive'];
const TECH_landing = ['Component system', 'HTML5', 'CSS', 'JavaScript'];
const TECH_corporate = ['Responsive', 'Technical SEO', 'HTML5', 'CSS'];
const TECH_animation = ['CSS animation', 'JavaScript', 'Performance'];
const TECH_qa = ['QA testing', 'Cross-browser', 'HTML5', 'CSS'];
const PROJECTS = [
  { id: 'masspro', client: "Iwatani · Hydrogen fuel cell ship", url: 'https://www.iwatani.co.jp/jpn/hydrogenfuelcellship/', title: "Revamping Mass Pro Pages and Landing Pages", tag: 'UI/UX and web development', year: 'Redesign', cats: ["dev"], role: 'Senior Lead Developer/Designer', tech: TECH_masspro, line: "Redesigned and optimized multiple high-traffic pages to improve UI consistency, performance and user experience across devices.", badge: 'Project',
    blocks: [{ h: 'Overview', p: "Redesigned and optimized multiple high-traffic pages to improve UI consistency, performance and user experience across devices." }, { h: 'Role', p: 'Interface design and frontend development as Senior Lead Developer/Designer.' }] },
  { id: 'landing', client: "SMBC · Amulet", url: 'https://www.smbc.co.jp/hojin/sonota/factoring/Amulet/', title: "Landing Page Systems", tag: 'Design system', year: 'Components', cats: ["dev"], role: 'Senior Lead Developer/Designer', tech: TECH_landing, line: "Built a scalable landing page system with reusable components for faster deployment, consistency and conversion-focused design.", badge: 'Project',
    blocks: [{ h: 'Overview', p: "Built a scalable landing page system with reusable components for faster deployment, consistency and conversion-focused design." }, { h: 'Role', p: 'Interface design and frontend development as Senior Lead Developer/Designer.' }] },
  { id: 'corporate', client: "transcosmos · Digital Interactive", url: 'https://www.trans-cosmos.co.jp/di/project/', title: "Corporate Website", tag: 'Web development', year: 'SEO', cats: ["dev"], role: 'Senior Lead Developer/Designer', tech: TECH_corporate, line: "Developed a responsive, SEO-optimized corporate website aligned with brand identity and modern UX standards.", badge: 'Project',
    blocks: [{ h: 'Overview', p: "Developed a responsive, SEO-optimized corporate website aligned with brand identity and modern UX standards." }, { h: 'Role', p: 'Interface design and frontend development as Senior Lead Developer/Designer.' }] },
  { id: 'animation', client: "Asahi Soft Drinks · Roblox experience", url: 'https://www.asahiinryo.co.jp/entertainment/metaverse_factory/', title: "Redesigning Pages with Animations", tag: 'UI and motion', year: 'Animation', cats: ["dev"], role: 'Senior Lead Developer/Designer', tech: TECH_animation, line: "Enhanced existing pages with smooth, performance-friendly animations and modern UI improvements to boost engagement.", badge: 'Project',
    blocks: [{ h: 'Overview', p: "Enhanced existing pages with smooth, performance-friendly animations and modern UI improvements to boost engagement." }, { h: 'Role', p: 'Interface design and frontend development as Senior Lead Developer/Designer.' }] },
  { id: 'qa', client: "LION · CHARMY Magica", url: 'https://magica.lion.co.jp/', title: "Page Redevelopment and Quality Assurance", tag: 'Development and QA', year: 'Quality', cats: ["dev"], role: 'Senior Lead Developer/Designer', tech: TECH_qa, line: "Redeveloped existing pages and tested them across devices and browsers before release.", badge: 'Project',
    blocks: [{ h: 'Overview', p: "Redeveloped existing pages and tested them across devices and browsers before release." }, { h: 'Role', p: 'Interface design and frontend development as Senior Lead Developer/Designer.' }] }
];
const TESTIMONIALS = [ { "quote": "Demonstrates strong comprehension of instructions and consistently delivers accurate, timely reports. Highly approachable and supportive, often extending help to colleagues even while managing personal workload.", "name": "Ken Paril", "role": "Bridge Director", "rating": 5, "initials": "KP", "avatarBg": "#2F52C4" }, { "quote": "Clearly understands tasks and maintains a proactive, flexible approach in team collaboration. Highly approachable and consistently contributes positively to teamwork and mentorship.", "name": "Rachel Robles", "role": "Assistant Lead Developer", "rating": 5, "initials": "RR", "avatarBg": "#B3191E" }, { "quote": "Produces clear, detailed, and easy-to-understand reports while proactively raising and escalating concerns when needed. A reliable and supportive team leader who consistently assists team members across projects.", "name": "Jessa Faye Abulencia", "role": "Senior Lead Developer", "rating": 5, "initials": "JA", "avatarBg": "#14243A" }, { "quote": "Exhibits excellent communication skills and sets a strong standard for professional interactions with teammates and stakeholders. Demonstrates strong leadership qualities, with opportunity to further strengthen authority in challenging situations.", "name": "Patrick Batungbacal", "role": "Senior Lead Developer", "rating": 5, "initials": "PB", "avatarBg": "#24407E" }, { "quote": "Communicates in an articulate and direct manner, ensuring clarity in all discussions. Recognized for being approachable and knowledgeable, contributing valuable insights to the team.", "name": "Joseph Anthony Carpio", "role": "Assistant Lead Developer", "rating": 4, "initials": "JC", "avatarBg": "#2F52C4" }, { "quote": "Quickly understands instructions and communicates effectively when clarification is needed. Strong multitasking ability, consistently delivering quality work across multiple projects.", "name": "Sheila Siongco", "role": "Bridge Director", "rating": 4, "initials": "SS", "avatarBg": "#B3191E" }, { "quote": "Maintains high-quality work across all aspects, especially in communication, ensuring smooth execution through proactive confirmation and suggestions. Highly organized, approachable, and diligent.", "name": "Christian Alde", "role": "Senior Lead Developer", "rating": 5, "initials": "CA", "avatarBg": "#14243A" }, { "quote": "Produces clear, precise, and high-quality coding and QA outputs, ensuring clean and reliable results. Known for being approachable, responsive, and detail-oriented, always striving for the best outcomes.", "name": "David Isaac Dela Cruz", "role": "Assistant Lead Developer", "rating": 5, "initials": "DC", "avatarBg": "#24407E" } ];
const EXPERTISE = [
  { name: 'Design', line: 'Flows, wireframes, prototypes and systems.', items: ['Figma', 'Adobe XD', 'Creative Suite', 'Design systems'] },
  { name: 'Frontend', line: 'Semantic, responsive, framework-light.', items: ['HTML5', 'CSS3', 'SCSS', 'JavaScript', 'jQuery', 'Tailwind', 'Bootstrap', 'Bulma', 'React', 'Ext JS'] },
  { name: 'Quality', line: 'Checked before it ships, not after.', items: ['WCAG 2.2 AA', 'Technical SEO', 'Core Web Vitals', 'Cross-browser'] },
  { name: 'Platforms', line: 'Where the work usually lives.', items: ['WordPress', 'Shopify', 'Webflow', 'Framer', 'Squarespace', 'Salesforce', 'Sitecore', 'C#', 'ASP.NET', 'PHP', 'MySQL', 'AWS', 'Azure'] }
];
const EXPERIENCE = [
  { dates: 'April 2019 – May 2026', role: 'Senior Lead Developer/Designer', org: 'Transcosmos Asia Philippines Inc.', location: 'Pasig City', tags: ['UI/UX', 'Frontend lead', 'Enterprise web', 'Code review', 'Mentoring'], bullets: ['Designed and developed responsive web interfaces for enterprise-level applications.', 'Collaborated with cross-functional teams and stakeholders to translate business requirements into intuitive page structures, user flows, responsive interface solutions and efficient technical implementations.', 'Improved website performance, responsiveness, SEO and accessibility, and reduced load times across multiple projects.', 'Conducted code reviews and enforced development standards to ensure clean, maintainable and optimized code.', 'Mentored developers and provided technical guidance to support team growth and project delivery.'] },
  { dates: 'April 2018 – March 2019', role: 'Software Engineer', org: 'Cusyma Technologies Co.', location: 'Quezon City', tags: ['Responsive UI', 'API integration', 'Cross-browser', 'Documentation'], bullets: ['Developed responsive web interfaces based on business requirements and UI/UX design specifications.', 'Worked closely with designers, QA and developers to ensure smooth project implementation and testing.', 'Supported API integration, cross-browser compatibility and technical documentation.', 'Troubleshot interface and frontend issues to improve functionality and overall user experience.'] },
  { dates: 'November 2017 – February 2018', role: 'Front-End Developer', org: 'I-Asiatic Innovations', location: 'Pasig City', tags: ['Mockup to code', 'Responsive', 'Cross-device'], bullets: ['Translated UI/UX mockups into responsive, production-ready interfaces while maintaining visual consistency, usability and design intent.', 'Ensured website compatibility, performance and proper display across different devices and browsers.'] }
];
const THUMBS = new Set(['img_project_01.jpg','img_project_02.jpg','img_project_03.jpg','img_project_04.jpg','img_project_05.jpg','img_project_06.png','img_project_07.png','img_project_08.png','img_project_09.png','img_project_10.jpg','img_project_11.png','img_project_12.png','img_project_13.png','todonify/desktop-dashboard.png','busybee/thumb.png','harborline/og-image.png','img_cert_01_hd.jpg','img_cert_02_hd.jpg','img_cert_03_hd.jpg','img_cert_04_hd.jpg','img_cert_05_hd.jpg','img_cert_06_hd.jpg','img_cert_07_hd.jpg']);
// Optimized 720px WebP derivatives in assets/thumbs/ for anything shown small; originals stay for full-size views.
const TH = (s, md) => { const k = String(s || '').replace(/^\.?\/?assets\//, ''); return THUMBS.has(k) ? 'assets/thumbs/' + k.replace('/', '-').replace('_hd', '').replace(/\.\w+$/, md ? '_md.webp' : '.webp') : s; };
const CERT_PANELS = [
  { title: 'UI Design Bootcamp', sub: 'Frost Design and Consulting Group, Inc.', date: 'September 18, 2026', short: 'UI', href: 'assets/doc_cert_01.pdf', bg: "url('assets/img_cert_01_hd.jpg')", alt: 'UI Design Bootcamp certificate from Frost Design and Consulting Group' },
  { title: 'HTML Essentials', sub: 'Cisco Networking Academy', date: 'May 6, 2026', short: 'HTML', href: 'assets/doc_cert_02.pdf', bg: "url('assets/img_cert_02_hd.jpg')", alt: 'HTML Essentials certificate, Cisco Networking Academy' },
  { title: 'CSS Essentials', sub: 'Cisco Networking Academy', date: 'May 12, 2026', short: 'CSS', href: 'assets/doc_cert_03.pdf', bg: "url('assets/img_cert_03_hd.jpg')", alt: 'CSS Essentials certificate, Cisco Networking Academy' },
  { title: 'JavaScript Essentials 1', sub: 'DICT-ITU DTC Initiative, Cisco Networking Academy', date: 'September 22, 2026', short: 'JS', href: 'assets/doc_cert_04.pdf', bg: "url('assets/img_cert_04_hd.jpg')", alt: 'JavaScript Essentials 1 certificate, Cisco Networking Academy' },
  { title: 'Data Analytics Essentials', sub: 'Cisco Networking Academy', date: 'May 14, 2026', short: 'Data', href: 'assets/doc_cert_05.pdf', bg: "url('assets/img_cert_05_hd.jpg')", alt: 'Data Analytics Essentials certificate, Cisco Networking Academy' },
  { title: 'Digital Safety and Security Awareness', sub: 'Cisco Networking Academy', date: 'May 13, 2026', short: 'Safety', href: 'assets/doc_cert_06.pdf', bg: "url('assets/img_cert_06_hd.jpg')", alt: 'Digital Safety and Security Awareness certificate, Cisco Networking Academy' },
  { title: 'Find Insights with AI', sub: 'Cisco Networking Academy', date: 'May 11, 2026', short: 'AI', href: 'assets/doc_cert_07.pdf', bg: "url('assets/img_cert_07_hd.jpg')", alt: 'Find Insights with AI certificate, Cisco Networking Academy' }
];
const CERTS = ['UI Design Certificate, 2026', 'Cisco: HTML, CSS, JavaScript', 'Cisco: Data analytics', 'Cisco: Digital safety', 'Cisco: AI review analysis'];
const RESOURCES = [
  { name: 'Design', links: [
    { name: 'Laws of UX', url: 'https://lawsofux.com/', why: 'The principles behind most layout decisions.' },
    { name: 'Nielsen Norman Group', url: 'https://www.nngroup.com/articles/', why: 'Usability research worth citing in reviews.' },
    { name: 'Typescale', url: 'https://typescale.com/', why: 'Preview a modular type scale before setting tokens.' },
    { name: 'Figma Learn', url: 'https://help.figma.com/', why: 'Auto layout, variables and components.' }] },
  { name: 'Frontend and quality', links: [
    { name: 'MDN Web Docs', url: 'https://developer.mozilla.org/', why: 'The reference for HTML, CSS and JavaScript.' },
    { name: 'WCAG 2.2 Quick Reference', url: 'https://www.w3.org/WAI/WCAG22/quickref/', why: 'Every success criterion, filterable.' },
    { name: 'web.dev', url: 'https://web.dev/', why: 'Core Web Vitals and performance guides.' },
    { name: 'CSS-Tricks', url: 'https://css-tricks.com/', why: 'Go-to guides for flexbox, grid and modern CSS.' }] }
];
const AVAIL = {
  open: { glyph: '\u25CF', label: 'Available for roles and freelance' },
  roles: { glyph: '\u25CF', label: 'Available for full-time roles' },
  booking: { glyph: '\u25D0', label: 'Freelance from next month' },
  closed: { glyph: '\u25CB', label: 'Not taking new work' }
};
const PHRASES = ['design systems.', 'accessible interfaces.', 'fast, honest websites.', 'Figma files that ship.'];
const STACK_LINES = ['I start with the decision a person has to make.', 'Semantic first. JavaScript only where it earns it.', 'Checked before it ships, not after.', 'Comfortable wherever the content lives.'];
const NAV = [['work', 'Work'], ['expertise', 'Stack'], ['experience', 'Experience'], ['about', 'About'], ['resources', 'Resources']];
const NAV_ICONS = {
  work: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
  expertise: 'M12 3 21 8l-9 5-9-5 9-5zM3 12.5l9 5 9-5M3 17l9 5 9-5',
  experience: 'M3.5 8h17v11.5h-17zM9 8V5.5h6V8M3.5 13h17',
  about: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4.5 20.5c.8-3.6 3.8-6 7.5-6s6.7 2.4 7.5 6',
  resources: 'M6 3.5h12v17l-6-4-6 4z'
};
const TOPICS = [['role', 'A role'], ['project', 'A project'], ['collab', 'A collaboration'], ['other', 'Something else']];
const blankForm = () => ({ name: '', email: '', topic: 'role', message: '' });

class Component extends DCLogic {
  certImgRef = el => { this._certImg = el; this.syncCertImg(); };
  syncCertImg() { const el = this._certImg; if (!el) return; const s = el.getAttribute('data-src'); if (s && !s.includes('{{') && el.getAttribute('src') !== s) el.setAttribute('src', s); }
  state = { menu: false, palette: false, display: false, notice: false, project: null, q: '', pi: 0, size: 'm', contrast: 'std', filter: 'all', form: blankForm(), errors: {}, status: 'idle', copied: false, w: typeof window !== 'undefined' ? window.innerWidth : 1200, active: '', liveMsg: '', pill: false, pillInset: 0, pillsIn: false, rects: null, ov: null, ovOpen: false, ovClosing: false, fan: 0, fanHover: false, cert: 0, certIdle: true, heroVisible: true, pov: 'design', vidPaused: false, vidFailed: false, posterFailed: false, userPaused: false, deck: 0, tab: 0, tabIn: true, xpOpen: 0, xpReached: 0, typed: '' };
  tlRef = React.createRef(); tlFill = React.createRef(); heroRef = React.createRef(); pCanvas = React.createRef(); magRef = React.createRef(); meshHost = React.createRef(); meshCanvas = React.createRef(); pillARef = React.createRef(); pillBRef = React.createRef(); ovRef = React.createRef(); ovClose = React.createRef(); sentinelRef = React.createRef(); hdrInner = React.createRef(); videoRef = React.createRef(); progRef = React.createRef();
  waterHost = React.createRef(); waterCanvas = React.createRef();
  mainRef = React.createRef(); paletteInput = React.createRef(); menuClose = React.createRef(); noticeFirst = React.createRef(); sizeFirst = React.createRef(); projClose = React.createRef(); certClose = React.createRef(); certHost = React.createRef(); apInput = React.createRef(); apScroll = React.createRef();

  loadWallProjects() {
    // Hero wall mirrors the "View all projects" page: read its PROJECTS list so new entries appear here automatically.
    fetch('js/projects.js').then(r => r.ok ? r.text() : Promise.reject()).then(t => {
      const a = t.indexOf('const TECH_'), b = t.indexOf('const PROJECTS = ['), e = t.indexOf('\n];', b);
      if (a < 0 || b < 0 || e < 0) return;
      const list = new Function(t.slice(a, e + 3) + '\nreturn PROJECTS;')();
      if (Array.isArray(list) && list.length) this.setState({ wallProjects: list });
    }).catch(() => {});
  }
  ttBtn = React.createRef(); ttRing = React.createRef(); ttPct = React.createRef();
  ttGo = () => {
    if (this.ttBusy) return;
    const start = window.scrollY, focusTop = () => { const a = document.querySelector('header a[href="#top"]'); a && a.focus({ preventScroll: true }); };
    if (this.reduce || start < 2) { window.scrollTo(0, 0); focusTop(); return; }
    this.ttBusy = true; this.setState({ ttPhase: 'up' });
    const html = document.documentElement, prev = html.style.scrollBehavior; html.style.scrollBehavior = 'auto';
    const dur = Math.min(1400, 500 + start / 6), t0 = performance.now(), ease = x => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    let stop = false; const cancel = () => { stop = true; }; window.addEventListener('wheel', cancel, { passive: true, once: true }); window.addEventListener('touchstart', cancel, { passive: true, once: true });
    const done = () => { html.style.scrollBehavior = prev; window.removeEventListener('wheel', cancel); window.removeEventListener('touchstart', cancel); this.ttBusy = false;
      this.setState({ ttPhase: 'reset' }, () => requestAnimationFrame(() => requestAnimationFrame(() => this.setState({ ttPhase: 'idle' })))); if (!stop) focusTop(); };
    const step = now => { if (stop) return done(); const k = Math.min(1, (now - t0) / dur); window.scrollTo(0, start * (1 - ease(k))); k < 1 ? requestAnimationFrame(step) : done(); };
    requestAnimationFrame(step);
  };
  ttVals(s) {
    const show = !!s.ttShow, hov = !!s.ttHover && show, ph = s.ttPhase || 'idle';
    return { ttBtn: this.ttBtn, ttRing: this.ttRing, ttPct: this.ttPct, ttGo: this.ttGo,
      ttOn: () => this.setState({ ttHover: true }), ttOff: () => this.setState({ ttHover: false }),
      ttHidden: show ? undefined : 'true', ttTab: show ? 0 : -1, ttOp: show ? 1 : 0, ttPe: show ? 'auto' : 'none',
      ttTf: show ? (hov ? 'translateY(-2px) scale(1.06)' : 'none') : 'translateY(24px) scale(0.7)', ttBg: hov ? 'var(--accent-ink)' : 'var(--ink)',
      ttArrowTf: ph === 'up' ? 'translateY(-170%)' : ph === 'reset' ? 'translateY(170%)' : hov ? 'translateY(-2px)' : 'none',
      ttArrowTr: ph === 'reset' ? 'none' : ph === 'up' ? 'transform 380ms cubic-bezier(.5,0,.75,0)' : 'transform 420ms cubic-bezier(.2,.8,.2,1.2)',
      ttLabel: ph === 'up' ? 'Going up' : 'Back to top', ttLabelOp: hov || ph === 'up' ? 1 : 0, ttLabelTf: hov || ph === 'up' ? 'translate(0,-50%)' : 'translate(8px,-50%)' };
  }
  componentDidMount() {
    document.documentElement.lang = 'en';
    this.setupParticles();
    this.loadWallProjects();
    (window.requestIdleCallback || ((f) => setTimeout(f, 1200)))(() => this.setupWater(), { timeout: 2500 });
    const tick = () => { try { this.setState({ ctTime: new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit', timeZone: 'Asia/Manila' }).format(new Date()) }); } catch (e) {} };
    tick(); this.ctT = setInterval(tick, 30000);
    this.setupMesh();
    this.setupBlur();
    this.setupCount();
    this.tmTick();
    let size = 'm', contrast = 'std';
    try { const d = JSON.parse(localStorage.getItem('jas-display') || '{}'); size = d.size || size; contrast = d.contrast || contrast; } catch (e) {}
    this.setState({ size, contrast }, () => this.applyDisplay());
    this.onResize = () => this.setState({ w: window.innerWidth });
    this.onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); this.state.palette ? this.closeAll() : this.openPalette(); }
      else if (e.key === 'Escape') this.closeAll();
    };
    this.onScroll = () => {
      let cur = '';
      const line = Math.min(window.innerHeight * 0.4, 320);
      NAV.forEach(([id]) => { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top < line) cur = id; });
      const c = document.getElementById('contact'); if (c && c.getBoundingClientRect().top < line) cur = 'contact';
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4 && c) cur = 'contact';
      if (cur !== this.state.active) this.setState({ active: cur });
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight), p = Math.min(1, Math.max(0, window.scrollY / max));
      if (this.ttRing.current) this.ttRing.current.style.strokeDashoffset = (157.08 * (1 - p)).toFixed(2);
      if (this.ttPct.current) this.ttPct.current.textContent = Math.round(p * 100) + '%';
      const show = window.scrollY > window.innerHeight * 0.6; if (show !== !!this.state.ttShow) this.setState({ ttShow: show });
    };
    window.addEventListener('resize', this.onResize);
    window.addEventListener('keydown', this.onKey);
    window.addEventListener('scroll', this.onScroll, { passive: true }); this.onScroll();
    this.reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.startTyping();
    this.mx = 0; this.my = 0;
    this.onFx = () => { if (this.raf) return; this.raf = requestAnimationFrame(() => { this.raf = 0; this.fx(); }); };
    window.addEventListener('scroll', this.onFx, { passive: true });
    setTimeout(() => { this.setupReveal(); this.fx(); }, 60);
    const sen = this.sentinelRef.current;
    if (sen && 'IntersectionObserver' in window) { this.hio = new IntersectionObserver(([en]) => this.setState({ pill: !en.isIntersecting })); this.hio.observe(sen); }
    this.measurePill = () => { const el = this.hdrInner.current; if (!el) return; const r = el.getBoundingClientRect(); const pad = parseFloat(getComputedStyle(el).paddingLeft) || 16; this.setState({ pillInset: Math.max(6, Math.round(r.left + pad + 26 - 18)) }); };
    this.measurePill(); window.addEventListener('resize', this.measurePill);
    const hero = this.heroRef.current;
    if (hero && 'IntersectionObserver' in window) { this.fio = new IntersectionObserver(([en]) => { this.setState({ heroVisible: en.isIntersecting }, () => this.scheduleFan()); }, { threshold: 0.2 }); this.fio.observe(hero); }
    this.measure = () => {
      const hero = this.heroRef.current; if (!hero) return;
      const hr = hero.getBoundingClientRect();
      const r = (ref) => { const el = ref.current; if (!el) return null; const b = el.getBoundingClientRect(); return { x: b.left - hr.left, y: b.top - hr.top, w: b.width, h: b.height }; };
      this.setState({ rects: { W: hr.width, H: hr.height, a: r(this.pillARef), b: r(this.pillBRef) } });
    };
    if ('ResizeObserver' in window && this.heroRef.current) { this.ro = new ResizeObserver(() => this.measure()); this.ro.observe(this.heroRef.current); }
    (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(() => this.measure());
    this.measure();
    if (this.reduce) this.setState({ pillsIn: true }); else this.pillT = setTimeout(() => this.setState({ pillsIn: true }), 350);
    this.onPillKey = (e) => { if (e.key === 'Escape' && this.state.ovOpen) { e.stopPropagation(); this.closePill(); } };
    window.addEventListener('keydown', this.onPillKey, true);
    this.certTick = () => { clearTimeout(this.certT); if (this.reduce) return; this.certT = setTimeout(() => { if (this.state.certIdle) this.setState(s => ({ cert: (s.cert + 1) % CERT_PANELS.length })); this.certTick(); }, 3800); };
    this.certTick();
    if (this.reduce || !(this.props.heroWebm || this.props.heroMp4)) { this.setState({ vidPaused: true }); if (this.progRef.current) this.progRef.current.style.transform = 'scaleX(1)'; }
    else setTimeout(() => this.setupVideo(), 0);
  }
  setupVideo() {
    const v = this.videoRef.current, hero = this.heroRef.current;
    if (!v || !hero) return;
    v.muted = true;
    const tryPlay = () => { const p = v.play(); if (p && p.catch) p.catch(() => this.setState({ vidPaused: true })); };
    if ('IntersectionObserver' in window) {
      this.vio = new IntersectionObserver(([en]) => {
        if (en.isIntersecting) { if (!this.state.userPaused) tryPlay(); } else v.pause();
      }, { threshold: 0.15 });
      this.vio.observe(hero);
    } else tryPlay();
  }
  startTyping() {
    if (this.reduce) { this.setState({ typed: PHRASES[0] }); return; }
    let p = 0, i = 0, del = false;
    const tick = () => {
      const word = PHRASES[p];
      i += del ? -1 : 1;
      this.setState({ typed: word.slice(0, i) });
      let wait = del ? 28 : 60;
      if (!del && i === word.length) { del = true; wait = 1700; }
      else if (del && i === 0) { del = false; p = (p + 1) % PHRASES.length; wait = 300; }
      this.typeT = setTimeout(tick, wait);
    };
    this.typeT = setTimeout(tick, 700);
  }
  setupReveal() {
    const els = document.querySelectorAll('[data-reveal]');
    if (this.reduce || !('IntersectionObserver' in window)) return;
    this.io = new IntersectionObserver((entries) => entries.forEach(en => {
      if (en.isIntersecting) { en.target.style.opacity = '1'; en.target.style.transform = 'none'; this.io.unobserve(en.target); }
    }), { rootMargin: '0px 0px -8% 0px' });
    els.forEach((el, i) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight) return;
      el.style.opacity = '0'; el.style.transform = 'translateY(28px)';
      el.style.transition = 'opacity 700ms ease, transform 800ms cubic-bezier(.2,.7,.2,1)';
      this.io.observe(el);
    });
  }
  fx() {
    if (this.reduce) { if (this.tlFill.current) this.tlFill.current.style.transform = 'scaleY(1)'; this.setXp(1); return; }
    const y = window.scrollY;
    document.querySelectorAll('[data-depth]').forEach(el => {
      const d = parseFloat(el.getAttribute('data-depth'));
      el.style.transform = 'translate3d(' + (this.mx * d * 60) + 'px,' + (-y * d + this.my * d * 40) + 'px,0)';
    });
    const tl = this.tlRef.current;
    if (tl) {
      const r = tl.getBoundingClientRect();
      const p = Math.max(0, Math.min(1, (window.innerHeight * 0.65 - r.top) / r.height));
      if (this.tlFill.current) this.tlFill.current.style.transform = 'scaleY(' + p + ')';
      this.setXp(p);
    }
  }
  setXp(p) {
    const n = EXPERIENCE.length; const reached = p >= 1 ? n : Math.floor(p * n + 0.35);
    if (reached !== this.state.xpReached) this.setState({ xpReached: reached });
  }
  scheduleFan() {
    clearTimeout(this.fanT); return;
    if (this.reduce || this.state.fanHover || !this.state.heroVisible) return;
    this.fanT = setTimeout(() => { this.setState(s => ({ fan: (s.fan + 1) % 3 }), () => this.scheduleFan()); }, 2600);
  }
  rectClip(k) {
    const R = this.state.rects; const p = R && R[k];
    if (!p) return 'inset(50% 50% 50% 50% round 999px)';
    return 'inset(' + p.y + 'px ' + (R.W - p.x - p.w) + 'px ' + (R.H - p.y - p.h) + 'px ' + p.x + 'px round ' + (p.h / 2) + 'px)';
  }
  openPill(k) {
    this.measure();
    this.pillOpener = k;
    clearTimeout(this.ovT);
    this.toss(k === 'a' ? 'design' : 'dev'); this.setState({ ov: k, ovOpen: false, ovClosing: false, ovClip: this.rectClip(k) }, () => {
      if (this.ovRef.current) this.ovRef.current.getBoundingClientRect();
      this.ovT = setTimeout(() => {
        this.setState({ ovOpen: true, ovClip: 'inset(0px 0px 0px 0px round 0px)' }, () => setTimeout(() => this.ovClose.current && this.ovClose.current.focus({ preventScroll: true }), 60));
      }, 20);
    });
  }
  closePill = () => {
    if (!this.state.ov) return;
    const k = this.state.ov;
    if (this.reduce) { this.setState({ ov: null, ovOpen: false }); this.focusPill(k); return; }
    this.setState({ ovOpen: false, ovClosing: true, ovClip: this.rectClip(k) });
    clearTimeout(this.ovT); this.ovT = setTimeout(() => this.finishClose(), 750);
  };
  finishClose() { if (!this.state.ovClosing) return; const k = this.state.ov; this.setState({ ov: null, ovClosing: false }); this.focusPill(k); }
  focusPill(k) { const el = (k === 'a' ? this.pillARef : this.pillBRef).current; el && el.focus({ preventScroll: true }); }
  loadPdfJs() {
    if (window.pdfjsLib) return Promise.resolve(window.pdfjsLib);
    if (this.pdfP) return this.pdfP;
    this.pdfP = new Promise((res, rej) => { const sc = document.createElement('script'); sc.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js'; sc.onload = () => { window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js'; res(window.pdfjsLib); }; sc.onerror = rej; document.head.appendChild(sc); });
    return this.pdfP;
  }
  async renderCertPdf() {
    const idx = this.state.cert, c = CERT_PANELS[idx], host = this.certHost.current;
    if (!host) return;
    try {
      const lib = await this.loadPdfJs();
      const doc = await lib.getDocument(c.href).promise;
      const page = await doc.getPage(1);
      const v1 = page.getViewport({ scale: 1 });
      const box = host.parentElement.getBoundingClientRect();
      const fit = Math.min(box.width / v1.width, (window.innerHeight * 0.72) / v1.height);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const vp = page.getViewport({ scale: fit * dpr });
      const cv = document.createElement('canvas'); cv.width = Math.round(vp.width); cv.height = Math.round(vp.height);
      cv.style.cssText = 'display:block;width:' + Math.round(vp.width / dpr) + 'px;height:' + Math.round(vp.height / dpr) + 'px';
      await page.render({ canvasContext: cv.getContext('2d'), viewport: vp }).promise;
      if (!this.state.certModal || this.state.cert !== idx || !this.certHost.current) return;
      this.certHost.current.replaceChildren(cv);
      this.setState({ certPdf: idx });
    } catch (e) { this.setState({ certPdf: -1 }); }
  }
  resVals(s) {
    const COLORS = { 'Design': '#6F8FF0', 'Frontend and quality': '#E0262B' }, DOTR = { 'Design': '50%', 'Frontend and quality': '2px' };
    const all = []; RESOURCES.forEach(g => g.links.forEach(l => all.push({ ...l, group: g.name === 'Frontend and quality' ? 'Frontend' : g.name, groupKey: g.name })));
    const n = all.length, i = Math.min(s.resTab || 0, n - 1), w = s.w || window.innerWidth, compact = w < 1240;
    const go = k => { const nk = ((k % n) + n) % n; this.setState({ resTab: nk }, () => { const el = document.getElementById('res-tab-' + nk); el && this.resFocus && el.focus(); this.resFocus = false; }); };
    const meta = all.map((l, k) => { const u = new URL(l.url); const host = u.hostname.replace(/^www\./, ''); return { ...l, id: 'res-tab-' + k, host, path: u.pathname === '/' ? '' : u.pathname, groupColor: COLORS[l.groupKey], groupDotR: DOTR[l.groupKey], icon: 'https://www.google.com/s2/favicons?domain=' + u.hostname + '&sz=32', iconLg: 'https://www.google.com/s2/favicons?domain=' + u.hostname + '&sz=64' }; });
    return {
      resTabs: meta.map((t, k) => { const on = k === i; return { ...t, on, tab: on ? 0 : -1, groupStart: k === 0 || meta[k - 1].group !== t.group, groupGap: k === 0 ? '0' : '0.75rem', flex: compact ? (on ? '0 0 auto' : '0 0 auto') : (on ? '1.4 1 0' : '1 1 0'), labelDisp: compact && !on ? 'none' : 'block', weight: on ? 600 : 500, bg: on ? '#14243A' : 'transparent', hoverBg: '#14243A', shadow: on ? '0 -1px 0 #23344D inset' : 'none', barOp: on ? 1 : 0, iconFilter: on ? 'none' : 'grayscale(1) brightness(1.6) opacity(0.75)', pick: () => go(k) }; }),
      resCur: meta[i], resCount: (i + 1) + ' of ' + n,
      resPages: meta.map((p, k) => { const on = k === i; return { ...p, hidden: on ? undefined : 'true', vis: on ? 'visible' : 'hidden', visDelay: on ? '0s' : '450ms', op: on ? 1 : 0, tf: on ? 'translateY(0)' : (k < i ? 'translateY(-8px)' : 'translateY(10px)'), linkTab: on ? 0 : -1 }; }),
      resPrev: () => go(i - 1), resNext: () => go(i + 1),
      resKey: e => { const m = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: n - 1 }; if (e.key in m) { e.preventDefault(); this.resFocus = true; go(m[e.key]); } }
    };
  }
  tmVals(s) {
    const n = TESTIMONIALS.length, i = s.tm || 0;
    const peek = (this.props.testimonialLayout ?? 'peek') !== 'coverflow';
    const SPR = 'linear(0, 0.094 5.6%, 0.274 11.1%, 0.455 16.7%, 0.608 22.2%, 0.726 27.8%, 0.812 33.3%, 0.873 38.9%, 0.944 50%, 0.976 61.1%, 1 100%)';
    const go = k => { this.tmStop = true; clearTimeout(this.tmT); this.setTm(((k % n) + n) % n); };
    const step = d => this.tmStep(d, true);
    const v = s.tmV || 0, snap = !!s.tmSnap;
    const slideOf = (t, k, vi) => { const on = vi === v; return { ...t, key: vi, slideLabel: (k + 1) + ' of ' + n, hiddenSlide: on ? undefined : 'true', cursor: on ? 'default' : 'pointer', peekOp: on ? 1 : 0.55, peekTf: on ? 'scale(1)' : 'scale(0.94)', slideTrans: this.reduce || snap ? 'none' : 'opacity 800ms ' + SPR + ',transform 800ms ' + SPR, pick: () => { if (vi !== v) step(vi - v); },
      starsOn: '\u2605'.repeat(t.rating || 5), starsOff: '\u2605'.repeat(5 - (t.rating || 5)), ratingLabel: 'Rated ' + (t.rating || 5) + ' out of 5' }; };
    const peekList = [];
    for (let c = -1; c <= 1; c++) TESTIMONIALS.forEach((t, k) => peekList.push(slideOf(t, k, c * n + k)));
    return {
      tms: TESTIMONIALS.map((t, k) => {
        let d = k - i; if (d > n / 2) d -= n; if (d < -n / 2) d += n;
        const a = Math.abs(d), sg = Math.sign(d);
        const tf = 'translate(-50%,-50%) ' + (d === 0 ? 'translateX(0) translateZ(40px) rotateY(0deg)' : 'translateX(' + (sg * (74 + (a - 1) * 28)) + '%) translateZ(' + (-120 - a * 40) + 'px) rotateY(' + (-sg * 58) + 'deg)');
        return { ...t, slideLabel: (k + 1) + ' of ' + n, hiddenSlide: k === i ? undefined : 'true', cursor: k === i ? 'default' : 'pointer', peekOp: k === i ? 1 : 0.55, peekTf: k === i ? 'scale(1)' : 'scale(0.94)', slideTrans: this.reduce ? 'none' : 'opacity 800ms ' + SPR + ',transform 800ms ' + SPR, on: d === 0, tab: d === 0 ? 0 : a <= 2 ? 0 : -1, tf, z: 10 - a, op: a > 2 ? 0 : a === 2 ? 0.4 : a === 1 ? 0.7 : 1, blur: a === 0 ? 'blur(0px)' : 'blur(' + (a === 1 ? 1 : 1.5) + 'px)', pe: a > 2 ? 'none' : 'auto', pick: () => go(k),
          starsOn: '\u2605'.repeat(t.rating || 5), starsOff: '\u2605'.repeat(5 - (t.rating || 5)), ratingLabel: 'Rated ' + (t.rating || 5) + ' out of 5' };
      }),
      tmStageH: (s.w || window.innerWidth) < 640 ? '34rem' : '27rem',
      tmCover: !peek, tmPeek: peek,
      tmsPeek: peekList,
      tmTrackTf: 'translateX(calc(' + (v + n) + ' * -1 * (70% + 10px)))', tmTrackTrans: this.reduce || snap ? 'none' : 'transform 800ms ' + SPR,
      tmDots: TESTIMONIALS.map((t, k) => ({ on: k === i, label: 'Show testimonial ' + (k + 1) + ' of ' + n + ', ' + t.name, title: t.name, w: peek ? (k === i ? '22px' : '6px') : (k === i ? '24px' : '8px'), btnW: '24px', bg: k === i ? (peek ? 'var(--accent)' : 'var(--ink)') : 'var(--line-strong)', pick: () => go(k) })),
      tmCaps: TESTIMONIALS.map((t, k) => ({ name: t.name, role: t.role, pos: String(k + 1).padStart(2, '0') + ' / ' + String(n).padStart(2, '0'), hidden: k === i ? undefined : 'true', op: k === i ? 1 : 0, tf: k === i ? 'translateY(0)' : 'translateY(8px)' })),
      tmPrevFn: () => step(-1), tmNextFn: () => step(1), tmNum: String(i + 1).padStart(2, '0'), tmTot: String(n).padStart(2, '0'),
      tmKey: e => { if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); } else if (e.key === 'ArrowRight') { e.preventDefault(); step(1); } },
      tmDown: e => { this.tmX = e.clientX; }, tmUp: e => { if (this.tmX == null) return; const dx = e.clientX - this.tmX; this.tmX = null; if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1); },
      tmPause: () => { this.tmHold = true; clearTimeout(this.tmT); }, tmPlay: () => { this.tmHold = false; this.tmTick(); }
    };
  }
  setTm(k) { if (k === (this.state.tm || 0)) return; const n = TESTIMONIALS.length, cur = this.state.tm || 0; let d = k - cur; if (d > n / 2) d -= n; if (d < -n / 2) d += n; this.tmStep(d, false); }
  tmStep(d, user) {
    if (!d) return; const n = TESTIMONIALS.length;
    if (user) { this.tmStop = true; clearTimeout(this.tmT); }
    this.setState(s => { const v = (s.tmV || 0) + d; return { tmPrev: s.tm || 0, tmV: v, tm: ((v % n) + n) % n, tmSnap: false }; });
    clearTimeout(this.tmNorm);
    this.tmNorm = setTimeout(() => { const v = this.state.tmV || 0; if (v < 0 || v >= n) { this.setState({ tmV: ((v % n) + n) % n, tmSnap: true }, () => requestAnimationFrame(() => requestAnimationFrame(() => this.setState({ tmSnap: false })))); } }, this.reduce ? 0 : 850);
    this.tmTick();
  }
  tmTick() { clearTimeout(this.tmT); if (this.reduce || this.tmHold || this.tmStop) return; const peek = (this.props.testimonialLayout ?? 'peek') !== 'coverflow'; this.tmT = setTimeout(() => this.tmStep(1, false), peek ? 4000 : 5000); }
  apVals(s) {
    const q = (s.apQ || '').trim().toLowerCase(), cat = s.apCat || 'all';
    const match = p => !q || [p.title, p.client, p.tag, p.line, ...(p.tech || [])].join(' ').toLowerCase().includes(q);
    const inCat = (p, c) => c === 'all' || (c === 'dev' ? p.cats.includes('dev') : p.cats.includes('design'));
    const list = PROJECTS.filter(p => match(p) && inCat(p, cat));
    const vw = s.w || window.innerWidth, nc = vw < 640 ? 1 : vw < 1000 ? 2 : 3;
    const ratios = ['16/10', '2/1', '16/9', '3/2', '16/10'];
    const cols = Array.from({ length: nc }, () => []);
    list.forEach((p, i) => { const pi = PROJECTS.indexOf(p);
      cols[i % nc].push({ title: p.title, client: p.client, img: TH('assets/img_project_0' + (pi + 1) + '.jpg'), alt: 'Screenshot of ' + p.title + ' for ' + p.client, ratio: ratios[pi % ratios.length], delay: (i * 100) + 'ms', aria: p.title + ', ' + p.client + '. Open details',
        badges: [...(p.cats.includes('dev') ? [{ label: 'Front-end', bg: '#FBE4E5', ink: '#9E1419' }] : []), ...(p.cats.includes('design') ? [{ label: 'Design', bg: '#E3E9FB', ink: '#1F3C9C' }] : [])],
        open: () => this.open('project', this.projClose, { project: p.id }) }); });
    const cnt = c => PROJECTS.filter(p => match(p) && inCat(p, c)).length;
    return {
      allOpen: !!s.allProjects, apInput: this.apInput, apScroll: this.apScroll, apQ: s.apQ || '',
      onApQ: e => this.setState({ apQ: e.target.value }), apClear: () => this.setState({ apQ: '', apCat: 'all' }),
      apCats: [['all', 'All'], ['dev', 'Front-end'], ['design', 'Design']].map(([k, l]) => ({ label: l, count: cnt(k), on: cat === k, bg: cat === k ? 'var(--ink)' : 'transparent', ink: cat === k ? 'var(--on-ink)' : 'var(--ink)', pick: () => this.setState({ apCat: k }) })),
      apCols: cols.map((t, i) => ({ tiles: t, offset: nc > 1 && i === 1 ? '14px' : '0px' })),
      apEmpty: list.length === 0, apStatus: list.length === 1 ? '1 project' : list.length + ' projects'
    };
  }
  observeTiles() {
    const root = this.apScroll.current; if (!root) return;
    const show = el => { el.style.opacity = '1'; el.style.transform = 'none'; el.dataset.seen = '1'; };
    const tiles = [...root.querySelectorAll('[data-tile]')].filter(el => !el.dataset.seen && !el.dataset.watch);
    if (this.reduce || !('IntersectionObserver' in window)) { tiles.forEach(el => { el.style.transition = 'none'; show(el); }); return; }
    if (!this.apIO || this.apRoot !== root) { this.apIO && this.apIO.disconnect(); this.apRoot = root; this.apIO = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { show(en.target); this.apIO.unobserve(en.target); } }), { root, threshold: 0.15 }); }
    const rb = root.getBoundingClientRect();
    tiles.forEach(el => { el.dataset.watch = '1'; const r = el.getBoundingClientRect(); if (r.top < rb.bottom && r.bottom > rb.top) requestAnimationFrame(() => show(el)); else this.apIO.observe(el); });
  }
  componentDidUpdate() { this.syncCertImg(); if (!this._waterInit) this.setupWater();
    const open = !!(this.state && this.state.allProjects);
    if (open) { clearTimeout(this.apT); this.apT = setTimeout(() => this.observeTiles(), 30); }
    else if (this._apWasOpen) { this.apIO && this.apIO.disconnect(); this.apIO = null; }
    this._apWasOpen = open;
  }
  wallVals(s) {
    const vw = s.w || window.innerWidth, wide = vw >= 1024, xl = vw >= 1200, side = vw >= 640;
    const SRC = s.wallProjects || PROJECTS;
    const proj = SRC.map((p, i) => ({ img: TH(p.img || ('assets/img_project_0' + (i + 1) + '.jpg')), alt: 'Screenshot of ' + p.title + ' for ' + p.client, badge: 'Project', badgeBg: '#E3E9FB', badgeInk: '#1F3C9C', quote: p.line, name: p.title, sub: p.client, initials: p.client.split(/[\s·]+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase(), avatarBg: '#2F52C4', ratio: '16/10' }));
    const certs = CERT_PANELS.map(c => ({ img: TH(c.bg.replace("url('", '').replace("')", '')), alt: c.alt, badge: 'Certificate', badgeBg: '#FBE4E5', badgeInk: '#9E1419', quote: c.title + '.', name: c.sub, sub: 'Issued ' + c.date, initials: c.sub.split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase(), avatarBg: '#B3191E', ratio: '4/3' }));
    // Three columns (one on narrow screens). Each project goes in exactly one column so no project shows twice side by side.
    const n = proj.length, maxCol = wide ? 3 : side ? 2 : 1, durs = [30, 36, 42];
    // Use fewer columns until each column holds at least 5 projects (3 columns return at 15+ projects).
    let nCol = maxCol; while (nCol > 1 && Math.floor(n / nCol) < 5) nCol--;
    // Card height is chosen so one pass of a column is taller than the wall plus a card: no project is ever visible twice.
    // Images crop from the top-left so the logo and site name stay in frame.
    const fs = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
    const wallPx = xl ? Math.min(vw * 0.46, 40 * fs) : wide ? Math.min(vw * 0.54, 44 * fs) : side ? Math.min(vw * 0.38, 22 * fs) : Math.min(vw * 0.38, 10 * fs);
    const padPx = Math.min(Math.max(fs, vw * 0.03), 2 * fs), colW = Math.max(40, (wallPx - 2 * padPx - 12 * (nCol - 1)) / nCol);
    const hero = this.heroRef && this.heroRef.current, viewH = (hero && hero.offsetHeight) || Math.max(32 * fs, Math.min(window.innerHeight * 0.88, 54 * fs));
    // Each card keeps its screenshot's own shape (clamped) so logo and wordmark stay in frame; if a column is too short to loop cleanly, all its cards grow evenly and crop from the centre.
    const nat = this.wallNat || (this.wallNat = {});
    proj.forEach(p => { if (nat[p.img] === undefined) { nat[p.img] = 0; const im = new Image(); im.onload = () => { nat[p.img] = im.naturalWidth / im.naturalHeight; clearTimeout(this.natT); this.natT = setTimeout(() => this.forceUpdate(), 60); }; im.src = p.img; } });
    const cols = Array.from({ length: nCol }, (_, c) => { const cs = proj.filter((_, j) => j % nCol === c); const rs = cs.map(p => Math.min(2.4, Math.max(1.25, nat[p.img] || 1.6))); const hs = rs.map(x => colW / x); const tot = hs.reduce((a, h) => a + h + 12, 0), need = viewH * 1.08 + Math.max(...hs) + 12; const k = tot < need ? need / tot : 1;
      return cs.map((p, j) => { const rr = rs[j] / k, tall = (nat[p.img] || 1.6) < rr; return { ...p, ratio: rr.toFixed(3), pos: tall ? 'center top' : 'center center' }; }); });
    return {
      wall: cols.map((cs, i) => ({ dur: durs[i] + 's', delay: '0s', dir: i === 1 ? 'reverse' : 'normal', display: 'block', cards: [...cs.map(c => ({ ...c, hid: undefined })), ...cs.map(c => ({ ...c, alt: '', hid: 'true' }))] })),
      wallState: s.wallPaused ? 'paused' : 'running', wallPause: () => this.setState({ wallPaused: true }), wallPlay: () => this.setState({ wallPaused: false }),
      wallW: xl ? 'min(46%,40rem)' : wide ? 'min(54%,44rem)' : side ? 'min(38%,22rem)' : 'min(38%,10rem)', wallCols: 'repeat(' + nCol + ',minmax(0,1fr))', wallOp: 1,
      wallPos: 'absolute', wallOrder: 0, wallH: 'auto', heroDir: 'row',
      heroSize: vw < 480 ? 'clamp(1.75rem,7.6vw,2.25rem)' : vw < 760 ? 'clamp(2.25rem,6.4vw,3rem)' : vw < 1024 ? 'clamp(1.5rem,3.9vw,2.75rem)' : vw < 1200 ? '2.875rem' : 'clamp(3rem,4.1vw,3.875rem)',
      wallScrim: xl ? 'linear-gradient(90deg,#0E1A2B 0%,#0E1A2B 50%,rgba(14,26,43,0.6) 62%,rgba(14,26,43,0) 76%)' : wide ? 'linear-gradient(90deg,#0E1A2B 0%,#0E1A2B 40%,rgba(14,26,43,0.55) 58%,rgba(14,26,43,0) 72%)' : side ? 'linear-gradient(90deg,#0E1A2B 0%,#0E1A2B 48%,rgba(14,26,43,0.6) 62%,rgba(14,26,43,0) 80%)' : 'linear-gradient(90deg,#0E1A2B 0%,#0E1A2B 52%,rgba(14,26,43,0.55) 64%,rgba(14,26,43,0) 80%)',
      heroTextMax: xl ? 'min(100%,40rem)' : wide ? 'min(100%,34rem)' : side ? '62%' : '64%', leadWrap: xl ? 'nowrap' : 'normal', leadSize: xl ? '1.125rem' : 'clamp(1.0625rem,1.5vw,1.25rem)'
    };
  }
  setupCount() {
    const els = [...document.querySelectorAll('[data-count]')];
    if (!els.length || matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    const fmt = (v, d) => v.toFixed(d);
    els.forEach(el => { el.textContent = fmt(0, +el.dataset.dec); });
    const run = el => {
      const to = parseFloat(el.dataset.count), d = +el.dataset.dec, dur = d ? 1400 : 1100, t0 = performance.now();
      const step = t => { const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3); el.textContent = fmt(to * e, d); if (p < 1) requestAnimationFrame(step); else el.textContent = fmt(to, d); };
      requestAnimationFrame(step);
    };
    this.countIO = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { this.countIO.unobserve(en.target); run(en.target); } }), { threshold: 0.6 });
    els.forEach(el => this.countIO.observe(el));
  }
  setupBlur() {
    const heads = [...document.querySelectorAll('[data-blur]')];
    const hero = document.getElementById('hero-title');
    if (hero && !hero.getAttribute('aria-label')) hero.setAttribute('aria-label', 'Thoughtful design. Precise engineering.');
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    heads.forEach(el => {
      const ws = [...el.querySelectorAll('[data-w]')];
      ws.forEach((w, i) => { if (w.tagName !== 'BUTTON') w.setAttribute('aria-hidden', 'true'); w.style.setProperty('--i', i); });
      if (ws.length > 12 || reduce || !('IntersectionObserver' in window)) el.classList.add('is-static');
    });
    const play = el => {
      if (el.classList.contains('is-in')) return;
      el.classList.add('is-in');
      const n = el.querySelectorAll('[data-w]').length;
      setTimeout(() => el.classList.add('is-done'), 800 + Math.max(0, n - 1) * 160 + 50);
    };
    if (!('IntersectionObserver' in window)) return;
    const ready = (document.fonts && document.fonts.ready) ? Promise.race([document.fonts.ready, new Promise(r => setTimeout(r, 700))]) : Promise.resolve();
    ready.then(() => requestAnimationFrame(() => {
      this.blurIO = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { this.blurIO.unobserve(en.target); play(en.target); } }), { threshold: 0.5 });
      heads.forEach(el => { if (!el.classList.contains('is-static')) this.blurIO.observe(el); });
    }));
  }
  toss(pov) {
    if (pov === this.state.pov) return;
    const target = pov === 'dev' ? 180 : 0;
    let deg = (this.state.coinDeg || 0) + 720;
    deg += ((target - (deg % 360)) + 360) % 360;
    this.setState({ pov, coinDeg: deg, coinUp: !this.reduce });
    clearTimeout(this.coinT); this.coinT = setTimeout(() => this.setState({ coinUp: false }), 430);
  }
  setFan(i) { this.setState({ fan: (i + 3) % 3 }, () => this.scheduleFan()); }
  setDeck(i) { const n = PROJECTS.length; this.setState({ deck: (i + n) % n }); }
  setTab(i) {
    if (i === this.state.tab) return;
    this.setState({ tab: i, tabIn: false });
    clearTimeout(this.tabT); this.tabT = setTimeout(() => this.setState({ tabIn: true }), 40);
  }
  setupParticles() {
    const cv = this.pCanvas.current, host = this.heroRef.current; if (!cv || !host) return;
    const ctx = cv.getContext('2d'), reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let W = 0, H = 0, dpr = 1, last = 0, raf = 0, visible = true;
    const N = 72, rnd = Math.random;
    const ps = Array.from({ length: N }, () => { const z = rnd(); return { z, x: rnd(), y: rnd(), r: 1 + z * 2.5, a: 0.14 + z * 0.5, v: 8 + z * 34, ph: rnd() * Math.PI * 2, sw: 4 + z * 8 }; });
    const draw = (t) => {
      ctx.clearRect(0, 0, W, H);
      for (const p of ps) {
        const x = p.x * W + Math.sin(t * 0.0006 + p.ph) * p.sw * dpr;
        ctx.beginPath(); ctx.arc(x, p.y * H, p.r * dpr, 0, 6.2832);
        ctx.fillStyle = 'rgba(142,201,242,' + p.a.toFixed(3) + ')'; ctx.fill();
      }
    };
    const size = () => { dpr = Math.min(window.devicePixelRatio || 1, 2); W = cv.width = Math.round(host.clientWidth * dpr); H = cv.height = Math.round(host.clientHeight * dpr); draw(performance.now()); };
    const loop = (t) => {
      raf = 0; if (!visible || document.hidden) { last = 0; return; }
      const dt = last ? Math.min((t - last) / 1000, 0.05) : 0; last = t;
      for (const p of ps) { p.y -= (p.v * dt * dpr) / H; if (p.y < -0.02) { p.y = 1.02; p.x = rnd(); } }
      draw(t); raf = requestAnimationFrame(loop);
    };
    const start = () => { if (!reduce && !raf && visible && !document.hidden) raf = requestAnimationFrame(loop); };
    this.pRO = new ResizeObserver(size); this.pRO.observe(host); size();
    if ('IntersectionObserver' in window) { this.pIO = new IntersectionObserver(([e]) => { visible = e.isIntersecting; start(); }); this.pIO.observe(host); }
    this.pVis = () => start(); document.addEventListener('visibilitychange', this.pVis);
    this.pStop = () => { raf && cancelAnimationFrame(raf); raf = 0; };
    start();
  }
  async setupWater() {
    const cv = this.waterCanvas.current, host = this.waterHost.current; if (!cv || !host || this._waterInit) return; this._waterInit = true;
    try {
    let THREE; try { THREE = await import('https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js'); } catch (e) { return; }
    if (this._unmounted) return;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const stage = host.parentElement;
    const renderer = new THREE.WebGLRenderer({ canvas: cv, antialias: false, alpha: false });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    const scene = new THREE.Scene(), cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const N = 8, rip = Array.from({ length: N }, () => new THREE.Vector3(0, 0, -99));
    const uni = { uT: { value: 0 }, uAsp: { value: 1 }, uR: { value: rip } };
    const mat = new THREE.ShaderMaterial({ uniforms: uni,
      vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
      fragmentShader: `precision highp float; varying vec2 vUv; uniform float uT; uniform float uAsp; uniform vec3 uR[8];
        float H(vec2 p){ float h = 0.0; for (int i = 0; i < 8; i++) { float age = uT - uR[i].z; if (age < 0.0 || age > 4.5) continue;
          vec2 d = p - uR[i].xy; d.x *= uAsp; float dist = length(d); float x = dist - age * 0.3;
          h += sin(x * 52.0) * exp(-x * x * 140.0) * exp(-age * 0.8) / (1.0 + dist * 3.0); } return h; }
        vec3 bg(vec2 uv){ vec3 a = vec3(0.969, 0.965, 0.949), b = vec3(0.886, 0.906, 0.949); vec3 c = mix(a, b, smoothstep(0.0, 1.0, 1.0 - uv.y + uv.x * 0.25));
          c -= 0.018 * smoothstep(0.3, 0.7, 0.5 + 0.5 * sin((uv.x * uAsp + uv.y) * 46.0)); return mix(c, vec3(0.902, 0.922, 0.969), 0.35 * smoothstep(0.6, 0.0, length((uv - vec2(0.85, 0.85)) * vec2(uAsp, 1.0)))); }
        void main(){ float e = 0.002; float h = H(vUv); vec2 s = vec2(H(vUv + vec2(e, 0.0)) - h, H(vUv + vec2(0.0, e)) - h) / e;
          vec3 col = bg(vUv + s * 0.004);
          vec3 n = normalize(vec3(-s * 0.03, 1.0)); float spec = pow(max(dot(n, normalize(vec3(-0.35, 0.45, 1.0))), 0.0), 48.0);
          float flat0 = pow(normalize(vec3(-0.35, 0.45, 1.0)).z, 48.0); col += clamp(spec - flat0, -0.5, 1.0) * 0.8;
          col = mix(col, vec3(0.255, 0.412, 0.882), clamp(h, 0.0, 1.0) * 0.4); col -= clamp(-h, 0.0, 1.0) * 0.13;
          gl_FragColor = vec4(col, 1.0); }` });
    const geo = new THREE.PlaneGeometry(2, 2); scene.add(new THREE.Mesh(geo, mat));
    const t0 = performance.now(), now = () => (performance.now() - t0) / 1000;
    const size = () => { const r = stage.getBoundingClientRect(); if (!r.width || !r.height) return; renderer.setSize(r.width, r.height, false); uni.uAsp.value = r.width / r.height; if (reduce || !running) draw(); };
    const draw = () => { uni.uT.value = now(); renderer.render(scene, cam); };
    let raf = 0, running = false, visible = false, slot = 0, lastT = 0, lx = -1, ly = -1;
    const live = () => rip.some(r => now() - r.z < 4.5);
    const loop = () => { draw(); raf = live() ? requestAnimationFrame(loop) : (running = false, 0); };
    const kick = () => { if (reduce || !visible || running) return; running = true; raf = requestAnimationFrame(loop); };
    const onMove = (e) => { const r = stage.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = 1 - (e.clientY - r.top) / r.height;
      if (x < 0 || x > 1 || y < 0 || y > 1) return; const t = performance.now();
      if (t - lastT < 90 || Math.hypot(x - lx, y - ly) < 0.01) return; lastT = t; lx = x; ly = y;
      rip[slot].set(x, y, now()); slot = (slot + 1) % N; reduce ? draw() : kick(); };
    const ro = new ResizeObserver(size); ro.observe(stage);
    const io = new IntersectionObserver(([en]) => { visible = en.isIntersecting; if (!visible) { cancelAnimationFrame(raf); running = false; } else kick(); }); io.observe(stage);
    stage.addEventListener('pointermove', onMove, { passive: true });
    size(); draw();
    this.waterDispose = () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); stage.removeEventListener('pointermove', onMove); geo.dispose(); mat.dispose(); renderer.dispose(); };
    } catch (err) { console.error('water ripple', err); }
  }
  async setupMesh() {
    const cv = this.meshCanvas.current, host = this.meshHost.current; if (!cv || !host) return;
    let THREE; try { THREE = await import('https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js'); } catch (e) { return; }
    if (this._unmounted) return;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const renderer = new THREE.WebGLRenderer({ canvas: cv, antialias: false, alpha: false, powerPreference: 'low-power' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    const scene = new THREE.Scene(), cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const c = (hex) => new THREE.Color(hex);
    const uni = { uTime: { value: 0 }, uRes: { value: new THREE.Vector2(1, 1) }, uMouse: { value: new THREE.Vector2(0.7, 0.4) },
      uC: { value: [c('#2F7BD9'), c('#8EC9F2'), c('#EAF4FF'), c('#0E1A2B'), c('#14365E'), c('#1F5FA8')] } };
    const mat = new THREE.ShaderMaterial({ uniforms: uni, vertexShader: 'varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}',
      fragmentShader: `precision highp float;varying vec2 vUv;uniform float uTime;uniform vec2 uRes;uniform vec2 uMouse;uniform vec3 uC[6];
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float vn(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
float fbm(vec2 p){return .65*vn(p)+.35*vn(p*2.03+7.1);}
void main(){float t=uTime;vec2 a=vec2(uRes.x/uRes.y,1.);vec2 uv=vUv;
vec2 q=uv+.12*(vec2(fbm(uv*2.2+t*.6),fbm(uv*2.2-t*.5+3.7))-.5);vec2 p=q*a;
vec2 P[6];P[0]=uMouse;
P[1]=vec2(.25+.18*sin(t*.9),.7+.15*cos(t*.7));P[2]=vec2(.55+.2*cos(t*.6),.85+.1*sin(t*1.1));
P[3]=vec2(.15+.12*cos(t*.8),.2+.12*sin(t*.5));P[4]=vec2(.85+.1*sin(t*.7),.15+.15*cos(t*.9));P[5]=vec2(.6+.22*sin(t*.4+1.),.45+.2*cos(t*.6+2.));
vec3 col=vec3(0.);float ws=0.;
for(int i=0;i<6;i++){vec2 d=p-P[i]*a;float w=exp(-dot(d,d)*7.5);col+=uC[i]*w;ws+=w;}
col/=max(ws,1e-4);col+=(h(gl_FragCoord.xy+t)-.5)*.01;gl_FragColor=vec4(col,1.);}` });
    const geo = new THREE.PlaneGeometry(2, 2); scene.add(new THREE.Mesh(geo, mat));
    const size = () => { const w = host.clientWidth, ht = host.clientHeight; if (!w || !ht) return; renderer.setSize(w, ht, false); uni.uRes.value.set(w, ht); renderer.render(scene, cam); };
    const target = uni.uMouse.value.clone();
    const onMove = (e) => { const r = host.getBoundingClientRect(); target.set((e.clientX - r.left) / r.width, 1 - (e.clientY - r.top) / r.height); };
    let raf = 0, vis = true, last = 0, time = 3;
    const loop = (now) => { raf = 0; if (!vis || document.hidden) { last = 0; return; }
      const dt = last ? Math.min((now - last) / 1000, 0.05) : 0; last = now; time += dt * 0.16;
      uni.uTime.value = time; uni.uMouse.value.lerp(target, 0.07); renderer.render(scene, cam); raf = requestAnimationFrame(loop); };
    const start = () => { if (!reduce && !raf && vis && !document.hidden) raf = requestAnimationFrame(loop); };
    uni.uTime.value = time;
    const ro = new ResizeObserver(size); ro.observe(host); size();
    const io = new IntersectionObserver(([e]) => { vis = e.isIntersecting; start(); }); io.observe(host);
    const onVis = () => start(); document.addEventListener('visibilitychange', onVis);
    if (!reduce) host.addEventListener('pointermove', onMove, { passive: true });
    start();
    this.meshDispose = () => { raf && cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); document.removeEventListener('visibilitychange', onVis); host.removeEventListener('pointermove', onMove); geo.dispose(); mat.dispose(); renderer.dispose(); };
  }
  componentWillUnmount() { this._unmounted = true; this.waterDispose && this.waterDispose(); clearInterval(this.ctT); this.meshDispose && this.meshDispose(); this.pStop && this.pStop(); this.pRO && this.pRO.disconnect(); this.pIO && this.pIO.disconnect(); document.removeEventListener('visibilitychange', this.pVis); this.countIO && this.countIO.disconnect(); clearTimeout(this.tmNorm);
    this.blurIO && this.blurIO.disconnect(); clearTimeout(this.tmT); this.apIO && this.apIO.disconnect();
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('keydown', this.onKey);
    window.removeEventListener('scroll', this.onScroll);
    clearTimeout(this.copyT); clearTimeout(this.sendT); clearTimeout(this.typeT); clearTimeout(this.tabT);
    window.removeEventListener('scroll', this.onFx); if (this.io) this.io.disconnect(); if (this.vio) this.vio.disconnect(); if (this.hio) this.hio.disconnect(); if (this.fio) this.fio.disconnect(); clearTimeout(this.certT); clearTimeout(this.pillT); clearTimeout(this.ovT); if (this.ro) this.ro.disconnect(); window.removeEventListener('keydown', this.onPillKey, true); clearTimeout(this.fanT); window.removeEventListener('resize', this.measurePill);
  }
  applyDisplay() {
    const el = document.documentElement;
    if (this.state.contrast === 'hc') el.setAttribute('data-theme', 'hc'); else el.removeAttribute('data-theme');
    el.setAttribute('data-size', this.state.size);
    try { localStorage.setItem('jas-display', JSON.stringify({ size: this.state.size, contrast: this.state.contrast })); } catch (e) {}
  }
  anyOpen() { const s = this.state; return s.menu || s.palette || s.display || s.notice || s.project || s.certModal || s.allProjects; }
  open(key, ref, extra) {
    if (!this.anyOpen()) this.lastFocus = document.activeElement;
    this.setState({ menu: false, palette: false, display: false, notice: false, project: null, certModal: false, allProjects: false, [key]: true, q: '', pi: 0, ...(extra || {}) }, () => setTimeout(() => ref && ref.current && ref.current.focus(), 0));
  }
  openPalette = () => this.open('palette', this.paletteInput);
  closeAll = () => {
    if (!this.anyOpen()) return;
    this.setState({ menu: false, palette: false, display: false, notice: false, project: null, certModal: false, allProjects: false }, () => { if (this.lastFocus && this.lastFocus.focus) this.lastFocus.focus({ preventScroll: true }); });
  };
  jump(id) {
    this.lastFocus = null;
    this.setState({ menu: false, palette: false, display: false, notice: false, project: null, certModal: false, allProjects: false }, () => {
      const el = document.getElementById(id); if (!el) return;
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68 });
      el.setAttribute('tabindex', '-1'); el.focus({ preventScroll: true });
    });
  }
  copyEmail = () => {
    const done = () => { this.setState({ copied: true, liveMsg: 'Email address copied' }); clearTimeout(this.copyT); this.copyT = setTimeout(() => this.setState({ copied: false, liveMsg: '' }), 2400); };
    const fallback = () => { const t = document.createElement('textarea'); t.value = EMAIL; t.style.position = 'fixed'; t.style.opacity = '0'; document.body.appendChild(t); t.select(); try { document.execCommand('copy'); } catch (e) {} document.body.removeChild(t); done(); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(EMAIL).then(done, fallback); else fallback();
  };
  paletteItems() {
    const items = [...NAV, ['contact', 'Contact']].map(([id, l]) => ({ label: l, keys: id, group: 'Section', act: () => this.jump(id) }));
    PROJECTS.forEach(p => items.push({ label: p.title, keys: p.tag + ' ' + p.tech.join(' '), group: 'Project', act: () => this.open('project', this.projClose, { project: p.id }) }));
    items.push({ label: 'Copy email address', keys: 'email copy hire', group: 'Action', act: () => { this.closeAll(); this.copyEmail(); } });
    items.push({ label: 'Request r\u00e9sum\u00e9', keys: 'resume r\u00e9sum\u00e9 cv pdf download', group: 'Action', act: () => this.open('notice', this.noticeFirst) });
    items.push({ label: 'Open LinkedIn', keys: 'linkedin social', group: 'Action', act: () => { this.closeAll(); window.open(LINKEDIN, '_blank', 'noopener'); } });
    items.push({ label: 'Display settings', keys: 'text size contrast accessibility', group: 'Action', act: () => this.open('display', this.sizeFirst) });
    const q = this.state.q.trim().toLowerCase();
    return q ? items.filter(i => (i.label + ' ' + i.keys).toLowerCase().includes(q)) : items;
  }
  validate(f) {
    const e = {};
    if (!f.name.trim()) e.name = 'Add your name.';
    if (!f.email.trim()) e.email = 'Add an email for the reply.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = 'Use a full address, like name@company.com.';
    if (f.message.trim().length < 20) e.message = 'Write at least 20 characters.';
    return e;
  }
  submit = (ev) => {
    ev.preventDefault();
    const f = this.state.form, errors = this.validate(f);
    this.setState({ errors });
    const first = ['name', 'email', 'message'].find(k => errors[k]);
    if (first) { setTimeout(() => { const el = document.getElementById({ name: 'f-name', email: 'f-email', message: 'f-msg' }[first]); el && el.focus(); }, 0); return; }
    this.setState({ status: 'sending' });
    this.sendT = setTimeout(() => {
      const topic = (TOPICS.find(t => t[0] === f.topic) || [0, 'Message'])[1];
      const a = document.createElement('a');
      a.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(topic + ' from ' + f.name.trim()) + '&body=' + encodeURIComponent(f.message.trim() + '\n\n' + f.name.trim() + '\n' + f.email.trim());
      a.click();
      this.setState({ status: 'sent', liveMsg: 'Message prepared in your email app' });
    }, 500);
  };
  field(k) { return (e) => { const v = e.target.value; this.setState(s => { const form = { ...s.form, [k]: v }; const errors = { ...s.errors }; if (errors[k] && !this.validate(form)[k]) delete errors[k]; return { form, errors }; }); }; }

  renderVals() {
    const s = this.state;
    const wide = s.w >= 980;
    const fdefs = [['all', 'All'], ['design', 'Design'], ['dev', 'Development'], ['cms', 'CMS']];
    const list = PROJECTS.filter(p => s.filter === 'all' || p.cats.includes(s.filter));
    const card = (p) => ({ ...p, img: 'img_project_0' + (PROJECTS.indexOf(p) + 1) + '.jpg', bg: "url('" + TH('assets/img_project_0' + (PROJECTS.indexOf(p) + 1) + '.jpg') + "')", imgAlt: 'Screenshot of ' + p.title, techLine: p.tech.join(', '), open: () => this.open('project', this.projClose, { project: p.id }) });
    const pj = PROJECTS.find(p => p.id === s.project);
    const results = s.palette ? this.paletteItems() : [];
    const pi = Math.min(s.pi, Math.max(0, results.length - 1));
    const errKeys = Object.keys(s.errors);
    const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform || '');
    const n = PROJECTS.length;
    const cur = PROJECTS[s.deck];
    const poses = ['translate3d(0,0,0) rotate(0deg) scale(1)', 'translate3d(9%,-7%,0) rotate(3deg) scale(0.93)', 'translate3d(17%,-13%,0) rotate(6deg) scale(0.86)', 'translate3d(22%,-18%,0) rotate(8deg) scale(0.8)', 'translate3d(-14%,6%,0) rotate(-6deg) scale(0.9)'];
    const deckCards = PROJECTS.map((p, i) => { const d = (i - s.deck + n) % n; return { ...card(p), tf: poses[d], op: d === n - 1 ? 0 : (d === 0 ? 1 : 1 - d * 0.18), z: 10 - d, blur: d === 0 ? 'none' : 'saturate(0.6)', hidden: d !== 0, click: () => d === 0 ? this.open('project', this.projClose, { project: p.id }) : this.setDeck(i) }; }).reverse();
    const certStyle = this.props.certCollapsed || 'gradient';
    const certFills = certStyle === 'solid' ? ['#14243A', '#1D3352', '#14243A', '#1D3352'] : certStyle === 'brand' ? ['linear-gradient(160deg,#2F52C4,#14243A)', 'linear-gradient(160deg,#B3191E,#3A0F14)'] : ['linear-gradient(160deg,#1D3352 0%,#2F52C4 100%)', 'linear-gradient(160deg,#14243A 0%,#24407E 100%)', 'linear-gradient(160deg,#1A2C48 0%,#3A5FD6 100%)'];
    const STACK = EXPERTISE;
    const LOGOS = { 'Figma': 'figma', 'HTML5': 'html5', 'CSS3': 'css', 'SCSS': 'sass', 'JavaScript': 'javascript', 'jQuery': 'jquery', 'Tailwind': 'tailwindcss', 'Bootstrap': 'bootstrap', 'Bulma': 'bulma', 'React': 'react', 'WordPress': 'wordpress', 'Shopify': 'shopify', 'Webflow': 'webflow', 'Framer': 'framer', 'Squarespace': 'squarespace', 'ASP.NET': 'dotnet', 'PHP': 'php', 'MySQL': 'mysql', 'Technical SEO': 'googlesearchconsole', 'Core Web Vitals': 'lighthouse', 'Cross-browser': 'googlechrome', 'Design systems': 'storybook' };
    const ABBR = { 'Adobe XD': 'Xd', 'Creative Suite': 'Cc', 'Ext JS': 'Ext', 'Salesforce': 'SF', 'Sitecore': 'Sc', 'C#': 'C#', 'AWS': 'AWS', 'Azure': 'Az' };
    const tabItems = STACK[s.tab].items.map((name, i) => ({ name, n: String(i + 1).padStart(2, '0'), delay: s.tabIn ? (i * 45) + 'ms' : '0ms', hasLogo: !!LOGOS[name], a11y: name === 'WCAG 2.2 AA', noLogo: !LOGOS[name] && name !== 'WCAG 2.2 AA', logo: LOGOS[name] ? 'https://cdn.simpleicons.org/' + LOGOS[name] : undefined, abbr: ABBR[name] || name.slice(0, 2) }));
    const allTools = EXPERTISE.flatMap(e => e.items);
    const half = Math.ceil(allTools.length / 2);
    return {
      typed: s.typed,
      fanFrames: [['img_hero_01 · dashboard screen', 'Dashboard interface from a recent project'], ['img_hero_02 · design system sheet', 'Design system components and tokens'], ['img_hero_03 · mobile layout', 'Mobile layout of a responsive website']].map(([label, alt], i) => {
        const pos = (i - s.fan + 3) % 3;
        const poses = ['translate(0,0) rotate(0deg) scale(1)', 'translate(14%,-9%) rotate(6deg) scale(.94)', 'translate(-8%,8%) rotate(-7deg) scale(.9)'];
        return { label, alt, pos, hidden: pos !== 0, tf: this.reduce ? 'none' : poses[pos], op: this.reduce ? (pos === 0 ? 1 : 0) : 1, z: 3 - pos };
      }),
      fanCount: (s.fan + 1) + ' / 3',
      fanPrev: () => this.setFan(s.fan - 1), fanNext: () => this.setFan(s.fan + 1),
      onFanKey: (e) => { if (e.key === 'ArrowRight') { e.preventDefault(); this.setFan(s.fan + 1); } else if (e.key === 'ArrowLeft') { e.preventDefault(); this.setFan(s.fan - 1); } },
      fanHoverOn: () => this.setState({ fanHover: true }, () => this.scheduleFan()), fanHoverOff: () => this.setState({ fanHover: false }, () => this.scheduleFan()),
      isDesignPov: s.pov === 'design', isDevPov: s.pov === 'dev',
      povDesign: () => this.toss('design'), povDev: () => this.toss('dev'),
      povDesignOp: s.pov === 'design' ? 1 : 0, povDesignHidden: s.pov !== 'design', povCaption: s.pov === 'design' ? 'Designer · JAS' : 'Developer · JAS', povDevOp: s.pov === 'dev' ? 1 : 0, povDevHidden: s.pov !== 'dev',
      povDesignTf: s.pov === 'design' ? 'scale(1) rotate(0deg)' : 'scale(0.92) rotate(-8deg)', povDevTf: s.pov === 'dev' ? 'scale(1) rotate(0deg)' : 'scale(0.92) rotate(8deg)',
      hdrDesignBg: s.pov === 'design' ? '#2F52C4' : 'transparent', hdrDesignFg: s.pov === 'design' ? '#FFFFFF' : 'var(--ink)',
      hdrDevBg: s.pov === 'dev' ? '#B3191E' : 'transparent', hdrDevFg: s.pov === 'dev' ? '#FFFFFF' : 'var(--ink)',
      povDesignBg: s.pov === 'design' ? '#2F52C4' : 'transparent', povDevBg: s.pov === 'dev' ? '#B3191E' : 'transparent',
      designLineOp: s.pov === 'design' ? 1 : 0.55, devLineOp: s.pov === 'dev' ? 1 : 0.55, slashColor: s.pov === 'dev' ? '#F0545A' : '#A9BCF7',
      certActive: CERT_PANELS[s.cert], certOpen: !!s.certModal, certClose: this.certClose,
      openCert: () => { this.setState({ certIdle: false, certPdf: -1 }); this.open('certModal', this.certClose); },
      ...this.tmVals(s), ...this.apVals(s),
      openAll: () => { this.open('allProjects', this.apInput); },
      certHost: this.certHost, certImgRef: this.certImgRef, certImgDisp: s.certPdf === s.cert ? 'none' : 'block', certCanvasDisp: s.certPdf === s.cert ? 'block' : 'none',
      certFrameSrc: CERT_PANELS[s.cert].href + '#view=FitH&toolbar=0', certFrameTitle: CERT_PANELS[s.cert].title + ' certificate (PDF)', certImgSrc: CERT_PANELS[s.cert].bg.replace("url('", '').replace("')", ''),
      ...this.wallVals(s), ...this.ttVals(s),
      certDir: wide ? 'row' : 'column', certH: wide ? '26rem' : '36rem',
      certLeave: () => this.setState({ certIdle: true }),
      certPanels: CERT_PANELS.map((c, i) => { const on = i === s.cert; return { ...c, bg: "url('" + TH(c.bg.slice(5, -2), true) + "')", on, num: String(i + 1).padStart(2, '0'), grow: on ? 6 : 1, op: on ? 1 : 0, numOp: on ? 0 : 1, fill: certFills[i % certFills.length],
          label: wide ? c.short : c.title, labelDir: wide ? 'column' : 'row', labelAlign: wide ? 'flex-start' : 'center', labelJustify: wide ? 'flex-end' : 'flex-start', labelText: 'left', labelGap: wide ? '0.375rem' : '0.75rem', labelPad: wide ? '0 1rem 1.25rem' : '0 1rem', numTrim: wide ? 'normal' : 'trim-both cap alphabetic', tf: on ? 'translateY(0)' : 'translateY(8px)', delay: on ? '150ms' : '0ms', pick: () => this.setState({ cert: i, certIdle: false }) }; }),
      ...(() => {
        const R = s.rects;
        const px = (v) => v + 'px';
        const FX = 0.5, FY = 0.4;
        const box = (k) => { const p = R && R[k]; if (!p) return null; const S = p.w * 1.6; const cx = p.x + p.w / 2, cy = p.y + p.h / 2; return { S, L: cx - FX * S, T: cy - FY * S, p }; };
        const cover = () => { const capH = R.W < 640 ? 170 : 120; const aw = R.W - 48, ah = R.H - 48 - capH; const S = Math.max(200, Math.min(aw / 0.96, ah / 0.66)); const L = 24 + (aw - 0.96 * S) / 2 - 0.04 * S; const T = 24 + (ah - 0.66 * S) / 2 - 0.12 * S; return { S, L, T }; };
        const mk = (k, ref, src) => { const b = box(k); const p = b && b.p; const d = k === 'a' ? '0ms' : '110ms';
          return { ref, src, open: () => this.openPill(k), expanded: s.ov === k && s.ovOpen, delay: s.pillsIn ? d : '0ms',
            clip: s.pillsIn ? 'inset(0 0% 0 0% round 999px)' : 'inset(0 50% 0 50% round 999px)',
            l: b ? px(b.L - p.x) : '0px', t: b ? px(b.T - p.y) : '0px', sc: 'scale(' + (b ? b.S / 1000 : 0.1) + ')' }; };
        const pb = s.ov ? box(s.ov) : null; const cb = R ? cover() : null;
        const ovImgTf = (pb && cb && !s.ovOpen) ? 'translate(' + (pb.L - cb.L) + 'px,' + (pb.T - cb.T) + 'px) scale(' + (pb.S / cb.S) + ')' : 'translate(0px,0px) scale(1)';
        const isA = s.ov === 'a';
        return {
          pillA: mk('a', this.pillARef, 'assets/img_hero_design_01.webp'), pillB: mk('b', this.pillBRef, 'assets/img_hero_dev_01.webp'),
          ovRef: this.ovRef, ovClose: this.ovClose, closePill: this.closePill,
          ovHidden: !s.ov, ovVis: s.ov ? 'visible' : 'hidden', ovClip: s.ov ? (s.ovClip || this.rectClip(s.ov)) : 'inset(50% round 0px)',
          ovAOp: isA ? 1 : 0, ovBOp: isA ? 0 : 1,
          ovAlt: isA ? 'Design view: a Figma-style frame with layout grid, spacing redlines, the JAS wordmark, type scale, shapes, icons and colour tokens' : 'Code view: James Albert Salva described as a JavaScript object with role, years, stack and availability',
          ovKicker: isA ? 'Design, the UI/UX side' : 'Engineering, the code side',
          ovTitle: isA ? 'Grids, spacing, type and shapes: how I set up a screen before it ships.' : 'Me, as an object: 8+ years of HTML, CSS and JavaScript.',
          ovBg: isA ? '#2443A8' : '#1B0D10', ovDot: isA ? '#6E8FF0' : '#F0545A', ovDotRadius: isA ? '50%' : '2px', ovTextOp: s.ovOpen ? 1 : 0,
          heroW: cb ? px(cb.S) : '100%', heroH: cb ? px(cb.S) : '100%', ovL: cb ? px(cb.L) : '0px', ovT: cb ? px(cb.T) : '0px', ovCanvasTf: ovImgTf + ' scale(' + (cb ? cb.S / 1000 : 1) + ')',
          ovEnd: (e) => { if (e.target === e.currentTarget && e.propertyName === 'clip-path' && s.ovClosing) { clearTimeout(this.ovT); this.finishClose(); } }
        };
      })(),
      heroLineWrap: s.w >= 640 ? 'nowrap' : 'normal',
      tabDisp: (s.w || 1200) < 640 ? 'grid' : 'flex', tabGap: (s.w || 1200) < 640 ? '0.5rem' : '0.25rem', tabRule: (s.w || 1200) < 640 ? '0' : '1px solid var(--on-ink-2)', tabUlSpan: (s.w || 1200) < 640 ? 'auto' : 'span 2',
      ...(() => { const st = this.props.aboutStats ?? 'bento', w = s.w || window.innerWidth; return { abBento: st === 'bento', abStrip: st === 'strip', abLedger: st === 'ledger', abEduSpan: w >= 760 ? 2 : 1, abEduWrap: w >= 1100 ? 'nowrap' : 'normal', abGpaGap: w >= 1100 ? '1.5rem' : '1rem', abBentoCols: w >= 760 ? 'repeat(4,minmax(0,1fr))' : 'minmax(0,1fr)', abLedgerCols: w >= 760 ? 'minmax(0,2fr) minmax(0,3fr)' : 'minmax(0,1fr)', abLedgerRule: w >= 760 ? '1px solid var(--line)' : '0', abLedgerPad: w >= 760 ? '2rem' : '0' }; })(),
      aboutCols: (s.w || window.innerWidth) >= 860 ? 'minmax(0,3fr) minmax(0,2fr)' : 'minmax(0,1fr)', ...this.resVals(s),
      abDesignBg: s.pov === 'dev' ? 'transparent' : 'var(--ink)', abDesignInk: s.pov === 'dev' ? 'var(--ink)' : 'var(--on-ink)', abDevBg: s.pov === 'dev' ? 'var(--ink)' : 'transparent', abDevInk: s.pov === 'dev' ? 'var(--on-ink)' : 'var(--ink)',
      coinSpin: 'rotateY(' + (s.coinDeg || 0) + 'deg)', coinLift: s.coinUp ? 'translateY(-14px) scale(1.06)' : 'translateY(0) scale(1)',
      sentinelRef: this.sentinelRef, hdrInner: this.hdrInner,
      hdrClip: s.pill ? 'inset(0 ' + s.pillInset + 'px 0 ' + s.pillInset + 'px round 999px)' : 'inset(0 0 0 0 round 0px)',
      hdrTf: s.pill ? 'translateY(5px)' : 'translateY(0)', hdrShadow: s.pill ? 'drop-shadow(0 10px 24px rgba(20,36,58,0.16))' : 'drop-shadow(0 0 0 rgba(20,36,58,0))',
      hdrLine: s.pill ? 'transparent' : 'var(--line)', logoTf: s.pill ? 'translateX(26px)' : 'translateX(0)', ctaTf: s.pill ? 'translateX(-26px)' : 'translateX(0)',
      heroRef: this.heroRef, pCanvas: this.pCanvas, meshHost: this.meshHost, meshCanvas: this.meshCanvas, videoRef: this.videoRef, progRef: this.progRef,
      posterSrc: this.props.heroPoster || undefined, webmSrc: this.props.heroWebm || undefined, mp4Src: this.props.heroMp4 || undefined,
      showVideo: !this.reduce && !s.vidFailed && !!(this.props.heroWebm || this.props.heroMp4), showPoster: (this.reduce || s.vidFailed || !(this.props.heroWebm || this.props.heroMp4)) && !s.posterFailed && !!this.props.heroPoster,
      vidPaused: s.vidPaused, vidLabel: s.vidPaused ? 'Play background video' : 'Pause background video', vidIcon: s.vidPaused ? '\u25B6' : 'II',
      toggleVideo: () => { const v = this.videoRef.current; if (!v) return; if (v.paused) { this.setState({ userPaused: false }); const p = v.play(); if (p && p.catch) p.catch(() => {}); } else { this.setState({ userPaused: true }); v.pause(); } },
      heroMedia: (() => {
        const ce = React.createElement;
        const webm = this.props.heroWebm, mp4 = this.props.heroMp4, poster = this.props.heroPoster;
        const fill = { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' };
        if (!this.reduce && !s.vidFailed && (webm || mp4)) {
          return ce('video', { key: 'v', ref: this.videoRef, muted: true, loop: true, playsInline: true, preload: 'metadata', poster: poster || undefined, 'aria-hidden': 'true', tabIndex: -1, style: fill,
            onTimeUpdate: (e) => { const v = e.currentTarget; if (v.duration && this.progRef.current) this.progRef.current.style.transform = 'scaleX(' + (v.currentTime / v.duration) + ')'; },
            onPlay: () => this.setState({ vidPaused: false }), onPause: () => this.setState({ vidPaused: true }),
            onError: () => this.setState({ vidFailed: true }) },
            webm ? ce('source', { src: webm, type: 'video/webm' }) : null,
            mp4 ? ce('source', { src: mp4, type: 'video/mp4', onError: () => this.setState({ vidFailed: true }) }) : null);
        }
        if (poster && !s.posterFailed) return ce('img', { key: 'p', src: poster, alt: '', 'aria-hidden': 'true', style: fill, onError: () => this.setState({ posterFailed: true }) });
        return null;
      })(),
      onVidTime: (e) => { const v = e.currentTarget; if (v.duration && this.progRef.current) this.progRef.current.style.transform = 'scaleX(' + (v.currentTime / v.duration) + ')'; },
      onVidPlay: () => this.setState({ vidPaused: false }), onVidPause: () => this.setState({ vidPaused: true }),
      onVidReady: () => {},
      onVidError: () => { const v = this.videoRef.current; if (v && v.networkState === 3) this.setState({ vidFailed: true }); else if (!v) this.setState({ vidFailed: true }); },
      onPosterError: () => this.setState({ posterFailed: true }),
      onHeroMove: (e) => { if (this.reduce) return; const r = e.currentTarget.getBoundingClientRect(); this.mx = (e.clientX - r.left) / r.width - 0.5; this.my = (e.clientY - r.top) / r.height - 0.5; this.onFx(); },
      onHeroLeave: () => { this.mx = 0; this.my = 0; this.onFx(); },
      deckNum: String(s.deck + 1).padStart(2, '0'), deckNumShift: 'translateX(' + (s.deck * 6) + 'px)', deckCount: (s.deck + 1) + ' / ' + n,
      deckText: PROJECTS.map((p, i) => { const on = i === s.deck; const dir = ((i - s.deck + n) % n) <= n / 2 ? 1 : -1; return { ...card(p), num: String(i + 1).padStart(2, '0'), hidden: !on, inert: on ? undefined : '', op: on ? 1 : 0, tf: on ? 'translateY(0)' : 'translateY(' + (12 * dir) + 'px)', numTf: on ? 'translateY(0)' : 'translateY(' + (24 * dir) + 'px)', vis: on ? 'visible' : 'hidden', visDelay: on ? '0s' : '450ms', cta: 'View project' }; }),
      deckCards,
      deckDots: PROJECTS.map((p, i) => ({ label: 'Show project ' + (i + 1) + ', ' + p.title, title: p.title, on: i === s.deck, w: i === s.deck ? '24px' : '8px', bg: i === s.deck ? 'var(--ink)' : 'var(--line-strong)', pick: () => this.setDeck(i) })),
      deckCur: String(s.deck + 1).padStart(2, '0'), deckTotal: String(n).padStart(2, '0'), deckNextLabel: 'Next: ' + PROJECTS[(s.deck + 1) % n].client,
      deckPrev: () => this.setDeck(s.deck - 1), deckNext: () => this.setDeck(s.deck + 1),
      onDeckKey: (e) => { if (e.target.tagName === 'INPUT') return; if (e.key === 'ArrowRight') { e.preventDefault(); this.setDeck(s.deck + 1); } else if (e.key === 'ArrowLeft') { e.preventDefault(); this.setDeck(s.deck - 1); } },
      onDeckDown: (e) => { this.px = e.clientX; },
      onDeckUp: (e) => { if (this.px == null) return; const dx = e.clientX - this.px; this.px = null; if (Math.abs(dx) > 40) { this.swiped = true; this.setDeck(s.deck + (dx < 0 ? 1 : -1)); } },
      marqueeA: [...allTools.slice(0, half), ...allTools.slice(0, half)], marqueeB: [...allTools.slice(half), ...allTools.slice(half)],
      tabs: STACK.map((t, i) => ({ name: t.name, num: String(i + 1).padStart(2, '0'), tabId: 'tab-' + i, on: i === s.tab, tabindex: i === s.tab ? 0 : -1, op: i === s.tab || (s.w || 1200) < 640 ? 1 : 0.6, bar: i === s.tab ? 'var(--accent-on-ink)' : 'transparent', ...((s.w || 1200) < 640 ? { pad: '0.75rem 0.875rem', align: 'center', bg: i === s.tab ? 'var(--on-ink)' : 'transparent', fg: i === s.tab ? 'var(--ink)' : 'var(--on-ink)', numFg: i === s.tab ? 'var(--accent-ink)' : 'var(--accent-on-ink)', border: '1px solid ' + (i === s.tab ? 'var(--on-ink)' : 'var(--on-ink-2)'), radius: '10px', bb: '1px solid ' + (i === s.tab ? 'var(--on-ink)' : 'var(--on-ink-2)'), mb: '0' } : { pad: '0 1.125rem', align: 'baseline', bg: 'transparent', fg: 'var(--on-ink)', numFg: 'var(--accent-on-ink)', border: '0', radius: '0', bb: '3px solid ' + (i === s.tab ? 'var(--accent-on-ink)' : 'transparent'), mb: '-1px' }), pick: () => this.setTab(i) })),
      activeTabId: 'tab-' + s.tab,
      onTabKey: (e) => { const k = e.key; if (k !== 'ArrowRight' && k !== 'ArrowLeft') return; e.preventDefault(); const i = (s.tab + (k === 'ArrowRight' ? 1 : -1) + STACK.length) % STACK.length; this.setTab(i); setTimeout(() => { const b = document.getElementById('tab-' + i); b && b.focus(); }, 0); },
      tabLine: STACK_LINES[s.tab], tabItems, tabOp: s.tabIn ? 1 : 0, tabTf: s.tabIn ? 'none' : 'translateY(14px)',
      tlRef: this.tlRef, tlFill: this.tlFill,
      wide, narrow: !wide, menu: s.menu, palette: s.palette, display: s.display, notice: s.notice, project: !!pj, pj: pj ? card(pj) : {},
      shortcut: isMac ? '\u2318K' : 'Ctrl K',
      contactCur: s.active === 'contact' ? 'true' : undefined, contactFg: s.active === 'contact' ? 'var(--accent-ink)' : 'var(--ink)', contactBg: s.active === 'contact' ? 'rgba(65,105,225,0.10)' : 'transparent',
      navItems: NAV.map(([id, label]) => ({ href: '#' + id, label, d: NAV_ICONS[id], on: s.active === id, off: s.active !== id, cur: s.active === id ? 'true' : undefined, fg: s.active === id ? 'var(--accent-ink)' : 'var(--ink)', bg: s.active === id ? 'rgba(65,105,225,0.10)' : 'transparent' })),
      avail: AVAIL[this.props.availability] || AVAIL.open,
      filters: fdefs.map(([k, l]) => ({ label: l, on: s.filter === k, count: k === 'all' ? PROJECTS.length : PROJECTS.filter(p => p.cats.includes(k)).length, pick: () => this.setState({ filter: k }) })),
      workList: list.map(card),
      expertise: EXPERTISE.map((e, i) => ({ ...e, num: String(i + 1).padStart(2, '0') })),
      experience: EXPERIENCE.map((x, i) => { const open = s.xpOpen === i; const on = i < s.xpReached; return { ...x, open, panelId: 'xp-' + i, rows: open ? '1fr' : '0fr', toggleLabel: open ? 'Less' : 'More', dotBorder: on ? 'var(--accent)' : 'var(--line-strong)', dotBg: on ? 'var(--accent)' : 'var(--bg)', dotScale: on ? 'scale(1)' : 'scale(0.75)', toggle: () => this.setState({ xpOpen: open ? -1 : i }) }; }), certs: CERTS, resources: RESOURCES,
      form: s.form, errors: s.errors, hasErrors: errKeys.length > 0, errorCount: errKeys.length === 1 ? '1 field' : errKeys.length + ' fields',
      invalid: { name: !!s.errors.name, email: !!s.errors.email, message: !!s.errors.message },
      topics: TOPICS.map(([key, label]) => ({ key, label, on: s.form.topic === key, pick: () => this.setState(st => ({ form: { ...st.form, topic: key } })) })),
      onName: this.field('name'), onEmail: this.field('email'), onMessage: this.field('message'),
      submit: this.submit, sending: s.status === 'sending', sent: s.status === 'sent', notSent: s.status !== 'sent',
      submitLabel: s.status === 'sending' ? 'Preparing\u2026' : 'Send message',
      resetForm: () => this.setState({ status: 'idle', form: blankForm(), errors: {} }),
      copyEmail: this.copyEmail, copyLabel: s.copied ? 'Copied' : 'Copy',
      ctTime: s.ctTime || '', ctCopied: s.copied ? 'Email copied to clipboard.' : '',
      magRef: this.magRef,
      magMove: (e) => { const el = this.magRef.current; if (!el || this.reduce) return; const r = el.getBoundingClientRect(); const x = e.clientX - (r.left + r.width / 2), y = e.clientY - (r.top + r.height / 2); el.style.transform = 'translate(' + (x * 0.3).toFixed(1) + 'px,' + (y * 0.3).toFixed(1) + 'px)'; },
      magLeave: () => { const el = this.magRef.current; if (el) el.style.transform = ''; },
      ctLeave: () => this.setState({ ctHover: -1 }), ctIconCol: (s.w || window.innerWidth) >= 640 ? '56px' : '36px',
      ctRows: [
        { isMail: true, label: 'Email', value: 'albertsalva360@gmail.com', href: 'mailto:albertsalva360@gmail.com', copy: true },
        { isPhone: true, label: 'Phone', value: '+63 912 173 3189', href: 'tel:+639121733189', alt: '+63 915 097 9993', altHref: 'tel:+639150979993' },
        { isLi: true, label: 'LinkedIn', value: 'James Albert Salva', href: 'https://www.linkedin.com/in/james-albert-salva-b05164158/', ext: true }
      ].map((r, k) => { const on = s.ctHover === k, lg = (s.w || window.innerWidth) >= 1024; return { ...r, copySide: false, copyInline: !!r.copy, showArrow: !r.copy, wrap: 'wrap', ws: r.alt || r.copy ? 'nowrap' : 'normal', fs: r.copy ? 'clamp(0.9375rem,1.5vw,1.4375rem)' : r.alt && lg ? 'clamp(1.125rem,1.55vw,1.4375rem)' : 'clamp(1.25rem,2.2vw,1.625rem)', target: r.ext ? '_blank' : undefined, rel: r.ext ? 'noopener' : undefined, sr: r.ext ? ' (opens in a new tab)' : '', sweep: on ? 'scaleX(1)' : 'scaleX(0)', color: on ? 'var(--ink)' : 'var(--on-ink)', shift: on ? 'translateX(0.75rem)' : 'none', arrowTf: on ? 'rotate(45deg)' : 'none', dotBg: on ? 'var(--ink)' : 'transparent', dotFg: on ? 'var(--on-ink)' : 'var(--on-ink-2)', enter: () => this.state.ctHover !== k && this.setState({ ctHover: k }) }; }), liveMsg: s.liveMsg,
      q: s.q, results: results.map((r, i) => ({ ...r, id: 'pal-' + i, active: i === pi, idle: i !== pi, run: () => r.act(), hover: () => this.setState({ pi: i }) })),
      palEmpty: s.palette && results.length === 0, activeId: results.length ? 'pal-' + pi : undefined,
      onQ: (e) => this.setState({ q: e.target.value, pi: 0 }),
      onPalKey: (e) => {
        if (e.key === 'ArrowDown') { e.preventDefault(); this.setState({ pi: Math.min(pi + 1, results.length - 1) }); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); this.setState({ pi: Math.max(pi - 1, 0) }); }
        else if (e.key === 'Enter' && results[pi]) { e.preventDefault(); results[pi].act(); }
      },
      sizeOpts: [['m', 'Default'], ['l', 'Large'], ['xl', 'Larger']].map(([k, l], i) => ({ label: l, on: s.size === k, ref: i === 0 ? this.sizeFirst : undefined, pick: () => this.setState({ size: k }, () => this.applyDisplay()) })),
      contrastOpts: [['std', 'Standard'], ['hc', 'High contrast']].map(([k, l]) => ({ label: l, on: s.contrast === k, pick: () => this.setState({ contrast: k }, () => this.applyDisplay()) })),
      openPalette: this.openPalette, closeAll: this.closeAll,
      openMenu: () => this.open('menu', this.menuClose),
      openDisplay: () => this.open('display', this.sizeFirst),
      openResume: () => this.open('notice', this.noticeFirst),
      skipToMain: (e) => { e.preventDefault(); this.jump('work'); },
      waterHost: this.waterHost, waterCanvas: this.waterCanvas,
      mainRef: this.mainRef, paletteInput: this.paletteInput, menuClose: this.menuClose, noticeFirst: this.noticeFirst, projClose: this.projClose
    };
  }
}
