import { Award, BadgeCheck, Briefcase, GraduationCap } from "lucide-react";
import { journey } from "@/data/portfolio-data";
import type { JourneyMilestone } from "@/types/portfolio";
import { Section, SectionHeader } from "@/components/Section";
import Reveal from "@/components/Reveal";

const typeIcon: Record<JourneyMilestone["type"], typeof Award> = {
  education: GraduationCap,
  certification: BadgeCheck,
  award: Award,
  role: Briefcase,
};

export default function JourneySection() {
  return (
    <Section id="journey">
      <SectionHeader eyebrow="Professional Journey" title="Milestones along the way." />
      <ol className="relative grid gap-8 md:grid-cols-3 lg:grid-cols-6 lg:gap-6">
        <span aria-hidden className="absolute left-0 right-0 top-5 hidden h-px bg-border lg:block" />
        {journey.map((m, i) => {
          const Icon = typeIcon[m.type];
          const isLast = i === journey.length - 1;
          return (
            <Reveal as="li" key={m.title} delay={i * 80} className="relative">
              <span
                className={
                  isLast
                    ? "relative z-10 grid h-10 w-10 place-items-center rounded-full bg-accent text-accent-foreground"
                    : "relative z-10 grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-accent"
                }
              >
                <Icon className="h-4.5 w-4.5" strokeWidth={1.75} />
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-accent">{m.period}</p>
              <p className="mt-2 font-semibold leading-snug text-primary">{m.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{m.detail}</p>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}
