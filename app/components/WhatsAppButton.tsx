import { Product } from '../types/product';
import { buildGeneralWhatsAppLink, buildProductWhatsAppLink } from '../lib/whatsapp';

interface WhatsAppButtonProps {
  product?: Product;
  label?: string;
  className?: string;
  floating?: boolean;
}

export default function WhatsAppButton({
  product,
  label,
  className = '',
  floating = false,
}: WhatsAppButtonProps) {
  const href = product ? buildProductWhatsAppLink(product) : buildGeneralWhatsAppLink();
  const text = label ?? (product ? 'Pedir por WhatsApp' : 'Consultar por WhatsApp');

  if (floating) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp"
        aria-label="Abrir WhatsApp para hacer un pedido"
      >
        <span aria-hidden="true">WA</span>
        <span className="sr-only">{text}</span>
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`button button--whatsapp ${className}`.trim()}
      aria-label={product ? `Pedir ${product.name} por WhatsApp` : text}
    >
      {text}
    </a>
  );
}
