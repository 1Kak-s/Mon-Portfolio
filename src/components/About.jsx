import { useState, useEffect } from "react";

function About() {
    // Mots à afficher dans l'animation
    const words = [
        "CREATE",
        "LEARN",
        "SHARE",
        "ADAPT",
        "GROW",
    ]

    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prev) => (prev + 1) % words.length)}, 2000) // Change de mot toutes les 2 secondes

        return () => clearInterval(interval)}, [words.length]); // Nettoyage de l'intervalle
        
        return (
            <section id="about" className="py-24 bg-slate-800">
                <div className="max-w-6xl mx-auto px-6">

                {/* Titre de la section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        À propos de <span className="text-rose-500">moi</span>
                    </h2>

                {/* Animation des mots */}               
                
                <div className="h-16 flex items-center justify-center">
                    <span className="text-3xl md:text-4xl font-light text-gray-500">
                        {words[currentWordIndex]}
                    </span>
                </div>
                </div>


        {/* Contenu principal  */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
        
            {/* Colonne gauche : Avatar stylisé */}
            <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 mx-auto relative">
            {/* Fond rose */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-blue-600 rounded-2xl rotate-6 opacity-50" />
            
            {/* Carré principal avec MG a changer avec une poto de moi */}
            <div className="absolute inset-0 bg-slate-700 rounded-2xl flex items-center justify-center">
                <span className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-rose-400 to-rose-600">MG</span>
            </div>
            </div>
        </div>

 {/* Texte de présentation */}
        <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
                Après <span className="text-rose-400 font-semibold">7 ans dans le retail</span> chez Nike et Canada Goose, 
                j'ai décidé de suivre ma passion pour le développement Web en intégrant l'ETNA.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
                Aujourd'hui étudiant en développement web et Programmation, je combine ma 
                <span className="text-rose-400 font-semibold"> rigueur professionnelle</span> acquise en management 
                avec une <span className="text-rose-400 font-semibold">curiosité </span> insatiable.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
                Du développement VR avec Unity aux applications fullstack React/NestJS, 
                en passant par l'automatisation avec n8n, j'aime explorer toutes les facettes du dev.
            </p>

            {/* Infos rapides */}
            <div className="flex flex-wrap gap-4 pt-4">
            <div className="flex items-center gap-2 text-gray-400">
                <span className="text-rose-500">📍</span> Juvisy-sur-Orge
            </div>
            <div className="flex items-center gap-2 text-gray-400">
                <span className="text-rose-500">🎓</span> ETNA 2024-2027
            </div>
                <div className="flex items-center gap-2 text-gray-400">
                    <span className="text-rose-500">🎮</span> Gaming (Valorant/TFT/ Counter-Strike)
                </div>
            </div>
        </div>

            </div>
        </div>
    </section>
)
}

export default About