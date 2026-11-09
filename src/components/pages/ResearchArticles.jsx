import { RS } from '../../data/research';

export default function ResearchArticles() {
  return RS.map((r) => (
    <section id={`rs-${r.id}`} className="site-page solo" key={r.id}>
      <a className="solo-back mono" href="#/papers">← All research</a>
      <div className="page-head"><div className="mono">{r.tag}</div><h1>{r.title}</h1><p>{r.authors} — {r.venue}</p></div>
      <div className="about-copy">{r.body.map((t) => <p key={t}>{t}</p>)}</div>
      <a className="page-cta" href={r.link} target="_blank" rel="noopener noreferrer">Read the paper ↗</a>
      <a className="page-cta" href="#/papers">← Back to all research</a>
    </section>
  ));
}
