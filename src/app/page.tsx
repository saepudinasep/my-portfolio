import AboutSection from '@/sections/AboutSection';
import ContactSection from '@/sections/ContactSection';
import ExperienceSection from '@/sections/ExperienceSection';
import HeroSection from '@/sections/HeroSection';
import ProjectSection from '@/sections/ProjectSection';
import TestimonialSection from '@/sections/TestimonialSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ExperienceSection />
      <TestimonialSection />
      <ContactSection />
    </>
  );
}
