import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Row, Col } from "antd";

export default function RequestSuccess() {
  const router = useRouter();

  return (
    <div className="min-h-screen-85 overflow-hidden flex">
      <div className="overflow-hidden w-screen my-3 bg-white">
        <div className="bg-primary md:h-48 sm:h-40 w-screen" />
        <div className="flex justify-center -mt-8">
          <img
            src="/images/sample_profile.png"
            className="rounded-full border-solid border-white border-2 -mt-20 w-56 md:w-56 sm:w-46"
            alt="Mentor profile picture"
          />
        </div>
        <div className="text-center font-normal px-24 md:px-24 sm:px-6 pb-6 pt-8 md:pt-8 sm:pt-4 w-screen-85">
          <h3 className="text-5xl md:text-5xl sm:text-2xl leading-16 md:leading-16 sm:leading-8">
            Bạn đã đặt lịch hẹn thành công với mentor
            <br />
            Nguyễn Thanh Tùng
          </h3>
          <div className="text-2xl leading-8 pt-8 md:pt-8 sm:pt-5">
            <h5>Ngày: DD/MM/YY</h5>
            <h5>Giờ: HH:MM AM/PM</h5>
            <h5>(giờ Việt Nam)</h5>
          </div>
          <div className="text-2xl w-1/2 md:w-1/2 sm:w-full leading-8 pt-9 m-auto">
            <h5>
              Vui lòng kiểm tra lại e-mail và calendar để xem thông tin chi tiết
              về lịch hẹn của bạn nhé!
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
