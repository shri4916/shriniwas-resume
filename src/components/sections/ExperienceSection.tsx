import { Building2, Check, MapPin } from "lucide-react";
import { experience } from "@/data/portfolio-data";
import { Section, SectionHeader } from "@/components/Section";
import Reveal from "@/components/Reveal";

export default function ExperienceSection() {
  return (
    <Section id="experience" tone="surface">
      <SectionHeader
        eyebrow="Professional Experience"
        title="Enterprise delivery across banks, platforms and product teams."
      />
      <ol className="relative">
        <span aria-hidden className="absolute left-[7px] top-2 bottom-2 w-px bg-border md:left-[calc(16rem+7px)]" />
        {experience.map((job, i) => (
          <Reveal as="li" key={job.id} delay={60} className="relative grid gap-4 pb-12 last:pb-0 md:grid-cols-[16rem_1fr] md:gap-0">
            {/* left meta column */}
            <div className="pl-8 md:pl-0 md:pr-10 md:text-right">
              <p className="text-base font-semibold text-primary">{job.employer}</p>
              {(job.period || job.current) && (
                <p className="mt-1 text-sm text-muted-foreground">{job.period ?? "Current role"}</p>
              )}
              {job.location && (
                <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" /> {job.location}
                </p>
              )}
            </div>

            {/* dot */}
            <span
              aria-hidden
              className={
                "absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 md:left-64 " +
                (i === 0 ? "border-accent bg-accent" : "border-accent bg-background")
              }
            />

            {/* card */}
            <div className="pl-8 md:pl-10">
              <div className="rounded-lg border border-border bg-card p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold leading-snug text-primary md:text-xl">{job.role}</h3>
                  {job.current && (
                    <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">Current</span>
                  )}
                </div>

                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-surface px-2.5 py-1 font-medium text-primary-soft">
                    <Building2 className="h-3.5 w-3.5" /> Employer: {job.employer}
                  </span>
                  {job.domain && (
                    <span className="rounded-md bg-surface px-2.5 py-1 font-medium text-primary-soft">{job.domain}</span>
                  )}
                  {job.clients?.map((c) => (
                    <span key={c} className="rounded-md border border-accent/30 px-2.5 py-1 font-medium text-accent">
                      Client: {c}
                    </span>
                  ))}
                </div>

                <p className="mt-5 leading-relaxed text-foreground/85">{job.summary}</p>
                <ul className="mt-5 space-y-2.5">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
