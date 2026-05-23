import Link from 'next/link';

export const metadata = {
  title: 'Sobre mí — NeuralHub',
  description: 'Conocé quién está detrás de NeuralHub y por qué creé este blog sobre herramientas de IA en español.',
};

export default function SobreMi() {
  return (
    <article className="article-layout">
      <header className="article-header">
        <Link href="/" className="article-back">← Volver al inicio</Link>
        <h1 className="article-title">Sobre mí</h1>
        <div className="article-info">
          <span className="article-tag">El blog</span>
        </div>
      </header>

      <div className="article-body">
        <p>
          Hola, soy Víctor, el creador de NeuralHub. Soy de Argentina y llevo varios años trabajando 
          con tecnología. Cuando la inteligencia artificial empezó a explotar en 2023, me obsesioné 
          con entender cómo funcionaba y, sobre todo, cómo podía usarse de forma práctica en el trabajo diario.
        </p>

        <h2>Por qué creé este blog</h2>
        <p>
          El problema que encontré fue siempre el mismo: casi todo el contenido de calidad sobre 
          herramientas de IA estaba en inglés. Las reseñas en español eran superficiales, 
          desactualizadas o directamente traducciones automáticas sin ningún valor real.
        </p>
        <p>
          Decidí crear NeuralHub para llenar ese hueco. Un blog en español, con pruebas reales, 
          comparativas honestas y guías prácticas para personas que quieren usar la IA en su trabajo 
          o negocio sin necesidad de ser expertos en tecnología.
        </p>

        <h2>Qué vas a encontrar acá</h2>
        <p>En NeuralHub publico tres tipos de contenido:</p>
        <ul>
          <li>
            <strong>Reseñas honestas</strong> de herramientas de IA. Pruebo cada herramienta 
            personalmente antes de escribir sobre ella. Si algo no me convence, lo digo.
          </li>
          <li>
            <strong>Comparativas directas</strong> entre herramientas similares, con tablas claras 
            y una recomendación concreta al final. Sin vueltas.
          </li>
          <li>
            <strong>Guías prácticas</strong> para usar la IA en tareas concretas: escribir contenido, 
            organizar el trabajo, estudiar, emprender.
          </li>
        </ul>

        <h2>Sobre los links de afiliados</h2>
        <p>
          Algunos artículos de este blog contienen links de afiliado. Eso significa que si hacés 
          click en un link y comprás una herramienta, yo recibo una pequeña comisión sin costo 
          adicional para vos.
        </p>
        <p>
          Esto me ayuda a mantener el blog funcionando y a seguir publicando contenido gratuito. 
          Pero nunca voy a recomendar una herramienta solo por la comisión. Si no la usaría yo 
          mismo, no la recomiendo.
        </p>

        <h2>Contacto</h2>
        <p>
          Si tenés preguntas, sugerencias o querés que analice alguna herramienta en particular, 
          podés escribirme desde la <Link href="/contacto">página de contacto</Link>.
        </p>
      </div>
    </article>
  );
}
