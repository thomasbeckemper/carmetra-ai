'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight, BrainCircuit, Bot, FileSearch, Mail, Network,
  ShieldCheck, Sparkles, Workflow, CheckCircle2, Database,
  LockKeyhole, Cpu, BarChart3, Users, Clock3
} from 'lucide-react'

const services = [
  {
    icon: Mail,
    title: 'Communication Agent',
    text: 'Analysiert E-Mails, erkennt Anliegen, bereitet Antworten vor und stößt definierte Folgeprozesse an.'
  },
  {
    icon: FileSearch,
    title: 'Document Agent',
    text: 'Durchsucht internes Wissen, Anleitungen und Dokumente und liefert nachvollziehbare Antworten mit Quellen.'
  },
  {
    icon: Workflow,
    title: 'Process Agent',
    text: 'Verbindet bestehende Systeme und automatisiert repetitive Arbeitsschritte über definierte Workflows.'
  },
  {
    icon: Bot,
    title: 'Service Agent',
    text: 'Unterstützt Service- und Supportteams bei Anfragen, Recherche, Klassifikation und Eskalation.'
  },
  {
    icon: BrainCircuit,
    title: 'Knowledge Agent',
    text: 'Macht Unternehmenswissen sicher, schnell und rollenbasiert für Mitarbeitende verfügbar.'
  },
  {
    icon: ShieldCheck,
    title: 'Private AI',
    text: 'Lokale oder private KI-Architekturen für sensible Daten, interne Prozesse und maximale Kontrolle.'
  }
]

const steps = [
  ['01', 'Analyse', 'Wir identifizieren Prozesse mit echtem Automatisierungspotenzial und bewerten Aufwand, Nutzen und Risiken.'],
  ['02', 'Prototype', 'Ein fokussierter Proof of Concept zeigt schnell, wie der neue digitale Prozess im Alltag funktioniert.'],
  ['03', 'Integration', 'Der Agent wird kontrolliert mit vorhandenen Datenquellen, Tools und Systemen verbunden.'],
  ['04', 'Kontrolle', 'Berechtigungen, Human-in-the-loop, Protokollierung und klare Eskalationswege sorgen für Sicherheit.'],
  ['05', 'Optimierung', 'Wir messen den tatsächlichen Nutzen und verbessern die Lösung anhand realer Unternehmensdaten.']
]

function GlowOrb({ className }) {
  return <div className={`orb ${className}`} />
}

