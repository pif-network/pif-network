import Link from 'next/link'

import { Mentor } from '~/lib/types/user'

import { ProjectFilled, UserOutlined } from '@ant-design/icons'

const MentorCard = ({ mentor }: { mentor: Mentor }) => {
  return (
    <Link href={`mentors/${mentor.id}`}>
      <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-2 lg:p-8">
        <a
          href=""
          className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
        >
          <div className="relative pt-0 lg:pt-40 pb-40 lg:pb-84 overflow-hidden">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src={`${mentor.avatarUrl}`}
              alt="Mentor Profile"
            />
            <div className="opacity-0 hover:opacity-100 duration-500 absolute text-white inset-4 z-10 flex flex-col justify-end">
              <h5 className="mb-0 lg:mb-2 text-white font-medium text-base lg:text-xl leading-6">
                {mentor.name}
              </h5>
              {mentor.exp && (
                <p className="text-sm leading-5 mb-0 lg:mb-2">
                  {mentor.exp[0]?.name}
                </p>
              )}

              <ul className="hidden lg:block mb-2 w-full rounded-lg">
                {mentor.exp && (
                  <li>
                    <UserOutlined className="text-3xl text-white" />
                    <span className="ml-2">{mentor.exp[0]?.position}</span>
                  </li>
                )}

                <li>
                  <ProjectFilled className="text-3xl text-white" />
                  <span className="ml-2">{mentor.domainKnowledge}</span>
                </li>
              </ul>
            </div>
          </div>
        </a>
      </div>
    </Link>
  )
}

export default MentorCard
