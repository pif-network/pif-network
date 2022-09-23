import { ReactNode } from 'react'

import { NavBar, Footer } from '~/components/common'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      <main className='pt-6'>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
