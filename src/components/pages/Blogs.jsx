import blogIndex from '../../data/blogIndex';

export default function Blogs() {
  return (
    <section id="blogs" className="site-page">
<div className="page-head"><div className="mono">11 — From the workshop</div><h1>Stories behind<br />the machines.</h1><p>Build logs, competition diaries, research notes and the people behind every iteration.</p></div> <div className="blog-intro"><div><div className="mono" style={{"color":"#47776d"}}>UGV-DTU JOURNAL · 2026</div><h2>Not just the finish line.</h2><p>A visual journal of experiments, prototypes, lessons learned and the moments that move the team forward.</p></div><div className="blog-visual"><span>FIELD<br />NOTES ↗</span></div></div>
      <div className="blog-grid">
        {blogIndex.map((b, i) => (
          <article className="blog-card" key={b.slug}>
            <a href={`#/blogs/${b.slug}`} style={{ display: 'contents' }}>
              <div className="blog-thumb">{String(i + 1).padStart(2, '0')} / {b.category.toUpperCase()}</div>
              <div className="blog-copy"><div className="meta">{b.category} · {b.date}</div><h3>{b.title}</h3><p>{b.excerpt}</p></div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
