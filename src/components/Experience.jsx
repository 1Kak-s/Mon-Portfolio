

function Experience() {

    const experiences = [
        {
            period: "2025 - ...",
            title: "Étudiant",
            company: "ETNA",
            location: "Ivry-sur-Seine, France",
            description: "Formation en développement logiciel, couvrant divers langages de programmation, frameworks et méthodologies de développement.",
            type: "formation",
            icons: "🎓",
        },
        {
            period: "2022 - 2024",
            tittle: "Directeur adjoint",
            company: "Canada Goose",
            location : "Paris, France",
            description: "Gestion des opérations quotidiennes, supervision du personnel (20+ employés), formation et développement des compétences, gestion des stocks et des relations avec les clients.",
            type: "Travail",
            icons: "🏬",
        },
        {
            period: "2019 - 2021",
            title: "Responsable Stock",
            company: "Nike - Citadium",
            location : "Paris, France",
            description: "Gestion des stocks, prévention des pertes, organisation des livraisons, développement des processus de sécurité.",
            type: "Travail",
            icons: "📦",
        },
        {
            period: "2017 - 2019",
            tittle: "vendeur polyvalent",
            company:"Nike - Citadium",
            location : "Paris, France",
            description: "Service à la clientèle,  présentation des produits, assistance aux clients dans leurs choix.",
            type: "Travail",
            icons: "👟",
        },
    ]

    return (
        <section id="experience" className="py-24 bg-slate-900">
            {/* Ligne décorative en haut */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-rose-500/50 to-transparent" />
            
            <div className="max-w-4xl mx-auto px-6 pt-12">
                {/* Titre */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Mon <span className="text-rose-500">Parcours</span>
                    </h2>
                    <p className="text-gray-400 text-lg">De la vente à la tech</p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Ligne verticale */}
                    <div className="relative">

                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-500 via-slate-600 to slate-700"/>

                    {/* Expériences */}
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={"relative flex flex-col md:flex-row ga-8 mb-12 ${ index % 2 === 0 ? 'md:flex-row-reverse' : '' }"}>

                    {/* point sur la ligne */}

                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-rose-500 rounded-full -translate-x-1/2 ring-4 ring-slate-900 z-10" />

            {/* Contenu */}
            <div className={`flex-1 ml-16 md:ml-0 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <div className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-rose-500/30 transition-all duration-300 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  {/* Badge période + icône */}
                <div className={`flex items-center gap-3 mb-3 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <span className="text-3xl">{exp.icon}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        exp.type === 'formation'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-rose-500/20 text-rose-400'
                    }`}>
                    {exp.period}
                    </span>
                </div>

                {/* Titre */}
                <h3 className="text-xl font-bold text-white mb-1">
                    {exp.title}
                </h3>

                {/* Entreprise + lieu */}
                <p className="text-rose-400 font-medium mb-2">
                    {exp.company} • {exp.location}
                </p>

                {/* Description */}
                <p className="text-gray-400 text-sm">
                    {exp.description}
                </p>
                </div>
            </div>

            {/* Spacer pour l'alternance */}
            <div className="hidden md:block flex-1" /></div>
        ))}
        </div>
    </div>
    </div>
</section>
)
}

export default Experience