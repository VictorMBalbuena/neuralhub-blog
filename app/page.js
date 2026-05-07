import Link from 'next/link';
import { getPosts } from '../lib/posts';

export default async function Home() {
  const posts = await getPosts();
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div>
          <div className="hero-label fade-up">Inteligencia Artificial en Español</div>
          <h1 className="fade-up delay-1">
            Las mejores herramientas de <em>IA</em> explicadas sin vueltas
          </h1>
          <p className="hero-desc fade-up delay-2">
            Reseñas honestas, comparativas reales y guías prácticas para que uses la IA 
            a tu favor. Sin jerga técnica innecesaria.
          </p>
          <Link href="/blog" className="btn-primary fade-up delay-3">
            Ver todos los artículos →
          </Link>
        </div>

        <div className="hero-stats fade-up delay-2">
          {[
            { icon: '🤖', label: 'Herramientas analizadas', value: '+40 Tools' },
            { icon: '📊', label: 'Comparativas publicadas', value: '12 Reviews' },
            { icon: '💸', label: 'Ahorros identificados', value: '$500+/mes' },
            { icon: '🇦🇷', label: 'Contenido en', value: 'Español' },
          ].map((s) => (
            <div className="stat-card" key={s.label}>
              <div className="stat-icon">{s.icon}</div>
              <div>
                <div className="stat-label">{s.label}</div>
                <div className="stat-value">{s.value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* FEATURED POST */}
      {featured && (
        <section className="section">
          <div className="section-header">
            <h2 className="section-title">Artículo destacado</h2>
          </div>
          <Link href={`/blog/${featured.slug}`} className="featured-card">
            <div className="featured-content">
              <div className="featured-label">Destacado</div>
              <h2 className="featured-title">{featured.title}</h2>
              <p className="featured-excerpt">{featured.excerpt}</p>
              <span className="btn-primary" style={{ display: 'inline-flex' }}>
                Leer artículo →
              </span>
            </div>
            <div className="featured-visual">{featured.emoji || '🤖'}</div>
          </Link>
        </section>
      )}

      {/* RECENT POSTS */}
      {rest.length > 0 && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="section-header">
            <h2 className="section-title">Últimos artículos</h2>
            <Link href="/blog" className="section-link">Ver todos →</Link>
          </div>
          <div className="posts-grid">
            {rest.map((post) => (
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
      )}

      {/* NEWSLETTER */}
      <section id="newsletter" className="newsletter">
        <h2 className="newsletter-title">Actualizaciones semanales 📬</h2>
        <p className="newsletter-desc">
          Cada semana te mando las mejores herramientas de IA, tutoriales y comparativas. Sin spam.
        </p>
        <form
          className="newsletter-form"
          action="https://formspree.io/f/TU_FORM_ID"
          method="POST"
        >
          <input
            type="email"
            name="email"
            placeholder="tu@email.com"
            className="newsletter-input"
            required
          />
          <button type="submit" className="btn-primary">
            Suscribirme
          </button>
        </form>
      </section>
    </>
  );
}
