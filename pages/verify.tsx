import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Verify: NextPage = () => {
  const router = useRouter();
  const { token } = router.query;

  return (
    <div className="h-screen">
      <h1>Verifying {token || 'none'}</h1>
      <h1>in {router.pathname}</h1>
    </div>
  );
};

export default Verify;
