import { Mail, MapPin, Languages, Phone } from "lucide-react";
import { industries, personalInfo } from "@/data/portfolio-data";
import { Section, SectionHeader } from "@/components/Section";
import Reveal from "@/components/Reveal";

export default function AboutSection() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div>
          <SectionHeader eyebrow="About Me" title="Where business vision meets technology delivery." className="mb-8 md:mb-10" />
          <Reveal>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-accent" /> {personalInfo.location}
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <a href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`} className="hover:text-primary transition-colors">
                  {personalInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Languages className="h-4 w-4 text-accent" /> {personalInfo.languages.join(" · ")}
              </li>
            </ul>
          </Reveal>
        </div>
        <Reveal className="space-y-5 text-lg leading-relaxed text-foreground/85 lg:pt-10">
          {personalInfo.about.map((p, i) => (
            <p key={i} className={i === 0 ? "text-xl text-primary font-medium leading-relaxed" : undefined}>
              {p}
            </p>
          ))}
        </Reveal>
      </div>

      <div id="industries" className="mt-20 md:mt-24">
        <Reveal>
          <p className="eyebrow">Industry Experience</p>
        </Reveal>
        <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 60} className="group bg-card p-6 md:p-8 transition-colors hover:bg-surface">
              <ind.icon className="h-6 w-6 text-accent transition-transform duration-300 group-hover:-translate-y-0.5" strokeWidth={1.6} />
              <h3 className="mt-5 text-lg font-semibold text-primary">{ind.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ind.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
