import { useState, useEffect } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';

import { UserService } from '~/services';
import { User } from '~/lib/types/user';
import { getErrorMessage } from '~/lib/types/service';
import {
  Skeleton,
  Hero,
  Benefits,
  Values,
  Feedback,
  Button,
  SectionTitle,
  FAQAccordionItem,
} from '~/components/ui';
import { MentorCard } from '~/components/mentor';
import { FAQs } from '~/shared/constant';

const HomePage: NextPage = () => {
  const [mentors, setMentors] = useState<User<'Mentor'>[]>();

  useEffect(() => {
    const getAllMentors = async () => {
      try {
        const responseAllMentorsRequest = await UserService.getMentors({
          itemsPerPage: 4,
        });
        const { data } = responseAllMentorsRequest;
        const { data: mentors } = data;
        setMentors(mentors);
        console.log(mentors);
      } catch (error) {
        const errorMessage = getErrorMessage(error);
        console.log(errorMessage);
      }
    };

    getAllMentors();
  }, []);

  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <div>
        <Hero />
        <Benefits />

        <section className="my-8">
          <div className="flex flex-col justify-center md:max-w-[525px] md:mx-auto lg:max-w-[1323px] lg:mx-auto">
            <div className="mx-auto">
              <SectionTitle
                content="Những mentors đầu ngành"
                className="mb-9"
              />
              <div className="flex flex-col gap-4 items-center lg:flex-row lg:gap-2 xl:gap-2">
                {mentors &&
                  mentors.map((mentor, idx) => (
                    <MentorCard key={idx} mentor={mentor} />
                  ))}
              </div>
            </div>

            <div className="self-center mt-10 md:self-end md:mt-16 lg:mr-[53px]">
              <Button
                content="Explore more"
                fillType="outlined"
                size="medium"
                href="/search"
                rightIcon="ChevronRight"
              />
            </div>
          </div>
        </section>

        <Values />

        {/* <div className="mt-16 md:mt-32" />

         <Feedback /> */}

        <div className="mt-16 md:mt-32" />

        <article
          id="faqs"
          className="max-w-screen-xl mt-12 mx-auto px-4 lg:px-8"
        >
          <section className="space-y-3 text-center">
            <h1 className="text-primary-900 font-lora font-semi-bold word-[-0.6rem] text-title-sm">
              Những câu hỏi thường gặp
            </h1>
            <p className="max-w-lg mx-auto text-gray-600 text-body-md">
              SheCodes trả lời những câu hỏi mà có thể bạn sẽ thắc mắc.
            </p>
          </section>

          <section className="mt-14 max-w-2xl mx-auto">
            {FAQs.map((item, idx) => (
              <FAQAccordionItem key={idx} idx={idx} FAQ={item} />
            ))}
          </section>

          <section className="space-y-1 mt-5 text-center">
            <h3 className="text-primary-900 font-lora font-semi-bold word-[-0.4rem] text-body">
              VẪN CÒN CÂU HỎI?{' '}
            </h3>
            <p className="max-w-md mx-auto text-gray-600 text-body-md">
              Nếu bạn không thể tìm thấy câu trả lời mong muốn ở trên, xin hãy
              xem thêm tại đây hoặc liên hệ với chúng tôi.
            </p>
          </section>
        </article>

        {/* Space to footer */}
        <div className="mb-4" />
      </div>
    </>
  );
};

export default HomePage;
