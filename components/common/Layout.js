import Head from 'next/head'

import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="SheCodes Vietnam Mentorship" />
        <meta name="og:title" content="SheCodes Vietnam" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            'SheCodes Vietnam',
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
