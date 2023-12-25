'use client';

import Image from 'next/image';

import talk from '~/public/talk.png';
import {
  SnapTileBackground,
  SnapTile,
  SnapTileWrapper,
  SnapTileContent,
} from '~/components/ui/snap-tile';
import { Link, WordBlock } from '~/components/ui';

import { ArrowRightIcon } from '@radix-ui/react-icons';

const BrandValueContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
      {children}
    </div>
  );
};

const BrandValueBackground = () => {
  return (
    <div className="sticky top-0 grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
      <div className="m-2 bg-primary-900 h-[30vh] lg:h-auto rounded-2xl" />
      <div className="bg-white h-[70vh] lg:min-h-screen" />
    </div>
  );
};

const BrandValueDescription = ({
  children,
  currentTileProgress,
}: {
  children: React.ReactNode;
  currentTileProgress: number;
}) => {
  let translateY = Math.max(0, 50 - currentTileProgress * 50);
  if (currentTileProgress > 0.85) {
    translateY = Math.max(-50, -(currentTileProgress - 0.85) * 2 * 50);
  }

  return (
    <div
      className="h-[30vh] lg:h-auto flex-centre flex-col text-heading gap-2"
      style={{
        transform: `translateY(${translateY}px)`,
      }}
    >
      {children}
    </div>
  );
};

const BrandValueIllustration = ({
  children,
  currentTileProgress,
}: {
  children: React.ReactNode;
  currentTileProgress: number;
}) => {
  const translateY = Math.max(-50, -(currentTileProgress - 0.5) * 50);

  return (
    <div
      className="h-screen flex flex-1 lg:items-center justify-center"
      style={{
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div className="w-full max-w-md pt-10 lg:pt-0 px-10 md:px-0">
        {children}
      </div>
    </div>
  );
};

const ValueHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="font-lora font-bold text-white text-center text-[18px] w-[300px]">
      {children}
    </h3>
  );
};

const ValueDescription = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-white text-[13px] font-manrope w-2/3 text-center leading-[initial]">
      {children}
    </p>
  );
};

export const BrandExplained = () => {
  return (
    <SnapTileWrapper numberOfTiles={3}>
      <SnapTileBackground>
        <BrandValueBackground />
      </SnapTileBackground>
      <SnapTileContent>
        <SnapTile
          tileNumber={0}
          render={progress => {
            return (
              <BrandValueContainer>
                <BrandValueDescription currentTileProgress={progress}>
                  <ValueHeading>Giá trị của sự trò chuyện</ValueHeading>
                  <ValueDescription>
                    Lúc ban đầu, không phải tất cả seniors đều là mentor giỏi,
                    và cũng không phải tất cả mentees đều là những người biết
                    lắng nghe.
                  </ValueDescription>
                  <div className="mb-2" />
                  <Link
                    href="/"
                    className="font-manrope font-regular italic text-gray-200 hover:text-white text-body-sm h flex-centre gap-1"
                  >
                    <ArrowRightIcon />
                    Our culture
                  </Link>
                </BrandValueDescription>
                <BrandValueIllustration currentTileProgress={progress}>
                  <Image
                    className="max-w-sm"
                    src={talk}
                    alt="Talking at PIF."
                    sizes="(max-width: 500px) 100vw, 50vw"
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                    width={300}
                    height={400}
                  />
                </BrandValueIllustration>
              </BrandValueContainer>
            );
          }}
        />
        <SnapTile
          tileNumber={1}
          render={progress => {
            return (
              <BrandValueContainer>
                <BrandValueDescription currentTileProgress={progress}>
                  <ValueHeading>&ldquo;Certified journey&rdquo;</ValueHeading>
                  <ValueDescription>
                    Trò chuyện cực kỳ có ích để chia sẻ và kết nối, nhưng đôi
                    khi thứ thực sự hữu dụng với bạn sẽ phải chi tiết hơn như
                    thế. <WordBlock bold>PIF Connect</WordBlock>,{' '}
                    <WordBlock bold>PIF Dev Day</WordBlock>, và{' '}
                    <WordBlock bold>PIF Blog</WordBlock> của chúng tôi là những
                    công cụ hữu dụng nhất cho hành trình của bạn.
                  </ValueDescription>
                  <div className="mb-2" />
                  <Link
                    href="/"
                    className="font-manrope font-regular italic text-gray-200 hover:text-white text-body-sm h flex-centre gap-1"
                  >
                    <ArrowRightIcon />
                    Our ecosystem
                  </Link>
                </BrandValueDescription>
                <BrandValueIllustration currentTileProgress={progress}>
                  <Image
                    className="max-w-sm"
                    src={talk}
                    alt="Talking at PIF."
                    sizes="(max-width: 500px) 100vw, 50vw"
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                    width={300}
                    height={400}
                  />
                </BrandValueIllustration>
              </BrandValueContainer>
            );
          }}
        />
        <SnapTile
          tileNumber={2}
          render={progress => {
            return (
              <BrandValueContainer>
                <BrandValueDescription currentTileProgress={progress}>
                  <ValueHeading>Your comfort area</ValueHeading>
                  <ValueDescription>
                    Toàn bộ <WordBlock bold>PIF Network</WordBlock>, đặc biệt là{' '}
                    <WordBlock bold>PIF Connect</WordBlock> là responsive
                    sandbox của bạn. Viết blog, phỏng vấn thử, interships, và
                    thậm chí là cơ hội việc làm, tất cả đều đang cách bạn một
                    lần click chuột và nhiều lần nỗ lực.
                  </ValueDescription>
                  <div className="mb-2" />
                  <Link
                    href="/"
                    className="font-manrope font-regular italic text-gray-200 hover:text-white text-body-sm h flex-centre gap-1"
                  >
                    <ArrowRightIcon />
                    Start now!
                  </Link>
                </BrandValueDescription>
                <BrandValueIllustration currentTileProgress={progress}>
                  <Image
                    className="max-w-sm"
                    src={talk}
                    alt="Talking at PIF."
                    sizes="(max-width: 500px) 100vw, 50vw"
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                    width={300}
                    height={400}
                  />
                </BrandValueIllustration>
              </BrandValueContainer>
            );
          }}
        />
      </SnapTileContent>
    </SnapTileWrapper>
  );
};
