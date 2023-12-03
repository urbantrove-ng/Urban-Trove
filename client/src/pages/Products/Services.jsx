import React from "react";
import "../../assets/css/services.css";
import MiniHeader from "./MiniHeader";
import servicesData from "../../data/ServiceData";
import MiniServicesHeader from "./MiniServicesHeader";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  function servicedetails(name) {
    navigate(`/services/${name}`);
  }
  return (
    <>
      <MiniHeader />
      <MiniServicesHeader />
      <div className="services">
        {servicesData.map((service) => {
          const { image, startingPrice, services, name } = service;

          const actualPrice = parseFloat(startingPrice);
          const formattedPrice = actualPrice.toLocaleString();

          return (
            <div
              className="services-content"
              key={service.id}
              onClick={() => servicedetails(name)}
            >
              <div className="services-img">
                <img src={image} alt="" />
              </div>
              <div className="services-content-text">
                <h3>{name}</h3>
                <h5>{services}</h5>
                <h6>Prices starting from: &#8358;{formattedPrice}</h6>
                <button>Book A Reservation</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
