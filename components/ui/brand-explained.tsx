'use client';

import Image from 'next/image';
import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

import talk from '~/public/talk.png';

const BrandExplained = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });
  const imgTransformX = useTransform(scrollYProgress, [0.3, 1], [0, -300]);
  const txtTransformX = useTransform(scrollYProgress, [0.3, 1], [100, 0]);

  return (
    <section ref={ref} className="">
      <motion.div className="mx-3 flex gap-4" style={{ x: imgTransformX }}>
        <Image
          src={talk}
          alt="Talking at PIF."
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
          width={300}
          height={400}
        />

        <motion.div className="mr-4" style={{ y: txtTransformX }}>
          <h2 className="font-lora font-bold text-center text-[18px] w-[300px]">
            Giá trị của sự <span className="inline-block">trò chuyện.</span>
          </h2>
          <p>
            Không phải ai sinh ra bẩm sinh là một mentor, cũng không phải sinh
            ra đều là mentee hợp cách.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BrandExplained;
