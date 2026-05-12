import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Prism from "./Prism";

function Hero() {
    const containerRef = useRef(null);

    useGSAP(() => {
        // État initial : tous les éléments hero-item sont invisibles
        gsap.set(".hero-item", { opacity: 0, y: 40 });

        // Timeline = séquence d'animations enchaînées
        const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.9 } });

        tl
            .to(".hero-badge",      { opacity: 1, y: 0, duration: 0.6 })
            .to(".hero-name-first", { opacity: 1, y: 0 }, "<0.2")
            .to(".hero-name-last",  { opacity: 1, y: 0 }, "<0.15")
            .to(".hero-subtitle",   { opacity: 1, y: 0, duration: 0.7 }, "<0.2")
            .to(".hero-tag", {
                opacity: 1, y: 0,
                stagger: 0.06,   // chaque tag arrive 0.06s après le précédent
                duration: 0.5,
                ease: "back.out(1.5)",
            }, "<0.2")
            .to(".hero-cta", { opacity: 1, y: 0, stagger: 0.1, duration: 0.6 }, "<0.3");

    }, { scope: containerRef });

    const scrollTo = (id) => document.getElementById(id).scrollIntoView({ behavior: "smooth" });

    const techTags = ["React", "Node.js", "Python", "Unreal Engine 5", "NestJS", "TailwindCSS", "n8n", "Html / CSS", "Arduino"];

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">

            <div className="absolute inset-0 z-0 pointer-events-none">
                <Prism animationType="rotate" timeScale={0.5} height={3.5} baseWidth={5.5} scale={3.6} noise={0} glow={1} />
            </div>

            <div className="absolute inset-0 z-[1] bg-slate-900/60 pointer-events-none" />

            <div ref={containerRef} className="text-center z-10 px-6 relative">

                {/* Badge */}
                <div className="mb-6 hero-item hero-badge">
                    <span className="px-4 py-2 bg-rose-500/10 border border-rose-500/30 rounded-full text-rose-400 text-sm font-medium">
                        En recherche d'alternance
                    </span>
                </div>

                {/* ============================================================
                 * AMÉLIORATION #6 : TYPOGRAPHIE EXPRESSIVE
                 * Contraste de taille fort : prénom très grand (9rem),
                 * nom plus petit (7rem), sous-titre en font-light.
                 * Letter-spacing négatif = aspect moderne & premium.
                 * ============================================================ */}
                <h1 className="font-bold mb-4 leading-none">
                    <span
                        className="hero-item hero-name-first text-white block"
                        style={{ fontSize: "clamp(4rem, 12vw, 9rem)", letterSpacing: "-0.03em" }}>
                        Maxime
                    </span>
                    <span
                        className="hero-item hero-name-last text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-rose-600 block"
                        style={{ fontSize: "clamp(3rem, 9vw, 7rem)", letterSpacing: "-0.02em" }}>
                        Goëffier
                    </span>
                </h1>

                <p className="hero-item hero-subtitle text-xl md:text-2xl text-gray-400 mb-8 font-light tracking-wide">
                    Développeur Web & Programmation Logicielle
                </p>

                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {techTags.map((tech) => (
                        <span key={tech} className="hero-item hero-tag px-3 py-1 bg-slate-700/50 rounded-full text-gray-300 text-sm hover:bg-rose-500/20 hover:text-rose-300 transition-all duration-300">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    <button onClick={() => scrollTo("projects")}
                        className="hero-item hero-cta px-8 py-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-rose-500/30 transform hover:-translate-y-1 transition-all duration-300">
                        Voir mes projets
                    </button>
                    <button onClick={() => scrollTo("contact")}
                        className="hero-item hero-cta px-8 py-4 border border-gray-600 text-gray-300 font-medium rounded-full hover:border-rose-500 hover:text-rose-400 transform hover:-translate-y-1 transition-all duration-300">
                        Me contacter
                    </button>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
                <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
                    <div className="w-1.5 h-3 bg-rose-500 rounded-full" />
                </div>
            </div>
        </section>
    );
}

export default Hero;
