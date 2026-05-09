'use client';

import { Product } from '../types/product';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onWhatsApp: (product: Product) => void;
  title?: string;
  showFeaturedOnly?: boolean;
}

export default function ProductGrid({ products, onWhatsApp, title, showFeaturedOnly = false }: ProductGridProps) {
  const displayProducts = showFeaturedOnly
    ? products.filter(p => p.featured)
    : products;

  return (
    <section className="product-section">
      {title && (
        <h2 className="product-title">
          {title}
        </h2>
      )}
      <div className="product-grid">
        {displayProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onWhatsApp={onWhatsApp}
          />
        ))}
      </div>
      {displayProducts.length === 0 && (
        <p style={{
          textAlign: 'center',
          color: '#6b7280'
        }}>No hay productos disponibles.</p>
      )}
    </section>
  );
}