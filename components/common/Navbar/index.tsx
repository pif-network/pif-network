import Link from 'next/link'
import UserNav from './UserNav'

const NavBar = () => {
  return (
    <nav className="fixed w-full sm:hidden md:block">
      <div className="flex container items-center justify-between gap-0 mx-auto py-8">
        <div className="flex items-center">
          <Link href="/" prefetch={false}>
            <img
              src="/images/logo.png"
              width={130}
              height={33}
              alt="SheCodes Mentor"
            />
          </Link>
        </div>

        <UserNav />
      </div>
    </nav>
  )
}

export default NavBar
