import {Metadata} from 'next';
import {Footer, NavBar} from '~/components/common';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <NavBar />
      <body>{children}</body>
      <Footer />
    </html>
  );
}

export const metadata: Metadata = {
  title: 'PIF Network',
  description: 'The guidance you have always been looking for.',
};