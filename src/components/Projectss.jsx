// ============================================================
// PROJECTS.JSX — Stacked cards scroll (style Olivia Harper)
// ============================================================
// Chaque carte a `position: sticky` avec un top légèrement
// incrémenté. En scrollant vers le bas, chaque carte vient se
// superposer par-dessus la précédente, laissant juste un petit
// liseré visible. Au scroll inverse, l'empilement se défait
// automatiquement (comportement natif de position:sticky).
//
// Remplace intégralement l'ancien Projects.jsx (mobile + desktop
// unifiés). Plus besoin de MobileProjectCard ni CardSwap ici.
// ============================================================

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

// ── Carte projet ──────────────────────────────────────────────
function ProjectCard({ project, index }) {
    return (
        <article className="relative w-full aspect-[16/7] md:aspect-[18/9] rounded-2xl overflow-hidden bg-slate-900 border border-slate-700 shadow-2xl">
            {/* Image de fond */}
            {project.image ? (
                <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />
            )}

            {/* Overlay pour lisibilité du texte */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-slate-950/10" />

            {/* Numéro de projet en haut à gauche */}
            <div className="absolute top-5 left-5 md:top-7 md:left-7 text-white/80 font-mono text-xs md:text-sm tracking-[0.25em]">
                {String(index + 1).padStart(2, "0")}
            </div>

            {/* Badge catégorie en haut à droite */}
            <span className="absolute top-5 right-5 md:top-7 md:right-7 px-3 py-1 bg-black/40 backdrop-blur-sm rounded-full text-white text-xs font-medium border border-white/10">
                {project.category}
            </span>

            {/* Contenu : titre + description + stack + bouton */}
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-8">
        {/* Colonne gauche : titre + description + tags */}
        <div className="flex-1 min-w-0">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-3">
                {project.title}
            </h3>
            <p className="text-gray-200 text-sm md:text-base mb-4 max-w-2xl line-clamp-2 md:line-clamp-3">
                {project.description}
            </p>

            {/* Stack techno */}
            <div className="flex flex-wrap gap-1.5 md:gap-2">
                {project.tags.slice(0, 5).map((tag) => (
                    <span
                        key={tag}
                        className="px-2.5 py-1 md:px-3 md:py-1 bg-white/10 backdrop-blur-sm rounded-full text-[11px] md:text-xs text-white border border-white/20"
                    >
                        {tag}
                    </span>
                ))}
                {project.tags.length > 5 && (
                    <span className="px-2.5 py-1 md:px-3 md:py-1 bg-white/10 backdrop-blur-sm rounded-full text-[11px] md:text-xs text-white/70 border border-white/20">
                        +{project.tags.length - 5}
                    </span>
                )}
            </div>
        </div>

        {/* Colonne droite : bouton (si lien existe) */}
        {project.github && (
            <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-rose-500 hover:bg-rose-600 text-white transition-all duration-300 text-sm font-medium group shrink-0 self-start md:self-end"
            >
                <span>Voir le projet</span>
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
        )}
    </div>
</div>
        </article>
    );
}

// ── Composant principal ───────────────────────────────────────
function Projectss() {
    const [activeFilter, setActiveFilter] = useState("all");

    const projects = [
        { id: 1, title: "SubFlow", description: "Un outil de visualisation et d'analyse des abonnements.", category: "Data Visualization", tags: ["React", "Figma", "Tailwind CSS", "Data Visualization"], image: "/Projets/Subflow.jpg", color: "from-purple-500 to-indigo-600", github: "" },
        { id: 2, title: "Jeu VR", description: "Un jeu immersif d'un escaperoom en réalité virtuelle dans un musée.", category: "VR", tags: ["Unreal Engine", "C#", "Meta Quest", "VR"], image: "/Projets/muse.png", color: "from-purple-500 to-indigo-600", github: "" },
        { id: 3, title: "Documentation protocolaire", description: "Swagger et Postman pour documenter et tester des APIs REST. Avec un frontend React.", tags: ["Swagger", "Postman", "API", "Documentation", "REST", "React"], category: "Automation", image: "/Projets/docproto.png", color: "from-orange-500 to-rose-600", github: "https://github.com/1Kak-s/Documentation-protocolaire" },
        { id: 4, title: "EtnaFlix", description: "Projet de plateforme de liste de films avec React et API externe.", tags: ["React", "NestJS", "TypeScript", "API"], category: "Web Development", image: "/Projets/etflix.png", color: "from-cyan-500 to-blue-600", github: "" },
        { id: 5, title: "Site Web WordPress", description: "Création de sites web professionnels avec thèmes personnalisés et plugins.", tags: ["WordPress", "PHP", "CSS", "SEO"], category: "Web Development", image: "/Projets/MGSTUDIO.png", color: "from-green-500 to-teal-600", github: "" },
        { id: 6, title: "Task Forge", description: "Projet de gestion de tâches avec React et Firebase.", tags: ["React", "Firebase", "JavaScript", "NestJS"], category: "Web Development", image: "/Projets/TF.png", color: "from-blue-400 to-blue-600", github: "https://github.com/1Kak-s/TaskForge" },
        { id: 7, title: "My Hyrule Castle", description: "Projet de mini jeu rpg dans l'univers de Zelda. En GO", tags: ["Go", "Game Development", "RPG", "Zelda"], category: "Game Development", image: "/Projets/hyrule.png", color: "from-green-500 to-green-700", github: "https://github.com/1Kak-s/The-Hyrule-Castle" },
        { id: 8, title: "My Generator Prime", description: "Un générateur de prime csv.", tags: ["Go", "Game Development", "One piece"], category: "Game Development", image: "/Projets/prime.png", color: "from-orange-400 to-orange-600", github: "https://github.com/1Kak-s/MyGeneratorPrime" },
        { id: 9, title: "Bot Telegram", description: "Un bot Telegram pour automatiser des tâches et fournir des informations.", tags: ["Telegram Bot API", "Python", "Automation"], category: "Automation", image: "/Projets/bot.png", color: "from-gray-500 to-gray-700", github: "" },
        { id: 10, title: "FashionFolio", description: "Une app de gestion de garde-robe numérique pour organiser ses vêtements et composer ses tenues avec l'aide de l'IA.", tags: ["React", "NestJS", "Tailwind CSS", "MongoDB"], category: "Web Development", image: "/Projets/ff.png", color: "from-pink-500 to-rose-600", github: "https://github.com/1Kak-s/Fashion-Folio---Proto" },    ];

    const filters = [
        { id: "all", label: "Tous" },
        { id: "VR", label: "Réalité Virtuelle" },
        { id: "Automation", label: "Automatisation" },
        { id: "Web Development", label: "Développement Web" },
        { id: "Game Development", label: "Game Dev" },
    ];

    const filteredProjects =
        activeFilter === "all"
            ? projects
            : projects.filter((p) => p.category === activeFilter);

    return (
        <section id="projects" className="py-24 bg-slate-800">
            {/* Titre + filtres */}
            <div className="max-w-6xl mx-auto px-6 mb-12">
                <ScrollReveal direction="up" className="text-center mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Mes <span className="text-rose-500">Projets</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Développement & Créations artistiques
                    </p>
                </ScrollReveal>

                <ScrollReveal
                    direction="up"
                    delay={0.1}
                    className="flex flex-wrap justify-center gap-3"
                >
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-5 md:px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
                                activeFilter === filter.id
                                    ? "bg-rose-500 text-white shadow-lg shadow-rose-500/30"
                                    : "bg-slate-700 text-gray-400 hover:bg-slate-600"
                            }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </ScrollReveal>
            </div>

            {/* Stack de projets — position: sticky */}
            <div className="max-w-7xl mx-auto px-4 md:px-6">
            {filteredProjects.map((project, i) => {
    // Scale progressif : les cartes du dessous rétrécissent
    // La dernière carte (i === length-1) = scale 1
    // Chaque carte précédente = 1.5% plus petite
    const depthFromTop = filteredProjects.length - 1 - i;
    const scale = 1 - depthFromTop * 0.02;

    return (
        <div
            key={project.id}
            className="sticky mb-16 last:mb-24"
            style={{ top: `${Math.min(80 + i * 20, 200)}px` }}
        >
            {/* Wrapper interne qui porte le scale (pas le sticky) */}
            <div
                style={{
                    transform: `scale(${scale})`,
                    transformOrigin: "top center",
                    transition: "transform 0.4s ease-out",
                }}
            >
                <ProjectCard project={project} index={i} />
            </div>
        </div>
    );
})}
            </div>
        </section>
    );
}

export default Projectss;