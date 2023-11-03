import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  InputLabel,
} from '~/components/ui';
import { FormInput } from '.';

export const Step1InputPack = () => (
  <>
    <FormField
      name="schoolName"
      render={({ field }) => {
        return (
          <FormItem>
            <InputLabel
              name="Tên trường học"
              tooltipText="Mentor có thể là tiền bối của bạn đấy!"
            />
            <FormControl>
              <FormInput
                className="w-full"
                placeholder="NEU"
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
      name="major"
      render={({ field }) => {
        return (
          <FormItem>
            <InputLabel name="Chuyên ngành" />
            <FormControl>
              <FormInput
                className="w-full"
                placeholder="CS"
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
      name="title"
      render={({ field }) => {
        return (
          <FormItem>
            <InputLabel name="Công việc hiện tại" />
            <FormControl>
              <FormInput
                className="w-full"
                placeholder="Sinh viên, Software engineer, etc."
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
      name="workplace"
      render={({ field }) => {
        return (
          <FormItem>
            <InputLabel name="Nơi làm việc" />
            <FormControl>
              <FormInput
                className="w-full"
                placeholder="PIF Network, etc."
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
