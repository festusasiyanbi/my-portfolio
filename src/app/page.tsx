'use client'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import { Montserrat } from "next/font/google";
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Navigator from './components/Navigator';
import { useEffect, useState } from 'react';

const mont = Montserrat({ subsets: ["latin"] });
export default function Home() {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const scrollThreshold = 200;
      setShowComponent(scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <main className={`flex min-h-screen flex-col ${mont.className}`}>
      <Header />
      <About />
      <Projects />
      {/* <Experience /> */}
      <Skills />
      {/* <Testimonials /> */}
      <Contact />
      {showComponent && <Navigator />}
      <Footer />
    </main>
  )
}
