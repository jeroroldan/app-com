'use client';

import HeroSection from './components/HeroSection';
import ProductGrid from './components/ProductGrid';
import BenefitsSection from './components/BenefitsSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import { products } from './data/products';

export default function HomePage() {
  const handleWhatsApp = (product: typeof products[0]) => {
    const phoneNumber = '5491112345678';
    const message = `Hola, me interesa el ${product.name} - $${product.price.toLocaleString('es-AR')}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const featuredProducts = products.filter(p => p.featured);

  return (
    <main>
      <HeroSection />
      <ProductGrid 
        products={products} 
        onWhatsApp={handleWhatsApp} 
        title="Nuestros Productos"
        showFeaturedOnly={false}
      />
      <BenefitsSection />
      <AboutSection />
      <Footer />
    </main>
  );
}