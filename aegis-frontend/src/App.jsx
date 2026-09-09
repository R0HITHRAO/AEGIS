import { useEffect, useMemo, useState } from 'react'
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bell,
  Brain,
  Check,
  ChevronDown,
  Eye,
  FileCheck2,
  Fingerprint,
  Headphones,
  Home,
  LockKeyhole,
  Menu,
  MessageSquareWarning,
  Radar,
  Search,
  Shield,
  Sparkles,
  Terminal,
  Video,
  X,
  Zap,
} from 'lucide-react'
import './App.css'

const modules = [
  { icon: Headphones, name: 'Echo Guard', label: 'Voice clone detection', color: 'cyan', detail: 'Spectral biomarker analysis for live calls.' },
  { icon: Eye, name: 'Phantom Scanner', label: 'Deepfake authentication', color: 'violet', detail: 'Frame-by-frame reality confidence scoring.' },
  { icon: Brain, name: 'Mind Mirror', label: 'Manipulation detection', color: 'gold', detail: 'See the psychological tactics behind every message.' },
  { icon: Fingerprint, name: 'Genesis Detector', label: 'AI content provenance', color: 'cyan', detail: 'Human, AI, or assisted—with evidence.' },
  { icon: Radar, name: 'Sentinel Shield', label: 'Behavioral anomaly detection', color: 'red', detail: 'Know what is unusual before you act.' },
  { icon: Home, name: 'Guardian Nest', label: 'Family protection', color: 'violet', detail: 'A shared shield for the people you trust.' },
  { icon: MessageSquareWarning, name: 'Truth Engine', label: 'Claim verification', color: 'gold', detail: 'Trace claims back to credible sources.' },
  { icon: LockKeyhole, name: 'Vault Lock', label: 'Digital identity vault', color: 'cyan', detail: 'Keep identity signals under your control.' },
  { icon: FileCheck2, name: 'Chronicle', label: 'Evidence ledger', color: 'red', detail: 'Preserve an audit-ready chain of evidence.' },
]

const threats = [
  { type: 'VOICE CLONE DETECTED', text: 'Unknown caller mimicked a trusted contact', time: '2 min ago', level: 'HIGH', color: 'red' },
  { type: 'MANIPULATION FLAGGED', text: 'Urgency engineering found in an email', time: '18 min ago', level: 'MEDIUM', color: 'gold' },
  { type: 'TRANSACTION SAVED', text: 'Payment request held for verification', time: '1 hr ago', level: 'SAFE', color: 'cyan' },
]

function Orb({ small = false }) {
  return (
    <div className={`orb ${small ? 'orb-small' : ''}`} aria-hidden="true">
      <div className="orb-grid" />
      <div className="orb-rim" />
      <div className="orb-core" />
      <div className="orb-attack attack-a" />
      <div className="orb-attack attack-b" />
      <div className="orb-attack attack-c" />
    </div>
  )
}

function Logo() {
  return <div className="brand"><Shield size={22} strokeWidth={2.5} /><span>AEGIS</span><i>01</i></div>
}

