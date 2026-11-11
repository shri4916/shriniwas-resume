import { ArrowUpRight, Download, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo, publicUrl } from "@/data/portfolio-data";
import Reveal from "@/components/Reveal";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-xl bg-primary px-6 py-14 text-primary-foreground sm:px-12 md:px-16 md:py-20">
          <div className="relative grid gap-12 md:grid-cols-[1.3fr_1fr] md:items-end">
            <div>
              <p className="eyebrow !text-accent-soft">Contact Me</p>
              <h2 className="mt-5 font-serif text-4xl font-medium leading-tight md:text-5xl text-balance">
                Have a complex initiative in mind? Let's talk.
              </h2>
              <p className="mt-5 max-w-lg text-primary-foreground/75 leading-relaxed">
                I'm open to conversations about business analysis, product ownership and consulting engagements.
              </p>
            </div>
            <div className="space-y-5">
              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center justify-between gap-4 rounded-lg border border-primary-foreground/15 px-5 py-4 transition-colors hover:border-primary-foreground/40 hover:bg-primary-foreground/5"
              >
                <span className="flex items-center gap-3 min-w-0">
                  <Mail className="h-5 w-5 shrink-0 text-accent-soft" />
                  <span className="truncate">{personalInfo.email}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <p className="flex items-center gap-3 px-5 text-primary-foreground/75">
                <MapPin className="h-5 w-5 text-accent-soft" /> {personalInfo.location}
              </p>
              <Button
                asChild
                size="lg"
                className="h-12 w-full bg-primary-foreground text-primary hover:bg-accent-soft"
              >
                <a href={publicUrl(personalInfo.resumeFile)} download>
                  <Download /> Download Resume
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
