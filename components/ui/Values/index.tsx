import ValueCard from './ValueCard'
import type { Card } from './ValueCard'

import { SectionTitle } from '~/components/ui'

import valueImg1 from '~/assets/value-card/value-card-1.png'
import valueImg2 from '~/assets/value-card/value-card-2.png'
import valueImg3 from '~/assets/value-card/value-card-3.png'
import valueImg4 from '~/assets/value-card/value-card-4.png'
import valueImgMobile1 from '~/assets/value-card/value-mobile-1.png'
import valueImgMobile2 from '~/assets/value-card/value-mobile-2.png'
import valueImgMobile3 from '~/assets/value-card/value-mobile-3.png'
import valueImgMobile4 from '~/assets/value-card/value-mobile-4.png'

const VALUES = [
  {
    id: 1,
    title: 'Mở rộng kết nối',
    content:
      'Kết nối 1-1 với nhiều mentor có kinh nghiệm  và background phù hợp với nhu cầu của bạn',
    url: `${valueImg1.src}`,
    urlMobile: `${valueImgMobile2.src}`,
  },
  {
    id: 2,
    title: 'Tư vấn lộ trình',
    content:
      'Nhận được tư vấn về lộ trình và cách thức phát triển cơ hội nghề nghiệp trong lĩnh vực công nghệ',
    url: `${valueImg2.src}`,
    urlMobile: `${valueImgMobile1.src}`,
  },
  {
    id: 3,
    title: 'Review CV/ Resume',
    content:
      'Được hỗ trợ review CV/ Resume cũng như phỏng vấn thử bởi những mentor dày dặn kinh nghiệm',
    url: `${valueImg3.src}`,
    urlMobile: `${valueImgMobile3.src}`,
  },
  {
    id: 4,
    title: 'Chia sẻ kiến thức',
    content:
      'Cùng nhau chia sẻ về phương pháp tự học, rèn luyện kỹ năng và kiến thức trong lĩnh vực mong muốn',
    url: `${valueImg4.src}`,
    urlMobile: `${valueImgMobile4.src}`,
  },
] as Card[]

const Values = () => {
  return (
    <>
      <section className="hidden md:inline">
        <div className="flex flex-col max-w-[525px] lg:grid lg:grid-cols-[441px_441px] xl:grid-cols-[525px_525px] xl:max-w-6xl lg:gap-x-2 m-auto justify-center">
          <SectionTitle
            content="Cách chúng tôi hỗ trợ bạn"
            className="col-span-2 mb-[20px]"
          />
          {VALUES.map(item => (
            <ValueCard key={item.id} card={item} />
          ))}
        </div>
      </section>

      <section className="inline md:hidden">
        <div className="relative w-full h-full md:hidden">
          <div
            className="w-full h-[880px] relative left-0 right-0"
            style={{
              background: `url(${VALUES[1]?.urlMobile}) no-repeat`,
              backgroundSize: 'cover',
            }}
          >
            <div className="absolute font-lora bottom-[70px] left-[30px] w-[197px]">
              <h5 className="font-semi-bold text-white text-heading pb-1 word-[-8px]">
                {VALUES[1]?.title}
              </h5>
              <p className="text-white font-manrope font-regular text-body-sm">
                {VALUES[1]?.content}
              </p>
            </div>
          </div>
          <div
            className="w-full relative -mt-[180px] h-[880px] -z-10"
            style={{
              background: `url(${VALUES[0]?.urlMobile}) no-repeat`,
              backgroundSize: 'cover',
            }}
          >
            <div className="absolute font-lora top-[200px] right-[30px] w-[212px]">
              <h5 className="font-semi-bold text-primary-900 text-heading pb-1 word-[-8px]">
                {VALUES[0]?.title}
              </h5>
              <p className="text-primary-900 font-manrope font-regular text-body-sm text-right">
                {VALUES[0]?.content}
              </p>
            </div>
          </div>
          <div
            className="w-full -mt-[80px] right-0 h-[880px] -z-20 relative"
            style={{
              background: `url(${VALUES[2]?.urlMobile}) no-repeat`,
              backgroundSize: 'cover',
            }}
          >
            <div className="absolute font-lora bottom-[90px] right-[30px] w-[212px]">
              <h5 className="text-right font-semi-bold text-primary-900 text-heading pb-1 word-[-8px]">
                Đánh giá CV
              </h5>
              <p className="text-primary-900 font-manrope font-regular text-body-sm text-right">
                {VALUES[2]?.content}
              </p>
            </div>
          </div>
          <div
            className="w-full relative -mt-[80px] right-0 h-[880px] -z-30"
            style={{
              background: `url(${VALUES[3]?.urlMobile}) no-repeat`,
              backgroundSize: 'cover',
            }}
          >
            <div className="absolute font-lora top-[50px] left-[30px] w-[230px]">
              <h5 className="font-semi-bold text-white text-heading pb-1 word-[-8px]">
                {VALUES[3]?.title}
              </h5>
              <p className="text-white font-manrope font-regular text-body-sm">
                {VALUES[3]?.content}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Values
