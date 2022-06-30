import { Avatar, Divider } from 'antd'
import { ChevronRight, CopyrightLine, FacebookFill } from '../svgs/Icons'
import ChevronLeft from '../svgs/Icons/ChevronLeft'
import DoubleQuote from '../svgs/Icons/DoubleQuote'

const Feedback = () => {
  return (
    <div>
      <div className="text-black font-lora font-semi-bold text-title-sm grid justify-items-center">
        Mentee nói gì về &lt;product_name&gt;?
      </div>
      <div className="flex justify-center px-28 pt-11">
        <div className="block bg-gray-100 justify-items-center w-3/4 rounded-2xl">
          <div className="pt-16 pl-14 pr-20 pb-14">
            <div className="relative h-32">
              <DoubleQuote
                colour="black"
                className="absolute -top-5 -left-3 w-12 h-8"
              ></DoubleQuote>
              <div className="absolute grid justify-center items-center ml-9">
                <p className="text-black font-lora font-semi-bold text-sub-heading text-left">
                  My gave me a lot of valuable advice, especially how to improve
                  my portfolio, as well as how to correctly communicate with
                  people.
                </p>
                <p className="text-gray-400 font-manrope font-regular text-body text-left pb-10">
                  And something more that I don’t remember
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-between border-t border-black pl-8 pr-20">
              <div className="inline-flex pt-5">
                <Avatar size={44} src="./images/avatar_mentee.png"></Avatar>
                <div className="pl-2">
                  <p className="text-back font-lora font-semi-bold text-body">
                    Nguyễn Mai Anh
                  </p>
                  <p className="text-gray-600 font-manrope text-caption">
                    Student, UEH.
                  </p>
                </div>
              </div>
              <div className="inline-flex pt-5">
                <ChevronLeft colour="black"></ChevronLeft>
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
