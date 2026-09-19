import AnimationLayout from '@/components/layouts/AnimationLayout';
import AboutSection from '@/sections/AboutSection';
import ContactSection from '@/sections/ContactSection';
import ExperienceSection from '@/sections/ExperienceSection';
import Footer from '@/sections/Footer';
import HeroSection from '@/sections/HeroSection';
import ProjectSection from '@/sections/ProjectSection';
import TestimonialSection from '@/sections/TestimonialSection';
import { Toaster } from 'react-hot-toast';

export default function Home() {
  return (
    <AnimationLayout>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ExperienceSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
      <Toaster />
    </AnimationLayout>
  );
}
