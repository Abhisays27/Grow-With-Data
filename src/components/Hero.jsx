import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-90px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold md:text-2xl  p-2 py-4">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow With Data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-4xl sm:text-3xl text-xl font-bold ">
            Fast , flexible financing for{" "}
          </p>
          <Typed
            className="md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-3 text-gray-700"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backspeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl  font-bold text-gray-500 pt-2 ">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms.
        </p>
        <button className="bg-[#079568] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black sm:text-2xl sm:font-bold">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
