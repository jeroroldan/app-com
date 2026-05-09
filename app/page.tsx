import AboutSection from './components/AboutSection';
import BenefitsSection from './components/BenefitsSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ProductCatalog from './components/ProductCatalog';
import ProductGrid from './components/ProductGrid';
import WhatsAppButton from './components/WhatsAppButton';
import { products } from './data/products';

const featuredProducts = products.filter((product) => product.featured);

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <main id="main-content">
        <BenefitsSection />

        <ProductGrid
          id="destacados"
          eyebrow="Favoritos de la casa"
          title="Los elegidos para regalar, compartir o darte un gusto"
          description="Una seleccion pensada para convertir mas rapido: productos con gran salida, excelente presentacion y pedidos frecuentes."
          products={featuredProducts}
          emptyMessage="Muy pronto vamos a sumar productos destacados."
        />

        <ProductCatalog products={products} />
        <AboutSection />
      </main>

      <Footer />
      <WhatsAppButton floating />
    </>
  );
}
