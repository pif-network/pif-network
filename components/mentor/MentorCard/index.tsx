import Link from 'next/link';

import { User } from '~/lib/types/user';
import { FlagLine, PinLine } from '~/components/ui/svgs/Icons';

const MentorCard = ({ mentor }: { mentor: User<'Mentor'> }) => {
  return (
    <Link href={`mentors/${mentor.id}`}>
      <div
        className="card-mentor shadow-2xl hover:scale-105 rounded-xl overflow-hidden"
        style={{ background: `url(${mentor.avatar}) no-repeat center` }}
      >
        <div className="w-full h-full text-mask">
          <div className="absolute bottom-0 left-[30px] ">
            <h5 className="mb-0 text-white font-lora font-medium text-sub-heading">
              {mentor.name}
            </h5>
            {mentor.exp && (
              <p className="text-gray-200 font-manrope font-regular text-body-sm mb-3">
                {mentor.exp.title}
              </p>
            )}

            <ul className="mb-4 w-full">
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
