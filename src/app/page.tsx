import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import { Montserrat } from "next/font/google";
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

const mont = Montserrat({ subsets: ["latin"] });
export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col ${mont.className}`}>
      <Header />
      <About />
      <Projects />
      {/* <Experience /> */}
      <Skills />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </main>
  )
}
