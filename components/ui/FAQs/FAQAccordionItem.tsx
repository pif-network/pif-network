import { useRef, useState } from 'react'

import { ChevronRight } from '../svgs/Icons'

interface Props {
  FAQ: { q: string; a: string }
  idx: number
}

const FAQAccordionItem = ({ FAQ, idx }: Props) => {
  const [isAnswerShow, setIsAnswerShow] = useState(false)
  const [answerH, setAnswerH] = useState('0px')
  const answerRef = useRef<HTMLDivElement>(null!)

  const { current: currentAnswerRef } = answerRef

  const handleOpenAnswer = () => {
    const { childNodes } = currentAnswerRef
    const answerDiv = childNodes[0] as HTMLDivElement

    if (currentAnswerRef) {
      const { offsetHeight: currentAnswerH } = answerDiv
      setIsAnswerShow(!isAnswerShow)
      setAnswerH(`${currentAnswerH ?? +20}px`)
    }
  }

  const questionTextColour = isAnswerShow ? 'text-primary-900' : 'text-gray-700'

  return (
    <div
      className="space-y-3 mt-4 overflow-hidden select-none border-b border-b-gray-200/70"
      onClick={handleOpenAnswer}
      id={idx.toString()}
    >
      {/* Question */}
      <h3
        className={`cursor-pointer pb-5 flex items-center justify-between ${questionTextColour} font-lora font-medium word-[-0.25rem] text-heading-sm`}
      >
        {FAQ.q}
        <div className="pl-5 ">
          {isAnswerShow ? (
            <div className="rotate-90 ease-in-out duration-300">
              <ChevronRight colour="gray" />
            </div>
          ) : (
            <div className="ease-in-out duration-300">
              <ChevronRight colour="gray" />
            </div>
          )}
        </div>
      </h3>

      {/* Answer */}
      <div
        ref={answerRef}
        className="duration-300"
        style={isAnswerShow ? { height: answerH } : { height: '0px' }}
      >
        <p className="text-gray-600 font-manrope font-regular text-body pr-5 pb-3">
          {FAQ.a}
        </p>
      </div>
    </div>
  )
}

export default FAQAccordionItem
