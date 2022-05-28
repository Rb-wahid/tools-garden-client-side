import React from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/images/bg.svg";
import dog from "../assets/images/dog.png";
import error from "../assets/images/error.png";
import neutral from "../assets/images/neutral.png";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Not Found page for Desk top */}
      <div className=" hidden md:block -mt-24 w-screen h-screen object-cover  relative bg-[#A0C3D2]">
        <div className="h-screen flex justify-center text-6xl font-extrabold md:pt-56">
          Woof, something went wrong!
          <button
            onClick={() => navigate("/")}
            type="button"
            className="absolute mt-36 inline-block px-10 py-5 bg-black text-white font-bold text-sm leading-tight uppercase rounded-full shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
          >
            Back To Home
          </button>
        </div>
        <div></div>
        <img className=" absolute  bottom-0 -left-5" src={bg} alt="" />
        <img
          className=" absolute md:w-96 right-36 bottom-36"
          src={dog}
          alt=""
        />
        <div className="flex justify-center ">
          <img
            className=" absolute md:w-96 bottom-0 left-48"
            src={error}
            alt=""
          />
        </div>
        <img
          className="rotate-90 absolute md:w-96 -left-28 bottom-36 top-72"
          src={neutral}
          alt=""
        />
      </div>

      {/* For mobile */}
      <div className="visible md:hidden flex mt-28 justify-center w-screen h-screen">
        <div className="px-4 lg:py-12">
          <div className="lg:gap-4 lg:flex">
            <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
              <h1 className="font-bold text-blue-600 text-9xl">404</h1>
              <p className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                <span className="text-red-500">Oops!</span> Page not found
              </p>
              <p className="mb-8 text-center text-gray-500 md:text-lg">
                The page you’re looking for doesn’t exist.
              </p>
              <button
                onClick={() => navigate("/")}
                type="button"
                className=" inline-block px-10 py-5 bg-black text-white font-bold text-sm leading-tight uppercase rounded-full shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
              >
                Back To Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
