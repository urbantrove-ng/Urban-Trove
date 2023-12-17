import React from "react";
import MiniHeader from "./MiniHeader";
import { servicesData } from "../../data/ServiceData";
import MiniServicesHeader from "./MiniServicesHeader";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  function servicedetails(name) {
    navigate(`/services/${name}`);
  }
  return (
    <>
      <MiniHeader />
      <MiniServicesHeader />
      <div className="my-[2rem] md:my-[0.5rem] mx-[1rem] sm:mx-[0.2rem] md:mx-[0.4rem] 1sm:mt-[12rem] sm:mt-[10.5rem] bg-[#e5e5e5] p-[2rem] sm:p-[0.9rem] md:p-[0.5rem] grid grid-cols-4 1sm:grid-cols-2 md:grid-cols-3 gap-[1rem] sm:gap-[0.6rem] justify-center font-roboto">
        {servicesData.map((service) => {
          const { image, startingPrice, services, name } = service;

          const actualPrice = parseFloat(startingPrice);
          const formattedPrice = actualPrice.toLocaleString();

          return (
            // <div className="services-content">
            <div
              className="bg-white flex flex-col justify-center cursor-pointer transition duration-300 rounded-[5px] hover:shadow-1xl"
              key={service.id}
              onClick={() => servicedetails(name)}
            >
              <div className="h-[14rem] md:h-[10rem] sm:h-[7rem] w-full flex justify-center self-center">
                <img className="w-full h-full" src={image} alt="" />
              </div>
              <div className="py-[0.3rem] px-[0.5rem] grid">
                <h3 className="font-[700] md:font-[600] h-[2.7rem] md:mt-[-0.3rem]">{name}</h3>
                <h5 className="font-[500] text-[0.9rem] text-[#737373] h-[2.1rem] sm:h-[2.65rem] sm:line-clamp-2">
                  {services}
                </h5>
                <h6 className="font-[600] text-[#333] sm:leading-4">
                  Prices starting from: &#8358;{formattedPrice}
                </h6>
                <button className="py-[0.5rem] border-[1px] border-primaryOne rounded-[3px] text-primaryOne sm:text-white bg-white sm:bg-primaryOne cursor-pointer transition duration-300 mt-[3px] hover:text-white hover:bg-primaryOne">
                  Book A Reservation
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
