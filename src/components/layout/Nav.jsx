import { useState } from "react";
import { Link } from "react-router-dom";

// images
import logo from "../../assets/images/logo.png";

// icons
import newLogo from "../../assets/icons/new-logo.svg";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

function Nav() {
  const [showNav, setShowNav] = useState(true);

  return (
    <>
      <div
        className={`sticky w-full  transition-transform duration-300  z-50 ${
          showNav ? "translate-y-0 " : "-translate-y-full"
        }`}
      >
        <div className="py-[9px] bg-[#F6F7FA] text-[15px] text-[#8d94ad]">
          <nav className="container">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-5">
                <a href="#" className="hover:text-red flex items-center">
                  <PiInstagramLogoFill className="mr-3" size={"15px"} />
                  Instagram
                </a>
                <a href="#" className="hover:text-red flex items-center">
                  <IoLogoWhatsapp className="mr-3" size={"15px"} />
                  WhatsApp
                </a>
              </div>
              <div className="flex items-center space-x-5">
                <div className="text-[#212c3a]">
                  <span>Destek: </span>
                  <a className="hover:text-red" href="tel:+905391172222">
                    (539) 117-22-22
                  </a>
                </div>
                <Link className="hover:text-red" to={"/help"}>
                  Yardım
                </Link>
                <Link className="hover:text-red" to={"/"}>
                  En
                </Link>
                <Link
                  to={"/favorite"}
                  className="hover:text-red flex items-center"
                >
                  <FaHeart className="mr-3" />
                  Favoriler
                </Link>
              </div>
            </div>
          </nav>
        </div>
        <header className="py-[10px] bg-red ">
          <nav className="container">
            <div className="flex nav-holder justify-between items-center">
              <div className="flex items-center top-nav space-x-5 md:space-x-[80px]">
                <Link
                  to={"/"}
                  className=" text-white font-bold text-lg tracking-wider font-primary"
                >
                  <img src={logo} alt="" className="w-[100px]" />
                </Link>
                <div className="flex items-center space-x-4 md:space-x-[30px]">
                  <Link
                    to={"/"}
                    className="font-primary text-[14px]  font-normal leading-5  text-white"
                  >
                    Tüm ilanlar
                  </Link>
                  <Link
                    to={"/dealership-owners"}
                    className="font-primary text-[14px]  font-normal leading-5  text-white"
                  >
                    Galeriler
                  </Link>
                  <Link
                    to={"/lease"}
                    className="font-primary text-[14px]  font-normal leading-5  text-white"
                  >
                    Kiralama
                  </Link>
                </div>
              </div>
              <div className="flex nav-links items-center flex-1 justify-end md:space-x-[30px]">
                <Link
                  to={"/new-advertisement"}
                  className="flex items-center space-x-[4px]  py-[11px] px-[10px] rounded-[8px] bg-green hover:bg-[#85c01f] transition-all duration-300"
                >
                  <img src={newLogo} alt="add-Announcement" />
                  <p className="font-primary text-[14px] font-medium leading-[18px] text-white">
                    Yeni İlan
                  </p>
                </Link>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}

export default Nav;
