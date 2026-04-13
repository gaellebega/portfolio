export type Lang = 'en' | 'fr' | 'rw' | 'tr'

export interface Translations {
  nav: {
    home: string; about: string; projects: string; contact: string; hire: string
  }
  hero: {
    badge: string; greeting: string; name: string
    roles: string[]; desc: string
    btn_projects: string; btn_contact: string
    stats: { projects: string; exp: string; clients: string; satisfaction: string }
    stats_labels: { projects: string; exp: string; clients: string; satisfaction: string }
  }
  services: {
    label: string; title: string; title_accent: string; desc: string
    items: { icon: string; title: string; desc: string }[]
  }
  about: {
    label: string; title: string; title_accent: string; desc: string
    btn_hire: string; btn_cv: string
    values_label: string; values_title: string; values_accent: string
    values: { icon: string; title: string; desc: string }[]
    skills_label: string; skills_title: string; skills_accent: string
    skills_desc: string
    exp_label: string; exp_title: string; exp_accent: string
    edu_label: string; edu_title: string; edu_accent: string
    experience: { date: string; role: string; company: string; desc: string }[]
    education: { date: string; role: string; company: string; desc: string }[]
  }
  projects: {
    label: string; title: string; title_accent: string; desc: string
    filter_all: string; filter_fullstack: string; filter_frontend: string
    filter_backend: string; filter_ai: string; filter_design: string
    btn_demo: string; btn_github: string; btn_docs: string
    cta_label: string; cta_title: string; cta_accent: string; cta_desc: string; cta_btn: string
  }
  contact: {
    label: string; title: string; title_accent: string; desc: string
    info_title: string; info_desc: string
    email_label: string; email_val: string
    location_label: string; location_val: string
    response_label: string; response_val: string
    avail_label: string; avail_val: string
    form_label: string; form_title: string
    fname: string; fname_ph: string
    lname: string; lname_ph: string
    email: string; email_ph: string
    subject: string; subject_ph: string
    subject_opts: string[]
    budget: string; budget_ph: string
    budget_opts: string[]
    message: string; message_ph: string
    form_note: string; btn_send: string; btn_sending: string
    success: string
    faq_label: string; faq_title: string; faq_accent: string
    faqs: { q: string; a: string }[]
    social_label: string
  }
  footer: {
    rights: string; built: string
    links: { home: string; about: string; projects: string; contact: string }
  }
}

/* ============================================================
   ENGLISH
   ============================================================ */
