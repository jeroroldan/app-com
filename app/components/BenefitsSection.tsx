export default function BenefitsSection() {
  const benefits = [
    {
      icon: '🎃',
      title: 'Ingredientes Naturales',
      description: 'Solo los mejores ingredientes, sin conservantes',
    },
    {
      icon: '🔥',
      title: 'Hechos al Momento',
      description: 'Preparados frescos con cada pedido',
    },
    {
      icon: '💝',
      title: 'Perfectos para Regalar',
      description: 'Empaquetados con cariño y cuidado',
    },
    {
      icon: '🚚',
      title: 'Entregas a Domicilio',
      description: 'Coordinationamos la entrega contigo',
    },
  ];

  return (
    <section className="benefits-section">
      <div className="benefits-container">
        <h2 className="benefits-title">
          Por qué elegirnos
        </h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="benefits-card"
            >
              <div className="benefits-icon">{benefit.icon}</div>
              <h3 className="benefits-card-title">{benefit.title}</h3>
              <p className="benefits-card-text">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}