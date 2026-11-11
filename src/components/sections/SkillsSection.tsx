import { personalInfo } from "@/data/portfolio-data";
import SplitSection from "@/components/ui/split-section";

/**
 * SkillsSection Component
 * Grid display of skills using sticky split layout
 */
export default function SkillsSection() {
  return (
    <SplitSection title="Skills" id="skills">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {personalInfo.skills.map((skill) => (
          <div
            key={skill}
            className="text-small py-4 px-6 border border-foreground/15 hover:border-foreground/30 transition-colors"
          >
            {skill}
          </div>
        ))}
      </div>
      {personalInfo.languages && personalInfo.languages.length > 0 && (
        <p className="text-body mt-12">
          Languages: {personalInfo.languages.join(", ")}
        </p>
      )}
    </SplitSection>
  );
}
