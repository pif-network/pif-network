import React from "react";
import logo from "../../public/images/svglogoWithoutBg.svg";
import Image from 'next/image';
import UserNav from './UserNav';


const Header = () => {
  return (
  <div class="ml-20 py-5 mx-auto">
    <Image src={logo} alt="logo" width={130} height={33}/>
    <UserNav/>
  </div>
  );
};

export default Header;
