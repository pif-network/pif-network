import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Head from 'next/head'

import { AuthService } from '~/services'
import { getErrorMessage } from '~/lib/types/service'
import { Link, Input as FormikInput, Button } from '~/components/ui'

import { object, string } from 'yup'
import { Field, Form, FormikProvider, useFormik } from 'formik'

import { Row, Col, Alert } from 'antd'
import { INTERNAL_URI } from '~/shared/constant'

const CreateAccount = () => {
	const [message, setMessage] = useState('')
	const router = useRouter()

	const validationSchema = object().shape({
		name: string()
			.min(2, 'Tên không được ngắn hơn 2 ký tự.')
			.max(40, 'Tên không được dài quá 40 ký tự.')
			.required('Vui lòng nhập tên của bạn.'),
		email: string()
			.min(6, 'Email không được ngắn hơn 6 ký tự.')
			.max(50, 'Email không được dài quá 50 ký tự.')
			.email('Địa chỉ email không hợp lệ.')
			.required('Vui lòng nhập địa chỉ email.'),
		password: string()
			.min(6, 'Password không được ngắn hơn 6 ký tự.')
			.max(128, 'Password không được dài quá 128 ký tự.')
			.required('Vui lòng nhập mật khẩu.'),
	})

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			password: '',
		},
		validationSchema,
		onSubmit: async data => {
			setMessage('')
			try {
				await AuthService.register(data)
				router.push(INTERNAL_URI.COMPLETE_PROFILE)
			} catch (error) {
				const errorMessage = getErrorMessage(error)
				console.log(errorMessage)

				switch (errorMessage) {
					case 'Email is already taken':
						setMessage('Email này đã được dùng đăng ký tài khoản.')
						break
					case undefined:
						setMessage('Đã có lỗi xảy ra. Vui lòng thử lại.')
						break
					default:
						setMessage(errorMessage)
				}
			}
		},
	})

	return (
		<>
			<Head>
				<title>Registering to &#60;product_name&#62;</title>
			</Head>

			<article className="bg-white mx-2 md:mx-6 lg:mx-12 xl:mx-20 px-0 md:px-16 py-0 md:py-12">
				<Row className="">
					{/* Left */}
					{/* <Col className="hidden md:inline md:pt-12" xs={0} sm={12}> */}
					<Col className="" xs={0} sm={0} md={0} lg={12}>
						<Image
							priority
							src="/images/create-new-account.svg"
							width={813}
							height={625}
						/>
					</Col>

					{/* Right */}
					<Col className="" sm={24} md={12}>
						<section className="md:max-w-lg m-8 pl-12 lg:pl-20 pr-12 py-12 lg:border-l-[1px]">
							{/* Page title */}
							<h4 className="pb-8 text-center font-lora word-[-0.23rem] text-heading">
								<span className="font-regular">Chào mừng bạn đến với</span>
								<br />
								<span className="text-primary-900 font-semi-bold">
									&#60;product_name&#62;!
								</span>
							</h4>

							<div className="pb-8 flex items-center justify-center">
								<Button
									content="Đăng ký với Google"
									fillType="outlined"
									size="medium"
									className="w-full border-[#0063CC]"
								/>
							</div>

							<FormikProvider value={formik}>
								<Form>
									{message && (
										<Alert
											className="mt-2 mb-6 font-manrope"
											message={message}
											type="error"
											showIcon
										/>
									)}
									<Field
										name="name"
										type="name"
										placeholder="Nhập họ và tên của bạn"
										as={FormikInput}
									/>
									<Field
										name="email"
										type="email"
										placeholder="Nhập email của bạn"
										as={FormikInput}
									/>
									<Field
										name="password"
										type="password"
										placeholder="Nhập mật khẩu của bạn"
										as={FormikInput}
									/>
									<div className="mt-8 flex items-center justify-center">
										{formik.isSubmitting ? (
											<div className=" flex justify-center items-center">
												<div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black" />
											</div>
										) : (
											<Button
												content="Tạo tài khoản ngay"
												type="submit"
												fillType="filled"
												size="medium"
												className="w-full rounded-lg"
											/>
										)}
									</div>
								</Form>
							</FormikProvider>
							<div className="mt-4 mb-4 text-center">
								Đã có tài khoản?{' '}
								<span>
									<Link href="/login">Đăng nhập</Link>
								</span>
							</div>
						</section>
					</Col>
				</Row>
			</article>
		</>
	)
}

export default CreateAccount
