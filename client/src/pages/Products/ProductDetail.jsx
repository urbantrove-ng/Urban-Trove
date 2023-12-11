import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { productData } from "../../data/productsData";

export default function ProductDetail() {
  const { details } = useParams();
  const product = productData.find((product) => product.details === details);
  const [selectedContent, setSelectedContent] = useState("Description");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleContentClick = (content) => {
    setSelectedContent(content);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(quantity - 1);
  };

  const {
    mainImage,
    otherImage1,
    otherImage2,
    otherImage3,
    otherImage4,
    header,
    price,
    seller,
    description,
  } = product;

  const actualPrice = parseInt(price.actualPrice);
  const discountPrice = parseInt(price.discountPrice);

  const formattedActualPrice = actualPrice.toLocaleString();
  const formattedDiscountedPrice = discountPrice.toLocaleString();

  const savedAmount = discountPrice - actualPrice;
  const formattedSavedAmount = savedAmount.toLocaleString();

  return (
    <div className="mt-[8rem] md:mt-[6rem] sm:mt-[4.5rem] mx-[1rem] md:mx-[4rem] mb-[2rem] py-[2rem] px-[3rem] md:px-0 sm:px-[0] font-sans">
      <div className="flex sm:flex-col md:flex-col md:justify-center md:items-center gap-[10rem] sm:gap-[1rem]">
        <div className="flex md:flex-row-reverse sm:flex-col-reverse gap-[1rem]">
          <div className="sm:flex sm:gap-[0.5rem]">
            {otherImage1 && (
              <div className="w-[4rem] h-[4rem] mb-[0.5rem] cursor-pointer hover:border-[1px] border-black">
                <img
                  className="w-full h-full rounded-[5px]"
                  src={otherImage1}
                  alt=""
                />
              </div>
            )}
            {otherImage2 && (
              <div className="w-[4rem] h-[4rem] mb-[0.5rem] cursor-pointer hover:border-[1px] border-black">
                <img
                  className="w-full h-full rounded-[5px]"
                  src={otherImage2}
                  alt=""
                />
              </div>
            )}
            {otherImage3 && (
              <div className="w-[4rem] h-[4rem] mb-[0.5rem] cursor-pointer hover:border-[1px] border-black">
                <img
                  className="w-full h-full rounded-[5px]"
                  src={otherImage3}
                  alt=""
                />
              </div>
            )}
            {otherImage4 && (
              <div className="w-[4rem] h-[4rem] mb-[0.5rem] cursor-pointer hover:border-[1px] border-black">
                <img
                  className="w-full h-full rounded-[5px]"
                  src={otherImage4}
                  alt=""
                />
              </div>
            )}
          </div>
          <div className="w-[30rem] sm:w-[21.4rem] sm:h-[19rem]">
            <img
              className="w-full h-full rounded-[5px]"
              src={mainImage}
              alt=""
            />
          </div>
        </div>

        <div className="mt-[1rem] md:mt-[-10rem] sm:mt-0 p-[2rem] sm:p-0 w-[60rem] sm:w-[21rem] md:w-[40rem]">
          <h2 className="text-[2rem] sm:text-[1.4rem] font-[400] mb-[0.5rem]">
            {details}
          </h2>
          <p className="text-[0.8rem] mb-[2rem] md:mb-[1rem] sm:mb-[1rem]">
            Sold by: {seller}
          </p>
          <hr className="mt-[-1rem] border-[1px] border-[#d6d3d1] h-[1px]" />
          <div className="flex  items-center gap-[5rem] sm:gap-[2rem] mt-[3rem] md:mt-0 sm:mt-[0.3rem] mb-[0.5rem]">
            <h4 className="text-[2rem] sm:text-[1.4rem] font-[500]">
              &#8358;{formattedActualPrice}
            </h4>
            <h5 className="text-[1.4rem] sm:text-[1rem] font-[400] text-[#737373] line-through">
              &#8358;{formattedDiscountedPrice}
            </h5>
          </div>
          <h6 className="text-[0.8rem] font-[400] text-[#15803d] mb-[3rem] md:mb-[1rem] sm:mb-[1rem]">
            You save &#8358;{formattedSavedAmount}
          </h6>
          <hr className="mt-[-1rem] border-[1px] border-[#d6d3d1] h-[1px]" />
          <div className="flex sm:flex-col h-[2rem] justify-center items-center gap-[0.4rem] mt-[3rem] sm:mt-[5rem]">
            <div className="flex items-center border-[0.5px] border-black h-[3rem] ">
              <button
                className="w-[2rem] h-[2.9rem] flex border-0 rounded-0 justify-center items-center text-black bg-[#e5e5e5] transition duration-300 hover:bg-[#a1a1aa]"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <p className="h-[2.9rem] w-[2rem] flex justify-center items-center bg-white">
                {quantity}
              </p>
              <button
                className="w-[2rem] h-[2.9rem] flex border-0 rounded-0 justify-center items-center text-black bg-[#e5e5e5] transition duration-300 hover:bg-[#a1a1aa]"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
            <button className="py-[0.5rem] sm:py-[0.8rem] px-[1rem] w-[13rem] sm:w-[18rem] h-[3rem] cursor-pointer border-0 text-white rounded-[3px] bg-primaryTwo">
              Add To Cart
            </button>
            <button className="py-[0.5rem] sm:py-[0.8rem] px-[1rem] w-[13rem] sm:w-[18rem] h-[3rem] cursor-pointer border-0 text-white rounded-[3px] bg-[#a16207]">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="mt-[8rem] md:mt-[4rem] sm:mt-[8rem] font-roboto">
        <ul className="flex justify-center items-center gap-[5rem] md:gap-[7rem] sm:gap-[2rem] mb-[2rem] border-b-[1px] border-[#a3a3a3] py-[1rem]">
          <li
            className={`text-[#6b7280] list-none text-[1.5rem] cursor-pointer font-[600] ${
              selectedContent === "Description" ? "text-[#111111]" : ""
            }`}
            onClick={() => handleContentClick("Description")}
          >
            Description
          </li>
          <li
            className={`text-[#6b7280] list-none text-[1.5rem] cursor-pointer font-[600] ${
              selectedContent === "Shipping" ? "text-[#111111]" : ""
            }`}
            onClick={() => handleContentClick("Shipping")}
          >
            Shipping
          </li>
          <li
            className={`text-[#6b7280] list-none text-[1.5rem] cursor-pointer font-[600] ${
              selectedContent === "Reviews" ? "text-[#111111]" : ""
            }`}
            onClick={() => handleContentClick("Reviews")}
          >
            Reviews
          </li>
        </ul>
        <div className="bg-white sm:mt-[-1rem] py-[2rem] px-[4rem] sm:px-[2rem] rounded-[5px] text-[1.2rem]">
          {selectedContent === "Description" && <p>{description}</p>}
          {selectedContent === "Shipping" && (
            <p>Estimated delivery time: 1 - 7 days</p>
          )}
          {selectedContent === "Reviews" && <p>There are no reviews yet.</p>}
        </div>

        <div className="related">
          <h3 className="text-center mt-[10rem] md:mt-[3rem] text-[1.3rem] border-b-[1px] border-[#a3a3a3]">
            Related Products
          </h3>
          <div className="h-[20rem] mt-[1.5rem]"></div>
        </div>
      </div>
    </div>
  );
}
