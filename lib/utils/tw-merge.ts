import { extendTailwindMerge } from 'tailwind-merge';
const config = require('~/tailwind.config.js');

const customTwMerge = extendTailwindMerge({
  classGroups: {
    'font-size': [{ text: Object.keys(config.theme.fontSize) }],
    'font-weight': [{ font: Object.keys(config.theme.fontWeight) }],
    color: [{ color: Object.keys(config.theme.colors) }],
  },
});

export default customTwMerge;