const en: Translations = {
  nav: {
    home: 'Home', about: 'About', projects: 'Projects',
    contact: 'Contact', hire: 'Hire Me',
  },
  hero: {
    badge: 'Available for work',
    greeting: "Hi, I'm",
    name: 'Your Name',
    roles: ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver', 'Creative Coder'],
    desc: 'I design and build beautiful digital products that live on the internet — crafting experiences that are fast, accessible, and genuinely delightful.',
    btn_projects: 'View Projects',
    btn_contact: 'Contact Me',
    stats: { projects: '25+', exp: '3+', clients: '15+', satisfaction: '100%' },
    stats_labels: { projects: 'Projects Done', exp: 'Years Exp.', clients: 'Happy Clients', satisfaction: 'Satisfaction' },
  },
  services: {
    label: 'What I Do', title: 'Services I', title_accent: 'Offer',
    desc: 'From concept to deployment — I build things that work beautifully on every device.',
    items: [
      { icon: '💻', title: 'Frontend Development', desc: 'Pixel-perfect interfaces with React, Next.js and TailwindCSS. Fast, accessible, and responsive.' },
      { icon: '⚙️', title: 'Backend Development', desc: 'Scalable APIs and server-side logic with Node.js and Python.' },
      { icon: '🎨', title: 'UI/UX Design', desc: 'Clean, intuitive designs built in Figma. I translate user needs into elegant visual experiences.' },
      { icon: '☁️', title: 'Cloud & DevOps', desc: 'CI/CD pipelines, and cloud deployments on Vercel and Netlify.' },
    ],
  },
  about: {
    label: 'Who I Am', title: 'Crafting code &', title_accent: 'Design that lasts',
    desc: "I'm a full-stack developer and designer with a passion for building things that solve real problems. I believe great software is equal parts engineering and empathy — understanding people and then using technology to make their lives better.",
    btn_hire: 'Hire Me', btn_cv: 'Download CV',
    values_label: 'My Principles', values_title: 'Values I', values_accent: 'Live By',
    values: [
      { icon: '⚡', title: 'Speed', desc: 'Performance is a feature. I build fast, optimised experiences from day one.' },
      { icon: '🎯', title: 'Precision', desc: 'Attention to detail in every pixel, every function, every commit.' },
      { icon: '♿', title: 'Accessibility', desc: 'I build for everyone — inclusive design is non-negotiable.' },
      { icon: '🔄', title: 'Iteration', desc: 'Ship, measure, learn, repeat. I embrace continuous improvement.' },
      { icon: '🤝', title: 'Collaboration', desc: 'Great products are built by great teams. I love working with others.' },
      { icon: '📚', title: 'Learning', desc: 'Technology moves fast. I stay curious and keep growing every day.' },
    ],
    skills_label: 'Expertise', skills_title: 'My', skills_accent: 'Skills',
    skills_desc: 'Technologies and tools I use to bring ideas to life.',
    exp_label: 'Career', exp_title: 'Work', exp_accent: 'Experience',
    edu_label: 'Academic', edu_title: 'Education &', edu_accent: 'Certs',
    experience: [
      { date: '2023 — Present', role: 'Senior Frontend Developer', company: 'TechCorp Inc.', desc: 'Led the rebuild of the main product dashboard, improving performance by 60%. Mentored a team of 4 junior devs.' },
      { date: '2021 — 2023', role: 'Full Stack Developer', company: 'StartupXYZ', desc: 'Built the entire frontend from scratch using React + TypeScript. Designed a Node.js REST API serving 50k+ daily users.' },
      { date: '2020 — 2021', role: 'Junior Developer', company: 'Digital Agency Co.', desc: 'Delivered responsive websites for 20+ clients. Worked closely with designers to implement pixel-perfect interfaces.' },
    ],
    education: [
      { date: '2016 — 2020', role: 'BSc Computer Science', company: 'University of Example', desc: 'First-class honours. Specialised in software engineering and human-computer interaction.' },
      { date: '2022', role: 'AWS Solutions Architect', company: 'Amazon Web Services', desc: 'Associate-level certification covering cloud infrastructure and security best practices.' },
      { date: '2021', role: 'Google UX Design Certificate', company: 'Google / Coursera', desc: '7-course professional certificate covering design thinking, wireframing, and prototyping.' },
    ],
  },
  projects: {
    label: 'My Work', title: "Things I've", title_accent: 'Built',
    desc: 'A curated collection of my projects — from production apps to side experiments. Each one taught me something new.',
    filter_all: 'All', filter_fullstack: 'Full Stack', filter_frontend: 'Frontend',
    filter_backend: 'Backend', filter_ai: 'AI / ML', filter_design: 'Design',
    btn_demo: 'Live Demo', btn_github: 'GitHub', btn_docs: 'Docs',
    cta_label: 'Open Source', cta_title: 'Want to', cta_accent: 'collaborate?',
    cta_desc: "I'm always looking for interesting open-source projects to contribute to or collaborate on.",
    cta_btn: 'Get in touch →',
  },
  contact: {
    label: 'Get In Touch', title: "Let's", title_accent: 'Talk',
    desc: "Whether you have a project in mind, want to hire me, or just want to say hi — my inbox is always open.",
    info_title: 'Contact Information', info_desc: "Fill out the form and I'll get back to you within 24 hours. Or reach me directly:",
    email_label: 'Email', email_val: 'hello@yourname.dev',
    location_label: 'Location', location_val: 'London, UK (Remote-friendly)',
    response_label: 'Response Time', response_val: 'Within 24 hours',
    avail_label: 'Availability', avail_val: 'Open to opportunities',
    form_label: 'Send a Message', form_title: "Let's make something great together",
    fname: 'First Name', fname_ph: 'John',
    lname: 'Last Name', lname_ph: 'Doe',
    email: 'Email Address', email_ph: 'john@example.com',
    subject: 'Subject', subject_ph: 'Select a topic…',
    subject_opts: ['Project Inquiry', 'Freelance Work', 'Job Opportunity', 'Collaboration', 'Just saying hi!'],
    budget: 'Budget (optional)', budget_ph: 'Select a range…',
    budget_opts: ['Under $1,000', '$1,000 – $5,000', '$5,000 – $15,000', '$15,000+', 'Not sure yet'],
    message: 'Message', message_ph: 'Tell me about your project, idea, or just say hello…',
    form_note: "I'll reply within 24 hours", btn_send: 'Send Message', btn_sending: 'Sending…',
    success: '✓ Message sent! I\'ll be in touch soon.',
    faq_label: 'FAQ', faq_title: 'Common', faq_accent: 'Questions',
    faqs: [
      { q: 'Are you available for freelance?', a: "Yes! I'm currently open to freelance projects, contract work, and full-time opportunities." },
      { q: "What's your typical turnaround?", a: 'Most projects range from 2–8 weeks. I give a clear timeline estimate after our first call.' },
      { q: 'Do you work remotely?', a: "Absolutely. I've been working remotely with international clients for 3+ years." },
      { q: 'What if I have a small budget?', a: "Let's still talk. I occasionally take on smaller projects that genuinely interest me." },
    ],
    social_label: 'Find me on',
  },
  footer: {
    rights: '© 2024 Your Name. All rights reserved.',
    built: 'Built with ♥ and lots of coffee.',
    links: { home: 'Home', about: 'About', projects: 'Projects', contact: 'Contact' },
  },
}

