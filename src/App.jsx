import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
/* import MagicBento from "./components/MagicBento"; */

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        {/* <MagicBento /> */}
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;