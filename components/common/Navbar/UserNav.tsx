import Link from 'next/link'
import { useRouter } from 'next/router'

import { AuthService, UserService } from '~/services'

import { Menu, Dropdown } from 'antd'
import { DownOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons'

import Button from '../../../components/ui/Button'

const UserNav = () => (
	<>
		<div className="flex gap-2">
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

export default UserNav
