'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTopButton from '@/components/ScrollToTopButton';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation
      once: true, // Whether animation should happen only once
      easing: 'ease-in-out', // Animation easing
    });

    // Reinitialize AOS when the component mounts
    const handleResize = () => {
      AOS.refresh();
    };

    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0 bg-gray-100 dark:bg-gray-900">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <ScrollToTopButton />
      <Footer />
    </main>
  );
}
