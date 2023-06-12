import type { Metadata } from 'next';
import { Footer, NavBar } from '~/components/common';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

export const metadata: Metadata = {
  title: 'PIF Network',
  description: 'The guidance you have always been looking for.',
};
