import ValueCard from './ValueCard'
import { Card } from './ValueCard'
import SectionTitle from '../SectionTitle'
import valueImg1 from '~/assets/value-card/value-card-1.png'
import valueImg2 from '~/assets/value-card/value-card-2.png'
import valueImg3 from '~/assets/value-card/value-card-3.png'
import valueImg4 from '~/assets/value-card/value-card-4.png'
import ValueCardMobile from './ValueCardMobile'

const VALUES = [
  {
    id: 1,
    title: 'Mở rộng kết nối',
    content:
      'Kết nối 1-1 với nhiều mentor có kinh nghiệm  và background phù hợp với nhu cầu của bạn',
    url: `${valueImg1.src}`,
  },
  {
    id: 2,
    title: 'Tư vấn lộ trình',
    content:
      'Nhận được tư vấn về lộ trình và cách thức phát triển cơ hội nghề nghiệp trong lĩnh vực công nghệ',
    url: `${valueImg2.src}`,
  },
  {
    id: 3,
    title: 'Review CV/ Resume',
    content:
      'Được hỗ trợ review CV/ Resume cũng như phỏng vấn thử bởi những mentor dày dặn kinh nghiệm',
    url: `${valueImg3.src}`,
  },
  {
    id: 4,
    title: 'Chia sẻ kiến thức',
    content:
      'Cùng nhau chia sẻ về phương pháp tự học, rèn luyện kỹ năng và kiến thức trong lĩnh vực mong muốn',
    url: `${valueImg4.src}`,
  },
] as Card[]

const Value = () => {
  return (
    <div className="lg:px-[170px] m-auto max-w-[1440px]">
      <SectionTitle content="Cách chúng tôi hỗ trợ bạn" className='hidden sm:block' />
      <div className="hidden md:flex md:flex-wrap md:items-center md:justify-center lg:gap-4">
        {VALUES.map((item, index) => (
          <ValueCard key={item.id} card={item} />
        ))}
      </div>
        <ValueCardMobile />
    </div>
  )
}
export default Value
