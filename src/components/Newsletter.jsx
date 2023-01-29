import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full bg-black py-28 px-4 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
        <h1 className="md:text-4xl sm:text-3xl text-2xl  font-bold">
          Want tips & tricks to optimize your flow?
        </h1>
        <p className="">Sign up to our newsletter and stay up to date</p>

        </div>
        <div className="my-4 md:pt-0 pt-8">
            <div>
                <input className="p-3 flex w-full rounded-md text-black" type="email" placeholder="Enter Email" />
                <button className="bg-[#079568] w-[200px] rounded-md font-medium my-4  mx-0 py-2 text-black sm:text-xl ">Notify Me</button>
            </div>
            <p className="text-[14px]">We care about protection of your data. Read our <span className="text-[#00df9a]"> Privacy Policiy</span>.</p>

        </div>
        
        
      
      </div>

    </div>
  );
};

export default Newsletter;
