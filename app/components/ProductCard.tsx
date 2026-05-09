'use client';

import { Product } from '../types/product';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
  onWhatsApp: (product: Product) => void;
}

export default function ProductCard({ product, onWhatsApp }: ProductCardProps) {
  return (
    <article style={{
      backgroundColor: 'white',
      borderRadius: '1rem',
      boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
      overflow: 'hidden',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}>
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        aspectRatio: '1 / 1'
      }}>
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          style={{
            objectFit: 'cover',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        />
      </div>
      <div style={{
        padding: '1rem',
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
      }}>
        <h3 style={{
          fontSize: '1.125rem',
          fontWeight: '700',
          color: '#1f2937',
          marginBottom: '0.5rem'
        }}>{product.name}</h3>
        <p style={{
          color: '#4b5563',
          fontSize: '0.875rem',
          marginBottom: '0.75rem',
          lineHeight: '1.4',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>{product.description}</p>
        <div style={{ marginTop: 'auto' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '0.75rem'
          }}>
            <span style={{
              fontSize: '1.25rem',
              fontWeight: '700',
              color: '#b45306'
            }}>
              ${product.price.toLocaleString('es-AR')}
            </span>
            <span style={{
              fontSize: '0.75rem',
              padding: '0.25rem 0.5rem',
              backgroundColor: '#fef3c7',
              color: '#92400e',
              borderRadius: '9999px'
            }}>
              {product.category}
            </span>
          </div>
          <button
            onClick={() => onWhatsApp(product)}
            style={{
              width: '100%',
              backgroundColor: '#22c55e',
              color: 'white',
              fontWeight: '600',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              transition: 'background-color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#16a34a';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#22c55e';
            }}
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.99 20.91c-1.13 1.13-2.5 2.04-4.09 2.04-1.6 0-3.12-.66-4.28-1.82-3.44-3.44-6.08-7.62-6.08-12.28 0-1.6.62-3.1 1.76-4.24L4.5 2.52a1.7 1.7 0 0 1 1.7-1.7h4.24c.72 0 1.36.28 1.87.77l2.83 2.83c.5.5.77 1.14.77 1.8v.08c0 .72-.28 1.36-.77 1.87l-1.27 1.27c-.2.2-.3.46-.3 1.06 0 .6.1 1.1.3 1.6.2.4.5.8.8 1.2.3.4.6.8.8 1.2.2.4.3.8.3 1.2 0 .7-.2 1.4-.6 2-.4.6-1 1.2-1.6 1.8-.6.6-1.2 1-1.8 1.4-.4.3-.8.6-1.2.8-.4.4-.8.8-1.2 1-.4.4-.8.6-1.2.6h-.08c-.7 0-1.34-.28-1.87-.77L5.5 16.5c-.5-.5-.77-1.14-.77-1.8v-.08c0-.7.28-1.36.77-1.87l2.83-2.83c.5-.5 1.14-.77 1.87-.77h.08c.7 0 1.36.28 1.87.77l1.27 1.27c.5.5.8.8.8 1.2.2.4.3.8.3 1.2 0 .7-.2 1.4-.6 2-.4.6-1 1.2-1.6 1.8-.6.6-1.2 1-1.8 1.4-.4.3-.8.6-1.2.8-.4.4-.8.8-1.2 1-.4.4-.6.6-1 .6H5.5c-.7 0-1.34-.28-1.87-.77L2.5 15.5c-.5-.5-.77-1.14-.77-1.8v-.08c0-.7.28-1.36.77-1.87l2.83-2.83c.5-.5 1.14-.77 1.87-.77h.08c.7 0 1.36.28 1.87.77l1.27 1.27c.5.5.8.8.8 1.2.2.4.3.8.3 1.2 0 .7-.2 1.4-.6 2-.4.6-1 1.2-1.6 1.8-.6.6-1.2 1-1.8 1.4-.4.3-.8.6-1.2.8-.4.4-.8.8-1.2 1-.4.4-.6.6-1 .6z" />
            </svg>
            Pedir ahora
          </button>
        </div>
      </div>
    </article>
  );
}