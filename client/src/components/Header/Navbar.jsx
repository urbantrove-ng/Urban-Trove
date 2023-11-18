import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import AuthContext from "../../store/auth-context";
import { FaBars, FaCircle } from "react-icons/fa";
import AuthContext from "../Account/AuthContext";
AuthContext;

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const authCxt = useContext(AuthContext);
  const Navigate = useNavigate();

  function logoutUser() {
    localStorage.clear();
    window.location.href = "/";
  }
  return (
    <>
      <nav
        className={`sticky top-0 z-50 bg-gray-300 p-4 w-full justify-between`}
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full  relative flex  justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className={
                " text-sm font-bold leading-relaxed inline-block mr-4 py-2 uppercase"
              }
              href="/"
            >
              Ohion Bills
            </a>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1  rounded  block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow  lg:shadow-none" +
              (navbarOpen ? "  block " : " hidden")
            }
            id="mainNavbar"
          >
            <ul className="flex flex-col items-end lg:flex-row list-none lg:ml-auto">
              {!authCxt.isLoggedIn && (
                <li className="flex items-center">
                  <a
                    className={
                      (props.transparent
                        ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                        : "text-gray-800 hover:text-pink-600") +
                      " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    }
                    href="/"
                  >
                    home
                  </a>
                </li>
              )}
              {!authCxt.isLoggedIn && (
                <li className="flex items-center">
                  <a
                    className={
                      "text-gray-800 hover:text-pink-600" +
                      " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    }
                    href="/"
                  >
                    About
                  </a>
                </li>
              )}
              {!authCxt.isLoggedIn && (
                <li className="flex items-center">
                  <a
                    className={
                      "text-gray-800 hover:text-pink-600" +
                      " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    }
                    href="/contact"
                  >
                    Contact{" "}
                  </a>
                </li>
              )}
              {!authCxt.isLoggedIn && (
                <li className="flex items-center">
                  <a
                    className={
                      "text-gray-800 hover:text-pink-600" +
                      " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    }
                    href="/"
                  >
                    Service{" "}
                  </a>
                </li>
              )}{" "}
              {!authCxt.isLoggedIn && (
                <li className="flex items-center">
                  <Link
                    className={
                      " bg-pink-600 text-white hover:text-gray-800 " +
                      " text-xs font-bold uppercase px-4 p-3 rounded shadow hover:shadow-md outline-none  lg:mr-1 lg:mb-0 ml-3 mb-3"
                    }
                    type="button"
                    to="/login"
                    style={{ transition: "all .15s ease" }}
                  >
                    Get Started
                  </Link>
                </li>
              )}
              {authCxt.isLoggedIn && (
                <li className="flex items-center">
                  <Link
                    className={
                      "hover:text-pink-600" +
                      " px-3 py-4 text-xs uppercase font-bold"
                    }
                    to="/"
                  >
                    Home
                  </Link>
                </li>
              )}
              {authCxt.isLoggedIn && (
                <li className="flex items-center">
                  <Link
                    className={
                      "text-gray-800 hover:text-pink-600" +
                      " px-3 py-4 flex text-xs uppercase font-bold"
                    }
                    to="/dashboard"
                  >
                    Dashboard
                  </Link>
                </li>
              )}
              {authCxt.isLoggedIn && (
                <li className="flex items-center">
                  <Link
                    className={
                      "text-gray-800 hover:text-pink-600" +
                      " px-3 py-4 text-xs uppercase font-bold"
                    }
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
              )}
              {authCxt.isLoggedIn && (
                <li className="flex items-center  ">
                  <button
                    className={
                      " bg-pink-600 text-white hover:text-gray-800 " +
                      " text-xs font-bold uppercase px-2 p-3 rounded shadow hover:shadow-md outline-none  lg:mr-1 lg:mb-0 ml-1"
                    }
                    onClick={logoutUser}
                  >
                    Logout
                  </button>
                </li>
                // <li className={" px-3 py-2 "}>
                //   <UserDropdown />
                // </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
