import {
  FormControl,
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
import { FIELD_METADATA, OFFER_METADATA } from '~/shared/constant';

export const MentorInputPack = () => (
  <>
    <FormField
      name="fields"
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
                {Object.entries(FIELD_METADATA).map(([key, field]) => (
                  <SelectItem key={key.toLowerCase()} value={key.toLowerCase()}>
                    {field.displayName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormItem>
        );
      }}
    />
    <FormField
      name="offers"
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
                {Object.entries(OFFER_METADATA).map(([key, field]) => (
                  <SelectItem key={key.toLowerCase()} value={key.toLowerCase()}>
                    {field.displayName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormItem>
        );
      }}
    />

    <FormField
      name="bookingUrl"
      render={({ field }) => {
        return (
          <FormItem>
            <InputLabel name="Booking URL" />
            <FormControl>
              <Input
                className="w-full"
                placeholder="https://calendly.com"
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
