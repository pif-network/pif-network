import React from 'react'
import Link from 'next/link'
import UserNav from './UserNav'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap pt-4 pb-2 px-4">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/" prefetch={false}>
          <img src="/images/logo.png" width={130} height={33} alt="SheCodes Mentor" />
        </Link>
      </div>
      <div className="block">
        <div className="flex items-center">
          <UserNav />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
