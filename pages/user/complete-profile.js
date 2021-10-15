import * as React from "react"
import Head from "next/head"
import CompleteProfile from "../../features/user/create/CompleteProfile"

const CompleteProfilePage = () => {
  return (
    <>
      <Head>
        <title>Complete Profile</title>
      </Head>
      <CompleteProfile />
    </>
  )
}

export default CompleteProfilePage
