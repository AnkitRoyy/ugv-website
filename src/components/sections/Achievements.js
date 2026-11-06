import { useEffect, useMemo, useRef, useState } from "react";
import PageHead from "../common/PageHead";
import { ACHIEVEMENTS, achievementStats, achievementTier } from "../../data/achievements";

const LIMIT = 6;
const FILTERS = [["all", "All"], ["g", "Global ranks"], ["p", "Podium"], ["f", "Finalist"]];
const pad = (n) => String(n).padStart(2, "0");

function Row({ index, item, order }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    setSeen(false);
    const el = ref.current;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, [item]);
  const tier = achievementTier(item.position);
  return (
    <tr ref={ref} className={`ach-row${seen ? " in" : ""}`} data-t={tier} style={{ transitionDelay: `${(order % 6) * 60}ms` }}>
      <td className="n">{pad(index + 1)}</td>
      <td className="c">{item.competition}</td>
      <td className="r"><span className={`pill ${tier}`}>{item.position}</span></td>
    </tr>
  );
}

export default function Achievements() {
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(false);
  const stats = achievementStats();

  const rows = useMemo(
    () => ACHIEVEMENTS.map((a, i) => ({ a, i })).filter(({ a }) => filter === "all" || achievementTier(a.position) === filter),
    [filter]
  );
  const visible = open ? rows : rows.slice(0, LIMIT);

  return (
    <section id="achievements" className="site-page">
      <PageHead eyebrow="07 — Achievements" title={<>Ranks earned.<br />Lessons kept.</>}
        intro="A running record of the positions UGV-DTU has taken across global competitions, hackathons and design challenges." />
      <div className="ach-stats">
        <div className="ach-stat"><b>{stats.total}</b><span className="mono">Recognitions</span></div>
        <div className="ach-stat"><b>{pad(stats.global)}</b><span className="mono">Global ranks</span></div>
        <div className="ach-stat"><b>{pad(stats.podium)}</b><span className="mono">Podium finishes</span></div>
      </div>
      <div className="ach-filter" role="group" aria-label="Filter achievements">
        {FILTERS.map(([k, label]) => (
          <button key={k} type="button" className={filter === k ? "on" : undefined} onClick={() => { setFilter(k); setOpen(false); }}>{label}</button>
        ))}
      </div>
      <div className="ach-wrap">
        <table className="ach-table">
          <thead><tr><th>S.No.</th><th>Competition</th><th>Position / Rank</th></tr></thead>
          <tbody>{visible.map(({ a, i }, n) => <Row key={`${filter}-${i}`} index={i} item={a} order={n} />)}</tbody>
        </table>
      </div>
      <div className="ach-more-wrap">
        <button type="button" className={`ach-more${open ? " open" : ""}`} id="achMore" aria-expanded={open} hidden={rows.length <= LIMIT}
          onClick={() => setOpen((o) => !o)}>
          <span>{open ? "Show less" : `Show more (${rows.length - LIMIT})`}</span><i aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
