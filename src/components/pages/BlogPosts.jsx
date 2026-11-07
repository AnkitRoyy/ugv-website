import { useEffect, useMemo, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { BLOGS } from '../../data/blogs';
import { glide } from '../../lib/motion';
import '../blog/Blog.css';

const base = process.env.PUBLIC_URL || '';
const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const textOf = (n) => (typeof n === 'string' ? n : Array.isArray(n) ? n.map(textOf).join('') : n?.props?.children ? textOf(n.props.children) : '');
const fixSrc = (s = '') => (/^(https?:|data:)/.test(s) ? s : `${base}/blogs/${s.replace(/^\.?\//, '')}`);

function Code({ children }) {
  const ref = useRef(null);
  const [done, setDone] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(ref.current.textContent); setDone(true); setTimeout(() => setDone(false), 1500); } catch (e) { /* clipboard unavailable */ }
  };
  return (
    <div className="bp-code"><button type="button" className="mono" onClick={copy}>{done ? 'Copied' : 'Copy'}</button><pre ref={ref}>{children}</pre></div>
  );
}

function Article({ post, prev, next }) {
  const [text, setText] = useState('');
  const [active, setActive] = useState(false);
  const [cur, setCur] = useState('');
  const [copied, setCopied] = useState(false);
  const wrap = useRef(null);
  const bar = useRef(null);
  const top = useRef(null);
  const pre = `${post.slug}--`;

  useEffect(() => {
    let live = true;
    fetch(base + post.file).then((r) => (r.ok ? r.text() : '')).then((t) => live && setText(t)).catch(() => {});
    return () => { live = false; };
  }, [post.file]);

  useEffect(() => {
    const on = () => setActive(window.location.hash === `#/blogs/${post.slug}`);
    on();
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, [post.slug]);

  const body = useMemo(() => text.replace(/^#\s+.+\n+/, ''), [text]);
  const toc = useMemo(() => [...body.matchAll(/^##\s+(.+)$/gm)].map((m) => ({ id: pre + slugify(m[1]), label: m[1].replace(/[*_`]/g, '') })), [body, pre]);

  useEffect(() => {
    if (!active) return undefined;
    const onScroll = () => {
      const r = wrap.current.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, -r.top / Math.max(r.height - window.innerHeight, 1)));
      bar.current.style.transform = `scaleX(${p})`;
      top.current.classList.toggle('show', window.scrollY > 700);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [active, body]);

  useEffect(() => {
    if (!active || !toc.length || !('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setCur(e.target.id)), { rootMargin: '-15% 0px -75% 0px' });
    toc.forEach((t) => { const el = document.getElementById(t.id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, [active, toc]);

  const md = useMemo(() => ({
    h2: ({ children }) => <h2 id={pre + slugify(textOf(children))}>{children}</h2>,
    h3: ({ children }) => <h3 id={pre + slugify(textOf(children))}>{children}</h3>,
    img: ({ src, alt }) => (
      <span className="bp-fig"><img src={fixSrc(src)} alt={alt || ''} loading="lazy" decoding="async" />{alt ? <em>{alt}</em> : null}</span>
    ),
    a: ({ href, children }) => <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>,
    pre: ({ children }) => <Code>{children}</Code>,
  }), [pre]);

  const share = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) { await navigator.share({ title: post.title, url }); return; }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) { /* share cancelled */ }
  };
  const jump = (id) => (e) => { e.preventDefault(); const target=document.getElementById(id); if(target)glide(target); };

  return (
    <section id={`blog-${post.slug}`} className="site-page solo bp" ref={wrap}>
      <div className="bp-progress" ref={bar} aria-hidden="true" />
      <a className="solo-back mono" href="#/blogs">← All stories</a>
      <header className="bp-head">
        <div className="bp-meta mono"><span className="bp-chip">{post.category}</span><span>{post.date}</span><span>{post.read} min read</span></div>
        <h1>{post.title}</h1>
        <p className="bp-lede">{post.excerpt}</p>
        <div className="bp-by"><span className="bp-av mono">UD</span><span>By {post.author}</span>
          <button type="button" className="bp-share mono" onClick={share}>{copied ? 'Link copied ✓' : 'Share ↗'}</button></div>
      </header>
      {post.cover && <img className="bp-cover" src={base + post.cover} alt="" />}
      <div className="bp-grid">
        <article className="bp-body">{body ? <ReactMarkdown components={md}>{body}</ReactMarkdown> : <p>Loading article…</p>}</article>
        {toc.length > 1 && (
          <aside className="bp-toc" aria-label="On this page">
            <div className="mono">On this page</div>
            <ol>{toc.map((t) => <li key={t.id}><a href={`#${t.id}`} className={cur === t.id ? 'on' : ''} onClick={jump(t.id)}>{t.label}</a></li>)}</ol>
          </aside>
        )}
      </div>
      <div className="bp-nav" role="navigation" aria-label="More stories">
        <a href={`#/blogs/${prev.slug}`}><span className="mono">← Previous</span><b>{prev.title}</b></a>
        <a href={`#/blogs/${next.slug}`} className="r"><span className="mono">Next →</span><b>{next.title}</b></a>
      </div>
      <button type="button" className="bp-top mono" ref={top} aria-label="Back to top" onClick={() => glide(0)}>↑</button>
    </section>
  );
}

export default function BlogPosts() {
  return BLOGS.map((p, i) => <Article post={p} key={p.slug} prev={BLOGS[(i + BLOGS.length - 1) % BLOGS.length]} next={BLOGS[(i + 1) % BLOGS.length]} />);
}
