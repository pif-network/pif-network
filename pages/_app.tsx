import 'antd/dist/antd.css';
import '../assets/style/main.css';

import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { TokenService } from '~/services';
import { Head, Layout } from '~/components/common';
import { ScrollObserver } from '~/lib/scroll';
import { NO_LAYOUT_PATH, PRIVATE_PATH } from '~/shared/constant';

// import { SessionProvider } from 'next-auth/react';

const Website = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  const [isAuthorised, setIsAuthorised] = useState(false);
  const router = useRouter();
  const currentUrl = router.asPath;
  const currentPath = currentUrl.split('?')[0] || ' ';

  const isTheBeginningOfCurrentPath = (path: string) =>
    currentPath.startsWith(path);

  const hideContentOnPageLoad = () => setIsAuthorised(false);

  const checkAuthorisation = (currentUrl: string) => {
    const currentPath = currentUrl.split('?')[0] || ' ';

    if (!TokenService.currentToken && PRIVATE_PATH.includes(currentPath)) {
      setIsAuthorised(false);

      router.push({
        pathname: '/login',
        query: {
          returnUrl: router.asPath,
        },
      });
    } else {
      setIsAuthorised(true);
    }
  };

  useEffect(() => {
    /**
     * Run an authorisation check on first load.
     */
    checkAuthorisation(currentUrl);

    /**
     * Hide current page's content while routing
     * to prevent unauthorised user from seeing content.
     */
    router.events.on('routeChangeStart', hideContentOnPageLoad);
    /**
     * Run an authorisation check when route changing is done.
     */
    router.events.on('routeChangeComplete', checkAuthorisation);

    return () => {
      router.events.off('routeChangeStart', hideContentOnPageLoad);
      router.events.off('routeChangeComplete', checkAuthorisation);
    };
  }, []);

  return (
    <>
      <Head />

      {/* <SessionProvider session={session} refetchInterval={0}> */}
      <ScrollObserver>
        {NO_LAYOUT_PATH.some(isTheBeginningOfCurrentPath) ? (
          <Component {...pageProps} />
        ) : (
          isAuthorised && (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )
        )}
      </ScrollObserver>
      {/* </SessionProvider> */}
    </>
  );
};

export default Website;
