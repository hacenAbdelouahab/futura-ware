import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
} from "react-icons/fa";

// import { FaTwitterSquare } from "react-icons/fa5";

export default function Footer() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] uppercase">
          FuturaWare
        </h1>
        <p className="py-4">
          Shape tomorrow with FuturaWare's advanced insights technologies,
          exploring the future with innovative solutions.
        </p>
        <div className="flex md:w-[75%] my-6 justify-between ">
          <FaFacebookSquare size={30} />
          {/* <FaTwitterSquare size={30} /> */}
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
          <FaInstagram size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Services</h6>
          <ul className="">
            <li className="py-2 text-sm">Advanced Insights</li>
            <li className="py-2 text-sm">Predictive Technologies</li>
            <li className="py-2 text-sm">Future Forecasts</li>
            <li className="py-2 text-sm">Innovative Solutions</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Help & Support</h6>
          <ul>
            <li className="py-2 text-sm">Contact Us</li>
            <li className="py-2 text-sm">Knowledge Base</li>
            <li className="py-2 text-sm">Community</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Discover</h6>
          <ul>
            <li className="py-2 text-sm">About Us</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Newsroom</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Privacy Policy</li>
            <li className="py-2 text-sm">Terms of Service</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
