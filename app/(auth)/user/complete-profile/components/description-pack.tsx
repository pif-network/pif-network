import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  InputLabel,
  TextArea,
} from '~/components/ui';

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
            <TextArea
              className="w-full h-24"
              placeholder="I am a student, majoring in CS. I am interested in AI and ML."
              {...field}
              onChange={e => {
                field.onChange(e);
                field.onBlur();
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      );
    }}
  />
);
