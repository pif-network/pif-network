import 'tailwindcss/tailwind.css'
import 'antd/dist/antd.css'
import '../assets/main.css'

import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import { TokenService } from '~/services'
import { Head, Layout } from '~/components/common'

const App = ({ Component, pageProps }: AppProps) => {
  const [isAuthorised, setIsAuthorised] = useState(false)
  const router = useRouter()
  const currentUrl = router.asPath

  const hideContentOnPageLoad = () => setIsAuthorised(false)

  const checkAuthorisation = (currentUrl: string) => {
    const privatePaths = ['/mentee/me']
    const currentPath = currentUrl.split('?')[0] || ' '

    if (!TokenService.currentToken && privatePaths.includes(currentPath)) {
      setIsAuthorised(false)

      router.push({
        pathname: '/login',
        query: {
          returnUrl: router.asPath,
        },
      })
    } else {
      setIsAuthorised(true)
    }
  }

  useEffect(() => {
    /**
     * Run an authorisation check on first load.
     */
    checkAuthorisation(currentUrl)

    /**
     * Hide current page's content while routing
     * to prevent unauthorised user from seeing content.
     */
    router.events.on('routeChangeStart', hideContentOnPageLoad)
    /**
     * Run an authorisation check when route changing is done.
     */
    router.events.on('routeChangeComplete', checkAuthorisation)

    return () => {
      router.events.off('routeChangeStart', hideContentOnPageLoad)
      router.events.off('routeChangeComplete', checkAuthorisation)
    }
  }, [])

  return (
    <>
      <Head />
      <Layout>{isAuthorised && <Component {...pageProps} />}</Layout>
    </>
  )
}

export default App
