import { default as NextHead } from 'next/head'

const Head = () => {
  return (
    <NextHead>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <link rel="manifest" href="/site.webmanifest" key="site-manifest" />

      <meta name="description" content="SheCodes Vietnam Mentorship" />

      <meta name="theme-color" content="#ffffff" />
      <meta name="msapplication-TileColor" content="#da532c" />

      <meta
        key="og:title"
        name="og:title"
        content="SheCodes Vietnam Mentorship Programme"
      />
      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />

      <meta key="robots" name="robots" content={'index,follow'} />
      <meta key="googlebot" name="googlebot" content={'index,follow'}></meta>
    </NextHead>
  )
}

export default Head
