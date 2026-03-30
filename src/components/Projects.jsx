import { useState } from "react";
import CardSwap, { Card } from './CardSwap';

function Projects() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [frontIndex, setFrontIndex] = useState(0);

    const projects = [
        {
            id: 1,
            title: "Jeu VR",
            description: "Un jeu immersif d'un escaperoom en réalité virtuelle dans un musée.",
            category: "VR",
            tags: ["Unreal Engine", "C#", "Meta Quest", "VR"],
            image: "/src/assets/Projets/musé.png",
            color: "from-purple-500 to-indigo-600",
            github: "",
        },
        {
            id: 2,
            title: "Documentation protocolaire",
            description: "Swagger et Postman pour documenter et tester des APIs REST. Avec un frontend React.",
            tags: ["Swagger", "Postman", "API", "Documentation", "REST", "React"],
            category: "Automation",
            image: "",
            color: "from-orange-500 to-rose-600",
            github: "",
        },
        {
            id: 3,
            title: "EtnaFlix",
            description: "Projet de plateforme de liste de films avec React et API externe.",
            tags: ["React", "NestJS", "TypeScript", "API"],
            category: "Web Development",
            image: "/src/assets/Projets/etflix.png",
            color: "from-cyan-500 to-blue-600",
            github: "",
        },
        {
            id: 4,
            title: "Site Web WordPress",
            description: "Création de sites web professionnels avec thèmes personnalisés et plugins.",
            tags: ["WordPress", "PHP", "CSS", "SEO"],
            category: "Web Development",
            image: "/src/assets/Projets/MGSTUDIO.png",
            color: "from-green-500 to-teal-600",
            github: "",
        },
        {
            id: 5,
            title: "Task Forge",
            description: "Projet de gestion de tâches avec React et Firebase.",
            tags: ["React", "Firebase", "JavaScript", "NestJS"],
            category: "Web Development",
            icons: "",
            color: "from-blue-400 to-blue-600",
            github: "",
        },
        {
            id: 6,
            title: "Blue",
            description: "Projet artistique d'un autoportrait.",
            tags: ["Art", "Digital", "Creative", "Procreate"],
            category: "Art",
            icons: "",
            color: "from-sky-400 to-blue-600",
            github: "",
        },
        {
            id: 7,
            title: "Take Time",
            description: "Projet artistique d'un autoportrait.",
            tags: ["Art", "Digital", "Creative", "Procreate"],
            category: "Art",
            icons: "",
            color: "from-orange-400 to-orange-600",
            github: "",
        },
    ];

    const filters = [
        { id: "all", label: "Tous" },
        { id: "VR", label: "Réalité Virtuelle" },
        { id: "Automation", label: "Automatisation" },
        { id: "Web Development", label: "Développement Web" },
        { id: "Art", label: "Art" },
    ];

    const filteredProjects = activeFilter === "all"
        ? projects
        : projects.filter(p => p.category === activeFilter);

    const frontProject = filteredProjects[frontIndex] ?? filteredProjects[0];

    const handleFilterChange = (id) => {
        setActiveFilter(id);
        setFrontIndex(0);
    };

    const CARD_W = 780;
    const CARD_H = 500;

    return (
        <section id="projects" className="py-24 bg-slate-800 overflow-x-hidden">
            <div className="max-w-6xl mx-auto px-6">

                {/* Titre */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Mes <span className="text-rose-500">Projets</span>
                    </h2>
                    <p className="text-gray-400 text-lg">Développement & Créations artistiques</p>
                </div>

                {/* Filtres */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {filters.map(filter => (
                        <button
                            key={filter.id}
                            onClick={() => handleFilterChange(filter.id)}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                                activeFilter === filter.id
                                    ? 'bg-rose-500 text-white'
                                    : 'bg-slate-700 text-gray-400 hover:bg-slate-600'
                            }`}>
                            {filter.label}
                        </button>
                    ))}
                </div>

            </div>

            {/* Zone principale — full width pour permettre le débordement à droite */}
            <div className="relative" style={{ paddingTop: '140px' }}>

                <div className="max-w-6xl mx-auto px-6">
                    {/* Rectangle de fond */}
                    <div
                        className="relative flex items-stretch rounded-2xl bg-slate-900/70 border border-slate-700/50 overflow-visible"
                        style={{ minHeight: '420px' }}
                    >
                        {/* ── Gauche : infos ── */}
                        <div className="w-5/12 px-12 py-12 flex flex-col justify-center z-10 shrink-0">
                            {frontProject ? (
                                <>
                                    <span className="text-xs font-semibold uppercase tracking-widest text-rose-400 mb-3">
                                        {frontProject.category}
                                    </span>
                                    <h3 className="text-3xl font-bold text-white mb-4">
                                        {frontProject.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                        {frontProject.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {frontProject.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs text-gray-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-gray-600 text-xs">
                                        Clique sur la carte pour passer au suivant →
                                    </p>
                                </>
                            ) : (
                                <p className="text-gray-500">Aucun projet dans cette catégorie.</p>
                            )}
                        </div>

                        {/* ── Droite : ancrage CardSwap ── */}
                        <div className="relative flex-1 overflow-visible">
                            {filteredProjects.length > 0 && (
                                <CardSwap
                                    key={activeFilter}
                                    width={CARD_W}
                                    height={CARD_H}
                                    cardDistance={60}
                                    verticalDistance={70}
                                    delay={3000}
                                    pauseOnHover={true}
                                    skewAmount={3}
                                    easing="elastic"
                                    clickToAdvance={true}
                                    onCardChange={(i) => setFrontIndex(i)}
                                    containerClassName="absolute bottom-0 right-0 translate-x-[40%] translate-y-[22%] perspective-[1400px] overflow-visible"
                                >
                                    {filteredProjects.map(project => (
                                        <Card
                                            key={project.id}
                                            customClass="cursor-pointer border-slate-600 bg-slate-900"
                                            onClick={() => {
                                                if (project.github) {
                                                    window.open(project.github, '_blank', 'noopener noreferrer');
                                                }
                                            }}
                                        >
                                            {/* Bannière gradient */}
<div
    className="relative overflow-hidden"
    style={{ height: `${Math.round(CARD_H * 0.60)}px` }}
>
    {project.image ? (
        <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
        />
    ) : (
        // Fallback gradient si pas d'image
        <div className={`w-full h-full bg-gradient-to-br ${project.color} flex items-center justify-center`}>
            <span className="text-9xl">{project.icons}</span>
        </div>
    )}
    <span className="absolute top-4 right-4 px-3 py-1 bg-black/30 backdrop-blur-sm rounded-full text-white text-sm font-medium">
        {project.category}
    </span>
</div>

                                            {/* Bas de carte */}
                                            <div className="px-7 pt-5 pb-5 flex items-start justify-between">
                                                <div>
                                                    <h3 className="text-white font-bold text-xl mb-2">{project.title}</h3>
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.tags.slice(0, 3).map(tag => (
                                                            <span key={tag} className="px-3 py-1 bg-slate-800 rounded-full text-xs text-gray-400 border border-slate-700">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                        {project.tags.length > 3 && (
                                                            <span className="px-3 py-1 bg-slate-800 rounded-full text-xs text-gray-500 border border-slate-700">
                                                                +{project.tags.length - 3}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                                <span className={`text-2xl mt-1 ${project.github ? 'text-rose-400' : 'text-slate-600'}`}>
                                                    {project.github ? '→' : '🔒'}
                                                </span>
                                            </div>
                                        </Card>
                                    ))}
                                </CardSwap>
                            )}
                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
}

export default Projects;