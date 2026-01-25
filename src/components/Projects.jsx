/* eslint-disable no-useless-escape */
import { useState } from "react";

function Projects() {
    const [activeFilter, setActiveFilter] = useState("All");

    const projects = [
        {
            id: 1,
            title: "Jeu VR",
            description: "Un jeu immersif d'un escaperoom en réalité virtuelle dans un musée.",
            category: "VR",
            tags: ["Unreal Engine", "C#", "Meta Quest", "VR"],
            icons: "🎮",
            color: "from-purple-500 to-indigo-600",
        },

        {
            id: 2,
            title: "Documentation protocolaire",
            description: "Swagger et Postman pour documenter et tester des APIs REST. Avec un frontend React.",
            tags: ["Swagger", "Postman", "API", "Documentation", "REST", "React"],
            category: "Automation",
            icons: "🤖",
            color: "from-orange-500 to-indigo-600",
        },

        {
            id: 3,
            title: "EtnaFlix",
            description: "Projet de plateforme de liste de films avec React et API externe.",
            tags: ["React", "NestJS", "TypeScript", "API"],
            category: "Web Development",
            icons: "🌐",
            color: "from-cyan-500 to-blue-600",
        },

        {
            id: 4,
            title: "Site Web WordPress",
            description: "Création de sites web professionnels avec thèmes personnalisés et plugins.",
            tags: ["WordPress", "PHP", "CSS", "SEO"],
            category: "Web Development",
            icons: "🖥️",
            color: "from-green-500 to-teal-600",
        },


        {
            id: 5,
            title: "Task Forge",
            description: "Projet de gestion de tâches avec React et Firebase.",
            tags: ["React", "Firebase", "JavaScript", "NestJS"],
            category: "Web Development",
            icons: "🛠️",
            color: "from-blue-400 to-blue-600",
        },

                {
            id: 6,
            title: "blue",
            description: "Projet artistique d'un autoportrait",
            tags: ["Art", "Digital", "Creative", "Procreate"],
            category: "Art",
            icons: "🖼️",
            color: "from-orange-400 to-orange-600",
        },  

        {
            id: 7,
            title: "Take Time",
            description: "Projet artistique d'un autoportrait",
            tags: ["Art", "Digital", "Creative", "Procreate"],
            category: "Art",
            icons: "🖼️",
            color: "from-orange-400 to-orange-600",
        },
    ]
    // Define filter categories
    const filters = [
        { id : "all" , label: "Tous" },
        { id : "VR" , label: "Réalité Virtuelle" },
        { id : "Automation" , label: "Automatisation" },
        { id : "Web Development" , label: "Développement Web" },
        { id : "Art" , label: "Art" },
    ];

    const filteredProjects = activeFilter === "all"
        ? projects
        : projects.filter(project => project.category === activeFilter)

        return (
        <section id="projects" className="py-24 bg-slate-800">
            <div className="max-w-6xl mx-auto px-6">

                {/* Titre */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Mes <span className="text-rose-500">Projets</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-8">Développement & Créations artistiques</p>
                </div>

                {/* Boutons de filtre */}
                <div className="flex justify-center gap-4 mb-12">
                    {filters.map(filter => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${ activeFilter === filter.id ? 'bg-rose-500 text-white' : 'bg-slate-700 text-gray-400 hover:bg-slate-600'
                            }`}>
                            
                            {filter.label}
                            </button>
                        ))} 
                </div>

        {/* Grille de projets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
            <div
                key={project.id}
                className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-rose-500/50 transition-all duration-500 hover:-translate-y-2"
            >
            {/* Bannière colorée avec icône */}
            <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <span className="text-6xl group-hover:scale-125 transition-transform duration-500">
                    {project.icon}
                </span>
                {/* Overlay qui s'estompe au hover */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500" />
            </div>

            {/* Contenu de la carte */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                    {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                    <span
                        key={tag}
                            className="px-3 py-1 bg-slate-800 rounded-full text-xs text-gray-300">
                            {tag}
                    </span>
                    ))}
                </div>
            </div>
            </div>
            ))}
        </div>
    </div>
    </section>
  )
}

export default Projects