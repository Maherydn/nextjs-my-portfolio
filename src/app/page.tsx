import Header from "./_component/header/Header";
import HeroSection from "./_component/hero/HeroSection";
import TechStackSection from "./_component/techStack/TechStackSection";
import ProjectSection from "./_component/projects/ProjectSection";
import ExperienceSection from "./_component/experience/ExperienceSection";
import ContactSection from "./_component/contact/ContactSection";

export default function Home() {
  return (
    <main className="overflow-hidden w-full">
      <Header />
      <HeroSection />
      <TechStackSection/>
      <ProjectSection/>
      <ExperienceSection/>
      <ContactSection/>
    </main>
  );
}
