import { SVGProps as ReactSVGProps } from 'react';

export interface SVGProps extends ReactSVGProps<SVGSVGElement> {
  colour?: string;
}

export { default as LinkedinLine } from './LinkedinLine';
export { default as FacebookFill } from './FacebookFill';
export { default as GithubFill } from './GithubFill';
export { default as InstagramLine } from './InstagramLine';
export { default as ChevronRight } from './ChevronRight';
export { default as CopyrightLine } from './CopyrightLine';
export { default as FlagLine } from './FlagLine';
export { default as LocationFill } from './LocationFill';
export { default as MortarboardHatFill } from './MortarboardHatFill';
export { default as PinLine } from './PinLine';
export { default as Search } from './Search';
export { default as GoogleFill } from './GoogleFill';
export { default as Home } from './Home';
export { default as SendingMailLine } from './SendingMailLine';
