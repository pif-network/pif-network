import * as React from "react"
import Head from "next/head"
import VerifyEmail from "../../features/user/create/VerifyEmail"

const EmailSentPage = () => {
  return (
    <>
      <Head>
        <title>Verify Your Email</title>
      </Head>
      <VerifyEmail />
    </>
  )
}

export default EmailSentPage
