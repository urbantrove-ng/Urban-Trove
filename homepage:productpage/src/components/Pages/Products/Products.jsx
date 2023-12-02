import React from "react";
import "../../../css/Products.css";
import MiniHeader from "./MiniHeader";
import productData from "../../data/productsData";
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
      <div className="products">
        {productData.map((product) => {
          const { mainImage, details, price, seller } = product;

          const actualPrice = parseInt(price.actualPrice)
          const discountPrice = parseInt(price.discountPrice)

          const formattedActualPrice = actualPrice.toLocaleString()
          const formattedDiscountedPrice = discountPrice.toLocaleString()
          
          return (
            <div className="products-content" onClick={() => productdetails(details)} key={product.id}>
              <div className="products-img">
                <img src={mainImage} alt="" />
              </div>
              <h4>{details}</h4>
              <hr />
              <div className="pc-price">
                <h2>&#8358;{formattedActualPrice}</h2>
                <h3>&#8358;{formattedDiscountedPrice}</h3>
                <h6>{price.discount}</h6>
              </div>
              <hr />
              {/* <h4>Rating</h4> */}
              <p>Sold by: {seller} </p>
              <button>Add To Cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
