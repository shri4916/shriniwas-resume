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
  titles: ["Senior Business Analyst", "Product Owner"],
  headline: "Turning Complex Business Challenges into Scalable Technology Solutions.",
  headlineAccent: "Scalable Technology Solutions.",
  positioning: ["Enterprise Solutions", "Product Delivery", "Digital Transformation"],
  yearsOfExperience: "10+",
  heroDescription:
    "I am a Senior Business Analyst and Product Owner with 10+ years of experience bridging business strategy and technology execution. I specialise in enterprise applications, product delivery, business transformation, system integrations and stakeholder management.",
  about: [
    "I'm a Senior Business Analyst and Product Owner with 10+ years of experience delivering enterprise technology solutions across Banking, E-commerce, Healthcare, Insurance, Automotive and Agriculture.",
    "My core strength is translating complex business requirements into clear technical specifications — user stories, acceptance criteria, process flows, API contracts and data mappings — that engineering teams can build and test against with confidence.",
    "I coordinate cross-functional teams of architects, developers, testers, designers and business stakeholders, guiding initiatives from discovery and backlog prioritisation through SIT, UAT and release, so that what gets delivered is exactly what the business needs.",
  ],
  email: "ambad.shriniwas@gmail.com",
  phone: "+91 7387383463",
  showPhone: true,
  location: "Pune, India",
  resumeFile: "resume/Shriniwas_Ambad_Resume.pdf",
  currentRole: { title: "Senior Business Analyst / Product Owner", organization: "Quantum Integrators" },
  languages: ["English", "Hindi", "Marathi"],
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Skills", href: "#tools" },
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
  { period: "Today", title: "Senior Business Analyst / Product Owner", detail: "Quantum Integrators", type: "role" },
];

export const experience: Experience[] = [
  {
    id: "quantum",
    employer: "Quantum Integrators",
    role: "Senior Business Analyst / Product Owner",
    location: "Pune, India",
    current: true,
    domain: "Healthcare platforms",
    clients: [],
    summary:
      "Leading business analysis and product delivery for integrated healthcare platforms — from requirement discovery and impact analysis through SIT, UAT and production release.",
    focusAreas: [
      "Business analysis & requirement engineering",
      "Backlog management & prioritisation",
      "Stakeholder management",
      "System impact analysis",
      "API & enterprise integration analysis",
      "Agile delivery & sprint management",
      "SIT, UAT & release coordination",
    ],
    highlights: [
      "Brought clarity to enhancements and change requests by running system impact analysis across integrated healthcare platforms before build began.",
      "Gave architects and developers a single shared reference by documenting APIs, integration flows and business rules.",
      "Turned business needs into build-ready process flows, data mappings and functional specifications for system integrations.",
      "Kept delivery on track by owning backlog prioritisation, sprint tracking and release planning in Azure DevOps.",
      "Coordinated SIT, UAT and defect triage with business users to bring releases through to sign-off.",
    ],
  },
  {
    id: "kpit",
    employer: "KPIT",
    role: "Senior Business Analyst",
    location: "Pune, India",
    clients: [],
    summary: "Defined integration requirements between enterprise systems and supported end-to-end Agile delivery.",
    highlights: [
      "Surfaced cross-system dependencies early through impact analysis, so enhancements were planned with known risks.",
      "Defined API requirements and integration specifications connecting multiple enterprise systems.",
      "Bridged business and engineering by shaping technical solutions together with architects and developers.",
      "Strengthened release readiness through hands-on support for sprint planning and testing.",
    ],
  },
  {
    id: "deutsche-bank",
    employer: "Deutsche Bank Group",
    role: "Business Functional Analyst",
    location: "Pune, India",
    domain: "Investment Banking · Reference Data",
    clients: [],
    summary:
      "Worked in the reference data domain, analysing how enterprise reference data flows between upstream and downstream banking applications.",
    highlights: [
      "Delivered reference data integrations spanning multiple upstream and downstream banking applications.",
      "Established clear data mappings and interface analysis for enterprise banking systems.",
      "Kept SIT and UAT moving by coordinating issue resolution across distributed technology teams.",
      "Produced functional and technical documentation that teams could build and test against.",
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
      "Prioritised the backlog around customer and business value.",
      "Wrote user stories, acceptance criteria and functional specifications that gave teams a clear definition of done.",
      "Partnered with UX designers and developers to shape intuitive user experiences.",
      "Aligned stakeholders through product discovery workshops.",
      "Recognised with the Pat on Back award (2022).",
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
      "Turned project blueprints into actionable, prioritised backlogs.",
      "Ran Scrum ceremonies and shaped delivery strategy for project teams.",
      "Identified process improvements through gap and root-cause analysis.",
      "Enabled adoption of new applications by training clients and end users.",
      "Named Outstanding Performer of the Quarter (2021).",
    ],
  },
  {
    id: "infodeals",
    employer: "Infodeals Technologies Pvt Ltd",
    role: "Business Analyst",
    clients: [],
    summary: "Gathered and analysed requirements and bridged communication between business and technical teams.",
    highlights: [
      "Translated business needs into technical specifications developers could act on.",
      "Anticipated delivery risks through risk assessments and mitigation planning.",
      "Supported decisions with data analysis in Excel, MySQL and Power BI.",
      "Led testing efforts and mentored junior analysts.",
    ],
  },
];

