'use client';

import Image from 'next/image';
import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

import talk from '~/public/talk.png';
import {
  SnapTileBackground,
  SnapTile,
  SnapTileWrapper,
  SnapTileContent,
} from './snap-tile';

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
      <div className="bg-black h-[30vh] lg:h-auto" />
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
  let translateY = Math.max(0, 50 - currentTileProgress * 3 * 15);
  if (currentTileProgress > 0.85) {
    translateY = Math.max(-50, -(currentTileProgress - 0.85) * 2 * 50);
  }

  return (
    <div
      className="h-[30vh] lg:h-auto flex-centre flex-col text-heading"
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
  let translateY = Math.max(-50, -(currentTileProgress - 0.5) * 2 * 50);

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

const BrandExplained = () => {
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
                  <h2 className="font-lora font-bold text-white text-center text-[18px] w-[300px]">
                    Giá trị của sự{' '}
                    <span className="inline-block">trò chuyện.</span>
                  </h2>
                </BrandValueDescription>
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
                  <h2 className="font-lora font-bold text-white text-center text-[18px] w-[300px]">
                    Giá trị của sự{' '}
                    <span className="inline-block">trò chuyện.</span>
                  </h2>
                </BrandValueDescription>
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
                  <h2 className="font-lora font-bold text-white text-center text-[18px] w-[300px]">
                    Giá trị của sự{' '}
                    <span className="inline-block">trò chuyện.</span>
                  </h2>
                </BrandValueDescription>
              </BrandValueContainer>
            );
          }}
        />
      </SnapTileContent>
    </SnapTileWrapper>
  );
};

const BrandExplainedd = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });
  const imgTransformX = useTransform(scrollYProgress, [0.3, 1], [0, -300]);
  const txtTransformY = useTransform(scrollYProgress, [0.3, 1], [100, 0]);
  const txtTransformX = useTransform(scrollYProgress, [0.3, 1], [0, 80]);

  if (ref.current) {
    console.log(ref.current.getBoundingClientRect());
  }

  return (
    <section ref={ref} className="flex gap-4">
      {/* <motion.div className="mx-3" style={{ x: imgTransformX }}> */}
      <motion.div className="mx-3">
        <Image
          className="max-w-sm"
          src={talk}
          alt="Talking at PIF."
          sizes="(max-width: 500px) 100vw, 50vw"
          style={{
            // width: '100%',
            height: 'auto',
          }}
          width={300}
          height={400}
        />
      </motion.div>

      <motion.section
        className="mr-4"
        // style={{ x: txtTransformX, y: txtTransformY }}
      >
        {/* <motion.section className="mr-4"> */}
        <h2 className="font-lora font-bold text-center text-[18px] w-[300px]">
          Giá trị của sự <span className="inline-block">trò chuyện.</span>
        </h2>
        <p>
          Không phải ai sinh ra bẩm sinh là một mentor, cũng không phải sinh ra
          đều là mentee hợp cách.
        </p>
      </motion.section>
    </section>
  );
};

export default BrandExplained;
