import { useState, useEffect, useRef } from 'react'

// ── Variables CSS pour le neumorphisme sombre ──────────────────────────────
// bg: #0f172a  |  shadow light: #1a2744  |  shadow dark: #060d18
// ──────────────────────────────────────────────────────────────────────────

function useInView(threshold = 0.4) {
    const [isInView, setIsInView] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsInView(true) },
            { threshold }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [threshold])

    return [ref, isInView]
}

// ── Barre de compétence neumorphique ─────────────────────────────────────
function SkillBar({ name, level, delay }) {
    const [ref, isInView] = useInView(0.4)
    const [width, setWidth] = useState(0)

    useEffect(() => {
        if (isInView) {
            const timer = setTimeout(() => setWidth(level), delay)
            return () => clearTimeout(timer)
        }
    }, [isInView, level, delay])

    return (
        <div ref={ref} className="mb-5">
            <div className="flex justify-between mb-2">
                <span style={{ color: '#94a3b8', fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500 }}>
                    {name}
                </span>
                <span style={{ color: '#fb7185', fontSize: '0.8rem', fontWeight: 700 }}>
                    {level}%
                </span>
            </div>

            {/* Piste — effet encastré (inset) */}
            <div style={{
                height: '8px',
                borderRadius: '999px',
                background: '#0f172a',
                boxShadow: 'inset 3px 3px 7px #060d18, inset -2px -2px 5px #1a2744',
                overflow: 'hidden',
                position: 'relative',
            }}>
                {/* Remplissage animé */}
                <div style={{
                    height: '100%',
                    width: `${width}%`,
                    borderRadius: '999px',
                    background: 'linear-gradient(90deg, #e11d48, #fb7185)',
                    boxShadow: '0 0 10px rgba(251, 113, 133, 0.5)',
                    transition: 'width 1.1s cubic-bezier(0.22, 1, 0.36, 1)',
                }} />
            </div>
        </div>
    )
}

