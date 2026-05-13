// ============================================================
// SKILLSCONSTELLATION.JSX — Constellation 3D des compétences
// ============================================================
// Sphère 3D interactive avec rotation auto + drag à la souris.
// Version "très grande" : 680px de haut, mais sphère calibrée
// pour rentrer dans la moitié droite du split layout sans déborder.
//
// Tech utilisée :
//  - three.js (moteur 3D WebGL)
//  - @react-three/fiber : wrapper React pour Three.js (JSX → scène 3D)
//  - @react-three/drei : helpers (OrbitControls, Billboard, Html)
//  - react-icons → logos rendus via <Html> dans la 3D
//
// Calibration (split layout 50/50) :
//  - rayon sphère = 3.0 (rentre dans 50% de largeur écran)
//  - caméra Z = 9 (recul suffisant pour englober la sphère)
//  - fov = 55° (champ de vision élargi pour compenser)
//  - distanceFactor = 8 (taille des billboards)
// ============================================================

import { useRef, useState, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html, Billboard } from '@react-three/drei'
import {
    SiPython, SiJavascript, SiTypescript, SiHtml5, SiCss, SiGnubash, SiGo,
    SiReact, SiNestjs, SiTailwindcss, SiWordpress, SiUnrealengine,
    SiGit, SiGithub, SiLinux, SiN8N, SiFigma,
} from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'

// ── Liste des techs avec logo + couleur officielle ─────────────
const techs = [
    { name: 'Python', Icon: SiPython, color: '#3776AB' },
    { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
    { name: 'HTML', Icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS', Icon: SiCss, color: '#1572B6' },
    { name: 'Bash', Icon: SiGnubash, color: '#4EAA25' },
    { name: 'Go', Icon: SiGo, color: '#00ADD8' },
    { name: 'React', Icon: SiReact, color: '#61DAFB' },
    { name: 'NestJS', Icon: SiNestjs, color: '#E0234E' },
    { name: 'Tailwind', Icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'WordPress', Icon: SiWordpress, color: '#21759B' },
    { name: 'Unreal', Icon: SiUnrealengine, color: '#ffffff' },
    { name: 'Git', Icon: SiGit, color: '#F05032' },
    { name: 'GitHub', Icon: SiGithub, color: '#ffffff' },
    { name: 'Linux', Icon: SiLinux, color: '#FCC624' },
    { name: 'VS Code', Icon: VscCode, color: '#007ACC' },
    { name: 'n8n', Icon: SiN8N, color: '#EA4B71' },
    { name: 'Figma', Icon: SiFigma, color: '#F24E1E' },
]

// ── Algo Fibonacci sphere : répartit N points uniformément sur une sphère ─
function fibonacciSphere(count, radius = 3.0) {
    const points = []
    const phi = Math.PI * (3 - Math.sqrt(5))  // angle d'or

    for (let i = 0; i < count; i++) {
        const y = 1 - (i / (count - 1)) * 2
        const r = Math.sqrt(1 - y * y)
        const theta = phi * i
        const x = Math.cos(theta) * r
        const z = Math.sin(theta) * r
        points.push([x * radius, y * radius, z * radius])
    }
    return points
}

// ── Une "planète" = un logo positionné en 3D ─────────────────
function TechPlanet({ position, tech, isHovered, onHover, onLeave }) {
    return (
        <Billboard position={position} follow lockX={false} lockY={false} lockZ={false}>
            <Html
                center
                transform
                distanceFactor={8}
                onPointerOver={onHover}
                onPointerOut={onLeave}
                style={{ pointerEvents: 'auto', userSelect: 'none' }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '10px 14px',
                        background: isHovered
                            ? 'rgba(30, 41, 59, 0.95)'
                            : 'rgba(15, 23, 42, 0.7)',
                        border: `1px solid ${isHovered ? tech.color : 'rgba(100, 116, 139, 0.3)'}`,
                        borderRadius: '12px',
                        backdropFilter: 'blur(10px)',
                        transition: 'all 0.25s ease-out',
                        transform: isHovered ? 'scale(1.18)' : 'scale(1)',
                        boxShadow: isHovered
                            ? `0 0 30px ${tech.color}80, 0 0 15px ${tech.color}40`
                            : '0 4px 12px rgba(0,0,0,0.3)',
                        cursor: 'pointer',
                    }}
                >
                    <tech.Icon size={30} color={tech.color} />
                    <span style={{
                        color: isHovered ? '#fff' : '#cbd5e1',
                        fontSize: '11px',
                        fontWeight: 500,
                        fontFamily: 'system-ui, sans-serif',
                        whiteSpace: 'nowrap',
                    }}>
                        {tech.name}
                    </span>
                </div>
            </Html>
        </Billboard>
    )
}

// ── Groupe de planètes qui tourne en continu ───────────────────
function Constellation() {
    const groupRef = useRef()
    const [hoveredIndex, setHoveredIndex] = useState(-1)

    // Positions calculées une fois (rayon 3.0 = bonne taille pour split layout)
    const positions = useMemo(() => fibonacciSphere(techs.length, 3.0), [])

    // Rotation auto ~0.12 rad/sec sur Y, pause au survol
    useFrame((state, delta) => {
        if (groupRef.current && hoveredIndex === -1) {
            groupRef.current.rotation.y += delta * 0.12
            groupRef.current.rotation.x += delta * 0.03
        }
    })

    return (
        <group ref={groupRef}>
            {techs.map((tech, i) => (
                <TechPlanet
                    key={tech.name}
                    position={positions[i]}
                    tech={tech}
                    isHovered={hoveredIndex === i}
                    onHover={() => setHoveredIndex(i)}
                    onLeave={() => setHoveredIndex(-1)}
                />
            ))}
        </group>
    )
}

// ── Composant principal exporté ────────────────────────────────
function SkillsConstellation() {
    return (
        <div
            className="relative w-full"
            style={{ height: '680px' }}
        >
            {/* Glow rose en arrière-plan */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(244,63,94,0.12) 0%, transparent 60%)',
                    zIndex: 0,
                }}
            />

            {/* Canvas Three.js
                position [0,0,9] = caméra à bonne distance pour englober la sphère
                fov 55 = champ de vision un peu élargi pour donner de la présence */}
            <Canvas
                camera={{ position: [0, 0, 9], fov: 55 }}
                dpr={[1, 2]}
                style={{ position: 'relative', zIndex: 1 }}
            >
                <ambientLight intensity={0.8} />
                <pointLight position={[10, 10, 10]} intensity={0.5} />

                <Constellation />

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    rotateSpeed={0.5}
                    minPolarAngle={Math.PI / 4}
                    maxPolarAngle={(3 * Math.PI) / 4}
                />
            </Canvas>

            {/* Hint UX en bas */}
            <div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-gray-500 pointer-events-none flex items-center gap-2"
                style={{ zIndex: 2 }}
            >
                <span>👆</span>
                <span>Glisse pour explorer la constellation</span>
            </div>
        </div>
    )
}

export default SkillsConstellation