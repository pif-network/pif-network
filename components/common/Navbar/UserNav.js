import { useState, useEffect } from 'react'
import Link from 'next/link'
import TokenService from '../../../services/TokenService'
import AuthService from '../../../services/AuthService'
import { Menu, Dropdown } from 'antd'
import { DownOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'

export default function UserNav() {
  const router = useRouter()
  const currentUser = TokenService.getCurrentUser()

  const LoggedOutNav = () => (
    <>
      <Link href="/login">
        <a className="inline-block mr-4 bg-white border border-primary text-primary hover:bg-extralightviolet hover:text-primary focus:dimviolet text-center px-3 pt-1 py-2 rounded">
          Đăng nhập
        </a>
      </Link>
      <Link href="/user/create-account">
        <a className="inline-block px-3 pt-1 py-2 rounded bg-primary text-white hover:bg-violet hover:text-white focus:bg-violet">
          Đăng ký
        </a>
      </Link>
    </>
  )

  const ProfileDropDown = () => (
    <>
      <Menu>
        <Menu.Item>
          <div className="mr-5 mb-2 flex justify-start items-center space-x-3 cursor-pointer">
            {currentUser.avatar_url ? (
              <div className="w-8 h-8 rounded-full overflow-hidden ">
                <img src={`${currentUser.avatar_url}`} alt="Profile Image" className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className="w-8 h-8 rounded-full overflow-hidden ">
                <img src="/images/sample_profile.png" alt="Profile Image" className="w-full h-full object-cover" />
              </div>
            )}
            <div className="font-medium">
              <div className="text-base cursor-pointer">{currentUser.name}</div>
              <div className="text-sm cursor-pointer text-caption">Mentee</div>
            </div>
          </div>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item icon={<UserOutlined />}>
          <Link href="/my-profile">
            <a>Xem thông tin cá nhân</a>
          </Link>
        </Menu.Item>
        <Menu.Item
          onClick={() => {
            AuthService.logout()
            router.push('/')
          }}
          icon={<LogoutOutlined />}
        >
          Đăng xuất
        </Menu.Item>
      </Menu>
    </>
  )

  const LoggedInNav = () => (
    <>
      <Dropdown overlay={ProfileDropDown}>
        <div>
          <a className="hidden lg:block ant-dropdown-link" onClick={e => e.preventDefault()}>
            <div className="flex justify-end items-center space-x-3 cursor-pointer">
              {currentUser.avatar_url ? (
                <div className="w-8 h-8 rounded-full overflow-hidden ">
                  <img src={`${currentUser.avatar_url}`} alt="Profile Image" className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="w-8 h-8 rounded-full overflow-hidden ">
                  <img src="/images/sample_profile.png" alt="Profile Image" className="w-full h-full object-cover" />
                </div>
              )}
              <DownOutlined />
            </div>
          </a>

          <a className="lg:hidden ant-dropdown-link" onClick={e => e.preventDefault()}>
            <button className="flex items-center px-3 py-2 border rounded">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </a>
        </div>
      </Dropdown>
    </>
  )

  return <div>{currentUser ? <LoggedInNav /> : <LoggedOutNav />}</div>
}
