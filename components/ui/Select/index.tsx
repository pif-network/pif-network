import { Select as AntSelect } from 'antd'
import { useState } from 'react'
import { Tag } from '../Tag'
interface GeneralSelectProps {
	content: string
	options: Array<string>
}

const { Option } = AntSelect

const Select = ({ content, options }: GeneralSelectProps) => {
	const [selects, setSelects] = useState<string[]>([])

	const handleSelect = (value: string) => {
		console.log(selects)
		setSelects([...selects, value])
	}

	const handleDeselect = (value: string) => {
		setSelects(selects.filter(select => select !== value))
	}

	return (
		<div>
			<AntSelect
				mode="tags"
				style={{ width: '25%', color: 'black' }}
				showArrow
				placeholder={content}
				maxTagCount={0}
				value={selects}
				maxTagPlaceholder={content}
				onSelect={handleSelect}
				onDeselect={handleDeselect}
			>
				{options.map((option, i) => {
					return (
						<Option value={option} key={i}>
							{option}
						</Option>
					)
				})}
			</AntSelect>
			<div>
				{selects.map(select => {
					return (
						<Tag
							type="outlined"
							deletable
							onDelete={() => {
								handleDeselect(select)
							}}
						>
							{select}
						</Tag>
					)
				})}
			</div>
		</div>
	)
}

export default Select
