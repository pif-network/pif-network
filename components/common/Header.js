import React from "react";
import logo from "../../public/images/svglogoWithoutBg.svg";
import Image from "next/image";

const Header = () => {
  return (
    <div className="ml-20 py-5 mx-auto">
      <Image src={logo} alt="logo" width={130} height={33} />
    </div>
  );
};

export default Header;
