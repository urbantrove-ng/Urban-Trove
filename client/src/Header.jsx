import React, { useState } from "react";
import "./assets/css/Header.css";
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
import Logo from "./assets/image/logo.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [isHoveredAccount, setIsHoveredAccount] = useState(false);
  const [isHoveredHelp, setIsHoveredHelp] = useState(false);
  const [username, setUsername] = useState("");

  function cart() {
    const cartRoute = "/cart";
    navigate(cartRoute);
  }

  function signIn() {
    navigate("/signIn");
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
    <div className="header">
      <nav>
        <div className="nav-start">
          <div className="logo-img">
            <img src={Logo} alt="Logo" />
          </div>
          <h1 onClick={home}>Urban Trove</h1>
        </div>

        <div className="search">
          <input type="text" placeholder="Search Products and Services" />
          <button className="search-icon">
            <BsSearch />
          </button>
        </div>

        <div className="nav-end">
          <div className="account-somn">
            <div
              className="dropdown"
              onMouseEnter={handleMouseEnterAccount}
              onMouseLeave={handleMouseLeaveAccount}
            >
              {isSignedIn ? (
                <div className="dropdown-content">
                  <button onClick={signIn}>Sign In</button>
                  <div className="dropdown-dets first" onClick={signIn}>
                    <RxPerson />
                    <p>My Account</p>
                  </div>
                  <div className="dropdown-dets" onClick={signIn}>
                    <RiFileList2Line />
                    <p>Orders</p>
                  </div>
                </div>
              ) : (
                <div className="dropdown-content">
                  <div className="dropdown-dets">
                    <MdPerson />
                    <p>My Account</p>
                  </div>
                  <div className="dropdown-dets">
                    <RiFileList2Fill />
                    <p>My Orders</p>
                  </div>
                  <div className="dropdown-dets">
                    <FaLocationDot />
                    <p>Delivery Address</p>
                  </div>
                  <button onClick={logoutUser}>Log Out</button>
                </div>
              )}
            </div>
            {isSignedIn ? (
              <button
                className="btn-account"
                onMouseEnter={() => setIsHoveredAccount(true)}
                onMouseLeave={() => setIsHoveredAccount(false)}
              >
                <RxPerson />
                Account
                {isHoveredAccount ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
            ) : (
              <button className="btn-account">
                <BsPersonFillCheck />
                Hi, {username}
              </button>
            )}
          </div>

          <div className="help-somn">
            <div
              className="dropdown"
              onMouseEnter={handleMouseEnterHelp}
              onMouseLeave={handleMouseLeaveHelp}
            >
              <div className="dropdown-content">
                <div className="dropdown-dets">
                  <TfiHeadphoneAlt />
                  <p>Help Center</p>
                </div>
                <div className="dropdown-dets">
                  <MdPayment />
                  <p>Payment Methods</p>
                </div>
                <div className="dropdown-dets">
                  <BsPatchQuestion />
                  <p>FAQS</p>
                </div>
                <div className="dropdown-dets">
                  <MdOutlinePhoneInTalk />
                  <p>Contact Us</p>
                </div>
              </div>
            </div>
            <button
              className="btn-account"
              onMouseEnter={() => setIsHoveredHelp(true)}
              onMouseLeave={() => setIsHoveredHelp(false)}
            >
              <BsQuestionCircle />
              Help
              {isHoveredHelp ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
          </div>

          <div className="carty">
            <button className="btn" onClick={cart}>
              <AiOutlineShoppingCart />
              Cart
            </button>
            {/* <span>7</span> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
