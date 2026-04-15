"use client";

import { useState } from "react";

export default function Portfolio() {
  const [lang, setLang] = useState("en");

  const t = {
    en: {
      title: "Technical Support Engineer",
      summary:
        "Technical Support Engineer focused on IT operations, system reliability, incident management, and automation.",
      experience: "Professional Experience",
      skills: "Technical Skills",
      certifications: "Certifications",
      download: "Download CV",
      contact: "Contact Recruiter",
      availability: "Belgium • Open to Remote / Hybrid",
    },
    nl: {
      title: "Technical Support Engineer",
      summary:
        "Technical Support Engineer met focus op IT-operaties, systeemstabiliteit, incidentbeheer en automatisatie.",
      experience: "Professionele Ervaring",
      skills: "Technische Vaardigheden",
      certifications: "Certificeringen",
      download: "Download CV",
      contact: "Contacteer Recruiter",
      availability: "België • Beschikbaar Remote / Hybride",
    },
  };

  return (
    <div style={{ fontFamily: "sans-serif", background: "#0d1117", color: "#c9d1d9", minHeight: "100vh", padding: "20px" }}>
      <header style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #30363d", paddingBottom: 10 }}>
        <div>yourname / cv</div>
        <div>
          <button onClick={() => setLang("en")}>EN</button>
          <button onClick={() => setLang("nl")}>NL</button>
        </div>
      </header>

      <main style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 20, marginTop: 20 }}>
        <section>
          <h1>{t[lang].title}</h1>
          <p>{t[lang].summary}</p>

          <h2>{t[lang].experience}</h2>
          <ul>
            <li>IT Support Engineer - SLA incident resolution</li>
            <li>IT Manager - infrastructure maintenance</li>
          </ul>

          <h2>{t[lang].skills}</h2>
          <p>Windows, Linux, Networking, Automation</p>

          <h2>{t[lang].certifications}</h2>
          <p>IT Fundamentals, Networking Basics</p>
        </section>

        <aside>
          <h3>Your Name</h3>
          <p>{t[lang].availability}</p>
          <button>{t[lang].download}</button>
          <button>{t[lang].contact}</button>
        </aside>
      </main>
    </div>
  );
}
