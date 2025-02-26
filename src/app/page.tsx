import './_styles/globals.css';
import Hero from "./_components/Hero";
import About from "./_components/About";
import Skills from "./_components/Skills";
import Portfolio from "./_components/Portfolio";
import Contact from "./_components/Contact";
import Intro from './_components/Intro';

export default function Page() {
  return (
    <main >
      <section id="hero">
        <Hero />
      </section>
      <section id="intro">
        <Intro />
      </section>
      {/* <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section> */}
    </main>
  );
}