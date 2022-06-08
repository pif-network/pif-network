import { SVGProps } from '.'

const FlagLine = ({ colour, ...props }: SVGProps) => {
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
        d="M22.167 0.1275C22.2693 0.195956 22.3532 0.288554 22.4113 0.397119C22.4694 0.505684 22.4999 0.626877 22.5 0.75V12C22.5 12.1498 22.4551 12.2961 22.3711 12.4202C22.2872 12.5442 22.168 12.6403 22.029 12.696L21.75 12L22.029 12.696L22.0245 12.6975L22.0155 12.702L21.981 12.7155C21.7838 12.7939 21.5853 12.8689 21.3855 12.9405C20.9895 13.083 20.439 13.275 19.815 13.4655C18.591 13.8435 16.9965 14.25 15.75 14.25C14.4795 14.25 13.428 13.83 12.513 13.4625L12.471 13.4475C11.52 13.065 10.71 12.75 9.75 12.75C8.7 12.75 7.293 13.095 6.0945 13.4655C5.55788 13.6327 5.02616 13.8153 4.5 14.013V23.25C4.5 23.4489 4.42098 23.6397 4.28033 23.7803C4.13968 23.921 3.94891 24 3.75 24C3.55109 24 3.36032 23.921 3.21967 23.7803C3.07902 23.6397 3 23.4489 3 23.25V0.75C3 0.551088 3.07902 0.360322 3.21967 0.21967C3.36032 0.0790176 3.55109 0 3.75 0C3.94891 0 4.13968 0.0790176 4.28033 0.21967C4.42098 0.360322 4.5 0.551088 4.5 0.75V1.173C4.839 1.0545 5.244 0.918 5.685 0.783C6.909 0.408 8.505 0 9.75 0C11.01 0 12.036 0.4155 12.9315 0.7785L12.996 0.8055C13.929 1.182 14.742 1.5 15.75 1.5C16.8 1.5 18.207 1.155 19.4055 0.7845C20.0885 0.571218 20.7634 0.33306 21.429 0.0705L21.4575 0.06L21.4635 0.057H21.465L22.167 0.1275ZM21 1.8315C20.67 1.9485 20.28 2.082 19.851 2.214C18.636 2.592 17.043 2.9985 15.75 2.9985C14.421 2.9985 13.362 2.5695 12.4455 2.1975L12.4335 2.193C11.493 1.815 10.7085 1.5 9.75 1.5C8.7465 1.5 7.341 1.8435 6.1275 2.217C5.58016 2.38587 5.03747 2.56944 4.5 2.7675V12.417C4.83 12.3 5.22 12.1665 5.649 12.0345C6.864 11.655 8.457 11.25 9.75 11.25C11.0205 11.25 12.072 11.67 12.987 12.0375L13.029 12.0525C13.98 12.435 14.79 12.75 15.75 12.75C16.752 12.75 18.159 12.4065 19.3725 12.033C19.9198 11.8641 20.4625 11.6805 21 11.4825V1.833V1.8315Z"
        fill={colour}
      />
    </svg>
  )
}

export default FlagLine
