import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../../css/ServiceDetails.css";
import servicesData from "../../data/ServiceData";
import { TfiLocationPin } from "react-icons/tfi";
import { BsTelephoneForward } from "react-icons/bs";
import { IoIosLaptop } from "react-icons/io";
import { FaLaptop } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaTimes } from "react-icons/fa";

export default function ServiceDetails() {
  const { name } = useParams();
  const service = servicesData.find((service) => service.name === name);
  const [showModal, setShowModal] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [showAllImagesModal, setShowAllImagesModal] = useState(false);
  const [showMoreClicked, setShowMoreClicked] = useState(true);

  if (!service) {
    return <div>Page not found</div>;
  }
  //Open Single Modal for All Images Modal
  const openFullScreenModal = (index) => {
    setShowModal(true);
    setSlideNumber(index);
  };
  //Display just the first 4 images from the images sent
  const firstSixImages = service.sampleimages.slice(0, 4);

  //Open All Images Modal
  const openAllImagesModal = () => {
    setShowAllImagesModal(true);
  };
  //Close All Images Modal
  const closeAllImagesModal = () => {
    setShowAllImagesModal(false);
  };

  //Open Individual Images Modal
  const handleOpenModal = (index) => {
    setShowModal(true);
    setSlideNumber(index);
  };
  //Close Individual Image Modal
  const closeModal = () => {
    setShowModal(false);
  };
  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(sampleimages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === sampleimages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  // useEffect(()=>{
  //   setShowMoreClicked(true)
  // }, [showMoreClicked])


  //Keydown Events
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 27) {
        toggleModal();
      } else if (event.keyCode === 37) {
        prevSlide();
      } else if (event.keyCode === 39) {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [slideNumber]);

  const {
    image,
    startingPrice,
    services,
    category,
    address,
    phoneNumber,
    website,
    about,
    sampleimages,
    pricelist,
  } = service;

  return (
    <div className="servicedetail">
      <div className="servicedetail-top">
        <div className="servicedetail-img">
          <img src={image} alt="" />
        </div>
        <h2>{name}</h2>
        <div className="servicedetail-info">
          <h5>
            <TfiLocationPin />
            {address}
          </h5>
          <h5>
            <BsTelephoneForward /> {phoneNumber}
          </h5>
          <h5>
            <FaLaptop /> {website ? website : "Website not available"}
          </h5>
        </div>
        <h4>About us</h4>
        <p>{about}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          laudantium porro necessitatibus tempora commodi sunt accusantium
          aperiam, laborum magnam fugiat explicabo enim ratione maiores omnis
          recusandae eum minima dolore cumque.
        </p>
      </div>

      <div className="servicedetail-bottom">
        <div className="servicedetail-pricelist">
          <h4>{category !== "restaurant" ? "Price List" : "Our Menu"}</h4>
          <div className="pricelist-img">
            <img src={pricelist} alt="" />
          </div>
        </div>

        <div className="servicedetail-images">
          <h4>{category !== "restaurant" ? "Gallery" : "Our Food"}</h4>

          <div className="servicedetail-content">
            <div className="gallery-images">
              {firstSixImages.map((image, index) => (
                <div
                  key={index}
                  className="image-container"
                  onClick={() => {
                    if (!showMoreClicked) {
                      handleOpenModal(index);
                    }
                  }}
                >
                  <img src={image} alt={`Sample Image ${index + 1}`} />
                  {index === 3 && ( 
                    <button
                    className="show-more-button"
                    onClick={() => {
                      setShowMoreClicked(true);
                      openAllImagesModal();
                    }}
                  >
                    Show More
                  </button>
                  )}
                </div>
              ))}

              {/* Modal for all Images */}
              {showAllImagesModal && !showModal && (
                <div className="all-images-modal">
                  <span className="modal-close" onClick={closeAllImagesModal}>
                    <FaTimes />
                  </span>
                  <div className="modal-content">
                    {service.sampleimages.map((image, index) => (
                      <img key={index} src={image} onClick={() => openFullScreenModal(index)} alt={`Image ${index + 1}`} />
                    ))}
                  </div>
                </div>
              )}
              {/* Modal for individual Images */}
              {showModal && (
                <div className="sliderWrap">
                  <IoIosArrowForward className="btnNext" onClick={nextSlide} />
                  <IoIosArrowBack className="btnPrev" onClick={prevSlide} />
                  <FaTimes className="btnClose" onClick={closeModal} />
                  <div className="fullScreenImage" onClick={handleOpenModal}>
                    <img src={sampleimages[slideNumber]} alt="" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
