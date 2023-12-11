import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Parallax from "./Components/Parallax/Parallax";
import Services from "./Components/Services/Services";
import "./app.scss";

const App = () => {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Projects">
        <Parallax />
      </section>
      <section>project1</section>
      <section>project2</section>
      <section>project3</section>
      <section>project4</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
