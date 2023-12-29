'use client';

import {
  AspectRatio,
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '~/components/ui';
import { LocationFill, MortarboardHatFill } from '~/components/ui/svgs/icons';

import { User } from '@prisma/client';

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
          <div className="w-40">
            <AspectRatio ratio={2 / 3}>
              <Avatar className="inline">
                <AvatarImage
                  src={url}
                  className="rounded-[28px] object-cover"
                />
                <AvatarFallback>SCN</AvatarFallback>
              </Avatar>
            </AspectRatio>
          </div>

          <div className="flex flex-col">
            <h1 className="max-w-[12ch] text-title-sm lg:text-[36px] text-primary-900 font-lora font-bold mb-3">
              {data.name}
            </h1>
            <div className="text-body">
              <MortarboardHatFill
                className="inline-block mr-3"
                colour="black"
              />
              {`Tốt nghiệp chuyên ngành ${data.major} tại ${data.schoolName}`}
            </div>
            <div className="mb-2" />
            <div className="text-body">
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
