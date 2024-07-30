import React from "react";
import Shoe from "../../assets/shoe.png";
import az from "../../assets/amazon.png";
import fk from "../../assets/flipkart.png";
const Hero = () => {
  return (
    <div className="py-16 px-2 mb-16 sm:mb-0 sm:px-0  drop-shadow-[2px_2px_5px_black]">
      <div className="container ">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 place-items-center mx-auto w-full">
          {/* Content Div  */}
          <div className=" mx-auto flex flex-col gap-6 order-2 xl:order-1">
            <p className="font-bold text-[80px] sm:text-[108px] leading-none uppercase">
              Your Feet Deserve The Best
            </p>
            <p>
              YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
              SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
              OUR SHOES.
            </p>
            <div className="flex gap-4 items-center">
              <div className="px-4 bg-[rgba(208,28,40,1)] text-white py-1 cursor-pointer">Shop Now</div>
              <div className="px-4  text-gray-200 py-1 bg-black cursor-pointer">Category</div>
            </div>
            <div className="flex gap-4 items-center">
              <img src={az} className="-mb-2" alt="" />
              <img src={fk} alt="" />
            </div>
          </div>

          {/* Img Div */}

          <div className=" order-1 xl:order-2 ">
            <img src={Shoe} alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
