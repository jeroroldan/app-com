import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="hero-section" aria-label="Presentacion de la marca">
      <div className="hero-backdrop" aria-hidden="true" />
      <div className="hero-shell">
        <div className="hero-logo-wrap">
          <Image
            src="/products/logo.png"
            alt="Logo de la marca"
            width={720}
            height={720}
            priority
            sizes="(max-width: 768px) 82vw, 720px"
            className="hero-logo"
          />
        </div>
      </div>
    </section>
  );
}
