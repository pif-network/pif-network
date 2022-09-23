import { ChevronRight } from '~/components/ui/svgs/Icons';

const NavLink = ({href,content}:{href:string,content:string}) => (
		<a href={href} className='hover:cursor-pointer font-manrope font-medium text-black hover:text-primary-400 ease-in-out duration-200'>
			{content}
		</a>
);

const NavBar = () => {
  return ( <nav className='w-full md:fixed mt-5 md:mt-7 z-20'>
    <div className='max-w-7xl flex justify-between items-center mx-12 xl:mx-auto'>
      <section>
        <img
              src="/images/logo.png"
              width={130}
              height={33}
              alt="SheCodes Mentor"
            />
      </section>

      <section className='flex justify-center items-center gap-16 xl:gap-32'>
        <div className='hidden md:flex justify-center items-center gap-4 py-[9px] px-[42px] bg-white/20 hover:bg-white/30 transition-colors ease-in-out duration-300 backdrop-blur-sm rounded-[32px] font-manrope font-regular text-body' >
          <NavLink href='/user/create-account?role=mentor' content='Trở thành mentor' />
          <NavLink href='/user/create-account?role=mentor' content='FAQs' />
          <NavLink href='/user/create-account' content='Tham gia ngay' />
        </div>
          <button className='flex justify-center items-center py-1 md:py-2 px-[12px] md:pl-[18px] md:pr-[14px] h-[34px] md:h-[42px] w-[100px] md:w-[204px] hover:-translate-y-[3px] ease-in-out duration-300 bg-primary-800 rounded-md'>
					<span className='cword-[-4px] font-lora font-semi-bold text-white text-body'>
            Tìm kiếm mentor
					</span>
              <ChevronRight className='pt-[2px] fill-white'/>
				</button>
      </section>
    </div>
  </nav>
  )
}

export default NavBar
