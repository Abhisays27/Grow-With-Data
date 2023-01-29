import React from "react";
import single from "../assests/single.png";
import double from "../assests/double.png";
import triple from "../assests/triple.png";

const Card = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-slate-100">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={single}
            alt=""
            className="w-20 mx-auto mt-[-3rem] bg-white"
            
          />
          <h1 className="text-2xl font-bold  text-center py-8">Single User</h1>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium ">
            <p className="py-2 border-b-2 mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b-2 mx-8">1 Granted User</p>
            <p className="py-2 border-b-2 mx-8">Send upto to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 ">Start Trial</button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={double}
            alt=""
            className="w-20 mx-auto mt-[-3rem] bg-white"
            
          />
          <h1 className="text-2xl font-bold  text-center py-8">double Users</h1>
          <p className="text-center text-4xl font-bold">$259</p>
          <div className="text-center font-medium ">
            <p className="py-2 border-b-2 mx-8 mt-8">1000 GB Storage</p>
            <p className="py-2 border-b-2 mx-8">2 Granted Users</p>
            <p className="py-2 border-b-2 mx-8">Send upto to 4 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 ">Start Trial</button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={triple}
            alt=""
            className="w-20 mx-auto mt-[-3rem] bg-white"
            
          />
          <h1 className="text-2xl font-bold  text-center py-8">Triple Users</h1>
          <p className="text-center text-4xl font-bold">$399</p>
          <div className="text-center font-medium ">
            <p className="py-2 border-b-2 mx-8 mt-8">1500 GB Storage</p>
            <p className="py-2 border-b-2 mx-8">3 Granted Users</p>
            <p className="py-2 border-b-2 mx-8">Send upto to 6 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 ">Start Trial</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
