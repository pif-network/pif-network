import { Control } from 'react-hook-form';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
  Input,
  InputLabel,
} from '~/components/ui';

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
    {/* <FormikSelect name="gender" /> */}
    {/* <FormikInput name="description" type="text-area" /> */}
  </>
);
