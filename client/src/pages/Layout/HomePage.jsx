import { productData } from "../../data/productsData";
import { servicesData } from "../../data/ServiceData";
import { NavLink } from "react-router-dom";
import Slider from "./Slider";
import { useNavigate } from "react-router-dom";


export default function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="font-inter lg:my-[7.7rem]">
      <Slider />

      <div className=" flex flex-col items-center gap-4  lg:p-10">
        <h5 className="text-[2rem] font-[300] text-center  text-[#4b5563]">
          Products
        </h5>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 lg:gap-4 grid-cols-2 lg:p-10 p-2 lg:w-full gap-2 w-full  justify-center bg-[#eff1e6] lg:py-10 py-4 rounded-[10px]">
          {productData.map((product) => {
            const { mainImage, header, link } = product;

            return (
              <div
                className="rounded-[10px] flex flex-col pt-4 gap-2 items-center cursor-pointer"
                onClick={() => navigate("/products")}
                key={product.id}
              >
                <h6 className="lg:text-[1.3rem] font-light text-[#7f7f7f] ">
                  {header}
                </h6>
                <div className="bg-white flex justify-center items-center hover:drop-shadow-2xl xl:w-full xl:h-[320px] lg:w-[120px] h-[200px] w-full lg:h-[120px] rounded-lg">
                  <div className="flex flex-col items-center lg:gap-0 gap-6">
                    <div className="">
                      <NavLink to="/products">
                        <img
                          className=" xl:w-[260px] xl:h-[220px] lg:w-[90px] lg:h-[80px] w-[100px] h-[100px]"
                          src={mainImage}
                          alt=""
                        />
                      </NavLink>
                    </div>
                    <NavLink to="/products">
                      <button className="text-[#677e11] flex items-center gap-2 hover:gap-4 transition-all duration-300 ease-in-out">
                        {link.text} <span>&rarr;</span>
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" flex flex-col items-center gap-4 ">
        <h5 className="text-[2rem] font-[300] text-center  text-[#4b5563]">
          Services
        </h5>
        <div className="grid lg:grid-cols-4 grid-cols-2  gap-2 p-2 lg:w-[95vw] w-full  justify-center bg-[#eff1e6] py-10  rounded-[10px]">
          {servicesData.map((service) => {
            const { image, header, link } = service;

            return (
              <div
                className="rounded-[10px] flex flex-col pt-4 gap-2 items-center cursor-pointer"
                onClick={() => navigate("/services")}
                key={service.id}
              >
                <h6 className="lg:text-[1.3rem] font-light text-[#7f7f7f] ">
                  {header}
                </h6>
                <div className=" bg-white flex flex-col items-center rounded-b-lg">
                  <div className="">
                    <img
                      className=" xl:w-[319px] xl:h-[240px] lg:w-[90px] lg:h-[80px] w-full h-full"
                      src={image}
                      alt=""
                    />
                  </div>
                  <NavLink to="/services">
                    <button className="text-[#677e11] flex items-center gap-2 hover:gap-4 transition-all duration-300 ease-in-out h-[40px]">
                      {link.text}{" "}
                      <span className="group-hover:ml-[0.6rem] group-transition duration-300 ease-in-out">
                        &rarr;
                      </span>
                    </button>
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
