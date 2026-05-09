import { Product } from '../types/product';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  title?: string;
  description?: string;
  eyebrow?: string;
  id?: string;
  emptyMessage?: string;
  compactHeader?: boolean;
}

export default function ProductGrid({
  products,
  title,
  description,
  eyebrow,
  id,
  emptyMessage = 'No hay productos disponibles por el momento.',
  compactHeader = false,
}: ProductGridProps) {
  return (
    <section
      id={id}
      className={compactHeader ? 'product-grid-shell product-grid-shell--compact' : 'section-shell'}
      aria-labelledby={title ? `${id ?? 'products'}-title` : undefined}
    >
      {(title || description || eyebrow) && (
        <div className="section-heading">
          {eyebrow ? <span className="section-eyebrow">{eyebrow}</span> : null}
          {title ? (
            <h2 id={`${id ?? 'products'}-title`} className="section-title">
              {title}
            </h2>
          ) : null}
          {description ? <p className="section-description">{description}</p> : null}
        </div>
      )}

      {products.length > 0 ? (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="empty-state">{emptyMessage}</p>
      )}
    </section>
  );
}
