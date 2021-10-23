import { Row, Col, Input } from "antd";

export default function MyProfile() {
  return (
    <div className="min-h-screen-85 overflow-hidden flex">
      <div className="overflow-hidden w-screen my-3 bg-white">
        <div className="bg-primary md:h-48 sm:h-40 w-screen">
          <div className="translate-y-1/3 ml-24">
            <img
              src="/images/sample_profile.png"
              className="rounded-full w-56 md:w-56 sm:w-46"
              alt="Mentor profile picture"
            />
          </div>
        </div>
        <div className="ml-92">
          <h3 className="pt-2 text-4xl font-bold leading-14">Ariana Grande</h3>
          <h6 className="mb-16 text-xl font-semibold text-primary leading-7">
            Đại học Bách khoa Hà Nội
          </h6>
        </div>
        <Row className="grid grid-cols-2 border-t border-gray-200 py-3">
          <Col className="bg-primary" sm={4}></Col>
          <Col sm={8}>
            <h6 className="mb-16 text-xl font-semibold leading-7">
              Tổng quan về bạn
            </h6>
          </Col>
        </Row>
      </div>
    </div>
  );
}
