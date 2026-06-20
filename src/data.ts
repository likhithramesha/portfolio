import portraitUrl from "../profile-city.jpg";
import purdueLogoUrl from "../purdue-logo.png";
import purdueWordmarkUrl from "../purdue-wordmark.png";

export type ProfileLink = {
  label: string;
  href: string;
  type: "email" | "social" | "project";
};

export type Capability = {
  number: string;
  title: string;
  description: string;
};

export type TimelineItem = {
  date: string;
  organization: string;
  role: string;
  summary: string;
};

export type VisualPanel = {
  label: string;
  value: string;
  tone: "teal" | "forest" | "gold" | "rose" | "ink";
};

export type Project = {
  number: string;
  name: string;
  category: string;
  role: string;
  summary: string;
  metrics: string[];
  tags: string[];
  href?: string;
  visualPanels: VisualPanel[];
};

export type MarqueeItem = {
  label: string;
  detail: string;
  metric: string;
  tone: VisualPanel["tone"];
};

export const profile = {
  name: "Likhith Ramesha",
  title: "AI Product Builder | Purdue MEM | Ex-Qualcomm",
  availability: "Open to Summer/Fall 2026 AI PM / TPM internships",
  heroLine: "AI product builder turning messy workflow pain into practical AI products.",
  heroQuestion: "Have an AI product problem that needs a builder-PM?",
  heroPitch:
    "I am looking for Summer/Fall 2026 AI PM / TPM internships and teams building practical AI products, data platforms, developer tools, or workflow automation.",
  location: "West Lafayette, IN",
  email: "likhithrameshawork@gmail.com",
  linkedin: "https://www.linkedin.com/in/likhithramesha/",
  portraitUrl,
  purdueLogoUrl,
  purdueWordmarkUrl,
};

export const profileLinks: ProfileLink[] = [
  {
    label: "Email me",
    href: "mailto:likhithrameshawork@gmail.com",
    type: "email",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/likhithramesha/",
    type: "social",
  },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: "Purdue", label: "M.S. Engineering Management" },
  { value: "$4M", label: "annual infra savings" },
  { value: "90%", label: "forecast accuracy" },
];

export const marqueeItems: MarqueeItem[] = [
  { label: "Qualcomm", detail: "Compute forecasting platform", metric: "$4M saved", tone: "forest" },
  { label: "Purdue MEM", detail: "Engineering management", metric: "Builder-PM", tone: "gold" },
  { label: "Boxsy.ai", detail: "Agentic investor analysis", metric: "Founder ops", tone: "teal" },
  { label: "Caterpillar", detail: "Manufacturing analytics roadmap", metric: "9-person team", tone: "gold" },
  { label: "Plot", detail: "AI social matching MVP", metric: "50+ interviews", tone: "rose" },
  { label: "LoriComunica", detail: "Accessible AI AAC platform", metric: "93% preference", tone: "teal" },
  { label: "Ankuram", detail: "Crisis digital transformation", metric: "Remote learning", tone: "forest" },
  { label: "AI workflows", detail: "LangChain, APIs, decision briefs", metric: "LLM systems", tone: "gold" },
  { label: "Dashboards", detail: "Power BI, Tableau, KPI design", metric: "Exec-ready", tone: "teal" },
  { label: "Roadmaps", detail: "PRDs, backlog, user stories", metric: "0-to-1", tone: "rose" },
];

export const capabilities: Capability[] = [
  {
    number: "01",
    title: "AI Product Strategy",
    description:
      "Turning ambiguous workflow pain into product vision, PRDs, roadmaps, success metrics, and crisp tradeoffs for engineering and business stakeholders.",
  },
  {
    number: "02",
    title: "Agentic AI & LLM Workflows",
    description:
      "Designing practical LLM systems for research, signal extraction, scoring, RAG-style retrieval, and decision briefs that move beyond demo theater.",
  },
  {
    number: "03",
    title: "Data Platforms & Analytics",
    description:
      "Building KPI dashboards, forecasting workflows, and analytics surfaces that help teams compare, prioritize, and make capital or operations decisions faster.",
  },
  {
    number: "04",
    title: "Backend / Workflow Automation",
    description:
      "Connecting APIs, data models, automation wrappers, and internal tools so repeatable work becomes reliable infrastructure instead of manual coordination.",
  },
  {
    number: "05",
    title: "User Research & GTM",
    description:
      "Combining customer discovery, market sizing, pricing analysis, and rollout planning with enough technical depth to keep the product honest.",
  },
];

export const timeline: TimelineItem[] = [
  {
    date: "Jan 2026 - May 2026",
    organization: "Caterpillar Inc. / The Data Mine, Purdue University",
    role: "Technical Product Manager",
    summary:
      "Led an Agile team building a centralized manufacturing data platform and Power BI dashboard suite.",
  },
  {
    date: "Aug 2024 - Aug 2025",
    organization: "Qualcomm Inc.",
    role: "Product Manager / Software Developer",
    summary:
      "Owned product vision, requirements, backlog, and executive KPI dashboards for an ML-powered compute forecasting platform.",
  },
  {
    date: "Jul 2023 - Jul 2024",
    organization: "Infrastructure Automation",
    role: "Software Developer",
    summary:
      "Built Spring Boot APIs, Hibernate models, Angular contracts, and Python/Perl automation for internal platform migrations.",
  },
];

