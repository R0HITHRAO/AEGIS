import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
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
  Upload,
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

function NeuralArtifact({ progress }) {
  const group = useRef()
  const brain = useRef()
  const nodes = useRef()
  const points = useMemo(() => {
    const values = []
    for (let i = 0; i < 900; i += 1) {
      const theta = (i * 2.399963) % (Math.PI * 2)
      const phi = Math.acos(1 - 2 * ((i + 0.5) / 900))
      const radius = 1.8 + Math.sin(i * 12.9898) * 0.12
      values.push(new THREE.Vector3(
        Math.sin(phi) * Math.cos(theta) * radius * 1.08,
        Math.cos(phi) * radius,
        Math.sin(phi) * Math.sin(theta) * radius * 0.78,
      ))
    }
    return values
  }, [])
  useFrame((_, delta) => {
    if (!group.current) return
    group.current.rotation.y += delta * 0.08
    group.current.rotation.x = progress < 0.3 ? progress * 0.3 : (progress - 0.5) * 0.15
    if (brain.current) brain.current.scale.setScalar(1 + progress * 0.18)
    if (nodes.current) nodes.current.material.opacity = 0.2 + Math.min(progress * 1.7, 0.8)
  })
  const geometry = useMemo(() => {
    const buffer = new THREE.BufferGeometry()
    buffer.setFromPoints(points)
    return buffer
  }, [points])
  return <group ref={group}>
    <points ref={brain} geometry={geometry}><pointsMaterial color="#00ffd1" size={0.026} transparent opacity={0.75} blending={THREE.AdditiveBlending} /></points>
    <points ref={nodes} geometry={geometry}><pointsMaterial color={progress > 0.35 ? '#9c6cff' : '#ff4545'} size={0.055} transparent opacity={0.3} blending={THREE.AdditiveBlending} /></points>
    {Array.from({ length: 18 }, (_, index) => <mesh key={index} position={points[index * 42]}><sphereGeometry args={[0.045, 8, 8]} /><meshBasicMaterial color={progress > 0.35 ? '#00ffd1' : '#ff4545'} /></mesh>)}
  </group>
}

function EngineNetwork({ progress }) {
  const group = useRef()
  useFrame((_, delta) => { if (group.current) group.current.rotation.y += delta * 0.12 })
  const lines = useMemo(() => Array.from({ length: 20 }, (_, i) => {
    const a = new THREE.Vector3(Math.sin(i) * 1.4, Math.cos(i * 1.7) * 1.4, Math.sin(i * 2) * 1.1)
    const b = new THREE.Vector3(Math.sin(i + 1.2) * 1.4, Math.cos(i * 1.7 + 1) * 1.4, Math.sin(i * 2 + 1) * 1.1)
    return [a, b]
  }), [])
  return <group ref={group}>{lines.map(([a, b], index) => <group key={index}><line><bufferGeometry><bufferAttribute attach="attributes-position" count={2} array={new Float32Array([...a.toArray(), ...b.toArray()])} itemSize={3} /></bufferGeometry><lineBasicMaterial color={index / 20 < progress ? '#00ffd1' : '#263b3c'} transparent opacity={0.8} /></line><mesh position={a}><sphereGeometry args={[0.07, 8, 8]} /><meshBasicMaterial color={index / 20 < progress ? '#00ffd1' : '#30494a'} /></mesh></group>)}</group>
}

function GlobeArtifact({ progress }) {
  const group = useRef()
  useFrame((_, delta) => { if (group.current) group.current.rotation.y += delta * 0.1 })
  return <group ref={group}><mesh><sphereGeometry args={[1.8, 32, 32]} /><meshBasicMaterial color="#073b3c" wireframe transparent opacity={0.55} /></mesh>{Array.from({ length: 16 }, (_, i) => <mesh key={i} position={[Math.sin(i) * 1.7, Math.cos(i * 1.3) * 1.3, Math.sin(i * 2.1) * 1.4]}><sphereGeometry args={[0.045 + progress * 0.03, 8, 8]} /><meshBasicMaterial color={i % 3 === 0 ? '#ffd44d' : '#00ffd1'} /></mesh>)}</group>
}

function ScrollCanvas({ progress }) {
  return <div className="webgl-stage"><Canvas camera={{ position: [0, 0, 7], fov: 42 }} dpr={[1, 1.5]}><ambientLight intensity={0.2} /><pointLight position={[3, 2, 4]} color="#00ffd1" intensity={8} /><NeuralArtifact progress={progress} /><EngineNetwork progress={progress} /><GlobeArtifact progress={progress} /></Canvas></div>
}

