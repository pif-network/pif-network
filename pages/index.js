import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Image from 'next/image';
import homepageImg from "../public/images/mashead.svg";
import section1_1 from "../public/images/section1_1.svg";
import section1_2 from "../public/images/section1_2.svg";
import section1_3 from "../public/images/section1_3.svg";
import section1_4 from "../public/images/section1_4.svg";

import Microsoft_logo from "../public/images/Microsoft_logo.svg";
import Amazon_logo from "../public/images/Amazon_logo.svg";
import Google_logo from "../public/images/Google_logo.svg";
import Ohmni_logo from "../public/images/Ohmni_logo.svg";



function HomePage() {
  return (
    <div>
      <Header/>

      {/* [] MastHead  */}
       <div class="p-20" id="background">
         <div class="container mx-auto flex content-middle justify-around md">
           
           <div class="py-10">
             <h1 class="text-white">SheCodes Mentorship</h1>
             <p class="text-white pb-8 pr-11">SheCodes Mentorship mang đến cho các bạn nữ cơ hội được tư vấn và hướng dẫn từ các cá nhân có nhiều kiến thức, kinh nghiệm cũng như kỹ năng trong lĩnh vực công nghệ.</p>
             <button class="text-white bg-white text-purple-800 px-10 py-3 rounded">Tham gia ngay</button>
           </div>
        
          <div class="flex content-end justify-end">
            <Image src={homepageImg} alt="homepageImg" 
            // width={500}
            />
          </div>

        </div>
       </div>

      <div class="container mx-auto">
        <div class="flex justify-center">
          <div class="w-10 bg-purple-800 p-1 m-5"></div>
          </div>
      
        <div class="flex justify-center">
          <h2>Những lợi ích mà SheCodes Mentorship đem lại</h2></div>
        
        <div>
          <div class="flex justify-center">
            <div class="mx-auto pr-5 m-10">
            <Image src={section1_1} alt="section1_1" /> 
            <p>Lựa chọn mentor 1-1 có trải nghiệm và background phù hợp với nhu cầu của bạn</p>
            </div>

          <div class="col sm mx-auto px-5 m-10">
            <Image src={section1_2} alt="section1_2" /> 
            <p>Nhận lời khuyên về lộ trình hướng nghiệp cũng như các kỹ năng cần chuẩn bị,...</p>
            </div>
        
         <div class="col sm mx-auto px-5 m-10">
           <Image src={section1_3} alt="section1_3" /> 
           <p>Được chia sẻ về cách tự học và phát triển trong lĩnh vực mà bạn mong muốn</p>
           </div>
       
          <div class="col sm mx-auto px-5 m-10">
           <Image src={section1_4} alt="section1_4" /> 
           <p>Liên lạc với mentor một cách linh hoạt, không ràng buộc về thời gian</p>
           </div>
      </div>
      </div>
      </div>

      <div class="container mx-auto">
        <div class="flex justify-center">
          <div class="w-10 bg-purple-800 p-1 m-5"></div>
          </div>

        <div class="flex justify-center">
          <h2>Đội ngũ SheCodes mentors đã và đang làm việc tại các công ty nào?</h2>
          </div>

          <div class="flex justify-center items-baseline mx-auto py-5">
          <Image src={Microsoft_logo} alt="Microsoft_logo" width={200} class="m-5"/> 
          <Image src={Amazon_logo} alt="Amazon_logo" width={200} class="m-5"/> 
          <Image src={Google_logo} alt="Google_logo" width={200} class="m-5"/> 
          <Image src={Ohmni_logo} alt="Ohmni_logo" width={200} class="m-5"/> </div>

      </div>
      <Footer/>
      
    </div>
    );
};

export default HomePage;