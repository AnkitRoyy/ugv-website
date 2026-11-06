import { Link } from "react-router-dom";
import PageHead from "../common/PageHead";
import blogIndex from "../../utils/blogIndex";

/** Real posts from the previous site's blog index (the design's four cards were placeholders). */
export default function Blogs() {
  return (
    <section id="blogs" className="site-page">
      <PageHead eyebrow="11 — From the workshop" title={<>Stories behind<br />the machines.</>}
        intro="Build logs, competition diaries, research notes and the people behind every iteration." />
      <div className="blog-intro">
        <div>
          <div className="mono" style={{ color: "#47776d" }}>UGV-DTU JOURNAL · 2026</div>
          <h2>Not just the finish line.</h2>
          <p>A visual journal of experiments, prototypes, lessons learned and the moments that move the team forward.</p>
        </div>
        <div className="blog-visual"><span>FIELD<br />NOTES ↗</span></div>
      </div>
      <div className="blog-grid">
        {blogIndex.map((b, i) => (
          <Link key={b.slug} to={`/blogs/${b.slug}`} className="blog-card">
            <div className="blog-thumb">{String(i + 1).padStart(2, "0")} / {b.category.toUpperCase()}</div>
            <div className="blog-copy">
              <div className="meta">{b.category} · {b.date}</div>
              <h3>{b.title}</h3>
              <p>{b.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
