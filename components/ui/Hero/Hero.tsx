import Image from 'next/image';

import { Button } from '~/components/ui';
import { ChevronRight } from '~/components/ui/svgs/Icons';

const Hero = () => {
  return (
    <section className="h-screen">
      <div className="h-full flex flex-col items-center">
        <div className="flex-1 items-center flex flex-col justify-center">
          <div className="mb-12" />

          <Image src="/switch.png" alt="switch" width={149} height={24} />

          <div className="mb-8" />

          <div className="font-lora text-primary-900 font-medium text-[54px] flex flex-col items-center">
            <h1 className="italic">Những insights</h1>
            <div className="word-[-8px] leading-14 flex flex-col items-center -mt-1">
              <h1>mà bạn</h1>
              <h1>đang tìm kiếm</h1>
            </div>

            <Image
              src="/squig.png"
              alt="squig"
              width={264}
              height={36}
              className="relative opacity-10 top-[-146px]"
            />
            <Image
              src="/sweat.png"
              alt="sweat"
              width={46}
              height={78}
              className="relative top-[-230px] left-[198px]"
            />
          </div>

          <div className="-mb-10" />

          <h3 className="font-manrope text-body text-center w-[475px]">
            Trò chuyện, chia sẻ, nâng cao kĩ năng chuyên môn, mở rộng hiểu biết
            và khám phá những insights mới lạ từ các mentor dày dặn kinh nghiệm
            của chúng tôi.
          </h3>

          <div className="mb-10" />

          <Button size="default-with-icon">
            <h4>Đăng nhập</h4>
            <ChevronRight className="pl-1 fill-white" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
