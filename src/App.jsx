import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />


      <main>
        <Hero />

        <section className="h-screen flex items-center justify-center">
          <h1 className="text-5xl font-bold"> Maxime <span className="text-rose-500">Goëffier</span></h1>
        </section>

        <section id="about" className="h-screen flex items-center justify-center">
          <h2 className="text-5xl font-bold">À propos</h2>
        </section>

        <section id="skills" className="h-screen flex items-center justify-center">
          <h2 className="text-5xl font-bold">Compétences</h2>
        </section>

        <section id="projects" className="h-screen flex items-center justify-center">
          <h2 className="text-5xl font-bold">Projets</h2>
        </section>

        <section id="parcours" className="h-screen flex items-center justify-center">
          <h2 className="text-5xl font-bold">Parcours</h2>
        </section>

        <section id="contact" className="h-screen flex items-center justify-center">
          <h2 className="text-5xl font-bold">Contact</h2>
        </section>
      </main>
    </div>
  );
}

export default App;