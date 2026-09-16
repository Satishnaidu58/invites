import type { Metadata } from 'next';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import './globals.css';

const display = Cormorant_Garamond({ variable: '--font-display', subsets: ['latin'], weight: ['400', '500', '600'], style: ['normal', 'italic'] });
const body = Montserrat({ variable: '--font-body', subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = { title: 'Samiksha & Chinmay | Engagement Invitation', description: 'Join Samiksha and Chinmay as they celebrate the beginning of their forever.' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${body.variable}`}>{children}</body></html>;
}
