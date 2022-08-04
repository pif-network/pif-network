import { Select as AntSelect } from 'antd'
import { useState } from 'react'
import { Tag } from '../Tag'
interface GeneralSelectProps {
	placeholder: string
	options: Array<string>
}

const { Option } = AntSelect

const Select = ({ placeholder, options }: GeneralSelectProps) => {
	const [selects, setSelects] = useState<string[]>([])

	const handleSelect = (value: string) => {
		setSelects([...selects, value])
	}

	const handleDeselect = (value: string) => {
		setSelects(selects.filter(select => select !== value))
	}
	return (
		<div className="w-full">
			<AntSelect
				mode="tags"
				style={{ width: '180px', color: 'black' }}
				showArrow
				placeholder={placeholder}
				maxTagCount={0}
				value={selects}
				maxTagPlaceholder={placeholder}
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

const FilterSection = () => {
	return (
		<div>
			<div className="flex justify-center">
				<div className="grid grid-cols-2">
					<Select
						placeholder="Lĩnh vực"
						options={['Product', 'HR', 'SWE', 'Data']}
					></Select>
					<Select
						placeholder="Phạm vi mentor"
						options={['Phỏng vấn thử', 'Viết resume', 'Tư vấn nghề nghiệp']}
					></Select>
				</div>
			</div>
		</div>
	)
}

export default FilterSection
