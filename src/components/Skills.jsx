/* eslint-disable no-unused-vars */

import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import SkillsConstellation from './SkillsConstellation'

// Logos Simple Icons
import {
    SiPython, SiJavascript, SiTypescript, SiHtml5, SiCss, SiGnubash, SiGo,
    SiReact, SiNestjs, SiTailwindcss, SiWordpress, SiUnrealengine,
    SiGit, SiGithub, SiLinux, SiN8N, SiFigma,
} from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'

// ── Données : 18 technos avec logo + couleur officielle ───────
const skills = [
    { name: 'Python', Icon: SiPython, color: '#3776AB' },
    { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
    { name: 'HTML', Icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS', Icon: SiCss, color: '#1572B6' },
    { name: 'Bash', Icon: SiGnubash, color: '#4EAA25' },
    { name: 'Go', Icon: SiGo, color: '#00ADD8' },
    { name: 'React', Icon: SiReact, color: '#61DAFB' },
    { name: 'NestJS', Icon: SiNestjs, color: '#E0234E' },
    { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'WordPress', Icon: SiWordpress, color: '#21759B' },
    { name: 'Unreal Engine 5', Icon: SiUnrealengine, color: '#ffffff' },
    { name: 'Git', Icon: SiGit, color: '#F05032' },
    { name: 'GitHub', Icon: SiGithub, color: '#ffffff' },
    { name: 'Linux', Icon: SiLinux, color: '#FCC624' },
    { name: 'VS Code', Icon: VscCode, color: '#007ACC' },
    { name: 'n8n', Icon: SiN8N, color: '#EA4B71' },
    { name: 'Figma', Icon: SiFigma, color: '#F24E1E' },
]

const softSkills = [
    'Leadership', 'Gestion de projet', 'Communication',
    'Travail en équipe', 'Autonomie', 'Adaptabilité', 'Créativité'
]

function Skills() {
    return (
        // pt-32 = 128px en haut (laisse respirer le titre sous le navbar)
        // pb-24 = 96px en bas (espace standard avant la section suivante)
        <section id="skills" className="pt-32 pb-24 bg-slate-900 relative overflow-hidden">
            {/* Glow rose subtil en arrière-plan */}
            <div
                className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse, rgba(225,29,72,0.08) 0%, transparent 70%)'
                }}
            />

            <div className="max-w-7xl mx-auto px-6 relative">

                {/* ═══ Titre principal ═══ */}
                <ScrollReveal direction="up" className="text-center mb-16">
                    <div className="inline-block px-5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold tracking-[0.15em] uppercase mb-5">
                        Compétences
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Stack <span className="text-rose-500">Technique</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Les technologies que j'utilise au quotidien
                    </p>
                </ScrollReveal>

                {/* ═══ SPLIT LAYOUT : tuiles | constellation ═══ */}
                {/* gap-12 sur mobile, gap-20 (80px) sur desktop = beaucoup d'air entre les colonnes */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">

                    {/* ── COLONNE GAUCHE : grille des tuiles ─────────── */}
                    <div className="order-2 lg:order-1">
                        {/* Grille 3 colonnes : 6 lignes de 3 tuiles = 18 techs */}
                        <div className="grid grid-cols-3 gap-3">
                            {skills.map((skill, i) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        delay: i * 0.04,
                                        duration: 0.4,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    whileHover={{
                                        y: -4,
                                        transition: { type: 'spring', stiffness: 400 },
                                    }}
                                    className="group flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-slate-800 border border-slate-700 hover:border-rose-500/50 cursor-default transition-colors min-h-[90px]"
                                >
                                    <skill.Icon
                                        className="w-7 h-7 transition-transform group-hover:scale-110"
                                        style={{ color: skill.color }}
                                    />
                                    <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors text-center leading-tight">
                                        {skill.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* ── COLONNE DROITE : constellation 3D grande ────── */}
                    {/* order-1 sur mobile (en premier visuellement)
                        order-2 sur desktop (à droite dans le grid) */}
                    <div className="order-1 lg:order-2">
                        <SkillsConstellation />
                    </div>
                </div>

                {/* ═══ SOFT SKILLS (en bas, séparés) ═══ */}
                <ScrollReveal direction="up" className="pt-12 border-t border-slate-800">
                    <div className="text-center mb-8">
                        <p className="text-xs uppercase tracking-[0.25em] text-rose-400 font-medium mb-2">
                            En plus
                        </p>
                        <h3 className="text-2xl font-bold text-white">Soft Skills</h3>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2.5">
                        {softSkills.map((skill, i) => (
                            <motion.span
                                key={skill}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05, duration: 0.4 }}
                                whileHover={{ y: -2, scale: 1.05 }}
                                className="px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-sm text-gray-300 cursor-default"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}

export default Skills