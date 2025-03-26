import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next15 + Auth + Next Intl + Tailwind CSS Template',
  description: 'A cutting edge template for Next15 + Auth + Next Intl + Tailwind CSS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
