import React from 'react'
import Link from 'next/link'
import UserNav from './UserNav'

const Header = () => {
  return (
    <div className="ml-24 pt-4 pb-2 container flex flex-row place-content-between">
      <Link href="/" prefetch={false}>
        <div className="flex items-center">
          <img src="/images/logo.png" width={130} height={33} alt="SheCodes Mentor" />
        </div>
      </Link>
      <div className="flex flex-col	justify-items-end w-2/5">
        <UserNav />
      </div>
    </div>
  )
}

export default Header
