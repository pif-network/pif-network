import ValueCard from './ValueCard'
import { Card } from './ValueCard'

const VALUES = [
  {
    title: 'Mở rộng kết nối',
    content:
      'Kết nối 1-1 với nhiều mentor có kinh nghiệm  và background phù hợp với nhu cầu của bạn',
    url: '/images/value-card-1.png',
  },
  {
    title: 'Tư vấn lộ trình',
    content:
      'Nhận được tư vấn về lộ trình và cách thức phát triển cơ hội nghề nghiệp trong lĩnh vực công nghệ',
    url: '/images/value-card-2.png',
  },
  {
    title: 'Review CV/ Resume',
    content:
      'Được hỗ trợ review CV/ Resume cũng như phỏng vấn thử bởi những mentor dày dặn kinh nghiệm',
    url: '/images/value-card-3.png',
  },
  {
    title: 'Chia sẻ kiến thức',
    content:
      'Cùng nhau chia sẻ về phương pháp tự học, rèn luyện kỹ năng và kiến thức trong lĩnh vực mong muốn',
    url: '/images/value-card-4.png',
  },
] as Card[]

const ValueSection = () => {
  return (
    <div className="lg:px-[170px] m-auto max-w-[1440px]">
      <h3 className="font-lora text-title-sm font-semi-bold w-full">
        Cách chúng tôi hỗ trợ bạn
      </h3>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {VALUES.map((item, index) => (
          <ValueCard key={index} Card={item} />
        ))}
      </div>
    </div>
  )
}
export default ValueSection
