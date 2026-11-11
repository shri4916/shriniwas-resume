import { projects } from "@/data/portfolio-data";
import SplitSection from "@/components/ui/split-section";

export default function ProjectsSection() {
  return (
    <SplitSection title="Projects" id="projects">
      <div className="space-y-16 md:space-y-20">
        {projects.map((project, index) => (
          <div key={project.id}>
            {index > 0 && <hr className="border-t border-foreground/15 mb-16 md:mb-20" />}
            <div className="space-y-3">
              <h3 className="text-large leading-tight">{project.name}</h3>
              <ul className="text-body leading-relaxed mt-6 space-y-3 list-disc pl-5">
                {project.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </SplitSection>
  );
}
