import {ReactNode} from 'react';

import {NavBar, Footer} from '~/components/common';
import {ScrollObserver} from '~/lib/scroll';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({children}: LayoutProps) => {
  return (
    <>
      <NavBar />
      <ScrollObserver>{children}</ScrollObserver>
      <Footer />
    </>
  );
};

export default Layout;