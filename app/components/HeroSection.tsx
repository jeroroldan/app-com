'use client';

import WhatsAppButton from './WhatsAppButton';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-pattern">
        <img src="/hero-pattern.svg" alt="" style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }} />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          Delicias artesanales hechas con
          <span className="hero-highlight">amor y ingredientes naturales</span>
        </h1>
        <p className="hero-text">
          Pastafrolas, alfajores, budines y tortas caseras. Perfectas para compartir con quienes amas.
        </p>
        <div className="hero-buttons">
          <WhatsAppButton />
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-number">100%</span>
            <p className="hero-stat-text">Artesanal</p>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-number">Frescos</span>
            <p className="hero-stat-text">Diarios</p>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-number">Personalizados</span>
            <p className="hero-stat-text">Bajo pedido</p>
          </div>
        </div>
      </div>
    </section>
  );
}