/* ============================================================
   FRENCH
   ============================================================ */
const fr: Translations = {
  nav: {
    home: 'Accueil', about: 'À propos', projects: 'Projets',
    contact: 'Contact', hire: 'M\'embaucher',
  },
  hero: {
    badge: 'Disponible pour travailler',
    greeting: 'Bonjour, je suis',
    name: 'Votre Nom',
    roles: ['Développeur Full Stack', 'Designer UI/UX', 'Résolveur de problèmes', 'Codeur créatif'],
    desc: 'Je conçois et construis de beaux produits numériques — créant des expériences rapides, accessibles et véritablement agréables.',
    btn_projects: 'Voir les projets',
    btn_contact: 'Me contacter',
    stats: { projects: '25+', exp: '3+', clients: '15+', satisfaction: '100%' },
    stats_labels: { projects: 'Projets réalisés', exp: 'Années exp.', clients: 'Clients satisfaits', satisfaction: 'Satisfaction' },
  },
  services: {
    label: 'Ce que je fais', title: 'Services que', title_accent: 'j\'offre',
    desc: 'Du concept au déploiement — je construis des choses qui fonctionnent parfaitement sur chaque appareil.',
    items: [
      { icon: '💻', title: 'Développement Frontend', desc: 'Interfaces pixel-parfait avec React, Next.js et TailwindCSS. Rapides, accessibles et responsives.' },
      { icon: '⚙️', title: 'Développement Backend', desc: 'APIs évolutives avec Node.js et Python.' },
      { icon: '🎨', title: 'Design UI/UX', desc: 'Designs propres et intuitifs créés dans Figma. Je transforme les besoins en expériences élégantes.' },
      { icon: '☁️', title: 'Cloud & DevOps', desc: 'Pipelines CI/CD et déploiements cloud sur Vercel et Netlify.' },
    ],
  },
  about: {
    label: 'Qui je suis', title: 'Du code &', title_accent: 'Design qui dure',
    desc: "Je suis un développeur full-stack et designer passionné par la création de solutions à des problèmes réels. Je crois que le bon logiciel est à parts égales ingénierie et empathie.",
    btn_hire: 'M\'embaucher', btn_cv: 'Télécharger CV',
    values_label: 'Mes principes', values_title: 'Valeurs que', values_accent: 'je vis',
    values: [
      { icon: '⚡', title: 'Vitesse', desc: 'La performance est une fonctionnalité. Je construis des expériences rapides dès le premier jour.' },
      { icon: '🎯', title: 'Précision', desc: 'Attention aux détails dans chaque pixel, chaque fonction, chaque commit.' },
      { icon: '♿', title: 'Accessibilité', desc: 'Je construis pour tous — le design inclusif est non négociable.' },
      { icon: '🔄', title: 'Itération', desc: 'Livrer, mesurer, apprendre, répéter. J\'embrasse l\'amélioration continue.' },
      { icon: '🤝', title: 'Collaboration', desc: 'Les grands produits sont construits par de grandes équipes. J\'aime travailler avec les autres.' },
      { icon: '📚', title: 'Apprentissage', desc: 'La technologie évolue vite. Je reste curieux et je grandis chaque jour.' },
    ],
    skills_label: 'Expertise', skills_title: 'Mes', skills_accent: 'Compétences',
    skills_desc: 'Technologies et outils que j\'utilise pour donner vie aux idées.',
    exp_label: 'Carrière', exp_title: 'Expérience', exp_accent: 'professionnelle',
    edu_label: 'Académique', edu_title: 'Formation &', edu_accent: 'Certifications',
    experience: [
      { date: '2023 — Présent', role: 'Développeur Frontend Senior', company: 'TechCorp Inc.', desc: 'A dirigé la refonte du tableau de bord principal, améliorant les performances de 60%. Mentorat d\'une équipe de 4 développeurs juniors.' },
      { date: '2021 — 2023', role: 'Développeur Full Stack', company: 'StartupXYZ', desc: 'A construit tout le frontend avec React + TypeScript. Conçu une API REST Node.js servant 50k+ utilisateurs quotidiens.' },
      { date: '2020 — 2021', role: 'Développeur Junior', company: 'Digital Agency Co.', desc: 'Livré des sites web responsives pour 20+ clients. Travail étroit avec les designers pour des interfaces pixel-parfait.' },
    ],
    education: [
      { date: '2016 — 2020', role: 'Licence Informatique', company: 'Université Exemple', desc: 'Mention très bien. Spécialisation en génie logiciel et interaction homme-machine.' },
      { date: '2022', role: 'AWS Solutions Architect', company: 'Amazon Web Services', desc: 'Certification niveau associé couvrant l\'infrastructure cloud et les meilleures pratiques de sécurité.' },
      { date: '2021', role: 'Certificat Google UX Design', company: 'Google / Coursera', desc: 'Certificat professionnel de 7 cours couvrant la pensée design, le wireframing et le prototypage.' },
    ],
  },
  projects: {
    label: 'Mon travail', title: 'Ce que j\'ai', title_accent: 'construit',
    desc: 'Une collection soignée de mes projets — des applications en production aux expériences parallèles.',
    filter_all: 'Tout', filter_fullstack: 'Full Stack', filter_frontend: 'Frontend',
    filter_backend: 'Backend', filter_ai: 'IA / ML', filter_design: 'Design',
    btn_demo: 'Démo live', btn_github: 'GitHub', btn_docs: 'Docs',
    cta_label: 'Open Source', cta_title: 'Envie de', cta_accent: 'collaborer ?',
    cta_desc: 'Je cherche toujours des projets open-source intéressants auxquels contribuer ou collaborer.',
    cta_btn: 'Prendre contact →',
  },
  contact: {
    label: 'Me contacter', title: 'Discutons', title_accent: 'ensemble',
    desc: 'Que vous ayez un projet en tête, que vous souhaitiez m\'embaucher ou simplement dire bonjour — ma boîte mail est toujours ouverte.',
    info_title: 'Informations de contact', info_desc: 'Remplissez le formulaire et je vous répondrai dans les 24 heures. Ou contactez-moi directement :',
    email_label: 'E-mail', email_val: 'hello@yourname.dev',
    location_label: 'Localisation', location_val: 'Londres, RU (télétravail possible)',
    response_label: 'Temps de réponse', response_val: 'Dans les 24 heures',
    avail_label: 'Disponibilité', avail_val: 'Ouvert aux opportunités',
    form_label: 'Envoyer un message', form_title: 'Créons quelque chose de grand ensemble',
    fname: 'Prénom', fname_ph: 'Jean',
    lname: 'Nom', lname_ph: 'Dupont',
    email: 'Adresse e-mail', email_ph: 'jean@exemple.com',
    subject: 'Sujet', subject_ph: 'Sélectionnez un sujet…',
    subject_opts: ['Demande de projet', 'Travail en freelance', 'Opportunité d\'emploi', 'Collaboration', 'Juste pour dire bonjour !'],
    budget: 'Budget (optionnel)', budget_ph: 'Sélectionnez une fourchette…',
    budget_opts: ['Moins de 1 000 $', '1 000 $ – 5 000 $', '5 000 $ – 15 000 $', '15 000 $+', 'Pas encore sûr'],
    message: 'Message', message_ph: 'Parlez-moi de votre projet, votre idée, ou dites simplement bonjour…',
    form_note: 'Je répondrai dans les 24 heures', btn_send: 'Envoyer le message', btn_sending: 'Envoi en cours…',
    success: '✓ Message envoyé ! Je vous contacterai bientôt.',
    faq_label: 'FAQ', faq_title: 'Questions', faq_accent: 'fréquentes',
    faqs: [
      { q: 'Êtes-vous disponible pour du freelance ?', a: 'Oui ! Je suis actuellement ouvert aux projets freelance, aux contrats et aux opportunités à temps plein.' },
      { q: 'Quel est votre délai habituel ?', a: 'La plupart des projets durent entre 2 et 8 semaines. Je donne une estimation claire après notre premier appel.' },
      { q: 'Travaillez-vous à distance ?', a: 'Absolument. Je travaille à distance avec des clients internationaux depuis plus de 3 ans.' },
      { q: 'Et si j\'ai un petit budget ?', a: 'Discutons quand même. Je prends parfois des projets plus petits qui m\'intéressent vraiment.' },
    ],
    social_label: 'Retrouvez-moi sur',
  },
  footer: {
    rights: '© 2024 Votre Nom. Tous droits réservés.',
    built: 'Fait avec ♥ et beaucoup de café.',
    links: { home: 'Accueil', about: 'À propos', projects: 'Projets', contact: 'Contact' },
  },
}

