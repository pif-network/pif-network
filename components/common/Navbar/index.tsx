import Link from 'next/link'
import UserNav from './UserNav'

const NavBar = () => {
	return (
		<div className="container mx-auto sm:hidden md:block">
			{/* <div className="flex "> */}
			<nav className="flex items-center justify-between  pt-8 pb-8 px-20 ">
				<div className="flex shrink-0  items-center font-semi-bold text-title-sm font-lora text-gray-700 mr-6 ">
					{/* <Link href="/" prefetch={false}>
					<img
						src="/images/logo.png"
						width={130}
						height={33}
						alt="SheCodes Mentor"
					/>
				</Link> */}
					shecodes
				</div>
				<div className="inline-block ">
					<div className="flex flex-wrap items-center">
						<UserNav />
					</div>
				</div>
			</nav>
		</div>
	)
}

export default NavBar