function Landing() {
  const [count, setCount] = useState(287412)
  const [activeModule, setActiveModule] = useState(null)
  const [progress, setProgress] = useState(0)
  const scrollRoot = useRef()
  useEffect(() => {
    const timer = setInterval(() => setCount((value) => value + 3 + Math.floor(Math.random() * 5)), 1000)
    return () => clearInterval(timer)
  }, [])
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const trigger = ScrollTrigger.create({ trigger: scrollRoot.current, start: 'top top', end: 'bottom bottom', scrub: true, onUpdate: (self) => setProgress(self.progress) })
    return () => trigger.kill()
  }, [])
  return (
    <main className="landing cinematic-landing" ref={scrollRoot}>
      <header className="site-nav">
        <Logo />
        <nav><a href="#mission">Mission</a><a href="#shields">The shields</a><a href="#proof">Proof</a></nav>
        <a className="nav-cta" href="#activate">Activate shield <ArrowRight size={15} /></a>
      </header>
      <ScrollCanvas progress={progress} />
      <section className="scroll-scene scene-problem">
        <div className="starfield" />
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse-dot" /> Cognitive defense system · v1.0</div>
          <h1>The world is<br /><span className="gradient-text">under attack.</span></h1>
          <p className="hero-lede">AI criminals have military-grade weapons.<br /><strong>You have nothing. Until now.</strong></p>
          <div className="hero-actions"><a className="button button-primary" href="#activate">Build your defense <ArrowRight size={17} /></a><a className="text-link" href="#mission">Explore the system <ChevronDown size={16} /></a></div>
          <div className="threat-counter"><span>⚠</span><strong>{count.toLocaleString()}</strong><small>AI-generated fraud attempts<br />detected in the last 60 seconds</small></div>
        </div>
        <div className="scene-readout"><span>SCENE 01 / THE PROBLEM</span><b>BRAIN INTEGRITY <em>41%</em></b><small>Fragmentation detected across cognitive surface</small></div>
        <div className="scroll-cue"><span>01</span><div /><span>SCROLL TO ACTIVATE</span></div>
      </section>
      <section className="scroll-scene scene-engine" id="mission">
        <div className="scene-copy"><div className="section-kicker">SCENE 02 / THE AI ENGINE</div><h2>Intelligence<br /><span className="gradient-text">awakens.</span></h2><p>Watch the defense layer learn the signals your instincts cannot see.</p><div className="engine-status"><span className="pulse-dot" /> NEURAL NETWORK ONLINE <b>{Math.max(1, Math.floor(progress * 9))} / 9 LAYERS</b></div></div>
        <div className="engine-readout"><span>FEATURE ACTIVATION</span><b>VOICE · VISION · LANGUAGE</b><small>Weights converging / response latency 24.7ms</small></div>
      </section>
      <section className="scroll-scene scene-features" id="shields"><div className="scene-copy"><div className="section-kicker">SCENE 03 / FEATURE DEMOS</div><h2>Every signal.<br /><span className="gradient-text">protected.</span></h2><p>Scroll through the intelligence layer. Each shield turns a different attack surface into a readable, actionable signal.</p></div><div className="feature-stack">{modules.slice(0, 5).map((module, index) => { const Icon = module.icon; return <button className={`feature-3d-card ${module.color} ${activeModule === index ? 'selected' : ''}`} key={module.name} onClick={() => setActiveModule(activeModule === index ? null : index)}><span>0{index + 1}</span><Icon size={28} /><b>{module.name}</b><small>{module.label}</small><em>{activeModule === index ? module.detail : 'INSPECT SIGNAL →'}</em></button> })}</div></section>
      <section className="scroll-scene scene-impact" id="proof"><div className="scene-copy"><div className="section-kicker">SCENE 04 / IMPACT DASHBOARD</div><h2>Defense at<br /><span className="gradient-text">global scale.</span></h2><p>Every protected signal strengthens the network without exposing the people inside it.</p></div><div className="impact-stats"><div><b>2.4M<span>+</span></b><small>ATTACKS BLOCKED</small></div><div><b>847K<span>+</span></b><small>FAMILIES PROTECTED</small></div><div><b>89M<span>+</span></b><small>ATTEMPTS FLAGGED</small></div></div></section>
      <section className="scroll-scene scene-cta" id="activate"><div className="cta-glow" /><Sparkles size={22} className="cta-icon" /><div className="section-kicker">SCENE 05 / LIVE DEMO</div><h2>Step inside<br /><span className="gold-text">the shield.</span></h2><p>Particles become protection. Your command center is ready.</p><a className="button button-primary" href="/dashboard">Launch the actual app <ArrowRight size={17} /></a><div className="social-proof"><div className="avatars"><span>R</span><span>M</span><span>A</span><span>J</span><span>+</span></div><small><b>847K+</b> active shields</small></div></section>
      <footer><Logo /><span>DEFEND YOUR MIND. DEFEND YOUR WORLD.</span><div><a href="#mission">Mission</a><a href="#shields">Systems</a><a href="/dashboard">Dashboard</a></div></footer>
    </main>
  )
}

