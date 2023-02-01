import React from "react";
import SignupImg from "../assets/doc-bg.avif";
import { BsClock } from "react-icons/bs";
import { MdLockClock } from "react-icons/md";
import { MdOutlineLockClock } from "react-icons/md";

import Slider from "./Slider";
import SigninImg from "../assets/signup-bg.png";

const HomePage = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative w-screen h-screen mb-4 bg-zinc-600">
        <img
          className="absolute w-full h-full blur-sm object-cover mix-blend-overlay"
          src={SignupImg}
          alt=""
        />
        <div className="text-center text-white z-10">
          <h2 className="text-4xl mb-5">
            Effective Therapy that starts <br /> with You!
          </h2>
          <p>we care about your mental health.</p>
          <p>Need Professional help?</p>
          <button className="bg-blue-900 py-3 px-10 mt-8">
            Get Started with us
          </button>
        </div>
      </div>
      <div className="my-10 min-h-[300px] flex flex-col">
        <h2 className="text-center text-2xl my-10">
          Why should I choose MentaFix?
        </h2>
        <div className="flex flex-wrap justify-evenly">
          <div className="w-3/12 min-w-[300px] mb-5">
            <div className="flex items-center text-lg font-semibold mb-3">
              <BsClock className="mr-2" />
              <h3>Accessible & Time-saving</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              dolorum! Dolores esse accusamus aperiam placeat perferendis
              eveniet adipisci odio repudiandae!
            </p>
          </div>
          <div className="w-3/12 min-w-[300px] mb-5">
            <div className="flex items-center text-lg font-semibold mb-3">
              <MdOutlineLockClock className="mr-2" />
              <h3>Secure & Confidential</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              dolorum! Dolores esse accusamus aperiam placeat perferendis
              eveniet adipisci odio repudiandae!
            </p>
          </div>
          <div className="w-3/12 min-w-[300px] mb-5">
            <div className="flex items-center text-lg font-semibold mb-3">
              <MdLockClock className="mr-2" />
              <h3>Anonymous & Private</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              dolorum! Dolores esse accusamus aperiam placeat perferendis
              eveniet adipisci odio repudiandae!
            </p>
          </div>
        </div>
      </div>
      <Slider />

      <div className="flex items-center justify-around h-56">
        <div className="w-6/12 p-8 flex items-center justify-around">
          <img className="w-6/12 max-w-xs mt-8" src={SigninImg} alt="" />
        </div>
        <div className="w-6/12 flex flex-col items-start justify-center">
          <h2 className="text-2xl font-semibold mb-4">
            Subscribe to our Newsletter!
          </h2>
          <p className="text-sm mb-6">
            Subscribe to our newsletter and stay updated!
          </p>
          <input
            placeholder="Email"
            style={{ border: "1px solid black" }}
            className="focus:outline-none relative bg-white p-2 w-6/12"
            type="email"
          />

          <button
            className={`w-6/12  py-3 my-4 bg-indigo-700 hover:bg-indigo-500 
               relative text-white`}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
