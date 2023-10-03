'use client';

import Image from 'next/image';
import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

import talk from '~/public/talk.png';

const BrandExplained = () => {
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
