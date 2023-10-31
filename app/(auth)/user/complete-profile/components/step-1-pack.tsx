import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  InputLabel,
} from '~/components/ui';

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
              <Input className="w-full" placeholder="NEU" {...field} />
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
              <Input className="w-full" placeholder="CS" {...field} />
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
              <Input
                className="w-full"
                placeholder="Sinh viên, Software engineer, etc."
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
              <Input
                className="w-full"
                placeholder="PIF Network, etc."
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
