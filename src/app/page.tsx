import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <main className="bg-white dark:bg-black min-h-screen text-slate-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
