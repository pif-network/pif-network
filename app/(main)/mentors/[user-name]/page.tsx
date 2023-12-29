'use client';

import {
  AspectRatio,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Link,
} from '~/components/ui';
import {
  GithubFill,
  LocationFill,
  MortarboardHatFill,
} from '~/components/ui/svgs/icons';

import { User } from '@prisma/client';
import { LinkedInLogoIcon } from '@radix-ui/react-icons';

const SquareSocialLink = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => (
  <div
    className="flex items-center justify-center w-10 h-10 bg-white rounded-xl
      shadow--social-icon hover:-translate-y-[2px] duration-200 ease-out cursor-pointer"
  >
    <Link external href={href} className="text-sub-heading">
      {icon}
    </Link>
  </div>
);

const MentorProfilePage = () => {
  const data: Partial<User> = {
    name: 'Shad CN',
    title: 'Software Engineer',
    workplace: 'Google',
    schoolName: 'University of California, Berkeley',
    major: 'Computer Science',
    location: 'San Francisco, CA',
    githubUrl: '#',
    linkedinUrl: '#',
  };
  const url = 'https://github.com/shadcn.png';
  return (
    <main className="h-screen pt-28">
      <section>
        <div className="mx-24 flex">
          <div className="w-44 mr-14">
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
            <div className="mb-7" />

            <h2 className="max-w-[12ch] text-title-sm lg:text-[36px] text-primary-900 font-lora font-bold">
              {data.name}
            </h2>

            <div className="mb-3" />

            <div className="flex gap-4">
              <SquareSocialLink
                href={data.githubUrl!}
                icon={<GithubFill colour="black" />}
              />
              <SquareSocialLink
                href={data.linkedinUrl!}
                icon={<LinkedInLogoIcon className="w-5 h-5" />}
              />
            </div>

            <div className="mb-3" />

            <div className="text-body-sm">
              <MortarboardHatFill
                className="inline-block mr-3"
                colour="black"
              />
              {`Tốt nghiệp chuyên ngành ${data.major} tại ${data.schoolName}`}
            </div>

            <div className="mb-2" />

            <div className="text-body-sm">
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