// ── Carte de catégorie neumorphique ───────────────────────────────────────
function CategoryCard({ category, catIndex }) {
    const [ref, isInView] = useInView(0.2)

    return (
        <div
            ref={ref}
            style={{
                background: '#0f172a',
                borderRadius: '24px',
                padding: '32px',
                boxShadow: '8px 8px 20px #060d18, -6px -6px 16px #1a2744',
                border: '1px solid rgba(255,255,255,0.04)',
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.6s ease ${catIndex * 120}ms, transform 0.6s ease ${catIndex * 120}ms`,
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Accent rosé dans le coin */}
            <div style={{
                position: 'absolute',
                top: '-30px',
                right: '-30px',
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(225,29,72,0.12) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            {/* En-tête */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '28px' }}>
                {/* Icône dans un bouton neumorphique */}
                <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: '#0f172a',
                    boxShadow: '4px 4px 10px #060d18, -3px -3px 8px #1a2744',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    flexShrink: 0,
                }}>
                    {category.icon}
                </div>
                <h3 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '1.15rem', margin: 0 }}>
                    {category.title}
                </h3>
            </div>

            {/* Séparateur neumorphique */}
            <div style={{
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(251,113,133,0.3), transparent)',
                marginBottom: '24px',
            }} />

            {/* Barres */}
            {category.skills.map((skill, skillIndex) => (
                <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={(catIndex * 180) + (skillIndex * 100)}
                />
            ))}
        </div>
    )
}

// ── Pill soft skill ───────────────────────────────────────────────────────
function SoftPill({ skill, index }) {
    const [ref, isInView] = useInView(0.2)
    const [hovered, setHovered] = useState(false)

    return (
        <span
            ref={ref}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                display: 'inline-block',
                padding: '10px 24px',
                borderRadius: '999px',
                background: hovered ? 'linear-gradient(135deg, #e11d48, #fb7185)' : '#0f172a',
                boxShadow: hovered
                    ? '0 4px 20px rgba(225,29,72,0.4), inset 0 1px 0 rgba(255,255,255,0.1)'
                    : '5px 5px 12px #060d18, -4px -4px 10px #1a2744',
                color: hovered ? '#fff' : '#94a3b8',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                cursor: 'default',
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'scale(1)' : 'scale(0.85)',
                transitionProperty: 'all',
                transitionDelay: `${index * 60}ms`,
                border: '1px solid rgba(255,255,255,0.05)',
            }}
        >
            {skill}
        </span>
    )
}

// ── Section principale ────────────────────────────────────────────────────
function Skills() {
    const skillCategories = [
        {
            title: 'Langages',
            icon: '💻',
            skills: [
                { name: 'Python', level: 50 },
                { name: 'JavaScript / TypeScript', level: 45 },
                { name: 'HTML / CSS', level: 70 },
                { name: 'Bash', level: 45 },
            ],
        },
        {
            title: 'Frameworks',
            icon: '⚡',
            skills: [
                { name: 'React', level: 70 },
                { name: 'NestJS', level: 50 },
                { name: 'Unreal Engine 5', level: 55 },
                { name: 'WordPress', level: 50 },
            ],
        },
        {
            title: 'Outils',
            icon: '🛠️',
            skills: [
                { name: 'Git / GitHub', level: 60 },
                { name: 'Linux', level: 70 },
                { name: 'n8n', level: 65 },
                { name: 'VS Code', level: 90 },
            ],
        },
    ]

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
        <section
            id="skills"
            style={{
                background: '#0f172a',
                padding: '0 0 96px',
                position: 'relative',
            }}
        >
            {/* Ligne décorative haute */}
            <div style={{
                width: '100%',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(225,29,72,0.4), transparent)',
                marginBottom: '80px',
            }} />

            {/* Halo ambiant en arrière-plan */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '600px',
                height: '300px',
                borderRadius: '50%',
                background: 'radial-gradient(ellipse, rgba(225,29,72,0.05) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>

                {/* ── Titre ── */}
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    {/* Badge neumorphique */}
                    <div style={{
                        display: 'inline-block',
                        padding: '6px 20px',
                        borderRadius: '999px',
                        background: '#0f172a',
                        boxShadow: '4px 4px 10px #060d18, -3px -3px 8px #1a2744',
                        color: '#fb7185',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        marginBottom: '20px',
                    }}>
                        Compétences
                    </div>

                    <h2 style={{
                        fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                        fontWeight: 800,
                        color: '#f1f5f9',
                        margin: '0 0 12px',
                        lineHeight: 1.1,
                    }}>
                        Stack{' '}
                        <span style={{
                            color: 'transparent',
                            backgroundImage: 'linear-gradient(135deg, #e11d48, #fb7185)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                        }}>
                            Technique
                        </span>
                    </h2>

                    <p style={{ color: '#475569', fontSize: '1rem', margin: 0 }}>
                        Les technologies que j'ai étudiées et utilisées
                    </p>
                </div>

                {/* ── Grille des cartes ── */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '28px',
                    marginBottom: '72px',
                }}>
                    {skillCategories.map((category, catIndex) => (
                        <CategoryCard key={category.title} category={category} catIndex={catIndex} />
                    ))}
                </div>

                {/* ── Soft Skills ── */}
                <div style={{ textAlign: 'center' }}>
                    {/* Titre avec ligne neumorphique */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', justifyContent: 'center', marginBottom: '36px' }}>
                        <div style={{
                            flex: 1,
                            maxWidth: '180px',
                            height: '1px',
                            background: 'linear-gradient(90deg, transparent, rgba(251,113,133,0.25))',
                        }} />
                        <h3 style={{
                            color: '#f1f5f9',
                            fontWeight: 700,
                            fontSize: '1.3rem',
                            margin: 0,
                            whiteSpace: 'nowrap',
                        }}>
                            Soft Skills
                        </h3>
                        <div style={{
                            flex: 1,
                            maxWidth: '180px',
                            height: '1px',
                            background: 'linear-gradient(90deg, rgba(251,113,133,0.25), transparent)',
                        }} />
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px' }}>
                        {softSkills.map((skill, i) => (
                            <SoftPill key={skill} skill={skill} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills