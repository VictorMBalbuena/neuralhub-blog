import Link from 'next/link';
import { getPosts } from '../../lib/posts';

export const metadata = {
  title: 'Artículos — NeuralHub',
  description: 'Todos los artículos sobre herramientas de IA en español.',
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <section className="section">
      <div className="section-header">
        <h1 className="section-title">Todos los artículos</h1>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
          {posts.length} publicaciones
        </span>
      </div>

      <div className="posts-grid">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="post-card">
            <div className="post-tag">{post.category || 'IA Tools'}</div>
            <h3 className="post-title">{post.title}</h3>
            <p className="post-excerpt">{post.excerpt}</p>
            <div className="post-meta">
              <span>{post.date}</span>
              <span className="post-read-more">Leer →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
