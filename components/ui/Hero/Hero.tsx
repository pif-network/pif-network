import Image from 'next/image'
import { useContext, useRef } from 'react'
import { SearchIcon } from '@heroicons/react/outline'
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
import { RightOutlined } from '@ant-design/icons'
const Hero = () => {
  return (
    <div className="flex md:flex-row flex-col py-32 px-24 bg-white">
      <div className="flex flex-col basis-full md:basis-1/2 order-2 md:order-1">
        <div className="font-lora font-semi-bold word-[-0.3rem] text-title-sm lg:word-[-1rem]  md:text-title-sm lg:text-title">
          <div className="flex flex-col items-center md:items-start">
            <div>Sự giúp đỡ</div>
            <div>mà bạn</div>
            <div className="flex flex-row ">
              đang{' '}
              <span className="flex flex-row items-center ml-3 font-medium border-2 border-dashed border-black rounded">
                <div className="relative font-lora font-medium italic mx-1 before:absolute before:bg-black before:h-1 before:left-0 before:right-0 sm:before:bottom-1 md:before:bottom-2">
                  tìm kiếm
                </div>
                <SearchIcon className="ml-1 w-8 h-8 md:ml-2 md:w-12 md:h-12" />
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-manrope leading-7 text-[14px] mt-4 text-primary-900 items-center md:mt-16 md:items-start md:text-[21px] ">
          <div>Trò chuyện, chia sẻ, nâng cao kĩ năng chuyên</div>
          {/* <br /> */}
          <div>môn, mở rộng hiểu biết và khám phá những</div>
          {/* <br /> */}
          <div>insights mới lạ từ các mentor dày dặn kinh nghiệm</div>
          {/* <br /> */}
          <div>của chúng tôi.</div>
        </div>

        <div className="flex flex-row mt-8 gap-3">
          <Button
            variant="contained"
            className="text-body font-lora px-8 py-2 text-[16px]"
          >
            Đặt lịch hẹn ngay
          </Button>
          <Button
            variant="outline"
            className="text-body  px-8 py-2 pt-2 font-manrope font-semi-bold"
          >
            <div className="flex gap-2 items-center">
              <div>Về SheCodes</div>
              <RightOutlined className="w-4 h-4" />
            </div>
          </Button>
        </div>
      </div>

      <div className="flex flex-col basis-full md:basis-1/2 justify-center items-center mb-16 order-1 md:order-2">
        <div className="flex justify-center items-center relative ">
          <div className="md:absolute md:top-[18.5rem] md:right-[3.5rem] md:block hidden">
            <Image src={hero7} />
          </div>

          <div className="md:absolute md:top-[15.5rem] md:right-[4.5rem] md:block hidden">
            <Image src={hero3} />
          </div>

          <div className="md:absolute md:top-[-0.3rem] md:left-[-3.0rem] md:block hidden">
            <Image src={hero6} />
          </div>

          <div className="md:absolute md:top-[16.5rem] md:left-[-1.5rem] md:block hidden">
            <Image src={heroDown} />
          </div>

          <div className="md:absolute md:top-[3.3rem] md:right-[-4.5rem] md:block hidden">
            <Image src={hero1} />
          </div>

          <div className="md:absolute md:top-[11.5rem] md:left-[-1.9rem] md:block hidden">
            <Image src={hero2} />
          </div>

          <div className="hidden md:block">
            <Image src={heroMiddle} />
          </div>

          <div
            className="md:absolute md:top-[-1.5rem] md:left-[-3.0rem] md:right-[-3.0rem] sm:w-full"
            style={{ opacity: 0.7 }}
          >
            <Image src={heroUp} />
          </div>

          <div className="md:absolute md:top-[-2.4rem] md:right-[1.0rem] md:block hidden">
            <Image src={hero4} />
          </div>

          <div className="md:absolute md:top-[-1.5rem] md:right-[2.0rem] md:block hidden">
            <Image src={hero5} />
          </div>

          <div className="md:absolute md:top-[0.4rem] md:right-[0.8rem] md:block hidden">
            <Image src={hero8} />
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col basis-1/2 justify-center items-center">
        <Image src={heroUp} />
      </div> */}
    </div>
  )
}

export default Hero
