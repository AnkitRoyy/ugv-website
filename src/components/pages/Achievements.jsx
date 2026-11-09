import { ACH, tier } from '../../data/achievements';

export default function Achievements() {
  return (
    <section id="achievements" className="site-page">
<div className="page-head"><div className="mono">07 — Achievements</div><h1>Ranks earned.<br />Lessons kept.</h1><p>A running record of the positions UGV-DTU has taken across global competitions, hackathons and design challenges.</p></div>
      <div className="ach-stats">
        <div className="ach-stat"><b>{ACH.length}</b><span className="mono">Recognitions</span></div>
        <div className="ach-stat"><b>{String(ACH.filter((a) => tier(a[1]) === 'g').length).padStart(2, '0')}</b><span className="mono">Global ranks</span></div>
        <div className="ach-stat"><b>{String(ACH.filter((a) => tier(a[1]) === 'p').length).padStart(2, '0')}</b><span className="mono">Podium finishes</span></div>
      </div>
      <div className="ach-filter" role="group" aria-label="Filter achievements">
        <button className="on" data-f="all">All</button><button data-f="g">Global ranks</button><button data-f="p">Podium</button><button data-f="f">Finalist</button>
      </div>
      <div className="ach-wrap"><table className="ach-table"><thead><tr><th>S.No.</th><th>Competition</th><th>Position / Rank</th></tr></thead><tbody>
        {ACH.map((a, i) => (
          <tr className="ach-row" data-t={tier(a[1])} key={a[0]}><td className="n">{String(i + 1).padStart(2, '0')}</td><td className="c">{a[0]}</td><td className="r"><span className={`pill ${tier(a[1])}`}>{a[1]}</span></td></tr>
        ))}
      </tbody></table></div>
      <div className="ach-more-wrap"><button type="button" className="ach-more" id="achMore" aria-expanded="false"><span>Show more</span><i aria-hidden="true" /></button></div>
    </section>
  );
}
