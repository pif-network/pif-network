import Image from 'next/image';
import { Avatar } from 'antd';
import { ChevronRight } from '../svgs/Icons';
import DoubleQuoteSm from '~/assets/feedback/feedback_double-quote-sm.png';
import DoubleQuoteLg from '~/assets/feedback/feedback_double-quote-lg.png';
import LineLG from '~/assets/feedback/feedback_line-lg.png';
import MenteeAvatar from '~/assets/feedback/feedback_avatar.png';

const Feedback = () => {
  return (
    <div>
      <div className="grid text-black font-lora font-semi-bold md:text-title-sm sm:text-heading-sm md:pb-11 sm:pb-8 justify-items-center sm:word-[-7px] md:word-[-10px]">
        Mentee nói gì về &lt;product_name&gt;?
      </div>
      <div className="flex justify-center">
        <div className="relative bg-gray-50 justify-items-center overflow-hidden rounded-2xl md:h-[426px] md:w-[1068px] sm:w-[314px] sm:h-[126px]">
          <div>
            <Image
              src={DoubleQuoteLg.src}
              className="absolute hidden md:inline-block md:top-[63px] md:left-[54px]"
              alt="Double QuoteLg"
              width={50}
              height={5}
            />
            <Image
              src={DoubleQuoteSm.src}
              className="absolute md:hidden sm:top-[19px] sm:left-[15px]"
              alt="DoubleQuoteSm"
              width={15}
              height={5}
            />

            <div className="grid items-center justify-center absolute md:top-[83px] md:left-[121px] md:w-[830px] sm:top-[24px] sm:left-[36px]">
              <p className="text-black font-lora font-semi-bold md:text-[32px] md:leading-10 md:word-[-8px] sm:word-[-3px] sm:text-[10px] text-left">
                My gave me a lot of valuable advice, especially how to improve
                my portfolio, as well as how to correctly communicate with
                people.
              </p>
              <p className="text-gray-400 font-manrope font-regular text-semi-bold md:text-heading-sm sm:text-[8px] md:word-[0.8px] sm:word-[-0.3px] text-left">
                And something more that I don’t remember
              </p>
            </div>
          </div>

          <Image
            src={LineLG.src}
            className="absolute sm:hidden md:inline-block md:top-[287px] md:left-[88px] sm:top-[85px] sm:left-[26px] "
            alt="Line LG"
            width={900}
            height={5}
          />
          <Image
            src={LineLG.src}
            className="absolute md:hidden md:top-[287px] md:left-[88px] sm:top-[85px] sm:left-[26px]"
            alt="Line LG"
            width={270}
            height={5}
          />

          <div className="flex flex-row justify-between">
            <div>
              <Avatar
                src={MenteeAvatar.src}
                className="absolute hidden md:inline-block md:top-[306px] md:left-[121px] md:w-[64px] md:h-[64px]"
              ></Avatar>
              <Avatar
                src={MenteeAvatar.src}
                className="absolute md:hidden sm:top-[91px] sm:left-[34px] sm:w-[19px] sm:h-[19px]"
              ></Avatar>

              <div className="absolute md:top-[316px] md:left-[195px] sm:top-[92px] sm:left-[55px]">
                <p className="text-primary-900 font-lora font-semi-bold md:text-sub-heading sm:text-[7px] md:word-[-6px] sm:word-[-2px]">
                  Nguyễn Mai Anh
                </p>
                <p className="text-gray-600 font-manrope md:text-caption sm:text-[4px] md:word-[-0.8px] sm:word-[-0.3px]">
                  Student, UEH.
                </p>
              </div>
            </div>

            <div className="inline-flex">
              <ChevronRight
                colour="black"
                className="transform rotate-180 absolute hidden md:inline-block md:left-[840px] md:top-[333px]"
              ></ChevronRight>
              <ChevronRight
                colour="black"
                className="absolute hidden md:inline-block md:left-[884px] md:top-[333px]"
              ></ChevronRight>

              <ChevronRight
                colour="black"
                className="transform rotate-180 absolute sm:w-[6px] md:hidden sm:left-[247px] sm:top-[90px]"
              ></ChevronRight>
              <ChevronRight
                colour="black"
                className="absolute md:hidden sm:w-[6px] sm:left-[260px] sm:top-[90px]"
              ></ChevronRight>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
