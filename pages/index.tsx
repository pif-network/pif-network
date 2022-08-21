import { useState, useEffect } from 'react';
import Head from 'next/head';

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
  FAQs,
} from '~/components/ui';
import { MentorCard } from '~/components/mentor';
import { RANDOM_MENTORS } from '~/shared/constant';

const HomePage = () => {
  const [mentors, setMentors] = useState<User<'Mentor'>[]>();

  useEffect(() => {
    const getAllMentors = async () => {
      try {
        const responseAllMentorsRequest = await UserService.getAllMentors();
        const { data } = responseAllMentorsRequest;
        const { data: mentors } = data;
        setMentors(mentors);
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

        <section className="my-8 mx-6">
          <div className="flex flex-col justify-center md:max-w-[525px] md:m-auto xl:max-w-[1112px] xl:m-auto">
            <SectionTitle content="Những mentors đầu ngành" className="mb-6" />
            <div className="flex flex-col gap-4 items-center xl:flex-row xl:gap-2">
              {/* {mentors ? (
							mentors.map(mentor => <MentorCard mentor={mentor} />) */}
              {RANDOM_MENTORS ? (
                RANDOM_MENTORS.map((mentor, idx) => (
                  <MentorCard key={idx} mentor={mentor} />
                ))
              ) : (
                <Skeleton />
              )}
            </div>
            <div className="self-center mt-10 md:self-end md:mt-24">
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

        <div className="mt-16 md:mt-32" />

        <Feedback />

        <div className="mt-16 md:mt-32" />

        <FAQs />

        {/* Space to footer */}
        <div className="mb-4" />
      </div>
    </>
  );
};

export default HomePage;
