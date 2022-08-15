import { Select as AntSelect } from 'antd'
import { useState } from 'react'
import { Tag } from '../Tag'
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
					style={{ width: '180px', color: 'black' }}
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
			<div className="flex justify-center gap-4">
				<div>
					<Select
						values={linhVuc}
						handleSelect={handleSelectLinhVuc}
						handleDeselect={handleDeselectLinhVuc}
						placeholder="Lĩnh vực"
						options={['Product', 'HR', 'SWE', 'Data']}
					></Select>
				</div>
				<div>
					<Select
						values={phamVi}
						handleSelect={handleSelectPhamVi}
						handleDeselect={handleDeselectPhamVi}
						placeholder="Phạm vi mentor"
						options={['Phỏng vấn thử', 'Viết resume', 'Tư vấn nghề nghiệp']}
					></Select>
				</div>
			</div>
			<div className="flex justify-center">
				{linhVuc.map(select => {
					return (
						<Tag
							type="outlined"
							color="primary"
							deletable
							onDelete={() => {
								handleDeselectLinhVuc(select)
							}}
						>
							{select}
						</Tag>
					)
				})}
				{phamVi.map(select => {
					return (
						<Tag
							type="filled"
							color="primary"
							deletable
							onDelete={() => {
								handleDeselectPhamVi(select)
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

export default FilterSection
