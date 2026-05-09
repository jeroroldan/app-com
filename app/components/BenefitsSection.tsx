const benefits = [
  {
    title: 'Elaboracion artesanal',
    description:
      'Recetas caseras, produccion en pequenos lotes y una presentacion que transmite dedicacion.',
  },
  {
    title: 'Productos frescos',
    description:
      'Priorizamos preparaciones recientes para que lleguen con mejor textura, aroma y sabor.',
  },
  {
    title: 'Ideal para regalar',
    description:
      'Opciones pensadas para cumpleanos, meriendas, reuniones y detalles que dejan una buena impresion.',
  },
];

export default function BenefitsSection() {
  return (
    <section className="section-shell benefits-shell" aria-labelledby="benefits-title">
      <div className="section-heading">
        <span className="section-eyebrow">Confianza y conversion</span>
        <h2 id="benefits-title" className="section-title">
          Todo esta pensado para que comprar sea facil y tentador
        </h2>
        <p className="section-description">
          Sumamos mensajes de confianza claros para reforzar valor, reducir dudas y
          acercar mas rapido el pedido.
        </p>
      </div>

      <div className="benefits-grid">
        {benefits.map((benefit) => (
          <article key={benefit.title} className="benefit-card">
            <span className="benefit-card__marker" aria-hidden="true" />
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