/**
 * Case studies — qualitative and anonymised.
 * No client names, internal project names, patient data or proprietary details.
 * Put measured results you still need to confirm in `outcomesToVerify`:
 * they show in the editor preview only, and never on the live site.
 */
export const caseStudies: CaseStudy[] = [
  {
    id: "reference-data",
    title: "Enterprise Reference Data Management",
    industry: "Investment Banking",
    tags: ["Reference Data", "Data Mapping", "Interface Analysis", "SIT / UAT"],
    summary:
      "Making reference data changes safer to analyse, build and test across many dependent banking applications.",
    challenge:
      "Reference data was consumed by many upstream and downstream applications, each with its own formats, schedules and expectations. A change at the source could ripple into consuming systems, which made enhancements slow to analyse and hard to test with confidence.",
    context:
      "An engagement within the reference data domain of a global investment bank, working alongside the teams that run the central reference data platform and the applications that depend on it. System and data-set names are kept generic for confidentiality.",
    role: "Business Functional Analyst",
    responsibilities: [
      "Interface analysis and attribute-level data mapping.",
      "Impact analysis of each change on consuming applications.",
      "Functional and technical documentation for enhancements and integrations.",
      "SIT and UAT support, and issue coordination across technology teams.",
    ],
    approach: [
      "Built an inventory of interfaces and data flows from source, through the platform, to each consumer.",
      "Defined source-to-target mappings with clear transformation and validation rules.",
      "Assessed the impact of every change on downstream consumers before build.",
      "Linked requirements to test scenarios so SIT and UAT could verify them directly.",
    ],
    architecture: [
      "A central reference data platform acting as the golden source for consuming applications.",
      "Inbound feeds from external data vendors and internal systems, normalised before distribution.",
      "Outbound interfaces with different formats and delivery schedules for each consumer.",
      "Validation and exception handling to stop bad data from spreading downstream.",
    ],
    diagram: {
      title: "Reference data flow",
      stages: [
        { label: "Sources", nodes: ["External data vendors", "Internal source systems"] },
        { label: "Reference data platform", nodes: ["Validation & enrichment", "Golden copy"], highlight: true },
        { label: "Distribution", nodes: ["Interfaces & feeds", "Exception handling"] },
        { label: "Consumers", nodes: ["Downstream banking applications", "Reporting"] },
      ],
      caption: "Simplified, generic view — not a representation of any specific system.",
    },
    solution: [
      "A documented, consistent integration model for reference data.",
      "Shared mapping specifications that development and test teams worked from.",
      "A repeatable impact-analysis step for every enhancement request.",
    ],
    outcomes: [
      "Clearer visibility of how reference data changes affect connected systems.",
      "Smoother SIT and UAT cycles through shared, traceable documentation.",
      "Faster coordination of issue resolution across distributed teams.",
    ],
    outcomesToVerify: [
      "Add a verified result, e.g. change in defects found during UAT.",
      "Add a verified result, e.g. time taken to complete impact analysis.",
    ],
  },
  {
    id: "clinical-registry",
    title: "Clinical Registry & Digital Transformation",
    industry: "Healthcare",
    tags: ["Clinical Data", "APIs", "Compliance", "Agile Delivery"],
    summary:
      "Connecting clinical and registry applications through documented integrations and compliant, traceable workflows.",
    challenge:
      "Clinical trial and registry data moved across several applications, and workflows had to stay compliant and auditable. Integration behaviour was not always documented in one place, which made enhancements harder to plan and verify.",
    context:
      "Delivery for integrated healthcare platforms, working with clinical and business stakeholders, architects and development teams. No patient information or client-specific details are included here.",
    role: "Senior Business Analyst / Product Owner",
    responsibilities: [
      "Requirement discovery with business and clinical stakeholders.",
      "Backlog ownership, sprint tracking and release planning.",
      "API, event-flow and data-mapping documentation.",
      "SIT, UAT and defect triage through to release sign-off.",
    ],
    approach: [
      "Ran requirement sessions to capture clinical workflows and business rules.",
      "Wrote user stories with acceptance criteria and supporting process flows.",
      "Documented API contracts, event flows and data mappings between applications.",
      "Kept requirements traceable from business need through to test cases.",
    ],
    architecture: [
      "Applications exchanging data through APIs and event-based integrations.",
      "Validation rules applied as data enters the registry.",
      "Audit trails and access control to support compliance expectations.",
      "Test data handled without real patient information.",
    ],
    diagram: {
      title: "Clinical data integration",
      stages: [
        { label: "Data capture", nodes: ["Clinical applications", "Registry forms"] },
        { label: "Integration layer", nodes: ["APIs", "Event flows"], highlight: true },
        { label: "Registry platform", nodes: ["Validation rules", "Workflow & audit trail"] },
        { label: "Consumers", nodes: ["Reporting", "Connected clinical systems"] },
      ],
      caption: "Simplified, generic view — not a representation of any specific system.",
    },
    solution: [
      "An integration specification connecting clinical systems in line with compliance requirements.",
      "A prioritised delivery backlog with clear acceptance criteria.",
      "Structured SIT and UAT with business users ahead of each release.",
    ],
    outcomes: [
      "Shared understanding of integration behaviour across business and engineering.",
      "Requirements traceable from business need to test case.",
      "A stronger foundation for compliant clinical data workflows.",
    ],
    outcomesToVerify: [
      "Add a verified result, e.g. number of integrations delivered.",
      "Add a verified result, e.g. change in release frequency or defect leakage.",
    ],
  },
  {
    id: "data-migration",
    title: "Enterprise Data Migration & Integration",
    industry: "Cross-industry",
    tags: ["Data Migration", "SQL", "Reconciliation", "Integration"],
    summary:
      "Moving data from legacy to modern platforms with documented rules and SQL-based proof that nothing was lost.",
    challenge:
      "Moving data between legacy and modern platforms needed accurate transformation rules, and the business needed confidence that nothing was lost or changed along the way.",
    context:
      "Migration and integration work between existing systems and new target platforms, with business owners, data teams and developers involved in sign-off.",
    role: "Business Analyst",
    responsibilities: [
      "Source data profiling and gap analysis.",
      "Source-to-target mapping and transformation rules.",
      "SQL-based validation and reconciliation.",
      "Test coordination and business sign-off.",
    ],
    approach: [
      "Profiled source data to understand structure, quality and gaps.",
      "Defined source-to-target mappings and transformation rules with data owners.",
      "Wrote SQL validation queries to reconcile record counts and key fields.",
      "Agreed clear acceptance criteria with the business before cutover.",
    ],
    architecture: [
      "Staged extract, transform and load steps between source and target.",
      "Mapping rules held in one specification shared with developers and testers.",
      "Reconciliation queries run after each load to confirm completeness.",
      "Cutover and fallback steps planned alongside the business.",
    ],
    diagram: {
      title: "Migration pipeline",
      stages: [
        { label: "Legacy source", nodes: ["Source tables", "Data profiling"] },
        { label: "Transform", nodes: ["Mapping rules", "Data cleansing"], highlight: true },
        { label: "Target platform", nodes: ["Load", "Integration"] },
        { label: "Validate", nodes: ["SQL reconciliation", "Business sign-off"] },
      ],
      caption: "Simplified, generic view — not a representation of any specific system.",
    },
    solution: [
      "A structured migration plan with documented mappings and transformation rules.",
      "Repeatable SQL validation queries for each migration cycle.",
      "Clear acceptance criteria that supported business sign-off.",
    ],
    outcomes: [
      "Less ambiguity in transformation logic for development teams.",
      "Repeatable validation that supported sign-off.",
      "Greater business confidence in migrated data.",
    ],
    outcomesToVerify: [
      "Add a verified result, e.g. volume of records or tables migrated.",
      "Add a verified result, e.g. reconciliation match rate at cutover.",
    ],
  },
  {
    id: "workflow-automation",
    title: "Product Workflow Automation & Process Improvement",
    industry: "Product & Operations",
    tags: ["Process Design", "Discovery", "Backlog", "Automation"],
    summary:
      "Replacing manual, inconsistent workflows with a streamlined process delivered in small, prioritised steps.",
    challenge:
      "Manual, inconsistent workflows slowed teams down and made outcomes hard to track. Hand-offs between people relied on email and spreadsheets.",
    context:
      "Product delivery with business users, UX designers and developers, improving an operational workflow step by step.",
    role: "Product Owner",
    responsibilities: [
      "Product discovery and current-state process mapping.",
      "Backlog ownership and prioritisation.",
      "Alignment between users, designers and developers.",
      "Acceptance of delivered increments.",
    ],
    approach: [
      "Mapped current-state processes and found gaps through root-cause analysis.",
      "Ran discovery workshops to define the target workflow with users.",
      "Broke the target state into a prioritised backlog of small improvements.",
      "Shipped iteratively and refined priorities based on user feedback.",
    ],
    architecture: [
      "Business rules made explicit so they could be automated consistently.",
      "Automated routing and notifications in place of manual hand-offs.",
      "Status tracking at each step for visibility.",
      "Changes delivered incrementally to limit disruption.",
    ],
    diagram: {
      title: "From manual to automated",
      stages: [
        { label: "Current state", nodes: ["Manual hand-offs", "Spreadsheet tracking"] },
        { label: "Discovery", nodes: ["Root-cause analysis", "Target workflow"] },
        { label: "Automated workflow", nodes: ["Business rules", "Routing & notifications"], highlight: true },
        { label: "Visibility", nodes: ["Status tracking", "Feedback loop"] },
      ],
      caption: "Simplified, generic view — not a representation of any specific system.",
    },
    solution: [
      "A streamlined, automated workflow delivered incrementally.",
      "Clear ownership and visibility at each step.",
      "A backlog of further improvements grounded in user feedback.",
    ],
    outcomes: [
      "Less manual effort in day-to-day operations.",
      "More consistent outcomes and easier tracking.",
      "A continuous improvement loop driven by users.",
    ],
    outcomesToVerify: [
      "Add a verified result, e.g. reduction in manual steps or turnaround time.",
    ],
  },
];

export const toolGroups: ToolGroup[] = [
  { title: "Data & Analytics", icon: BarChart3, items: ["SQL", "Python", "PostgreSQL", "MySQL", "Snowflake", "Excel", "Power BI"] },
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
