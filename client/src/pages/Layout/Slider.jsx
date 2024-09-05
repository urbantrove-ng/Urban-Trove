import sliderData from "../../data/sliderData";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
export default function Slider() {
  return (
    <Carousel
      autoPlay
      useKeyboardArrows={false}
      infiniteLoop
      showStatus={false}
      showArrows={false}
      showThumbs={false}
    >
      {sliderData.map((slides) => {
        const { image, caption } = slides;
        return (
          <div key={slides.id}>
            <div className="relative">
              <div className=" lg:h-[30rem] h-[25rem] relative">
                <img
                  src={image}
                  className="w-full h-full object-cover"
                  alt="Slide"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[rgba(126,94,63,0.2)] to-[rgba(128,128,0,0.2)]"></div>
              </div>
              <div className="absolute top-[30%] rounded-[10px]">
                <h1 className="text-white text-start lg:text-[3rem] text-[2rem] font-bold px-[1rem]">
                  {caption.heading}
                </h1>
                <h1 className="text-white text-start lg:text-[3rem] text-[2rem] font-bold px-[1rem]">
                  {caption.break}
                </h1>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}
