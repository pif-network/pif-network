import React from "react";

const Footer = () => {
  return (
    <div className="">
      <div className="container flex mx-auto py-6 justify-center items-center md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <span className="mx-3">@2021 SHECODES VIETNAM</span>
        <span className="hidden md:block mx-3"> | </span>
        <a className="mt-4 md:mt-0 mx-3">Contact</a>
        <a className="mt-2 md:mt-0 mx-3">Terms of use</a>
        <a className="mt-2 md:mt-0 mx-3">Donate</a>
        <a className="mt-2 md:mt-0 mx-3">FAQ</a>
      </div>
    </div>
  );
};

export default Footer;
