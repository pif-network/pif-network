import FeedbackCard from './FeedbackCard'
import { useState } from 'react'
import MenteeAvatar from '~/assets/feedback/feedback_avatar.png'

const FEEDBACKS = [
  {
    id: 0,
    mainFeedback: "My gave me a lot of valuable advice, especially how to improve my portfolio, as well as how to correctly communicate with people. 1",
    subFeedback: 'And something more that I don’t remember',
    name: 'Nguyễn Mai Anh',
    job:'Student, UEH.',
    avatar:`${MenteeAvatar.src}`,
  }
]

const Feedback = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const handlePrevious= (i:number) => {
    if (i==0) {
      setActiveIndex(0);
    }
    else {
      setActiveIndex(i-1);
    }
  }

  const handeNext = (i:number) => {
    if (i==FEEDBACKS.length-1)
    {
      setActiveIndex(FEEDBACKS.length-1);
    }
    else 
    {
      setActiveIndex(i+1);
    }
  }

  return (
    <div>
      <div className="grid text-black font-lora font-semi-bold md:text-title-sm sm:text-heading-sm md:pb-11 sm:pb-8 justify-items-center sm:word-[-7px] md:word-[-10px]">
        Mentee nói gì về &lt;product_name&gt;?
      </div>
      
      <div className='md:w-[1068px] md:mx-[186px] sm:w-[314px] sm:mx-[30px] overflow-x-scroll no-scrollbar'>
      <div className="flex" 
      style={{transform: `translateX(-${activeIndex * 100}%)`, transitionDuration: "2s",}}
      >
        <div className="flex justify-center">
          <FeedbackCard
        onNext={() => setActiveIndex(1)}
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

        <div>
        <FeedbackCard
        onNext={() => setActiveIndex(2)}
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

        <div>
        <FeedbackCard
        onNext={() => setActiveIndex(2)}
        onPrevious={() => setActiveIndex(1)}
        mainFeedback="My gave me a lot of valuable advice, especially how to improve
        my portfolio, as well as how to correctly communicate with
        people."
        subFeedback='And something more that I don’t remember'
        name='Nguyễn Mai Anh'
        job='Student, UEH.'
        avatar={`${MenteeAvatar.src}`}
      ></FeedbackCard>
        </div>
        </div>
      
      </div>
      
      
    </div>
  )
}

export default Feedback
