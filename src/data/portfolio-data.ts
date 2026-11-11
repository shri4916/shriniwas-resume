/**
 * Portfolio content — single source of truth.
 * Edit text, lists and links here; the page updates automatically.
 */
import {
  Landmark,
  ShoppingCart,
  HeartPulse,
  ShieldCheck,
  Car,
  Sprout,
  ClipboardList,
  Layers,
  Users,
  Workflow,
  RefreshCcw,
  Database,
  Network,
  ListChecks,
  BarChart3,
  KanbanSquare,
  Plug,
  Repeat,
  Sparkles,
} from "lucide-react";
import type {
  PersonalInfo,
  Industry,
  Expertise,
  JourneyMilestone,
  Experience,
  CaseStudy,
  ToolGroup,
  Certification,
  Award,
  NavLink,
} from "@/types/portfolio";

export const personalInfo: PersonalInfo = {
  name: "Shriniwas Ambad",
  titles: ["Senior Business Analyst", "Product Owner", "Business Consultant"],
  headline: "Turning Business Complexity into Digital Solutions.",
  headlineAccent: "Digital Solutions.",
  yearsOfExperience: "9+",
  heroDescription:
    "I bridge the gap between business vision and technology execution, translating complex business requirements into scalable digital solutions.",
  about: [
    "I'm a Senior Business Analyst and Product Owner with nearly 9 years of experience delivering enterprise applications across Banking, E-commerce, Healthcare, Insurance, Automotive and Agriculture.",
    "My work sits where business strategy meets technology delivery. I elicit and structure requirements, analyse impact across connected systems, document APIs and data mappings, and guide Agile teams from backlog to release — so that what gets built is exactly what the business needs.",
    "I've worked with global banks, healthcare platforms and product companies, partnering with architects, developers, designers and senior stakeholders to turn ambiguity into clear, actionable delivery plans.",
  ],
  email: "ambad.shriniwas@gmail.com",
  location: "Pune, India",
  resumeFile: "resume/Shriniwas_Ambad_Resume.pdf",
  currentRole: { title: "Product Owner Senior", organization: "Quantum Integrators" },
  languages: ["English", "Hindi", "Marathi"],
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Contact", href: "#contact" },
];

export const industries: Industry[] = [
  { name: "Banking", icon: Landmark, description: "Reference data, payments and enterprise banking integrations." },
  { name: "E-commerce", icon: ShoppingCart, description: "Customer-facing product delivery and backlog ownership." },
  { name: "Healthcare", icon: HeartPulse, description: "Clinical trial platforms, registries and data workflows." },
  { name: "Insurance", icon: ShieldCheck, description: "Policy lifecycle, underwriting and risk analysis." },
  { name: "Automotive", icon: Car, description: "Enterprise system integrations and dependency analysis." },
  { name: "Agriculture", icon: Sprout, description: "Process digitisation and business requirement analysis." },
];

export const expertise: Expertise[] = [
  {
    title: "Business Analysis & Requirement Engineering",
    icon: ClipboardList,
    description: "Elicitation workshops, functional specifications, user stories and acceptance criteria that teams can build from.",
  },
  {
    title: "Product Ownership & Backlog Management",
    icon: Layers,
    description: "Prioritising a value-driven backlog, shaping roadmaps and keeping delivery aligned with business outcomes.",
  },
  {
    title: "Stakeholder Management",
    icon: Users,
    description: "Aligning business, technology and leadership around shared goals, trade-offs and release plans.",
  },
  {
    title: "Agile, Scrum & SAFe",
    icon: Workflow,
    description: "Certified Scrum Product Owner and SAFe POPM, running ceremonies and enabling predictable delivery.",
  },
  {
    title: "Process Improvement & Digital Transformation",
    icon: RefreshCcw,
    description: "Gap and root-cause analysis to redesign processes and move manual work onto digital platforms.",
  },
  {
    title: "Data Analysis & SQL",
    icon: Database,
    description: "Querying, validating and interpreting data to inform decisions and verify system behaviour.",
  },
  {
    title: "API Integration & System Analysis",
    icon: Network,
    description: "Documenting API contracts, event flows and data mappings across upstream and downstream systems.",
  },
  {
    title: "UAT & Functional Testing",
    icon: ListChecks,
    description: "Planning SIT and UAT, triaging defects and coordinating release readiness with business users.",
  },
];

