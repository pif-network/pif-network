import { MenuIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { HTMLAttributes, useState } from 'react';
import { ChevronRight } from '~/components/ui/svgs/Icons';

interface NavLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href?: string;
  content: string;
  mobile?: boolean;
}

const NavLink = ({ content, mobile, ...others }: NavLinkProps) => {
  if (mobile) {
    return (
      <a className='font-manrope font-bold text-primary-900 text-title-sm' {...others}>
        {content}
      </a>
    )
  }

  return (
    <a className="hover:cursor-pointer font-manrope font-medium text-black hover:text-primary-400 ease-in-out duration-200" {...others}>
      {content}
    </a>
  )
};

const NavbarMobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOnClickNavLink = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('no-scroll');
  }

  return (
    <nav className={`w-screen md:hidden fixed z-10 ${isMenuOpen ? 'backdrop-blur-md' : ''}`}>

      <div className='flex justify-between mx-5 mt-6'>
        <img
          src="/images/logo.png"
          width={130}
          height={33}
          alt="SheCodes Mentor"
        />
        <MenuIcon
          className={`h-5 w-5 ${isMenuOpen ? 'bg-white rounded-sm' : ''}`}
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            const body = document.body
            !isMenuOpen ? body.classList.add('no-scroll') : body.classList.remove('no-scroll')
          }}
        />
      </div>

      <div className={`h-screen flex flex-col justify-center items-center gap-3 pl-4 ${!isMenuOpen ? 'hidden' : ''}`} >
        <NavLink mobile href="/#faqs" content="FAQs" onClick={handleOnClickNavLink} />
        <Link href="/search">
          <NavLink mobile content="Tìm kiếm mentor" onClick={handleOnClickNavLink} />
        </Link>
          <div className='mt-2'/>
        <Link href='/user/create-account'>
          <button className="flex justify-center items-center py-2 md:py-2 px-[12px] md:pl-[18px] md:pr-[14px] h-[54px] md:h-[42px] w-[303px] md:w-[204px] hover:-translate-y-[3px] ease-in-out duration-300 bg-primary-800 rounded-md">
            <span className="cword-[-4px] font-lora font-semi-bold text-white text-heading">
              Tham gia ngay
            </span>
            <ChevronRight className="pt-[2px] pl-1 fill-white" />
          </button>
        </Link>
      </div >

    </nav>
  );
};

const NavBar = () => {
  return (
    <>
      <NavbarMobileMenu />

      <nav className="hidden md:inline-block w-full md:fixed mt-5 md:mt-7 z-20">
        <div className="max-w-7xl flex justify-between items-center mx-8 xl:mx-auto">

          <section>
            <img
              src="/images/logo.png"
              width={130}
              height={33}
              alt="SheCodes Mentor"
            />
          </section>

          <section className="flex justify-center items-center gap-16 xl:gap-32">
            <div className="hidden md:flex justify-center items-center gap-4 py-[9px] px-[42px] bg-white/20 hover:bg-white/30 transition-colors ease-in-out duration-300 backdrop-blur-sm rounded-[32px] font-manrope font-regular text-body">
              <NavLink
                href="/user/create-account?role=mentor"
                content="Trở thành mentor"
              />
              <NavLink href="/#faqs" content="FAQs" />
              <NavLink href="/user/create-account" content="Tham gia ngay" />
            </div>
            <button className="flex justify-center items-center py-1 md:py-2 px-[12px] md:pl-[18px] md:pr-[14px] h-[34px] md:h-[42px] w-[100px] md:w-[204px] hover:-translate-y-[3px] ease-in-out duration-300 bg-primary-800 rounded-md">
              <span className="cword-[-4px] font-lora font-semi-bold text-white text-body">
                Tìm kiếm mentor
              </span>
              <ChevronRight className="pt-[2px] pl-1 fill-white" />
            </button>
          </section>

        </div>
      </nav>
    </>
  );
};

export default NavBar;
