import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: '2MAD - Mario, Alba, Dani',
  description: 'Un recuerdo digital de nuestra vida juntos',
};

// Importamos la fuente de Google Fonts
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={dmSans.variable}>
      <body className="font-sans bg-gradient-to-br from-slate-50 to-purple-50 text-gray-800  from-gray-950  to-gray-900  text-gray-100 transition-colors">
        {children}
      </body>
    </html>
  );
}