export const journey: JourneyMilestone[] = [
  { period: "2013 – 2016", title: "B.E. Electronics Engineering", detail: "Pune University", type: "education" },
  { period: "2019", title: "Certified Scrum Product Owner & SAFe 4 POPM", detail: "Product ownership credentials", type: "certification" },
  { period: "2020 – 2021", title: "Business Analyst Program", detail: "Indian Institute of Management, Indore", type: "education" },
  { period: "2021", title: "Outstanding Performer of the Quarter", detail: "ITC Infotech", type: "award" },
  { period: "2024", title: "Excellence Award", detail: "Deutsche Bank Group", type: "award" },
  { period: "Today", title: "Product Owner Senior", detail: "Quantum Integrators", type: "role" },
];

export const experience: Experience[] = [
  {
    id: "quantum",
    employer: "Quantum Integrators",
    role: "Product Owner Senior · Business Analyst · Project Manager",
    location: "Pune, India",
    current: true,
    domain: "Healthcare platforms",
    clients: [],
    summary: "Owning analysis and delivery for integrated healthcare platforms, from impact analysis through production release.",
    highlights: [
      "Performed impact analysis for enhancements and change requests across integrated healthcare platforms.",
      "Documented APIs, integration flows and business rules with architects and development teams.",
      "Created process flows, data mappings and functional specifications for system integrations.",
      "Managed backlog, sprint tracking and release planning in Azure DevOps; supported SIT, UAT and defect triage.",
    ],
  },
  {
    id: "kpit",
    employer: "KPIT",
    role: "Senior Business Analyst",
    location: "Pune, India",
    clients: [],
    summary: "Defined integration requirements between multiple enterprise systems and supported end-to-end Agile delivery.",
    highlights: [
      "Conducted system dependency and impact analysis for application enhancements.",
      "Defined API requirements and integration specifications between enterprise systems.",
      "Translated business requirements into technical solutions with architects and developers.",
      "Supported sprint planning, testing and release readiness.",
    ],
  },
  {
    id: "deutsche-bank",
    employer: "Deutsche Bank Group",
    role: "Business Functional Analyst",
    location: "Pune, India",
    domain: "Investment Banking · Reference Data",
    clients: [],
    summary: "Worked in the reference data domain, analysing how enterprise reference data flows between upstream and downstream banking applications.",
    highlights: [
      "Delivered reference data integrations involving multiple upstream and downstream applications.",
      "Performed data mapping and interface analysis for enterprise banking systems.",
      "Supported SIT/UAT and coordinated issue resolution across technology teams.",
      "Created functional and technical documentation for enhancements and integrations.",
      "Recognised with the Deutsche Bank Excellence Award (2024).",
    ],
  },
  {
    id: "techspian",
    employer: "Techspian",
    role: "Senior Business Analyst",
    location: "Pune, India",
    clients: [],
    summary: "Owned the product backlog and translated customer needs into deliverable stories for Agile teams.",
    highlights: [
      "Prioritised requirements based on customer and business needs.",
      "Defined user stories, acceptance criteria and functional specifications.",
      "Partnered with UX designers and developers on intuitive user experiences.",
      "Facilitated product discovery workshops and stakeholder alignment sessions.",
    ],
  },
  {
    id: "itc-infotech",
    employer: "ITC Infotech",
    role: "Associate IT Consultant",
    location: "Pune, India",
    clients: [],
    summary: "Converted project blueprints into actionable backlogs and ran Agile ceremonies for delivery teams.",
    highlights: [
      "Created project blueprints and converted them into actionable backlogs.",
      "Hosted Scrum ceremonies and planned delivery strategies.",
      "Conducted gap and root-cause analysis to optimise processes.",
      "Trained clients and end-users on new applications and systems.",
    ],
  },
  {
    id: "infodeals",
    employer: "Infodeals Technologies Pvt Ltd",
    role: "Business Analyst",
    clients: [],
    summary: "Gathered and analysed requirements and bridged communication between business and technical teams.",
    highlights: [
      "Translated business needs into technical specifications.",
      "Performed risk assessments and defined mitigation strategies.",
      "Analysed data with Excel, MySQL and Power BI to support decisions.",
      "Led testing efforts and mentored junior analysts.",
    ],
  },
];

/**
 * Case studies — the text below is a qualitative starting point.
 * Replace it with your own specifics; avoid adding numbers you can't stand behind.
 */
