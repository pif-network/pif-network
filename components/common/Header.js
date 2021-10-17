import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="ml-20 py-4 mx-auto">
      <Image src="/images/logo.png" alt="logo" width={130} height={33} />
    </div>
  );
};

export default Header;
