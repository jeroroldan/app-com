import Image from 'next/image';
import WhatsAppButton from './WhatsAppButton';

export default function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-backdrop" aria-hidden="true" />
      <div className="hero-shell">
        <div className="hero-copy">
          <span className="hero-kicker">Pedidos por WhatsApp | Productos frescos | Hecho en Rosario</span>
          <h1 id="hero-title" className="hero-title">
            Delicias artesanales hechas con amor para regalar, compartir y volver a pedir
          </h1>
          <p className="hero-description">
            Pastafrolas, alfajores, budines y tortas con estetica casera cuidada,
            ingredientes nobles y una presentacion pensada para enamorar desde la foto
            hasta el primer bocado.
          </p>

          <div className="hero-actions">
            <a className="button button--primary" href="#catalogo">
              Ver catalogo
            </a>
            <WhatsAppButton label="Pedir por WhatsApp" />
          </div>

          <ul className="hero-trust-list" aria-label="Razones para elegir nuestros productos">
            <li>Elaboracion artesanal en pequenos lotes</li>
            <li>Ideal para regalos, eventos y meriendas especiales</li>
            <li>Opciones personalizadas segun disponibilidad</li>
          </ul>
        </div>

        <div className="hero-visual">
          <div className="hero-card hero-card--main">
            <Image
              src="/products/WhatsApp Image 2026-05-09 at 11.58.24 AM (2).jpeg"
              alt="Torta artesanal decorada lista para una celebracion"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 460px"
              className="hero-image"
            />
            <div className="hero-card-content">
              <span className="hero-badge">Favorita para celebraciones</span>
              <p className="hero-card-title">Tortas y mesas dulces con impronta casera</p>
            </div>
          </div>

          <div className="hero-proof-grid" aria-label="Mensajes de confianza">
            <article className="proof-card">
              <strong>Recien hecho</strong>
              <p>Produccion cuidada para mantener textura, aroma y frescura.</p>
            </article>
            <article className="proof-card">
              <strong>Compra simple</strong>
              <p>Elegis, escribis por WhatsApp y coordinamos el pedido.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
