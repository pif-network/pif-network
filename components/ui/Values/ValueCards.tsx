import ValueCard from './ValueCard'
import type { Card } from './ValueCard'

const ValueCards = ({ card }: { card: Card[] }) => {
  return (
    <>
      <div className="hidden md:flex flex-wrap md:items-center lg:gap-4 justify-between">
        {card.map(item => (
          <ValueCard key={item.id} card={item} />
        ))}
      </div>
      <div className="relative w-full h-full md:hidden">
        <div
          className="w-full h-[880px] relative left-0 right-0"
          style={{
            background: `url(${card[1]?.urlMobile}) no-repeat`,
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute font-lora bottom-[70px] left-[30px] w-[197px]">
            <h5 className="font-semi-bold text-white text-heading pb-1 word-[-8px]">
              {card[1]?.title}
            </h5>
            <p className="text-white font-manrope font-regular text-body-sm">
              {card[1]?.content}
            </p>
          </div>
        </div>
        <div
          className="w-full relative -mt-[180px] h-[880px] -z-10"
          style={{
            background: `url(${card[0]?.urlMobile}) no-repeat`,
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute font-lora top-[200px] right-[30px] w-[212px]">
            <h5 className="font-semi-bold text-primary-900 text-heading pb-1 word-[-8px]">
              {card[0]?.title}
            </h5>
            <p className="text-primary-900 font-manrope font-regular text-body-sm text-right">
              {card[0]?.content}
            </p>
          </div>
        </div>
        <div
          className="w-full -mt-[80px] right-0 h-[880px] -z-20 relative"
          style={{
            background: `url(${card[2]?.urlMobile}) no-repeat`,
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute font-lora bottom-[90px] right-[30px] w-[212px]">
            <h5 className="text-right font-semi-bold text-primary-900 text-heading pb-1 word-[-8px]">
              Đánh giá CV
            </h5>
            <p className="text-primary-900 font-manrope font-regular text-body-sm text-right">
              {card[2]?.content}
            </p>
          </div>
        </div>
        <div
          className="w-full relative -mt-[80px] right-0 h-[880px] -z-30"
          style={{
            background: `url(${card[3]?.urlMobile}) no-repeat`,
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute font-lora top-[50px] left-[30px] w-[230px]">
            <h5 className="font-semi-bold text-white text-heading pb-1 word-[-8px]">
              {card[3]?.title}
            </h5>
            <p className="text-white font-manrope font-regular text-body-sm">
              {card[3]?.content}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default ValueCards
