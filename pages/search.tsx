import { Card, Skeleton } from 'antd'
import { useEffect, useState } from 'react'
import { MentorCard } from '~/components/mentor'
import { SectionTitle } from '~/components/ui'
import { RANDOM_MENTORS } from '~/shared/constant'

const SearchPage = () => {
	const [mentors, setMentor] = useState([
		...RANDOM_MENTORS,
		...RANDOM_MENTORS,
		...RANDOM_MENTORS,
	])

	const observer = new IntersectionObserver(
		entries => {
			const lastCard = entries[0]!
			if (lastCard.isIntersecting) {
				setMentor([...mentors, ...RANDOM_MENTORS])
				observer.unobserve(lastCard.target)
			}
		},
		{
			threshold: 1,
		},
	)

	useEffect(() => {
		if (mentors.length < 24) {
			const container = document.getElementById('container')
			const cards = container!.children
			const lastCard = cards[cards.length - 1]
			observer.observe(lastCard!)
		}
	}, [mentors])

	return (
		<div className="container mx-auto">
			<SectionTitle content="Lựa chọn mentor phù hợp với bạn tại đây" />
			<div id="container" className="flex flex-row flex-wrap gap-y-4 py-6">
				{mentors.map((mentor, idx) => (
					<div key={idx} className="basis-1/2 lg:basis-1/4 px-2">
						<div className="flex justify-center items-center">
							<MentorCard mentor={mentor} />
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
export default SearchPage
