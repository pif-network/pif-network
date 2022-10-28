import Link from 'next/link'

import {
  GithubFilled,
  LinkedinFilled,
  CalendarOutlined,
  ProjectFilled,
} from '@ant-design/icons'

const MentorProfile = () => {
  return <>
    <section className="min-h-screen-85 overflow-hidden min-w-screen">
      <div className="bg-primary text-white float-none md:float-left w-full md:w-2/12 h-48 md:min-h-screen">
        <div className="relative">
          <div className="flex justify-center -translate-y-0 sm:-translate-y-1/4 md:-translate-y-0 md:translate-x-1/2">
            <img
              src="/images/sample_profile.png"
              className="rounded-full mt-48 w-56 md:w-56 sm:w-46"
              alt="Mentor profile picture"
            />
          </div>{' '}
        </div>
      </div>
      <div className="float-none md:float-right w-full md:w-10/12 min-h-screen border-t border-gray-100">
        <button className="mt-36 md:mt-20 ml-32 md:mr-24 float-none md:float-right py-3 px-4 rounded bg-primary text-white hover:bg-violet focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-opacity-50">
          Đặt lịch hẹn
        </button>
        <div className="relative">
          <div className="md:mt-40 mt-8 w-4/5 md:ml-56 ml-8">
            <h1 className="pt-1 pb-4 text-2xl md:text-6xl md:leading-20 md:font-medium">
              Nguyễn Thanh Tùng
            </h1>
            <h5 className="text-base md:text-2xl md:leading-8 pt-4 pb-6">
              Nơi làm việc{' '}
            </h5>
            <div className="pb-4">
              <Link href="https://github.com/npthao1312">

                <LinkedinFilled className="text-3xl text-primary mr-3" />

              </Link>
              <Link href="https://github.com/npthao1312">

                <GithubFilled className="text-3xl text-primary" />

              </Link>
            </div>
            <hr />
            <p className="pt-3 pb-5 text-base leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
            </p>
            <ul className="mb-6 w-full rounded-lg">
              <li>
                <ProjectFilled className="text-3xl text-primary" />
                <span className="ml-2">Lĩnh vực mentor</span>
              </li>
              <li>
                <CalendarOutlined className="text-3xl text-primary" />
                <span className="ml-2">Thời gian mentor</span>
              </li>
            </ul>
            <hr />
            <h5 className="text-2xl leading-8 pt-4 pb-4">
              Kiến thức chuyên môn{' '}
            </h5>
            <div className="pb-6">
              <span className="text-sm font-bold inline-block py-3 px-3 rounded-2xl bg-lightgray last:mr-0 mr-2">
                Lập trình
              </span>
              <span className="text-sm font-bold inline-block py-3 px-3 rounded-2xl bg-lightgray last:mr-0 mr-2">
                Thiết kế UI/UX
              </span>
              <span className="text-sm font-bold inline-block py-3 px-3 rounded-2xl bg-lightgray last:mr-0 mr-2">
                pink
              </span>
            </div>
            <hr />
            <h5 className="text-2xl leading-8 pt-4">Sở thích </h5>
            <div className="pt-4 pb-6">
              <span className="text-sm font-bold inline-block py-3 px-3 rounded-2xl bg-lightgray last:mr-0 mr-2">
                Đọc sách
              </span>
              <span className="text-sm font-bold inline-block py-3 px-3 rounded-2xl bg-lightgray last:mr-0 mr-2">
                Lướt web
              </span>
              <span className="text-sm font-bold inline-block py-3 px-3 rounded-2xl bg-lightgray last:mr-0 mr-2">
                pink
              </span>
            </div>{' '}
          </div>
        </div>
      </div>
    </section>
  </>;
}

export default MentorProfile
