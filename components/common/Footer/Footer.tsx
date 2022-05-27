const Footer = () => {
  return (
    <div className="flex justify-between">
      <div id="col-left">
        <div>SheCodes Việt Nam</div>
        <div>MENTORSHIP PROGRAMME</div>
        <div>SINCE 2021</div>
      </div>

      <div id="col-right">
        <div id="row-top" className="flex">
          <div>
            <p>Điều khoản sử dụng</p>
            <p> Liên hệ</p>
          </div>
          <div className="flex">
            <div>LinkedIn</div>
            <div>Instagram</div>
            <div>Facebook</div>
          </div>
        </div>

        <div id="row-bot">
          <span>copywrite 2022 © all rights resereved</span>
        </div>
      </div>
    </div>

    // <div className="border-t border-gray-200">
    //   <div className="container flex mx-auto py-6 justify-center items-center md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    //     <span className="mx-3">@2021 SHECODES VIETNAM</span>
    //     <span className="hidden md:block mx-3"> | </span>
    //     <a className="mt-4 md:mt-0 mx-3">Contact</a>
    //     <a className="mt-2 md:mt-0 mx-3">Terms of use</a>
    //     <a className="mt-2 md:mt-0 mx-3">Donate</a>
    //     <a className="mt-2 md:mt-0 mx-3">FAQ</a>
    //   </div>
    // </div>
  )
}

export default Footer
