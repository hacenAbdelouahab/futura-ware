import React from "react";
import singleUser from "../assets/single.png";
import doubleUser from "../assets/double.png";
import tripleUser from "../assets/triple.png";

function Cards() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col rounded-lg p-4 my-4 duration-300 hover:scale-105">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={singleUser}
            alt="Single User"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Individual Plan
          </h2>
          <p className="font-bold text-center text-4xl">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 mx-8 border-b mt-8">500 GB Storage</p>
            <p className="py-2 mx-8 border-b">Single User Access</p>
            <p className="py-2 mx-8 border-b">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] font-medium rounded-md my-6 mx-auto py-3 text-black">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={doubleUser}
            alt="Double User"
          />
          <h2 className="text-2xl font-bold text-center py-8">Team Plan</h2>
          <p className="text-center text-4xl font-bold">$299</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">1 TB Storage</p>
            <p className="py-2 border-b mx-8">Up to 5 User Access</p>
            <p className="py-2 border-b mx-8">Send up to 5 GB</p>
          </div>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={tripleUser}
            alt="Triple User"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Enterprise Plan
          </h2>
          <p className="text-center text-4xl font-bold">$499</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Unlimited Storage</p>
            <p className="py-2 border-b mx-8">Custom User Access</p>
            <p className="py-2 border-b mx-8">Send Unlimited Data</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
