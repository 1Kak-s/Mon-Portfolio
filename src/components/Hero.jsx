function Hero() {

    const scrollTo = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" })
    }

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">

            {/* contenu principal */}
            <div className="text-center z-10 px-6">

            {/* Badge "En recherche alternance" */}

            <div className="mb-6">
                <span className="px-4 py-2 bg-rose-500/10 border border-rose-500/30 rounded-full text-rose-400 text-sm font-medium"
                >En recherche d'alternance
                </span>
            </div>

            {/* Nom en grand */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
                <span className="text-white block">Maxime</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-rose-600 block">Goëffier</span>
            </h1>

            {/* Sous-titre */}
            <p className="text-xl md:text-2-xl text-gray-400 mb-4 font-light"
            >Développeur Web & Programmation Logicielle
            </p>

            {/* tags des techno */}

            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {["React", "Node.js", "Python", "Unity VR", "NestJS", "TailwindCSS", "n8n"].map((tech) => (
                    <span 
                    key={tech}
                    className="px-3 py-1 bg-slate-700/50 rounded-full text-gray-300 text-sm hover:bg-rose-500/20 hover:text-rose-300 transition-all duration-300">
                        {tech}
                    </span>
                ))}
            </div>

              {/* Boutons Call To Action */}
        <div className="flex flex-wrap justify-center gap-4">
        <button
            onClick={() => scrollTo('projects')}
            className="px-8 py-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-rose-500/30 transform hover:-translate-y-1 transition-all duration-300"
        >
            Voir mes projets
        </button>
        <button
            onClick={() => scrollTo('contact')}
            className="px-8 py-4 border border-gray-600 text-gray-300 font-medium rounded-full hover:border-rose-500 hover:text-rose-400 transform hover:-translate-y-1 transition-all duration-300"
        >
            Me contacter
        </button>
        </div>
    </div>

      {/* Indicateur de scroll  */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
        <div className="w-1.5 h-3 bg-rose-500 rounded-full" />
        </div>
        </div>
        </section>
)
}

export default Hero