import Test from "./Test";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
<<<<<<< Updated upstream
=======
import Contact from "./components/contact/Contact";
import StarsBackground from './StarsBackground';






>>>>>>> Stashed changes

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
<<<<<<< Updated upstream
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
      {/* Framer Motion Crash Course */}
      {/* <Test/>
    <Test/> */}
    </div>
  );
=======
      
    
    <section id="Services"><Parallax type="services"/></section>
    <section>
    <Services/></section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <StarsBackground />
    <Portfolio/>
    <section id="Contact"><Contact/></section>
    
    </div>;
>>>>>>> Stashed changes
};

export default App;