function Landing() {
  const [count, setCount] = useState(287412)
  const [activeModule, setActiveModule] = useState(null)
  useEffect(() => {
    const timer = setInterval(() => setCount((value) => value + 3 + Math.floor(Math.random() * 5)), 1000)
    return () => clearInterval(timer)
  }, [])
  return (
    <main className="landing">
      <header className="site-nav">
        <Logo />
        <nav><a href="#mission">Mission</a><a href="#shields">The shields</a><a href="#proof">Proof</a></nav>
        <a className="nav-cta" href="#activate">Activate shield <ArrowRight size={15} /></a>
      </header>
      <section className="hero-section">
        <div className="starfield" />
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse-dot" /> Cognitive defense system · v1.0</div>
          <h1>The world is<br /><span className="gradient-text">under attack.</span></h1>
          <p className="hero-lede">AI criminals have military-grade weapons.<br /><strong>You have nothing. Until now.</strong></p>
          <div className="hero-actions"><a className="button button-primary" href="#activate">Build your defense <ArrowRight size={17} /></a><a className="text-link" href="#mission">Explore the system <ChevronDown size={16} /></a></div>
          <div className="threat-counter"><span>⚠</span><strong>{count.toLocaleString()}</strong><small>AI-generated fraud attempts<br />detected in the last 60 seconds</small></div>
        </div>
        <div className="hero-orb"><Orb /><div className="orb-label label-top">THREAT SURFACE <b>ACTIVE</b></div><div className="orb-label label-bottom">LIVE TELEMETRY <b>● 24.7ms</b></div></div>
        <div className="scroll-cue"><span>01</span><div /><span>SCROLL TO DISCOVER</span></div>
      </section>
      <section className="manifesto" id="mission">
        <div className="section-kicker">01 / THE INVISIBLE WAR</div>
        <h2>Your enemy is <span className="gradient-text">invisible.</span><br />And perfect.</h2>
        <p>One convincing voice. One fabricated face. One message engineered to bypass your instincts. AEGIS turns the invisible into signals you can see, understand, and stop.</p>
        <div className="threat-scene"><div className="scene-grid" /><div className="silhouette silhouette-one" /><div className="silhouette silhouette-two" /><div className="device device-phone"><Activity size={18} /></div><div className="device device-laptop"><Terminal size={20} /></div><span className="tendril t1" /><span className="tendril t2" /><span className="tendril t3" /><div className="scene-callout c1"><b>VOICE CLONE</b><small>synthetic biomarker</small></div><div className="scene-callout c2"><b>DEEPFAKE VIDEO</b><small>temporal artifact</small></div><div className="scene-callout c3"><b>AI PHISHING</b><small>urgency pattern</small></div><div className="scene-caption">THE THREAT DOESN'T<br /><span>LOOK LIKE A THREAT.</span></div></div>
      </section>
      <section className="awakening-section"><div className="section-kicker">02 / THE AEGIS AWAKENING</div><div className="awakening-layout"><div><h2>Protection is<br /><span className="gold-text">a system.</span></h2><p>Nine specialized intelligence systems. One unified shield around the moments that matter.</p><a className="text-link" href="#shields">Meet the nine shields <ArrowRight size={16} /></a></div><div className="dome-wrap"><div className="dome"><Shield size={76} /></div><div className="orbit orbit-one" /><div className="orbit orbit-two" /><span className="orbit-node n1">01</span><span className="orbit-node n2">04</span><span className="orbit-node n3">09</span></div></div></section>
      <section className="shields-section" id="shields"><div className="section-heading"><div><div className="section-kicker">03 / THE NINE SHIELDS</div><h2>One shield.<br /><span className="gradient-text">Every signal.</span></h2></div><p>Defense that works in the background, so you can stay in the moment. Explore the intelligence layer protecting your digital life.</p></div><div className="module-grid">{modules.map((module, index) => { const Icon = module.icon; return <button className={`module-card ${module.color} ${activeModule === index ? 'selected' : ''}`} key={module.name} onClick={() => setActiveModule(activeModule === index ? null : index)}><span className="module-index">0{index + 1}</span><Icon size={26} /><h3>{module.name}</h3><span>{module.label}</span><p>{activeModule === index ? module.detail : 'Tap to inspect module →'}</p><div className="card-line" /></button> })}</div></section>
      <section className="proof-section" id="proof"><div className="section-kicker">04 / VERIFIED IMPACT</div><h2>The numbers<br /><span className="gradient-text">don't lie.</span></h2><div className="proof-grid"><div><strong>2.4M<span>+</span></strong><small>Attacks blocked</small></div><div><strong>847K<span>+</span></strong><small>Families protected</small></div><div><strong>12M<span>+</span></strong><small>Voice clones caught</small></div><div><strong>89M<span>+</span></strong><small>Attempts flagged</small></div></div></section>
      <section className="cta-section" id="activate"><div className="cta-glow" /><Sparkles size={22} className="cta-icon" /><div className="section-kicker">05 / JOIN THE RESISTANCE</div><h2>Activate<br /><span className="gold-text">your shield.</span></h2><p>Join 847,000 people who chose to fight back.</p><a className="button button-primary" href="/dashboard">Get protected now <ArrowRight size={17} /></a><div className="social-proof"><div className="avatars"><span>R</span><span>M</span><span>A</span><span>J</span><span>+</span></div><small><b>847K+</b> active shields</small></div></section>
      <footer><Logo /><span>DEFEND YOUR MIND. DEFEND YOUR WORLD.</span><div><a href="#mission">Mission</a><a href="#shields">Systems</a><a href="/dashboard">Dashboard</a></div></footer>
    </main>
  )
}

