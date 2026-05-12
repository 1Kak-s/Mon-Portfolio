

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import ScrollReveal from './ScrollReveal'


// Enregistrement du plugin ScrollTrigger (nécessaire une fois dans l'app)
gsap.registerPlugin(ScrollTrigger, useGSAP)

// ── DONNÉES : chaque étape = un "chapitre" du parcours ────────
const chapters = [
    {
        chapter: "Chapitre 01 — Le Début",
        story: "4 ans de retail premium à écouter, conseiller et livrer une expérience sans compromis.",
        period: "2018 — 2022",
        company: "Nike",
        role: "Lead / Responsable Stock",
        description: "Management d'équipe, gestion des stocks et optimisation des ventes en magasin. J'apprends la coordination, la prise de décision rapide et la gestion de la pression.",
        logo: "/companies/nike.png",
    },
    {
        chapter: "Chapitre 02 — La Professionnalisation",
        story: "L'univers du luxe m'apprend la précision du détail et l'art du conseil haut de gamme.",
        period: "2022 — 2024",
        company: "Canada Goose",
        role: "Assistant Store Manager",
        description: "Ambassadeur de marque premium, relation client haut de gamme et conseil personnalisé. Je développe une sensibilité forte à la qualité, au produit et à l'expérience client.",
        logo: "/companies/Canada-Goose-logo.png",
    },
    {
        chapter: "Chapitre 03 — La reconversion",
        story: "En 2025, je transpose tout ce que j'ai appris dans un nouveau terrain de jeu : le développement informatique.",
        period: "2024 — 2027",
        company: "ETNA",
        role: "Étudiant en Développement Web",
        description: "Formation intensive en développement web fullstack. Projets React, Node, bases de données... et la même exigence qu'avant, mais appliquée au produit numérique.",
        logo: "/companies/etna.png",
    },
]

