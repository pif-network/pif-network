import { useEffect, useState } from 'react';

import { UserService } from '~/services';
import { User } from '~/lib/types/user';
import { MenteeProfileView } from '~/components/mentee';

const MenteeProfilePage = () => {
  const [currentUser, setCurrentUser] = useState<User<
    'Mentee' | 'Mentor'
  > | null>(null);

  useEffect(() => {
    const user = UserService.currentUser;
    setCurrentUser(user);
  }, []);

  return <MenteeProfileView currentUser={currentUser} />;
};

export default MenteeProfilePage;
