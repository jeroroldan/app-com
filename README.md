# Delicias Artesanales

Landing page para productos artesanales hechos con amor.

## Tecnologías

- Next.js 15 (App Router)
- TypeScript
- CSS personalizado (sin Tailwind)
- React 19

## Instalación

```bash
npm install
npm run dev
```

## Estructura

```
app/
  layout.tsx
  page.tsx
  globals.css
  components/
    HeroSection.tsx
    ProductCard.tsx
    ProductGrid.tsx
    WhatsAppButton.tsx
    BenefitsSection.tsx
    AboutSection.tsx
    Footer.tsx
  data/
    products.ts
  types/
    product.ts
public/
  hero-pattern.svg
```

## Escalabilidad futura

Para migrar a una API/CMS o base de datos:

1. Crear `lib/api.ts` con funciones CRUD
2. Actualizar `app/page.tsx` para usar server components
3. Añadir `app/api/products/route.ts` para API REST
4. Implementar `app/admin/` para panel de administración