function Dashboard() {
  const [selected, setSelected] = useState('Overview')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [scanText, setScanText] = useState('')
  const [scanned, setScanned] = useState(false)
  const navItems = [{ name: 'Overview', icon: BarChart3 }, ...modules.map(({ name, icon }) => ({ name, icon }))]
  const risk = useMemo(() => scanText.length > 80 ? 72 : 18, [scanText])
  const selectedModule = modules.find((item) => item.name === selected)
  return <main className="dashboard"><aside className={sidebarOpen ? 'open' : ''}><div className="side-head"><Logo /><button className="icon-button mobile-only" onClick={() => setSidebarOpen(false)}><X size={18} /></button></div><div className="side-label">COMMAND CENTER</div><div className="side-nav">{navItems.map(({ name, icon: Icon }) => <button className={selected === name ? 'active' : ''} key={name} onClick={() => { setSelected(name); setSidebarOpen(false) }}><Icon size={17} />{name}{name === 'Chronicle' && <span className="nav-count">3</span>}</button>)}</div><div className="side-bottom"><button><LockKeyhole size={17} />Vault settings</button><div className="profile"><div className="profile-avatar">R</div><div><b>Rohith Rao</b><small>Personal shield</small></div><ChevronDown size={15} /></div></div></aside><div className="dash-content"><header className="dash-top"><button className="icon-button mobile-only" onClick={() => setSidebarOpen(true)}><Menu size={20} /></button><div className="dash-status"><span className="pulse-dot" /> SHIELD ACTIVE <small>· synced 24ms ago</small></div><div className="dash-actions"><span className="threat-mini"><Zap size={14} /> 12 threats blocked</span><button className="icon-button"><Bell size={18} /><i /></button><div className="profile-avatar">R</div></div></header><div className="dash-main"><div className="dash-welcome"><div><div className="section-kicker">WEDNESDAY · 09 SEP 2026</div><h1>Good evening, Rohith.</h1><p>Your shield is watching the signals that matter.</p></div><button className="button button-small"><Activity size={15} /> Run system scan</button></div>{selected === 'Overview' ? <Overview risk={risk} /> : <ModulePanel module={selectedModule} text={scanText} setText={setScanText} scanned={scanned} setScanned={setScanned} />}</div></div></main>
}

