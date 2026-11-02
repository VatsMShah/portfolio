/**
 * Central portfolio data for Vatsal Nagda — AI Engineer & Full-Stack Developer.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Vatsal Nagda',
  displayName: 'Vatsal Nagda',
  firstName: 'VATSAL',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A NAGDA ORIGINAL',
  role: 'AI Engineer · Full-Stack Developer',
  tagline: ['AI Engineer', 'Agentic Systems', 'Full-Stack Developer'],
  intro:
    'An AI Engineer and Full-Stack Developer designing and building agentic AI applications — LLM tool use, RAG pipelines, and vector search (LangGraph, Claude API, pgvector) wired into real, high-performance production products.',
  location: 'Mumbai, India',
  email: 'vatsshah982@gmail.com',
  links: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com/VatsMShah',
    altGithub: 'https://github.com/Lastav-d',
  },
  resumePdf: '/assets/Vatsal_Nagda_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Vatsal Nagda',
  },
  interests: ['Agentic AI & Tool Use', 'RAG & Vector Retrieval', 'Multi-Tenant SaaS Architecture'],
};

export const education = [
  {
    school: 'Computer Engineering',
    place: 'Mumbai, India',
    degree: 'Bachelor of Engineering — Computer Engineering',
    period: '2020 – 2024',
    score: 'First Class with Distinction',
  },
];

export const experience = [
  {
    company: 'AI & Full-Stack Systems',
    role: 'AI Engineer & Full-Stack Developer',
    place: 'Remote / Freelance',
    period: '2024 – Present',
    points: [
      'Architected agentic AI workflows and compliance verification engines with LangGraph, Claude API, and pgvector semantic retrieval.',
      'Designed and delivered production-grade web applications with React, Next.js 14, TypeScript, Tailwind CSS, and FastAPI.',
      'Engineered automated messaging and logistics platforms with Meta WhatsApp Cloud API, HMAC SHA-256 webhook validation, and Google Sheets sync.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  demo?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'specmatch-ai',
    title: 'SpecMatch AI',
    year: '2026',
    genre: 'Agentic AI • RAG • Vector Search',
    logline: 'An RFP-to-product compliance matching tool with multi-step reasoning agents and pgvector retrieval.',
    stack: ['LangGraph', 'Claude API', 'pgvector', 'FastAPI', 'React', 'Tailwind'],
    build: [
      'Engineered an RFP compliance agent that reasons over complex, multi-page technical specification documents and compares them against enterprise product catalogs.',
      'Wired up multi-step tool calling and hybrid semantic search with pgvector to classify requirements with granular MATCH, PARTIAL, or GAP verdicts.',
      'Developed a responsive React interface with real-time streaming agent thought steps and structured audit reports.',
    ],
    features: [
      'Multi-step reasoning with LangGraph & Claude API',
      'RAG & semantic vector search with pgvector',
      'Granular requirement classification (MATCH / PARTIAL / GAP)',
      'Automated specification discrepancy analysis',
      'FastAPI asynchronous backend with streaming responses',
    ],
    metrics: [
      { value: '100%', label: 'automated RFP classification' },
      { value: '3-tier', label: 'verdict engine (Match/Partial/Gap)' },
      { value: 'pgvector', label: 'high-dimensional embeddings' },
      { value: '10×', label: 'faster compliance audit' },
    ],
    github: 'https://github.com/Lastav-d/SpecAI-Match',
    palette: { from: '#021820', via: '#005b6e', to: '#040b0e', accent: '#00e5ff' },
    motif: 'shield',
  },
  {
    id: 'whatsapp-crm-saas',
    title: 'WhatsApp CRM & Marketing SaaS',
    year: '2026',
    genre: 'Full-Stack SaaS • Automation • Multi-Tenant',
    logline: 'A multi-tenant WhatsApp CRM platform featuring customer session pipelines and automated broadcast campaigns.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js', 'REST API'],
    build: [
      'Architected a multi-tenant WhatsApp CRM platform with interactive pipeline stages and customer session tracking.',
      'Built scheduled broadcast campaign engine, smart client-transporter matchmaking, and real-time interaction analytics.',
      'Implemented secure tenant authentication and responsive dashboard UI with dark mode support.',
    ],
    features: [
      'Multi-tenant workspace architecture',
      'Automated WhatsApp broadcast marketing campaigns',
      'Client-transporter matchmaking pipeline',
      'Real-time interaction analytics & metrics',
      'Responsive client management dashboard',
    ],
    metrics: [
      { value: 'Multi-Tenant', label: 'isolated client environments' },
      { value: 'Real-Time', label: 'interaction analytics' },
      { value: 'Automated', label: 'broadcast message campaigns' },
      { value: '100%', label: 'customizable lead pipelines' },
    ],
    github: 'https://github.com/VatsMShah/Whatsapp-CRM-SAAS',
    palette: { from: '#0a1d0d', via: '#166534', to: '#050c06', accent: '#46e3a8' },
    motif: 'tenants',
  },
  {
    id: 'reliable-furniture',
    title: 'Reliable Furniture Works',
    year: '2025',
    genre: 'E-Commerce • Interactive UX • Showroom',
    logline: 'A premium digital showroom and e-commerce experience with custom material selectors and automated WhatsApp checkout.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Wouter', 'Vite'],
    build: [
      'Engineered a high-end digital showroom and e-commerce storefront for a luxury furniture manufacturer.',
      'Designed interactive finish and material customizers, dynamic cart state management, and direct WhatsApp order dispatch.',
      'Achieved near-perfect Lighthouse performance scores with optimized asset loading and responsive layout.',
    ],
    features: [
      'Interactive material and fabric customizer',
      'Fluid sliding shopping bag & cart state',
      'Automated WhatsApp order & enquiry dispatch',
      'High-performance mobile-first responsive design',
    ],
    metrics: [
      { value: '98+', label: 'Lighthouse performance score' },
      { value: 'Direct', label: 'WhatsApp order integration' },
      { value: 'Interactive', label: 'custom material selectors' },
      { value: '<1.2s', label: 'page load time' },
    ],
    demo: 'https://reliable-furniture-3d-store.vercel.app/',
    github: 'https://github.com/Lastav-d/WEB-dev',
    palette: { from: '#1a1005', via: '#854d0e', to: '#0c0702', accent: '#ffb020' },
    motif: 'flow',
  },
  {
    id: 'skating-academy',
    title: 'Dehiya Skating Academy',
    year: '2025',
    genre: 'Next.js 14 • Booking Platform • Web App',
    logline: 'A modern, high-performance platform with dynamic class schedules and interactive session bookings.',
    stack: ['Next.js 14', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    build: [
      'Built a production-grade digital platform and booking portal for a roller skating sports academy using Next.js 14 App Router.',
      'Created real-time schedule viewer, interactive registration forms, and athlete profile showcases.',
      'Integrated SEO best practices and fast Server-Side Rendering (SSR) deployed globally on Vercel.',
    ],
    features: [
      'Next.js 14 App Router & React Server Components',
      'Interactive session booking & class schedule matrix',
      'Event registration pipeline with confirmation receipts',
      'SEO-optimized metadata and lightning-fast SSR',
    ],
    metrics: [
      { value: 'Next.js 14', label: 'App Router architecture' },
      { value: 'Global', label: 'Vercel edge deployment' },
      { value: '100%', label: 'mobile responsive' },
      { value: 'Instant', label: 'booking confirmations' },
    ],
    demo: 'https://skating-web-six.vercel.app',
    github: 'https://github.com/VatsMShah/Skating-web',
    palette: { from: '#1e082b', via: '#6b21a8', to: '#0b0310', accent: '#c084fc' },
    motif: 'flow',
  },
  {
    id: 'traket-logistics',
    title: 'Traket WhatsApp Logistics Bot',
    year: '2025',
    genre: 'Logistics Automation • Meta Cloud API • Webhooks',
    logline: 'An end-to-end WhatsApp booking orchestrator featuring HMAC SHA-256 validation and live Google Sheets sync.',
    stack: ['Node.js', 'WhatsApp Cloud API', 'Meta Webhooks', 'Google Sheets API'],
    build: [
      'Developed an automated logistics booking and dispatch orchestrator directly inside WhatsApp for freight transporters and drivers.',
      'Implemented cryptographic security with HMAC SHA-256 signature verification for Meta Cloud API webhooks.',
      'Integrated two-way synchronization with Google Sheets API for zero-maintenance live order database tracking.',
    ],
    features: [
      'Meta WhatsApp Cloud API integration',
      'HMAC SHA-256 cryptographic webhook security',
      'Live two-way Google Sheets database synchronization',
      'Automated driver and shipment assignment workflows',
    ],
    metrics: [
      { value: 'SHA-256', label: 'HMAC webhook validation' },
      { value: '24/7', label: 'automated dispatch availability' },
      { value: '2-way', label: 'live Google Sheets database sync' },
      { value: '0ms', label: 'downtime on webhook listener' },
    ],
    github: 'https://github.com/VatsMShah/Whatsapp---Automation',
    palette: { from: '#04161c', via: '#0369a1', to: '#030a0d', accent: '#38bdf8' },
    motif: 'shield',
  },
  {
    id: 'ai-analytics-dashboard',
    title: 'AI Analytics Dashboard',
    year: '2025',
    genre: 'Data Visualization • AI Insights • Dark UX',
    logline: 'An interactive analytics suite for monitoring engagement metrics, user growth, and AI-predicted trends.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Recharts', 'Vercel'],
    build: [
      'Designed and developed an AI insights dashboard featuring dynamic charts, trend projections, and KPI summaries.',
      'Implemented responsive charts with Recharts, interactive time-range filtering, and high-contrast dark theme.',
    ],
    features: [
      'Interactive charting with Recharts',
      'AI-driven predictive trend analysis',
      'Real-time filter controls and data slicing',
      'Smooth transitions and dark mode UI',
    ],
    metrics: [
      { value: 'Real-Time', label: 'KPI telemetry & charts' },
      { value: 'Predictive', label: 'AI trend estimation' },
      { value: 'Fluid', label: 'Recharts interactive graphs' },
      { value: '100%', label: 'custom CSS variables & themes' },
    ],
    demo: 'https://ai-analytics-dashboard-rho.vercel.app',
    github: 'https://github.com/Lastav-d/ai-analytics-dashboard',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'sentiment-analysis',
    title: 'Social Media Sentiment Analysis',
    year: '2024',
    genre: 'NLP • Machine Learning • Data Science',
    logline: 'Sentiment classification and visualization across social datasets — core NLP foundations.',
    stack: ['Python', 'Pandas', 'NLTK', 'Seaborn', 'Matplotlib'],
    build: [
      'Analyzed sentiment distributions across massive public social datasets using natural language processing pipelines.',
      'Built text preprocessing, tokenization, sentiment scoring, and exploratory data visualizations.',
    ],
    features: [
      'NLTK natural language tokenization & stop-word cleansing',
      'Polarity and sentiment classification pipelines',
      'Comprehensive statistical data distributions via Seaborn',
    ],
    metrics: [
      { value: 'NLP', label: 'text processing pipeline' },
      { value: 'NLTK', label: 'linguistic sentiment analysis' },
      { value: 'Seaborn', label: 'high-density distributions' },
    ],
    github: 'https://github.com/Lastav-d/Prodigy_DS_04',
    palette: { from: '#1f0414', via: '#831843', to: '#0d0208', accent: '#f472b6' },
    motif: 'shield',
  },
  {
    id: 'purchase-prediction',
    title: 'Purchase Prediction Classifier',
    year: '2024',
    genre: 'Machine Learning • Predictive Models',
    logline: 'Decision tree classification modeling customer purchasing behavior from demographic patterns.',
    stack: ['Python', 'Scikit-Learn', 'Decision Trees', 'Pandas'],
    build: [
      'Trained and evaluated decision tree classifiers to forecast consumer purchasing decisions based on demographic features.',
      'Fine-tuned hyperparameters, pruned overfitting branches, and produced interpretable decision paths.',
    ],
    features: [
      'Supervised classification model with Scikit-Learn',
      'Feature importance analysis and demographic scoring',
      'Hyperparameter tuning and cross-validation',
    ],
    metrics: [
      { value: 'Scikit-Learn', label: 'classifier engine' },
      { value: 'Decision Trees', label: 'interpretable branching' },
      { value: 'Optimized', label: 'accuracy and precision' },
    ],
    github: 'https://github.com/Lastav-d/Prodigy_DS_03',
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'agentic-ai-builder',
    title: 'Agentic AI Architect',
    org: 'LangGraph & Claude API',
    detail: 'Engineered multi-step reasoning agents with tool execution and vector retrieval in production systems.',
    laurel: 'AI Systems',
  },
  {
    id: 'dual-ecosystem',
    title: 'Open Source Contributor',
    org: 'GitHub: VatsMShah & Lastav-d',
    detail: 'Maintains production repositories across full-stack SaaS, AI agents, and enterprise web solutions.',
    laurel: 'Open Source',
    link: 'https://github.com/VatsMShah',
  },
  {
    id: 'full-stack-ships',
    title: 'Production Web Ships',
    org: 'Client & SaaS Projects',
    detail: 'Shipped client-facing web applications including Reliable Furniture Works, Skating Academy, and WhatsApp CRM SaaS.',
    laurel: 'Production Deployments',
  },
  {
    id: 'meta-automation',
    title: 'Meta API Integrations',
    org: 'WhatsApp Cloud API',
    detail: 'Engineered secure webhook orchestration with HMAC SHA-256 cryptographic verification and live Sheets sync.',
    laurel: 'Enterprise APIs',
    link: 'https://github.com/VatsMShah/Whatsapp---Automation',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Anthropic', name: 'Claude API & Prompt Tool Use', link: 'https://github.com/Lastav-d/SpecAI-Match' },
  { issuer: 'Meta', name: 'WhatsApp Cloud API Webhooks & Integrations', link: 'https://github.com/VatsMShah/Whatsapp---Automation' },
  { issuer: 'Full-Stack', name: 'React & Next.js 14 Production Architecture', link: 'https://github.com/VatsMShah/Skating-web' },
  { issuer: 'Database', name: 'PostgreSQL & pgvector Vector Embeddings', link: 'https://github.com/Lastav-d/SpecAI-Match' },
  { issuer: 'Data Science', name: 'Python Data Science & Machine Learning', link: 'https://github.com/Lastav-d/Prodigy_DS_04' },
  { issuer: 'Engineering', name: 'Bachelor of Engineering — Computer Engineering', link: 'https://github.com/VatsMShah' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'ai-agents',
    title: 'AI & Agents',
    subtitle: 'Tool use, reasoning & retrieval',
    skills: [
      { name: 'LangGraph', mono: 'Lg', note: 'Primary' },
      { name: 'Claude API', mono: 'Cl', note: 'Tool Use' },
      { name: 'RAG & Vector Search', mono: 'Rg' },
      { name: 'pgvector', mono: 'Pv' },
      { name: 'Embeddings', mono: 'Em' },
      { name: 'Prompt Engineering', mono: 'Pe' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'High-performance interactive interfaces',
    skills: [
      { name: 'React', mono: 'Re', note: 'Primary' },
      { name: 'Next.js 14', mono: 'Nx' },
      { name: 'TypeScript', mono: 'Ts' },
      { name: 'Tailwind CSS', mono: 'Tw' },
      { name: 'Framer Motion', mono: 'Fm' },
      { name: 'Recharts', mono: 'Rc' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    subtitle: 'Asynchronous services & cloud integrations',
    skills: [
      { name: 'FastAPI', mono: 'Fa' },
      { name: 'Node.js', mono: 'No' },
      { name: 'Python', mono: 'Py' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'WhatsApp Cloud API', mono: 'Wa' },
      { name: 'Meta Webhooks', mono: 'Wh' },
    ],
  },
  {
    id: 'databases',
    title: 'Data & Storage',
    subtitle: 'Relational, vector & analytics',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'pgvector', mono: 'Pv' },
      { name: 'Google Sheets API', mono: 'Gs' },
      { name: 'Pandas', mono: 'Pd' },
      { name: 'Power BI', mono: 'Bi' },
    ],
  },
  {
    id: 'infra',
    title: 'Infra & DevOps',
    subtitle: 'Deployment & developer tooling',
    skills: [
      { name: 'Docker', mono: 'Dk' },
      { name: 'Vercel', mono: 'Vc' },
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'HMAC SHA-256', mono: 'Hm' },
      { name: 'Postman', mono: 'Pm' },
      { name: 'Vite', mono: 'Vt' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  LangGraph: ['SpecMatch AI (Agentic Compliance Matching)'],
  'Claude API': ['SpecMatch AI (LLM Tool Execution)'],
  'RAG & Vector Search': ['SpecMatch AI (Hybrid Retrieval)'],
  pgvector: ['SpecMatch AI (Semantic Embeddings)'],
  React: ['Reliable Furniture Works', 'WhatsApp CRM & Marketing SaaS', 'AI Analytics Dashboard'],
  'Next.js 14': ['Dehiya Skating Academy (App Router)'],
  TypeScript: ['Reliable Furniture Works', 'Dehiya Skating Academy', 'WhatsApp CRM SaaS'],
  'Tailwind CSS': ['Reliable Furniture Works', 'Dehiya Skating Academy', 'AI Analytics Dashboard'],
  FastAPI: ['SpecMatch AI (Streaming Backend)'],
  'Node.js': ['Traket WhatsApp Logistics Bot', 'WhatsApp CRM SaaS'],
  Python: ['SpecMatch AI', 'Social Media Sentiment Analysis', 'Purchase Prediction Classifier'],
  'WhatsApp Cloud API': ['Traket WhatsApp Logistics Bot', 'WhatsApp CRM SaaS'],
  'Meta Webhooks': ['Traket WhatsApp Logistics Bot (HMAC SHA-256)'],
  PostgreSQL: ['SpecMatch AI', 'WhatsApp CRM SaaS'],
  SQL: ['Computer Engineering Foundation', 'Database Modeling'],
  'Google Sheets API': ['Traket WhatsApp Logistics Bot (2-way sync)'],
  Docker: ['Multi-Tenant SaaS Deployment'],
  Vercel: ['Dehiya Skating Academy', 'Reliable Furniture Works', 'AI Analytics Dashboard'],
  'Git / GitHub': ['Dual Profiles: VatsMShah & Lastav-d'],
  Recharts: ['AI Analytics Dashboard'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const cyan: Palette = { from: '#021820', via: '#005b6e', to: '#040b0e', accent: '#00e5ff' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const green: Palette = { from: '#0a1d0d', via: '#166534', to: '#050c06', accent: '#46e3a8' };
const purple: Palette = { from: '#1e082b', via: '#6b21a8', to: '#0b0310', accent: '#c084fc' };
const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2020 – 2024',
    synopsis: 'Computer Engineering degree and groundwork in data science, predictive algorithms, and SQL data modeling.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Computer Engineering',
        description: 'Bachelor of Engineering in Computer Engineering — core systems, data structures, algorithms, and networking.',
        tags: ['BE', 'Computer Engineering', 'Systems'],
        runtime: '2020 – 2024',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'Machine Learning & NLP',
        description: 'Exploring natural language processing and decision tree classifiers across consumer and social datasets.',
        tags: ['Python', 'NLP', 'Scikit-Learn'],
        runtime: '2024',
        palette: purple,
      },
    ],
  },
  {
    number: 2,
    title: 'Webcraft & Client Platforms',
    period: '2024 – 2025',
    synopsis: 'Engineering high-converting production websites and custom web apps for real-world businesses.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Digital Showroom',
        description: 'Reliable Furniture Works — a luxury digital showroom with interactive material pickers and WhatsApp order dispatch.',
        tags: ['React', 'TypeScript', 'Tailwind', 'E-Commerce'],
        runtime: '2025',
        palette: amber,
      },
      {
        code: 'S02 E02',
        title: 'The Academy Portal',
        description: 'Dehiya Skating Academy — a dynamic booking portal with schedules, class registrations, and Next.js 14 SSR.',
        tags: ['Next.js 14', 'App Router', 'TypeScript', 'Vercel'],
        runtime: '2025',
        palette: purple,
      },
    ],
  },
  {
    number: 3,
    title: 'Enterprise Automation & APIs',
    period: '2025',
    synopsis: 'Building production-grade automation systems powered by Meta WhatsApp Cloud API and multi-tenant architectures.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Logistics Orchestration',
        description: 'Traket WhatsApp Logistics Bot — 24/7 driver dispatch with HMAC SHA-256 webhook validation and live Google Sheets sync.',
        tags: ['Node.js', 'WhatsApp Cloud API', 'Meta Webhooks'],
        runtime: '2025',
        palette: green,
      },
      {
        code: 'S03 E02',
        title: 'The CRM SaaS',
        description: 'WhatsApp CRM & Marketing SaaS — customer session pipelines, automated broadcasts, and transporter matchmaking.',
        tags: ['React', 'SaaS', 'Multi-Tenant', 'Marketing'],
        runtime: '2026',
        palette: green,
      },
    ],
  },
  {
    number: 4,
    title: 'The Agentic AI Shift',
    period: '2025 – 2026',
    synopsis: 'Designing and building agentic systems that use LLMs to reason, execute tools, and retrieve from vector space.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'SpecMatch AI',
        description: 'RFP-to-product compliance matching agent reasoning over messy spec docs using Claude API and pgvector.',
        tags: ['LangGraph', 'Claude API', 'pgvector', 'FastAPI'],
        runtime: '2026',
        palette: cyan,
      },
      {
        code: 'S04 E02',
        title: 'Telemetry & Analytics',
        description: 'AI-Powered Analytics Dashboard — real-time data visualization and AI-driven growth forecasting.',
        tags: ['React', 'Recharts', 'Tailwind', 'Vite'],
        runtime: '2025',
        palette: amber,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Autonomous agents, multi-agent swarms, and scalable AI infrastructure wired into production.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'Autonomous Swarms',
        description: 'Next-generation agentic frameworks and autonomous workflows that handle end-to-end enterprise operations.',
        tags: ['Multi-Agent', 'Autonomous AI', 'Vector DBs'],
        runtime: 'In production',
        palette: cyan,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'The AI Original', title: 'SpecMatch AI', detail: 'LangGraph · Claude API · pgvector retrieval', palette: cyan },
  { label: 'Full-Stack SaaS', title: 'WhatsApp CRM SaaS', detail: 'Multi-tenant pipelines & automated campaigns', palette: green },
  { label: 'E-Commerce Showroom', title: 'Reliable Furniture', detail: 'Interactive materials & WhatsApp checkout', palette: amber },
  { label: 'Next.js 14 Platform', title: 'Skating Academy', detail: 'App Router · Live session bookings', palette: purple },
  { label: 'Meta Cloud API', title: 'Traket Logistics Bot', detail: 'HMAC SHA-256 security & Google Sheets sync', palette: green },
  { label: 'AI Insights Suite', title: 'Analytics Dashboard', detail: 'Interactive charts · Predictive metrics', palette: amber },
  { label: 'AI Stack', title: 'LangGraph & Claude', detail: 'Multi-step reasoning and tool calling', palette: cyan },
  { label: 'Vector Store', title: 'pgvector & PostgreSQL', detail: 'High-dimensional semantic search', palette: purple },
  { label: 'Dual Repositories', title: 'VatsMShah & Lastav-d', detail: 'Active open-source production projects', palette: crimson },
  { label: 'Engineering Philosophy', title: 'AI Systems That Ship', detail: 'Real products, not just toy chatbot demos', palette: cyan },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Identity',
    title: 'AI Engineer & Full-Stack Developer',
    lines: ['Computer Engineering background', 'Specializing in agentic AI and production web apps'],
    chips: ['LangGraph', 'Claude API', 'React', 'FastAPI'],
  },
  {
    kicker: 'AI Stack',
    title: 'Reasoning & Tool Use',
    lines: ['LangGraph multi-step workflows · Claude API tool execution', 'pgvector hybrid retrieval · RAG pipelines'],
    chips: ['LangGraph', 'Claude API', 'pgvector', 'FastAPI'],
  },
  {
    kicker: 'Web Stack',
    title: 'Full-Stack Production Builds',
    lines: ['React, Next.js 14 App Router, TypeScript, Tailwind CSS', 'FastAPI, Node.js, PostgreSQL, Docker Compose'],
    chips: ['Next.js 14', 'React', 'TypeScript', 'Tailwind', 'Node.js'],
  },
  {
    kicker: 'Featured Projects',
    title: 'Originals That Ship',
    lines: ['SpecMatch AI — Automated RFP compliance matching agent', 'WhatsApp CRM SaaS — Multi-tenant campaign orchestrator', 'Reliable Furniture — Interactive luxury showroom & checkout'],
  },
  {
    kicker: 'Automations',
    title: 'Enterprise Integrations',
    lines: ['Meta WhatsApp Cloud API with HMAC SHA-256 signature verification', 'Live two-way Google Sheets database synchronization'],
  },
  {
    kicker: 'Mission',
    title: 'AI Systems That Ship',
    lines: ['Every system wired into reliable, production-ready interfaces people rely on.'],
  },
];

export type ProfileId = 'vatsal' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'vatsal',
    name: 'Vatsal',
    blurb: 'The complete portfolio, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Background & Focus', palette: purple },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • Production Ships`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 Highlights', palette: green },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: cyan },
  moments: { nav: 'Moments', card: 'Top Moments', meta: `${achievements.length} Moments • ${certifications.length} Credentials`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: purple },
};
