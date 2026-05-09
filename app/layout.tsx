import type { Metadata } from 'next';
import '../globals.css';
import '../components.css';

export const metadata: Metadata = {
  title: 'Delicias Artesanales | Catalogo dulce para pedir por WhatsApp',
  description:
    'Catalogo de pastafrolas, alfajores, budines y tortas artesanales. Productos frescos, personalizados y listos para pedir por WhatsApp.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body suppressHydrationWarning>
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
