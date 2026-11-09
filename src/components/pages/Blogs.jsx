import { useMemo, useState } from 'react';
import { BLOGS, CATEGORIES } from '../../data/blogs';
import '../blog/Blog.css';

const base = process.env.PUBLIC_URL || '';
const pad = (n) => String(n).padStart(2, '0');

function Card({ b, i, featured }) {
  return (
    <a className={`bl-card${featured ? ' feat' : ''}`} href={`#/blogs/${b.slug}`} style={{ '--i': i }}>
      <div className="bl-cover">
        {b.cover ? <img src={base + b.cover} alt="" loading="lazy" decoding="async" /> : <span className="bl-ph mono">{pad(i + 1)} / {b.category.toUpperCase()}</span>}
        <span className="bl-chip-on">{b.category}</span>
      </div>
      <div className="bl-body">
        <div className="bl-meta mono"><span>{b.date}</span><span>·</span><span>{b.read} min read</span></div>
        <h3>{b.title}</h3>
        <p>{b.excerpt}</p>
        <span className="bl-go mono">Read story <i aria-hidden="true">→</i></span>
      </div>
    </a>
  );
}

export default function Blogs() {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('All');
  const list = useMemo(() => {
    const n = q.trim().toLowerCase();
    return BLOGS.filter((b) => (cat === 'All' || b.category === cat) && (!n || `${b.title} ${b.excerpt} ${b.category}`.toLowerCase().includes(n)));
  }, [q, cat]);
  const count = (c) => (c === 'All' ? BLOGS.length : BLOGS.filter((b) => b.category === c).length);
  const plain = cat === 'All' && !q.trim();

  return (
    <section id="blogs" className="site-page">
<div className="page-head"><div className="mono">11 — From the workshop</div><h1>Stories behind<br />the machines.</h1><p>Build logs, competition diaries, research notes and the people behind every iteration.</p></div> <div className="blog-intro"><div><div className="mono" style={{"color":"#47776d"}}>UGV-DTU JOURNAL · 2026</div><h2>Not just the finish line.</h2><p>A visual journal of experiments, prototypes, lessons learned and the moments that move the team forward.</p></div><div className="blog-visual"><span>FIELD<br />NOTES ↗</span></div></div>
      <div className="bl-tools">
        <label className="bl-search">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>
          <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search stories" aria-label="Search stories" />
        </label>
        <div className="bl-chips" role="group" aria-label="Filter by topic">
          {['All', ...CATEGORIES].map((c) => (
            <button type="button" key={c} className={`bl-chip${cat === c ? ' on' : ''}`} aria-pressed={cat === c} onClick={() => setCat(c)}>
              {c}<span>{count(c)}</span>
            </button>
          ))}
        </div>
      </div>
      {list.length ? (
        <div className="bl-grid" key={`${cat}|${q}`}>
          {list.map((b, i) => <Card key={b.slug} b={b} i={BLOGS.indexOf(b)} featured={plain && i === 0} />)}
        </div>
      ) : (
        <p className="bl-empty mono">No stories match “{q || cat}”. <button type="button" onClick={() => { setQ(''); setCat('All'); }}>Clear filters</button></p>
      )}
    </section>
  );
}
