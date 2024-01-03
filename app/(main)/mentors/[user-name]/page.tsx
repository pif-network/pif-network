'use client';

import {
  AspectRatio,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Link,
  SectionTitle,
} from '~/components/ui';
import {
  GithubFill,
  LocationFill,
  MortarboardHatFill,
} from '~/components/ui/svgs/icons';
import { api } from '~/lib/trpc/client';

import { User } from '@prisma/client';
import {
  CounterClockwiseClockIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons';

const SquareSocialLink = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => (
  <div
    className="flex items-center justify-center w-8 h-8 bg-white rounded-lg
      shadow--social-icon hover:-translate-y-[2px] duration-200 ease-out cursor-pointer"
  >
    <Link external href={href} className="text-sub-heading">
      {icon}
    </Link>
  </div>
);

const MentorProfilePage = () => {
  const realData = api.user.single_mentor.useQuery({
    clerkId: '',
  });
  console.log(realData.data);

  const data: Partial<User> = {
    name: 'Shad CN',
    description:
      'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.',
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
    <main className="h-screen mx-32 pt-36">
      <section>
        <div className="flex">
          <div className="w-44 mr-12">
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
            <div className="mb-10" />

            <div>
              <h2 className="max-w-[12ch] text-title-sm lg:text-[36px] text-primary-900 font-lora font-bold">
                {data.name}
              </h2>
              <p className="font-manrope text-body text-black font-medium">
                {data.title} <span className="text-gray-600">at</span>{' '}
                {data.workplace}
              </p>
            </div>

            <div className="mb-4" />

            <div className="flex gap-2">
              <SquareSocialLink
                href={data.githubUrl!}
                icon={<GithubFill colour="black" className="w-5 h-5" />}
              />
              <SquareSocialLink
                href={data.linkedinUrl!}
                icon={<LinkedInLogoIcon className="w-[18px] h-[18px]" />}
              />
            </div>

            <div className="mb-5" />

            <div>
              <div className="p-2 flex items-center gap-2 bg-white rounded-lg shadow--statistic-box cursor-pointer">
                <CounterClockwiseClockIcon className="w-10 h-10" />
                <p className="flex flex-col font-manrope">
                  <span className="font-bold text-heading-sm">140 phút</span>
                  <span className="font-regular text-button">
                    Thời gian trò chuyện
                  </span>
                </p>
              </div>
            </div>

            {/* <div className="text-body-sm"> */}
            {/*   <MortarboardHatFill */}
            {/*     className="inline-block mr-3" */}
            {/*     colour="black" */}
            {/*   /> */}
            {/*   {`Tốt nghiệp chuyên ngành ${data.major} tại ${data.schoolName}`} */}
            {/* </div> */}
            {/* <div className="mb-2" /> */}
            {/* <div className="text-body-sm"> */}
            {/*   <LocationFill className="inline-block mr-3" colour="black" /> */}
            {/*   {data.location} */}
            {/* </div> */}
          </div>

          <div className="flex-1 flex justify-end">
            <Button variant="outline">Đặt lịch hẹn</Button>
          </div>
        </div>
      </section>

      <div className="mb-10" />

      <section className="grid lg:grid-cols-3  gap-x-20 gap-y-10 flex-col md:flex-row">
        <div className="lg:col-span-2">
          <SectionTitle>
            <h2 className="font-lora font-bold text-heading">Giới thiệu</h2>
          </SectionTitle>
          <div className="mb-4" />
          <p className="font-manrope text-body leading-snug">
            {data.description}
          </p>
        </div>

        <div className="flex flex-col">
          <div>
            <SectionTitle>
              <h2 className="font-lora font-bold text-heading-sm">
                Phạm vi mentor
              </h2>
            </SectionTitle>
            <div className="mb-4" />
            <p>
              {`Mình là ${data.name}, hiện tại mình đang làm việc tại ${data.workplace} với vai trò ${data.title}.`}
            </p>
          </div>
          <div>
            <SectionTitle>
              <h2 className="font-lora font-bold text-heading-sm">Lĩnh vực</h2>
            </SectionTitle>
            <div className="mb-4" />
            <p>
              {`Mình là ${data.name}, hiện tại mình đang làm việc tại ${data.workplace} với vai trò ${data.title}.`}
            </p>
          </div>
        </div>
      </section>
      <section></section>
    </main>
  );
};

export default MentorProfilePage;
