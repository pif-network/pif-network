import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
  InputLabel,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui';
import { FormInput } from '.';
import { GENDER_OPTION } from '~/shared/constant';

export const Step0InputPack = () => (
  <>
    <FormField
      name="name"
      render={({ field }) => {
        return (
          <FormItem>
            <InputLabel name={field.name} />
            <FormControl>
              <FormInput
                className="w-full"
                placeholder="edmondw"
                formTriggerBlur={field.onBlur}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
    <FormField
      name="gender"
      render={({ field }) => {
        return (
          <FormItem defaultValue={field.value}>
            <InputLabel name={field.name} />
            <Select
              onValueChange={v => {
                field.onChange(v); // <- Send value to RHF.
                field.onBlur(); // Make the field touched.
              }}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select your gender" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {Object.values(GENDER_OPTION).map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.displayText}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormItem>
        );
      }}
    />
  </>
);
