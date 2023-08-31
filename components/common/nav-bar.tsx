'use client';

import { HTMLAttributes, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { ChevronRight } from '~/components/ui/svgs/Icons';
import { Button } from '~/components/ui';
import { INTERNAL_PATH } from '~/shared/constant';

import { MenuIcon } from '@heroicons/react/outline';
import { UserButton } from '@clerk/nextjs';
import { SignedIn } from '@clerk/nextjs';

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  mobile?: boolean;
}

const NavLink = ({ children, href, mobile, ...others }: NavLinkProps) => {
  if (mobile) {
    return (
      <a
        className="font-manrope font-bold text-primary-900 text-title-sm"
        {...others}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      className="hover:cursor-pointer font-manrope font-semi-bold text-[#303030]
      text-[16px] hover:text-primary-400 ease-in-out duration-200"
      href={href}
      {...others}
    >
      {children}
    </Link>
  );
};

// const NavbarMobileMenu = ({
//   hasAutheticated,
// }: {
//   hasAutheticated: boolean;
// }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleOnClickNavLink = () => {
//     setIsMenuOpen(false);
//     document.body.classList.remove('no-scroll');
//   };

//   return (
//     <nav
//       className={`w-screen md:hidden fixed z-10 ${
//         isMenuOpen ? 'backdrop-blur-md' : ''
//       }`}
//     >
//       <div className="flex justify-between mx-5 mt-6">
//         <Link href="/" legacyBehavior>
//           <Image
//             src="/images/logo.png"
//             width={130}
//             height={33}
//             alt="SheCodesVietnam Logo"
//           />
//         </Link>
//         <MenuIcon
//           className={`h-5 w-5 ${isMenuOpen ? 'bg-white rounded-sm' : ''}`}
//           onClick={() => {
//             setIsMenuOpen(!isMenuOpen);
//             const { body } = document;
//             !isMenuOpen
//               ? body.classList.add('no-scroll')
//               : body.classList.remove('no-scroll');
//           }}
//         />
//       </div>

//       <div
//         className={`h-screen flex flex-col justify-center items-center gap-3 pl-4 ${
//           !isMenuOpen ? 'hidden' : ''
//         }`}
//       >
//         {hasAutheticated ? (
//           <>
//             <NavLink
//               mobile
//               href={INTERNAL_PATH.SETTINGS}
//               content="Cài đặt"
//               onClick={handleOnClickNavLink}
//             />
//             <NavLink
//               mobile
//               content="Đăng xuất"
//               // onClick={() => {}}
//             />
//           </>
//         ) : (
//           <>
//             <NavLink
//               mobile
//               href="/#faqs"
//               content="FAQs"
//               onClick={handleOnClickNavLink}
//             />
//             <NavLink
//               mobile
//               href={INTERNAL_PATH.SEARCH}
//               content="Tìm kiếm mentor"
//               onClick={handleOnClickNavLink}
//             />
//           </>
//         )}

//         <div className="mt-2" />

//         <Link href={INTERNAL_PATH.REGISTER} legacyBehavior>
//           <button className="flex justify-center items-center py-2 md:py-2 px-[12px] md:pl-[18px] md:pr-[14px] h-[54px] md:h-[42px] w-[303px] md:w-[204px] hover:-translate-y-[3px] ease-in-out duration-300 bg-primary-800 rounded-md">
//             <span className="cword-[-4px] font-lora font-semi-bold text-white text-heading">
//               Tham gia ngay
//             </span>
//             <ChevronRight className="pt-[2px] pl-1 fill-white" />
//           </button>
//         </Link>
//       </div>
//     </nav>
//   );
// };

const NavBar = () => {
  const [hasAutheticated, setHasAuthenticated] = useState(false);

  const router = useRouter();

  // useEffect(() => {
  // }, []);

  return (
    <>
      {/* <NavbarMobileMenu hasAutheticated={hasAutheticated} /> */}

      <nav className="hidden md:inline-block w-full md:fixed mt-3 md:mt-4 z-20">
        <div className="max-w-7xl flex justify-between items-center mx-16 1hxl:mx-auto">
          <section className="flex flex-row items-end">
            <Link href="/" legacyBehavior>
              {/* <Image */}
              {/*   src="/images/logo.png" */}
              {/*   alt="SheCodesVietnam Logo" */}
              {/*   width={130} */}
              {/*   height={33} */}
              {/*   className="cursor-pointer" */}
              {/* /> */}
              <h1 className="font-lora text-heading-md">PIF Network</h1>
            </Link>

            <div className="mr-8" />

            <div className="flex flex-row">
              <NavLink href="/#">Cảm hứng</NavLink>
              <div className="mr-6" />
              <NavLink href="/#">FAQs</NavLink>
              <div className="mr-6" />
              <NavLink href="/#">Blog</NavLink>
            </div>
          </section>

          <section className="flex justify-center items-center">
            <div
              className="hidden md:flex justify-center items-center gap-4
              py-[9px] px-[42px] bg-white/20 hover:bg-white/30 transition-colors
              ease-in-out duration-300 backdrop-blur-sm rounded-[32px] font-manrope
              font-regular text-body"
            >
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>

            <button
              className="h-[46px] bg-white border border-primary-900 py-[6px] px-7
              rounded-xl flex items-center"
            >
              <h4 className="font-lora text-[14px] text-black word-[-3px]">
                Đăng ký
              </h4>
            </button>

            <div className="mr-2" />

            <button
              className="h-[46px] bg-primary-900 pl-9 pr-7 rounded-xl
              flex items-center"
            >
              <h4 className="font-lora text-[14px] text-white word-[-3px]">
                Đăng nhập
              </h4>
              <ChevronRight className="pt-[2px] pl-1 fill-white" />
            </button>
          </section>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
