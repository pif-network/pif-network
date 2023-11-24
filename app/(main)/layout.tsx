import type { Metadata } from 'next';
import { Footer, NavBar } from '~/components/common';
import { PositionObserver } from '~/lib/contexts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PositionObserver>
        <NavBar />
        {children}
        <Footer />
      </PositionObserver>
    </>
  );
}

export const metadata: Metadata = {
  title: 'PIF Network',
  description: 'The guidance you have always been looking for.',
};
