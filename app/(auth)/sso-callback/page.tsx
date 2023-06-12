import { AuthenticateWithRedirectCallback } from '@clerk/nextjs';

export default () => (
  <div className="h-screen">
    <AuthenticateWithRedirectCallback />
  </div>
);
