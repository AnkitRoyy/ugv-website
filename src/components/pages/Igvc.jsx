export default function Igvc() {
  return (
    <section id="igvc" className="site-page solo">
<a className="solo-back mono" href="#/">← Home</a><div className="page-head"><div className="mono">06 — IGVC</div><h1>Intelligent Ground<br />Vehicle Competition.</h1><p>The team’s long-running international stage for autonomous navigation, design and cybersecurity, hosted at Oakland University, USA.</p></div>
 <section className="ugvc-intro" aria-labelledby="igvc-ashwini-title">
  <img src="/igvc-ashwini.png" alt="Ashwini, UGV-DTU’s autonomous ground vehicle for outdoor navigation" />
  <div className="ugvc-intro-copy">
   <span className="mono">Introducing</span>
   <h2 id="igvc-ashwini-title">Ashwini</h2>
   <p><strong>Ashwini</strong> is UGV-DTU’s flagship ground vehicle engineered for the Intelligent Ground Vehicle Competition (IGVC). Ashwini is built specifically for autonomous outdoor navigation on grass and varied terrain, utilizing a highly integrated sensor suite and processing stack to complete mission course profiles without human intervention.</p>
   <p>Its architecture highlights high-performance perception systems (cameras and LiDAR) coupled with sophisticated path planning algorithms (dynamic window approach, A* search, and trajectory optimization) to detect course lanes, bypass obstacles, and target global waypoints reliably.</p>
  </div>
 </section>
 <div className="page-grid">
 <article className="achievement"><span className="tag">IGVC · 2023 · USA</span><div><div className="num">03</div><h3>Cyber Challenge</h3><p>Third place at IGVC 2023, Oakland University.</p></div></article>
 <article className="achievement"><span className="tag">IGVC · 2023 · USA</span><div><div className="num">03</div><h3>Group A Design</h3><p>Third place in the Group A Design Competition.</p></div></article>
 <article className="achievement"><span className="tag">IGVC · 2025 · AutoNav</span><div><div className="num">15</div><h3>Top 15 Global Rank</h3><p>Autonav Challenge with ASHWINI, a three-wheeled differential-drive vehicle on ROS Noetic.</p></div></article>
 </div><a className="page-cta" href="#/fleet">See our vehicles ↗</a>
    </section>
  );
}
