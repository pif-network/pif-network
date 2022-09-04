import Link from 'next/link';

import {
  FacebookFill,
  InstagramLine,
  LinkedinLine,
  CopyrightLine,
} from '~/components/ui/svgs/Icons';

const Footer = () => {
  return (
    <footer className="bg-[url('/FooterBackground-sm.svg')] bg-cover font-manrope md:bg-[url('/FooterBackground-lg.svg')] md:py-8">
      <div className="flex flex-col max-w-[100%] pt-4 md:grid md:grid-cols-[50%_50%] md:pt-14">
        <div className="pl-4 pt-9 text-body-md sm:text-body md:pt-0 md:pl-0 md:m-auto md:text-sub-heading text-gray-400">
          <div>SheCodes Việt Nam</div>
          <div className="text-green-200 font-lora">MENTORSHIP PROGRAMME</div>
          <div className="hidden pt-6 text-body-md md:block">SINCE 2021</div>
        </div>
        <div className="flex relative justify-between pl-4 pt-5 pb-3 sm:pl-5 md:pt-0 md:pb-0 md:justify-start md:pl-0 md:m-auto">
          <div className="text-gray-400 text-body-sm md:text-body">
            <Link href="/">
              <a className="block md:pb-2 hover:text-white">
                Điều khoản sử dụng
              </a>
            </Link>
            <Link href="/">
              <a className="hover:text-white">Liên hệ</a>
            </Link>
            <div className="pt-7 text-caption md:text-body-md">
              copyright 2022
              <CopyrightLine
                className="inline w-[18.75px] h-[18.75px] mx-1 md:hidden"
                colour="#999999"
              />
              <span className="inline md:hidden">all rights reserved</span>
            </div>
          </div>
          <div className="hidden md:block pt-20 px-2">
            <CopyrightLine className="w-[24px] h-[24px]" colour="#999999" />
          </div>
          <div className="text-gray-400 md:pl-8">
            <div className="md:flex md:pl-2">
              <Link href="/">
                <a>
                  <LinkedinLine
                    className="absolute top-7 right-[4.6rem] w-[35px] h-[35px] sm:top-6 sm:right-20 sm:w-[42px] sm:h-[42px] md:static md:w-[48px] md:h-[48px]"
                    colour="#999999"
                  />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <InstagramLine
                    className="absolute top-3 right-9 w-[35px] h-[35px] sm:top-2 sm:w-[42px] sm:h-[42px] md:static md:w-[48px] md:h-[48px]"
                    colour="#999999"
                  />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <FacebookFill
                    className="absolute top-14 right-10 w-[28px] h-[28px] sm:w-[35px] sm:h-[35px] md:static md:sef-center md:w-[40px] md:h-[40px]"
                    colour="#999999"
                  />
                </a>
              </Link>
            </div>
            <div className="hidden pt-8 text-center text-body-md md:block">
              all rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