function Experience() {
    // Refs pour GSAP (évite des querySelectors)
    const sectionRef = useRef(null)       // la section entière
    const lineFillRef = useRef(null)      // la ligne verticale rose qui progresse
    const panelsRef = useRef([])          // tableau de refs : un panneau par chapitre (colonne gauche)
    const stepsRef = useRef([])           // tableau de refs : chaque step cliquable à droite

    // Index du chapitre actuellement "actif" (passé au centre du viewport)
    const [activeIndex, setActiveIndex] = useState(0)

    //  Effet GSAP : scroll-driven animations 
    
    useGSAP(() => {
    
        gsap.to(lineFillRef.current, {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',              // démarre quand le haut de la section touche le haut du viewport
                end: 'bottom bottom',          // finit quand le bas touche le bas
                scrub: 0.5,                    // lie l'animation au scroll avec un peu d'inertie
            },
        })

        //  Détection du chapitre actif : chaque step a son propre ScrollTrigger
        //    
        stepsRef.current.forEach((step, i) => {
            ScrollTrigger.create({
                trigger: step,
                start: 'top center',
                end: 'bottom center',
                onEnter: () => setActiveIndex(i),        // on descend : ce step devient actif
                onEnterBack: () => setActiveIndex(i),    // on remonte : idem
            })
        })
    }, { scope: sectionRef })

    // Effet : anime la colonne gauche quand activeIndex change ─
    useEffect(() => {
        const panel = panelsRef.current[activeIndex]
        if (!panel) return

        // Timeline d'entrée du panneau actif :
        
        
        const tl = gsap.timeline()
        tl.fromTo(
            panel.querySelector('.xp-logo-big'),
            { opacity: 0, scale: 0.7 },
            { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.5)' }
        )
            .fromTo(
                panel.querySelectorAll('.xp-fade'),
                { opacity: 0, y: 15 },
                { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: 'power2.out' },
                '-=0.3'  // démarre 0.3s avant la fin de l'animation précédente (chevauchement)
            )
    }, [activeIndex])

    return (
        <section
            id="parcours"
            ref={sectionRef}
            className="bg-slate-900 relative"
        >
            {/* Titre principal au-dessus de la timeline */}
            <div className="max-w-6xl mx-auto px-6 pt-24 pb-16">
                <ScrollReveal direction="up" className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Mon <span className="text-rose-500">Parcours</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        De la vente premium au développement web
                    </p>
                </ScrollReveal>
            </div>

            {/* Container principal : 2 colonnes sur desktop, 1 colonne sur mobile */}
            <div className="max-w-6xl mx-auto px-6 pb-24">
                <div className="grid md:grid-cols-2 gap-8 md:gap-16">

                    {/* ═══ COLONNE GAUCHE : panneau sticky qui se met à jour ═══ */}
                    <div className="hidden md:block">
                        <div className="sticky top-28 h-[600px]">
                            {/* Tous les panneaux sont superposés en position absolute.
                                Seul celui avec .active est visible (via opacity). */}
                            <div className="relative w-full h-full">
                                {chapters.map((chap, i) => (
                                    <div
                                        key={i}
                                        ref={(el) => (panelsRef.current[i] = el)}
                                        className={`absolute inset-0 flex flex-col justify-center transition-opacity duration-500 ${
                                            activeIndex === i
                                                ? 'opacity-100 pointer-events-auto'
                                                : 'opacity-0 pointer-events-none'
                                        }`}
                                    >
                                        {/* Chapitre (petit label haut) */}
                                        <p className="xp-fade text-xs uppercase tracking-[0.3em] text-rose-500 font-medium mb-4">
                                            {chap.chapter}
                                        </p>

                                        {/* Texte de storytelling grand */}
                                        <p className="xp-fade text-xl font-medium text-white leading-relaxed mb-10 max-w-md">
                                            {chap.story}
                                        </p>

                                        {/* Logo géant avec glow rose */}
                                        <div className="xp-logo-big w-24 h-24 rounded-2xl bg-slate-800 border-2 border-rose-500/60 flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(244,63,94,0.3)] overflow-hidden">
                                            <img
                                                src={chap.logo}
                                                alt={`Logo ${chap.company}`}
                                                className="w-full h-full object-contain p-3"
                                            />
                                        </div>

                                        {/* Période */}
                                        <p className="xp-fade text-xs uppercase tracking-[0.25em] text-rose-400 font-medium mb-2">
                                            {chap.period}
                                        </p>

                                        {/* Nom entreprise */}
                                        <h3 className="xp-fade text-3xl font-bold text-white mb-1">
                                            {chap.company}
                                        </h3>

                                        {/* Rôle */}
                                        <p className="xp-fade text-base text-gray-400 mb-4">
                                            {chap.role}
                                        </p>

                                        {/* Description */}
                                        <p className="xp-fade text-sm text-gray-300 leading-relaxed max-w-md">
                                            {chap.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* COLONNE DROITE : steps full-height avec ligne verticale  */}
                    <div className="relative">
                        {/* Ligne verticale background (gris) */}
                        <div className="absolute left-[14px] top-0 bottom-0 w-0.5 bg-slate-700" />

                        {/* Ligne verticale rose qui se remplit avec le scroll */}
                        {/* origin-top + scaleY animé par GSAP de 0 → 1 */}
                        <div
                            ref={lineFillRef}
                            className="absolute left-[14px] top-0 bottom-0 w-0.5 bg-rose-500 origin-top shadow-[0_0_12px_rgba(244,63,94,0.7)]"
                            style={{ transform: 'scaleY(0)' }}
                        />

                        {/* Chaque step prend la hauteur du viewport (100vh)
                            pour laisser le temps au scroll de voir le panneau gauche */}
                        {chapters.map((chap, i) => (
                            <div
                                key={i}
                                ref={(el) => (stepsRef.current[i] = el)}
                                className="relative pl-12 md:pl-16 min-h-[80vh] flex flex-col justify-center"
                            >
                                {/* Point sur la timeline */}
                                <div
                                    className={`absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 transition-all duration-500 ${
                                        activeIndex === i
                                            ? 'bg-rose-500 border-rose-500 scale-150 shadow-[0_0_20px_rgba(244,63,94,0.8)]'
                                            : 'bg-slate-900 border-slate-600'
                                    }`}
                                />

                                {/* Mini-contenu visible uniquement sur desktop (résumé) */}
                                <div className="hidden md:block">
                                    <p
                                        className={`text-xs uppercase tracking-[0.2em] mb-2 transition-colors duration-500 ${
                                            activeIndex === i ? 'text-rose-500' : 'text-slate-500'
                                        }`}
                                    >
                                        {chap.period}
                                    </p>
                                    <h4
                                        className={`text-2xl font-bold mb-1 transition-colors duration-500 ${
                                            activeIndex === i ? 'text-white' : 'text-slate-500'
                                        }`}
                                    >
                                        {chap.company}
                                    </h4>
                                    <p
                                        className={`text-sm transition-colors duration-500 ${
                                            activeIndex === i ? 'text-gray-300' : 'text-slate-600'
                                        }`}
                                    >
                                        {chap.role}
                                    </p>
                                </div>

                                {/* Sur MOBILE : pas de split, affiche tout le contenu directement
                                    (car le panneau sticky gauche est caché via hidden md:block) */}
                                <div className="md:hidden bg-slate-800 rounded-xl p-5 border border-slate-700">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center overflow-hidden">
                                            <img
                                                src={chap.logo}
                                                alt={`Logo ${chap.company}`}
                                                className="w-full h-full object-contain p-2"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-[0.2em] text-rose-500 mb-0.5">
                                                {chap.period}
                                            </p>
                                            <h4 className="text-white font-bold">{chap.company}</h4>
                                        </div>
                                    </div>
                                    <p className="text-xs uppercase tracking-[0.25em] text-rose-400 font-medium mb-2">
                                        {chap.chapter}
                                    </p>
                                    <p className="text-white font-medium mb-3">{chap.story}</p>
                                    <p className="text-gray-400 text-sm mb-2 font-medium">{chap.role}</p>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        {chap.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience