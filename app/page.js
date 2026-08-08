'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'

const services = [
  { slug:'inbox-agent', icon: '✉', kicker: 'COMMUNICATION', title: 'Inbox Agent', text: 'Analysiert Anfragen, erkennt Absichten, bereitet Antworten vor und startet definierte Folgeprozesse.' },
  { slug:'document-agent', icon: '⌕', kicker: 'KNOWLEDGE', title: 'Document Agent', text: 'Verwandelt verstreutes Unternehmenswissen in präzise, nachvollziehbare Antworten mit Quellen.' },
  { slug:'process-agent', icon: '↯', kicker: 'OPERATIONS', title: 'Process Agent', text: 'Verknüpft vorhandene Tools und übernimmt repetitive Aufgaben entlang klarer Geschäftsregeln.' },
  { slug:'service-agent', icon: '◉', kicker: 'SERVICE', title: 'Service Agent', text: 'Unterstützt Supportteams bei Klassifikation, Recherche, Lösungsvorschlägen und Eskalationen.' },
  { slug:'knowledge-copilot', icon: '◇', kicker: 'INTERNAL AI', title: 'Knowledge Copilot', text: 'Macht internes Know-how rollenbasiert zugänglich – für schnellere Entscheidungen im Arbeitsalltag.' },
  { slug:'local-ai-stack', icon: '⌾', kicker: 'PRIVATE AI', title: 'Local AI Stack', text: 'Private und lokale KI-Architekturen für sensible Daten, kontrollierte Prozesse und maximale Souveränität.' },
]

const steps = [
  ['01', 'Discover', 'Wir identifizieren die Prozesse, bei denen Automatisierung wirklich Zeit, Kosten oder Fehler reduziert.'],
  ['02', 'Design', 'Wir definieren Agent, Datenquellen, Berechtigungen, Eskalationen und messbare Erfolgskriterien.'],
  ['03', 'Build', 'Ein fokussierter Prototyp zeigt schnell, wie der neue digitale Prozess im Alltag funktioniert.'],
  ['04', 'Deploy', 'Die Lösung wird kontrolliert in Ihre bestehende Systemlandschaft integriert – Cloud, private oder lokal.'],
  ['05', 'Improve', 'Wir messen Nutzung und Geschäftsnutzen und optimieren den Agenten kontinuierlich weiter.'],
]

function DotLogo({ compact = false }) {
  return (
    <div className={`dot-logo ${compact ? 'compact' : ''}`} aria-hidden="true">
      {Array.from({ length: 74 }).map((_, i) => {
        const ring = Math.floor(i / 18)
        const pos = i % 18
        const angle = (-145 + pos * 16.4 + ring * 2.8) * (Math.PI / 180)
        const radius = 36 + ring * 11
        const x = 50 + Math.cos(angle) * radius
        const y = 50 + Math.sin(angle) * radius
        const size = Math.max(2, 5.8 - ring * .75 + ((i * 7) % 4) * .35)
        return <span key={i} style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, animationDelay: `${(i % 17) * .06}s` }} />
      })}
    </div>
  )
}

function Brand({ footer = false }) {
  return (
    <div className={`brand-lockup ${footer ? 'footer-brand' : ''}`}>
      <DotLogo compact />
      <div>
        <strong>CARL<span>.AI</span></strong>
        {!footer && <small>AI AGENTS THAT WORK.</small>}
      </div>
    </div>
  )
}

function AgentMap() {
  const nodes = [
    ['Email', '✉', 'node-email'], ['CRM', '▦', 'node-crm'], ['ERP', '▤', 'node-erp'],
    ['Docs', '⌕', 'node-docs'], ['API', '⌘', 'node-api']
  ]
  return (
    <div className="agent-map">
      <div className="map-grid" />
      <div className="map-orbit orbit-a" />
      <div className="map-orbit orbit-b" />
      <svg className="map-lines" viewBox="0 0 620 520" preserveAspectRatio="none">
        <defs><linearGradient id="carl-line"><stop stopColor="#d43cff"/><stop offset=".5" stopColor="#6d74ff"/><stop offset="1" stopColor="#10dff0"/></linearGradient></defs>
        <path d="M310 260 C235 188 168 152 94 112"/><path d="M310 260 C392 187 455 165 531 120"/>
        <path d="M310 260 C210 271 141 297 69 338"/><path d="M310 260 C415 281 476 312 552 362"/>
        <path d="M310 260 C312 347 320 401 324 468"/>
      </svg>
      {nodes.map(([label, icon, cls]) => <div key={label} className={`map-node ${cls}`}><b>{icon}</b><span>{label}</span></div>)}
      <div className="map-core">
        <DotLogo compact />
        <strong>CARL.AI</strong><small>AGENT CORE</small>
      </div>
      <div className="live-pill"><span/> AGENT ONLINE</div>
    </div>
  )
}

