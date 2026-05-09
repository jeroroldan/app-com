# AGENTS.md

## Comandos útiles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run lint` - Linting

## Buenas prácticas aplicadas

- Componentes reutilizables con TypeScript
- CSS personalizado responsive (sin Tailwind)
- Mobile-first design
- Imágenes optimizadas con Next.js Image
- Precios formateados en pesos argentinos
- WhatsApp con mensajes prearmados
- Jerarquía visual clara

## Cambios realizados

- Removido Tailwind CSS por solicitud del usuario
- Implementado sistema CSS personalizado con clases
- Diseño responsive usando media queries
- Imágenes locales en lugar de externas
- Build exitoso y funcional

## Para escalar

1. Añadir `lib/api.ts` para conectar con backend
2. Crear `app/admin/` para gestión de productos
3. Añadir `next-intl` para internacionalización
4. Implementar `next-themes` para modo oscuro
5. Añadir analytics con `next-plausible`