export const projects: Project[] = [
  {
    number: "01",
    name: "Qualcomm Compute Forecasting",
    category: "Enterprise ML Platform",
    role: "Product Manager / Software Developer",
    summary:
      "Owned product vision, requirements, backlog, PRDs, and executive dashboards for an ML-powered compute demand forecasting platform across 130+ active chip programs.",
    metrics: ["$4M annual infra savings", "90% prediction accuracy", "30+ hours/week automated"],
    tags: ["Forecasting", "Executive KPIs", "ML platform", "Capital planning"],
    visualPanels: [
      { label: "Forecast accuracy", value: "90%", tone: "forest" },
      { label: "Programs", value: "130+", tone: "teal" },
      { label: "Planning speed", value: "2x", tone: "gold" },
    ],
  },
  {
    number: "02",
    name: "Boxsy.ai",
    category: "Applied AI | B2B SaaS",
    role: "Lead AI Developer, The Data Mine @ Purdue",
    summary:
      "Built and integrated a production agentic AI investment analysis feature using LangChain and the Perplexity API, turning manual investor research into structured decision briefs.",
    metrics: ["Founder ops", "Signal extraction", "Structured scoring"],
    tags: ["LangChain", "Perplexity API", "Agentic workflows", "Decision briefs"],
    href: "https://www.boxsy.io/",
    visualPanels: [
      { label: "Research queue", value: "42 signals", tone: "teal" },
      { label: "Company score", value: "8.7 / 10", tone: "forest" },
      { label: "Brief status", value: "Ready", tone: "gold" },
    ],
  },
  {
    number: "03",
    name: "Caterpillar / Purdue Data Mine",
    category: "Manufacturing Analytics",
    role: "Technical Product Manager, Corporate Partnership",
    summary:
      "Led a cross-functional Agile team to scope a centralized manufacturing data platform and dashboard suite from stakeholder needs to sprint reviews.",
    metrics: ["9-member Agile team", "Power BI suite", "Data platform roadmap"],
    tags: ["Roadmapping", "User stories", "Power BI", "Stakeholder alignment"],
    visualPanels: [
      { label: "Sprint scope", value: "Active", tone: "gold" },
      { label: "Data sources", value: "Mapped", tone: "ink" },
      { label: "Dashboard suite", value: "In build", tone: "forest" },
    ],
  },
  {
    number: "04",
    name: "Plot",
    category: "0-to-1 Consumer Product",
    role: "Founder & Product Manager",
    summary:
      "Shipped an AI social platform MVP and tested an agentic psychometric matching workflow across early beta users to capture the vibe of a place.",
    metrics: ["50+ interviews", "AI matching MVP", "Early beta users"],
    tags: ["React", "Customer discovery", "Psychometric matching", "0-to-1"],
    href: "https://plot-sigma.vercel.app/",
    visualPanels: [
      { label: "Vibe match", value: "82%", tone: "rose" },
      { label: "Discovery loop", value: "Live", tone: "teal" },
      { label: "Beta signal", value: "Learning", tone: "gold" },
    ],
  },
  {
    number: "05",
    name: "LoriComunica",
    category: "Accessible AI | Healthcare",
    role: "Product Manager, Bayer Foundation Project",
    summary:
      "Led product strategy and built a functioning backend prototype for an AI AAC platform serving 1.5K+ users across UX, pricing, GTM, market sizing, and rollout planning.",
    metrics: ["1.5K+ users served", "93% preference", "12-month clinic roadmap"],
    tags: ["AAC", "Backend prototype", "GTM", "Market sizing"],
    href: "https://loricomunica.com/",
    visualPanels: [
      { label: "AAC users", value: "1.5K+", tone: "teal" },
      { label: "Preference", value: "93%", tone: "forest" },
      { label: "Roadmap", value: "US / Brazil", tone: "rose" },
    ],
  },
];

export const rangeHighlights = [
  {
    label: "Ankuram Preschool",
    title: "Crisis digital transformation",
    description:
      "Built digital infrastructure and remote learning support during COVID so a brick-and-mortar preschool could keep serving families.",
    href: "https://ankurampreschool.com/",
  },
  {
    label: "UTSAV",
    title: "Zero-budget event growth",
    description:
      "Led content, marketing, and stage presence for a major college fest by pushing organic community tactics instead of paid reach.",
  },
  {
    label: "Human layer",
    title: "Reading rooms under pressure",
    description:
      "Sports captaincy, hosting, singing, public speaking, psychology, and philosophy inform how I explain complexity and lead different people.",
  },
];
