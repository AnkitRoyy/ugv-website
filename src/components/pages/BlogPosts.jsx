import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import blogIndex from '../../data/blogIndex';

function Post({ post }) {
  const [text, setText] = useState('');
  useEffect(() => {
    fetch(process.env.PUBLIC_URL + post.file)
      .then((r) => (r.ok ? r.text() : ''))
      .then(setText)
      .catch(() => setText(''));
  }, [post.file]);
  return (
    <section id={`blog-${post.slug}`} className="site-page solo">
      <a className="solo-back mono" href="#/blogs">← All stories</a>
      <div className="page-head"><div className="mono">{post.category} · {post.date}</div><h1>{post.title}</h1><p>{post.excerpt}</p></div>
      <div className="about-copy blog-md">{text ? <ReactMarkdown>{text}</ReactMarkdown> : <p>Loading article…</p>}</div>
      <a className="page-cta" href="#/blogs">← Back to all stories</a>
    </section>
  );
}

export default function BlogPosts() {
  return blogIndex.map((p) => <Post post={p} key={p.slug} />);
}
