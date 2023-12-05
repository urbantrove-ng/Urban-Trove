import { useContext, useState } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import AuthContext from "../../store/auth-context";
import { FaBars, FaCircle } from "react-icons/fa";
import AuthContext from "../Account/AuthContext";
import logo from "../../assets/image/logo.png";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

// const menus = [
//   {
//     icon: "home",
//   },

//   {
//     icon: "loyalty",
//   },
// ];

const NavbarComponent = ({ children }) => {
  const [click, setclick] = useState(false);
  const handleClick = () => setclick(!click);

  const content = (
    <>
      <div className="z-50 block absolute bg-gray-200 top-20 w-full left-0 right-0  backdrop-blur-lg bg-opacity-30 transition">
        <ul className="text-center text-xl p-10">
          <Link to="/">
            <li className="my-2 py-2 border-yellow-900 transition cursor-pointer  hover:border-yellow-900 hover:text-pink-950  duration-150  hover:rounded">
              Home
            </li>
          </Link>
          <Link to="/">
            <li className="my-2 py-2 border-yellow-900 cursor-pointer hover:border-yellow-900  hover:text-pink-950 transition-all duration-150  hover:rounded">
              About
            </li>
          </Link>

          <Link to="/">
            <li className="my-2 py-2 border-yellow-900 hover:border-yellow-900 cursor-pointer  hover:text-pink-950 transition-all duration-150  hover:rounded">
              Products
            </li>
          </Link>

          <Link to="/">
            <li className="my-2 py-2 border-yellow-900 cursor-pointer  hover:text-pink-950 transition-all duration-150  hover:rounded">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </>
  );

  return (
    <>
      <nav className="z-50 bg-gray-200">
        <div className="h-10hv flex justify-between lg:py-5 px-20 py-8 border-b">
          <div className="flex items-center flex-1">
            <img src={logo} className="mr-6 h-16 sm:h-9" alt="Logo" />
          </div>
          <div className="lg:flex md-flex flex-1 justify-center items font-normal sm:hidden ">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link to="/">
                <li className="hover:text-yellow-900 transition border-b-2 hover:border-yellow-900 cursor-pointer ">
                  Home
                </li>
              </Link>
              <Link to="#">
                <li className="hover:text-yellow-900 transition border-b-2 hover:border-yellow-900 cursor-pointer ">
                  About
                </li>
              </Link>

              {/*mega menu start*/}

              <div className="group">
                <button className="hover:text-yellow-900 transition border-b-2 hover:border-yellow-900 cursor-pointer">
                  Products
                </button>
                <div className="hidden group-hover:flex flex-col absolute left-0 top-16 p-10 w-full bg-white z-20 text-black duration-300">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    <div className="flex flex-col">
                      <h3 className="mb-4 text-2xl text-yellow-900">
                        Beauty Products
                      </h3>
                      <a
                        href="#"
                        className="hover:underline hover:text-yellow-900"
                      >
                        Makeup Kit
                      </a>
                      <a
                        href="#"
                        className="hover:underline hover:text-yellow-900"
                      >
                        Lotion
                      </a>
                      <a
                        href="#"
                        className="hover:underline hover:text-yellow-900"
                      >
                        Body Wash
                      </a>
                      <a
                        href="#"
                        className="hover:underline hover:text-yellow-900"
                      >
                        Face Pack
                      </a>
                    </div>

                    <div className="flex flex-col">
                      <h3 className="mb-4 text-2xl text-yellow-900">
                        Beauty Products
                      </h3>
                      <a
                        href="#"
                        className="hover:underline hover:text-yellow-900"
                      >
                        Makeup Kit
                      </a>
                      <a
                        href="#"
                        className="hover:underline hover:text-yellow-900"
                      >
                        Lotion
                      </a>
                      <a
                        href="#"
                        className="hover:underline hover:text-yellow-900"
                      >
                        Body Wash
                      </a>
                      <a
                        href="#"
                        className="hover:underline hover:text-yellow-900"
                      >
                        Face Pack
                      </a>
                    </div>

                    <div className="flex flex-col">
                      <h3 className="mb-4 text-2xl text-yellow-900">
                        Beauty Products
                      </h3>
                      <a
                        href="#"
                        className="hover:underline hover:text-yellow-900"
                      >
                        Makeup Kit
                      </a>
                      <a
                        href="#"
                        className="hover:underline hover:text-yellow-900"
                      >
                        Lotion
                      </a>
                      <a
                        href="#"
                        className="hover:underline hover:text-yellow-900"
                      >
                        Body Wash
                      </a>
                      <a
                        href="#"
                        className="hover:underline hover:text-yellow-900"
                      >
                        Face Pack
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/*mega menu end*/}

              <Link to="#">
                <li className="hover:text-yellow-900 transition border-b-2 hover:border-yellow-900 cursor-pointer ">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <div className="">{click && content}</div>
          <button className="block  transition-none" onClick={handleClick}>
            {click ? (
              <FaTimes className="text-black" />
            ) : (
              <CiMenuFries className="text-black" />
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavbarComponent;
