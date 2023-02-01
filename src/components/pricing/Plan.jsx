import React from "react";
// import { GrCheckmark } from "react-icons/gr";
import { ImCheckmark2 } from "react-icons/im";

const Plan = () => {
  return (
    <div className=" flex flex-col items-center space-y-7 py-20">
      <h1 className="text-4xl ">Choose your plan</h1>
      <p className="text-2xl text-center">
        Rhinestone comes with 3 plans. Explore which <br /> option is right for
        you
      </p>
      <div className="flex space-x-12">
        <div className="relative text-lg py-11 px-9 shadow-xl w-80 text-start space-y-4  hover:py-16 hover:w-96 hover:shadow-[10px_5px_10px_5px_rgba(0,0,0,0.3)]">
          <h2 className="text-3xl">Basic</h2>
          <p>Manages a small software team of 3 members to build a project </p>

          <p className="font-bold">
            $ <span className="text-6xl">30</span> per month
          </p>

          <div className="flex items-center space-x-2">
            <ImCheckmark2 className="text-green-600" />
            <p>Most affordable plan</p>
          </div>

          <div className="flex items-center space-x-2">
            <ImCheckmark2 className="text-green-600 text-3xl" />
            <p>Unlimited text, audio and video messages</p>
          </div>

          <button className="py-4 px-16 text-white text-xl bg-blue-900 text-center rounded-lg hover:bg-blue-700">
            Get Started
          </button>
        </div>

        <div className="relative text-lg py-11 px-9 shadow-xl w-80 text-start space-y-4  hover:py-16 hover:w-96 hover:shadow-[10px_5px_10px_5px_rgba(0,0,0,0.3)]">
          <div className="absolute top-0 right-3 p-3 text-white bg-blue-900 rounded-b-lg">
            Most populer
          </div>

          <h2 className="text-3xl">Standard</h2>
          <p>
            Oversees teams to plan and assemble work across their organizations.
          </p>
          <p className="font-bold">
            $ <span className="text-6xl">60</span> per month
          </p>
          <p>Everything in the Basic plus:</p>
          <div className="flex items-center space-x-2">
            <ImCheckmark2 className="text-green-600" />
            <p>Get Support from the Support Team</p>
          </div>

          <div className="flex items-center space-x-2">
            <ImCheckmark2 className="text-green-600 text-3xl" />
            <p>Include 4 - 30 minutes of live sessions per month</p>
          </div>

          <button className="py-4 px-16 text-white text-xl bg-blue-900 text-center rounded-lg hover:bg-blue-700 ">
            Get Started
          </button>
        </div>

        <div className="relative text-lg py-11 px-9 shadow-xl w-80 text-start space-y-4  hover:py-16 hover:w-96 hover:shadow-[10px_5px_10px_5px_rgba(0,0,0,0.3)]">
          <h2 className="text-3xl">Premium</h2>
          <p>Empowers mature item driven associations to scale. </p>
          <p className="font-bold">
            $ <span className="text-6xl">80</span> per month
          </p>
          <p>Everything in the Basic and Standard plus:</p>
          <div className="flex items-center space-x-2">
            <ImCheckmark2 className="text-green-600" />
            <p>Get priority support </p>
          </div>

          <div className="flex items-center space-x-2">
            <ImCheckmark2 className="text-green-600" />
            <p>Access multiple workspace</p>
          </div>

          <div className="flex items-center space-x-2">
            <ImCheckmark2 className="text-green-600 text-3xl" />
            <p>Include 4 - 30 minutes of live sessions per month</p>
          </div>

          <button className="py-4 px-16 text-white text-xl bg-blue-900 text-center rounded-lg hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
