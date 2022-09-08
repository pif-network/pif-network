import FeedbackCard from './feedback_card'
import { useState } from 'react'

const Feedback = () => {
  const [activeIndex, setActiveIndex] = useState(1)
  return (
    <div>
      <div className="grid text-black font-lora font-semi-bold md:text-title-sm sm:text-heading-sm md:pb-11 sm:pb-8 justify-items-center sm:word-[-7px] md:word-[-10px]">
        Mentee nói gì về &lt;product_name&gt;?
      </div>
      <FeedbackCard
        isActive={activeIndex === 0}
        num={0}
        onShow={() => setActiveIndex(0)}
      ></FeedbackCard>
      <FeedbackCard
        num={1}
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      ></FeedbackCard>
    </div>
  )
}

export default Feedback
