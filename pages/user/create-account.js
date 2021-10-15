import * as React from "react"
import Head from "next/head"
import CreateAccount from "../../features/user/create/CreateAccount"

const CreateAccountPage = () => {
  return (
    <>
      <Head>
        <title>Create New Account</title>
      </Head>
      <CreateAccount />
    </>
  )
}

export default CreateAccountPage
