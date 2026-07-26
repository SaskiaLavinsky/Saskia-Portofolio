import Splash_screen from "./assets/components/Splash_screen"
import Navbar from "./assets/components/Navbar"
import Hero from "./assets/components/Hero";
import About from "./assets/components/About";
import Education from "./assets/components/Education";
import Experience from "./assets/components/Experience";
import Projects from "./assets/components/Projects";
import Skills from "./assets/components/Skills";
import Contact from "./assets/components/Contact";

function App() {

  return (
    <>
    <Splash_screen/>
      <Navbar />
      <Hero/>
      <About/>
      <Education/>
      <Experience/>
      <Projects/>
      <Skills/>
      <Contact/>
    </>
  );

}

export default App;