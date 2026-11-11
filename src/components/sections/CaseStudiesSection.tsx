import { ArrowUpRight, Compass, Layers, Target, TrendingUp, UserCog } from "lucide-react";
import { caseStudies } from "@/data/portfolio-data";
import type { CaseStudy } from "@/types/portfolio";
import { Section, SectionHeader } from "@/components/Section";
import Reveal from "@/components/Reveal";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

function CaseStudyBody({ study }: { study: CaseStudy }) {
  const blocks = [
    { label: "Business Challenge", icon: Target, content: <p>{study.challenge}</p> },
    { label: "My Role", icon: UserCog, content: <p>{study.role}</p> },
    {
      label: "Approach",
      icon: Compass,
      content: (
        <ul className="list-disc space-y-1.5 pl-5 marker:text-accent">
          {study.approach.map((a) => <li key={a}>{a}</li>)}
        </ul>
      ),
    },
    { label: "Solution", icon: Layers, content: <p>{study.solution}</p> },
    {
      label: "Business Impact",
      icon: TrendingUp,
      content: (
        <ul className="list-disc space-y-1.5 pl-5 marker:text-accent">
          {study.impact.map((a) => <li key={a}>{a}</li>)}
        </ul>
      ),
    },
  ];
  return (
    <div className="mt-2 space-y-6">
      {blocks.map((b) => (
        <div key={b.label} className="grid items-start gap-2 sm:grid-cols-[11rem_1fr] sm:gap-6">
          <p className="flex items-center gap-2 text-sm font-semibold text-primary">
            <b.icon className="h-4 w-4 text-accent" /> {b.label}
          </p>
          <div className="text-sm leading-relaxed text-muted-foreground">{b.content}</div>
        </div>
      ))}
    </div>
  );
}

export default function CaseStudiesSection() {
  return (
    <Section id="case-studies">
      <SectionHeader
        eyebrow="Case Studies"
        title="Selected engagements."
        intro="How I approach complex business problems — from understanding the challenge to delivering a solution teams can build on."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {caseStudies.map((study, i) => (
          <Reveal key={study.id} delay={(i % 2) * 90}>
            <Dialog>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="group flex h-full w-full flex-col rounded-lg border border-border bg-card p-7 text-left shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:p-9"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">{study.industry}</span>
                    <span className="font-serif text-2xl text-border transition-colors group-hover:text-accent/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 font-serif text-2xl font-medium leading-snug text-primary md:text-[1.7rem]">
                    {study.title}
                  </h3>
                  <p className="mt-4 text-sm font-semibold text-primary-soft">Business Challenge</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground line-clamp-3">{study.challenge}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {study.tags.map((t) => (
                      <span key={t} className="rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-primary-soft">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="mt-auto pt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Read case study
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-accent" />
                  </span>
                </button>
              </DialogTrigger>
              <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto p-6 sm:p-10">
                <DialogHeader className="text-left">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">{study.industry}</p>
                  <DialogTitle className="font-serif text-3xl font-medium text-primary">{study.title}</DialogTitle>
                  <DialogDescription className="sr-only">Case study details for {study.title}</DialogDescription>
                </DialogHeader>
                <CaseStudyBody study={study} />
              </DialogContent>
            </Dialog>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
