import React from "react";

export default function Newsletter() {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold">
            {" "}
            Stay Ahead with FuturaWare Insights
          </h2>
          <p>
            Subscribe to our newsletter and receive the latest trends and
            insights in future technologies.
          </p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row justify-center items-center">
            <input
              className="p-3 rounded-md w-full flex text-black font-bold focus:outline-none"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#00df9a] w-[200px] font-medium rounded-md sm:ml-4 my-6 mx-auto py-3 text-black">
              Subscribe
            </button>
          </div>
          <p>
            Your data is important to us. Check out our{" "}
            <span className="text-[#00df9a]">Privacy Policy</span> for more
            information.
          </p>
        </div>
      </div>
    </div>
  );
}