function Overview({ risk }) {
  return <><div className="stat-grid"><div className="dash-card stat-card"><small>THREATS BLOCKED TODAY</small><strong>24</strong><span className="stat-trend">↑ 18% vs yesterday</span><div className="mini-bars"><i /><i /><i /><i /><i /><i /><i /></div></div><div className="dash-card stat-card"><small>SHIELD STATUS</small><strong className="active-text">ACTIVE</strong><span className="stat-trend">All systems operational</span><div className="status-ring"><Shield size={24} /></div></div><div className="dash-card stat-card"><small>LAST FULL SCAN</small><strong>08:42<span className="unit">AM</span></strong><span className="stat-trend">Completed 12 min ago</span><div className="scan-wave"><i /><i /><i /><i /><i /><i /></div></div><div className="dash-card stat-card risk-card"><small>RISK SCORE</small><strong>{risk}<span className="unit">/100</span></strong><span className="stat-trend">Low exposure · improving</span><div className="risk-ring" style={{ '--risk': `${risk * 3.6}deg` }} /></div></div><div className="dash-columns"><div className="dash-card timeline-card"><div className="card-header"><h2>Recent threat timeline</h2><a href="#all">View all <ArrowRight size={14} /></a></div>{threats.map((threat) => <div className="threat-row" key={threat.type}><span className={`threat-icon ${threat.color}`}><Shield size={15} /></span><div><b>{threat.type}</b><p>{threat.text}</p></div><time>{threat.time}</time><span className={`severity ${threat.color}`}>{threat.level}</span></div>)}</div><div className="dash-card globe-card"><div className="card-header"><h2>Global signal map</h2><span className="live-label"><span className="pulse-dot" /> LIVE</span></div><Orb small /><span className="map-stat"><b>4,281</b> signals monitored</span></div></div><div className="module-health"><div className="card-header"><h2>Module health</h2><span className="all-good"><Check size={14} /> 9 / 9 operational</span></div><div className="health-grid">{modules.map(({ name, icon: Icon }) => <div key={name}><Icon size={16} /><span>{name}</span><i className="health-dot" /></div>)}</div></div></>
}

function ModulePanel({ module, text, setText, scanned, setScanned }) {
  const Icon = module?.icon || Search
  const isMind = module?.name === 'Mind Mirror'
  return <div className="module-panel"><div className="panel-title"><span className={`large-module-icon ${module?.color}`}><Icon size={27} /></span><div><div className="section-kicker">MODULE 0{modules.findIndex((item) => item.name === module?.name) + 1} / ANALYSIS</div><h1>{module?.name}</h1><p>{module?.detail}</p></div><span className="panel-online"><span className="pulse-dot" /> ONLINE</span></div><div className="analysis-layout"><div className="dash-card analysis-input"><h2>{isMind ? 'Inspect a message' : `Start a ${module?.label?.toLowerCase() || 'system'} scan`}</h2><p>{isMind ? 'Paste an email, message, or article. AEGIS will identify the persuasion patterns trying to influence you.' : 'Upload a signal or connect a source to begin a protected analysis.'}</p>{isMind ? <textarea value={text} onChange={(event) => { setText(event.target.value); setScanned(false) }} placeholder="Paste suspicious text here..." /> : <div className="drop-zone"><Video size={28} /><b>Drop a file here</b><small>or browse from your device</small></div>}<div className="input-footer"><span className="mono">LOCAL PROCESSING ENABLED</span><button className="button button-primary button-small" onClick={() => setScanned(true)}>{scanned ? 'Scan complete' : 'Analyze signal'} <ArrowRight size={15} /></button></div></div><div className={`dash-card analysis-result ${scanned ? 'has-result' : ''}`}><div className="card-header"><h2>Analysis result</h2><span className="mono">AEGIS / 0.9s</span></div>{scanned ? <div className="result-content"><div className="score-circle"><strong>{isMind ? '72' : '94'}</strong><small>confidence</small></div><div><span className={`verdict ${isMind ? 'warn' : 'safe'}`}>{isMind ? 'SUSPICIOUS' : 'AUTHENTIC'}</span><h3>{isMind ? 'Urgency engineering detected' : 'No synthetic artifacts found'}</h3><p>{isMind ? 'This message uses fear amplification and scarcity framing to compress your decision window.' : 'Signal characteristics match the expected human baseline across all verified markers.'}</p></div></div> : <div className="empty-result"><Radar size={31} /><b>Awaiting signal</b><span>Results will appear here after your analysis.</span></div>}</div></div></div>
}

function App() {
  const path = window.location.pathname
  return path.startsWith('/dashboard') ? <Dashboard /> : <Landing />
}

export default App
