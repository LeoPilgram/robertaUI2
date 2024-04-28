import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>
        <main>
          <nav className="bg-green-300 p-4 flex justify-center">
            <div className="container mx-auto flex justify-between items-center w-full max-w-screen-lg">
              <Link href="/">Home</Link>
              <Link href="/dance">Dance</Link>
            </div>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
