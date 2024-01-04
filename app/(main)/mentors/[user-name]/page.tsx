'use client';

import {
  AspectRatio,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Link,
  SectionTitle,
  Tag,
} from '~/components/ui';
import { GithubFill } from '~/components/ui/svgs/icons';
import { api } from '~/lib/trpc/client';
import { FIELD_METADATA, OFFER_METADATA } from '~/shared/constant';

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
  const { data } = api.user.single_mentor.useQuery({
    clerkId: 'user_2ZctFGhv0PHviDQXGDtAv9XcHQq',
  });
  console.log(data);
  const url = 'https://github.com/shadcn.png';

  if (!data) {
    return (
      <div className="flex items-center justify-center w-screen h-screen">
        Loading...
      </div>
    );
  }

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
            <div className="mb-2" />
            <div className="flex flex-wrap gap-1">
              {data.offers?.map((offer, idx) => (
                <Tag
                  key={idx}
                  type="outlined"
                  color={
                    OFFER_METADATA[offer.name as keyof typeof OFFER_METADATA][
                      'tagColour'
                    ]
                  }
                >
                  {
                    OFFER_METADATA[offer.name as keyof typeof OFFER_METADATA][
                      'displayName'
                    ]
                  }
                </Tag>
              ))}
            </div>
          </div>

          <div className="mb-4" />

          <div>
            <SectionTitle>
              <h2 className="font-lora font-bold text-heading-sm">Lĩnh vực</h2>
            </SectionTitle>
            <div className="mb-2" />
            <div className="flex flex-wrap gap-1">
              {data.fields?.map((field, idx) => (
                <Tag
                  key={idx}
                  type="filled"
                  color={
                    FIELD_METADATA[field.name as keyof typeof FIELD_METADATA][
                      'tagColour'
                    ]
                  }
                >
                  {
                    FIELD_METADATA[field.name as keyof typeof FIELD_METADATA][
                      'displayName'
                    ]
                  }
                </Tag>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section></section>
    </main>
  );
};

export default MentorProfilePage;
