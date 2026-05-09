'use client';

import { Product } from '../types/product';

interface WhatsAppButtonProps {
  product?: Product;
  className?: string;
}

export default function WhatsAppButton({ product, className = '' }: WhatsAppButtonProps) {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5491112345678';
    const message = product
      ? `Hola, me interesa el producto: ${product.name} - $${product.price.toLocaleString('es-AR')}`
      : 'Hola, me gustaría consultar sobre sus productos artesanales';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      style={{
        backgroundColor: '#22c55e',
        color: 'white',
        fontWeight: '600',
        padding: '0.75rem 1.5rem',
        borderRadius: '0.5rem',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        transition: 'background-color 0.2s ease',
        fontSize: '1rem'
      }}
      className={className}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#16a34a';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#22c55e';
      }}
    >
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.99 20.91c-1.13 1.13-2.5 2.04-4.09 2.04-1.6 0-3.12-.66-4.28-1.82-3.44-3.44-6.08-7.62-6.08-12.28 0-1.6.62-3.1 1.76-4.24L4.5 2.52a1.7 1.7 0 0 1 1.7-1.7h4.24c.72 0 1.36.28 1.87.77l2.83 2.83c.5.5.77 1.14.77 1.8v.08c0 .72-.28 1.36-.77 1.87l-1.27 1.27c-.2.2-.3.46-.3 1.06 0 .6.1 1.1.3 1.6.2.4.5.8.8 1.2.3.4.6.8.8 1.2.2.4.3.8.3 1.2 0 .7-.2 1.4-.6 2-.4.6-1 1.2-1.6 1.8-.6.6-1.2 1-1.8 1.4-.4.3-.8.6-1.2.8-.4.4-.8.8-1.2 1-.4.4-.8.6-1.2.6h-.08c-.7 0-1.34-.28-1.87-.77L5.5 16.5c-.5-.5-.77-1.14-.77-1.8v-.08c0-.7.28-1.36.77-1.87l2.83-2.83c.5-.5 1.14-.77 1.87-.77h.08c.7 0 1.36.28 1.87.77l1.27 1.27c.5.5.8.8.8 1.2.2.4.3.8.3 1.2 0 .7-.2 1.4-.6 2-.4.6-1 1.2-1.6 1.8-.6.6-1.2 1-1.8 1.4-.4.3-.8.6-1.2.8-.4.4-.8.8-1.2 1-.4.4-.6.6-1 .6H5.5c-.7 0-1.34-.28-1.87-.77L2.5 15.5c-.5-.5-.77-1.14-.77-1.8v-.08c0-.7.28-1.36.77-1.87l2.83-2.83c.5-.5 1.14-.77 1.87-.77h.08c.7 0 1.36.28 1.87.77l1.27 1.27c.5.5.8.8.8 1.2.2.4.3.8.3 1.2 0 .7-.2 1.4-.6 2-.4.6-1 1.2-1.6 1.8-.6.6-1.2 1-1.8 1.4-.4.3-.8.6-1.2.8-.4.4-.8.8-1.2 1-.4.4-.6.6-1 .6z" />
      </svg>
      {product ? 'Pedir por WhatsApp' : 'Consultar por WhatsApp'}
    </button>
  );
}