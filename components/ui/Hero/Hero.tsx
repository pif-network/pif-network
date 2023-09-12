import Image from 'next/image';

import { Button } from '~/components/ui';
import { ChevronRight } from '~/components/ui/svgs/Icons';

const Hero = () => {
  return (
    <section className="h-screen/85 md:h-screen">
      <div className="h-full flex flex-col items-center">
        <div className="flex-1 items-center flex flex-col justify-center">
          <div className="mb-6 md:mb-12" />

          <Image src="/switch.png" alt="switch" width={149} height={24} />

          <div className="mb-8" />

          <div
            className="font-lora text-primary-900 font-medium text-[42px]
              md:text-[54px] flex flex-col items-center"
          >
            <h1 className="text-[46px] italic">Những insights</h1>
            <div
              className="word-[-8px] leading-none md:leading-14 flex flex-col
                items-center md:-mt-[2px]"
            >
              <h1>mà bạn</h1>
              <h1>đang tìm kiếm</h1>
            </div>

            <Image
              src="/squig.png"
              alt="squig"
              width={264}
              height={36}
              className="relative opacity-10 scale-75 md:scale-100 top-[-115px]
                md:top-[-146px]"
            />
            <Image
              src="/sweat.png"
              alt="sweat"
              width={46}
              height={78}
              className="relative scale-75 md:scale-100 top-[-196px] left-[164px]
                md:top-[-224px] md:left-[168px]"
            />
          </div>

          <div className="-mb-10" />

          <h3
            className="font-manrope text-body-sm md:text-body text-center
              max-w-[364px] md:max-w-[475px] mx-2"
          >
            Trò chuyện, chia sẻ, nâng cao kĩ năng chuyên môn, mở rộng hiểu biết
            và khám phá những insights mới lạ từ các mentors dày dặn kinh nghiệm
            của chúng tôi.
          </h3>

          <div className="mb-10" />

          <div className="flex gap-2">
            <Button variant="outline">
              <h4 className="font-medium">Cảm hứng</h4>
            </Button>
            <Button size="default-with-icon">
              <h4>Trải nghiệm</h4>
              <ChevronRight className="pl-1 fill-white" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;