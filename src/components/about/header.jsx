import React from "react";
import AboutHeader from "../../assets/about-header.png";

const Header = () => {
  return (
    <div className="flex mx-auto  sm:grid-cols-2 h-full max-h-[600px] w-full m-10">
      <div className="w-[1800px] sm:block">
        <img className="h-full w-full object-cover" src={AboutHeader} alt="" />
      </div>
      <div className=" flex flex-col justify-center items-center  text-white w-full h-[600px] bg-indigo-700">
        <p className="text-6xl mb-16 text-center leading-tight">
          Mentafix is one of the best online therapy platform{" "}
        </p>
        <p className="text-4xl text-center leading-tight px-40">
          Our Mission is to help you prirotize your mental health and find
          balance
        </p>
      </div>
    </div>
  );
};

export default Header;
