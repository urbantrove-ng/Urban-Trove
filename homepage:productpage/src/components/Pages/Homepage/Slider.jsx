import React, { useEffect, useState } from "react";
import "../../../css/Slider.css";
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
    <div className="slider">
      {sliderData.map((slides, index) => {
        const { image, caption } = slides;
        return (
          <div
            key={slides.id}
            className={index === currentSlide ? "slide current" : "slide"}
          >
            {index === currentSlide && (
              <div className="slides">
                <div className="slider-img">
                  <img src={image} alt="Slide" />
                  <div className="gradient-overlay"></div>
                </div>
                <div className="slider-text">
                  <h2>{caption.subheading}</h2>
                  <h1>{caption.heading}</h1>
                  <h1>{caption.break}</h1>
                </div>
              </div>
            )}
          </div>
        );
      })}
      <div className="indicators">
        {sliderData.map((_, index) => (
          <div
            key={index}
            className={
              index === currentSlide ? "indicator active" : "indicator"
            }
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
