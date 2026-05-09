import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="nosotros" className="section-shell about-shell" aria-labelledby="about-title">
      <div className="about-grid">
        <div className="about-copy">
          <span className="section-eyebrow">Sobre nosotros</span>
          <h2 id="about-title" className="section-title section-title--left">
            Una cocina artesanal que busca convertir momentos cotidianos en recuerdos ricos
          </h2>
          <p className="about-text">
            Somos un emprendimiento familiar que trabaja con recetas nobles, atencion
            cercana y una estetica calida para que cada producto se vea tan bien como sabe.
          </p>
          <p className="about-text">
            Nos eligen para regalar, celebrar o simplemente disfrutar algo especial en casa.
            Cuidamos el detalle porque sabemos que un buen producto tambien transmite confianza.
          </p>

          <ul className="about-list">
            <li>Produccion artesanal y lotes pequenos.</li>
            <li>Atencion directa para pedidos y consultas.</li>
            <li>Opciones para ocasiones especiales y regalos.</li>
          </ul>
        </div>

        <div className="about-visual">
          <div className="about-visual__frame">
            <Image
              src="/products/WhatsApp Image 2026-05-09 at 11.58.23 AM.jpeg"
              alt="Mesa con productos dulces artesanales listos para entregar"
              fill
              sizes="(max-width: 1024px) 100vw, 520px"
              className="about-visual__image"
            />
          </div>
          <aside className="about-note" aria-label="Mensaje de confianza">
            <strong>Pedido acompanado</strong>
            <p>Respondemos por WhatsApp para ayudarte a elegir cantidades, sabores y combinaciones.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
