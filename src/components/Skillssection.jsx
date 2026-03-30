import { useState } from "react";

const ACCENT = "#e8365d";
const BG_BASE = "#0d1218";
const CARD_BG = "#121920";

const neuCard = {
  background: CARD_BG,
  borderRadius: "16px",
  boxShadow: "6px 6px 14px #07090d, -4px -4px 10px #1d2a38",
  border: "1px solid #1a2332",
  padding: "28px 24px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const labelStyle = {
  fontFamily: "'JetBrains Mono', 'Fira Mono', monospace",
  fontSize: "11px",
  letterSpacing: "0.15em",
  fontWeight: "600",
  color: ACCENT,
};

const titleStyle = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#c8d8e8",
  marginTop: "2px",
};

const descStyle = {
  fontSize: "13px",
  color: "#5a7080",
  lineHeight: "1.5",
};

const skillLabelStyle = {
  fontFamily: "'JetBrains Mono', 'Fira Mono', monospace",
  fontSize: "10.5px",
  letterSpacing: "0.08em",
  color: "#6a8090",
};

const skillValueStyle = {
  fontFamily: "'JetBrains Mono', 'Fira Mono', monospace",
  fontSize: "11px",
  color: ACCENT,
  fontWeight: "600",
};

function ProgressBar({ value, animated }) {
  return (
    <div
      style={{
        height: "3px",
        background: "#1a2535",
        borderRadius: "2px",
        overflow: "hidden",
        boxShadow: "inset 1px 1px 3px #07090d",
      }}
    >
      <div
        style={{
          height: "100%",
          width: animated ? `${value}%` : "0%",
          background: `linear-gradient(90deg, #c02040, ${ACCENT})`,
          borderRadius: "2px",
          transition: "width 0.9s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: `0 0 6px ${ACCENT}55`,
        }}
      />
    </div>
  );
}

function SkillRow({ name, value, animated }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={skillLabelStyle}>{name}</span>
        <span style={skillValueStyle}>{value}%</span>
      </div>
      <ProgressBar value={value} animated={animated} />
    </div>
  );
}

function SkillCard({ label, title, desc, icon, skills, extras, animated }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? skills : skills.slice(0, 3);
  const hidden = skills.length - 3;

  return (
    <div style={neuCard}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={labelStyle}>{label}</div>
          <div style={titleStyle}>{title}</div>
          {desc && <div style={{ ...descStyle, marginTop: "6px" }}>{desc}</div>}
        </div>
        <span style={{ fontSize: "22px", opacity: 0.7 }}>{icon}</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {visible.map((s) => (
          <SkillRow key={s.name} name={s.name} value={s.value} animated={animated} />
        ))}
      </div>

      {hidden > 0 && (
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            background: "none",
            border: "none",
            padding: "0",
            cursor: "pointer",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px",
            color: "#3a5060",
            textAlign: "left",
            letterSpacing: "0.05em",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.color = ACCENT)}
          onMouseLeave={(e) => (e.target.style.color = "#3a5060")}
        >
          {expanded ? "▲ réduire" : `+${hidden} autres...  ↓`}
        </button>
      )}
    </div>
  );
}

