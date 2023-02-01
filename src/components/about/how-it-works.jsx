import React from "react";
import AboutHow from "../../assets/about-how.png";
import { BsBoxArrowRight } from "react-icons/bs";
import { GiRat } from "react-icons/gi";
import { RiContactsBookLine } from "react-icons/ri";
import { FaHeadSideVirus } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";

const HowItWorks = () => {
  return (
    <div className="relative w-full h-screen bg-zinc-200 mt-24">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay"
        src={AboutHow}
        alt=""
      />

      <div className="flex flex-col justify-center items-center h-full my-9 mx-16">
        <p className="text-blue-800 text-4xl underline mb-9">How It Works</p>
        <p className="text-lg mb-7">
          We’ve made the process very simple for everyone
        </p>
        <div className="flex flex-wrap justify-center">
          <div className="w-72 flex flex-col justify-start mx-20 ">
            <BsBoxArrowRight className="text-blue-800 text-9xl font-bold" />
            <div className="bg-blue-800 w-7 rounded-full text-white text-center my-5">
              {" "}
              1
            </div>
            <p className="text-lg font-bold">
              Sign up by registering your details on the app
            </p>
          </div>

          <div className="w-72 flex flex-col justify-start mx-20">
            <GiRat className="text-blue-800 text-9xl font-bold" />
            <div className="bg-blue-800 w-7 rounded-full text-white text-center my-5">
              {" "}
              2
            </div>
            <p className="text-lg font-bold">Log In To Mentafix</p>
          </div>

          <div className="w-72 flex flex-col justify-start mx-20 ">
            <RiContactsBookLine className="text-blue-800 text-9xl font-bold" />
            <div className="bg-blue-800 w-7 rounded-full text-white text-center my-5">
              {" "}
              3
            </div>
            <p className="text-lg font-bold">
              Answer few questions to enable us know you better{" "}
            </p>
          </div>

          <div className="w-72 flex flex-col justify-start mx-20 ">
            <FaHeadSideVirus className="text-blue-800 text-9xl font-bold" />
            <div className="bg-blue-800 w-7 rounded-full text-white text-center my-5">
              {" "}
              4
            </div>
            <p className="text-lg font-bold">Start your therapy</p>
          </div>

          <div className="w-72 flex flex-col justify-start mx-20 ">
            <GiCheckMark className="text-blue-800 text-9xl font-bold" />
            <div className="bg-blue-800 w-7 rounded-full text-white text-center my-5">
              {" "}
              5
            </div>
            <p className="text-lg font-bold">
              Choose your preferred Therapy on Mentafix{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
