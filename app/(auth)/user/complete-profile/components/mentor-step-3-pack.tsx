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
  InputLabel,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/components/ui';
import { FormInput } from '.';
import { FIELD_METADATA, OFFER_METADATA } from '~/shared/constant';

import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons';
import { useFieldArray } from 'react-hook-form';

export const MentorInputPack = () => {
  const { append: appendFields, remove: removeFields } = useFieldArray({
    name: 'fields',
  });
  const { append: appendOffers, remove: removeOffers } = useFieldArray({
    name: 'offers',
  });

  const computePlaceholderText = (name: string, fields: string[]): string => {
    let placeholderText = `Select your ${name}`;

    if (fields.length === 0) placeholderText = `Select your ${name}`;
    else if (fields.length === 1) {
      if (name === 'fields')
        placeholderText =
          FIELD_METADATA[
            fields[0]!.toUpperCase() as keyof typeof FIELD_METADATA
          ].displayName;
      else
        placeholderText =
          OFFER_METADATA[
            fields[0]!.toUpperCase() as keyof typeof OFFER_METADATA
          ].displayName;
    } else if (fields.length === 2) {
      placeholderText = fields
        .map(field => {
          if (name === 'fields')
            return FIELD_METADATA[
              field.toUpperCase() as keyof typeof FIELD_METADATA
            ].displayName;
          else
            return OFFER_METADATA[
              field.toUpperCase() as keyof typeof OFFER_METADATA
            ].displayName;
        })
        .join(', ');
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
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className="flex h-10 w-full items-center justify-between font-regular rounded-md border border-gray-400 bg-transparent px-3 py-2 shadow-sm ring-offset-white focus:outline-none focus:ring-1 focus:ring-black disabled:cursor-not-allowed disabled:opacity-50"
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
                          className="justify-between"
                          onSelect={() => {
                            if (field.value.includes(key.toLowerCase())) {
                              removeFields(
                                field.value.indexOf(key.toLowerCase())
                              );
                            } else {
                              appendFields(key.toLowerCase());
                              field.onBlur(); // Make the field touched.
                            }
                          }}
                        >
                          {f.displayName}
                          {field.value.includes(key.toLowerCase()) && (
                            <CheckIcon className="h-4 w-4" />
                          )}
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
            <FormItem>
              <InputLabel name={field.name} />
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className="flex h-10 w-full items-center justify-between font-regular rounded-md border border-gray-400 bg-transparent px-3 py-2 shadow-sm ring-offset-white focus:outline-none focus:ring-1 focus:ring-black disabled:cursor-not-allowed disabled:opacity-50"
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
                      {Object.entries(OFFER_METADATA).map(([key, f]) => (
                        <CommandItem
                          key={key}
                          value={key}
                          className="justify-between"
                          onSelect={() => {
                            if (field.value.includes(key.toLowerCase())) {
                              removeOffers(
                                field.value.indexOf(key.toLowerCase())
                              );
                            } else {
                              appendOffers(key.toLowerCase());
                              field.onBlur(); // Make the field touched.
                            }
                          }}
                        >
                          {f.displayName}
                          {field.value.includes(key.toLowerCase()) && (
                            <CheckIcon className="h-4 w-4" />
                          )}
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
        name="bookingUrl"
        render={({ field }) => {
          return (
            <FormItem>
              <InputLabel name="Booking URL" />
              <FormControl>
                <FormInput
                  className="w-full"
                  placeholder="https://calendly.com"
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
};
