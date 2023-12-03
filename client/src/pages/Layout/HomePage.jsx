import React from "react";
import "../../assets/css/homepage.css";
import productData from "../../data/productsData";
import servicesData from "../../data/ServiceData";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Slider from "./Slider";
import Footer from "../../Footer";
import Header from "../../Header";

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="homepage">
        <Slider />
        <div className="homepage-products">
          <h5>Products</h5>
          <div className="hp-content">
            {productData.map((product) => {
              const { mainImage, header, link } = product;
              return (
                <div className="hp-products" key={product.id}>
                  <h6>{header}</h6>
                  <div className="product-img">
                    <img src={mainImage} alt="" />
                  </div>
                  <Link to={link.url}>
                    <button>
                      {link.text} <span className="btn-arrow">&rarr;</span>
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="homepage-products">
          <h5>Services</h5>
          <div className="hp-content">
            {servicesData.map((service) => {
              const { image, header, link } = service;
              return (
                <div className="hp-products" key={service.id}>
                  <h6>{header}</h6>
                  <div className="product-img">
                    <img src={image} alt="" />
                  </div>
                  <Link to={link.url}>
                    <button>
                      {link.text} <span className="btn-arrow">&rarr;</span>
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

// export default function Homepage() {
//   return (

//   )
// }
