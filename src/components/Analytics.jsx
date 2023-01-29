import React from "react";
import laptop from "../assests/laptop.jpg";
const Analytics = () => {
  return (
    <div className="w-full bg-slate-50 py-16 px-4 ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2  ">
        <img src={laptop} alt="/" className="w-[500px] mx-auto my-4" />
        <div className=" flex flex-col justify-center">
          <p className="text-[#00df9a] md:text-xl font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analytics Centrally</h1>
          <p className="text-sm md:text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            cumque provident quas quasi molestias ipsa, quae sed magnam
            veritatis recusandae error consequatur rem repellat atque quis magni
            commodi labore. In.
          </p>
          <button className="bg-[#000000] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a] sm:text-2xl sm:font-bold md:mx-0">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
