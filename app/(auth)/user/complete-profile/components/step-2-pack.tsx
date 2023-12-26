import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  InputLabel,
} from '~/components/ui';
import { FormInput } from '.';

export const Step2InputPack = () => (
  <>
    <FormField
      name="location"
      render={({ field }) => {
        return (
          <FormItem>
            <InputLabel
              name="Thành phố của bạn"
              tooltipText="Thêm sự kết nối, thêm chủ đề để trò chuyên, vẹn cả đôi bên!"
            />
            <FormControl>
              <FormInput
                className="w-full"
                placeholder="Hà Nội, Hồ Chí Minh, etc."
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
      name="githubUrl"
      render={({ field }) => {
        return (
          <FormItem>
            <InputLabel name="GitHub URL" />
            <FormControl>
              <FormInput
                className="w-full"
                placeholder="https://github.com/pif-network/pif-network"
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
      name="linkedinUrl"
      render={({ field }) => {
        return (
          <FormItem>
            <InputLabel name="LinkedIn URL" />
            <FormControl>
              <FormInput
                className="w-full"
                placeholder="https://linkedin.com/company/shecodesvietnam"
                formTriggerBlur={field.onBlur}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  </>
);
