import './globals.css';
import NavMenu from '@/components/NavMenu';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ophilia',
  description: 'From Idea to Impact – Creativity in Motion.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full w-full">
      <body className="relative h-full w-full overflow-x-hidden bg-transparent">
        <NavMenu />
        {children}
      </body>
    </html>
  );
}
