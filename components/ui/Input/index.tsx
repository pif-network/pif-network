import { InformationCircleIcon } from '@heroicons/react/outline';
import { Input, Tooltip } from 'antd';
import { ErrorMessage, useField } from 'formik';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from 'react';

const FormikInput = ({
  name,
  type,
  label,
  tooltipText,
  ...props
}: {
  name: string;
  type?: string;
  label?: string;
  tooltipText?: string;
}) => {
  const [field, meta] = useField(name);

  const baseCn = 'h-[42px] rounded-lg border-gray-400';

  return (
    <>
      <InputLabel name={label ? label : name} tooltipText={tooltipText} />

      {type === 'password' ? (
        <Input.Password className={baseCn} {...field} {...props} />
      ) : type === 'text-area' ? (
        <Input.TextArea className="border-gray-400" {...field} {...props} />
      ) : (
        <Input className={baseCn} {...field} {...props} />
      )}

      <ErrorMessage name={name} component="div">
        {(message: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined) => (
          <div className="ml-4 mt-2 -mb-1 text-red-300 font-manrope text-[10px]">
            {message}
          </div>
        )}
      </ErrorMessage>
    </>
  );
};

export const InputLabel = ({
  name,
  tooltipText,
}: {
  name: string;
  tooltipText?: string;
}) => (
  <div className="flex gap-2 items-center">
    <label className="inline-block mt-4 pb-2 font-manrope font-semi-bold text-body-sm">
      {name.charAt(0).toUpperCase() + name.slice(1)}
    </label>
    {tooltipText && (
      <Tooltip
        placement="right"
        title={<span className="font-manrope text-caption">{tooltipText}</span>}
      >
        <InformationCircleIcon className="w-5 h-5 mt-[9px] stroke-gray-600 stroke-1" />
      </Tooltip>
    )}
  </div>
);

export default FormikInput;