/* ============================================================
   KINYARWANDA 🇷🇼
   ============================================================ */
const rw: Translations = {
  nav: {
    home: 'Ahabanza', about: 'Ibyanjye', projects: 'Ibikorwa',
    contact: 'Twandikire', hire: 'Nkore Akazi',
  },
  hero: {
    badge: 'Ndashaka akazi',
    greeting: 'Muraho, nitwa',
    name: 'Izina Ryawe',
    roles: ['Umuhanga mu Ikoranabuhanga', 'Inzobere mu Ishusho', 'Ukunganira Ibibazo', 'Umuhanga Worora'],
    desc: 'Nishushaura kandi nubaka ibicuruzwa by\'ikoranabuhanga bisanzwe kuri interineti — nzana uburambe bwihuse, bwumvikana, kandi bushimishije.',
    btn_projects: 'Reba Ibikorwa',
    btn_contact: 'Twandikire',
    stats: { projects: '25+', exp: '3+', clients: '15+', satisfaction: '100%' },
    stats_labels: { projects: 'Ibikorwa byarangiye', exp: 'Imyaka y\'uburambe', clients: 'Abakiriya bashimishijwe', satisfaction: 'Kwishimwa' },
  },
  services: {
    label: 'Icyo nkora', title: 'Serivisi', title_accent: 'Ntanga',
    desc: 'Kuva ku bwazo kugeza ku kufikishwa — nubaka ibintu bikora neza kuri buri gikoresho.',
    items: [
      { icon: '💻', title: 'Guteza Imbere Frontend', desc: 'Ibibaho bikundwa na React, Next.js na TailwindCSS. Byihuse, byumvikana, kandi bisubiza.' },
      { icon: '⚙️', title: 'Guteza Imbere Backend', desc: 'API zitera imbere na Node.js na Python.' },
      { icon: '🎨', title: 'Gushushanya UI/UX', desc: 'Imishusho isukuye muri Figma. Nsobanura ibisabwa by\'abakoresha mu mashusho meza.' },
      { icon: '☁️', title: 'Igicu & DevOps', desc: 'Inzira za CI/CD no kohereza kuri Vercel na Netlify.' },
    ],
  },
  about: {
    label: 'Uwo mfitiye', title: 'Kode &', title_accent: 'Ishusho iramara',
    desc: "Ndi umuhanga mu guteza imbere no gushushanya n'ubukungu bwo gukora ibintu bikemura ibibazo by'ukuri. Nkora ikoranabuhanga nk'uburyo bwo kunganira abantu.",
    btn_hire: 'Nkore Akazi', btn_cv: 'Kurura CV',
    values_label: 'Imigenzo Yanjye', values_title: 'Ingingo', values_accent: 'nkurikirana',
    values: [
      { icon: '⚡', title: 'Ubwihuse', desc: 'Imikorere ni ingirakamaro. Nubaka uburambe bwihuse kuva ku ntangiriro.' },
      { icon: '🎯', title: 'Ubunyamwitonde', desc: 'Kwita ku bisobanuro buri pixel, buri musingi, buri commit.' },
      { icon: '♿', title: 'Uburenganzira bw\'Ubumuntu', desc: 'Nubakira bose — ishusho y\'ubumuntu yose si bya bukenera.' },
      { icon: '🔄', title: 'Kongereza', desc: 'Ohereza, genzura, iga, subiramo. Nemera guteza imbere burundu.' },
      { icon: '🤝', title: 'Gukorana', desc: 'Ibicuruzwa bidasanzwe byubakwa n\'itsinda ridasanzwe. Nkunda gukorana n\'abandi.' },
      { icon: '📚', title: 'Kwiga', desc: 'Ikoranabuhanga rigenda vuba. Nkomeza gutuza no gutera imbere buri munsi.' },
    ],
    skills_label: 'Ubunararibonye', skills_title: 'Ubumenyi', skills_accent: 'Bwanjye',
    skills_desc: 'Ikoranabuhanga n\'ibikoresho mbikoresha gutera imbere ibitekerezo.',
    exp_label: 'Akazi', exp_title: 'Uburambe', exp_accent: 'bw\'Akazi',
    edu_label: 'Uburezi', edu_title: 'Amashuli &', edu_accent: 'Impamyabumenyi',
    experience: [
      { date: '2023 — Ubu', role: 'Umuhanga Mukuru wa Frontend', company: 'TechCorp Inc.', desc: 'Yarongoye gusanura ikibaho cy\'ibicuruzwa nyamukuru, iterambere ry\'imikorere ya 60%. Yigishije itsinda ry\'abashaririye 4.' },
      { date: '2021 — 2023', role: 'Umuhanga Warangira mu Guteza Imbere', company: 'StartupXYZ', desc: 'Yubatse frontend yose na React + TypeScript. Yashushanyije API ya Node.js isaba abakiriya 50k+ buri munsi.' },
      { date: '2020 — 2021', role: 'Umuhanga Mushya', company: 'Digital Agency Co.', desc: 'Yahaye abakiriya 20+ urubuga rusubiza. Yakoranye n\'abashushanya kugirango ahindure ibibaho neza.' },
    ],
    education: [
      { date: '2016 — 2020', role: 'Lisansi mu Ikoranabuhanga', company: 'Kaminuza y\'Urugero', desc: 'Impamyabumenyi y\'icyiciro cya mbere. Ubunararibonye mu injyanama ya porogiram.' },
      { date: '2022', role: 'AWS Solutions Architect', company: 'Amazon Web Services', desc: 'Impamyabumenyi ireba ibikorwa by\'igicu na gahunda z\'umutekano.' },
      { date: '2021', role: 'Icyangombwa cya Google UX Design', company: 'Google / Coursera', desc: 'Icyangombwa cy\'inzobere c\'amasomo 7 kireba gutekereza kw\'ishusho, wireframing, na prototype.' },
    ],
  },
  projects: {
    label: 'Akazi Kanjye', title: 'Ibintu', title_accent: 'Nabakiye',
    desc: 'Ikusanyirizo ry\'imishinga yanjye — kuva muri porogiram zikora kugeza ku bigeragezwa by\'ingirakamaro.',
    filter_all: 'Byose', filter_fullstack: 'Full Stack', filter_frontend: 'Frontend',
    filter_backend: 'Backend', filter_ai: 'AI / ML', filter_design: 'Ishusho',
    btn_demo: 'Ibikorwa Bikora', btn_github: 'GitHub', btn_docs: 'Inyandiko',
    cta_label: 'Open Source', cta_title: 'Wifuza', cta_accent: 'gukorana?',
    cta_desc: 'Nifuza gushaka imishinga y\'open-source ishimishije yo gutera inkunga cyangwa gukorana.',
    cta_btn: 'Twandikire →',
  },
  contact: {
    label: 'Twandikire', title: 'Tuganire', title_accent: 'Hamwe',
    desc: 'Niba ufite umushinga mu gitekerezo, ushaka kunkoramo akazi, cyangwa ushaka gusa kuvuga muraho — inbox yanjye irafunguye.',
    info_title: 'Amakuru y\'Itumanahana', info_desc: 'Uzuza ifishi maze nzagusubiza mu masaha 24. Cyangwa sura cyane:',
    email_label: 'Imeyili', email_val: 'hello@yourname.dev',
    location_label: 'Aho ndi', location_val: 'Londres, UK (Gukorera kure byashoboka)',
    response_label: 'Igihe cyo Gusubiza', response_val: 'Mu masaha 24',
    avail_label: 'Ubushobozi', avail_val: 'Nifunguye amahirwe',
    form_label: 'Ohereza Ubutumwa', form_title: 'Dukore ikintu gishimishije hamwe',
    fname: 'Izina rya mbere', fname_ph: 'Kalisa',
    lname: 'Izina ry\'umuryango', lname_ph: 'Mugisha',
    email: 'Aderesi Imeyili', email_ph: 'kalisa@urugero.com',
    subject: 'Inshingano', subject_ph: 'Hitamo ikibazo…',
    subject_opts: ['Gusaba umushinga', 'Akazi ka Freelance', 'Amahirwe y\'Akazi', 'Gukorana', 'Kuvuga muraho gusa!'],
    budget: 'Ingengo y\'imari (birashoboka)', budget_ph: 'Hitamo urwego…',
    budget_opts: ['Munsi ya $1,000', '$1,000 – $5,000', '$5,000 – $15,000', '$15,000+', 'Nta remezo narabimenye'],
    message: 'Ubutumwa', message_ph: 'Mbwire umushinga wawe, igitekerezo, cyangwa vuga muraho…',
    form_note: 'Nzasubiza mu masaha 24', btn_send: 'Ohereza Ubutumwa', btn_sending: 'Ohereza…',
    success: '✓ Ubutumwa bwoherejwe! Nzagutumanahana vuba.',
    faq_label: 'FAQ', faq_title: 'Ibibazo', faq_accent: 'Bikunze Kubazwa',
    faqs: [
      { q: 'Wifunguye akazi ka freelance?', a: 'Yego! Nifunguye imishinga ya freelance, amasezerano, n\'amahirwe ya gisilikare.' },
      { q: 'Ni iki gihe usanzwe ukora?', a: 'Imishinga myinshi igenda kuva amasaha 2 kugeza 8 w\'icyumweru. Naha ibisobanuro by\'igihe nyuma y\'ikiganiro cyacu cya mbere.' },
      { q: 'Ukora kure?', a: 'Rwose. Nakoranye n\'abakiriya mpuzamahanga kure imyaka 3+.' },
      { q: 'Niba ingengo y\'imari yanjye mito?', a: 'Tuganire kandi. Rimwe na rimwe nkora imishinga mito ishimishije nyuma y\'ukuri.' },
    ],
    social_label: 'Nshake kuri',
  },
  footer: {
    rights: '© 2024 Izina Ryawe. Uburenganzira bwose bwabitswe.',
    built: 'Yakozwe na ♥ na kawa nyinshi.',
    links: { home: 'Ahabanza', about: 'Ibyanjye', projects: 'Ibikorwa', contact: 'Twandikire' },
  },
}

