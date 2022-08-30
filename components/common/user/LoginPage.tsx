import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { AuthService } from '~/services'
import { getErrorMessage } from '~/lib/types/service'
import { Link, Input as FormikInput } from '~/components/ui'

import { FormikProvider, useFormik, Form, Field } from 'formik'
import { object, string } from 'yup'

import { Row, Col, Input } from 'antd'

const Login = () => {
	const router = useRouter()
	const [message, setMessage] = useState<string | undefined>('')

	const validationSchema = object().shape({
		email: string().required('Hãy nhập Email').email('Email không hợp lệ'),
		password: string()
			.required('Hãy nhập mật khẩu')
			.min(6, 'Mật khẩu phải có ít nhất 6 kí tự')
			.max(128, 'Mật khẩu không được vượt quá 128 kí tự'),
	})

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema,
		onSubmit: async (data, { setSubmitting }) => {
			try {
				setMessage('')

				const user = await AuthService.logIn(data)

				if (!user?.dateOfBirth) {
					router.push('/user/complete-profile')
				}

				const returnUrl = (router.query?.returnUrl as string) || '/'
				router.push(returnUrl)
			} catch (error) {
				const errorMessage = getErrorMessage(error)

				switch (errorMessage) {
					case "Mentee's not found":
						setMessage('Email không tồn tại')
						break
					case "Mentee has's not confirm their email.":
						setMessage('Kiểm tra email của bạn và xác nhận tài khoản')
						break
					case 'Wrong password.':
						setMessage('Mật khẩu không đúng')
						break
					default:
						setMessage(errorMessage)
				}
			} finally {
				setSubmitting(false)
			}
		},
	})

	return (
		<>
			<Head>
				<title>Login</title>
			</Head>

			<div className="min-h-screen/85 md:bg-lightgray bg-white px-0 md:px-16 py-0 md:py-12">
				<Row>
					<Col
						className="bg-gradient-to-b from-primary via-primary to-lightviolet hidden md:flex h-screen/75 justify-center items-center "
						xs={0}
						sm={12}
					>
						<Image
							priority
							src="/images/log-in-page.svg"
							className=""
							width={476}
							height={525}
						/>
					</Col>
					<Col
						className="h-screen/75 bg-white flex justify-center items-start"
						sm={24}
						md={12}
					>
						<div className="mt-8 md:mt-8 lg:mt-24 ml-8 md:ml-10 lg:ml-32 mr-2 md:mr-8 lg:mr-36">
							<h4 className="pb-4 text-2xl lg:text-4xl font-medium tracking-wide leading-10">
								Chào mừng bạn <br /> quay trở lại!
							</h4>

							<FormikProvider value={formik}>
								<Form>
									{message && (
										<div className="mt-4 text-red-500 flex items-center justify-center">
											{message}
										</div>
									)}
									<Field
										className="mt-6 h-12 border border-primary hover:border-violet-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
										name="email"
										type="email"
										placeholder="Nhập email của bạn"
										as={FormikInput}
									/>
									<Input.Password
										className="mt-6 h-12 border border-primary hover:border-violet-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
										placeholder="Nhập mật khẩu của bạn"
										type="password"
										name="password"
										onChange={formik.handleChange}
										value={formik.values.password}
									/>
									<div className="text-red-500">
										{formik.errors.password ? formik.errors.password : null}
									</div>
									<div className="pt-4 flex items-center justify-between">
										<div>
											<input
												type="checkbox"
												name="remember"
												id="remember"
												className="mr-1 checked:bg-primary checked:border-transparent"
											/>{' '}
											<label
												htmlFor="remember"
												className="text-sm text-grey-dark"
											>
												Ghi nhớ tôi
											</label>
										</div>
										<Link href="/user/forgot-password">Quên Mật khẩu?</Link>
									</div>

									<div className="mt-8 flex items-center justify-center">
										<button
											className="py-3 px-4 md:w-28 w-full rounded bg-primary text-white hover:bg-violet focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-opacity-50"
											type="submit"
										>
											{formik.isSubmitting ? (
												<div className=" flex justify-center items-center">
													<div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
												</div>
											) : (
												<>Đăng Nhập</>
											)}
										</button>
									</div>
								</Form>
							</FormikProvider>

							<div className="mt-4 mb-4">
								Không có tài khoản?{' '}
								<span>
									<Link href="/user/create-account">Tạo tài khoản ngay</Link>
								</span>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</>
	)
}

export default Login
