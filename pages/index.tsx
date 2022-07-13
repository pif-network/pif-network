import { useState, useEffect } from 'react'
import Head from 'next/head'

import { UserService } from '~/services'
import { Mentor } from '~/lib/types/user'
import { getErrorMessage } from '~/lib/types/service'
import {
	Skeleton,
	Hero,
	Benefits,
	Values,
	Feedback,
	Button,
	SectionTitle,
} from '~/components/ui'
import { MentorCard } from '~/components/mentor'
import { FlagLine } from '~/components/ui/svgs/Icons'
import { RANDOM_MENTORS } from '~/shared/constants'

const HomePage = () => {
	const [mentors, setMentors] = useState<Mentor[]>()

	useEffect(() => {
		const getAllMentors = async () => {
			try {
				const mentors = await UserService.getAllMentors()
				setMentors(mentors)
			} catch (error) {
				const errorMessage = getErrorMessage(error)
				console.log(errorMessage)
			}
		}

		getAllMentors()
	}, [])

	return (
		<>
			<Head>
				<title>Homepage</title>
			</Head>

			<div>
				<Hero />
				<Benefits />

				<section className="my-8 mx-6">
					<div className="flex flex-col justify-center md:max-w-[525px] md:m-auto xl:max-w-[1112px] xl:m-auto">
						<SectionTitle content="Những mentors đầu ngành" className="mb-6" />
						{/* {mentors ? (
							mentors.map(mentor => <MentorCard mentor={mentor} />) */}
						<div className="flex flex-col gap-4 items-center xl:flex-row xl:gap-2">
							{RANDOM_MENTORS ? (
								RANDOM_MENTORS.map((mentor, idx) => (
									<MentorCard key={idx} mentor={mentor} />
								))
							) : (
								<Skeleton />
							)}
						</div>
						<div className="self-center mt-10 md:self-end md:mt-24">
							<Button
								content="Explore more"
								fillType="outlined"
								size="medium"
								href="/search"
								rightIcon="ChevronRight"
							/>
						</div>
					</div>
				</section>

				<Values />
				<Feedback />
			</div>
		</>
	)
}

export default HomePage
