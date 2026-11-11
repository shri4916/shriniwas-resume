/**
 * Portfolio Data
 * Single source of truth for all portfolio content
 */

import type {
  PersonalInfo,
  Experience,
  Writing,
  Speaking,
  Project,
  Education,
  SocialLink,
  Certification,
  Award,
} from "@/types/portfolio";
import portrait from "@/assets/shriniwas-ambad-portrait.png.asset.json";

// ===== Portfolio Data =====

export const personalInfo: PersonalInfo = {
  name: "Shriniwas Ambad",
  title: "Product Owner / Sr Business Analyst",
  location: { city: "Pune", country: "India" },
  website: "",
  email: "ambad.shriniwas@gmail.com",
  avatar: portrait.url,
  bio: "Senior Technical Analyst / Senior Business Analyst with 9+ years of experience delivering enterprise applications across Healthcare, Banking, Insurance, Automotive, and E-Commerce domains. Expertise in business and technical analysis, requirement elicitation, impact analysis, system integrations, API documentation, data mapping, and Agile delivery.",
  skills: [
    "Business & Technical Analysis",
    "Requirement Gathering & Functional Analysis",
    "User Stories & Acceptance Criteria",
    "Impact & Dependency Analysis",
    "REST APIs & API Documentation",
    "System Integration & Data Mapping",
    "Event-Driven Architecture",
    "Agile Scrum & SAFe",
    "Azure DevOps, Jira & Confluence",
    "SIT, UAT & Defect Management",
    "SQL & Data Analysis",
    "Postman API Testing",
    "Java, Spring Boot & Microservices (basic)",
    "AWS Lambda & MSK (concepts)",
    "Stakeholder & Release Management",
    "AI Tools: ChatGPT, Copilot, Claude",
  ],
  languages: ["English", "Hindi", "Marathi"],
};

