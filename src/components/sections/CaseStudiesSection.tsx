import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/portfolio-data";
import { Section, SectionHeader } from "@/components/Section";
import Reveal from "@/components/Reveal";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import CaseStudyDetail from "@/components/case-study/CaseStudyDetail";

export default function CaseStudiesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const total = caseStudies.length;

  const go = (delta: number) => {
    setOpenIndex((i) => (i === null ? i : (i + delta + total) % total));
    scrollRef.current?.scrollTo({ top: 0 });
  };

  return (
    <Section id="case-studies">
      <SectionHeader
        eyebrow="Case Studies"
        title="Selected engagements."
        intro="How I approach complex business problems — from understanding the challenge to delivering a solution teams can build on. Details are anonymised to respect client confidentiality."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {caseStudies.map((study, i) => (
          <Reveal key={study.id} delay={(i % 2) * 90}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-haspopup="dialog"
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
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{study.summary}</p>

              {/* mini flow preview */}
              <div aria-hidden className="mt-6 flex items-center gap-1.5">
                {study.diagram.stages.map((s, si) => (
                  <span key={s.label} className="flex flex-1 items-center gap-1.5">
                    <span
                      className={
                        "h-1.5 flex-1 rounded-full transition-colors " +
                        (s.highlight ? "bg-primary" : "bg-surface-strong group-hover:bg-accent/40")
                      }
                    />
                    {si < study.diagram.stages.length - 1 && <span className="h-1 w-1 rounded-full bg-border" />}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {study.tags.map((t) => (
                  <span key={t} className="rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-primary-soft">
                    {t}
                  </span>
                ))}
              </div>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-8 text-sm font-semibold text-primary">
                Read case study
                <ArrowUpRight className="h-4 w-4 text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <Dialog open={openIndex !== null} onOpenChange={(o) => !o && setOpenIndex(null)}>
        <DialogContent
          ref={scrollRef}
          className="max-h-[92vh] max-w-4xl gap-0 overflow-y-auto p-0 sm:rounded-xl"
        >
          {openIndex !== null && (
            <CaseStudyDetail
              study={caseStudies[openIndex]}
              index={openIndex}
              total={total}
              onPrev={() => go(-1)}
              onNext={() => go(1)}
            />
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
