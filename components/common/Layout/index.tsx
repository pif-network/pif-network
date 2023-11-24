import { ReactNode } from 'react';

import { NavBar, Footer } from '~/components/common';
import { PositionObserver } from '~/lib/contexts';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      <PositionObserver>{children}</PositionObserver>
      <Footer />
    </>
  );
};

export default Layout;
