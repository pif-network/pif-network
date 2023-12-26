import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';
import config from '~/tailwind.config.js';

const customTwMerge = extendTailwindMerge({
  classGroups: {
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    'font-size': [{ text: Object.keys(config.theme?.fontSize!) }],
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    'font-weight': [{ font: Object.keys(config.theme?.fontWeight!) }],
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    color: [{ color: Object.keys(config.theme?.colors!) }],
  },
});

export function twMerge(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}

export default twMerge;
