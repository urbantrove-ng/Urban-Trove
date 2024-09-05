import MiniHeader from "./MiniHeader";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UrbanContext } from "../../context/UrbanContext";
import axiosBg from "axios";
import axios from "../../Api/axios";
import { ShimmerButton, ShimmerDiv } from "shimmer-effects-react";
export default function Products() {
  const navigate = useNavigate();
  const [imagesWithBackgroundRemoved, setImagesWithBackgroundRemoved] =
    useState({});
  const { subcategory, category } = useParams();
  const { productData, setProductData, addToCart } = useContext(UrbanContext);
  const searchProductByName = async () => {
    try {
      const response = await axios.get(
        `/search?q=${subcategory.split("=")[1]}`
      );
      if (response.status === 200) {
        setProductData(response.data?.data?.products);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const getProductByCategory = async () => {
    try {
      const response = await axios.get(`/categories`, {
        params: { selectedSubcategory: subcategory },
      });
      if (response.status === 200) {
        setProductData(response.data?.data?.products);
        navigate(`/${category}/${subcategory}`);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  const onHandleAddItems = (id) => {
    addToCart(id);
  };
  useEffect(() => {
    if (subcategory.startsWith("q")) {
      searchProductByName();
    }
    getProductByCategory();
  }, [subcategory]);
  const removeBackground = async (imageUrl) => {
    const apiKey = "udJNFZthzjjsYRKxLv4R6JRc"; // Replace with your actual API key

    const formData = new FormData();
    formData.append("image_url", imageUrl);
    formData.append("size", "auto");

    try {
      const response = await axiosBg.post(
        "https://api.remove.bg/v1.0/removebg",
        formData,
        {
          headers: {
            "X-Api-Key": apiKey,
          },
          responseType: "blob",
        }
      );

      const blob = new Blob([response.data], { type: "image/png" });
      const imageObjectUrl = URL.createObjectURL(blob);
      return imageObjectUrl;
    } catch (error) {
      console.error("Error removing background:", error);
      return null;
    }
  };

  useEffect(() => {
    const processImages = async () => {
      const updatedImages = {};
      for (let product of productData) {
        const imageUrl = product?.images[0]?.url;
        const newImageUrl = await removeBackground(imageUrl);
        updatedImages[product._id] = newImageUrl;
      }
      setImagesWithBackgroundRemoved(updatedImages);
    };

    if (productData?.length > 0) {
      processImages();
    }
  }, [productData]);
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
            {productData?.length > 0 &&
              productData?.map((product) => (
                <div key={product._id} className=" flex flex-col gap-4">
                  <div className="relative group h-64 lg:h-[22rem]">
                    <div className="relative lg:h-72 h-40 w-full overflow-hidden rounded-lg">
                      <img
                        alt={product?.mainImage}
                        src={
                          imagesWithBackgroundRemoved[product._id] ||
                          product?.images[0]?.url
                        }
                        className="lg:h-full lg:w-full h-full w-full object-cover object-center  group-hover:scale-105 transition-all ease duration-300"
                      />
                    </div>
                    <div className="relative mt-4 w-full">
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
            {productData?.length === 0 &&
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
