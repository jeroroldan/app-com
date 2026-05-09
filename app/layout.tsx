import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import '../components.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Delicias Artesanales',
  description: 'Pastafrolas, alfajores, budines y tortas artesanales',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}