function SoftSkillsCard({ animated }) {
  const skills = [
    "Leadership",
    "Gestion de projet",
    "Communication",
    "Travail en équipe",
    "Autonomie",
    "Adaptabilité",
    "Créativité",
    "Résolution de problèmes",
  ];

  return (
    <div style={neuCard}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={labelStyle}>SOFT SKILLS</div>
          <div style={titleStyle}>Compétences humaines</div>
          <div style={{ ...descStyle, marginTop: "6px" }}>
            Forgées par 6 ans de management retail et de travail en équipe.
          </div>
        </div>
        <span style={{ fontSize: "22px", opacity: 0.7 }}>★</span>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        {skills.map((s, i) => (
          <span
            key={s}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "11px",
              letterSpacing: "0.05em",
              color: "#8aa0b0",
              background: "#0a0f16",
              border: "1px solid #1e2d3d",
              borderRadius: "6px",
              padding: "5px 10px",
              boxShadow: "inset 1px 1px 3px #07090d",
              opacity: animated ? 1 : 0,
              transform: animated ? "translateY(0)" : "translateY(8px)",
              transition: `opacity 0.4s ${i * 0.05}s, transform 0.4s ${i * 0.05}s`,
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function InterestsCard({ animated }) {
  const interests = [
    { icon: "🎮", label: "Gaming", desc: "RPG & stratégie" },
    { icon: "🧗", label: "Escalade", desc: "Bloc & voie" },
    { icon: "🎨", label: "Art digital", desc: "Illustration & 3D" },
    { icon: "🎵", label: "Musique", desc: "Rock & électro" },
  ];

  return (
    <div style={neuCard}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={labelStyle}>CENTRES D'INTÉRÊT</div>
          <div style={titleStyle}>Au-delà du code</div>
          <div style={{ ...descStyle, marginTop: "6px" }}>
            Ce qui nourrit ma créativité en dehors du code.
          </div>
        </div>
        <span style={{ fontSize: "22px", opacity: 0.7 }}>◆</span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "10px",
        }}
      >
        {interests.map((item, i) => (
          <div
            key={item.label}
            style={{
              background: "#0a0f16",
              border: "1px solid #1e2d3d",
              borderRadius: "10px",
              padding: "12px 14px",
              boxShadow: "inset 1px 1px 3px #07090d",
              opacity: animated ? 1 : 0,
              transform: animated ? "scale(1)" : "scale(0.95)",
              transition: `opacity 0.4s ${i * 0.08}s, transform 0.4s ${i * 0.08}s`,
            }}
          >
            <div style={{ fontSize: "18px", marginBottom: "4px" }}>{item.icon}</div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                color: "#c8d8e8",
                letterSpacing: "0.05em",
              }}
            >
              {item.label}
            </div>
            <div style={{ fontSize: "11px", color: "#3a5060", marginTop: "2px" }}>{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const [animated, setAnimated] = useState(false);

  // Trigger animations on mount
  useState(() => {
    const t = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(t);
  });

  const langages = [
    { name: "HTML / CSS", value: 90 },
    { name: "JAVASCRIPT / TYPESCRIPT", value: 75 },
    { name: "PYTHON", value: 50 },
    { name: "BASH", value: 45 },
    { name: "SQL", value: 40 },
  ];

  const frameworks = [
    { name: "TAILWINDCSS", value: 85 },
    { name: "REACT", value: 80 },
    { name: "NESTJS", value: 65 },
    { name: "UNREAL ENGINE 5", value: 55 },
    { name: "WORDPRESS", value: 70 },
  ];

  const outils = [
    { name: "VS CODE", value: 90 },
    { name: "GIT / GITHUB / GITLAB", value: 80 },
    { name: "N8N (AUTOMATION)", value: 70 },
    { name: "LINUX", value: 65 },
    { name: "FIGMA", value: 50 },
  ];

  return (
    <section
      id="competences"
      style={{
        background: BG_BASE,
        padding: "100px 40px",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "64px" }}>
        <div
          style={{
            display: "inline-block",
            ...labelStyle,
            background: "#120a10",
            border: `1px solid ${ACCENT}44`,
            borderRadius: "20px",
            padding: "6px 18px",
            marginBottom: "18px",
            boxShadow: `0 0 12px ${ACCENT}22`,
          }}
        >
          COMPÉTENCES
        </div>
        <h2
          style={{
            fontSize: "clamp(36px, 6vw, 56px)",
            fontWeight: "700",
            color: "#d0e0f0",
            margin: "0 0 12px",
            lineHeight: "1.1",
          }}
        >
          Stack{" "}
          <span style={{ color: ACCENT }}>Technique</span>
        </h2>
        <p style={{ ...descStyle, fontSize: "15px" }}>
          Les technologies que j'ai étudiées et utilisées
        </p>
      </div>

      {/* Thin decorative line */}
      <div
        style={{
          width: "40px",
          height: "2px",
          background: ACCENT,
          margin: "0 auto 56px",
          borderRadius: "2px",
          boxShadow: `0 0 8px ${ACCENT}66`,
        }}
      />

      {/* Top row — 3 cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          maxWidth: "1100px",
          margin: "0 auto 20px",
        }}
      >
        <SkillCard
          label="LANGAGES"
          title="Langages"
          icon="< />"
          skills={langages}
          animated={animated}
        />
        <SkillCard
          label="FRAMEWORKS"
          title="Frameworks"
          icon="{ }"
          skills={frameworks}
          animated={animated}
        />
        <SkillCard
          label="OUTILS"
          title="Outils"
          icon="⚙"
          skills={outils}
          animated={animated}
        />
      </div>

      {/* Bottom row — 2 cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <SoftSkillsCard animated={animated} />
        <InterestsCard animated={animated} />
      </div>
    </section>
  );
}