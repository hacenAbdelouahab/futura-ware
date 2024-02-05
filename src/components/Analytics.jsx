import React from "react";
import futuristicDashboard from "../assets/laptop.jpg";

function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={futuristicDashboard} alt="Futuristic Dashboard Image" />
        <div className="flex flex-col justify-center md:text-left text-center">
          <p className="text-[#00df9a] font-bold">FUTURAWARE INSIGHTS PLATFORM</p>
          <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Unlock Future Possibilities with Advanced Insights</h2>
          <p>
            Explore the potential of tomorrow with FuturaWare's cutting-edge
            insights platform. Our advanced analytics dashboard centralizes data
            to provide you with unparalleled foresight into emerging trends and
            opportunities.
          </p>
          <button className="text-[#00df9a] w-[200px] font-medium rounded-md my-6 md:mx-0 mx-auto py-3 bg-black">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
