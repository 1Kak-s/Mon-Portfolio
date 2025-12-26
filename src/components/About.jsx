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


