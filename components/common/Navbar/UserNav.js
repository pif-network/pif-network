import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import UserService from '../../../services/UserService'

export default function UserNav() {
  const router = useRouter()
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    UserService.getCurrentUser().then(
      response => {
        setCurrentUser(response.data)
      },
      error => {
        const message = (error.response && error.response.data) || error.message || error.toString()
        console.log(message)
      },
    )
  }, [])

  const LoggedOutNav = () => (
    <>
      <Link href="/login">
        <a className="mr-4 bg-white border border-primary text-primary hover:bg-extralightviolet hover:text-primary focus:dimviolet text-center px-3 pt-1 py-2 rounded">
          Đăng nhập
        </a>
      </Link>
      <Link href="/user/create-account">
        <a className="px-3 pt-1 py-2 rounded bg-primary text-white hover:bg-violet hover:text-white focus:bg-violet">
          Đăng ký
        </a>
      </Link>
    </>
  )

  const LoggedInNav = () => <>{currentUser.name}</>

  return <div>{currentUser ? <LoggedInNav /> : <LoggedOutNav />}</div>
}
