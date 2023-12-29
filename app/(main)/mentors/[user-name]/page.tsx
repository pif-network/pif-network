'use client';

import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui';

import { User } from '@prisma/client';
import { LocationFill, MortarboardHatFill } from '~/components/ui/svgs/icons';

const MentorProfilePage = () => {
  const data: Partial<User> = {
    name: 'Shad CN',
    title: 'Software Engineer',
    workplace: 'Google',
    schoolName: 'University of California, Berkeley',
    major: 'Computer Science',
    location: 'San Francisco, CA',
  };
  const url = 'https://github.com/shadcn.png';
  return (
    <main className="h-screen pt-28">
      <section>
        <div className="mx-24 flex">
          <Avatar className="w-72 h-92 rounded-[28px]">
            <AvatarImage src={url} />
            <AvatarFallback>SCN</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <h1 className="max-w-[12ch] text-title-sm lg:text-[36px] text-primary-900 font-lora font-bold mb-3">
              {data.name}
            </h1>
            <div className="mb-2">
              <MortarboardHatFill
                className="inline-block mr-3"
                colour="black"
              />
              {`Tốt nghiệp chuyên ngành ${data.major} tại ${data.schoolName}`}
            </div>
            <div>
              <LocationFill className="inline-block mr-3" colour="black" />
              {data.location}
            </div>
          </div>
        </div>
      </section>
      <section></section>
      <section></section>
    </main>
  );
};

export default MentorProfilePage;
