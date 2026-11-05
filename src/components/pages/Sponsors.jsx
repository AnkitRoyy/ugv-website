import { SPONSORS } from '../../data/sponsors';

export default function Sponsors() {
  return (
    <section id="sponsors" className="site-page">
<div className="page-head"><div className="mono">09 — Partners</div><h1>Backed by belief.<br />Built together.</h1><p>Our sponsors and partners help turn ambitious engineering ideas into working systems. Their logos will appear here.</p></div>
      <div className="sponsor-grid">
        {SPONSORS.map((s, i) => (
          <div className="sponsor-tile" key={s.name}><div className="sponsor-logo"><img src={s.logo} alt={s.name} loading="lazy" /></div><small>{s.name}</small></div>
        ))}
      </div>
      <a className="page-cta" href="#/contact">Become a sponsor ↗</a>
    </section>
  );
}
