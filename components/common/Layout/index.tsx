import { ReactNode } from 'react'

import { NavBar, Footer } from '~/components/common'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
