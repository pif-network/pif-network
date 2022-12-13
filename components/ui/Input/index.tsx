import { Input } from 'antd';
import { ErrorMessage, useField } from 'formik';

const FormikInput = ({
  name,
  type,
  ...props
}: {
  name: string;
  type?: string;
}) => {
  const [field, meta] = useField(name);
  const isPasswordInput = type === 'password';

  const cn = `h-12 mb-2 border-b-[1px] rounded-lg`;

  return (
    <>
      {isPasswordInput ? (
        <>
          <label className="inline-block pb-2 font-lora font-semi-bold">
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </label>
          <Input.Password
            className={cn}
            status={meta.error ? 'error' : ''}
            {...field}
            {...props}
          />
        </>
      ) : (
        <>
          <label className="inline-block pb-2 font-lora font-semi-bold">
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </label>
          <Input
            className={cn}
            status={meta.error ? 'error' : ''}
            {...field}
            {...props}
          />
        </>
      )}
      <ErrorMessage name={field.name} component="div">
        {message => (
          <div className="ml-4 mb-2 text-red-300 font-manrope text-[10px]">
            {message}
          </div>
        )}
      </ErrorMessage>
    </>
  );
};

export default FormikInput;
