import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
} from 'react';

import { Input, InputLabel, TextArea } from '~/components/ui';

import { ErrorMessage, useField } from 'formik';

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

  return (
    <>
      <InputLabel name={label ? label : name} tooltipText={tooltipText} />

      {type === 'text-area' ? (
        <TextArea {...field} {...props} />
      ) : (
        <Input {...field} {...props} />
      )}

      <ErrorMessage name={name} component="div">
        {(
          message:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | Iterable<ReactNode>
            | ReactPortal
            | PromiseLikeOfReactNode
            | null
            | undefined
        ) => (
          <div className="ml-4 mt-2 -mb-1 text-red-300 font-manrope text-[10px]">
            {message}
          </div>
        )}
      </ErrorMessage>
    </>
  );
};

export { FormikInput };