/* ============================================================
   TURKISH
   ============================================================ */
const tr: Translations = {
  nav: {
    home: 'Ana Sayfa', about: 'Hakkımda', projects: 'Projeler',
    contact: 'İletişim', hire: 'İşe Al',
  },
  hero: {
    badge: 'İş için müsaitim',
    greeting: 'Merhaba, ben',
    name: 'Adınız',
    roles: ['Full Stack Geliştirici', 'UI/UX Tasarımcı', 'Problem Çözücü', 'Yaratıcı Kodlayıcı'],
    desc: 'İnternette yaşayan güzel dijital ürünler tasarlıyor ve inşa ediyorum — hızlı, erişilebilir ve gerçekten keyifli deneyimler yaratıyorum.',
    btn_projects: 'Projeleri Gör',
    btn_contact: 'Bana Ulaş',
    stats: { projects: '25+', exp: '3+', clients: '15+', satisfaction: '%100' },
    stats_labels: { projects: 'Tamamlanan Proje', exp: 'Yıl Deneyim', clients: 'Mutlu Müşteri', satisfaction: 'Memnuniyet' },
  },
  services: {
    label: 'Ne Yapıyorum', title: 'Sunduğum', title_accent: 'Hizmetler',
    desc: 'Konseptten dağıtıma — her cihazda güzel çalışan şeyler inşa ediyorum.',
    items: [
      { icon: '💻', title: 'Frontend Geliştirme', desc: 'React, Next.js ve TailwindCSS ile piksel mükemmeliyetinde arayüzler. Hızlı, erişilebilir ve duyarlı.' },
      { icon: '⚙️', title: 'Backend Geliştirme', desc: 'Node.js ve Python ile ölçeklenebilir API\'lar ve sunucu tarafı mantığı.' },
      { icon: '🎨', title: 'UI/UX Tasarımı', desc: 'Figma\'da oluşturulan temiz, sezgisel tasarımlar. Kullanıcı ihtiyaçlarını zarif görsel deneyimlere dönüştürüyorum.' },
      { icon: '☁️', title: 'Bulut & DevOps', desc: 'CI/CD hatları ve Vercel ile Netlify\'da bulut dağıtımları.' },
    ],
  },
  about: {
    label: 'Ben Kimim', title: 'Kod &', title_accent: 'Kalıcı Tasarım',
    desc: "Gerçek sorunları çözen şeyler inşa etme tutkusuyla dolu bir full-stack geliştirici ve tasarımcıyım. Harika yazılımın eşit parçalar mühendislik ve empati olduğuna inanıyorum.",
    btn_hire: 'İşe Al', btn_cv: 'CV İndir',
    values_label: 'İlkelerim', values_title: 'Bağlı', values_accent: 'Olduğum Değerler',
    values: [
      { icon: '⚡', title: 'Hız', desc: 'Performans bir özelliktir. İlk günden hızlı, optimize edilmiş deneyimler inşa ediyorum.' },
      { icon: '🎯', title: 'Hassasiyet', desc: 'Her pikselde, her fonksiyonda, her commit\'te detaylara dikkat.' },
      { icon: '♿', title: 'Erişilebilirlik', desc: 'Herkes için inşa ediyorum — kapsayıcı tasarım pazarlık konusu değil.' },
      { icon: '🔄', title: 'İterasyon', desc: 'Gönder, ölç, öğren, tekrarla. Sürekli iyileştirmeyi benimsiyorum.' },
      { icon: '🤝', title: 'İş Birliği', desc: 'Harika ürünler harika ekipler tarafından inşa edilir. Başkalarıyla çalışmayı seviyorum.' },
      { icon: '📚', title: 'Öğrenme', desc: 'Teknoloji hızla ilerliyor. Meraklı kalıyor ve her gün büyüyorum.' },
    ],
    skills_label: 'Uzmanlık', skills_title: 'Benim', skills_accent: 'Becerilerim',
    skills_desc: 'Fikirleri hayata geçirmek için kullandığım teknolojiler ve araçlar.',
    exp_label: 'Kariyer', exp_title: 'İş', exp_accent: 'Deneyimi',
    edu_label: 'Akademik', edu_title: 'Eğitim &', edu_accent: 'Sertifikalar',
    experience: [
      { date: '2023 — Günümüz', role: 'Kıdemli Frontend Geliştirici', company: 'TechCorp Inc.', desc: 'Ana ürün panosunun yeniden yapılanmasına liderlik etti, performansı %60 artırdı. 4 kişilik genç geliştirici ekibine mentorluk yaptı.' },
      { date: '2021 — 2023', role: 'Full Stack Geliştirici', company: 'StartupXYZ', desc: 'React + TypeScript kullanarak tüm frontend\'i sıfırdan oluşturdu. Günlük 50k+ kullanıcıya hizmet veren bir Node.js REST API tasarladı.' },
      { date: '2020 — 2021', role: 'Junior Geliştirici', company: 'Digital Agency Co.', desc: '20+ müşteri için duyarlı web siteleri teslim etti. Piksel mükemmeliyetinde arayüzler için tasarımcılarla yakın çalıştı.' },
    ],
    education: [
      { date: '2016 — 2020', role: 'BSc Bilgisayar Bilimi', company: 'Örnek Üniversitesi', desc: 'Birinci sınıf onur. Yazılım mühendisliği ve insan-bilgisayar etkileşimi uzmanlığı.' },
      { date: '2022', role: 'AWS Çözüm Mimarı', company: 'Amazon Web Services', desc: 'Bulut altyapısı ve güvenlik en iyi uygulamalarını kapsayan ortak düzey sertifikası.' },
      { date: '2021', role: 'Google UX Tasarım Sertifikası', company: 'Google / Coursera', desc: 'Tasarım düşüncesi, wireframing ve prototiplemeyi kapsayan 7 kurslu profesyonel sertifika.' },
    ],
  },
  projects: {
    label: 'Çalışmalarım', title: 'İnşa', title_accent: 'Ettiklerim',
    desc: 'Projelerimin seçilmiş bir koleksiyonu — üretim uygulamalarından yan deneylere. Her biri bana yeni bir şey öğretti.',
    filter_all: 'Tümü', filter_fullstack: 'Full Stack', filter_frontend: 'Frontend',
    filter_backend: 'Backend', filter_ai: 'Yapay Zeka', filter_design: 'Tasarım',
    btn_demo: 'Canlı Demo', btn_github: 'GitHub', btn_docs: 'Dokümanlar',
    cta_label: 'Açık Kaynak', cta_title: 'İş birliği', cta_accent: 'yapmak ister misiniz?',
    cta_desc: 'Katkıda bulunmak veya iş birliği yapmak için her zaman ilginç açık kaynak projeleri arıyorum.',
    cta_btn: 'İletişime geç →',
  },
  contact: {
    label: 'İletişime Geç', title: 'Konuşalım', title_accent: '',
    desc: 'Aklınızda bir proje olsun, beni işe almak isteyin veya sadece merhaba demek isteyin — gelen kutum her zaman açık.',
    info_title: 'İletişim Bilgileri', info_desc: 'Formu doldurun ve 24 saat içinde size geri döneceğim. Ya da doğrudan bana ulaşın:',
    email_label: 'E-posta', email_val: 'hello@yourname.dev',
    location_label: 'Konum', location_val: 'Londra, UK (Uzaktan çalışmaya uygun)',
    response_label: 'Yanıt Süresi', response_val: '24 saat içinde',
    avail_label: 'Müsaitlik', avail_val: 'Fırsatlara açığım',
    form_label: 'Mesaj Gönder', form_title: 'Birlikte harika bir şey yapalım',
    fname: 'Ad', fname_ph: 'Ahmet',
    lname: 'Soyad', lname_ph: 'Yılmaz',
    email: 'E-posta Adresi', email_ph: 'ahmet@ornek.com',
    subject: 'Konu', subject_ph: 'Bir konu seçin…',
    subject_opts: ['Proje Talebi', 'Serbest Çalışma', 'İş Fırsatı', 'İş Birliği', 'Sadece merhaba!'],
    budget: 'Bütçe (isteğe bağlı)', budget_ph: 'Bir aralık seçin…',
    budget_opts: ['$1.000\'in altı', '$1.000 – $5.000', '$5.000 – $15.000', '$15.000+', 'Henüz emin değilim'],
    message: 'Mesaj', message_ph: 'Projenizi, fikrinizi anlatın veya sadece merhaba deyin…',
    form_note: '24 saat içinde yanıt vereceğim', btn_send: 'Mesaj Gönder', btn_sending: 'Gönderiliyor…',
    success: '✓ Mesaj gönderildi! Yakında sizinle iletişime geçeceğim.',
    faq_label: 'SSS', faq_title: 'Sık Sorulan', faq_accent: 'Sorular',
    faqs: [
      { q: 'Serbest çalışmaya müsait misiniz?', a: 'Evet! Şu anda serbest projelere, sözleşmeli çalışmalara ve tam zamanlı fırsatlara açığım.' },
      { q: 'Tipik teslim süreniz nedir?', a: 'Çoğu proje 2-8 hafta arasında değişir. İlk görüşmemizin ardından net bir zaman çizelgesi sunarım.' },
      { q: 'Uzaktan çalışıyor musunuz?', a: 'Kesinlikle. 3+ yıldır uluslararası müşterilerle uzaktan çalışıyorum.' },
      { q: 'Küçük bir bütçem varsa?', a: 'Yine de konuşalım. Zaman zaman gerçekten ilgimi çeken küçük projeleri de üstleniyorum.' },
    ],
    social_label: 'Beni bul',
  },
  footer: {
    rights: '© 2024 Adınız. Tüm hakları saklıdır.',
    built: '♥ ve bol kahve ile yapıldı.',
    links: { home: 'Ana Sayfa', about: 'Hakkımda', projects: 'Projeler', contact: 'İletişim' },
  },
}

export const translations: Record<Lang, Translations> = { en, fr, rw, tr }

export const langNames: Record<Lang, string> = {
  en: 'English',
  fr: 'Français',
  rw: 'Kinyarwanda 🇷🇼',
  tr: 'Türkçe',
}
