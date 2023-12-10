import Navbar from "./Components/Navbar/Navbar";
import "./app.scss";

const App = () => {
  return (
    <div>
      <section id="Home">
        <Navbar />
      </section>
      <section id="Services">parallax</section>
      <section>Services</section>
      <section id="Projects">parallax</section>
      <section>project1</section>
      <section>project2</section>
      <section>project3</section>
      <section>project4</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
