import React, { useState } from "react";
import "../../../css/ProductDetail.css";
import { useParams } from "react-router-dom"; 
import productData from "../../data/productsData";

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
    <div className="productdetail">
      <div className="pd-top">
        <div className="pd-top-images">
          <div className="mini-images">
            {otherImage1 && (
              <div className="min-img">
                <img src={otherImage1} alt="" />
              </div>
            )}
            {otherImage2 && (
              <div className="min-img">
                <img src={otherImage2} alt="" />
              </div>
            )}
            {otherImage3 && (
              <div className="min-img">
                <img src={otherImage3} alt="" />
              </div>
            )}
            {otherImage4 && (
              <div className="min-img">
                <img src={otherImage4} alt="" />
              </div>
            )}
          </div>
          <div className="major-img">
            <img src={mainImage} alt="" />
          </div>
        </div>

        <div className="pd-top-dets">
          <h2>{details}</h2>
          <p>Sold by: {seller}</p>
          <hr />
          <div className="pd-top-price">
            <h4>&#8358;{formattedActualPrice}</h4>
            <h5>&#8358;{formattedDiscountedPrice}</h5>
          </div>
          <h6>You save &#8358;{formattedSavedAmount}</h6>
          <hr />
          <div className="pd-top-buttons">
            <div className="quantity">
              <button onClick={decreaseQuantity}>-</button>
              <p>{quantity}</p>
              <button onClick={increaseQuantity}>+</button>
            </div>
            <button className="cartnow">Add To Cart</button>
            <button className="buynow">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="pd-bottom">
        <ul>
          <li
            className={`pd-bottom-link ${
              selectedContent === "Description" ? "active" : ""
            }`}
            onClick={() => handleContentClick("Description")}
          >
            Description
          </li>
          <li
            className={`pd-bottom-link ${
              selectedContent === "Shipping" ? "active" : ""
            }`}
            onClick={() => handleContentClick("Shipping")}
          >
            Shipping
          </li>
          <li
            className={`pd-bottom-link ${
              selectedContent === "Reviews" ? "active" : ""
            }`}
            onClick={() => handleContentClick("Reviews")}
          >
            Reviews
          </li>
        </ul>
        <div className="pd-bottom-text">
          {selectedContent === "Description" && <p>{description}</p>}
          {selectedContent === "Shipping" && (
            <p>Estimated delivery time: 1 - 7 days</p>
          )}
          {selectedContent === "Reviews" && <p>There are no reviews yet.</p>}
        </div>

        <div className="related">
          <h3>Related Products</h3>
          <div className="related-content">
            
          </div>
        </div>
      </div>
    </div>
  );
}
