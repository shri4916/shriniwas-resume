/**
 * Portfolio content types.
 * All editable content lives in src/data/portfolio-data.ts.
 */
import type { LucideIcon } from "lucide-react";

export interface PersonalInfo {
  name: string;
  /** Short line shown above the hero headline and in the navigation. */
  titles: string[];
  headline: string;
  /** Part of the headline rendered in the accent color (must appear inside `headline`). */
  headlineAccent?: string;
  /** Short positioning line under the titles, e.g. ["Enterprise Solutions", "Product Delivery"]. */
  positioning: string[];
  yearsOfExperience: string;
  heroDescription: string;
  about: string[];
  email: string;
  phone: string;
  /** Set to false to hide the phone number everywhere on the site. */
  showPhone: boolean;
  location: string;
  /** Path to the resume inside /public (served relative to the site base). */
  resumeFile: string;
  currentRole: { title: string; organization: string };
  languages: string[];
}

export interface Industry {
  name: string;
  icon: LucideIcon;
  description: string;
}

export interface Expertise {
  title: string;
  icon: LucideIcon;
  description: string;
}

export interface JourneyMilestone {
  period: string;
  title: string;
  detail: string;
  type: "education" | "certification" | "award" | "role";
}

export interface Experience {
  id: string;
  /** The company that employed you. */
  employer: string;
  role: string;
  location?: string;
  /** Free text, e.g. "2022 – 2024". Leave empty to hide. */
  period?: string;
  current?: boolean;
  /** Domain or business area, e.g. "Investment Banking · Reference Data". */
  domain?: string;
  /** Client organisations served while at this employer. Shown separately from the employer. */
  clients?: string[];
  summary: string;
  /** Areas of responsibility shown as tags (optional). */
  focusAreas?: string[];
  /** Achievement-oriented statements. Keep them factual — no invented numbers. */
  highlights: string[];
}

export interface CaseDiagramStage {
  label: string;
  nodes: string[];
  /** Emphasise this stage (usually the system or step at the centre of the work). */
  highlight?: boolean;
}

export interface CaseDiagram {
  title: string;
  stages: CaseDiagramStage[];
  caption?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  tags: string[];
  /** One or two sentences shown on the card. */
  summary: string;
  challenge: string;
  context: string;
  role: string;
  responsibilities: string[];
  approach: string[];
  architecture: string[];
  diagram: CaseDiagram;
  solution: string[];
  outcomes: string[];
  /**
   * Placeholders for results you still need to confirm (e.g. a measured improvement).
   * Shown only in the editor preview, never on the live site. Move an item into
   * `outcomes` once it is verified.
   */
  outcomesToVerify?: string[];
}

export interface ToolGroup {
  title: string;
  icon: LucideIcon;
  items: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  period: string;
  focus?: string;
}

export interface Award {
  name: string;
  organization: string;
  year: string;
}

export interface NavLink {
  label: string;
  href: string;
}
