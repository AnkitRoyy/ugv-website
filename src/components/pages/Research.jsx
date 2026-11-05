import { RS } from '../../data/research';

export default function Research() {
  return (
    <section id="papers" className="site-page">
<div className="page-head"><div className="mono">08 — Research</div><h1>Ideas worth<br />testing.</h1><p>Notes from the team’s work on SLAM, sensor fusion, perception and planning. Open any card to read the full article.</p></div>
      <div className="rs-list">
        {RS.map((r, i) => (
          <article className="rs-card" key={r.id}>
            <div className="rs-viz"><canvas aria-hidden="true" /><span className="rs-hint mono">{['Move to scan', 'Move the target', 'Move the vehicle', 'Move the goal'][i % 4]}</span></div>
            <div className="rs-top"><span className="tag">{r.tag}</span><span className="mono">Paper {String(i + 1).padStart(2, '0')}</span></div>
            <h3>{r.title}</h3><p>{r.summary}</p>
            <div className="rs-peek"><div><p>{r.body[0]}</p></div></div>
            <div className="rs-act"><button type="button" className="rs-more" aria-expanded="false"><span>Quick read</span><i>+</i></button><a className="rs-btn" href={`#/papers/${r.id}`}>Full abstract <i>↗</i></a></div>
          </article>
        ))}
      </div>
    </section>
  );
}
