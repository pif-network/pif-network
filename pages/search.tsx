import { MentorCard } from '~/components/mentor'
import { SectionTitle } from '~/components/ui'
import { RANDOM_MENTORS } from '~/shared/constant'

const SearchPage = () => {
	const mentors = [...RANDOM_MENTORS, ...RANDOM_MENTORS, ...RANDOM_MENTORS]

	return (
		<div className="container mx-auto">
			<SectionTitle content="Lựa chọn mentor phù hợp với bạn tại đây" />
			<div className="flex flex-row flex-wrap gap-y-4 py-6">
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
