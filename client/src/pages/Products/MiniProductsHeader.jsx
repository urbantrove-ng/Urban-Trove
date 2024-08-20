import {  useState } from "react";
import { ProductMiniheader } from "../../data/productsData";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

export default function MiniProductsHeader() {
  const [openSidebar, setOpenSidebar] = useState(false);

  function openBurger() {
    setOpenSidebar(!openSidebar);
  }

  return (
    <div className="relative">
      <div
        className={`bg-[#d1d5db] z-20 1sm:rounded-br-[5px]  1sm:fixed sm:top-[1rem] 1sm:top-[2rem] group  1sm:w-[10rem] flex 1sm:flex-col 1sm:gap-[1rem] 1sm:pl-[2rem] justify-center gap-[5rem] md:gap-[4rem] transition-all duration-500 ${
          openSidebar ? "1sm:left-0" : "1sm:left-[-11rem]"
        }`}
      >
        {ProductMiniheader.map((header, index) => {
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
        className="sm:mt-[7rem] 1sm:mt-[8.5rem] pl-[2rem] z-30 py-[0.5rem] rounded-br-[5px] 1sm:block cursor-pointer bg-[#d1d5db] w-[10rem] 2xl:hidden fixed top-[0.8rem]"
        onClick={openBurger}
      >
        <h3 className="flex items-center gap-[0.6rem] uppercase">
          Categories {openSidebar ? <FaTimes /> : <GiHamburgerMenu />}
        </h3>
      </div>
    </div>
  );
}
