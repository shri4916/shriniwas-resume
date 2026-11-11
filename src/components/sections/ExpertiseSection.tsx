import { expertise } from "@/data/portfolio-data";
import { Section, SectionHeader } from "@/components/Section";
import Reveal from "@/components/Reveal";

export default function ExpertiseSection() {
  return (
    <Section id="expertise" tone="surface">
      <SectionHeader
        eyebrow="Core Expertise"
        title="Capabilities that move initiatives from idea to impact."
        intro="A consultant's toolkit built over more than a decade of enterprise delivery — structured analysis, product ownership and hands-on collaboration with engineering."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {expertise.map((item, i) => (
          <Reveal
            key={item.title}
            delay={(i % 4) * 70}
            className="group relative flex flex-col rounded-lg border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
          >
            <div className="flex items-center justify-between">
              <span className="grid h-11 w-11 place-items-center rounded-md bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <item.icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <span className="font-serif text-sm text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="mt-6 text-base font-semibold leading-snug text-primary">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