export default function Home() {
  const [employees, setEmployees] = useState(4)
  const [hours, setHours] = useState(8)
  const [hourly, setHourly] = useState(65)
  const annual = useMemo(() => employees * hours * hourly * 52, [employees, hours, hourly])
  const minSaving = Math.round(annual * .35)
  const maxSaving = Math.round(annual * .65)
  const money = new Intl.NumberFormat('de-CH', {style:'currency', currency:'CHF', maximumFractionDigits:0})

  return <main id="top">
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/><div className="noise"/>

    <header className="site-header">
      <nav className="container nav">
        <a href="#top" className="brand-link"><Brand/></a>
        <div className="nav-links"><a href="#agents">Agents</a><Link href="/ki-modelle">KI-Modelle</Link><a href="#private">Private AI</a><a href="#approach">Vorgehen</a><a href="#about">Über Caroline</a></div>
        <a href="#contact" className="nav-cta">Projekt besprechen <span>→</span></a>
      </nav>
    </header>

    <section className="container hero section">
      <div className="hero-copy">
        <div className="eyebrow"><i/> PRIVATE AI · PROCESS AUTOMATION · SWITZERLAND</div>
        <h1>AI Agents<br/><span>that work.</span></h1>
        <p>CARL.AI entwickelt intelligente KI-Agenten, die echte Arbeit übernehmen: Prozesse automatisieren, Wissen nutzbar machen und Ihre Teams im Tagesgeschäft entlasten.</p>
        <div className="hero-actions"><a href="#contact" className="button primary">Potenzial entdecken <span>→</span></a><a href="#agents" className="button ghost">Agents ansehen <span>›</span></a></div>
        <div className="micro-trust"><span><span className="checkmark">✓</span> Business-first</span><span><span className="checkmark">✓</span> Private AI möglich</span><span><span className="checkmark">✓</span> Swiss focus</span></div>
      </div>
      <div><AgentMap/></div>
    </section>

    <div className="principles"><div className="container"><span>INTELLIGENT</span><i/> <span>AUTOMATE</span><i/> <span>GROW</span></div></div>

    <section id="agents" className="container section">
      <div className="section-top"><div><div className="eyebrow"><i/> PURPOSE-BUILT AGENTS</div><h2>Nicht noch ein Chatbot.<br/><span>Ein digitaler Prozess.</span></h2></div><p>Wir bauen KI nicht um der KI willen. Jeder Agent beginnt mit einer konkreten Aufgabe, einem klaren Prozess und einem messbaren Nutzen für Ihr Unternehmen.</p></div>
      <div className="agent-cards">{services.map(({slug,icon,kicker,title,text})=><article key={title} className="agent-card"><div className="card-head"><div className="card-icon"><span className="glyph">{icon}</span></div><small>{kicker}</small></div><h3>{title}</h3><p>{text}</p><Link className="learn" href={`/agents/${slug}`}>Anwendungsfall entdecken <span>→</span></Link></article>)}</div>
    </section>

    <section id="private" className="section private-band">
      <div className="container private-grid">
        <div className="private-copy"><div className="eyebrow"><i/> LOCAL & PRIVATE AI</div><h2>Ihre Daten.<br/><span>Ihre Kontrolle.</span></h2><p>Sensible Unternehmensdaten müssen nicht automatisch in einer öffentlichen KI-Cloud landen. CARL.AI konzipiert auf Wunsch private oder lokale Architekturen mit klaren Zugriffsrechten und kontrollierten Datenflüssen.</p><div className="checks"><span><span className="checkmark">✓</span> Lokaler Modellbetrieb möglich</span><span><span className="checkmark">✓</span> Rollen- & Berechtigungskonzepte</span><span><span className="checkmark">✓</span> Unternehmenswissen via RAG</span><span><span className="checkmark">✓</span> Human-in-the-loop & Eskalationen</span><span><span className="checkmark">✓</span> Protokollierbare Agent-Aktionen</span></div></div>
        <div className="private-visual"><div className="halo h1"/><div className="halo h2"/><div className="halo h3"/><div className="secure-core"><div className="secure-inner"><span className="big-glyph">◈</span><strong>PRIVATE</strong><small>AI CORE</small></div></div><div className="pv-chip c1"><span>▤</span> DATA</div><div className="pv-chip c2"><span>⌘</span> MODEL</div><div className="pv-chip c3"><span>⌯</span> SYSTEMS</div><div className="pv-chip c4"><span>⌾</span> ACCESS</div></div>
      </div>
    </section>

    <section className="container section roi-section">
      <div className="roi-intro"><div className="eyebrow"><i/> BUSINESS CASE</div><h2>Was kostet Ihr<br/><span>manueller Prozess?</span></h2><p>Mit wenigen Angaben erhalten Sie eine erste Orientierung, welche Grössenordnung repetitive Arbeit heute verursachen kann.</p></div>
      <div className="roi-card">
        <div className="slider-row"><label><span>Mitarbeitende</span><b>{employees}</b></label><input type="range" min="1" max="20" value={employees} onChange={e=>setEmployees(+e.target.value)}/></div>
        <div className="slider-row"><label><span>Stunden pro Woche</span><b>{hours} h</b></label><input type="range" min="1" max="40" value={hours} onChange={e=>setHours(+e.target.value)}/></div>
        <div className="slider-row"><label><span>Personalkosten pro Stunde</span><b>CHF {hourly}</b></label><input type="range" min="35" max="160" step="5" value={hourly} onChange={e=>setHourly(+e.target.value)}/></div>
        <div className="roi-output"><small>GESCHÄTZTE JÄHRLICHE PROZESSKOSTEN</small><strong>{money.format(annual)}</strong><div><span>Mögliches Automatisierungspotenzial*</span><b>{money.format(minSaving)} – {money.format(maxSaving)}</b></div></div>
        <p className="fineprint">*Illustrative Potenzialschätzung, keine Einspargarantie. Der tatsächliche Nutzen hängt vom Prozess, Datenqualität, Integrationsaufwand und Automatisierungsgrad ab.</p>
      </div>
    </section>

    <section id="approach" className="section approach-band"><div className="container"><div className="section-top compact"><div><div className="eyebrow"><i/> FROM PROCESS TO AGENT</div><h2>Von der Idee zum<br/><span>produktiven Agenten.</span></h2></div><p>Keine monatelange Blackbox-Entwicklung. Wir starten klein, validieren früh und skalieren nur, was im echten Betrieb Nutzen erzeugt.</p></div><div className="steps">{steps.map(([n,t,d])=><div className="step" key={n}><div className="step-no">{n}</div><div className="step-dot"/><h3>{t}</h3><p>{d}</p></div>)}</div></div></section>

    <section id="about" className="container section about-section">
      <div className="about-panel"><div className="about-art"><div className="portrait-ring"><DotLogo/><div className="cm">CM</div></div><div className="founder-label"><span>✦</span> FOUNDER · BUSINESS × AI</div></div><div className="about-copy"><div className="eyebrow"><i/> FOUNDER</div><h2>Technologie verstehen.<br/><span>Unternehmen verstehen.</span></h2><p className="quote">„KI ist kein Selbstzweck. Sie muss Prozesse vereinfachen, Menschen entlasten und einen nachvollziehbaren Nutzen schaffen.“</p><h3>Caroline Metzger</h3><p>Founder & AI Process Consultant</p><div className="credentials"><span>Betriebswirtschafterin HF</span><span>SIZ Professional</span><span>AI / Claude Training</span></div></div></div>
    </section>

    <section id="contact" className="container section"><div className="contact-card"><div className="contact-logo"><DotLogo/></div><div className="eyebrow centered"><i/> START A CONVERSATION</div><h2>Welcher Prozess kostet Ihr Unternehmen<br/><span>unnötig Zeit?</span></h2><p>Sie müssen noch nicht wissen, welchen Agenten Sie brauchen. Zeigen Sie uns den Prozess – wir prüfen gemeinsam, ob und wie Automatisierung sinnvoll ist.</p><a className="button white" href="mailto:hello@example.com?subject=CARL.AI%20Potenzialgespr%C3%A4ch">Potenzialgespräch anfragen <span>→</span></a><div className="contact-meta"><span><span>↯</span> 30 Minuten</span><span><span>◴</span> unverbindlich</span><span><span>◎</span> keine KI-Vorkenntnisse nötig</span></div></div></section>

    <footer className="footer"><div className="container footer-inner"><Brand footer/><div className="footer-center">INTELLIGENT <i/> AUTOMATE <i/> GROW</div><div className="footer-links"><a href="#">Impressum</a><a href="#">Datenschutz</a><span>© 2026 CARL.AI</span></div></div></footer>
  </main>
}
