import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { MentorProfile } from '~/features/mentor/MentorProfile';
import { Mentor } from '~/lib/types/user';
import { UserService } from '~/services';

const MentorProfilePage: React.FC<{ data: Mentor }> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Mentor Profile</title>
      </Head>
      <MentorProfile data={data} />;
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const mockData: Mentor = {
    id: '2',
    name: 'Tam Nguyen',
    bio: 'Kiến thức và kỹ năng chuyên môn mảng Product, Tư vấn định hướng nghề nghiệp trong lĩnh vực công nghệ',
    domainKnowledge: 'Front-end',
    exp: [{ name: 'SheCodes', position: 'Software Engineer' }],
    fbUrl: 'https://facebook.com',
    githubUrl: 'https://github.com',
    linkedinUrl: 'https://linkedin.com',
    bookingUrl: 'https://calendly.com/shecodesinterview/mentoring-session',
    avatarUrl: '/images/profile-details.png',
  };
  // let data;
  // try {
  //   data = await UserService.getMentorById(context.query.id)
  // } catch (error) {
  //   console.log(error);
  // }
  return { props: { data: mockData } };
}

export default MentorProfilePage;
