import React from "react";
import logo from "../../public/images/svglogoWithoutBg.svg";
import Image from 'next/image';
import logOut_icon from '../../public/images/logOut_icon.png';
import user_icon from '../../public/images/user_icon.png';

const UserNav = () => {
    return (
    <div className="block rounded-lg border p-5"> 
                <div className="block-inline flex py-2">
                        <div className="rounded-full bg-purple-900 h-12 w-12 flex items-center justify-center">
                                <span className="text-white text-3xl pb-2">A</span></div>
                        <div className="px-5 pb-2 my-auto">
                                <span className="text-xl">Ariana Grande</span><br/>
                                <span>Mentee</span></div>
                </div>
            <div className="border"></div>
            <div className="">
                <div className="text-black py-2 flex items-center">
                        <Image src={user_icon} alt="user icon" width={40} height={40}/>
                        <a href="#" className="pl-2"> Xem thông tin cá nhân</a>
                        </div>
                <div className="text-black py-2 flex items-center">
                        <Image src={logOut_icon} alt="user icon" width={40} height={40}/>
                        <a href="#" className="pl-2"> Đăng xuất</a>
                        </div>
                </div>
        </div>
    );
  };
  
  export default UserNav;