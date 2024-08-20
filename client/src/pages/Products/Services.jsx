import MiniHeader from "./MiniHeader";
import { servicesData } from "../../data/ServiceData";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();


  return (
    <section className=" flex justify-center items-center">
      <div>
        <MiniHeader />
        <div className="bg-white py-6">
          <div className="">
            <div className="mt-8 grid  lg:grid-cols-4 grid-cols-1 gap-8 lg:gap-0">
              {servicesData.map((product) => (
                <div key={product.id}>
                  <div className="relative group h-56 lg:h-[25rem]">
                    <div className="relative lg:h-72 h-40 w-[343px] overflow-hidden rounded-lg">
                      <img
                        alt={product.header}
                        src={product.image}
                        className="lg:h-full lg:w-full object-cover object-center  group-hover:scale-105 transition-all ease duration-300"
                      />
                    </div>
                    <div className="relative mt-4">
                      <h3 className="text-sm font-medium text-gray-900">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.services}
                      </p>
                    </div>
                    <div
                      className="absolute inset-x-0 top-0 flex lg:h-72 h-40 cursor-pointer items-end justify-end overflow-hidden rounded-lg p-4"
                      onClick={() => navigate(`/services/${product.name}`)}
                    ></div>
                    <p className="relative text-md font-semibold text-black ">
                      Starting Price: ₦ {product.startingPrice}
                    </p>
                  </div>
                  <button
                    href={product.href}
                    className="relative flex items-center cursor-pointer justify-center rounded-md border border-transparent bg-primaryTwo w-[343px] py-2 text-sm font-medium text-white hover:bg-primaryOne"
                  >
                    Book A Reservation
                    <span className="sr-only">, {product.name}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
