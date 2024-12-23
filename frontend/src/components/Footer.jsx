import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-4 my-10 mt-40 text-sm bg-slate-900 p-20 rounded ">
        <div>
          <img src={assets.logo} className="mb-5 ml-[-1vw] w-64" alt="" />
          <p className="w-full md:w-2/3 text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
            minus sint vitae labore vero sit hic cupiditate maiores. Eaque,
            autem.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 text-gray-300"> COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-500">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className=" text-white">
            <p className="text-xl font-medium mb-5"> GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-600"></ul>
            <li>+1-212-456-7890</li>
            <li>contact@foreveryou.com</li>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center"> Copyright 2024@ forever.com -All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
