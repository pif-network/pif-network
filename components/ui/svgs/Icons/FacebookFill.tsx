import { SVGProps } from '.'

const FacebookFill = ({ colour, ...props }: SVGProps) => {
	return (
		<svg
			width="29"
			height="55"
			viewBox="0 0 29 55"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<g clipPath="url(#clip0_2085_833)">
				<path
					d="M28.9598 0.396635V9.1226H23.8811C22.0264 9.1226 20.7756 9.51923 20.1286 10.3125C19.4816 11.1058 19.1581 12.2957 19.1581 13.8822V20.1292H28.6363L27.3747 29.9129H19.1581V55H9.25943V29.9129H1.0105V20.1292H9.25943V12.9237C9.25943 8.82512 10.3809 5.64653 12.6237 3.38792C14.8665 1.12931 17.8534 0 21.5843 0C24.7545 0 27.213 0.132212 28.9598 0.396635Z"
					fill={colour}
				/>
			</g>
			<defs>
				<clipPath id="clip0_2085_833">
					<rect width="29" height="55" fill="white" />
				</clipPath>
			</defs>
		</svg>
	)
}

export default FacebookFill