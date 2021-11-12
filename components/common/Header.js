import React from "react";
import logo from "../../public/images/svglogoWithoutBg.svg";
import Image from "next/image";

const Header = () => {
  return (
    <div class="container mx-auto py-5">
      <Image src={logo} alt="logo" width={130} height={33} />
    </div>
  );
};

export default Header;
