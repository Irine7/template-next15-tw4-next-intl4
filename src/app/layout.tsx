import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Magic Potion Brewer',
  description: 'A simple app to brew magic potions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
