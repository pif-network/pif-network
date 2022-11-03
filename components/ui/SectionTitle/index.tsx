import Image from 'next/image';
// import LineLG from '~/assets/section-title/section-title__line-lg.jpg'
import LineSM from '~/assets/section-title/section-title__line-sm.jpg';

const SectionTitle = ({
  content,
  className,
}: {
  content: string;
  className?: string;
}) => {
  return (
    <div className={className}>
      <Image src={LineSM} alt="decorator" className="hidden md:inline-block" />
      <Image src={LineSM} alt="decorator" className="md:hidden mb-[0.375rem]" />

      <div className="text-black font-lora font-semi-bold word-[-0.4rem] md:word-[-0.6875rem] text-heading-sm md:text-title-sm lg:text-title-sm">
        {content}
      </div>
    </div>
  );
};

export default SectionTitle;
