import valueImgMobile1 from '~/assets/value-card/value-mobile-1.png'
import valueImgMobile2 from '~/assets/value-card/value-mobile-2.png'
import valueImgMobile3 from '~/assets/value-card/value-mobile-3.png'
import valueImgMobile4 from '~/assets/value-card/value-mobile-4.png'

function ValueCardMobile() {
  return (
    <div className="relative w-full h-full md:hidden">
      <div
        className="w-full h-[880px] relative left-0 right-0"
        style={{
          background: `url(${valueImgMobile1.src}) no-repeat`,
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute font-lora bottom-[100px] left-[23px] w-[197px]">
          <h5 className="font-semi-bold text-white text-heading pb-1 word-[-8px]">
            Tư vấn lộ trình
          </h5>
          <p className="text-white font-manrope font-regular text-body-sm">
            Nhận được tư vấn về lộ trình và cách thức phát triển cơ hội nghề
            nghiệp trong lĩnh vực công nghệ
          </p>
        </div>
      </div>
      <div
        className="w-full relative -mt-[180px] h-[880px] -z-10"
        style={{
          background: `url(${valueImgMobile2.src}) no-repeat`,
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute font-lora top-[250px] right-[30px] w-[212px]">
          <h5 className="font-semi-bold text-primary-900 text-heading pb-1 word-[-8px]">
            Mở rộng kết nối
          </h5>
          <p className="text-primary-900 font-manrope font-regular text-body-sm text-right">
            Kết nối 1-1 với nhiều mentor có kinh nghiệm và background phù hợp
            với nhu cầu của bạn
          </p>
        </div>
      </div>
      <div
        className="w-full -mt-[80px] right-0 h-[880px] -z-20 relative"
        style={{
          background: `url(${valueImgMobile3.src}) no-repeat`,
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute font-lora bottom-[100px] right-[20px] w-[212px]">
          <h5 className="text-right font-semi-bold text-primary-900 text-heading pb-1 word-[-8px]">
            Đánh giá CV
          </h5>
          <p className="text-primary-900 font-manrope font-regular text-body-sm text-right">
            Được hỗ trợ review CV/Resume cũng như phỏng vấn bởi những mentor dày
            dặn kinh nghiệm
          </p>
        </div>
      </div>
      <div
        className="w-full relative -mt-[80px] right-0 h-[880px] -z-30"
        style={{
          background: `url(${valueImgMobile4.src}) no-repeat`,
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute font-lora top-[90px] left-[23px] w-[230px]">
          <h5 className="font-semi-bold text-white text-heading pb-1 word-[-8px]">
            Chia sẻ kiến thức
          </h5>
          <p className="text-white font-manrope font-regular text-body-sm">
            Cùng nhau chia sẻ về phương pháp tự học, rèn luyện kĩ năng và kiến
            thức trong lĩnh vực mong muốn
          </p>
        </div>
      </div>
    </div>
  )
}

export default ValueCardMobile
