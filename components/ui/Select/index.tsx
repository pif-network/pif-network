import { ErrorMessage, useField, useFormik, useFormikContext } from 'formik';
import { InputLabel } from '../Input';
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
} from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui';

interface Props {
  tooltipText?: string;
  name: string;
  type?: string;
  label?: string;
}

const FormikSelect = ({ name, type, label, tooltipText }: Props) => {
  const [field, meta] = useField(name);
  const formik = useFormikContext<{ gender: string }>();

  const handleOnSelect = (value: string) => {
    formik.setFieldValue('gender', value);
    // formik.setTouched({
    //   ...formik.touched,
    //   gender: true,
    // });
  };

  return (
    <>
      <InputLabel name={label ? label : name} tooltipText={tooltipText} />

      <Select name={name} onValueChange={handleOnSelect}>
        <SelectTrigger>
          <SelectValue placeholder="I will tell my partners later." />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

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

export default FormikSelect;
