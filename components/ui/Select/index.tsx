import { ReactChildren } from 'react'
import { ChevronRight } from '../svgs/Icons'

interface GeneralSelectProps {
	content: string
	className?: string
	options: Array<string>
}

const toggleSelectBox = () => {
	const selectBox = document.querySelector('.options-container')
	selectBox?.classList.toggle('hidden')
}

const selectOptions = (i: number) => {
	const options = document.querySelectorAll(
		'.option input[type="checkbox"]',
	) as NodeListOf<HTMLInputElement>
	const optionDivs = document.querySelectorAll('.option')
	options.forEach((option, index) => {
		if (index === i) {
			if (!option.checked) {
				option.checked = true
				optionDivs[index]?.classList.add('bg-primary-100')
			} else {
				option.checked = false
				optionDivs[index]?.classList.remove('bg-primary-100')
			}
		}
	})
}

const Select = ({ content, className, options }: GeneralSelectProps) => {
	return (
		<div className="flex justify-center">
			<div className="relative pl-8 select-box">
				<div
					onClick={toggleSelectBox}
					className="py-2.5 px-7 border rounded-t-lg w-96 border-primary-900 bg-white text-gray-700 font-manrope font-bold text-sub-heading selected"
				>
					<span className="grid grid-cols-8 gap-4">
						<div className="col-span-7">{content}</div>
						<div>
							<ChevronRight
								colour="black"
								className="transform rotate-90"
							></ChevronRight>
						</div>
					</span>
				</div>

				<div className="absolute hidden overflow-hidden overflow-y-auto bg-white border rounded-b-lg border-b-black border-l-black border-r-black w-96 options-container max-h-48 shadow-gray-200">
					{options.map((option, i) => (
						<div
							className="p-3 option hover:bg-primary-100 active:bg-primary-200"
							onClick={() => selectOptions(i)}
						>
							<input
								type="checkbox"
								id={option}
								className="w-4 h-4 checkbox accent-primary-400"
							></input>
							<label htmlFor={option} className="w-8 ml-3 text-body-lg">
								{option}
							</label>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Select
