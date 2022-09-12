import FeedbackCard from './feedback_card'
import { useState } from 'react'
import MenteeAvatar from '~/assets/feedback/feedback_avatar.png'


const Feedback = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div>
      <div className="grid text-black font-lora font-semi-bold md:text-title-sm sm:text-heading-sm md:pb-11 sm:pb-8 justify-items-center sm:word-[-7px] md:word-[-10px]">
        Mentee nói gì về &lt;product_name&gt;?
      </div>

      <FeedbackCard
        isActive={activeIndex === 0}
        onNext={() => setActiveIndex(1)}
        onPrevious={() => setActiveIndex(1)}
        mainFeedback="My gave me a lot of valuable advice, especially how to improve
        my portfolio, as well as how to correctly communicate with
        people."
        subFeedback='And something more that I don’t remember'
        name='Nguyễn Mai Anh'
        job='Student, UEH.'
        avatar={`${MenteeAvatar.src}`}
      ></FeedbackCard>

      <FeedbackCard
        isActive={activeIndex === 1}
        onNext={() => setActiveIndex(0)}
        onPrevious={() => setActiveIndex(0)}
        mainFeedback="My gave me a lot of valuable advice, especially how to improve
        my portfolio, as well as how to correctly communicate with
        people."
        subFeedback='And something more that I don’t remember'
        name='Nguyễn Mai Anh'
        job='Student, UEH.'
        avatar={`${MenteeAvatar.src}`}
      ></FeedbackCard>
    </div>
  )
}

export default Feedback
