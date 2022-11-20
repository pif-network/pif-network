import Image from 'next/image';
import { StaticImageData } from 'next/image';

export interface Card {
  id: number;
  title: string;
  content: string;
  image?: StaticImageData;
  imageMobile?: StaticImageData;
}
function ValueCard({ card }: { card: Card }) {
  return (
    <div className="rounded-xl relative sm:mt-4 overflow-hidden h-[250px] w-[440px] xl:h-[298px] xl:w-[525px] ">
      <Image className="object-cover" src={card.image!} alt="Value Card" />
      <div className="absolute top-0 right-0 left-0 bottom-0 value-card--text-mask">
        <div className="absolute left-[24px] top-[29px] font-lora">
          <h5 className="font-medium text-white text-heading pb-1 word-[-4px]">
            {card.title}
          </h5>
          <p className="text-white font-manrope font-regular text-sub-heading">
            {card.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ValueCard;
