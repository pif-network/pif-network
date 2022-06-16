import Image from 'next/image'
import { useContext, useRef } from 'react'
import { SearchIcon } from '@heroicons/react/outline'
import heroMiddle from '../../../assets/Header Images/heroMiddle.png'
import heroUp from '../../../assets/Header Images/heroUp.png'
import heroDown from '../../../assets/Header Images/heroDown.png'
import Vector from '../../../assets/Header Images/Vector.png'
import Vector1 from '../../../assets/Header Images/Vector1.png'
import Group from '../../../assets/Header Images/Group.png'
import Group1 from '../../../assets/Header Images/Group1.png'
import Group2 from '../../../assets/Header Images/Group2.png'
import Group3 from '../../../assets/Header Images/Group3.png'
import Group4 from '../../../assets/Header Images/Group4.png'
import Group5 from '../../../assets/Header Images/Group5.png'
import Button from '../../../components/ui/Button'
import { RightOutlined } from '@ant-design/icons'
const Hero = () => {
  return (
    <div className="flex flex-row py-32 px-24 bg-[#F2F2F2]">
      <div className="flex flex-col basis-1/2">
        <div className="font-lora font-semi-bold word-[-0.2rem] lg:word-[-1rem] text-heading md:text-title-sm lg:text-title">
          <div className="flex flex-col">
            <div>Sự giúp đỡ</div>
            <div>mà bạn</div>
            <div className="flex flex-row ">
              đang{' '}
              <span className="flex flex-row items-center ml-3 font-[500] border-2 border-dashed border-black rounded ">
                <div className="relative font-lora font-medium italic before:absolute before:bg-[#120227] before:h-1 before:left-0 before:right-0 before:bottom-2">
                  tìm kiếm
                </div>
                <SearchIcon className="ml-2 w-12 h-12" />
              </span>
            </div>
          </div>
        </div>
        <div className="font-manrope leading-7 text-[21px] mt-16 text-[#120227]">
          Trò chuyện, chia sẻ, nâng cao kĩ năng chuyên
          <br />
          môn, mở rộng hiểu biết và khám phá những
          <br />
          insights mới lạ từ các mentor dày dặn kinh nghiệm
          <br />
          của chúng tôi.
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
            className="text-body  px-8 py-2 pt-2 font-manrope font-[600]"
          >
            <div className="flex gap-2 items-center">
              <div>Về SheCodes</div>
              <RightOutlined className="w-4 h-4" />
            </div>
          </Button>
        </div>
      </div>

      <div className="flex flex-col basis-1/2 justify-center items-center">
        <div className="flex justify-center items-center relative ">
          <div className="absolute top-[18.5rem] right-[3.5rem]">
            <Image src={Vector} />
          </div>

          <div className="absolute top-[15.5rem] right-[4.5rem]">
            <Image src={Group3} />
          </div>

          <div className="absolute top-[-0.3rem] left-[-3.0rem]">
            <Image src={Group} />
          </div>

          <div className="absolute top-[16.5rem] left-[-1.5rem]">
            <Image src={heroDown} />
          </div>

          <div className="absolute top-[3.3rem] right-[-4.5rem]">
            <Image src={Group1} />
          </div>

          <div className="absolute top-[11.5rem] left-[-1.9rem]">
            <Image src={Group2} />
          </div>

          <Image src={heroMiddle} />

          <div
            className="absolute top-[-1.5rem] left-[-3.0rem] right-[-3.0rem]"
            style={{ opacity: 0.7 }}
          >
            <Image src={heroUp} />
          </div>

          <div className="absolute top-[-2.4rem] right-[1.0rem]">
            <Image src={Group4} />
          </div>

          <div className="absolute top-[-1.5rem] right-[2.0rem]">
            <Image src={Group5} />
          </div>

          <div className="absolute top-[0.4rem] right-[0.8rem]">
            <Image src={Vector1} />
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
