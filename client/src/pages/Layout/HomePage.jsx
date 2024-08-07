import React from "react";
import { productData } from "../../data/productsData";
import { servicesData } from "../../data/ServiceData";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Slider from "./Slider";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="font-inter my-[6rem]">
      <Slider />
      <div className="mt-[6rem] md:mt-[3rem] mx-[2rem] xl:mx-0 mb-[2rem] grid justify-center">
        <h5 className="text-[2rem] font-[300] text-center mb-[-2rem] text-[#4b5563]">
          Products
        </h5>
        <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 xl:w-[95vw] sm:w-[97vw] md:w-[95vw] gap-[1rem] sm:gap-[0.5rem] md:gap-[0.5rem]  mt-[2rem] justify-center bg-[#eff1e6] py-[3rem] sm:py-[1rem] px-[1rem] sm:px-[0.5rem] rounded-[10px]">
          {productData.map((product) => {
            const { mainImage, header, link } = product;
            const navigate = useNavigate()
            function toProducts(){
              navigate(link.url)
            }

            return (
              <div
                className="rounded-[10px] w-[20rem] xl:w-[22.3vw] sm:w-[46vw] md:w-[30vw] h-[20rem] xl:h-[17rem] sm:h-[13rem] md:h-[16rem]  text-center mb-[2rem] bg-white cursor-pointer"
                onClick={toProducts}
                key={product.id}
              >
                <h6 className="text-[1.3rem] sm:text-[1rem] font-[300] text-[#7f7f7f] bg-[#eff1e6]">
                  {header}
                </h6>
                <div className="h-[15rem] xl:h-[15rem] sm:h-[10rem] md:h-[12rem] w-[19.98rem] xl:w-[22.3vw] sm:w-[46vw] md:w-[30vw]">
                  <img className="w-full h-full" src={mainImage} alt="" />
                </div>
                <Link to={link.url}>
                  <button className="mt-[1rem] sm:mt-0 sm:w-[46vw] md:w-[30vw] xl:w-[22.3vw] xl:mt-[-1.3rem] xl:py-[0.6rem] md:mt-[0.3rem] md:py-[0.3rem] sm:py-[0.4rem] sm:rounded-b-[5px] md:rounded-b-[5px] xl:rounded-b-[5px] border-0 cursor-pointer bg-white text-[1rem] sm:text-[0.7rem] text-[#677e11] group">
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
      <div className="mt-[6rem] md:mt-[3rem] mx-[2rem] xl:mx-0 mb-[2rem] grid justify-center">
        <h5 className="text-[2rem] font-[300] text-center mb-[-2rem] text-[#4b5563]">
          Services
        </h5>
        <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 xl:w-[95vw] sm:w-[97vw] md:w-[95vw] gap-[1rem] sm:gap-[0.5rem] md:gap-[0.5rem]  mt-[2rem] justify-center bg-[#eff1e6] py-[3rem] sm:py-[1rem] px-[1rem] sm:px-[0.5rem] rounded-[10px]">
          {servicesData.map((service) => {
            const { image, header, link } = service; 
            const navigate = useNavigate()
            function toServices(){
              navigate(link.url)
            }

            return (
              <div
              className="rounded-[10px] w-[20rem] xl:w-[22.3vw] sm:w-[46vw] md:w-[30vw] h-[20rem] xl:h-[17rem] sm:h-[13rem] md:h-[16rem]  text-center mb-[2rem] bg-white cursor-pointer"
              onClick={toServices}
              key={service.id}
              >
                <h6 className="text-[1.3rem] sm:text-[1rem] font-[300] text-[#7f7f7f] bg-[#eff1e6]">
                  {header}
                </h6>
                <div className="h-[15rem] xl:h-[15rem] sm:h-[10rem] md:h-[12rem] w-[19.98rem] xl:w-[22.3vw] sm:w-[46vw] md:w-[30vw]">
                  <img className="w-full h-full" src={image} alt="" />
                </div>
                <Link to={link.url}>
                <button className="mt-[1rem] sm:mt-0 sm:w-[46vw] md:w-[30vw] xl:w-[22.33vw] xl:mt-[-1.3rem] xl:py-[0.6rem] md:mt-[0.3rem] md:py-[0.3rem] sm:py-[0.4rem] sm:rounded-b-[5px] md:rounded-b-[5px] xl:rounded-b-[5px] border-0 cursor-pointer bg-white text-[1rem] sm:text-[0.7rem] text-[#677e11] group">
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
