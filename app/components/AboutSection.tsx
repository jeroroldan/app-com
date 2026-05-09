export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-left">
            <h2 className="about-title">
              Sobre Nosotros
            </h2>
            <div className="about-accent"></div>
            <p className="about-text">
              Somos una familia apasionada por la repostería artesanal. Cada producto es elaborado
              con ingredientes de calidad y mucho cariño, inspirado en recetas tradicionales y
              adaptadas con toques modernos.
            </p>
            <p className="about-text">
              Nuestro objetivo es compartir la alegría de comer algo dulce y hecho con amor,
              ya sea para una ocasión especial o para disfrutar en familia.
            </p>
            <ul className="about-list">
              <li className="about-list-item">
                <span className="about-checkmark">✓</span>
                Elaboración artesanal en pequeños lotes
              </li>
              <li className="about-list-item">
                <span className="about-checkmark">✓</span>
                Productos frescos y recién hechos
              </li>
              <li className="about-list-item">
                <span className="about-checkmark">✓</span>
                Pedidos personalizados sin problema
              </li>
            </ul>
          </div>
          <div className="about-right">
            <div className="about-image-container">
              <img
                src="/products/WhatsApp Image 2026-05-09 at 11.58.23 AM.jpeg"
                alt="Nuestra cocina artesanal"
                className="about-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}