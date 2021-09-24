import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Image from 'next/image';
import homepageImg from "../public/images/undraw_Having_fun_re_vj4h 1.svg";



function HomePage() {
  return (
    <div>
      <Header/>
       <div class="p-20" id="background">
         <div class="container flex-row flex content-middle justify-around md">
           
           <div class="col py-10">
             <h1 class="text-white">SheCodes Mentorship</h1>
             <p class="text-white pb-8">SheCodes Mentorship mang đến cho các bạn nữ cơ hội được tư vấn và hướng dẫn từ các cá nhân có nhiều kiến thức, kinh nghiệm cững như kỹ năng trong lĩnh vực công nghệ.</p>
             <button class="text-white bg-white text-purple-500 px-10 py-3 rounded">Tham gia ngay</button>
           </div>
        
          <div class="col flex content-end justify-end">
            <Image src={homepageImg} alt="homepageImg" 
            // width={500}
            />
          </div>

        </div>
       </div>
      <Footer/>
    </div>
  );

};

export default HomePage;