import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Image from 'next/image';
import homepageImg from "../public/images/undraw_Having_fun_re_vj4h 1.svg";



function HomePage() {
  return (
    <div>
      <Header/>

      {/* [] MastHead  */}
       <div class="p-12" id="background">
         <div class="container mx-auto flex content-middle justify-around md">
           
           <div class="py-10">
             <h1 class="text-white">SheCodes Mentorship</h1>
             <p class="text-white pb-8 pr-11">SheCodes Mentorship mang đến cho các bạn nữ cơ hội được tư vấn và hướng dẫn từ các cá nhân có nhiều kiến thức, kinh nghiệm cũng như kỹ năng trong lĩnh vực công nghệ.</p>
             <button class="text-white bg-white text-purple-500 px-10 py-3 rounded">Tham gia ngay</button>
           </div>
        
          <div class="flex content-end justify-end">
            <Image src={homepageImg} alt="homepageImg" 
            // width={500}
            />
          </div>

        </div>
       </div>

{/* [] Section 1: Benefit  */}
    <section id="section">
      <div class="container mx-auto py-20">
      
      <div class="flex w-16 bg-purple-700 p-1"></div>
      
      <h2>Những lợi ích mà SheCodes Mentorship đem lại</h2>

      {/* Row có 4 phần tử, mỗi cái là 1 cột 2 dòng */}
      <div class="flex">

        <div class="col sm mx-auto pr-5">
          <Image src={homepageImg} alt="homepageImg" /> 
          <p>Lựa chọn mentor 1-1 có trải nghiệm và background phù hợp với nhu cầu của bạn</p>
          </div>
        <div class="col sm mx-auto px-5">
          <Image src={homepageImg} alt="homepageImg" /> 
          <p>Nhận lời khuyên về lộ trình hướng nghiệp cũng như các kỹ năng cần chuẩn bị,...</p></div>
        
        <div class="col sm mx-auto px-5">
          <Image src={homepageImg} alt="homepageImg" /> 
          <p>Được chia sẻ về cách tự học và phát triển trong lĩnh vực mà bạn mong muốn</p></div>
       
        <div class="col sm mx-auto px-5">
          <Image src={homepageImg} alt="homepageImg" /> 
          <p>Liên lạc với mentor một cách linh hoạt, không ràng buộc về thời gian</p></div>
      </div>
      </div>
    </section>
        
{/* [] Break line  */}

{/* [] Section 2: Partner  */}
            {/* [] h1 Đội ngũ....  */}
            {/* [] logos  */}


      <Footer/>
    </div>
  );

};

export default HomePage;