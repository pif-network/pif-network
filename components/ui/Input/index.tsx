import { Input } from 'antd'
import { ErrorMessage, useField } from 'formik'

const FormikInput = ({
	name,
	type,
	...props
}: {
	name: string
	type?: string
}) => {
	const [field, meta] = useField(name)
	const isPasswordInput = type === 'password'

	const cn = `h-12 mb-2 border-b-[1px] border-gray-300 rounded-lg`

	return (
		<>
			{isPasswordInput ? (
				<Input.Password
					className={cn}
					status={meta.error ? 'error' : ''}
					{...field}
					{...props}
				/>
			) : (
				<Input
					className={cn}
					status={meta.error ? 'error' : ''}
					{...field}
					{...props}
				/>
			)}
			<ErrorMessage name={field.name} component="div">
				{message => (
					<div className="ml-4 mb-2 text-red-300 font-manrope text-[10px]">
						{message}
					</div>
				)}
			</ErrorMessage>
		</>
	)
}

export default FormikInput
