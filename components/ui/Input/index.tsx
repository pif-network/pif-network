import { twMerge } from '~/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '~/components/ui/tooltip';

import { forwardRef } from 'react';
import { InformationCircleIcon } from '@heroicons/react/outline';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        className={twMerge(
          'h-10 px-2 rounded-lg border border-gray-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black',
          className
        )}
        type={type}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={twMerge(
          'h-[64px] px-2 py-1 rounded-lg border border-gray-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
TextArea.displayName = 'TextArea';

const InputLabel = ({
  name,
  tooltipText,
}: {
  name: string;
  tooltipText?: string;
}) => (
  <div className="flex gap-2 items-center">
    <label className="inline-block mt-4 pb-2 font-manrope font-semi-bold text-body-sm">
      {name.charAt(0).toUpperCase() + name.slice(1)}
    </label>
    {tooltipText && (
      <Tooltip delayDuration={400}>
        <TooltipTrigger asChild>
          <InformationCircleIcon className="w-5 h-5 mt-[9px] stroke-gray-600 stroke-1" />
        </TooltipTrigger>
        <TooltipContent>{tooltipText}</TooltipContent>
      </Tooltip>
    )}
  </div>
);

export { Input, TextArea, InputLabel };
