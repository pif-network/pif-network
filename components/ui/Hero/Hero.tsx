import Image from 'next/image'
import { Children, useContext, useRef } from 'react'
import { SearchIcon } from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/outline'
import heroMobile from '../../../assets/landing/heroMobile.png'
import heroMiddle from '../../../assets/landing/heroMiddle.png'
import heroUp from '../../../assets/landing/heroUp.png'
import heroDown from '../../../assets/landing/heroDown.png'
import hero7 from '../../../assets/landing/hero7.png'
import hero8 from '../../../assets/landing/hero8.png'
import hero6 from '../../../assets/landing/hero6.png'
import hero1 from '../../../assets/landing/hero1.png'
import hero2 from '../../../assets/landing/hero2.png'
import hero3 from '../../../assets/landing/hero3.png'
import hero4 from '../../../assets/landing/hero4.png'
import hero5 from '../../../assets/landing/hero5.png'
import Button from '../../../components/ui/Button'
import s from 'Hero.module.css'
import { RightOutlined } from '@ant-design/icons'
const Hero = () => {
  return (
    <div className="flex sm:flex-col md:justify-center xl:justify-center 2xl:justify-center sm:pt-20 sm:pb-10 md:flex-row md:px-20 md:py-24 md:gap-12 lg:px-24 lg:gap-24  xl:py-32 xl:px-32  xl:gap-24 2xl:gap-24 2xl:px-32 md:overflow-auto md:bg-white sm:bg-gray-50">
      <div className="flex flex-col max-w-xl min-w-sm basis-full lg:basis-auto xl:basis-6/12 2xl:basis-6/12 order-2 md:order-1">
        <div className="flex basis-full md:basis-1/4 sm:flex-row sm:my-11 sm:gap-4 sm:font-lora sm:font-body-sm sm:items-center sm:justify-center md:hidden">
          <div className="flex sm:rounded sm:px-2 sm:py-1 sm:flex-col sm:items-center sm:italic sm:font-regular sm:bg-gray-100 sm:drop-shadow-xl sm:shadow-gray-700">
            {'<shecodes/>'}
          </div>
          <div>MENTORSHIP PROGRAMME</div>
        </div>

        {/* <div className="font-lora font-semi-bold word-[-0.3rem] text-title-sm text-primary-900 lg:word-[-1rem]  md:text-title-sm lg:text-title">
          <div className="flex flex-row justify-center md:justify-start flex-wrap">
            <div className="mr-2">Sự giúp đỡ</div>
            <div className="mr-3">mà bạn đang</div>
            <span className="flex flex-row items-center font-medium border-2 border-dashed border-black rounded">
              <div className="relative font-lora font-medium italic mx-1 break-normal before:absolute before:bg-black before:h-1 before:left-0 before:right-0 sm:before:bottom-1 md:before:bottom-2">
                tìm kiếm
              </div>
              <SearchIcon className="ml-1 w-8 h-8 md:ml-2 md:w-12 md:h-12" />
            </span>
          </div>
        </div> */}

        <div className="font-lora font-semi-bold word-[-0.3rem] text-title-sm text-primary-900 lg:word-[-1rem]  md:text-title-sm lg:text-title">
          <div className="flex flex-col items-center md:items-start  ">
            <div>Sự giúp đỡ</div>
            <div>mà bạn</div>
            <div className="flex flex-row flex-wrap">
              đang{' '}
              <span className="flex flex-row items-center ml-3 font-medium border-[1px] border-dashed  border-black rounded">
                <div className="relative font-lora font-medium italic mx-1 before:absolute before:bg-black sm:before:h-[1px] md:before:h-[2px] before:left-0 before:right-0 sm:before:bottom-1 md:before:bottom-2">
                  tìm kiếm
                </div>
                <SearchIcon className="ml-1 w-8 h-8 md:ml-1 md:w-8 md:h-8 lg:ml-2 lg:w-12 lg:h-12" />
              </span>
            </div>
          </div>
        </div>

        <div className="font-manrope leading-7 text-[14px] text-primary-900 ">
          <div className="flex flex-col items-center justify-center md:items-start md:text-left md:mt-12 md:pl-0 md:pr-8 md:text-body lg:pr-24 lg:text-body-lg xl:pr-24 2xl:pr-24 sm:py-4 sm:px-12 sm:text-center  ">
            <div>
              Trò chuyện, chia sẻ, nâng cao kĩ năng chuyên môn, mở rộng hiểu
              biết và khám phá những insights mới lạ từ các mentor dày dặn kinh
              nghiệm của chúng tôi.
            </div>
          </div>
        </div>

        <div className="flex sm:flex-col md:flex-row mt-8 sm:gap-2 md:gap-5 sm:items-stretch md:items-start sm:mx-14 md:mx-0 md:mr-10">
          <Button
            fillType="filled"
            className="w-full sm:hidden md:block"
            size="medium"
            content="Đặt lịch hẹn ngay!"
            href="/"
          />
          <Button
            className="w-full sm:hidden md:block"
            fillType="outlined"
            size="medium"
            content="Về SheCodes"
            href="/"
            rightIcon="ChevronRight"
          />
          <Button
            fillType="filled"
            className="w-full sm:block md:hidden"
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
          <div className="md:absolute md:top-[18.5rem] md:right-[4.0rem] md:block hidden">
            <Image src={hero7} />
          </div>

          <div
            className="
            md:absolute md:top-[13rem] md:right-[4.5rem] md:block 
            xl:absolute xl:top-[15rem] xl:right-[4.5rem] xl:block
            hidden 
          "
          >
            <Image src={hero3} />
          </div>

          <div
            className="
            md:absolute md:top-[-0.3rem] md:left-[-3.0rem] md:block 
            xl:absolute xl:top-[-0.3rem] xl:left-[-3.5rem] xl:block 
            hidden lg:top-[-0.3rem] 
          "
          >
            <Image src={hero6} />
          </div>

          <div
            className="
            md:absolute md:top-[9.5rem] md:left-[-1.5rem] md:block 
            xl:absolute xl:top-[16.0rem] xl:left-[-1.5rem] xl:block xl:w-[22rem]
            hidden lg:top-[16.5rem] 

          "
          >
            <Image src={heroDown} />
          </div>

          <div
            className="
            md:absolute md:top-[3.3rem] md:right-[-4.5rem] md:block
            xl:absolute xl:top-[3.3rem] xl:right-[-3.7rem] xl:block xl:w-32 xl:h-32
            hidden lg:top-[3.3rem]"
          >
            <Image src={hero1} />
          </div>

          <div
            className="
            md:absolute md:top-[11.5rem] md:left-[-1.9rem] md:block 
            xl:absolute xl:top-[7.5rem] xl:left-[-1.9rem] xl:block 
            hidden lg:top-[11.5rem] 
          "
          >
            <Image src={hero2} />
          </div>

          <div
            className="
            hidden md:block md:w-[16rem] lg:w-[21rem] xl:w-[28rem]"
          >
            <Image src={heroMiddle} />
          </div>

          <div className="md:hidden w-full" style={{ opacity: 0.7 }}>
            <Image src={heroMobile} />
          </div>

          <div
            className="
            md:absolute md:top-[-1.5rem] md:left-[-3.0rem] md:right-[-3.0rem] md:block 
            xl:absolute xl:top-[-2.0rem] xl:left-[-3.5rem] xl:right-[-3.5rem] xl:block xl:w-[35rem]
            hidden"
            style={{ opacity: 0.7 }}
          >
            <Image src={heroUp} />
          </div>

          <div
            className="
            md:absolute md:top-[-3.5rem] md:right-[1.0rem] md:block
            xl:absolute xl:top-[-3.0rem] xl:right-[1.0rem] xl:block
            hidden"
          >
            <Image src={hero4} />
          </div>

          <div
            className="
            md:absolute md:top-[-1.5rem] md:right-[2.0rem] md:block
            xl:absolute xl:top-[-1.7rem] xl:right-[1.8rem] xl:block
            hidden"
          >
            <Image src={hero5} />
          </div>

          <div
            className="
            md:absolute md:top-[-0.8rem] md:left-[12.4rem] md:block
            xl:absolute xl:top-[-0.2rem] xl:left-[24.4rem] xl:block
            hidden"
          >
            <Image src={hero8} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
