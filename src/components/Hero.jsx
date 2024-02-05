import React from "react";
import Typed from "react-typed";

export default function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="uppercase text-[#00df9a] font-bold p-2">
          Shaping the Future with Innovative Technologies
        </p>
        <h1 className="font-bold text-4xl sm:text-6xl md:text-7xl md:py-6">
          Shape Tomorrow with FuturaWare.
        </h1>
        <div className="flex justify-center py-4">
          <p className="font-bold text-xl sm:text-4xl ">
            Fast, flexible solutions for
          </p>
          <Typed
            className="font-bold text-xl sm:text-4xl md:pl-4 pl-2"
            strings={["Insights", "Predictions", "Innovations"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Explore the future with advanced technologies and stay ahead in the
          game.
        </p>
        <button className="bg-[#00df9a] w-[200px] font-medium rounded-md my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
}
