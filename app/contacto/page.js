import Link from 'next/link';

export const metadata = {
  title: 'Contacto — NeuralHub',
  description: 'Ponete en contacto con NeuralHub para consultas, sugerencias o colaboraciones.',
};

export default function Contacto() {
  return (
    <article className="article-layout">
      <header className="article-header">
        <Link href="/" className="article-back">← Volver al inicio</Link>
        <h1 className="article-title">Contacto</h1>
        <div className="article-info">
          <span className="article-tag">Contacto</span>
        </div>
      </header>

      <div className="article-body">
        <p>
          Si tenés preguntas sobre algún artículo, querés sugerir una herramienta para que analice, 
          o simplemente querés decir hola, podés escribirme por cualquiera de estos medios.
        </p>

        <h2>Email</h2>
        <p>
          La forma más directa de contactarme es por email:{' '}
          <a href="mailto:contacto@neuralhub.com">contacto@neuralhub.com</a>
        </p>
        <p>
          Intento responder todos los mensajes en un plazo de 48 horas hábiles.
        </p>

        <h2>¿Para qué podés escribirme?</h2>
        <ul>
          <li>Preguntas sobre algún artículo o herramienta</li>
          <li>Sugerencias de herramientas para analizar</li>
          <li>Correcciones o actualizaciones de información</li>
          <li>Consultas sobre colaboraciones o publicidad</li>
          <li>Cualquier otra cosa relacionada con el blog</li>
        </ul>

        <h2>Formulario de contacto</h2>
        <p>También podés usar este formulario y te respondo al email que indiques:</p>

        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          padding: '2rem',
          marginTop: '1.5rem'
        }}>
          <form
            action="https://formspree.io/f/TU_FORM_ID"
            method="POST"
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '500' }}>
                Tu nombre
              </label>
              <input
                type="text"
                name="nombre"
                required
                className="newsletter-input"
                placeholder="Juan García"
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '500' }}>
                Tu email
              </label>
              <input
                type="email"
                name="email"
                required
                className="newsletter-input"
                placeholder="tu@email.com"
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '500' }}>
                Mensaje
              </label>
              <textarea
                name="mensaje"
                required
                rows={5}
                className="newsletter-input"
                placeholder="Tu mensaje acá..."
                style={{ resize: 'vertical', fontFamily: 'var(--font-body)' }}
              />
            </div>
            <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
              Enviar mensaje →
            </button>
          </form>
        </div>
      </div>
    </article>
  );
}
