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
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  mobile?: boolean;
}

const NavLink = ({ children, href, mobile, ...others }: NavLinkProps) => {
  if (mobile) {
    return (
      <Link
        className="font-manrope font-bold text-primary-900 text-title-sm"
        href={href}
        {...others}
      >
        {children}
      </Link>
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

const NavBar = () => {
  const [hasAutheticated, setHasAuthenticated] = useState(false);

  const router = useRouter();

  // useEffect(() => {
  // }, []);

  return (
    <header
      className="w-full max-w-7xl fixed flex justify-between items-center
        py-4 md:py-2 px-5 md:px-12 1hxl:mx-auto z-20 bg-white"
    >
      <section className="flex flex-row items-end">
        <Link href="/">
          {/* <Image */}
          {/*   src="/images/logo.png" */}
          {/*   alt="SheCodesVietnam Logo" */}
          {/*   width={130} */}
          {/*   height={33} */}
          {/*   className="cursor-pointer" */}
          {/* /> */}
          <h1
            className="font-lora text-[18px] md:text-[24px] leading-[initial]
              tracking-tight md:tracking-normal"
          >
            PIF Network
          </h1>
        </Link>

        <div className="mr-8" />

        <nav className="hidden md:flex flex-row">
          <NavLink href="/#">Cảm hứng</NavLink>
          <div className="mr-6" />
          <NavLink href="/#">FAQs</NavLink>
          <div className="mr-6" />
          <NavLink href="/#">Blog</NavLink>
        </nav>
      </section>

      <HamburgerMenuIcon className="md:hidden w-5 h-5" />

      <nav className="hidden md:flex justify-center items-center">
        <Button variant="outline">
          <h4>Đăng ký</h4>
        </Button>

        <div className="mr-2" />

        <Button size="default-with-icon">
          <h4>Đăng nhập</h4>
          <ChevronRight className="pl-1 fill-white" />
        </Button>
      </nav>
    </header>
  );
};

export default NavBar;