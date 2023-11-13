import React from "react";

export default function SocialLogin() {
  return (
    <div>
      <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
        <div className="flex flex-wrap text-center justify-center"></div>
        <div className="flex flex-wrap mt-12 justify-center">
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <FaMedal />{" "}
            </div>
            <h6 className="text-xl mt-5 font-semibold text-white">
              Mobile Data & Airtime
            </h6>
            <p className="mt-2 mb-4 text-gray-500">
              Never run out of data or airtime again. Top up your mobile phone
              with just a few clicks, and enjoy uninterrupted connectivity. We
              offer competitive rates and support for all major networks.
            </p>
          </div>
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <FaPoll />{" "}
            </div>
            <h5 className="text-xl mt-5 font-semibold text-white">
              DStv & GOtv Subscriptions
            </h5>
            <p className="mt-2 mb-4 text-gray-500">
              Enjoy your favorite TV shows and sports events without the hassle.
              Subscribe to DStv and GOtv packages easily and cost-effectively
              through our platform.
            </p>
          </div>
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <FaLightbulb />{" "}
            </div>
            <h5 className="text-xl mt-5 font-semibold text-white">
              Electricity Bills
            </h5>
            <p className="mt-2 mb-4 text-gray-500">
              Paying your electricity bills has never been easier. Say goodbye
              to long queues and late fees. Pay your bills conveniently with us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
