import React, { useEffect, useState } from "react";
import sliderData from "../../data/sliderData";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;
  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  //Slider begins at first slide on refresh
  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  const auto = () => {
    slideInterval = setInterval(nextSlide, intervalTime);
  };
  //Auto Scroll
  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => {
      clearInterval(slideInterval);
    };
  }, [currentSlide]);
  return (
    <div className="relative sm:mt-[-1rem] md:mt-[6.5rem]">
      {sliderData.map((slides, index) => {
        const { image, caption } = slides;
        return (
          <div
            key={slides.id}
            className={index === currentSlide ? "slide current" : "slide"}
          >
            {index === currentSlide && (
              <div className="relative">
                <div className="h-[30rem] xl:h-[25rem] sm:h-[20rem] relative">
                  <img
                    src={image}
                    className="w-full h-full object-cover"
                    alt="Slide"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[rgba(126,94,63,0.2)] to-[rgba(128,128,0,0.2)]"></div>
                </div>
                <div className="absolute top-0 bg-[rgba(126,94,63,0.3)] rounded-[10px]">
                  {/* <h2 className="text-[#d4d4d8] text-start text-[2rem] font-[700] py-[0.3rem] px-[1rem]">{caption.subheading}</h2> */}
                  <h1 className="text-[#d4d4d8] text-start text-[3rem] sm:text-[2rem] font-[700] px-[1rem]">
                    {caption.heading}
                  </h1>
                  <h1 className="text-[#d4d4d8] text-start text-[3rem] sm:text-[2rem] font-[700] px-[1rem]">
                    {caption.break}
                  </h1>
                </div>
              </div>
            )}
          </div>
        );
      })}
      <div className="flex justify-center absolute bottom-[20px] left-[50%] translate-x-[-50%]">
        {sliderData.map((_, index) => (
          <div
            key={index}
            className={`w-[10px] h-[10px] rounded-[50%] mx-[5px] bg-[#ccc] cursor-pointer ${
              index === currentSlide ? "bg-primaryOne" : ""
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
