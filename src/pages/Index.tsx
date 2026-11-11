import Layout from "@/components/Layout";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import JourneySection from "@/components/sections/JourneySection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import ToolsSection from "@/components/sections/ToolsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Index() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <JourneySection />
      <ExperienceSection />
      <CaseStudiesSection />
      <ToolsSection />
      <CertificationsSection />
      <ContactSection />
    </Layout>
  );
}
