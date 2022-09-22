import Link from 'next/link'
import { useRouter } from 'next/router'

import { AuthService, UserService } from '~/services'

import { Menu, Dropdown } from 'antd'
import { DownOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons'

import Button from '../../../components/ui/Button'

import { useSession, signIn, signOut, getSession } from 'next-auth/react';

const UserNav = () => {

  const { data: session } = useSession();

  return (

    <>
    { session?
      <h1> {session.user?.name} </h1>
      : 
       (<div className="flex gap-2">
          <Button
            fillType="outlined"
            className="block"
            size="medium"
            content="Trở thành mentor"
            href="/"
          />
          <Button
            fillType="outlined"
            className="block"
            size="medium"
            content="Tham gia <product_name>"
            href="/"
          />
        </div> 
        )
      }
      
      <div className="flex gap-2">
        <Button
          className="block"
          fillType="filled"
          size="medium"
          content="Tìm kiếm mentor"
          href="/"
          rightIcon="ChevronRight"
        />
      </div>
    </>

  )
}

export default UserNav
