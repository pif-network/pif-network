import Image from 'next/image';
// import LineLG from '~/assets/section-title/section-title__line-lg.jpg'
import LineSM from '~/assets/section-title/section-title__line-sm.jpg';

export const SectionTitle = ({
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

      <div className="text-primary-900 font-lora font-semi-bold text-heading-sm md:text-title-sm lg:text-[36px]">
        {content}
      </div>
    </div>
  );
};