export const caseStudies: CaseStudy[] = [
  {
    id: "reference-data",
    title: "Enterprise Reference Data Management",
    industry: "Investment Banking",
    tags: ["Reference Data", "Data Mapping", "Integration"],
    challenge:
      "Reference data was consumed by many upstream and downstream applications, each with its own formats and expectations. Changes in one place risked breaking consumers elsewhere.",
    role:
      "Business Functional Analyst responsible for interface analysis, data mapping and coordination between technology teams.",
    approach: [
      "Mapped data flows between source systems and consuming applications.",
      "Analysed interfaces to identify dependencies and the impact of each change.",
      "Documented functional and technical requirements for every enhancement.",
    ],
    solution:
      "A documented, consistent integration model for reference data, supported by clear mappings and specifications that teams could build and test against.",
    impact: [
      "Clearer visibility of how reference data changes affect connected systems.",
      "Smoother SIT and UAT cycles through shared documentation.",
      "Faster issue resolution across distributed technology teams.",
    ],
  },
  {
    id: "clinical-registry",
    title: "Clinical Registry & Digital Transformation",
    industry: "Healthcare",
    tags: ["Clinical Trials", "APIs", "GxP"],
    challenge:
      "Clinical trial and registry data moved across several applications, requiring compliant workflows and reliable integration between systems.",
    role:
      "Business and technical analyst gathering requirements, documenting integrations and supporting delivery through UAT and release.",
    approach: [
      "Ran requirement sessions with business and clinical stakeholders.",
      "Created user stories, acceptance criteria and process flows.",
      "Documented API contracts, event flows and data mappings between applications.",
    ],
    solution:
      "An integration platform specification and delivery backlog that connected clinical systems while respecting compliance requirements.",
    impact: [
      "Shared understanding of integration behaviour across business and engineering.",
      "Requirements traceable from business need to test case.",
      "A stronger foundation for compliant clinical data workflows.",
    ],
  },
  {
    id: "data-migration",
    title: "Enterprise Data Migration & Integration",
    industry: "Cross-industry",
    tags: ["Data Migration", "SQL", "Validation"],
    challenge:
      "Moving data between legacy and modern platforms needed accurate transformation rules and confidence that nothing was lost or changed in transit.",
    role:
      "Analyst defining mapping rules, validation checks and integration requirements, and coordinating testing with stakeholders.",
    approach: [
      "Profiled source data to understand structure, quality and gaps.",
      "Defined source-to-target mappings and transformation rules.",
      "Used SQL to validate migrated data and reconcile differences.",
    ],
    solution:
      "A structured migration and integration plan with documented mappings, validation queries and clear acceptance criteria.",
    impact: [
      "Reduced ambiguity in transformation logic for development teams.",
      "Repeatable validation that supported sign-off.",
      "Greater business confidence in migrated data.",
    ],
  },
  {
    id: "workflow-automation",
    title: "Product Workflow Automation & Process Improvement",
    industry: "Product & Operations",
    tags: ["Process Design", "Backlog", "Automation"],
    challenge:
      "Manual, inconsistent workflows slowed teams down and made outcomes hard to track.",
    role:
      "Product Owner owning discovery, backlog prioritisation and alignment between users, designers and developers.",
    approach: [
      "Mapped current-state processes and identified gaps through root-cause analysis.",
      "Facilitated discovery workshops to define the target workflow.",
      "Prioritised a backlog of improvements and shipped them iteratively.",
    ],
    solution:
      "A streamlined, automated workflow delivered incrementally, with clear ownership and visibility at each step.",
    impact: [
      "Less manual effort for day-to-day operations.",
      "More consistent outcomes and easier tracking.",
      "A backlog of further improvements grounded in user feedback.",
    ],
  },
];

export const toolGroups: ToolGroup[] = [
  { title: "Data & Analytics", icon: BarChart3, items: ["SQL", "Python", "PostgreSQL", "MySQL", "Snowflake", "Microsoft Excel", "Power BI"] },
  { title: "Delivery & Collaboration", icon: KanbanSquare, items: ["JIRA", "Confluence", "Azure DevOps", "GitHub", "Jenkins"] },
  { title: "Integration & Testing", icon: Plug, items: ["REST APIs", "Postman", "Swagger", "SQL Developer", "Golden Source"] },
  { title: "Methodologies", icon: Repeat, items: ["Agile", "Scrum", "SAFe"] },
  { title: "Design & AI Productivity", icon: Sparkles, items: ["Figma", "Adobe XD", "ChatGPT", "GitHub Copilot", "Claude"] },
];

export const certifications: Certification[] = [
  { name: "Business Analyst Program", issuer: "Indian Institute of Management, Indore", period: "2020 – 2021", focus: "Business Analysis, Data Science" },
  { name: "Certified Scrum Product Owner (CSPO)", issuer: "Scrum Alliance", period: "2019" },
  { name: "SAFe 4 Product Owner / Product Manager", issuer: "Scaled Agile", period: "2019" },
];

export const awards: Award[] = [
  { name: "Excellence Award", organization: "Deutsche Bank Group", year: "2024" },
  { name: "Pat on Back", organization: "Techspian", year: "2022" },
  { name: "Outstanding Performer of the Quarter", organization: "ITC Infotech", year: "2021" },
];

/** Builds a URL to a file in /public that works on Lovable and on GitHub Pages sub-paths. */
export const publicUrl = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
