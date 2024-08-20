import MiniHeader from "./MiniHeader";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUrban } from "../../context/UrbanContext";

import axios from "../../Api/axios";
import { ShimmerButton, ShimmerDiv } from "shimmer-effects-react";
export default function Products() {
  const navigate = useNavigate();
  const { addToCart } = useUrban();

  const { productData, setProductData } = useUrban();
  const getAllProducts = async () => {
    const data = await axios.get("/products");
    setProductData(data?.data?.data?.products);
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  const onHandleAddItems = (id) => {
    addToCart(id);
  };

  const shortName = (name) => {
    const shortHashName = name.length > 20 ? `${name.slice(0, 20)}....` : name;
    return shortHashName;
  };

  return (
    <>
      <MiniHeader />

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
          <div className="mt-8 grid grid-cols-2  gap-y-12 gap-x-4  sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {productData.length > 0 &&
              productData?.map((product) => (
                <div key={product._id} className=" flex flex-col gap-4">
                  <div className="relative group h-56 lg:h-[22rem]">
                    <div className="relative lg:h-72 h-40 w-full overflow-hidden rounded-lg">
                      <img
                        alt={product.mainImage}
                        src={product.images[0].url}
                        className="lg:h-full lg:w-full h-full w-full object-cover object-center  group-hover:scale-105 transition-all ease duration-300"
                      />
                    </div>
                    <div className="relative mt-4">
                      <h3 className="text-sm font-medium lg:hidden text-gray-900">
                        {shortName(product.productName)}
                      </h3>
                      <h3 className="text-sm font-medium hidden lg:block text-gray-900">
                        {product.productName}
                      </h3>
                    </div>
                    <div
                      className="absolute inset-x-0 top-0 flex lg:h-72 h-40 cursor-pointer items-end justify-end overflow-hidden rounded-lg p-4"
                      onClick={() => navigate(`/products/${product._id}`)}
                    >
                      <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#53544d] opacity-50"
                      />
                    </div>
                    <p className="relative text-lg font-semibold text-black ">
                      ₦ {Number(product.prices.actualPrice).toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={() => onHandleAddItems(product._id)}
                    className="relative flex items-center cursor-pointer justify-center w-full rounded-md border border-transparent bg-primaryTwo px-8 py-2 text-sm font-medium text-white hover:bg-primaryOne"
                  >
                    Add to bag<span className="sr-only">, {product.name}</span>
                  </button>
                </div>
              ))}
            {productData.length === 0 &&
              Array.from({ length: 10 }, (_, i) => (
                <div key={i} className="flex flex-col items-center gap-8">
                  <div className="w-full">
                    <ShimmerDiv
                      mode="light"
                      height="30vh"
                      width="100%"
                      className="lg:h-40 md:h-60 sm:h-80"
                    />
                  </div>
                  <ShimmerButton
                    size="md"
                    mode="light"
                    width="100%"
                    rounded={0.4}
                    className="w-full"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
