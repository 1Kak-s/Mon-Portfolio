// ============================================================
// 🖱️ AMÉLIORATION #5 : CURSEUR CUSTOM GSAP
// ============================================================
// Ce composant remplace le curseur par défaut du navigateur.
// Il utilise GSAP pour animer deux cercles qui suivent la souris :
//  - Un petit point (réactif instantané)
//  - Un anneau plus grand (qui suit avec un léger délai = effet "lag")
//
// Le curseur change de taille au survol des éléments interactifs
// grâce aux événements mouseenter/mouseleave globaux.
// ============================================================

import { useEffect, useRef } from "react";
import gsap from "gsap";

function CustomCursor() {
    const dotRef   = useRef(null); // petit point central
    const ringRef  = useRef(null); // anneau extérieur

    useEffect(() => {
        const dot  = dotRef.current;
        const ring = ringRef.current;

        // --- Masquer le curseur natif ---
        document.body.style.cursor = "none";

        // ── Suivi de la souris ───────────────────────────────────────
        // Le "dot" suit instantanément (duration: 0)
        // Le "ring" suit avec un léger délai (duration: 0.35) → effet lag
        const onMove = ({ clientX: x, clientY: y }) => {
            gsap.to(dot,  { x, y, duration: 0,    ease: "none" });
            gsap.to(ring, { x, y, duration: 0.35, ease: "power2.out" });
        };

        // ── Agrandissement au survol des éléments cliquables ─────────
        const onEnter = () => {
            gsap.to(dot,  { scale: 0, duration: 0.2 });
            gsap.to(ring, { scale: 2.5, borderColor: "#f43f5e", duration: 0.3, ease: "back.out(2)" });
        };

        const onLeave = () => {
            gsap.to(dot,  { scale: 1, duration: 0.2 });
            gsap.to(ring, { scale: 1, borderColor: "rgba(244,63,94,0.6)", duration: 0.3 });
        };

        // ── Cible tous les éléments interactifs ──────────────────────
        const interactives = document.querySelectorAll("a, button, [data-cursor]");
        interactives.forEach(el => {
            el.addEventListener("mouseenter", onEnter);
            el.addEventListener("mouseleave", onLeave);
        });

        window.addEventListener("mousemove", onMove);

        // ── Nettoyage quand le composant se démonte ───────────────────
        return () => {
            document.body.style.cursor = "auto";
            window.removeEventListener("mousemove", onMove);
            interactives.forEach(el => {
                el.removeEventListener("mouseenter", onEnter);
                el.removeEventListener("mouseleave", onLeave);
            });
        };
    }, []);

    return (
        <>
            {/* Petit point central - suit la souris sans délai */}
            <div
                ref={dotRef}
                style={{
                    position: "fixed",
                    top: -5,
                    left: -5,
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "#f43f5e",
                    pointerEvents: "none",   // ← important : ne bloque pas les clics
                    zIndex: 99999,
                    willChange: "transform", // ← optimisation GPU
                }}
            />
            {/* Anneau extérieur - suit avec un léger délai */}
            <div
                ref={ringRef}
                style={{
                    position: "fixed",
                    top: -18,
                    left: -18,
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    border: "2px solid rgba(244,63,94,0.6)",
                    pointerEvents: "none",
                    zIndex: 99999,
                    willChange: "transform",
                }}
            />
        </>
    );
}

export default CustomCursor;
