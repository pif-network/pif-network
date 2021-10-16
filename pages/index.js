import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Image from 'next/image';
import homepageImg from "../public/images/mashead.svg";
import section1_1 from "../public/images/section1_1.svg";
import section1_2 from "../public/images/section1_2.svg";
import section1_3 from "../public/images/section1_3.svg";
import section1_4 from "../public/images/section1_4.svg";
import Microsoft_logo from "../public/images/Microsoft_logo.png";
import Amazon_logo from "../public/images/Amazon_logo.png";
import Google_logo from "../public/images/Google_logo.png";
import Ohmni_logo from "../public/images/Ohmni_logo.svg";
import {Button} from "../components/button/Button";

function HomePage() {
  return (
    <div>
      <div className="container flex flex-row place-content-between">
      <div className="inline"><Header/></div>
      <div className="inline-flex py-5">
        <div className="inline"><Button variant="outline">Đăng nhập</Button></div>
        <div className="inline"><Button variant="contained">Đăng ký</Button></div>
      </div>
      </div>

      {/* [] MastHead  */}
       <div className="p-20 bg-gradient-to-b from-purple-600 to-purple-800 " id="background">
         <div className="container mx-auto">
           <div className="flex md">
           <div className="col inline py-5">
             <h1 className="text-white font-semibold text-4xl my-2">SheCodes Mentorship</h1>
             <p className="text-white pb-8 pr-11">SheCodes Mentorship mang đến cho các bạn nữ cơ hội được tư vấn và hướng dẫn từ các cá nhân có nhiều kiến thức, kinh nghiệm cũng như kỹ năng trong lĩnh vực công nghệ.</p>
             <button className="text-white bg-white text-purple-800 px-5 py-2 align-middle rounded">Tham gia ngay</button>
           </div>
        
           <div className="flex inline justify-center py-5">
            <Image src={homepageImg} alt="homepageImg" width={500}
            />
          </div>
          </div>
        </div>
       </div>

      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-10 bg-purple-800 p-1 m-5"></div>
          </div>
      
        <div className="flex justify-center">
          <h2 className="text-2xl text-center">Những lợi ích mà SheCodes Mentorship đem lại</h2></div>
        
        <div>
          <div className="flex flex-inline align-baseline">
            <div className="col sm px-auto m-5">
            <div className="flex justify-center py-5"><Image src={section1_1} alt="section1_1" width={200}/></div>
            <p className="text-center">Lựa chọn mentor 1-1 có trải nghiệm và background phù hợp với nhu cầu của bạn</p>
            </div>

          <div className="col sm px-auto m-5">
          <div className="flex justify-center py-5"><Image src={section1_2} alt="section1_2" width={200}/></div>
            <p className="text-center">Nhận lời khuyên về lộ trình hướng nghiệp cũng như các kỹ năng cần chuẩn bị...</p>
            </div>
        
         <div className="col sm px-auto m-5">
         <div className="flex justify-center py-5"><Image src={section1_3} alt="section1_3" width={200}/></div>
           <p className="text-center">Được chia sẻ về cách tự học và phát triển trong lĩnh vực mà bạn mong muốn</p>
           </div>
       
          <div className="col sm px-auto m-5">
          <div className="flex justify-center py-5 mt-3"><Image src={section1_4} alt="section1_4" width={200}/></div>
           <p className="text-center">Liên lạc với mentor một cách linh hoạt, không ràng buộc về thời gian</p>
           </div>
      </div>
      </div>
      </div>

      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-10 bg-purple-800 p-1 m-5"></div>
          </div>

        <div className="flex justify-center">
          <h2 className="text-2xl text-center">Đội ngũ SheCodes mentors đã và đang làm việc tại các công ty nào?</h2>
          </div>

          <div className="flex justify-center items-baseline mx-auto px-20">
          <div className="flex justify-center py-5 mx-5"><Image src={Microsoft_logo} alt="Microsoft_logo"/></div>
          <div className="flex justify-center py-5 mx-5"><Image src={Google_logo} alt="Google_logo"/></div>
          <div className="flex justify-center py-5 mx-5"><Image src={Amazon_logo} alt="Amazon_logo"/></div>
          <div className="flex justify-center py-5 mx-5 mb-16"><Image src={Ohmni_logo} alt="Ohmni_logo"/></div>
          </div> 
      
      </div>
      <div className="border"></div>
      <Footer/>
      
    </div>
    );
};

export default HomePage;