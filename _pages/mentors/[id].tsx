import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { MentorProfile } from '~/features/mentor/MentorProfile';
import { Review } from '~/features/mentor/Review';
import { User } from '~/lib/types/user';

const MentorProfilePage: React.FC<{
  data: User<'Mentor'>;
  reviews: Review[];
}> = ({ data, reviews }) => {
  return (
    <>
      <Head>
        <title>Mentor Profile</title>
      </Head>
      <MentorProfile data={data} reviews={reviews} />;
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let mentorInfo;
  let mentorReviews;

  try {
    // const responseMentorInfo = await UserService.getUserById(context.query.id);
    // mentorInfo = responseMentorInfo.data.data;
    // const responseMentorReviews = await UserService.getAllReviewsByMentorId(
    //   mentorInfo.id
    // );
    // mentorReviews = responseMentorReviews.data.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: { data: mentorInfo || null, reviews: mentorReviews || null },
  };
}

export default MentorProfilePage;
