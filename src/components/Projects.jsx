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
            icons: "🎮",
            color: "from-purple-500 to-indigo-600",
            github: "",
        },
        {
            id: 2,
            title: "Documentation protocolaire",
            description: "Swagger et Postman pour documenter et tester des APIs REST. Avec un frontend React.",
            tags: ["Swagger", "Postman", "API", "Documentation", "REST", "React"],
            category: "Automation",
            icons: "🤖",
            color: "from-orange-500 to-rose-600",
            github: "",
        },
        {
            id: 3,
            title: "EtnaFlix",
            description: "Projet de plateforme de liste de films avec React et API externe.",
            tags: ["React", "NestJS", "TypeScript", "API"],
            category: "Web Development",
            icons: "🌐",
            color: "from-cyan-500 to-blue-600",
            github: "",
        },
        {
            id: 4,
            title: "Site Web WordPress",
            description: "Création de sites web professionnels avec thèmes personnalisés et plugins.",
            tags: ["WordPress", "PHP", "CSS", "SEO"],
            category: "Web Development",
            icons: "🖥️",
            color: "from-green-500 to-teal-600",
            github: "",
        },
        {
            id: 5,
            title: "Task Forge",
            description: "Projet de gestion de tâches avec React et Firebase.",
            tags: ["React", "Firebase", "JavaScript", "NestJS"],
            category: "Web Development",
            icons: "🛠️",
            color: "from-blue-400 to-blue-600",
            github: "",
        },
        {
            id: 6,
            title: "Blue",
            description: "Projet artistique d'un autoportrait.",
            tags: ["Art", "Digital", "Creative", "Procreate"],
            category: "Art",
            icons: "🖼️",
            color: "from-sky-400 to-blue-600",
            github: "",
        },
        {
            id: 7,
            title: "Take Time",
            description: "Projet artistique d'un autoportrait.",
            tags: ["Art", "Digital", "Creative", "Procreate"],
            category: "Art",
            icons: "🎨",
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

    // Le projet affiché à gauche = celui dont l'index est devant dans CardSwap
    const frontProject = filteredProjects[frontIndex] ?? filteredProjects[0];

    const handleFilterChange = (id) => {
        setActiveFilter(id);
        setFrontIndex(0); // reset quand on change de filtre
    };

    return (
        <section id="projects" className="py-24 bg-slate-800">
            <div className="max-w-6xl mx-auto px-6">

                {/* Titre */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Mes <span className="text-rose-500">Projets</span>
                    </h2>
                    <p className="text-gray-400 text-lg">Développement & Créations artistiques</p>
                </div>

                {/* Filtres */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
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

                {/* Layout : texte gauche + cartes droite */}
                <div
                    className="relative flex items-center overflow-hidden rounded-2xl bg-slate-900/60 border border-slate-700/50"
                    style={{ height: '380px' }}
                >
                    {/* Côté gauche — infos du projet en avant */}
                    <div className="w-1/2 px-12 py-10 flex flex-col justify-center z-10">
                        {frontProject ? (
                            <>
                                <span className="text-xs font-semibold uppercase tracking-widest text-rose-400 mb-3">
                                    {frontProject.category}
                                </span>
                                <h3 className="text-3xl font-bold text-white mb-3">
                                    {frontProject.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                                    {frontProject.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {frontProject.tags.slice(0, 4).map(tag => (
                                        <span key={tag} className="px-2 py-0.5 bg-slate-800 border border-slate-700 rounded-full text-xs text-gray-300">
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

                    {/* Côté droit — CardSwap */}
                    <div
                        className="absolute right-0 top-0 bottom-0 overflow-visible"
                        style={{ width: '55%', height: '100%' }}
                    >
                        {filteredProjects.length > 0 && (
                            <CardSwap
                                key={activeFilter}
                                width={460}
                                height={290}
                                cardDistance={45}
                                verticalDistance={50}
                                delay={3500}
                                pauseOnHover={true}
                                skewAmount={4}
                                easing="elastic"
                                clickToAdvance={true}
                                onCardChange={(newFrontIndex) => setFrontIndex(newFrontIndex)}
                                containerClassName="absolute top-1/2 right-[-2%] -translate-y-1/2 perspective-[900px] overflow-visible"
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
                                        <div className={`h-36 bg-gradient-to-br ${project.color} flex items-center justify-center relative`}>
                                            <span className="text-5xl">{project.icons}</span>
                                            <span className="absolute top-3 right-3 px-2 py-1 bg-black/30 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                                                {project.category}
                                            </span>
                                        </div>
                                        <div className="px-5 pt-4 pb-3 flex items-start justify-between">
                                            <div>
                                                <h3 className="text-white font-bold text-base mb-1.5">{project.title}</h3>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {project.tags.slice(0, 3).map(tag => (
                                                        <span key={tag} className="px-2 py-0.5 bg-slate-800 rounded-full text-xs text-gray-400 border border-slate-700">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                    {project.tags.length > 3 && (
                                                        <span className="px-2 py-0.5 bg-slate-800 rounded-full text-xs text-gray-500 border border-slate-700">
                                                            +{project.tags.length - 3}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <span className={`text-lg mt-1 ${project.github ? 'text-rose-400' : 'text-slate-600'}`}>
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
        </section>
    );
}

export default Projects;