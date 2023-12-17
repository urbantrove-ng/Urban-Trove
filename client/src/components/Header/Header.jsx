import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxPerson } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";
import { BsPersonFillCheck } from "react-icons/bs";
import { RiFileList2Line, RiFileList2Fill } from "react-icons/ri";
import { MdPayment, MdPerson, MdOutlinePhoneInTalk } from "react-icons/md";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BsPatchQuestion } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BsQuestionCircle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/image/logo.png";

export default function Header() {
  const navigate = useNavigate();
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [isHoveredAccount, setIsHoveredAccount] = useState(false);
  const [isHoveredHelp, setIsHoveredHelp] = useState(false);
  const [username, setUsername] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  function cart() {
    const cartRoute = "/cart";
    navigate(cartRoute);
  }

  function signIn() {
    navigate("/login");
  }

  function home() {
    navigate("/");
  }

  const handleMouseEnterHelp = () => {
    setIsHoveredHelp(true);
  };

  const handleMouseLeaveHelp = () => {
    setIsHoveredHelp(false);
  };
  const handleMouseEnterAccount = () => {
    setIsHoveredAccount(true);
  };

  const handleMouseLeaveAccount = () => {
    setIsHoveredAccount(false);
  };

  function logoutUser() {}
  return (
    <div> 
      <nav className="fixed top-0 z-50 w-full px-[6rem] 1lg:px-[0.5rem] lg:px-[0.4rem] md:px-[1rem] xl:px-[3rem] sm:px-[1.3rem] flex sm:flex-wrap md:flex-wrap justify-between sm:gap-0 items-center font-ubuntu shadow-md bg-white">
        <div className="flex justify-center items-center gap-[0.3rem] sm:gap-0 text-20 font-semibold">
          <div className="h-24 sm:h-[3rem] md:h-[5rem] w-32 sm:w-[3rem] md:w-[5rem] py-[0.8rem]">
            <img src={Logo} className="w-full h-full object-cover" alt="Logo" />
          </div>
          <h1 className="cursor-pointer text-3xl sm:text-[1.2rem] md:text-[1.5rem] sm:font-sans" onClick={home}>
            Urban Trove
          </h1>
        </div>

        <div className="sm:order-1 md:order-1 sm:flex sm:mt-[-0.6rem] md:mt-[-1.5rem] md:flex sm:flex-grow-0 md:justify-center md:flex-grow-0 sm:flex-shrink-0 md:flex-shrink-0 sm:w-full md:w-full sm:mb-[0.5rem] md:mb-[0.5rem]">
          <input
            type="text"
            className="border-[0.5px] border-black outline-none font-sans px-3 py-1 text-[3rem] sm:text-[0.9rem] placeholder:text-[#6b7280] h-11 sm:h-[2.1rem] mr-[-2rem] rounded-full w-[28rem] 1lg:w-[20rem]  transition-all duration-200 focus:outline-none focus:w-[35rem] 1lg:focus:w-[20rem] bg-[#f3f4f6] text-base"
            placeholder="Search Products and Services"
          />
          <button className="mr-4 bg-[#f3f4f6] border-none cursor-pointer sm:bg-transparent md:bg-transparent">
            <BsSearch />
          </button>
        </div>

        <div className="flex gap-[3.5rem] sm:gap-[2rem] xl:gap-[2.5rem]">
          <div className=" group relative">
            <div
              className="absolute hidden z-50 left-[-6rem] sm:left-[-11rem]  top-6 sm:top-5 rounded-bl-[5px] rounded-br-[5px] py-[1rem] px-[2rem] group-hover:block sm:group-active:block bg-white group"
              onMouseEnter={handleMouseEnterAccount}
              onMouseLeave={handleMouseLeaveAccount}
            >
              {isSignedIn ? (
                <div className="">
                  <button
                    className="py-[0.5rem] hover:shadow-2xl active:shadow-3xl px-[2rem] bg-primaryTwo mt-[1rem] mb-[0.4rem] w-[12rem] h-[2.5rem] text-white border-0 rounded-[5px] uppercase"
                    onClick={signIn}
                  >
                    Sign In
                  </button>
                  <div
                    className="flex text-left gap-[0.5rem] text-[16px] cursor-pointer hover:bg-[#d6d3d1] font-[400] py-[0.5rem] px-[1rem] mt-[10px]"
                    onClick={signIn}
                  >
                    <RxPerson className="mt-[2px] text-[18px]" />
                    <p>My Account</p>
                  </div>
                  <div
                    className="flex text-left gap-[0.5rem] text-[16px] cursor-pointer hover:bg-[#d6d3d1] font-[400] py-[0.5rem] px-[1rem]"
                    onClick={signIn}
                  >
                    <RiFileList2Line className="mt-[3px] text-[18px]" />
                    <p>Orders</p>
                  </div>
                </div>
              ) : (
                <div className="dropdown-content">
                  <div className="flex text-left gap-[0.5rem] text-[16px] cursor-pointer hover:bg-[#d6d3d1] font-[400] py-[0.5rem] px-[1rem]">
                    <MdPerson className="mt-[2px] text-[18px]" />
                    <p>My Account</p>
                  </div>
                  <div className="flex text-left gap-[0.5rem] text-[16px] cursor-pointer hover:bg-[#d6d3d1] font-[400] py-[0.5rem] px-[1rem]">
                    <RiFileList2Fill className="mt-[2px] text-[18px]" />
                    <p>My Orders</p>
                  </div>
                  <div className="flex text-left gap-[0.5rem] text-[16px] cursor-pointer hover:bg-[#d6d3d1] font-[400] py-[0.5rem] px-[1rem]">
                    <FaLocationDot className="mt-[2px] text-[18px]" />
                    <p>Delivery Address</p>
                  </div>
                  <button onClick={logoutUser}>Log Out</button>
                </div>
              )}
            </div>
            {isSignedIn ? (
              <button
                className="flex items-center z-50 justify-center gap-[5px] sm:gap-0 text-[19px] font-[500] bg-transparent border-0 ml-[-2rem] cursor-pointer hover:text-primaryOne group-hover:text-primaryOne"
                onMouseEnter={() => setIsHoveredAccount(true)}
                onMouseLeave={() => setIsHoveredAccount(false)}
              >
                <RxPerson className="lg:hidden md:block"/>
                <span className="sm:hidden">Account</span>
                {isHoveredAccount ? <IoIosArrowUp className="sm:hidden"/> : <IoIosArrowDown className="sm:hidden"/>}
              </button>
            ) : (
              <button className="btn-account"> 
                <BsPersonFillCheck />
                Hi, {username}
              </button>
            )}
          </div>

          <div className="group relative">
            <div
              className={`absolute hidden z-10 left-[-6rem] sm:left-[-12rem] top-6 sm:top-5 rounded-bl-[5px] rounded-br-[5px] group-hover:block py-[1rem] px-[2rem] bg-white group w-[17rem]`}
              onMouseEnter={handleMouseEnterHelp}
              onMouseLeave={handleMouseLeaveHelp} 
            >
              <div className="dropdown-content">
                <div className="flex text-left gap-[0.5rem] text-[16px] cursor-pointer hover:bg-[#d6d3d1] font-[400] py-[0.5rem] px-[1rem]">
                  <TfiHeadphoneAlt className="mt-[2px] text-[18px]" />
                  <p>Help Center</p>
                </div>
                <div className="flex text-left gap-[0.5rem] text-[16px] cursor-pointer hover:bg-[#d6d3d1] font-[400] py-[0.5rem] px-[1rem]">
                  <MdPayment className="mt-[2px] text-[18px]" />
                  <p>Payment Methods</p>
                </div>
                <div className="flex text-left gap-[0.5rem] text-[16px] cursor-pointer hover:bg-[#d6d3d1] font-[400] py-[0.5rem] px-[1rem]">
                  <BsPatchQuestion className="mt-[2px] text-[18px]" />
                  <p>FAQS</p>
                </div>
                <div className="flex text-left gap-[0.5rem] text-[16px] cursor-pointer hover:bg-[#d6d3d1] font-[400] py-[0.5rem] px-[1rem]">
                  <MdOutlinePhoneInTalk className="mt-[2px] text-[18px]" />
                  <p>Contact Us</p>
                </div>
              </div>
            </div>
            <button
              className="flex items-center justify-center gap-[5px] sm:gap-0 text-[19px] font-[500] bg-white border-0 ml-[-2rem] cursor-pointer hover:text-primaryOne group-hover:text-primaryOne"
              onMouseEnter={() => setIsHoveredHelp(true)}
              onMouseLeave={() => setIsHoveredHelp(false)}
              onClick={toggleDropdown}
            >
              <BsQuestionCircle className="lg:hidden md:block"/>
              <span className="sm:hidden">Help</span>
              {isHoveredHelp ? <IoIosArrowUp className="sm:hidden" /> : <IoIosArrowDown className="sm:hidden"/>}
            </button>
          </div>

          <div className="relative ml-[-1.5rem] sm:ml-[-2rem]">
            <button
              className="flex items-center justify-center gap-[5px] text-[19px] font-[500] cursor-pointer border-0 bg-white hover:text-primaryOne"
              onClick={cart}
            >
              <AiOutlineShoppingCart />
              <span className="sm:hidden">Cart</span>
            </button>
            <span className="bg-primaryTwo py-[0.1rem] px-[0.05] text-[10px] w-[14px] h-[14px] rounded-[50px] absolute bottom-4 sm:bottom-[0.7rem] left-2 text-white flex justify-center items-center">
              0
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}
