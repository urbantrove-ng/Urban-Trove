import React from "react";
import { productData } from "../../data/productsData";
import { servicesData } from "../../data/ServiceData";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Slider from "./Slider";

export default function Homepage() {
  return (
    <div className="font-inter my-[6rem]">
      <Slider />
      <div className="mt-[6rem] md:mt-[3rem] mx-[2rem]  mb-[2rem] grid justify-center">
        <h5 className="text-[2rem] font-[300] text-center mb-[-2rem] text-[#4b5563]">
          Products
        </h5>
        <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 sm:w-[46vh] md:w-[80vh] gap-[1rem] sm:gap-[0.5rem] md:gap-[0.5rem]  mt-[2rem] justify-center bg-[#eff1e6] py-[3rem] sm:py-[1rem] px-[1rem] sm:px-[0.5rem] rounded-[10px]">
          {productData.map((product) => {
            const { mainImage, header, link } = product;
            return (
              <div
                className="rounded-[10px] w-[20rem] sm:w-[21.5vh] md:w-[25vh] h-[20rem] sm:h-[10rem] md:h-[17rem]  text-center mb-[2rem] bg-white"
                key={product.id}
              >
                <h6 className="text-[1.3rem] sm:text-[1rem] font-[300] text-[#7f7f7f] bg-[#eff1e6]">
                  {header}
                </h6>
                <div className="h-[15rem] sm:h-[8rem] md:h-[12rem] w-[19.98rem] sm:w-[21.4vh] md:w-[24.9vh]">
                  <img className="w-full h-full" src={mainImage} alt="" />
                </div>
                <Link to={link.url}>
                  <button className="mt-[1rem] sm:mt-0 sm:w-[21.5vh] md:w-[25vh] sm:py-[0.4rem] sm:rounded-b-[5px] md:rounded-b-[5px] border-0 cursor-pointer bg-white text-[1rem] sm:text-[0.7rem] text-[#677e11] group">
                    {link.text}{" "}
                    <span className="group-hover:ml-[0.6rem] group-transition duration-300 ease-in-out">
                      &rarr;
                    </span>
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-[6rem] sm:mt-[3rem] mx-[2rem] sm:mx-[0.5rem] mb-[2rem] grid justify-center">
        <h5 className="text-[2rem] font-[300] text-center mb-[-2rem] text-[#4b5563]">
          Services
        </h5>
        <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 sm:w-[46vh] md:w-[80vh] gap-[1rem] sm:gap-[0.5rem] md:gap-[0.5rem]  mt-[2rem] justify-center bg-[#eff1e6] py-[3rem] sm:py-[1rem] px-[1rem] sm:px-[0.5rem] rounded-[10px]">
          {servicesData.map((service) => {
            const { image, header, link } = service;
            return (
              <div
              className="rounded-[10px] w-[20rem] sm:w-[21.5vh] md:w-[25vh] h-[20rem] sm:h-[10rem] md:h-[17rem]  text-center mb-[2rem] bg-white"
              key={service.id}
              >
                <h6 className="text-[1.3rem] sm:text-[1rem] font-[300] text-[#7f7f7f] bg-[#eff1e6]">
                  {header}
                </h6>
                <div className="h-[15rem] sm:h-[8rem] md:h-[12rem] w-[19.98rem] sm:w-[21.49vh] md:w-[24.9vh]">
                  <img className="w-full h-full" src={image} alt="" />
                </div>
                <Link to={link.url}>
                <button className="mt-[1rem] sm:mt-0 sm:w-[21.5vh] md:w-[25vh] sm:py-[0.4rem] sm:rounded-b-[5px] md:rounded-b-[5px] border-0 cursor-pointer bg-white text-[1rem] sm:text-[0.7rem] text-[#677e11] group">
                    {link.text}{" "}
                    <span className="group-hover:ml-[0.6rem] group-transition duration-300 ease-in-out">
                      &rarr;
                    </span>
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
