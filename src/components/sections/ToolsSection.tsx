import { toolGroups } from "@/data/portfolio-data";
import { Section, SectionHeader } from "@/components/Section";
import Reveal from "@/components/Reveal";

export default function ToolsSection() {
  return (
    <Section id="tools" tone="surface">
      <SectionHeader eyebrow="Tools & Technologies" title="The stack I work with every day." />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {toolGroups.map((group, i) => (
          <Reveal
            key={group.title}
            delay={(i % 3) * 70}
            className="rounded-lg border border-border bg-card p-6 shadow-card md:p-7"
          >
            <div className="flex items-center gap-3">
              <group.icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
              <h3 className="font-semibold text-primary">{group.title}</h3>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border px-3 py-1.5 text-sm text-foreground/80 transition-colors hover:border-accent/50 hover:text-primary"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
