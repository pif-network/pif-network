import { SVGProps } from '.';

const GoogleFill = ({ colour, ...props }: SVGProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.8 21.6v-7.304c0-.672.573-1.217 1.28-1.217h3.84c.707 0 1.28.545 1.28 1.217V21.6M11.258 2.625l-8.32 5.627a1.2 1.2 0 00-.538.992v10.53c0 1.008.86 1.826 1.92 1.826h15.36c1.06 0 1.92-.818 1.92-1.826V9.244a1.2 1.2 0 00-.538-.992l-8.32-5.627c-.444-.3-1.04-.3-1.484 0z"
        stroke="#252525"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default GoogleFill;
