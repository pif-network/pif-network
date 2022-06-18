import ValueCard from './ValueCard'
import { Card } from './ValueCard'
import SectionTitle from '../SectionTitle'
import valueImg1 from '~/assets/value-card/value-card-1.png'
import valueImg2 from '~/assets/value-card/value-card-2.png'
import valueImg3 from '~/assets/value-card/value-card-3.png'
import valueImg4 from '~/assets/value-card/value-card-4.png'

const VALUES = [
  {
    title: 'Mở rộng kết nối',
    content:
      'Kết nối 1-1 với nhiều mentor có kinh nghiệm  và background phù hợp với nhu cầu của bạn',
    url: `${valueImg1.src}`,
  },
  {
    title: 'Tư vấn lộ trình',
    content:
      'Nhận được tư vấn về lộ trình và cách thức phát triển cơ hội nghề nghiệp trong lĩnh vực công nghệ',
    url:  `${valueImg2.src}`,
  },
  {
    title: 'Review CV/ Resume',
    content:
      'Được hỗ trợ review CV/ Resume cũng như phỏng vấn thử bởi những mentor dày dặn kinh nghiệm',
    url: `${valueImg3.src}`,
  },
  {
    title: 'Chia sẻ kiến thức',
    content:
      'Cùng nhau chia sẻ về phương pháp tự học, rèn luyện kỹ năng và kiến thức trong lĩnh vực mong muốn',
    url:  `${valueImg4.src}`,
  },
] as Card[]

const Value = () => {
  return (
    <div className="lg:px-[170px] m-auto max-w-[1440px]">
      <SectionTitle content='Cách chúng tôi hỗ trợ bạn'/>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {VALUES.map((item, index) => (
          <ValueCard key={index} card={item} />
        ))}
      </div>
    </div>
  )
}
export default Value
