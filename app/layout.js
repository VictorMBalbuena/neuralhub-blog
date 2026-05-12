import './globals.css';

export const metadata = {
  title: 'NeuralHub — Herramientas de IA en Español',
  description: 'Reseñas, comparativas y guías de las mejores herramientas de Inteligencia Artificial. Todo en español, sin tecnicismos.',
  keywords: 'herramientas IA, inteligencia artificial, ChatGPT, Jasper, productividad IA, herramientas AI español',
  openGraph: {
    title: 'NeuralHub — Herramientas de IA en Español',
    description: 'Reseñas y guías de las mejores herramientas de IA.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7190588286885963"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <header className="header">
          <div className="header-inner">
            <a href="/" className="logo">
              <span className="logo-dot"></span>
              NeuralHub
            </a>
            <nav className="nav">
              <a href="/blog">Artículos</a>
              <a href="/#herramientas">Herramientas</a>
              <a href="/#newsletter">Newsletter</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="footer-inner">
            <div className="footer-logo">NeuralHub</div>
            <p className="footer-text">
              © {new Date().getFullYear()} NeuralHub. Hecho con ☕ en Argentina.<br />
              Algunos links son de afiliados — sin costo extra para vos,{' '}
              <a href="/afiliados">leé más aquí</a>.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
