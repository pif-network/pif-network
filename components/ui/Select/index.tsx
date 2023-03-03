import { Select, SelectProps } from 'antd';
import { ErrorMessage, useField } from 'formik';
import { InputLabel } from '../Input';

interface Props extends SelectProps {
  tooltipText?: string;
  name: string;
  type: string;
  label: string;
}

const FormikSelect = ({
  name,
  type,
  label,
  tooltipText,
  options,
  ...props
}: Props) => {
  const [field] = useField(name);

  return (
    <>
      <InputLabel name={label ? label : name} tooltipText={tooltipText} />
      <Select
        showSearch
        placeholder="Ấn vào đây"
        optionFilterProp="label"
        filterOption={(input, option) =>
          (option?.value ?? '')
            .toString()
            .toLowerCase()
            .includes(input.toLowerCase())
        }
        options={options}
        {...field}
        {...props}
      />
      <ErrorMessage name={field.name} component="div">
        {message => (
          <div className="ml-4 mt-2 -mb-1 text-red-300 font-manrope text-[10px]">
            {message}
          </div>
        )}
      </ErrorMessage>
    </>
  );
};

export default FormikSelect;
