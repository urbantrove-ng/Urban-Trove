import React from "react";
import { NavLink } from "react-router-dom";

export default function MiniHeader() {
  return (
    <div className="mt-[6rem] bg-primaryOne fixed top-0 w-full flex justify-center items-center gap-[14rem] py-[0.5rem]">
        <NavLink className={({isActive}) => isActive ? "no-underline text-white font-ubuntu text-[1.3rem]" : "no-underline font-ubuntu text-[1.3rem] text-black"}   to="/products">Products</NavLink>
        <NavLink className={({isActive}) => isActive ? "no-underline text-white font-ubuntu text-[1.3rem]" : "no-underline font-ubuntu text-[1.3rem] text-black"} to="/services">Services</NavLink> 
    </div>
  );
}
