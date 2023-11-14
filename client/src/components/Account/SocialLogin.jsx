import React from "react";
import { FaApple, FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function SocialLogin() {
  return (
    <>
      <div className=" text-center mb-1 text-4xl ">
        <button
          className="bg-white text-black-400 shadow-lg font-normal  square-full mr-4 p-3"
          type="button"
        >
          <FaApple />{" "}
        </button>
        <button
          className="bg-white text-blue-600 shadow-lg font-normal h-13 w-13 items-center justify-center align-center square-full  mr-2 p-3"
          type="button"
        >
          <FaFacebookF />{" "}
        </button>
        <button
          className="bg-white shadow-lg font-normal square-full  mr-2 p-3"
          type="button"
        >
          <FcGoogle />{" "}
        </button>
      </div>
    </>
  );
}
