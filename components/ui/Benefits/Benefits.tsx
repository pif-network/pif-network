import s from './Benefits.module.css'

import { useContext, useRef } from 'react'

import { ScrollContext } from '~/lib/scroll/scrollObserver'

const textSectionOpacity = (progress: number, blockNumber: number) => {
  const currentProgress = progress - blockNumber

  if (currentProgress >= 0 && currentProgress < 1) return 1
  return 0.2
}

const Benefits = () => {
  const { scrollY } = useContext(ScrollContext)
  const ref = useRef<HTMLDivElement>(null)

  const numberOfBlock = 3
  let progress = 0

  const { current: currentRef } = ref

  if (currentRef) {
    const { clientHeight, offsetTop } = currentRef
    const screenH = window.innerHeight
    const halfScreenH = screenH / 2
    const percentY =
      Math.min(
        clientHeight + halfScreenH,
        Math.max(-screenH, scrollY - offsetTop) + halfScreenH,
      ) / clientHeight

    progress = Math.min(
      numberOfBlock - 0.5,
      Math.max(0.5, percentY * numberOfBlock),
    )
  }

  return (
    <div ref={ref} className="bg-black text-white">
      <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-10 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-7xl">
        <div>
          {/* First block */}
          <div
            className={s.benefitsText}
            style={{ opacity: textSectionOpacity(progress, 0) }}
          >
            Đội ngũ mentor chuyên nghiệp, dày dặn kinh nghiệm thực chiến
          </div>
          {/* Second block */}
          <span
            className={`${s.benefitsText} inline-block after:content-['_']`}
            style={{ opacity: textSectionOpacity(progress, 1) }}
          >
            sẵn sàng giúp đỡ dù bạn ở bất kì đâu{' '}
          </span>
          {/* Third block */}
          <span
            className={`${s.benefitsText} inline-block `}
            style={{ opacity: textSectionOpacity(progress, 2) }}
          >
            hoàn toàn miễn phí.
          </span>
        </div>
      </div>
    </div>
  )
}

export default Benefits
