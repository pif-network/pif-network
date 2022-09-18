import { ChevronRight } from '../svgs/Icons'
import DoubleQuoteSm from '~/assets/feedback/feedback_double-quote-sm.png'
import DoubleQuoteLg from '~/assets/feedback/feedback_double-quote-lg.png'
import LineLG from '~/assets/feedback/feedback_line-lg.png'


interface feedbackCard {
  onPrevious: () => void
  onNext: () => void
  mainFeedback: string
  subFeedback: string
  name: string
  job: string
  avatar: string
}

const FeedbackCard = ({onPrevious, onNext,  mainFeedback, subFeedback, name, job, avatar }: feedbackCard) => {
  return (
    <>
        <div className="flex justify-center">
          <div className="relative bg-gray-50 justify-items-center overflow-hidden rounded-2xl md:h-[426px] md:w-[1068px] sm:w-[314px] sm:h-[126px]">
            <div>
              <img
                src={DoubleQuoteLg.src}
                className="absolute hidden md:inline-block md:top-[63px] md:left-[54px]"
              />
              <img
                src={DoubleQuoteSm.src}
                className="absolute md:hidden sm:top-[19px] sm:left-[15px]"
              />

              <div className="grid items-center justify-center absolute md:top-[83px] md:left-[121px] md:w-[830px] sm:top-[24px] sm:left-[36px]">
                <p className="text-black font-lora font-semi-bold md:text-[32px] md:leading-10 md:word-[-8px] sm:word-[-3px] sm:text-[10px] text-left mb-16 md:mb-0">
                  {mainFeedback}
                </p>
                <p className="text-gray-400 font-manrope font-regular text-semi-bold md:text-[24px] sm:text-[8px] md:word-[3px] sm:word-[-0.3px] text-left absolute md:static">
                  {subFeedback}
                </p>
              </div>
            </div>

            <img
              src={LineLG.src}
              className="absolute md:top-[287px] md:left-[88px] sm:top-[85px] sm:left-[26px]"
            />

            <div className="flex flex-row justify-between">
              <div>
                <img
                  src={`${avatar}`}
                  className="absolute hidden md:inline-block md:top-[306px] md:left-[121px] md:w-[64px] md:h-[64px]"
                ></img>

                <img
                  src={`${avatar}`}
                  className="absolute md:hidden sm:top-[91px] sm:left-[34px] sm:w-[19px] sm:h-[19px]"
                ></img>

                <div className="absolute md:top-[316px] md:left-[195px] sm:top-[92px] sm:left-[55px]">
                  <p className="text-primary-900 font-lora font-semi-bold md:text-sub-heading sm:text-[7px] md:word-[-6px] sm:word-[-2px]">
                    {name}
                  </p>
                  <p className="text-gray-600 font-manrope md:text-caption sm:text-[4px] md:word-[-0.8px] sm:word-[-0.3px]">
                   {job}
                  </p>
                </div>
              </div>

              <div className="inline-flex">
                <ChevronRight
                  colour="black"
                  className="transform rotate-180 absolute hidden md:inline-block md:left-[840px] md:top-[333px]"
                  onClick={onPrevious}
                ></ChevronRight>
                <ChevronRight
                  colour="black"
                  className="absolute hidden md:inline-block md:left-[884px] md:top-[333px]"
                  onClick={onNext}
                ></ChevronRight>

                <ChevronRight
                  colour="black"
                  className="transform rotate-180 absolute sm:w-[6px] md:hidden sm:left-[247px] sm:top-[90px]"
                  onClick={onPrevious}
                ></ChevronRight>
                <ChevronRight
                  colour="black"
                  className="absolute md:hidden sm:w-[6px] sm:left-[260px] sm:top-[90px]"
                  onClick={onNext}
                ></ChevronRight>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default FeedbackCard