function AgentGraph() {
  return (
    <div className="agent-graph" aria-label="Visualisierung eines KI-Prozesses">
      <div className="graph-grid" />
      <div className="node node-mail"><Mail size={18}/> E-Mail</div>
      <div className="node node-crm"><Users size={18}/> CRM</div>
      <div className="node node-doc"><Database size={18}/> Dokumente</div>
      <div className="node node-erp"><BarChart3 size={18}/> ERP</div>
      <motion.div
        className="core-node"
        animate={{ boxShadow: ['0 0 30px rgba(107,94,255,.25)','0 0 70px rgba(61,221,255,.45)','0 0 30px rgba(107,94,255,.25)'] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Sparkles size={25}/>
        <span>CARMETRA</span>
        <small>AI AGENT</small>
      </motion.div>
      <svg className="connections" viewBox="0 0 600 470" preserveAspectRatio="none">
        <defs>
          <linearGradient id="line" x1="0" x2="1">
            <stop offset="0" stopColor="#6b5eff" />
            <stop offset="1" stopColor="#41e8ff" />
          </linearGradient>
        </defs>
        <path d="M120 90 C210 90 210 210 300 220" />
        <path d="M480 90 C390 90 390 210 300 220" />
        <path d="M120 380 C210 380 210 250 300 240" />
        <path d="M480 380 C390 380 390 250 300 240" />
      </svg>
      <div className="status-pill"><span /> Prozess aktiv</div>
    </div>
  )
}

export default function Home() {
  const [employees, setEmployees] = useState(4)
  const [hours, setHours] = useState(8)
  const [hourly, setHourly] = useState(65)

  const annual = useMemo(() => employees * hours * hourly * 52, [employees, hours, hourly])
  const minSaving = Math.round(annual * 0.4)
  const maxSaving = Math.round(annual * 0.68)
  const money = new Intl.NumberFormat('de-CH', { style: 'currency', currency: 'CHF', maximumFractionDigits: 0 })

  return (
    <main>
      <GlowOrb className="orb-one" />
      <GlowOrb className="orb-two" />

      <nav className="nav container">
        <a className="brand" href="#top">
          <div className="brand-mark"><span /></div>
          <div><strong>CARMETRA</strong><small>AI AUTOMATION</small></div>
        </a>
        <div className="nav-links">
          <a href="#solutions">Lösungen</a>
          <a href="#private-ai">Private AI</a>
          <a href="#process">Vorgehen</a>
          <a href="#about">Über uns</a>
        </div>
        <a className="button button-small" href="#contact">Potenzialgespräch</a>
      </nav>

      <section id="top" className="hero container section">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
        >
          <div className="eyebrow"><span></span> PRIVATE AI AUTOMATION · SWITZERLAND</div>
          <h1>KI, die nicht nur antwortet.<br/><em>Sondern arbeitet.</em></h1>
          <p className="hero-text">CARMETRA entwickelt massgeschneiderte KI-Agenten, die Prozesse automatisieren, Mitarbeitende entlasten und auf Wunsch vollständig innerhalb Ihrer eigenen IT-Infrastruktur arbeiten.</p>
          <div className="hero-actions">
            <a className="button" href="#contact">Kostenloses Potenzialgespräch <ArrowRight size={18}/></a>
            <a className="text-link" href="#solutions">KI-Agenten entdecken <ArrowRight size={16}/></a>
          </div>
          <div className="trust-row">
            <span><CheckCircle2 size={16}/> Schweizer Fokus</span>
            <span><CheckCircle2 size={16}/> Private AI möglich</span>
            <span><CheckCircle2 size={16}/> Business-first</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: .95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .9, delay: .15 }}
        >
          <AgentGraph />
        </motion.div>
      </section>

      <section className="stats-strip">
        <div className="container stats-grid">
          <div><strong>24 / 7</strong><span>Automatisierbare Prozesse</span></div>
          <div><strong>100%</strong><span>Private AI möglich</span></div>
          <div><strong>1 Ziel</strong><span>Messbarer Geschäftsnutzen</span></div>
        </div>
      </section>

      <section id="solutions" className="container section">
        <div className="section-heading">
          <div className="eyebrow"><span></span> USE CASES</div>
          <h2>Was könnte ein Agent<br/>bei Ihnen übernehmen?</h2>
          <p>Keine KI-Spielerei. Sondern fokussierte digitale Mitarbeitende für wiederkehrende, klar definierte Aufgaben.</p>
        </div>
        <div className="cards-grid">
          {services.map(({icon: Icon, title, text}, idx) => (
            <motion.article
              key={title}
              className="glass-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .25 }}
              transition={{ delay: idx * .06 }}
              whileHover={{ y: -6 }}
            >
              <div className="icon-box"><Icon size={23}/></div>
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="card-link">Mehr erfahren <ArrowRight size={15}/></span>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="calculator-wrap section">
        <div className="container calculator-grid">
          <div>
            <div className="eyebrow"><span></span> BUSINESS CASE</div>
            <h2>Was kostet Sie ein<br/>manueller Prozess?</h2>
            <p>Ein einfacher Rechner macht Automatisierung verständlich. Die Werte sind eine erste Potenzialschätzung und keine Einspargarantie.</p>
          </div>
          <div className="calculator-card">
            <label>Mitarbeitende <b>{employees}</b></label>
            <input type="range" min="1" max="20" value={employees} onChange={e => setEmployees(Number(e.target.value))}/>
            <label>Stunden pro Woche <b>{hours}</b></label>
            <input type="range" min="1" max="40" value={hours} onChange={e => setHours(Number(e.target.value))}/>
            <label>Personalkosten pro Stunde <b>CHF {hourly}</b></label>
            <input type="range" min="35" max="160" step="5" value={hourly} onChange={e => setHourly(Number(e.target.value))}/>
            <div className="calc-result">
              <span>Geschätzte jährliche Prozesskosten</span>
              <strong>{money.format(annual)}</strong>
            </div>
            <div className="saving-result">
              <span>Mögliches Automatisierungspotenzial*</span>
              <strong>{money.format(minSaving)} – {money.format(maxSaving)}</strong>
            </div>
            <small>*Illustrative Potenzialschätzung. Der tatsächliche Nutzen hängt vom Prozess ab.</small>
          </div>
        </div>
      </section>

      <section id="private-ai" className="container section private-section">
        <div className="private-visual">
          <div className="shield-ring ring-one" />
          <div className="shield-ring ring-two" />
          <div className="shield-core"><LockKeyhole size={38}/><strong>PRIVATE AI</strong><span>inside your infrastructure</span></div>
          <div className="satellite sat-one"><Database size={18}/> Daten</div>
          <div className="satellite sat-two"><Cpu size={18}/> Modelle</div>
          <div className="satellite sat-three"><Network size={18}/> Systeme</div>
        </div>
        <div className="private-copy">
          <div className="eyebrow"><span></span> LOCAL & PRIVATE AI</div>
          <h2>Ihre Daten müssen Ihr Unternehmen nicht verlassen.</h2>
          <p>Für sensible Informationen entwickeln wir Architekturen, bei denen Unternehmenswissen, Zugriffsrechte und Prozesse kontrollierbar bleiben.</p>
          <div className="check-list">
            <span><CheckCircle2/> Lokaler Modellbetrieb möglich</span>
            <span><CheckCircle2/> Rollen- und Berechtigungskonzepte</span>
            <span><CheckCircle2/> RAG mit internem Unternehmenswissen</span>
            <span><CheckCircle2/> Protokollierung & Human-in-the-loop</span>
            <span><CheckCircle2/> Integration bestehender Systeme</span>
          </div>
        </div>
      </section>

      <section id="process" className="process-section section">
        <div className="container">
          <div className="section-heading compact">
            <div className="eyebrow"><span></span> VORGEHEN</div>
            <h2>Von Ihrem Prozess zum digitalen Mitarbeiter.</h2>
          </div>
          <div className="timeline">
            {steps.map(([num, title, text]) => (
              <div className="timeline-step" key={num}>
                <div className="step-num">{num}</div>
                <div><h3>{title}</h3><p>{text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="container section about-section">
        <div className="about-card">
          <div className="founder-visual">
            <div className="founder-initials">CM</div>
            <div className="founder-badge"><Sparkles size={16}/> Founder</div>
          </div>
          <div className="about-copy">
            <div className="eyebrow"><span></span> FOUNDER</div>
            <h2>Technologie verstehen.<br/>Unternehmen verstehen.</h2>
            <p className="quote">„KI ist kein Selbstzweck. Sie muss Prozesse besser machen, Menschen entlasten und einen messbaren Nutzen schaffen.“</p>
            <h3>Caroline Metzger</h3>
            <p>Founder & AI Process Consultant</p>
            <div className="badges"><span>Betriebswirtschafterin HF</span><span>SIZ Professional</span><span>AI / Claude Training</span></div>
          </div>
        </div>
      </section>

      <section id="contact" className="container section contact-section">
        <div className="cta-card">
          <div className="eyebrow light"><span></span> STARTEN SIE MIT EINEM PROZESS</div>
          <h2>Welcher Prozess kostet Ihr Unternehmen unnötig Zeit?</h2>
          <p>In einem unverbindlichen Erstgespräch klären wir, ob und wo sich KI-Automatisierung für Ihr Unternehmen wirklich lohnt.</p>
          <a href="mailto:hello@carmetra-ai.ch" className="button button-light">Potenzialgespräch anfragen <ArrowRight size={18}/></a>
          <div className="cta-meta"><span><Clock3 size={16}/> 30 Minuten</span><span><CheckCircle2 size={16}/> unverbindlich</span><span><CheckCircle2 size={16}/> ohne Techniksprech</span></div>
        </div>
      </section>

      <footer className="footer container">
        <a className="brand" href="#top"><div className="brand-mark"><span /></div><div><strong>CARMETRA</strong><small>AI AUTOMATION</small></div></a>
        <p>Private AI Automation für Schweizer Unternehmen.</p>
        <div><a href="#">Impressum</a><a href="#">Datenschutz</a></div>
      </footer>
    </main>
  )
}
