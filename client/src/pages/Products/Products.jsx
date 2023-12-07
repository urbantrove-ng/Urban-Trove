import React from "react";
import MiniHeader from "./MiniHeader";
import {productData} from "../../data/productsData";
import MiniProductsHeader from "./MiniProductsHeader";
import {useNavigate} from "react-router-dom"

export default function Products() { 
    const navigate = useNavigate()

    function productdetails(details){
        navigate(`/products/${details}`)
    }
    
  return (
    <>
      <MiniHeader />
      <MiniProductsHeader/>
      <div className="my-[2rem] mx-[1rem] bg-[#e5e5e5] p-[2rem] grid grid-cols-4 gap-[1rem] justify-center font-sans">
        {productData.map((product) => {
          const { mainImage, details, price, seller } = product;

          const actualPrice = parseInt(price.actualPrice)
          const discountPrice = parseInt(price.discountPrice)

          const formattedActualPrice = actualPrice.toLocaleString()
          const formattedDiscountedPrice = discountPrice.toLocaleString()
          
          return (
            <div className="bg-white py-[0.5rem] px-[0.6rem] flex flex-col justify-center cursor-pointer transition duration-300 hover:shadow-1xl" onClick={() => productdetails(details)} key={product.id}>
              <div className="h-[14rem] w-[17rem] flex justify-center self-center">
                <img className="w-full h-full" src={mainImage} alt="" /> 
              </div>
              <h4 className="mb-[0.5rem] font-[400] mt-[0.5rem] h-[3.2rem]">{details}</h4>
              <hr className="border-[0.2px] h-[1px] mt-[-0.7rem] mb-[0.2rem]"/>
              <div className="flex justify-between items-center ">
                <h2 className="font-[700] text-[1.4rem]">&#8358;{formattedActualPrice}</h2>
                <h3 className="text-[1rem] font-[700] text-[#737373] line-through">&#8358;{formattedDiscountedPrice}</h3>
                <h6 className="bg-[#bb8c56] font-[700] text-[0.6rem] p-[0.1rem] rounded-[5px] text-white">{price.discount}</h6>
              </div>
              <hr />
              {/* <h4>Rating</h4> */}
              <p className="text-[0.7rem] my-[0.3rem]">Sold by: {seller} </p>
              <button className="py-[0.4rem] text-[0.8rem] border-[1px] border-primaryTwo rounded-[3px] text-primaryTwo bg-white cursor-pointer transition duration-300 hover:text-white hover:bg-primaryTwo">Add To Cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
