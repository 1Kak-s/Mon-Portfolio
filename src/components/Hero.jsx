function Hero() {

    const scrollTo = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" })
    }

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">

            {/* contenu principal */}
            <div className="text-center z-10 px-6">

            {/* Badge "Recherche alternance" */}

            <div className="mb-6">
                <span className="px-4 py-2 bg-rose-500/10 border border-rose-500/30 rounded-full text-rose-400 text-sm font-medium"
                >Recherche alternance
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
                {["React", "Node.js", "Python", "Unity VR", "NestJS", "TailwindCSS"].map((tech) => (
                    <span 
                    key={tech}
                    className="px-3 py-1 bg-slate-700/50 rounded-full text-gray-300 text-sm hover:bg-rose-500/20 hover:text-rose-300 transition-all duration-300">
                        {tech}
                    </span>
                ))}
            </div>