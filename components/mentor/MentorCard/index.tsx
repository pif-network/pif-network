import Link from 'next/link';

import { User } from '~/lib/types/user';
import { FlagLine, PinLine } from '~/components/ui/svgs/Icons';

const MentorCard = ({ mentor }: { mentor: User<'Mentor'> }) => {
  return (
    <Link href={`mentors/${mentor.id}`}>
      <div
        className="w-[232px] h-[303px] xl:w-[272px] xl:h-[354px] shadow-2xl hover:scale-[1.03] transition-transform ease-in duration-200 rounded-xl overflow-hidden"
        style={{ background: `url(${mentor.avatar}) no-repeat center` }}
      >
        <div className="w-full h-full text-mask">
          <div className="pt-[211px] pl-[25px] xl:pt-[246px] xl:pl-[30px]">

            <h5 className="mb-0 text-white font-lora font-medium text-sub-heading">
              {mentor.name}
            </h5>

            {mentor.exp && (
              <p className="text-gray-200 font-manrope font-regular text-body-sm mb-3">
                {mentor.exp.title}
              </p>
            )}

            <ul className="mb-4 flex flex-col gap-1">
              {mentor.exp && (
                <li className="flex">
                  <PinLine colour="white" />
                  <span className="text-white font-manrope font-regular text-body-md ml-2">
                    {mentor.exp.workspace}
                  </span>
                </li>
              )}

              <li className="flex">
                <FlagLine colour="white" width="16" height="16" />
                {mentor.scopes &&
                  mentor.scopes.map(scope => {
                    <span className="text-white font-manrope font-regular text-body-md ml-2">
                      {scope}
                    </span>;
                  })}
              </li>
            </ul>

          </div>
        </div>
      </div>
    </Link>
  );
};

export default MentorCard;
