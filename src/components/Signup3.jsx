import React, { useState } from "react";
import SignupImg from "../assets/doc-bg.avif";
import logo from "../assets/logo.png";
import { BsPerson } from "react-icons/bs";
import { BiLockAlt } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

import ReCAPTCHA from "react-google-recaptcha";

const Signup3 = () => {
  const [verified, setVerified] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function onChange() {
    setVerified(true);
  }

  return (
    <div className="relative w-full h-screen bg-zinc-900/100">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay"
        src={SignupImg}
        alt=""
      />

      <div className="flex justify-center items-center h-full ">
        <form className="max-w-[600px] w-full z-10 mx-auto  p-8">
          <div className="flex justify-center py-1 mb-8 ">
            <img className="w-40 h-30 rounded-xl" src={logo} alt="" />
          </div>

          <div className=" bg-white mb-6 pb-5 rounded-lg">
            <div className="flex items-center w-full p-4 focus:border-solid">
              <BsPerson className=" w-8 h-10 text-blue-700 mr-2" />
              <div className="flex w-full flex-col mb-2 ">
                <label>Fullname</label>
                <input
                  placeholder="Fullname"
                  className="pb-1 outline-none"
                  type="text"
                />
              </div>
            </div>

            <div className="flex items-center w-full p-4 focus:border-solid">
              <MdOutlineEmail className=" w-8 h-10 text-blue-700 mr-2" />
              <div className="flex w-full flex-col mb-2 ">
                <label>Email</label>
                <input
                  placeholder="Email"
                  className="pb-1 outline-none"
                  type="email"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center w-full p-4 focus:border-solid">
                <BiLockAlt className=" w-8 h-10 text-blue-700 mr-2" />
                <div className="flex w-full flex-col mb-2 ">
                  <label>Password</label>
                  <input
                    placeholder="Password"
                    className="pb-1 outline-none"
                    type={showPassword ? "text" : "password"}
                  />
                </div>
                <div>
                  {showPassword ? (
                    <AiFillEye
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                      className=" w-8 h-10 mr-2"
                    />
                  ) : (
                    <AiFillEyeInvisible
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                      className=" w-8 h-10 mr-2"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className={`w-2/3  p-3 mr-5 rounded-lg ${
                  verified ? "bg-indigo-700" : "bg-indigo-200"
                } ${
                  verified ? "hover:bg-indigo-500" : "hover:bg-indigo-200"
                }   text-white`}
                disabled={!verified}
              >
                Sign Up
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey="6Lerxf8jAAAAAKhPAUaMyjTZ-ndtsoprtU1CEn9s
"
              onChange={onChange}
            />
          </div>

          <p className="flex text-white items-center mb-4 mt-6">
            <input className=" mr-2" type="checkbox" name="" id="" />I have read
            and agree to the &nbsp;
            <span className="text-blue-700">Terms of Service </span>&nbsp; and{" "}
            &nbsp;
            <span className="text-blue-700">Privacy Policy</span>
          </p>
          <hr />
          <p className="text-center text-white mt-4">
            Already have an account? &nbsp;
            <span className="text-blue-700">
              <a href="">Log in</a>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup3;
