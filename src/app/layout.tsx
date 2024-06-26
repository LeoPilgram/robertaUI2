import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Manrope } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Fonts
const inter = Inter({ subsets: ['latin'] });

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Roberta UI',
  description: 'Userinterface for controlling Roberta',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="robertaLogo.png" />
      </head>
      <body className={manrope.className}>
        <main>
          <div className="flex flex-col h-screen justify-between">
            <Navbar />
            <div className="mb-auto">{children}</div>
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
