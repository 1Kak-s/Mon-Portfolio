// ============================================================
// 🎬 AMÉLIORATION #1 : SCROLL REVEAL avec GSAP ScrollTrigger
// ============================================================
// Ce composant utilitaire enveloppe n'importe quel contenu
// et lui ajoute une animation d'apparition au scroll.
//
// COMMENT ÇA MARCHE :
//  1. ScrollTrigger observe quand l'élément entre dans le viewport
//  2. Quand il arrive, GSAP anime de l'état "from" vers l'état normal
//  3. "once: true" = l'animation ne joue qu'une seule fois (pas de re-trigger)
//
// USAGE :
//  <ScrollReveal>
//    <MonComposant />
//  </ScrollReveal>
//
// PROPS :
//  - direction : "up" (défaut), "left", "right", "down"
//  - delay : délai avant le démarrage (ex: 0.2 pour 200ms)
//  - distance : distance de départ en px (défaut: 50)
// ============================================================

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// IMPORTANT : on enregistre le plugin ScrollTrigger une seule fois
gsap.registerPlugin(ScrollTrigger);

function ScrollReveal({ children, direction = "up", delay = 0, distance = 50, className = "" }) {
    const ref = useRef(null);

    useGSAP(() => {
        // Calculer les coordonnées de départ selon la direction
        const fromVars = {
            opacity: 0,
            // Chaque direction donne une coordonnée de départ différente
            x: direction === "left" ? -distance : direction === "right" ? distance : 0,
            y: direction === "up"   ?  distance  : direction === "down"  ? -distance : 0,
        };

        gsap.from(ref.current, {
            ...fromVars,
            duration: 0.9,
            delay,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ref.current,   // L'élément qui déclenche l'animation
                start: "top 85%",       // Démarre quand le haut de l'élément atteint 85% du viewport
                once: true,             // Ne joue qu'une seule fois
            },
        });
    }, { scope: ref });

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}

export default ScrollReveal;
