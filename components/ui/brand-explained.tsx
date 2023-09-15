'use client';

import Image from 'next/image';

import talk from '~/public/talk.png';

const BrandExplained = () => {
  return (
    <section>
      <div className="mx-3">
        <Image
          src={talk}
          alt="Talking at PIF."
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>
    </section>
  );
};

export default BrandExplained;