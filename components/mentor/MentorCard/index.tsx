import Link from 'next/link';

import { User } from '~/lib/types/user';
import { FlagLine, PinLine } from '~/components/ui/svgs/Icons';
import { FIELD_METADATA } from '~/shared/constant';

const MentorCard = ({ mentor }: { mentor: User<'Mentor'> }) => {
  return (
    <Link href={`mentors/${mentor.userId}`} legacyBehavior>
      <div
        className="w-[232px] h-[303px] xl:w-[272px] xl:h-[354px] shadow-2xl hover:scale-[1.02] transition-transform ease-in rounded-xl overflow-hidden cursor-pointer"
        style={{ background: `url(${mentor.avatarUrl}) no-repeat center` }}
      >
        <div className="w-full h-full text-mask">
          <div className="pt-[186px] pl-[25px] xl:pt-[236px] xl:pl-[30px]">
            <h5 className="mb-0 text-white font-lora font-medium text-sub-heading">
              {mentor.name}
            </h5>

            <p className="text-gray-200 font-manrope font-regular text-body-sm mb-3">
              {mentor.title}
            </p>

            <ul className="mb-8 xl:mb-5 flex flex-col gap-1">
              <li className="flex">
                <PinLine colour="white" />
                <span className="text-white/80 font-manrope font-regular text-body-md ml-2">
                  {mentor.workplace}
                </span>
              </li>

              <li className="flex text-white/80 font-manrope font-regular text-caption">
                <FlagLine colour="white" width="16" height="16" />
                <span className="ml-2">
                  {mentor.fields
                    ?.slice(0, 2)
                    .map(field => `${FIELD_METADATA[field].displayName}, `)}
                  ...
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MentorCard;
