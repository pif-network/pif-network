import type { Metadata } from 'next';
import { Footer, NavBar } from '~/components/common';
import { ScrollObserver } from '~/lib/scroll';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <NavBar /> */}
      <ScrollObserver>{children}</ScrollObserver>
      <Footer />
    </>
  );
}

export const metadata: Metadata = {
  title: 'PIF Network',
  description: 'The guidance you have always been looking for.',
};
