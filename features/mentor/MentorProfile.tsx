import { get } from 'lodash';
import { useEffect, useRef, useState } from 'react';
import { Button, RectangleAvatar, Tag } from '~/components/ui';
import { LocationFill, MortarboardHatFill } from '~/components/ui/svgs/Icons';
import { Mentor } from '~/lib/types/user';

import {
  FacebookFilled,
  GithubFilled,
  LinkedinFilled,
  PlusSquareOutlined,
} from '@ant-design/icons';
import autoAnimate from '@formkit/auto-animate';

import { CreateReview, ReviewCard } from './Review';

import { useSession, getSession } from "next-auth/react"
import { Popover } from 'antd';



const socialLinkMapper = {
  facebook: {
    dataKey: 'fbUrl',
    icon: <FacebookFilled />,
  },
  github: {
    dataKey: 'githubUrl',
    icon: <GithubFilled />,
  },
  linkedIn: {
    dataKey: 'linkedinUrl',
    icon: <LinkedinFilled />,
  },
};

const SquareSocialLink: React.FC<{
  href: string;
  icon: React.ReactNode;
}> = ({ href, icon }) => (
  <div className="flex items-center justify-center w-10 h-10 bg-white rounded-xl shadow-[0px_4px_48px_rgba(0,0,0,0.08),0px_8px_24px_rgba(0,0,0,0.12)]">
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-sub-heading mb-2"
    >
      {icon}
    </a>
  </div>
);

const PartialDivider: React.FC<{
  size?: 'small' | 'medium';
}> = ({ size = 'medium' }) => {
  const widthClass = size === 'medium' ? 'w-[20px] md:w-[42px]' : 'w-[20px]';
  return (
    <div
      className={`${widthClass} rounded-sm border-2 mb-2 border-primary-900 opacity-20`}
    />
  );
};

export const MentorProfile: React.FC<{ data: Mentor }> = ({ data }) => {
  const { data: session, status } = useSession()
  const [isCreatingReview, setIsCreatingReview] = useState(false);
  const parent = useRef(null);
  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, []);

  const getWorkDescription = () => {
    const latestExp = data?.exp?.[0]; // can be wrong depending on order

    return latestExp?.position
      ? `${latestExp.position} ${latestExp.name ? 'tại ' + latestExp.name : ''}`
      : '-';
  };

  const socialLinkComponents = [];
  for (const [key, mapper] of Object.entries(socialLinkMapper)) {
    const socialUrl = get(data, mapper.dataKey);
    if (socialUrl) {
      socialLinkComponents.push(
        <SquareSocialLink
          key={mapper.dataKey}
          href={socialUrl}
          icon={mapper.icon}
        />
      );
    }
  }

  const education = 'Tốt nghiệp chuyên ngành <info> tại <info>';
  const location = '<Some where>';
  const commentCount = 2;

  const onCreateReview = async (value: any) => {
    if (!value?.value) return;
    // TODO: add integration
    console.log({ value });
    setIsCreatingReview(false);
  };

  const content = (
    <div>
      <p>Vui lòng đăng nhập để đặt lịch hẹn</p>
    </div>
  );

  console.log("this is the status " + status);


  return (
    <div className="px-6 py-10 md:px-48 md:py-24 font-manrope">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="md:mr-16">
          <RectangleAvatar src={data.avatarUrl} />
        </div>
        <div className="w-full flex flex-col items-center md:block">
          <div className="mt-4 md:my-0 flex flex-col md:flex-row items-center justify-between">
            <h1 className="text-title-sm md:text-title text-primary-900 font-lora font-semi-bold mb-2">
              {data.name}
            </h1>
            
            { session ? 
              (
                <Button
                  fillType="outlined"
                  size="medium"
                  className="hidden md:block"
                  content="Đặt lịch hẹn"
                />
              ) :
              (
                <Popover content={content}>
                  <Button
                    fillType="outlined"
                    size="medium"
                    className="hidden md:block"
                    content="Đặt lịch hẹn"
                  />
                </Popover>
              )
            }
            
          </div>
          <span className="text-body-lg text-center text-primary-900">
            {getWorkDescription()}
          </span>
          <div className="flex mt-8 mb-6 gap-2">{socialLinkComponents}</div>
          <div className="text-body mb-6 md:mb-0">
            <div className="mb-2">
              <MortarboardHatFill
                className="inline-block mr-3"
                colour="black"
              />
              {education}
            </div>
            <div>
              <LocationFill className="inline-block mr-3" colour="black" />
              {location}
            </div>
          </div>


        </div>
      </div>
      <div className="mb-10 md:mb-8 mt-12 md:mt-20 grid md:grid-cols-3 gap-x-8 gap-y-10 flex-col md:flex-row">
        <div className="md:col-span-2">
          <PartialDivider />
          <h1 className="mb-3 text-heading-sm md:text-title-sm font-semi-bold font-lora">
            Giới thiệu chung
          </h1>
          <p className="text-body">{data.bio}</p>
        </div>
        <div className="md:col-span-1">
          <PartialDivider size="small" />
          <h3 className="text-heading-sm font-semi-bold font-lora">
            Phạm vi mentor
          </h3>
          <div className="mt-3 mb-10 md:mb-8 flex flex-wrap gap-2">
            <Tag color="cyan">Resume Revision</Tag>
            <Tag color="red">Career Advise</Tag>
            <Tag color="primary">Mock Interview</Tag>
          </div>
          <PartialDivider size="small" />
          <h3 className="text-heading-sm font-semi-bold font-lora">Lĩnh vực</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            <Tag type="filled" color="cyan">
              Web Development
            </Tag>
            <Tag type="filled" color="primary">
              Devops
            </Tag>
            <Tag type="filled" color="red">
              Mobile
            </Tag>
          </div>
        </div>
      </div>
      <PartialDivider />
      <div className="grid md:grid-cols-3 gap-y-3 md:gap-y-6">
        <div className="flex justify-between col-span-2 items-center">
          <h1 className="text-heading-sm md:text-title-sm font-semi-bold font-lora">
            Đánh giá từ mentee ({commentCount})
          </h1>
          { 
          session?
            <Button
              fillType="outlined"
              size="small"
              content="Thêm review"
              className="h-fit hidden md:block"
              onClick={() => setIsCreatingReview(true)}
            /> 
            : <span> </span>
          }
          <PlusSquareOutlined
            className="block md:hidden text-body text-primary-900 cursor-pointer"
            onClick={() => setIsCreatingReview(true)}
          />
        </div>
        <div className="col-span-2" ref={parent}>
          {isCreatingReview && (
            <CreateReview
              onClose={() => setIsCreatingReview(false)}
              onSubmit={onCreateReview}
            />
          )}
        </div>
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
};
