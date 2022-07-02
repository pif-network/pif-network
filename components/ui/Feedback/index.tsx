import { Avatar } from 'antd'
import { ChevronRight, CopyrightLine, FacebookFill } from '../svgs/Icons'
import DoubleQuote from '../svgs/Icons/DoubleQuote'

const Feedback = () => {
  return (
    <div>
      <div className="md:text-black font-lora font-semi-bold md:text-title-sm pb-11 sm:pb-8 sm:text-heading-sm sm:text-primary-900 grid justify-items-center">
        Mentee nói gì về &lt;product_name&gt;?
      </div>
      <div className="flex justify-center md:px-28 sm:p-0">
        <div className="block bg-gray-100 justify-items-center md:w-3/4 sm:w-11/12 rounded-2xl">
          <div className="md:pt-16 md:pl-14 md:pr-20 md:pb-14 sm:pt-8 sm:pl-7 sm:pr-10 sm:pb-7">
            <div className="relative h-full">
              <DoubleQuote
                colour="black"
                className="absolute md:-top-5 md:-left-3 md:w-12 md:h-8 sm:w-4 sm:h-3 sm:-top-1 sm:-left-2"
              ></DoubleQuote>
              <div className="grid justify-center items-center md:ml-9 sm:ml-2 ">
                <p className="text-black font-lora font-semi-bold md:text-sub-heading sm:text-[10px] text-left">
                  My gave me a lot of valuable advice, especially how to improve
                  my portfolio, as well as how to correctly communicate with
                  people.
                </p>
                <p className="text-gray-400 font-manrope font-regular md:text-body sm:text-[8px] text-left">
                  And something more that I don’t remember
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-between border-t border-black md:pl-8 md:pr-20 sm:pl-4 sm:pr-10">
              <div className="inline-flex md:pt-5 sm:pt-2">
                <Avatar src="./images/avatar_mentee.png"></Avatar>
                <div className="pl-2">
                  <p className="text-back font-lora font-semi-bold md:text-body sm:text-[8px]">
                    Nguyễn Mai Anh
                  </p>
                  <p className="text-gray-600 font-manrope md:text-caption sm:text-[6px]">
                    Student, UEH.
                  </p>
                </div>
              </div>
              <div className="inline-flex md:pt-5 sm:pt-2">
                <ChevronRight
                  colour="black"
                  className="transform rotate-180"
                ></ChevronRight>
                <ChevronRight colour="black"></ChevronRight>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback
