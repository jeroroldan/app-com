import Image from 'next/image';
import { formatPrice } from '../lib/formatters';
import { buildProductWhatsAppLink } from '../lib/whatsapp';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="product-card__media">
        <Image
          src={product.imageUrl}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
          className="product-card__image"
        />
        <div className="product-card__overlay" aria-hidden="true" />
        {product.featured ? <span className="product-card__flag">Destacado</span> : null}
      </div>

      <div className="product-card__content">
        <div className="product-card__meta">
          <span className="product-card__category">{product.category}</span>
          <strong className="product-card__price">{formatPrice(product.price)}</strong>
        </div>

        <h3 className="product-card__title">{product.name}</h3>
        <p className="product-card__description">{product.description}</p>
        <p className="product-card__occasion">{product.marketingBlurb}</p>

        <a
          className="button button--whatsapp button--full"
          href={buildProductWhatsAppLink(product)}
          target="_blank"
          rel="noreferrer"
          aria-label={`Pedir ${product.name} por WhatsApp`}
        >
          Pedir por WhatsApp
        </a>
      </div>
    </article>
  );
}
