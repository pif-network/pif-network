import { extendTailwindMerge } from 'tailwind-merge';
const config = require("~/tailwind.config.js")

const customTwMerge = extendTailwindMerge({
  classGroups: {
    'font-size': [{ text: Object.keys(config.theme.colors) }],
    'font-weight': [{ font: Object.keys(config.theme.fontWeight) }],
    color: [{ color: ['text-white'] }],
  },
});

export default customTwMerge;