function Dashboard() {
  const [selected, setSelected] = useState('Overview')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [scanText, setScanText] = useState('')
  const [scanned, setScanned] = useState(false)
  const [notice, setNotice] = useState('')
  const [scanning, setScanning] = useState(false)
  const navItems = [{ name: 'Overview', icon: BarChart3 }, ...modules.map(({ name, icon }) => ({ name, icon }))]
  const risk = useMemo(() => scanText.length > 80 ? 72 : 18, [scanText])
  const selectedModule = modules.find((item) => item.name === selected)
  const showNotice = (message) => {
    setNotice(message)
    window.setTimeout(() => setNotice(''), 2600)
  }
  const runSystemScan = () => {
    setScanning(true)
    window.setTimeout(() => {
      setScanning(false)
      showNotice('System scan complete — all 9 shields are operational.')
    }, 1200)
  }
  return <main className="dashboard"><aside className={sidebarOpen ? 'open' : ''}><div className="side-head"><Logo /><button className="icon-button mobile-only" onClick={() => setSidebarOpen(false)}><X size={18} /></button></div><div className="side-label">COMMAND CENTER</div><div className="side-nav">{navItems.map(({ name, icon: Icon }) => <button className={selected === name ? 'active' : ''} key={name} onClick={() => { setSelected(name); setScanned(false); setSidebarOpen(false) }}><Icon size={17} />{name}{name === 'Chronicle' && <span className="nav-count">3</span>}</button>)}</div><div className="side-bottom"><button onClick={() => showNotice('Vault settings are protected and ready to configure.')}><LockKeyhole size={17} />Vault settings</button><button className="profile profile-button" onClick={() => showNotice('Profile controls opened for Rohith Rao.')}><div className="profile-avatar">R</div><div><b>Rohith Rao</b><small>Personal shield</small></div><ChevronDown size={15} /></button></div></aside><div className="dash-content"><header className="dash-top"><button className="icon-button mobile-only" onClick={() => setSidebarOpen(true)}><Menu size={20} /></button><div className="dash-status"><span className="pulse-dot" /> SHIELD ACTIVE <small>· synced 24ms ago</small></div><div className="dash-actions"><span className="threat-mini"><Zap size={14} /> 12 threats blocked</span><button className="icon-button" onClick={() => showNotice('No new notifications — your shield is quiet.')}><Bell size={18} /><i /></button><button className="profile-avatar avatar-button" onClick={() => showNotice('Signed in as Rohith Rao.')} aria-label="Open profile">R</button></div></header><div className="dash-main"><div className="dash-welcome"><div><div className="section-kicker">WEDNESDAY · 09 SEP 2026</div><h1>Good evening, Rohith.</h1><p>Your shield is watching the signals that matter.</p></div><button className="button button-small" onClick={runSystemScan} disabled={scanning}><Activity size={15} /> {scanning ? 'Scanning...' : 'Run system scan'}</button></div>{selected === 'Overview' ? <Overview risk={risk} onViewAll={() => showNotice('Timeline expanded — 3 incidents require your attention.')} /> : <ModulePanel module={selectedModule} text={scanText} setText={setScanText} scanned={scanned} setScanned={setScanned} onNotice={showNotice} />}</div></div>{notice && <div className="toast" role="status"><Check size={16} />{notice}</div>}</main>
}

