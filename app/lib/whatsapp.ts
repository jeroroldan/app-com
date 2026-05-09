import { storeConfig } from '../data/store';
import { formatPrice } from './formatters';
import { Product } from '../types/product';

function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${storeConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildGeneralWhatsAppLink() {
  return buildWhatsAppUrl(
    'Hola, quiero consultar por sus productos artesanales y coordinar un pedido.'
  );
}

export function buildProductWhatsAppLink(product: Product) {
  return buildWhatsAppUrl(
    `Hola, me interesa ${product.name} (${formatPrice(product.price)}). Quiero consultar disponibilidad y pedido.`
  );
}
