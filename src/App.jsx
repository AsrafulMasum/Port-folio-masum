import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education/Education";
import Experience from "./Components/Experiance/Experience";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Parallax from "./Components/Parallax/Parallax";
import Projects from "./Components/Projects/Projects";
import Services from "./Components/Services/Services";
import Skills from "./Components/Skills/Skills";
import "./app.scss";

const App = () => {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section id="About">
        <Education />
      </section>
      <section id="Courses">
        <Experience />
      </section>
      <section className="secParallax" id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section  className="secParallax" id="Projects">
        <Parallax />
      </section>
      <Projects />
      <section id="Contact">
        <Contact />
      </section>
      {/* <section>
        <Footer />
      </section> */}
    </div>
  );
};

export default App;
