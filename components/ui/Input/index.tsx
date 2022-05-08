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

  return (
    <>
      {isPasswordInput ? (
        <Input.Password
          className={`${meta.error && meta.touched ? 'border-red-500' : ''}`}
          {...field}
          {...props}
        />
      ) : (
        <Input
          className={`${meta.error && meta.touched ? 'border-red-500' : ''}`}
          {...field}
          {...props}
        />
      )}
      <ErrorMessage
        name={field.name}
        component="div"
        className="text-red-500"
      />
    </>
  )
}

export default FormikInput
