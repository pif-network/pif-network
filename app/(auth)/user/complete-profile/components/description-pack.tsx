import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  InputLabel,
} from '~/components/ui';
import { FormInput } from '.';

export const DescriptionPack = () => (
  <FormField
    name="description"
    render={({ field }) => {
      return (
        <FormItem>
          <InputLabel
            name="Giới thiệu"
            tooltipText="Đây là ấn tượng đầu tiên mà bạn muốn để lại cho mentor."
          />
          <FormControl>
            <FormInput
              className="w-full"
              placeholder="I am a student, majoring in CS. I am interested in AI and ML."
              formTriggerBlur={field.onBlur}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      );
    }}
  />
);
