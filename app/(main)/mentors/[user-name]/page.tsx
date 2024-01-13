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
  ReviewCard,
  WordBlock,
} from '~/components/ui';
import { GithubFill } from '~/components/ui/svgs/icons';
import { api } from '~/lib/trpc/client';
import { FIELD_METADATA, OFFER_METADATA } from '~/shared/constant';

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
  const reviews = [
    {
      name: 'Nguyễn Mai Anh',
      avatar: url,
      text: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    },
    {
      name: 'Nguyễn Mai Anh',
      avatar: url,
      text: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    },
  ];

  if (!data) {
    return (
      <div className="flex items-center justify-center w-screen h-screen">
        Loading...
      </div>
    );
  }

  return (
    <main className="mx-6 pt-20 lg:mx-32 lg:pt-36">
      <section>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start">
          <div className="w-60 lg:w-44 lg:mr-12">
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
            <div className="mb-4 lg:mb-10" />

            <div className="px-4 lg:px-0 flex-centre flex-col gap-1 lg:block leading-8 lg:leading-12 text-center lg:text-left">
              <h2 className="max-w-[12ch] text-[28px] lg:text-[36px] text-primary-900 font-lora font-bold">
                {data.name}
              </h2>
              <p className="font-manrope text-body-md lg:text-body text-black font-medium">
                <WordBlock>{data.title}</WordBlock>{' '}
                <WordBlock>
                  <span className="text-gray-600">at</span> {data.workplace}
                </WordBlock>
              </p>
            </div>

            <div className="mb-4" />

            <div className="flex-centre lg:justify-start lg:items-start gap-2">
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

      <section className="grid lg:grid-cols-3 gap-x-20 gap-y-10 flex-col md:flex-row">
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
            <SectionTitle size="small">
              <h2 className="font-lora font-bold text-heading-sm">
                Phạm vi mentor
              </h2>
            </SectionTitle>
            <div className="mb-2" />
            <div className="flex flex-wrap gap-1">
              {data.offers?.map((offer, idx) => (
                <Tag
                  key={idx}
                  type="outline"
                  colour={
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
            <SectionTitle size="small">
              <h2 className="font-lora font-bold text-heading-sm">Lĩnh vực</h2>
            </SectionTitle>
            <div className="mb-2" />
            <div className="flex flex-wrap gap-1">
              {data.fields?.map((field, idx) => (
                <Tag
                  key={idx}
                  type="fill"
                  colour={
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

      <section>
        <SectionTitle size="small">
          <h2 className="font-lora font-bold text-heading-md">
            Đánh giá từ mentee
          </h2>
        </SectionTitle>

        <div className="mb-4" />

        {reviews.map((review, idx) => (
          <ReviewCard key={idx} {...review} />
        ))}
      </section>
    </main>
  );
};

export default MentorProfilePage;
