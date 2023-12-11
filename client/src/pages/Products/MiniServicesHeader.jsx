import React, { useState } from "react";
import { ServiceMiniheader } from "../../data/ServiceData";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

export default function MiniServicesHeader() {
  const [openSidebar, setOpenSidebar] = useState(false);

  function openBurger() {
    setOpenSidebar(!openSidebar);
  }

  return (
    <div className="relative">
      <div
        className={`bg-[#d1d5db] z-20 sm:rounded-br-[5px] mt-[8.7rem] md:mt-[9.5rem] sm:fixed sm:top-[1rem] group sm:mt-[9rem] sm:w-[10rem] flex sm:flex-col sm:gap-[1rem] sm:pl-[2rem] justify-center gap-[5rem] md:gap-[4rem] transition-all duration-500 ${
          openSidebar ? "sm:left-0" : "sm:left-[-11rem]"
        }`}
      >
        {ServiceMiniheader.map((header, index) => {
          return (
            <ul
              key={index}
              className=" text-[#4b5563] py-[0.5rem] list-none font-roboto"
            >
              <li className="cursor-pointer sm:text-[1.3rem] hover:text-[#111111]">
                {header}
              </li>
            </ul>
          );
        })}
      </div>
      <div
        className="sm:mt-[7rem] pl-[2rem] z-30 py-[0.5rem] rounded-br-[5px] sm:block cursor-pointer bg-[#d1d5db] w-[10rem] 2xl:hidden fixed top-[0.8rem]"
        onClick={openBurger}
      >
        <h3 className="flex items-center gap-[0.6rem] uppercase">
          Categories {openSidebar ? <FaTimes /> : <GiHamburgerMenu />}
        </h3>
      </div>
    </div>
  );
}
