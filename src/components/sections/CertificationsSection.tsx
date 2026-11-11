import { Award, BadgeCheck } from "lucide-react";
import { awards, certifications } from "@/data/portfolio-data";
import { Section, SectionHeader } from "@/components/Section";
import Reveal from "@/components/Reveal";

export default function CertificationsSection() {
  return (
    <Section id="certifications">
      <SectionHeader eyebrow="Certifications & Learning" title="Credentials and recognition." />
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div className="space-y-4">
          {certifications.map((c, i) => (
            <Reveal
              key={c.name}
              delay={i * 70}
              className="flex gap-5 rounded-lg border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground">
                <BadgeCheck className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="font-semibold text-primary">{c.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {c.issuer} · {c.period}
                </p>
                {c.focus && <p className="mt-2 text-sm text-accent font-medium">{c.focus}</p>}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="rounded-lg bg-surface p-7 md:p-8">
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
            <Award className="h-4 w-4 text-accent" /> Awards
          </p>
          <ul className="mt-6 divide-y divide-border">
            {awards.map((a) => (
              <li key={a.name} className="flex items-baseline justify-between gap-4 py-4 first:pt-0 last:pb-0">
                <div>
                  <p className="font-semibold text-primary">{a.name}</p>
                  <p className="text-sm text-muted-foreground">{a.organization}</p>
                </div>
                <span className="font-serif text-lg text-accent">{a.year}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
