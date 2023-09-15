import { useContext, useRef } from 'react';

import { ScrollContext } from '~/lib/scroll/scrollObserver';

const textSectionOpacity = (progress: number, blockNumber: number) => {
  const currentProgress = progress - blockNumber;

  if (currentProgress >= 0 && currentProgress < 1) return 1;
  return 0.2;
};

const Benefits = () => {
  const { scrollY } = useContext(ScrollContext);
  const ref = useRef<HTMLDivElement>(null);

  const numberOfBlocks = 3;
  let progress = 0;

  const { current: currentRef } = ref;

  if (currentRef) {
    const { clientHeight, offsetTop } = currentRef;
    const screenH = window.innerHeight;
    const halfScreenH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfScreenH,
        Math.max(-screenH, scrollY - offsetTop) + halfScreenH
      ) / clientHeight;

    progress = Math.min(
      numberOfBlocks - 0.5,
      Math.max(0.5, percentY * numberOfBlocks)
    );
  }

  const shouldTransform = scrollY > 604;

  return (
    <div
      ref={ref}
      className={`font-lora font-semi-bold text-heading md:text-title-sm
        lg:text-title mx-1 md:mx-4 rounded-3xl md:rounded-[28px]
        transition-colors duration-200
        ${
          shouldTransform
            ? 'bg-primary-900 text-gray-50'
            : 'text-primary-900 border border-primary-900/50'
        }`}
    >
      <div
        className="min-h-[400px] md:min-h-max lg:min-h-min max-w-5xl mx-auto
          px-6 lg:px-12 py-24 md:py-28 lg:py-36 flex-centre flex-col"
      >
        <div>
          {/* First block */}
          <div
            className="transition-opacity duration-[400]"
            style={{ opacity: textSectionOpacity(progress, 0) }}
          >
            Đội ngũ mentor chuyên nghiệp, dày dặn kinh nghiệm thực chiến
          </div>
          {/* Second block */}
          <span
            className="transition-opacity duration-[400] inline-block after:content-['_']"
            style={{ opacity: textSectionOpacity(progress, 1) }}
          >
            sẵn sàng giúp đỡ dù bạn ở bất kì đâu
          </span>
          {/* Third block */}
          <span
            className="transition-opacity duration-[400] inline-block"
            style={{ opacity: textSectionOpacity(progress, 2) }}
          >
            hoàn toàn miễn phí.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