export const experience: Experience[] = [
  {
    id: "exp-1",
    company: "Quantum Integrators",
    role: "Product Owner Senior | Business Analyst | Project Manager",
    location: "Pune, India",
    current: true,
    highlights: [
      "Performed impact analysis for enhancements and change requests across integrated healthcare platforms.",
      "Collaborated with architects and development teams to document APIs, integration flows, and business rules.",
      "Created process flows, data mappings, and functional specifications for system integrations.",
      "Supported SIT, UAT, defect triage, and production release activities.",
      "Worked extensively in Azure DevOps for backlog management, sprint tracking, and release planning.",
    ],
  },
  {
    id: "exp-2",
    company: "KPIT",
    role: "Sr Business Analyst",
    location: "Pune, India",
    current: false,
    highlights: [
      "Conducted system dependency and impact analysis for application enhancements.",
      "Defined API requirements and integration specifications between multiple enterprise systems.",
      "Collaborated with architects and developers to translate business requirements into technical solutions.",
      "Supported end-to-end Agile delivery including sprint planning, testing support, and release readiness.",
    ],
  },
  {
    id: "exp-3",
    company: "Deutsche Bank Group",
    role: "Business Functional Analyst",
    location: "Pune, India",
    current: false,
    highlights: [
      "Worked on reference data integrations involving multiple upstream and downstream applications.",
      "Performed data mapping and interface analysis for enterprise banking systems.",
      "Supported SIT/UAT activities and coordinated issue resolution across technology teams.",
      "Created functional and technical documentation for system enhancements and integrations.",
    ],
  },
  {
    id: "exp-4",
    company: "Techspian",
    role: "Senior Business Analyst",
    location: "Pune, India",
    current: false,
    highlights: [
      "Managed product backlog and prioritized requirements based on customer and business needs.",
      "Defined user stories, acceptance criteria, and functional specifications for Agile delivery teams.",
      "Collaborated with UX designers and developers to deliver intuitive user experiences.",
      "Facilitated product discovery workshops and stakeholder alignment sessions.",
    ],
  },
  {
    id: "exp-5",
    company: "ITC Infotech",
    role: "Associate IT Consultant",
    location: "Pune, India",
    current: false,
    highlights: [
      "Created project blueprints and converted them into actionable backlogs.",
      "Planned and executed project management strategies for successful delivery.",
      "Hosted Agile Scrum ceremonies to drive efficient development cycles.",
      "Conducted gap analysis and root cause analysis to optimize processes.",
      "Reviewed UI design documents and test cases for improved usability.",
      "Trained clients and end-users on new applications and systems.",
    ],
  },
  {
    id: "exp-6",
    company: "Infodeals Technologies Pvt Ltd",
    role: "Business Analyst",
    location: "",
    current: false,
    highlights: [
      "Gathered and analyzed requirements, translating business needs into technical specifications.",
      "Facilitated communication between business and technical teams.",
      "Performed risk assessments and defined mitigation strategies.",
      "Conducted data analysis using Excel, MySQL, and Power BI for decision-making.",
      "Managed project scope, stakeholder expectations, and change requests.",
      "Led testing efforts and mentored junior analysts.",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    name: "Clinical Trial Integration Platform (CTIP)",
    highlights: [
      "Gathered and analyzed business and technical requirements for healthcare system integrations.",
      "Created user stories, acceptance criteria, process flows, and functional specifications.",
      "Documented API contracts, event flows, and data mappings between applications.",
    ],
  },
  {
    id: "proj-2",
    name: "Healthcare Data Management System (J&J / Clinical Trials)",
    highlights: [
      "Worked on clinical trial data workflows ensuring compliance with GxP standards.",
      "Supported data analysis, validation, and reporting for healthcare systems.",
    ],
  },
  {
    id: "proj-3",
    name: "MasterCard – Global Installments",
    highlights: [
      "Worked on BNPL card payment solutions within a 4-party payment model, supporting global transaction flows.",
      "Enabled better decision-making through analysis of transaction data and customer payment behavior.",
    ],
  },
  {
    id: "proj-4",
    name: "Insurance PolicyCenter Platform",
    highlights: [
      "Supported implementation of PolicyCenter for policy creation, underwriting, and renewals.",
      "Defined workflows and business rules with business and technical teams, using data insights and automation to improve efficiency.",
    ],
  },
  {
    id: "proj-5",
    name: "Customer Risk & Fraud Analysis (Banking / Insurance)",
    highlights: [
      "Identified fraud patterns and risk indicators using transaction and customer data.",
      "Supported rule-based and AI-assisted fraud detection initiatives with analytics teams.",
    ],
  },
  {
    id: "proj-6",
    name: "Healthcare Data Analysis & Reporting (P-Care)",
    highlights: [
      "Analyzed structured healthcare datasets to identify trends, data gaps, and reporting needs.",
      "Ensured accurate data transformation and validation for business insights.",
    ],
  },
];

export const certifications: Certification[] = [
  { id: "cert-1", name: "IIM Indore – Business Analyst", issuer: "Business Analysis, Data Science", period: "2020 – 2021" },
  { id: "cert-2", name: "SAFe 4 Product Owner / Product Manager", period: "2019 – 2020" },
  { id: "cert-3", name: "Certified Scrum Product Owner (CSPO)", period: "2019 – 2021" },
];

export const awards: Award[] = [
  { id: "award-1", name: "Excellence Award", organization: "Deutsche Bank Group", date: "2024" },
  { id: "award-2", name: "Pat on Back", organization: "Techspian", date: "2022" },
  { id: "award-3", name: "Outstanding Performer of the Quarter", organization: "ITC Infotech", date: "2021" },
];

export const writing: Writing[] = [
  {
    id: "write-1",
    title: "Building Design Systems That Scale",
    publication: "Smashing Magazine",
    date: "2024-01",
    url: "https://example.com/article-1",
    featured: true,
  },
  {
    id: "write-2",
    title: "The Future of Design Tools: AI and Automation",
    publication: "UX Collective",
    date: "2023-11",
    url: "https://example.com/article-2",
    featured: false,
  },
  {
    id: "write-3",
    title: "Accessibility in Design: Beyond Compliance",
    publication: "A List Apart",
    date: "2023-08",
    url: "https://example.com/article-3",
    featured: false,
  },
  {
    id: "write-4",
    title: "Designing for Mobile: Patterns That Work",
    publication: "CSS-Tricks",
    date: "2023-05",
    url: "https://example.com/article-4",
    featured: false,
  },
  {
    id: "write-5",
    title: "From Developer to Designer: My Journey",
    publication: "Medium",
    date: "2023-02",
    url: "https://example.com/article-5",
    featured: false,
  },
];

export const speaking: Speaking[] = [
  {
    id: "speak-1",
    event: "Design Systems Summit 2024",
    date: "2024-06-15",
    location: "San Francisco, CA",
    talk: "Scaling Design Systems Across Multiple Products",
    description: "A deep dive into building and maintaining design systems that work across multiple product teams and platforms.",
    url: "https://example.com/talk-1",
    recordingUrl: "https://example.com/recording-1",
    slidesUrl: "https://example.com/slides-1",
    upcoming: true,
  },
  {
    id: "speak-2",
    event: "UX Week Conference",
    date: "2023-10-20",
    location: "New York, NY",
    talk: "Bridging Design and Development: A Practical Guide",
    description: "Practical strategies for improving collaboration between design and engineering teams.",
    url: "https://example.com/talk-2",
    recordingUrl: "https://example.com/recording-2",
    upcoming: false,
  },
  {
    id: "speak-3",
    event: "Figma Config",
    date: "2023-06-21",
    location: "Virtual",
    talk: "Building Accessible Components in Figma",
    description: "Learn how to design accessible components from the ground up using Figma.",
    url: "https://example.com/talk-3",
    recordingUrl: "https://example.com/recording-3",
    slidesUrl: "https://example.com/slides-3",
    upcoming: false,
  },
  {
    id: "speak-4",
    event: "Local Design Meetup",
    date: "2023-03-15",
    location: "Austin, TX",
    talk: "Career Growth for Designers: From IC to Leadership",
    description: "Tips and insights on transitioning from individual contributor to design leadership roles.",
    upcoming: false,
  },
];

export const education: Education[] = [
  {
    id: "edu-1",
    institution: "Indian Institute of Management, Indore",
    degree: "Business Analyst Program",
    field: "",
    startYear: "2020",
    endYear: "2021",
    location: "Indore, India",
  },
  {
    id: "edu-2",
    institution: "Pune University",
    degree: "Bachelor of Engineering",
    field: "Electronics Engineering",
    startYear: "2013",
    endYear: "2016",
    location: "Nashik, India",
  },
];

export const socialLinks: SocialLink[] = [];
