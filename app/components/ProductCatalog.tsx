'use client';

import { useMemo, useState } from 'react';
import { Product } from '../types/product';
import CategoryFilter from './CategoryFilter';
import ProductGrid from './ProductGrid';

interface ProductCatalogProps {
  products: Product[];
}

export default function ProductCatalog({ products }: ProductCatalogProps) {
  const categories = useMemo(
    () => ['Todos', ...Array.from(new Set(products.map((product) => product.category)))],
    [products]
  );
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredProducts =
    activeCategory === 'Todos'
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <section
      id="catalogo"
      className="section-shell section-shell--light"
      aria-labelledby="catalogo-title"
    >
      <div className="section-heading">
        <span className="section-eyebrow">Catalogo artesanal</span>
        <h2 id="catalogo-title" className="section-title">
          Elegi por categoria y pedi en pocos pasos
        </h2>
        <p className="section-description">
          Mostramos productos reales, precios claros y un acceso directo a WhatsApp
          para que consultar o cerrar un pedido sea simple desde el celular.
        </p>
      </div>

      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />

      <p className="results-summary" aria-live="polite" aria-atomic="true">
        {filteredProducts.length}{' '}
        {filteredProducts.length === 1 ? 'producto disponible' : 'productos disponibles'}
        {activeCategory !== 'Todos' ? ` en ${activeCategory}` : ''}.
      </p>

      <ProductGrid
        products={filteredProducts}
        emptyMessage="No encontramos productos en esta categoria por ahora."
        compactHeader
      />
    </section>
  );
}
