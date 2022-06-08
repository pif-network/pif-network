import { SVGProps } from '.'

const InstagramLine = ({ colour, ...props }: SVGProps) => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M32 21C29.8244 21 27.6977 21.6451 25.8887 22.8538C24.0798 24.0625 22.6699 25.7805 21.8373 27.7905C21.0048 29.8005 20.7869 32.0122 21.2114 34.146C21.6358 36.2798 22.6834 38.2398 24.2218 39.7782C25.7602 41.3166 27.7202 42.3642 29.854 42.7886C31.9878 43.2131 34.1995 42.9952 36.2095 42.1627C38.2195 41.3301 39.9375 39.9202 41.1462 38.1113C42.3549 36.3023 43 34.1756 43 32C43 29.0826 41.8411 26.2847 39.7782 24.2218C37.7153 22.1589 34.9174 21 32 21ZM32 41C30.22 41 28.4799 40.4722 26.9999 39.4832C25.5198 38.4943 24.3663 37.0887 23.6851 35.4441C23.0039 33.7996 22.8257 31.99 23.1729 30.2442C23.5202 28.4984 24.3774 26.8947 25.636 25.636C26.8947 24.3774 28.4984 23.5202 30.2442 23.1729C31.99 22.8257 33.7996 23.0039 35.4441 23.6851C37.0887 24.3663 38.4943 25.5198 39.4832 26.9999C40.4722 28.4799 41 30.22 41 32C41 34.3869 40.0518 36.6761 38.364 38.364C36.6761 40.0518 34.3869 41 32 41ZM43 8H21C17.5522 8 14.2456 9.36964 11.8076 11.8076C9.36964 14.2456 8 17.5522 8 21V43C8 44.7072 8.33625 46.3977 8.98957 47.9749C9.64288 49.5521 10.6004 50.9852 11.8076 52.1924C14.2456 54.6304 17.5522 56 21 56H43C44.7072 56 46.3977 55.6637 47.9749 55.0104C49.5521 54.3571 50.9852 53.3995 52.1924 52.1924C53.3995 50.9852 54.3571 49.5521 55.0104 47.9749C55.6637 46.3977 56 44.7072 56 43V21C56 19.2928 55.6637 17.6023 55.0104 16.0251C54.3571 14.4479 53.3995 13.0148 52.1924 11.8076C50.9852 10.6004 49.5521 9.64288 47.9749 8.98957C46.3977 8.33625 44.7072 8 43 8ZM54 43C54 45.9174 52.8411 48.7153 50.7782 50.7782C48.7153 52.8411 45.9174 54 43 54H21C18.0826 54 15.2847 52.8411 13.2218 50.7782C11.1589 48.7153 10 45.9174 10 43V21C10 18.0826 11.1589 15.2847 13.2218 13.2218C15.2847 11.1589 18.0826 10 21 10H43C45.9174 10 48.7153 11.1589 50.7782 13.2218C52.8411 15.2847 54 18.0826 54 21V43ZM47 19C47 19.3956 46.8827 19.7822 46.6629 20.1111C46.4432 20.44 46.1308 20.6964 45.7654 20.8478C45.3999 20.9991 44.9978 21.0387 44.6098 20.9616C44.2219 20.8844 43.8655 20.6939 43.5858 20.4142C43.3061 20.1345 43.1156 19.7781 43.0384 19.3902C42.9613 19.0022 43.0009 18.6001 43.1522 18.2346C43.3036 17.8692 43.56 17.5568 43.8889 17.3371C44.2178 17.1173 44.6044 17 45 17C45.5304 17 46.0391 17.2107 46.4142 17.5858C46.7893 17.9609 47 18.4696 47 19Z"
        fill={colour}
      />
    </svg>
  )
}

export default InstagramLine
