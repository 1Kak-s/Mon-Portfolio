// ============================================================
// ABOUT.JSX — avec ScrollReveal (amélioration #1)
// ============================================================
// On remplace l'animation de mot basique par une version GSAP
// et on enveloppe les blocs dans <ScrollReveal> pour qu'ils
// apparaissent proprement au scroll.
// ============================================================

import { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MGPhoto from "../assets/MG.png";
import ScrollReveal from "./ScrollReveal";

gsap.registerPlugin(ScrollTrigger);

function About() {
    const words = ["CREATE", "LEARN", "SHARE", "ADAPT", "GROW"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const wordRef = useRef(null);

    // ── Animation GSAP du mot qui change ─────────────────────────
    // Chaque fois que currentWordIndex change, on anime le mot
    // avec un flip vertical (rotateX) au lieu d'un simple swap
    useEffect(() => {
        if (wordRef.current) {
            // Animation d'entrée (de haut vers position normale)
            gsap.fromTo(wordRef.current,
                { rotateX: -90, opacity: 0, y: -20 },
                { rotateX: 0,   opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.5)" }
            );
        }
    }, [currentWordIndex]);

    useEffect(() => {
        const interval = setInterval(() => {
            // Animation de sortie AVANT de changer le mot
            if (wordRef.current) {
                gsap.to(wordRef.current, {
                    rotateX: 90, opacity: 0, y: 20,
                    duration: 0.3, ease: "power2.in",
                    onComplete: () => setCurrentWordIndex(prev => (prev + 1) % words.length)
                });
            }
        }, 2500);
        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <section id="about" className="py-24 bg-slate-800">
            <div className="max-w-6xl mx-auto px-6">

                {/* Titre — apparaît depuis le bas */}
                <ScrollReveal direction="up" className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        À propos de <span className="text-rose-500">moi</span>
                    </h2>
                    {/* Mot animé avec perspective pour l'effet 3D */}
                    <div className="h-16 flex items-center justify-center" style={{ perspective: "400px" }}>
                        <span ref={wordRef} className="text-3xl md:text-4xl font-light text-gray-500 inline-block">
                            {words[currentWordIndex]}
                        </span>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Photo — arrive depuis la gauche */}
                    <ScrollReveal direction="left">
                        <div className="relative">
                            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-purple-600 rounded-2xl filter blur-3xl opacity-50" />
                                <img src={MGPhoto} alt="GOEFFIER"
                                    className="relative w-full h-full object-cover rounded-2xl border-4 border-white/10 shadow-2xl" />
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Texte — arrive depuis la droite */}
                    <ScrollReveal direction="right" delay={0.1}>
    <div className="space-y-6">
        <p className="text-gray-300 text-lg leading-relaxed">
            Après <span className="text-rose-400 font-semibold">7 ans dans le retail</span> chez Nike et Canada Goose,
            j'ai choisi de me reconvertir dans le développement web en intégrant l'ETNA.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
            Mon parcours en management m'a forgé une <span className="text-rose-400 font-semibold">rigueur</span> et
            un <span className="text-rose-400 font-semibold">sens du résultat</span> que je transpose aujourd'hui
            dans le code, porté par une curiosité technique insatiable.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
            Je conçois des applications <span className="text-rose-400 font-semibold">fullstack React/NestJS</span>,
            de l'interface utilisateur soignée à l'<span className="text-rose-400 font-semibold">API robuste</span>.
            En parallèle, j'explore la VR sous Unreal Engine et l'automatisation via n8n et Python.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
            {[
                { icon: "📍", text: "Juvisy-sur-Orge" },
                { icon: "🎓", text: "ETNA 2024-2027" },
                { icon: "💻", text: "Fullstack · APIs · Automatisation" },
            ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-gray-400">
                    <span className="text-rose-500">{icon}</span> {text}
                </div>
            ))}
        </div>
    </div>
</ScrollReveal>
                </div>
            </div>
        </section>
    );
}

export default About;
