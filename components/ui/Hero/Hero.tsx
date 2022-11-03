import Image from 'next/image';
import { Children, useContext, useRef } from 'react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import border from '../../../assets/landing/border.svg';
import heroMobile from '../../../assets/landing/heroMobile.png';
import heroMiddle from '../../../assets/landing/heroMiddle.png';
import heroUp from '../../../assets/landing/heroUp.png';
import heroDown from '../../../assets/landing/heroDown.png';
import hero7 from '../../../assets/landing/hero7.png';
import hero8 from '../../../assets/landing/hero8.png';
import hero6 from '../../../assets/landing/hero6.png';
import hero1 from '../../../assets/landing/hero1.png';
import hero2 from '../../../assets/landing/hero2.png';
import hero3 from '../../../assets/landing/hero3.png';
import hero4 from '../../../assets/landing/hero4.png';
import hero5 from '../../../assets/landing/hero5.png';
import Button from '../../../components/ui/Button';
import { RightOutlined } from '@ant-design/icons';
import { Search } from '../svgs/Icons';
const Hero = () => {
  return (
    <div className="flex sm:flex-col md:justify-center xl:justify-center 2xl:justify-center sm:pt-20 sm:pb-10 md:flex-row md:px-20 md:py-24 md:gap-12 lg:px-24 lg:gap-24  xl:py-32 xl:px-32  xl:gap-24 2xl:gap-24 2xl:px-32 md:overflow-auto">
      <div className="flex flex-col max-w-xl min-w-sm basis-full lg:basis-auto xl:basis-6/12 2xl:basis-6/12 order-2 md:order-1">
        <div className="flex basis-full md:basis-1/4 sm:flex-row sm:my-11 sm:gap-4 sm:font-lora sm:font-body-sm sm:items-center sm:justify-center md:hidden">
          <div className="flex sm:rounded sm:px-2 sm:py-1 sm:flex-col sm:items-center sm:italic sm:font-regular sm:bg-gray-100 sm:drop-shadow-xl sm:shadow-gray-700">
            {'<shecodes/>'}
          </div>
          <div>MENTORSHIP PROGRAMME</div>
        </div>

        <div className="font-lora font-semi-bold word-[-10px] text-title-sm text-primary-900 lg:word-[-1rem]  md:text-title-sm lg:text-title">
          <div className="flex flex-col items-center md:items-start  ">
            <div>Sự giúp đỡ</div>
            <div>mà bạn</div>
            <div className="flex flex-row flex-wrap">
              đang{' '}
              <span className="flex flex-row relative items-center ml-2 lg:ml-4 font-medium rounded">
                <div className="absolute h-full ">
                  <Image src={border} alt="Hero Section" />
                </div>

                <div className="relative font-lora font-medium italic word-[-6px] mx-1 ml-2 mb-2 before:absolute before:bg-black sm:before:h-[1px] md:before:h-[2px] before:left-0 before:right-0 sm:before:bottom-1 md:before:bottom-2">
                  tìm kiếm
                </div>
                <Search className="fill-gray-700 w-8 h-8 mr-1 mb-[6px] md:ml-1 md:w-8 md:h-8 lg:ml-2 lg:w-[38px] lg:h-[38px]" />
              </span>
            </div>
          </div>
        </div>

        <div className="font-manrope leading-5 text-[14px] text-primary-900 ">
          <div className="flex flex-col items-center justify-center md:items-start md:text-left md:mt-12 md:pl-0 md:pr-8 md:text-body lg:pr-24 lg:text-body-lg xl:pr-24 2xl:pr-24 sm:py-4 sm:px-12 sm:text-center">
            Trò chuyện, chia sẻ, nâng cao kĩ năng chuyên môn, mở rộng hiểu biết
            và khám phá những insights mới lạ từ các mentor dày dặn kinh nghiệm
            của chúng tôi.
          </div>
        </div>

        <div className="flex flex-col md:flex-row tlg-fh:absolute tlg-fh:bottom-[56px] mt-4 lg:mt-8 sm:gap-2 md:gap-5 sm:items-stretch md:items-start sm:mx-14 md:mx-0">
          <Button
            className="sm:hidden md:block cword-[-6px] tlg:text-[18px]"
            fillType="filled"
            size="medium"
            content="Đặt lịch hẹn ngay!"
            href="/"
          />
          <Button
            className="sm:hidden md:block tlg:text-[18px]"
            fillType="outlined"
            size="medium"
            content="Về SheCodes"
            href="/"
            rightIcon="ChevronRight"
          />
          <Button
            className="w-full sm:block md:hidden cword-[-6px]"
            fillType="filled"
            size="medium"
            content="Đặt lịch hẹn ngay"
            href="/"
            rightIcon="ChevronRight"
          />
          <Button
            className="w-full sm:block md:hidden"
            fillType="outlined"
            size="medium"
            content="Đăng nhập"
            href="/"
          />
        </div>
        {/* <div className="flex sm:flex-col"> */}
        <div className="flex sm:flex-col md:hidden items-center justify-center w-48 border-t-[1px]  border-t-gray-300 mx-auto mt-12">
          <ChevronDownIcon className="w-6 h-6" />
        </div>
        {/* </div> */}
      </div>

      <div className=" flex flex-col basis-full md:justify-center md:mb-16 lg:basis-auto xl:basis-auto xl:justify-center xl:mt-16 justify-center items-center  order-1 md:order-2">
        <div className="flex items-center relative ">
          <div className="hidden md:absolute md:block bottom-[-78%] left-[35%] w-[48%] z-10">
            <Image src={hero7} alt="Hero Section" />
          </div>

          <div className="hidden md:absolute md:block bottom-[-21%] left-[61%] w-[20%] z-20">
            <Image src={hero3} alt="Hero Section" />
          </div>

          <div className="hidden md:absolute md:block bottom-[67%] w-[23%] left-[-13%] z-30">
            <Image src={hero6} alt="Hero Section" />
          </div>

          <div className="hidden md:absolute md:block bottom-[-39%] w-[74%] left-[-5%] z-30">
            <Image src={heroDown} alt="Hero Section" className="object-fit" />
          </div>

          <div className="hidden md:absolute md:block bottom-[17%] left-[86%] w-[30%] z-30">
            <Image src={hero1} alt="Hero Section" className="object-cover" />
          </div>

          <div
            className="hidden md:absolute md:block bottom-[7%] w-[20%] left-[-7%] z-30
          "
          >
            <Image src={hero2} alt="Hero Section" />
          </div>

          <div
            className="
            hidden md:block md:w-[16rem] lg:w-[21rem] xl:w-[28rem] z-40"
          >
            <Image src={heroMiddle} alt="Hero Section" />
          </div>

          <div className="md:hidden w-full" style={{ opacity: 0.7 }}>
            <Image src={heroMobile} alt="Hero Section" />
          </div>

          <div className="hidden md:absolute md:block bottom-[92%] left-[-13%]  w-[125%] z-50">
            <Image src={heroUp} alt="Hero Section" />
          </div>

          <div className="hidden md:absolute md:block bottom-[92%] w-[35%] left-[62%] z-50">
            <Image src={hero4} alt="Hero Section" />
          </div>

          <div className="hidden md:absolute md:block bottom-[100%] w-[7%] left-[86%] z-50">
            <Image src={hero5} alt="Hero Section" />
          </div>

          <div className="hidden md:absolute md:block bottom-[92%] w-[10%] left-[85%] z-50">
            <Image src={hero8} alt="Hero Section" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
