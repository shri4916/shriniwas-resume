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
  yearsOfExperience: string;
  heroDescription: string;
  about: string[];
  email: string;
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
  highlights: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  tags: string[];
  challenge: string;
  role: string;
  approach: string[];
  solution: string;
  impact: string[];
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