function Overview({ risk, onViewAll }) {
  return <><div className="stat-grid"><div className="dash-card stat-card"><small>THREATS BLOCKED TODAY</small><strong>24</strong><span className="stat-trend">↑ 18% vs yesterday</span><div className="mini-bars"><i /><i /><i /><i /><i /><i /><i /></div></div><div className="dash-card stat-card"><small>SHIELD STATUS</small><strong className="active-text">ACTIVE</strong><span className="stat-trend">All systems operational</span><div className="status-ring"><Shield size={24} /></div></div><div className="dash-card stat-card"><small>LAST FULL SCAN</small><strong>08:42<span className="unit">AM</span></strong><span className="stat-trend">Completed 12 min ago</span><div className="scan-wave"><i /><i /><i /><i /><i /><i /></div></div><div className="dash-card stat-card risk-card"><small>RISK SCORE</small><strong>{risk}<span className="unit">/100</span></strong><span className="stat-trend">Low exposure · improving</span><div className="risk-ring" style={{ '--risk': `${risk * 3.6}deg` }} /></div></div><div className="dash-columns"><div className="dash-card timeline-card"><div className="card-header"><h2>Recent threat timeline</h2><button className="inline-action" onClick={onViewAll}>View all <ArrowRight size={14} /></button></div>{threats.map((threat) => <div className="threat-row" key={threat.type}><span className={`threat-icon ${threat.color}`}><Shield size={15} /></span><div><b>{threat.type}</b><p>{threat.text}</p></div><time>{threat.time}</time><span className={`severity ${threat.color}`}>{threat.level}</span></div>)}</div><div className="dash-card globe-card"><div className="card-header"><h2>Global signal map</h2><span className="live-label"><span className="pulse-dot" /> LIVE</span></div><Orb small /><span className="map-stat"><b>4,281</b> signals monitored</span></div></div><div className="module-health"><div className="card-header"><h2>Module health</h2><span className="all-good"><Check size={14} /> 9 / 9 operational</span></div><div className="health-grid">{modules.map(({ name, icon: Icon }) => <div key={name}><Icon size={16} /><span>{name}</span><i className="health-dot" /></div>)}</div></div></>
}

function ModulePanel({ module, text, setText, scanned, setScanned, onNotice }) {
  const Icon = module?.icon || Search
  const isMind = module?.name === 'Mind Mirror'
  const [file, setFile] = useState(null)
  return <div className="module-panel"><div className="panel-title"><span className={`large-module-icon ${module?.color}`}><Icon size={27} /></span><div><div className="section-kicker">MODULE 0{modules.findIndex((item) => item.name === module?.name) + 1} / ANALYSIS</div><h1>{module?.name}</h1><p>{module?.detail}</p></div><span className="panel-online"><span className="pulse-dot" /> ONLINE</span></div><div className="analysis-layout"><div className="dash-card analysis-input"><h2>{isMind ? 'Inspect a message' : `Start a ${module?.label?.toLowerCase() || 'system'} scan`}</h2><p>{isMind ? 'Paste an email, message, or article. AEGIS will identify the persuasion patterns trying to influence you.' : 'Upload a signal or connect a source to begin a protected analysis.'}</p>{isMind ? <textarea value={text} onChange={(event) => { setText(event.target.value); setScanned(false) }} placeholder="Paste suspicious text here..." /> : <label className="drop-zone"><input type="file" accept={module?.name === 'Phantom Scanner' ? 'video/*' : 'audio/*,image/*,.pdf,.doc,.docx'} onChange={(event) => { setFile(event.target.files?.[0] || null); setScanned(false) }} /><Upload size={28} /><b>{file ? file.name : 'Drop a file here'}</b><small>{file ? `${Math.ceil(file.size / 1024)} KB ready for analysis` : 'or browse from your device'}</small></label>}<div className="input-footer"><span className="mono">LOCAL PROCESSING ENABLED</span><button className="button button-primary button-small" disabled={!isMind && !file} onClick={() => { setScanned(true); onNotice?.(`${module?.name} analysis complete.`) }}>{scanned ? 'Scan complete' : 'Analyze signal'} <ArrowRight size={15} /></button></div></div><div className={`dash-card analysis-result ${scanned ? 'has-result' : ''}`}><div className="card-header"><h2>Analysis result</h2><span className="mono">AEGIS / 0.9s</span></div>{scanned ? <div className="result-content"><div className="score-circle"><strong>{isMind ? '72' : '94'}</strong><small>confidence</small></div><div><span className={`verdict ${isMind ? 'warn' : 'safe'}`}>{isMind ? 'SUSPICIOUS' : 'AUTHENTIC'}</span><h3>{isMind ? 'Urgency engineering detected' : 'No synthetic artifacts found'}</h3><p>{isMind ? 'This message uses fear amplification and scarcity framing to compress your decision window.' : 'Signal characteristics match the expected human baseline across all verified markers.'}</p></div></div> : <div className="empty-result"><Radar size={31} /><b>Awaiting signal</b><span>Results will appear here after your analysis.</span></div>}</div></div></div>
}

function App() {
  const path = window.location.pathname
  return path.startsWith('/dashboard') ? <Dashboard /> : <Landing />
}

export default App
