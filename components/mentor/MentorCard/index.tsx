import Link from 'next/link'

import { Mentor } from '~/lib/types/user'
import { FlagLine, PinLine } from '~/components/ui/svgs/Icons'
import { Skeleton } from 'antd'
import { useEffect, useState } from 'react'
import MentorCardSkeleton from './MentorCardSkeleton'

const MentorCard = ({ mentor }: { mentor: Partial<Mentor> }) => {
	// const [isLoading, setIsLoading] = useState(true)

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setIsLoading(false)
	// 	}, 1000)
	// }, [])

	return (
		<Link href={`mentors/${mentor.id}`}>
			{/* {isLoading ? (
				<MentorCardSkeleton />
			) : ( */}
			<div
				className="card-mentor shadow-2xl hover:scale-105 rounded-xl overflow-hidden "
				// animate__animated animate__fadeInRight
				style={{ background: `url(${mentor.avatarUrl}) no-repeat center` }}
			>
				<div className="w-full h-full text-mask">
					<div className="absolute bottom-0 left-[30px] ">
						<h5 className="mb-0 text-white font-lora font-medium text-sub-heading">
							{mentor.name}
						</h5>
						{mentor.exp && (
							<p className="text-gray-200 font-manrope font-regular text-body-sm mb-3">
								{mentor.exp[0]?.name}
							</p>
						)}

						<ul className="mb-4 w-full">
							{mentor.exp && (
								<li className="flex">
									<PinLine colour="white" />
									<span className="text-white font-manrope font-regular text-body-md ml-2">
										{mentor.exp[0]?.position}
									</span>
								</li>
							)}

							<li className="flex">
								<FlagLine colour="white" width="16" height="16" />
								<span className="text-white font-manrope font-regular text-body-md ml-2">
									{mentor.domainKnowledge}
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			{/* )} */}
		</Link>
	)
}

export default MentorCard
