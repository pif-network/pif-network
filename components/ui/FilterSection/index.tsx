import { Select as AntSelect, Tag as AntTag } from 'antd'
import { useState } from 'react'
import { Tag } from '../Tag'
import s from './FilterSection.module.css'

type TagColorPreset = 'gray' | 'primary' | 'red' | 'cyan'

interface GeneralSelectProps {
	placeholder: string
	options: Array<string>
	values: Array<string>
	handleSelect: (value: string) => void
	handleDeselect: (value: string) => void
}

const { Option } = AntSelect

const FilterSection = () => {
	const [phamVi, setPhamVi] = useState<string[]>([])
	const handleSelectPhamVi = (value: string) => {
		setPhamVi([...phamVi, value])
	}
	const handleDeselectPhamVi = (value: string) => {
		setPhamVi(phamVi.filter(select => select !== value))
	}

	const [linhVuc, setLinhVuc] = useState<string[]>([])
	const handleSelectLinhVuc = (value: string) => {
		setLinhVuc([...linhVuc, value])
	}
	const handleDeselectLinhVuc = (value: string) => {
		setLinhVuc(linhVuc.filter(select => select !== value))
	}

	const randomTagColor = (): TagColorPreset => {
		const colorID = Math.floor(Math.random() * 3)
		let tagColors: TagColorPreset = 'primary'
		if (colorID === 1) {
			tagColors = 'red'
			return tagColors
		} else if (colorID === 2) {
			tagColors = 'cyan'
			return tagColors
		}
		return tagColors
	}
	const tagRender = () => {
		const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
			event.preventDefault()
			event.stopPropagation()
		}
		return (
			<AntTag
				onMouseDown={onPreventMouseDown}
				style={{ marginRight: 3 }}
			></AntTag>
		)
	}

	const Select = ({
		placeholder,
		options,
		values,
		handleSelect,
		handleDeselect,
	}: GeneralSelectProps) => {
		return (
			<div>
				<AntSelect
					mode="tags"
					style={{ width: '300px', color: 'black' }}
					showArrow
					placeholder={placeholder}
					maxTagCount={0}
					value={values}
					maxTagPlaceholder={placeholder}
					onSelect={handleSelect}
					onDeselect={handleDeselect}
					className="mb-3"
				>
					{options.map((option, i) => {
						return (
							<Option value={option} key={i}>
								{option}
							</Option>
						)
					})}
				</AntSelect>
			</div>
		)
	}
	return (
		<div>
			<div className="flex justify-between gap-4 ml-84 mr-84">
				<div className="w-[300px]">
					<Select
						values={linhVuc}
						handleSelect={handleSelectLinhVuc}
						handleDeselect={handleDeselectLinhVuc}
						placeholder="Lĩnh vực"
						options={['Product', 'HR', 'SWE', 'Data']}
					></Select>
					<div>
						{linhVuc.map(select => {
							const tagColor = randomTagColor()
							return (
								<div className="inline-flex m-1.5">
									<Tag
										type="outlined"
										color={tagColor}
										deletable
										onDelete={() => {
											handleDeselectLinhVuc(select)
										}}
									>
										{select}
									</Tag>
								</div>
							)
						})}
					</div>
				</div>
				<div className="w-[300px]">
					<Select
						values={phamVi}
						handleSelect={handleSelectPhamVi}
						handleDeselect={handleDeselectPhamVi}
						placeholder="Phạm vi mentor"
						options={['Phỏng vấn thử', 'Viết resume', 'Tư vấn nghề nghiệp']}
					></Select>
					<div>
						{phamVi.map(select => {
							const tagColor = randomTagColor()
							return (
								<div className="inline-flex m-0.5">
									<Tag
										type="filled"
										color={tagColor}
										deletable
										onDelete={() => {
											handleDeselectPhamVi(select)
										}}
									>
										{select}
									</Tag>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default FilterSection
