import { SVGProps } from '.';

const MortarboardHatFill = ({ colour, ...props }: SVGProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.996 9.6L12 14.4L24 7.2L12 0L0 7.2H12V9.6H3.996ZM0 9.6V19.2L2.4 16.536V11.04L0 9.6ZM12 24L6 20.4L3.6 18.96V11.76L12 16.8L20.4 11.76V18.96L12 24Z"
        fill={colour}
      />
    </svg>
  );
};

export default MortarboardHatFill;
