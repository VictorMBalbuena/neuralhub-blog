import Link from 'next/link';

export const metadata = {
  title: 'Política de Privacidad — NeuralHub',
  description: 'Política de privacidad de NeuralHub. Información sobre cómo recopilamos y usamos tus datos.',
};

export default function PoliticaPrivacidad() {
  return (
    <article className="article-layout">
      <header className="article-header">
        <Link href="/" className="article-back">← Volver al inicio</Link>
        <h1 className="article-title">Política de Privacidad</h1>
        <div className="article-info">
          <span className="article-tag">Legal</span>
          <span>Última actualización: mayo 2026</span>
        </div>
      </header>

      <div className="article-body">
        <p>
          En NeuralHub (neuralhub-blog.vercel.app) nos tomamos muy en serio la privacidad 
          de nuestros visitantes. Esta política explica qué información recopilamos, cómo la 
          usamos y qué derechos tenés sobre ella.
        </p>

        <h2>1. Información que recopilamos</h2>
        <p>
          NeuralHub recopila dos tipos de información:
        </p>
        <ul>
          <li>
            <strong>Información anónima de uso:</strong> a través de Google Analytics recopilamos 
            datos sobre cómo los visitantes usan el sitio, incluyendo páginas visitadas, tiempo 
            en el sitio y ubicación geográfica aproximada. Esta información es completamente 
            anónima y no permite identificar a ningún usuario individualmente.
          </li>
          <li>
            <strong>Información de contacto:</strong> si nos escribís a través del formulario de 
            contacto, recopilamos tu nombre y email únicamente para poder responderte. No 
            compartimos esta información con terceros.
          </li>
        </ul>

        <h2>2. Cookies</h2>
        <p>
          Este sitio utiliza cookies para los siguientes fines:
        </p>
        <ul>
          <li>
            <strong>Google Analytics:</strong> para analizar el tráfico y comportamiento de los 
            visitantes de forma anónima.
          </li>
          <li>
            <strong>Google AdSense:</strong> para mostrar anuncios relevantes. Google puede usar 
            cookies para personalizar los anuncios según tus intereses.
          </li>
        </ul>
        <p>
          Podés deshabilitar las cookies en la configuración de tu navegador, aunque esto puede 
          afectar la funcionalidad del sitio.
        </p>

        <h2>3. Google AdSense y publicidad</h2>
        <p>
          Este sitio utiliza Google AdSense para mostrar anuncios. Google, como proveedor 
          externo, usa cookies para mostrar anuncios basados en las visitas previas de los 
          usuarios a este sitio y a otros sitios de Internet. Los usuarios pueden inhabilitar 
          la publicidad personalizada visitando la{' '}
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
            Configuración de anuncios de Google
          </a>.
        </p>

        <h2>4. Links de afiliados</h2>
        <p>
          Algunos artículos de NeuralHub contienen links de afiliado. Esto significa que si 
          hacés click en un link y realizás una compra, podemos recibir una comisión sin costo 
          adicional para vos. Solo recomendamos productos que hemos probado o investigado 
          cuidadosamente.
        </p>

        <h2>5. Links a sitios externos</h2>
        <p>
          NeuralHub puede contener links a sitios web externos. No somos responsables del 
          contenido ni de las prácticas de privacidad de esos sitios. Te recomendamos revisar 
          la política de privacidad de cualquier sitio externo que visites.
        </p>

        <h2>6. Tus derechos</h2>
        <p>
          Tenés derecho a:
        </p>
        <ul>
          <li>Acceder a la información personal que tenemos sobre vos</li>
          <li>Solicitar la corrección o eliminación de tus datos</li>
          <li>Oponerte al procesamiento de tus datos</li>
        </ul>
        <p>
          Para ejercer cualquiera de estos derechos, podés contactarnos a través de nuestra{' '}
          <Link href="/contacto">página de contacto</Link>.
        </p>

        <h2>7. Cambios a esta política</h2>
        <p>
          Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos 
          cualquier cambio publicando la nueva política en esta página con la fecha de 
          actualización correspondiente.
        </p>

        <h2>8. Contacto</h2>
        <p>
          Si tenés preguntas sobre esta política de privacidad, podés contactarnos a través 
          de nuestra <Link href="/contacto">página de contacto</Link>.
        </p>
      </div>
    </article>
  );
}