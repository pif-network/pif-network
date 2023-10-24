import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
  Input,
  InputLabel,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui';
import { GENDER_OPTION } from '~/shared/constant';

export const Step0InputPack = () => (
  <>
    <FormField
      // control={form.control}
      name="name"
      render={({ field }) => {
        return (
          <FormItem>
            <InputLabel name={field.name} tooltipText="Full" />
            <FormControl>
              <Input placeholder="edmondw" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
    <FormField
      name="gender"
      render={({ field }) => {
        console.log(field);
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
    {/* <FormikSelect name="gender" /> */}
    {/* <FormikInput name="description" type="text-area" /> */}
  </>
);