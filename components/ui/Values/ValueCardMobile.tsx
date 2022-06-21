import { Card } from './ValueCard'
import valueImgMobile1 from '~/assets/value-card/value-mobile-1.png'
import valueImgMobile2 from '~/assets/value-card/value-mobile-2.png'
import valueImgMobile3 from '~/assets/value-card/value-mobile-3.png'
import valueImgMobile4 from '~/assets/value-card/value-mobile-4.png'
function ValueCardMobile({ card }: { card: Card[] }) {
  return (
    <div className="relative w-full h-full md:hidden">
      <div
        className="w-full h-[880px] relative left-0 right-0"
        style={{
          background: `url(${card[1]?.url2}) no-repeat`,
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute font-lora bottom-[100px] left-[23px] w-[197px]">
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
          background: `url(${card[0]?.url2}) no-repeat`,
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute font-lora top-[250px] right-[30px] w-[212px]">
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
          background: `url(${card[2]?.url2}) no-repeat`,
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute font-lora bottom-[100px] right-[20px] w-[212px]">
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
          background: `url(${card[3]?.url2}) no-repeat`,
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute font-lora top-[90px] left-[23px] w-[230px]">
          <h5 className="font-semi-bold text-white text-heading pb-1 word-[-8px]">
            {card[3]?.title}
          </h5>
          <p className="text-white font-manrope font-regular text-body-sm">
            {card[3]?.content}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ValueCardMobile
