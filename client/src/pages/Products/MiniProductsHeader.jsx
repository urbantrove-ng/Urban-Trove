import React from "react";
import { ProductMiniheader } from "../../data/productsData";

export default function MiniProductsHeader() {
  return (
    <div className="bg-[#d1d5db] mt-[8.7rem] flex justify-center gap-[5rem]">
      {ProductMiniheader.map((header, index) => {
        return (
          <ul key={index} className=" text-[#4b5563] py-[0.5rem] list-none font-roboto">
            <li className="cursor-pointer hover:text-[#111111]">{header}</li>
          </ul>
        );
      })}
    </div>
  );
}
