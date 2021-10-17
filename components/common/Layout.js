import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="description" content="SheCodes Vietnam Mentorship" />
        <meta name="og:title" content="SheCodes Vietnam" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
