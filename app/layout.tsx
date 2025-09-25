import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kaushik Thakur - Aspiring Software Engineer',
  description: 'Portfolio of Kaushik Thakur - Frontend & Full Stack Developer passionate about creating innovative digital experiences',
  keywords: 'Kaushik Thakur, Software Engineer, Frontend Developer, Full Stack, React, Next.js, Portfolio',
  authors: [{ name: 'Kaushik Thakur' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-900 text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}