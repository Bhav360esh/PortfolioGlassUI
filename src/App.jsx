import Navbar from "./components/Navbar";
import About from "./components/About";
import SkillsGlass from "./components/SkillsGlass";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import HeroGlass from "./components/HeroGlass";

function App() {
  return (
    <div className="bg-[#050816] text-white">

      <Navbar />

      {/* 🔥 HERO */}
      <section id="home" className="scroll-mt-24">
        <HeroGlass />
      </section>

      {/* 🔥 SKILLS */}
      <section id="skills" className="scroll-mt-24">
        <SkillsGlass />
      </section>

      {/* 🔥 PROJECTS */}
      <section id="projects" className="scroll-mt-24">
        <Projects />
      </section>

      {/* 🔥 ABOUT */}
      <section id="about" className="scroll-mt-24">
        <About />
      </section>

      {/* 🔥 SERVICES */}
      <section id="services" className="scroll-mt-24">
        <Services />
      </section>

      {/* 🔥 TESTIMONIALS */}
      <section id="testimonials" className="scroll-mt-24">
        <Testimonials />
      </section>

      {/* 🔥 FOOTER */}
      <Footer />

    </div>
  );
}

export default App;