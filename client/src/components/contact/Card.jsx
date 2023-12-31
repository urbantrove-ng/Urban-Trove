import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Card() {
  //AOS ANIMATION CODER
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-row  md:flex-col">
      <div className="m-4 w-full md:w-2/3 md:justify-center md:mt-2">
        <div className="text-center">
          <div
            className="h-60 rounded-xl bg-white text-gray-700 shadow-2xl"
            data-aos="fade-up"
          >
            <div className="p-6">
              <h5 className="text-center mb-4 text-xl font-semibold text-blue-gray-900">
                Reach Us At
              </h5>
              <div className="mt-4 ">+234-907-359-9689</div>
              <div className="mt-4 ">Feedback@ohionbills.com</div>
              <div className="mt-4 ">
                Ince Quaters, Quzape Hills, Asokoro Extension, FCT Abuja,
                Nigeria
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-4 w-full md:w-3/4 md:ml-4 md:mt-0">
        <div className="text-center">
          <div
            className="h-60 rounded-xl bg-white text-gray-700 shadow-2xl"
            data-aos="fade-up"
          >
            <div className="p-6">
              <h5 className="text-center mb-4 text-xl  font-semibold text-blue-gray-900">
                Sponsorship & Collaboration
              </h5>

              <div className="mt-4 ">+234-907-359-9689</div>
              <div className="mt-4 ">Colaboration@ohionbills.com</div>
              <div className="mt-4 ">
                Ince Quaters, Quzape Hills, Asokoro Extension, FCT Abuja,
                Nigeria
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
