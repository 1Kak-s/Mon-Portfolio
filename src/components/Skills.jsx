import { useState, useEffect, useRef } from 'react'

// Hook personnalisé pour détecter si un élément est visible
function useInView(threshold = 0.5) {
    const [isInView, setIsInView] = useState(false)
    const ref = useRef(null)

useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
        if (entry.isIntersecting) {
            setIsInView(true)
        }
},
    { threshold }
    )

    if (ref.current) {
    observer.observe(ref.current)
    }

    return () => observer.disconnect()
}, [threshold])

    return [ref, isInView]
}

// Composant pour une barre de compétence
function SkillBar({ name, level, delay }) {
    const [ref, isInView] = useInView(0.5)
    const [width, setWidth] = useState(0)

useEffect(() => {
    if (isInView) {
      // Lance l'animation après le délai
        const timer = setTimeout(() => setWidth(level), delay)
        return () => clearTimeout(timer)
    }
}, [isInView, level, delay])

    return (
    <div ref={ref}>
    <div className="flex justify-between mb-1">
        <span className="text-gray-300 text-sm">{name}</span>
        <span className="text-rose-400 text-sm">{level}%</span>
    </div>
    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
        <div
            className="h-full bg-gradient-to-r from-rose-500 to-rose-400 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${width}%` }}
        />
    </div>
    </div>
)
}

function Skills() {
    const skillCategories = [
    {
        title: 'Langages',
        icon: '💻',
        skills: [
            { name: 'Python', level: 75 },
            { name: 'JavaScript/TypeScript', level: 70 },
            { name: 'HTML/CSS', level: 85 },
            { name: 'Bash', level: 60 },
]},

    {
        title: 'Frameworks',
        icon: '⚡',
        skills: [
            { name: 'React', level: 70 },
            { name: 'NestJS', level: 50 },
            { name: 'Unreal Engine 5', level: 55 },
            { name: 'WordPress', level: 50 },
]},
    {
        title: 'Outils',
        icon: '🛠️',
        skills: [
            { name: 'Git/GitHub', level: 80 },
            { name: 'Linux', level: 70 },
            { name: 'n8n', level: 65 },
            { name: 'VS Code', level: 90 },
    ]}]


const softSkills = [
    'Leadership',
    'Gestion de projet',
    'Communication',
    'Travail en équipe',
    'Autonomie',
    'Adaptabilité',
    'Créativité',
]

return (
    <section id="skills" className="py-24 bg-slate-900">
    {/* Ligne décorative en haut */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-rose-500/50 to-transparent" />

            <div className="max-w-6xl mx-auto px-6 pt-12">
        {/* Titre */}
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Stack <span className="text-rose-500">Technique</span>
            </h2>

        <p className="text-gray-400 text-lg">Les technologies que j'utilise au quotidien</p>
        </div>

        {/* Grille des catégories de compétences */}
        <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, catIndex) => (
                <div
                key={category.title}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-rose-500/50 transition-all duration-500">

        {/* En-tête de la catégorie */}
        <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-white">
                    {category.title}
                </h3>
        </div>

        {/* Barres de compétences */}
            <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={(catIndex * 200) + (skillIndex * 100)}
                />
                ))}
                </div>
            </div>
        ))}
        </div>

        {/* Soft Skills */}
        <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Soft Skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill) => (
            <span
                key={skill}
                className="px-6 py-3 bg-slate-800 rounded-full text-gray-300 hover:bg-rose-500/20 hover:text-rose-300 transition-all duration-300 cursor-default">
                {skill}
            </span>
            ))}
            </div>
        </div>
    </div>
    </section>
)
}

export default Skills