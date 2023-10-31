import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  InputLabel,
} from '~/components/ui';

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
              <Input
                className="w-full"
                placeholder="Hà Nội, Hồ Chí Minh, etc."
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
    <FormField
      name="github"
      render={({ field }) => {
        return (
          <FormItem>
            <InputLabel name="GitHub URL" />
            <FormControl>
              <Input
                className="w-full"
                placeholder="https://github.com/pif-network/pif-network"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
    <FormField
      name="linkedin"
      render={({ field }) => {
        return (
          <FormItem>
            <InputLabel name="LinkedIn URL" />
            <FormControl>
              <Input
                className="w-full"
                placeholder="https://linkedin.com/company/shecodesvietnam"
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
