import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { servicesData } from "../../data/ServiceData";
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
    <div className="mt-[7rem] md:mt-[6rem] sm:mt-[4.2rem] mx-[1rem] py-[2rem] px-[3rem] sm:px-0">
      <div className="servicedetail-top">
        <div className="h-[20rem] md:h-[15rem] sm:h-[10rem]">
          <img
            className="w-full h-full object-cover rounded-[10px]"
            src={image}
            alt=""
          />
        </div>
        <h2 className="mt-[1rem] sm:mt-[0.3rem] text-[2rem] sm:text-[1.5rem] font-[500]">
          {name}
        </h2>
        <div className="flex md:flex-col sm:flex-col sm:gap-[0.3rem] items-center md:items-start sm:items-start ml-[-1.1rem]">
          <h5 className="flex gap-[0.3rem] sm:gap-[0.35rem] px-[1rem] font-[400] border-r-[0.5px] border-black md:border-0 sm:border-0">
            <TfiLocationPin className="mt-[0.2rem] sm:text-[1.2rem]" />
            {address}
          </h5>
          <h5 className="flex gap-[0.5rem] px-[1rem] font-[400] border-r-[0.5px] border-black md:border-0 sm:border-0">
            <BsTelephoneForward className=" mt-[0.2rem]" /> {phoneNumber}
          </h5>
          <h5 className="flex gap-[0.5rem] px-[1rem] font-[400]">
            <FaLaptop className="mt-[0.3rem]" />{" "}
            {website ? website : "Website not available"}
          </h5>
        </div>
        <h4 className="text-[2rem] mt-[8rem] md:mt-[3rem] sm:mt-[3rem] font-[400] text-[#1e293b]">
          About us
        </h4>
        <p className="font-roboto py-[0.4rem] leading-[1.7rem] text-[1.2rem] text-[#1e293b]">
          {about}
        </p>
        <p className="font-roboto py-[0.4rem] leading-[1.7rem] text-[1.2rem] text-[#1e293b]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          laudantium porro necessitatibus tempora commodi sunt accusantium
          aperiam, laborum magnam fugiat explicabo enim ratione maiores omnis
          recusandae eum minima dolore cumque.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center m-[3rem]">
        <div className="servicedetail-pricelist">
          <h4 className="text-[2rem] font-[400] text-[#1e293b] border-b-[0.5px] border-black text-center">
            {category !== "restaurant" ? "Price List" : "Our Menu"}
          </h4>
          <div className="mt-[2.5rem] sm:mt-[1rem] h-[25rem] sm:h-[12rem] w-[20rem] sm:w-[12rem] flex gap-[3rem] flex-wrap">
            <img
              className="w-full h-full rounded-[10px]"
              src={pricelist}
              alt=""
            />
          </div>
        </div>

        <div className="m-[10rem] sm:m-[3rem] relative">
          <h4 className="text-[2rem] font-[400] text-[#1e293b] text-center">
            {category !== "restaurant" ? "Gallery" : "Our Food"}
          </h4>

          <div className="mt-[1rem] h-[20rem] w-[80rem] md:w-[30rem] sm:w-[20rem]">
            <div className="flex md:grid md:grid-cols-2 sm:grid-cols-2 md:gap-[1rem] sm:gap-[1rem] gap-[2px] relative overflow-hidden">
              {firstSixImages.map((image, index) => (
                <div
                  key={index}
                  className="relative w-[20rem] md:w-[15rem] sm:w-[10rem] h-[20rem] md:h-[14rem] sm:h-[10rem] overflow-hidden"
                  onClick={() => {
                    if (!showMoreClicked) {
                      handleOpenModal(index);
                    }
                  }}
                >
                  <img
                    className="h-full w-full object-cover cursor-pointer transition duration-200 hover:scale-[1.03]"
                    src={image}
                    alt={`Sample Image ${index + 1}`}
                  />
                  {index === 3 && (
                    <button
                      className="absolute bottom-0 left-0 w-full bg-black p-[5px] sm:p-[1px] border-0 cursor-pointer text-white"
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
                <div className="fixed top-0 left-0 right-0 z-[400] bg-white flex items-center justify-center w-full h-full">
                  <span
                    className="absolute top-[5%] md:text-[1.5rem] right-[3%] sm:right-[1] cursor-pointer"
                    onClick={closeAllImagesModal}
                  >
                    <FaTimes />
                  </span>
                  <div className="grid grid-cols-5 sm:grid-cols-3 md:grid-cols-3 gap-[1rem] sm:gap-[0.5rem] mb-[15rem] sm:mb-[8rem] md:mb-[3rem]">
                    {service.sampleimages.map((image, index) => (
                      <img
                        className="rounded-[10px] w-[15rem] md:w-[13rem] sm:w-[8rem] md:h-[11rem] sm:h-[8rem] cursor-pointer object-cover"
                        key={index}
                        src={image}
                        onClick={() => openFullScreenModal(index)}
                        alt={`Image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              )}
              {/* Modal for individual Images */}
              {showModal && (
                <div className="fixed top-0 bottom-0 left-0 right-0 z-50 bg-[rgba(0,0,0,0.8)] flex items-center justify-center w-full h-full">
                  <IoIosArrowForward
                    className="fixed cursor-pointer opacity-60 md:opacity-100 text-white z-[200]  md:h-[40rem] sm:h-[30rem] text-[1.5rem] md:w-[6rem]  sm:w-[4rem] md:px-[1rem]  hover:opacity-100 top-[50%] translate-y-[-50%] right-[40px] md:right-0 sm:right-0"
                    onClick={nextSlide}
                  />
                  <IoIosArrowBack
                    className="fixed cursor-pointer opacity-60 md:opacity-100 text-white z-[200]  md:h-[40rem] sm:h-[30rem] text-[1.5rem] md:w-[6rem] sm:w-[4rem] md:px-[1rem] hover:opacity-100 top-[50%] translate-y-[-50%] left-[40px] md:left-0 sm:left-0"
                    onClick={prevSlide}
                  />
                  <FaTimes
                    className="fixed cursor-pointer opacity-60 md:opacity-100 text-white z-[200] text-[1.5rem] hover:opacity-100 top-[40px] sm:top-[100px] right-[40px] sm:right-[20px]"
                    onClick={closeModal}
                  />
                  <div
                    className="flex items-center justify-center h-[100vh] w-[100vw]"
                    onClick={handleOpenModal}
                  >
                    <img
                      className="max-w-full max-h-full object-contain cursor-pointer transition duration-200"
                      src={sampleimages[slideNumber]}
                      alt=""
                    />
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
