import Head from 'next/head'
import { CreateAccount } from '~/components/user'

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
