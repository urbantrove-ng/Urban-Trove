import { RxPerson } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";
import { BsPersonFillCheck } from "react-icons/bs";
import { RiFileList2Line } from "react-icons/ri";
import { RiLogoutCircleLine } from "react-icons/ri";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { MdPayment, MdPerson, MdOutlinePhoneInTalk } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BsPatchQuestion } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BsQuestionCircle } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/image/logo.png";
import { useEffect, useState } from "react";
import { useUrban } from "../../context/UrbanContext";
import CategoryModal from "../Categories/CategoryModal";
import Category from "../Categories/Category";
import useLogOut from "../Account/useLogOut";

export default function Header() {
  const [isHoveredAccount, setIsHoveredAccount] = useState(false);
  const [isHoveredHelp, setIsHoveredHelp] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const {
    setIsModalOpen,
    isModalOpen,
    auth,
    totalNumber: counter,
    addedToCart,
    removedFromCart,
  } = useUrban();
  const [fashion, setFashion] = useState(false);
  const [electronic, setElectronics] = useState(false);
  const [home, setHome] = useState(false);
  const [health, setHealth] = useState(false);
  const [Sports, setSports] = useState(false);
  const [Books, setBooks] = useState(false);
  const [Food, setFood] = useState(false);
  const [Electrical, setElectrical] = useState(false);
  const [automMobile, setAutomobile] = useState(false);
  const [showCategory, setShowCategory] = useState(true);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isModalOpen) {
      setOpen(false);
    }
  }, [isModalOpen]);
  const toggleNavbar = () => {
    setOpen((prev) => !prev);
    setIsModalOpen((prev) => !prev);
  };

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
  const shortHashEmail = auth?.email ? `${auth?.email.slice(0, 4)}....` : "";
  const firstname = auth?.fullname?.split(" ")[0];
  const name = auth.fullname ? firstname : shortHashEmail;
  const Logout = useLogOut();
  const logOutHandler = async () => {
    window.alert("Are you sure you want to logout?");

    if (window.confirm) Logout();
  };

  return (
    <header>
      {addedToCart && (
        <div className=" h-[40px] fixed top-0 bg-primaryTwo w-full z-[999] flex justify-center items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className=" w-8 h-8 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>

          <p className=" text-white lg:text-xl">Product added successfully</p>
        </div>
      )}
      {removedFromCart && (
        <div className=" h-[40px] fixed top-0 bg-primaryTwo w-full z-[999] flex justify-center items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className=" w-8 h-8 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>

          <p className=" text-white lg:text-xl">
            Product was removed from cart successfully
          </p>
        </div>
      )}
      <div className=" fixed top-0  z-[998] w-full  flex flex-col lg:h-[120px] h-[90px] bg-white shadow-md ">
        <nav className="flex lg:justify-around justify-between z-[998]   px-2 lg:px-0  items-center lg:h-[96px] h-[40px] font-ubuntu ">
          <div className="flex justify-center items-center   ">
            <div className="flex items-center justify-end lg:hidden">
              <input
                type="checkbox"
                name="hamburger"
                id="hamburger"
                className="peer z-[1000] hidden"
                checked={open}
                onChange={toggleNavbar}
              />
              <label
                htmlFor="hamburger"
                className="peer-checked:hamburger block relative p-6 -mr-6 cursor-pointer xl:hidden z-[1000]"
              >
                <div
                  aria-hidden="true"
                  className="m-auto h-0.5 w-5 rounded bg-black transition duration-300"
                ></div>
                <div
                  aria-hidden="true"
                  className={
                    !open
                      ? "m-auto mt-[2px] h-0.5 w-5 rounded bg-black transition duration-300"
                      : "hidden"
                  }
                ></div>
                <div
                  aria-hidden="true"
                  className="m-auto mt-[2px] h-0.5 w-5 rounded bg-black transition duration-300"
                ></div>
              </label>

              <div
                className={`${
                  open
                    ? "peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%]  bg-[#f3f4f6] z-[999] shadow-xl transition duration-300 lg:w-auto lg:static xl:shadow-none xl:translate-x-0"
                    : "fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-[#f3f4f6]  z-[999] shadow-xl transition duration-300 lg:w-auto lg:static xl:shadow-none xl:translate-x-0"
                }`}
              >
                <div className="flex  h-full justify-between  lg:hidden  flex-row">
                  {showCategory && (
                    <ul className=" pt-20 w-full">
                      <li className="h-[48px] hover:bg-white font-semibold px-2 flex justify-around border-t-2 border-gray-400  gap-0  items-center w-full   cursor-pointer">
                        All Categories
                      </li>
                      <li
                        className={
                          !fashion
                            ? " h-[48px] hover:bg-white px-2 flex justify-around border-y-2 border-gray-400  gap-0  items-center w-full   cursor-pointer"
                            : " bg-white   hover:bg-white px-2 border-y-2 border-gray-400  gap-0  items-center w-full   cursor-pointer "
                        }
                      >
                        <div className=" flex items-center w-full">
                          <p
                            className={
                              !fashion
                                ? " w-full h-[48px] flex justify-start items-center"
                                : "w-full h-[48px] flex justify-start items-center font-semibold"
                            }
                          >
                            Fashion & Accessories{" "}
                          </p>
                          {!fashion ? (
                            <svg
                              onClick={() => {
                                setFashion(true);
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-full w-6 flex-shrink-0 transform transition-transform duration-300"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                              />
                            </svg>
                          ) : (
                            <svg
                              onClick={() => {
                                setFashion(false);
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-full w-6 flex-shrink-0 transform transition-transform duration-300 rotate-180"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 12h14"
                              />
                            </svg>
                          )}
                        </div>

                        <div
                          className={
                            fashion
                              ? " lg:hidden  flex flex-col  gap-4"
                              : " hidden "
                          }
                        >
                          <ul className=" flex flex-col  gap-4 ">
                            <li className="h-[38px] hover:cursor-pointer hover:text-red-500 border-b-2 flex justify-start items-center">
                              Clothing (Men&apos;s, Women&apos;s,
                              Children&apos;s)
                            </li>
                            <li className="h-[38px] hover:cursor-pointer hover:text-red-500 border-b-2 flex justify-start items-center">
                              Shoes & Footwear
                            </li>
                            <li className="h-[38px] hover:cursor-pointer hover:text-red-500 border-b-2 flex justify-start items-center">
                              Handbags & Accessories
                            </li>
                            <li className="h-[38px] hover:cursor-pointer hover:text-red-500 border-b-2 flex justify-start items-center">
                              Jewelry & Watches
                            </li>
                          </ul>
                        </div>
                      </li>
                      {/* {electronic} */}
                      <li
                        className={
                          !electronic
                            ? " h-[48px] hover:bg-white px-2 flex justify-around border-b-2 border-gray-400  gap-0  items-center w-full   cursor-pointer"
                            : " bg-white  hover:bg-white px-2 border-b-2 border-gray-400  gap-0  items-center w-full   cursor-pointer "
                        }
                      >
                        <div className=" flex items-center w-full">
                          <p
                            className={
                              !electronic
                                ? " w-full h-[48px] flex justify-start items-center"
                                : "w-full h-[48px] flex justify-start items-center font-semibold"
                            }
                          >
                            Electronics & Gadgets
                          </p>
                          {!electronic ? (
                            <svg
                              onClick={() => {
                                setElectronics(true);
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-full w-6 flex-shrink-0 transform transition-transform duration-300"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                              />
                            </svg>
                          ) : (
                            <svg
                              onClick={() => {
                                setElectronics(false);
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-full w-6 flex-shrink-0 transform transition-transform duration-300 rotate-180"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 12h14"
                              />
                            </svg>
                          )}
                        </div>
                        <div
                          className={
                            electronic
                              ? " lg:hidden  flex flex-col  gap-4"
                              : " hidden "
                          }
                        >
                          <ul className=" flex flex-col  gap-4 ">
                            <li className="h-[38px]  hover:cursor-pointer hover:text-red-500 border-b-2 flex justify-start items-center">
                              Smartphones & Tablets
                            </li>
                            <li className="h-[38px]  hover:cursor-pointer hover:text-red-500 border-b-2 flex justify-start items-center">
                              Computers & Laptops
                            </li>
                            <li className="h-[38px]  hover:cursor-pointer hover:text-red-500 border-b-2 flex justify-start items-center">
                              Cameras & Photography Equipment
                            </li>
                            <li className="h-[38px]  hover:cursor-pointer hover:text-red-500 border-b-2 flex justify-start items-center">
                              Audio & Video Devices
                            </li>
                          </ul>
                        </div>
                      </li>
                      {/* {home} */}
                      <li
                        className={
                          !home
                            ? " h-[48px] hover:bg-white px-2 flex justify-around border-b-2 border-gray-400  gap-0  items-center w-full   cursor-pointer"
                            : " bg-white  pl-4   hover:bg-white px-2 border-b-2 border-gray-400  gap-0  items-center w-full   cursor-pointer "
                        }
                      >
                        <div className=" flex items-center w-full">
                          <p
                            className={
                              !home
                                ? " w-full h-[48px] flex justify-start items-center"
                                : "w-full h-[48px] flex justify-start items-center font-semibold"
                            }
                          >
                            Home & Garden
                          </p>
                          {!home ? (
                            <svg
                              onClick={() => {
                                setHome(true);
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-full w-6 flex-shrink-0 transform transition-transform duration-300"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                              />
                            </svg>
                          ) : (
                            <svg
                              onClick={() => {
                                setHome(false);
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-full w-6 flex-shrink-0 transform transition-transform duration-300 rotate-180"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 12h14"
                              />
                            </svg>
                          )}
                        </div>
                        <div
                          className={
                            home
                              ? " lg:hidden  flex flex-col  gap-4"
                              : " hidden "
                          }
                        >
                          <ul className=" flex flex-col  gap-4 ">
                            <li className="h-[38px] hover:cursor-pointer hover:text-red-500 border-b-2 flex justify-start items-center">
                              Furniture & Decor
                            </li>
                            <li className="h-[38px] hover:cursor-pointer hover:text-red-500 border-b-2 flex justify-start items-center">
                              Kitchenware & Cooking Utensils
                            </li>
                            <li className="h-[38px] hover:cursor-pointer hover:text-red-500 border-b-2 flex justify-start items-center">
                              Home Appliances
                            </li>
                            <li className="h-[38px] hover:cursor-pointer hover:text-red-500 border-b-2 flex justify-start items-center">
                              Gardening Supplies
                            </li>
                          </ul>
                        </div>
                      </li>
                      {/* {health} */}
                      <li
                        className={
                          !health
                            ? " h-[48px] hover:bg-white px-2 flex justify-around border-b-2 border-gray-400  gap-0  items-center w-full   cursor-pointer"
                            : " bg-white   hover:bg-white px-2 border-b-2 border-gray-400  gap-0  items-center w-full   cursor-pointer "
                        }
                      >
                        <div className=" flex items-center w-full ">
                          <p
                            className={
                              !health
                                ? " w-full h-[48px] flex justify-start items-center"
                                : "w-full h-[48px] flex justify-start items-center font-semibold"
                            }
                          >
                            Health & Beauty
                          </p>
                          {!health ? (
                            <svg
                              onClick={() => {
                                setHealth(true);
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-full w-6 flex-shrink-0 transform transition-transform duration-300"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                              />
                            </svg>
                          ) : (
                            <svg
                              onClick={() => {
                                setHealth(false);
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-full w-6 flex-shrink-0 transform transition-transform duration-300 rotate-180"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 12h14"
                              />
                            </svg>
                          )}
                        </div>
                        <div
                          className={
                            health
                              ? " lg:hidden  flex flex-col  gap-4"
                              : " hidden "
                          }
                        >
                          <ul className=" flex flex-col  gap-4 ">
                            <li className="h-[38px] hover:cursor-pointer hover:text-red-500 border-b-2 flex justify-start items-center">
                              Skincare Products
                            </li>
                            <li className="h-[38px] hover:cursor-pointer hover:text-red-500 border-b-2 flex justify-start items-center">
                              Haircare Products
                            </li>
                            <li className="h-[38px] hover:cursor-pointer hover:text-red-500 border-b-2 flex justify-start items-center">
                              Makeup & Cosmetics
                            </li>
                            <li className="h-[38px] hover:cursor-pointer hover:text-red-500 border-b-2 flex justify-start items-center">
                              Personal Care Appliances
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li
                        className={
                          !Sports
                            ? " h-[48px] hover:bg-white px-2 flex justify-around border-b-2 border-gray-400  gap-0  items-center w-full   cursor-pointer"
                            : " bg-white    hover:bg-white px-2 border-b-2 border-gray-400  gap-0  items-center w-full   cursor-pointer "
                        }
                      >
                        <div className=" flex items-center w-full ">
                          <p
                            className={
                              !Sports
                                ? " w-full h-[48px] flex justify-start items-center"
                                : "w-full h-[48px] flex justify-start items-center font-semibold"
                            }
                          >
                            Sports & Outdoors
                          </p>
                          {!Sports ? (
                            <svg
                              onClick={() => {
                                setSports(true);
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-full w-6 flex-shrink-0 transform transition-transform duration-300"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                              />
                            </svg>
                          ) : (
                            <svg
                              onClick={() => {
                                setSports(false);
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-full w-6 flex-shrink-0 transform transition-transform duration-300 rotate-180"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 12h14"
                              />
                            </svg>
                          )}
                        </div>
                        <div
                          className={
                            Sports
                              ? " lg:hidden  flex flex-col  gap-4"
                              : " hidden "
                          }
                        >
                          <ul className=" flex flex-col  gap-4 ">
                            <li className="h-[38px] hover:cursor-pointer hover:text-red-500 border-b-2 flex justify-start items-center">
                              Athletic Apparel & Footwear{" "}
                            </li>
                            <li className="h-[38px] hover:cursor-pointer hover:text-red-500 border-b-2 flex justify-start items-center">
                              Sports Equipment (e.g., yoga mats, weights,
                              bicycles){" "}
                            </li>
                            <li className="h-[38px] hover:cursor-pointer hover:text-red-500 border-b-2 flex justify-start items-center">
                              Camping & Hiking Gear{" "}
                            </li>
                            <li className="h-[38px] hover:cursor-pointer hover:text-red-500 border-b-2 flex justify-start items-center">
                              Outdoor Recreation Accessories{" "}
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li
                        className={
                          !Books
                            ? " h-[48px] hover:bg-white px-2 flex justify-around border-b-2 border-gray-400  gap-0  items-center w-full   cursor-pointer"
                            : " bg-white    hover:bg-white px-2 border-b-2 border-gray-400  gap-0  items-center w-full   cursor-pointer "
                        }
                      >
                        <div className=" flex items-center w-full ">
                          <p
                            className={
                              !Books
                                ? " w-full h-[48px] flex justify-start items-center"
                                : "w-full h-[48px] flex justify-start items-center font-semibold"
                            }
                          >
                            Books & Stationery
                          </p>
                          {!Books ? (
                            <svg
                              onClick={() => {
                                setBooks(true);
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-full w-6 flex-shrink-0 transform transition-transform duration-300"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                              />
                            </svg>
                          ) : (
                            <svg
                              onClick={() => {
                                setBooks(false);
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-full w-6 flex-shrink-0 transform transition-transform duration-300 rotate-180"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 12h14"
                              />
                            </svg>
                          )}
                        </div>
                        <div
                          className={
                            Books
                              ? " lg:hidden  flex flex-col  gap-4"
                              : " hidden "
                          }
                        >
                          <ul className=" flex flex-col  gap-4 ">
                            <li className="h-[38px] hover:cursor-pointer hover:text-red-500 border-b-2 flex justify-start items-center">
                              Fiction & Non-fiction Books
                            </li>
                            <li className="h-[38px] hover:cursor-pointer hover:text-red-500 border-b-2 flex justify-start items-center">
                              Office Supplies
                            </li>
                            <li className="h-[38px] hover:cursor-pointer hover:text-red-500 border-b-2 flex justify-start items-center">
                              Writing Instruments
                            </li>
                            <li className="h-[38px] hover:cursor-pointer hover:text-red-500 border-b-2 flex justify-start items-center">
                              Art Supplies
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li
                        className={
                          !Food
                            ? " h-[48px] hover:bg-white px-2 flex justify-around border-b-2 border-gray-400  gap-0  items-center w-full   cursor-pointer"
                            : " bg-white    hover:bg-white px-2 border-b-2 border-gray-400  gap-0  items-center w-full   cursor-pointer "
                        }
                      >
                        <div className=" flex items-center w-full ">
                          <p
                            className={
                              !Food
                                ? " w-full h-[48px] flex justify-start items-center"
                                : "w-full h-[48px] flex justify-start items-center font-semibold"
                            }
                          >
                            Food & Beverages
                          </p>
                          {!Food ? (
                            <svg
                              onClick={() => {
                                setFood(true);
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-full w-6 flex-shrink-0 transform transition-transform duration-300"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                              />
                            </svg>
                          ) : (
                            <svg
                              onClick={() => {
                                setFood(false);
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-full w-6 flex-shrink-0 transform transition-transform duration-300 rotate-180"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 12h14"
                              />
                            </svg>
                          )}
                        </div>
                        <div
                          className={
                            Food
                              ? " lg:hidden  flex flex-col  gap-4"
                              : " hidden "
                          }
                        >
                          <ul className=" flex flex-col  gap-4 ">
                            <li className="h-[38px] hover:cursor-pointer hover:text-red-500 border-b-2 flex justify-start items-center">
                              Gourmet Foods & Snacks
                            </li>
                            <li className="h-[38px] hover:cursor-pointer hover:text-red-500 border-b-2 flex justify-start items-center">
                              Beverages (e.g., coffee, tea, wine)
                            </li>
                            <li className="h-[38px] hover:cursor-pointer hover:text-red-500 border-b-2 flex justify-start items-center">
                              Specialty Ingredients
                            </li>
                            <li className="h-[38px] hover:cursor-pointer hover:text-red-500 border-b-2 flex justify-start items-center">
                              Cooking & Baking Supplies
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li
                        className={
                          !Electrical
                            ? " h-[48px] hover:bg-white px-2 flex justify-around border-b-2 border-gray-400  gap-0  items-center w-full   cursor-pointer"
                            : " bg-white    hover:bg-white px-2 border-b-2 border-gray-400  gap-0  items-center w-full   cursor-pointer "
                        }
                      >
                        <div className=" flex items-center w-full ">
                          <p
                            className={
                              !Electrical
                                ? " w-full h-[48px] flex justify-start items-center"
                                : "w-full h-[48px] flex justify-start items-center font-semibold"
                            }
                          >
                            Electrical & Home Appliances
                          </p>
                          {!Electrical ? (
                            <svg
                              onClick={() => {
                                setElectrical(true);
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-full w-6 flex-shrink-0 transform transition-transform duration-300"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                              />
                            </svg>
                          ) : (
                            <svg
                              onClick={() => {
                                setElectrical(false);
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-full w-6 flex-shrink-0 transform transition-transform duration-300 rotate-180"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 12h14"
                              />
                            </svg>
                          )}
                        </div>
                        <div
                          className={
                            Electrical
                              ? " lg:hidden  flex flex-col  gap-4"
                              : " hidden "
                          }
                        >
                          {" "}
                          <ul className=" flex flex-col  gap-4 ">
                            <li className="h-[38px] hover:cursor-pointer hover:text-red-500 border-b-2 flex justify-start items-center w-[300px]">
                              Kitchen Appliances ( blenders, toasters, coffee
                              makers)
                            </li>
                            <li className="h-[38px] hover:cursor-pointer hover:text-red-500 border-b-2 flex justify-start items-center">
                              Laundry Appliances
                            </li>
                            <li className="h-[38px] hover:cursor-pointer hover:text-red-500 border-b-2 flex justify-start items-center">
                              Vacuum Cleaners
                            </li>
                            <li className="h-[38px] hover:cursor-pointer hover:text-red-500 border-b-2 flex justify-start items-center">
                              Air Conditioners & Fans
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li
                        className={
                          !automMobile
                            ? " h-[48px] hover:bg-white px-2 flex justify-around border-b-2 border-gray-400  gap-0  items-center w-full   cursor-pointer"
                            : " bg-white    hover:bg-white px-2 border-b-2 border-gray-400  gap-0  items-center w-full   cursor-pointer "
                        }
                      >
                        <div className=" flex items-center w-full ">
                          <p
                            className={
                              !automMobile
                                ? " w-full h-[48px] flex justify-start items-center"
                                : "w-full h-[48px] flex justify-start items-center font-semibold"
                            }
                          >
                            Automotive & Accessories
                          </p>
                          {!automMobile ? (
                            <svg
                              onClick={() => setAutomobile(true)}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-full w-6 flex-shrink-0 transform transition-transform duration-300"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                              />
                            </svg>
                          ) : (
                            <svg
                              onClick={() => setAutomobile(false)}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-full w-6 flex-shrink-0 transform transition-transform duration-300 rotate-180"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 12h14"
                              />
                            </svg>
                          )}
                        </div>
                        <div
                          className={
                            automMobile
                              ? " lg:hidden  flex flex-col  gap-4 transition-all duration-300 transform"
                              : " hidden "
                          }
                        >
                          <ul className=" flex flex-col  gap-4 ">
                            <li className="h-[38px] hover:cursor-pointer hover:text-red-500 border-b-2 flex justify-start items-center">
                              Car Parts & Accessories
                            </li>
                            <li className="h-[38px] hover:cursor-pointer hover:text-red-500 border-b-2 flex justify-start items-center">
                              Car Care Products
                            </li>
                            <li className="h-[38px] hover:cursor-pointer hover:text-red-500 border-b-2 flex justify-start items-center">
                              Automotive Electronics
                            </li>
                            <li className="h-[38px] hover:cursor-pointer hover:text-red-500 border-b-2 flex justify-start items-center">
                              Vehicle Maintenance Tools
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
            <NavLink className=" flex items-center" to="/">
              <img
                src={Logo}
                className={
                  open
                    ? "lg:w-[79px] lg:h-[60px] w-[48px] object-cover z-[1000]"
                    : "lg:w-[79px] lg:h-[60px] w-[48px] object-cover"
                }
                alt="Logo"
              />
              <h1
                className={
                  open
                    ? "cursor-pointer lg:text-[30px] font-sans z-[1000] font-bold"
                    : "cursor-pointer lg:text-[30px] font-sans  font-bold"
                }
              >
                Urban Trove
              </h1>
            </NavLink>
          </div>
          <div className=" lg:relative absolute top-10 lg:top-0 w-full lg:w-auto pr-4 lg:pr-0">
            <div className="relative lg:flex-col  border-[0.5px] border-black rounded-full flex justify-center items-center w-full">
              <input
                id="search"
                className=" outline-none bg-[#f3f4f6] p-2 rounded-full transition-all duration-200 focus:outline-none lg:focus:w-[504px] lg:w-[448px] lg:h-[41.6px] h-[30px] w-full"
                placeholder="Search Products and Services"
              />
              <button
                type="button"
                className="absolute right-2 top-2 bottom-2 flex items-center justify-center"
              >
                <BsSearch />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-around  lg:gap-6 gap-3">
            <div className=" group relative">
              <div
                className="absolute hidden z-50  group-hover:block top-6 lg:-left-12 -right-16 shadow-sm lg:w-[13rem] w-[13rem] shadow-slate-600 rounded-sm group-active:block bg-white group"
                onMouseEnter={handleMouseEnterAccount}
                onMouseLeave={handleMouseLeaveAccount}
              >
                {!auth?.email ? (
                  <div className=" flex flex-col items-center py-4 gap-2">
                    <NavLink to="/login">
                      <button className=" hover:shadow-2xl active:shadow-3xl  bg-primaryTwo   w-[12rem] h-[2.5rem] text-white border-0 rounded-[5px] uppercase">
                        Sign In
                      </button>
                    </NavLink>
                    <div className="flex text-left gap-[0.5rem] h-[2.5rem] w-full justify-center items-center text-[16px] cursor-pointer hover:bg-[#eff1e6]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>{" "}
                      <p className=" font-normal hover:font-bold">My Account</p>
                    </div>
                    <div className="flex text-left gap-[0.5rem] w-full h-[2.5rem] justify-center items-center  text-[16px] cursor-pointer hover:bg-[#eff1e6] font-normal ">
                      <RiFileList2Line className=" text-[18px]" />
                      <p>Orders</p>
                    </div>
                  </div>
                ) : (
                  <div className="dropdown-content  ">
                    <NavLink
                      to="/customer/details"
                      className="flex text-left gap-[0.5rem]  text-[16px] h-[48px] justify-start items-center pl-4 cursor-pointer hover:bg-[#eff1e6] font-normal hover:font-bold "
                    >
                      <MdPerson className=" text-[18px]" />
                      <p>My Account</p>
                    </NavLink>
                    <NavLink
                      to="/customer/orders"
                      className="flex text-left gap-[0.5rem] text-[16px] h-[48px]   justify-start items-center pl-4 cursor-pointer hover:bg-[#eff1e6] font-normal hover:font-bold "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className=" w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        />
                      </svg>
                      <p>My Orders</p>
                    </NavLink>
                    <div className="flex text-left gap-[0.5rem] text-[16px] h-[48px]   justify-start items-center pl-4 cursor-pointer hover:bg-[#eff1e6] font-normal hover:font-bold ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                      </svg>
                      <p>Delivery Address</p>
                    </div>
                    <button
                      onClick={() => logOutHandler()}
                      className=" text-red-500 font-normal hover:font-bold pl-4 flex justify-center items-center gap-2 h-[48px]"
                    >
                      <RiLogoutCircleLine />
                      Log Out
                    </button>
                  </div>
                )}
              </div>
              {!auth?.email ? (
                <button
                  className="flex items-center z-50 justify-center gap-[5px]  text-[19px] font-medium bg-transparent cursor-pointer hover:text-primaryOne group-hover:text-primaryOne"
                  onMouseEnter={() => setIsHoveredAccount(true)}
                  onMouseLeave={() => setIsHoveredAccount(false)}
                >
                  <RxPerson className=" flex items-center" />
                  <span className=" hidden lg:block">Account</span>
                  {isHoveredAccount ? (
                    <IoIosArrowUp className=" hidden lg:block" />
                  ) : (
                    <IoIosArrowDown className=" hidden lg:block" />
                  )}
                </button>
              ) : (
                <button className="btn-account flex items-center gap-2">
                  <BsPersonFillCheck />
                  Hi, {name}
                  <IoIosArrowDown className=" hidden lg:block" />
                </button>
              )}
            </div>

            <div className=" group relative">
              <div className="absolute hidden z-50  group-hover:block top-6 p-4 lg:-right-8 -right-8 shadow-sm shadow-slate-600 rounded-sm group-active:block bg-white group w-[14rem]">
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
                className="flex items-center justify-center gap-[5px] text-[19px] font-[500] bg-white border-0  cursor-pointer hover:text-primaryOne group-hover:text-primaryOne"
                onMouseEnter={() => setIsHoveredHelp(true)}
                onMouseLeave={() => setIsHoveredHelp(false)}
                onClick={toggleDropdown}
              >
                <BsQuestionCircle className="" />
                <span className=" hidden lg:block ">Help</span>
                {isHoveredHelp ? (
                  <IoIosArrowUp
                    className=" hidden lg:block"
                    onClick={handleMouseEnterHelp}
                  />
                ) : (
                  <IoIosArrowDown
                    className=" hidden lg:block"
                    onClick={handleMouseLeaveHelp}
                  />
                )}
              </button>
            </div>
            <NavLink to="/cart">
              <div className="relative ">
                <button className="flex items-center justify-center gap-[5px] text-[19px] font-[500] cursor-pointer border-0 bg-white hover:text-primaryOne">
                  <ShoppingBagIcon
                    aria-hidden="true"
                    className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  />
                  <span className=" hidden lg:block">Cart</span>
                </button>
                <span className="bg-primaryTwo py-[0.1rem] px-[0.05] text-[10px] w-[14px] h-[14px] rounded-[50px] absolute bottom-4 sm:bottom-[0.7rem] left-3 text-white flex justify-center items-center">
                  {counter}
                </span>
              </div>
            </NavLink>
          </div>
        </nav>
        <nav className=" lg:flex items-center justify-around bg-[#eff1e6]  h-[50px] hidden  ">
          <div className=" flex items-center gap-2 ">
            <p>All Categories</p>
            <div className="flex items-center justify-end">
              <input
                type="checkbox"
                name="hamburger"
                id="hamburger"
                className="peer"
                hidden
                checked={open}
                onChange={() => {
                  toggleNavbar();
                }}
              />
              <label
                htmlFor="hamburger"
                className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer"
              >
                <div
                  aria-hidden="true"
                  className="m-auto h-0.5 w-6 rounded bg-[black]   text-black  transition duration-300"
                ></div>
                <div
                  aria-hidden="true"
                  className={
                    !isModalOpen
                      ? "m-auto mt-1 h-0.5 w-6 rounded bg-[black]   transition duration-300"
                      : ""
                  }
                ></div>
                <div
                  aria-hidden="true"
                  className="m-auto mt-1 h-0.5 w-6 rounded bg-[black]  transition duration-300"
                ></div>
              </label>
            </div>
          </div>

          <div className=" flex items-center gap-2 h-[40px]">
            <p className=" w-[300px] hover:bg-white cursor-pointer h-full justify-center flex items-center">
              Clothing (Men&apos;s, Women&apos;s, Children&apos;s)
            </p>
            <p className=" w-[217px]  hover:bg-white cursor-pointer h-full justify-center flex items-center ">
              Shoes & Footwear
            </p>
            <p className=" w-[217px]  hover:bg-white cursor-pointer h-full justify-center flex items-center">
              Smartphones & Tablets
            </p>
            <p className=" w-[217px]  hover:bg-white cursor-pointer h-full justify-center flex items-center">
              Furniture & Decor
            </p>
          </div>
        </nav>
        <CategoryModal>
          <Category />
        </CategoryModal>
      </div>
    </header>
  );
}
