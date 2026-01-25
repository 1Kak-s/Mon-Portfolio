import etnaLogo from '../assets/companies/etna.png';
import canadaGooseLogo from '../assets/companies/Canada-Goose-logo.png';
import nikeLogo from '../assets/companies/nike.png';

function Experience() {
  const experiences = [
    {
        period: "2025 - ...",
        title: "Étudiant",
        company: "ETNA",
        location: "Ivry-sur-Seine, France",
        description: "Formation en développement logiciel, couvrant divers langages de programmation, frameworks et méthodologies de développement.",
        type: "formation",
        logo: etnaLogo,  
    },
    {
        period: "2022 - 2024",
        title: "Directeur adjoint",  
        company: "Canada Goose",
        location: "Paris, France",
        description: "Gestion des opérations quotidiennes, supervision du personnel (20+ employés), formation et développement des compétences, gestion des stocks et des relations avec les clients.",
        type: "travail",  
        logo: canadaGooseLogo,
    },
    {
        period: "2019 - 2021",
        title: "Responsable Stock",
        company: "Nike - Citadium",
        location: "Paris, France",
        description: "Gestion des stocks, prévention des pertes, organisation des livraisons, développement des processus de sécurité.",
        type: "travail",
        logo: nikeLogo,
    },
    {
        period: "2017 - 2019",
        title: "Vendeur polyvalent",  
        company: "Nike - Citadium",
        location: "Paris, France",
        description: "Service à la clientèle, présentation des produits, assistance aux clients dans leurs choix.",
        type: "travail",
        logo: nikeLogo,
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
           {/* Ligne verticale centrale */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-600 via-rose-400 to-slate-700 md:-translate-x-1/2" />

            {/* Expériences */}
            {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12">
                {/* Point sur la timeline */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-rose-500 rounded-full -translate-x-1/2 ring-4 ring-slate-900 z-10" />

                {/* Carte - alternance gauche/droite sur desktop */}
            <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                index % 2 === 0 
                    ? 'md:mr-auto md:pr-8' 
                    : 'md:ml-auto md:pl-8'
                }`}>
                <div className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-rose-500/30 transition-all duration-300 ${
                    index % 2 === 0 ? 'md:text-right' : ''
                }`}>
                    {/* Badge + Icône */}
                <div className={`flex items-center gap-3 mb-3 ${
                    index % 2 === 0 ? 'md:justify-end' : ''
                }`}>
                    {index % 2 === 0 ? (
                    <>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            exp.type === 'formation'
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-rose-500/20 text-rose-400'
                        }`}>
                            {exp.period}
                        </span>
                        <img 
            src={exp.logo} 
            alt={`${exp.company} logo`}
            className="w-10 h-10 object-contain rounded-lg bg-white/5 p-2"
        />
    </>
) : (
    <>
        <img 
            src={exp.logo} 
            alt={`${exp.company} logo`}
            className="w-10 h-10 object-contain rounded-lg bg-white/5 p-2"
        />
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            exp.type === 'formation'
            ? 'bg-green-500/20 text-green-400'
            : 'bg-rose-500/20 text-rose-400'
        }`}>
            {exp.period}
        </span>
    </>
)}
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
            </div>
        ))}
        </div>
    </div>
    </section>
)
}

export default Experience