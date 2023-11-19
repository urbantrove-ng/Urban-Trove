import React from "react";
import { FaApple, FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function SocialLogin() {
  return (
    <>
      <div className=" text-center mb-1 text-4xl ">
        <button
          className="bg-gray-300 text-black-400 shadow-lg font-normal  square-full mr-4 p-3"
          type="button"
        >
          <FaApple />{" "}
        </button>
        <button
          className="bg-gray-300 text-blue-600 shadow-lg font-normal  square-full  mr-4 p-3"
          type="button"
        >
          <FaFacebookF />{" "}
        </button>
        <button
          className="bg-gray-300 shadow-lg font-normal square-full  p-3"
          type="button"
          onClick="#"
        >
          <FcGoogle />{" "}
        </button>
      </div>
    </>
  );
}
