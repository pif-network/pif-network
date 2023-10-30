import { useState } from 'react';

import {
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  InputLabel,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui';
import { FIELD_METADATA, OFFER_METADATA } from '~/shared/constant';

import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons';
import { useFieldArray } from 'react-hook-form';

export const MentorInputPack = () => {
  const { append: appendFields } = useFieldArray({
    name: 'fields',
  });
  const { fields, append } = useFieldArray({
    name: 'offer',
  });
  const [fieldComboboxOpen, setFieldComboboxOpen] = useState(false);

  const computePlaceholderText = (name: string, fields: string[]): string => {
    let placeholderText = `Select your ${name}`;
    console.log('f', fields);

    if (fields.length === 0) placeholderText = `Select your ${name}`;
    else if (fields.length === 1) {
      placeholderText = fields[0]!;
    } else if (fields.length === 2) {
      placeholderText = fields.join(', ');
    } else if (fields.length > 2) {
      placeholderText = `${fields.length} items selected`;
    }
    return placeholderText;
  };

  return (
    <>
      <FormField
        name="fields"
        render={({ field }) => {
          return (
            <FormItem>
              <InputLabel name={field.name} />
              <Popover
                open={fieldComboboxOpen}
                onOpenChange={setFieldComboboxOpen}
              >
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={fieldComboboxOpen}
                    >
                      <span>
                        {computePlaceholderText(field.name, field.value)}
                      </span>
                      <ChevronDownIcon className="w-4 h-4" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent>
                  <Command>
                    <CommandInput placeholder="Type something" />
                    <CommandEmpty>No {field.name} found.</CommandEmpty>
                    <CommandGroup>
                      {Object.entries(FIELD_METADATA).map(([key, f]) => (
                        <CommandItem
                          key={key}
                          value={key}
                          onSelect={() => {
                            appendFields(key.toLowerCase());
                            field.onBlur(); // Make the field touched.
                          }}
                        >
                          {f.displayName}
                          <CheckIcon className="h-4 w-4" />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
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
                    <SelectItem
                      key={key.toLowerCase()}
                      value={key.toLowerCase()}
                    >
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
};
