import { Skeleton } from 'antd'

const MentorCardSkeleton = () => {
	return (
		<div
			className="card-mentor shadow-2xl hover:scale-105 rounded-xl overflow-hidden animate__animated animate__fadeIn"
			style={
				{
					// background: `url(https://scr.vn/wp-content/uploads/2020/07/Avatar-Facebook-tr%E1%BA%AFng.jpg) no-repeat center`,
				}
			}
		>
			<div className="w-full h-full text-mask">
				<div className="absolute bottom-0 left-[30px] ">
					<h5 className="mb-0 text-white font-lora font-medium text-sub-heading">
						<Skeleton.Input active={true} />
					</h5>

					<ul className="mb-4 w-full mt-3">
						<li className="flex mt-2">
							<Skeleton.Input active={true} />
						</li>

						<li className="flex mt-2">
							<Skeleton.Input active={true} />
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
export default MentorCardSkeleton

