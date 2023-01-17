import React, { useState } from "react";
import SignupImg from "../assets/img/doc-bg.avif";
import logo from "../assets/img/logo.png";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import ReCAPTCHA from "react-google-recaptcha";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

const Signup2 = () => {
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
        <form className="max-w-[500px] w-full z-10 mx-auto bg-white p-8">
          <div className="flex justify-center ">
            <img className="w-40 h-30 rounded-lg" src={logo} alt="" />
          </div>

          <div className="flex flex-col mb-2 ">
            <label>Fullname</label>
            <input className="border relative bg-gray-200 p-2" type="text" />
          </div>

          <div className="flex flex-col mb-2 ">
            <label>Email</label>
            <input className="border relative bg-gray-200 p-2" type="email" />
          </div>

          <div className="relative">
            <div className="flex flex-col  mb-2">
              <label>Password</label>
              <input
                className="border relative bg-gray-200 p-2"
                type={showPassword ? "text" : "password"}
              />
            </div>

            <div className="absolute top-11 transform -translate-y-1/2 right-3">
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

          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey="6Lerxf8jAAAAAKhPAUaMyjTZ-ndtsoprtU1CEn9s
"
              onChange={onChange}
            />
          </div>

          <button
            className={`w-full  py-3 mt-5 ${
              verified ? "bg-indigo-700" : "bg-indigo-200"
            } ${
              verified ? "hover:bg-indigo-500" : "hover:bg-indigo-200"
            }   relative text-white`}
            disabled={!verified}
          >
            Sign Up
          </button>

          <div className="flex w-full justify-center py-4">
            <p className="border w-1/2 shadow-lg hover:shadow-xl px-10 py-3 flex justify-center items-center">
              <a href="" className="flex items-center">
                {" "}
                <FcGoogle className="mr-2" /> Google
              </a>
            </p>
          </div>

          <p className="flex text-sm text-black items-center mb-4 mt-6">
            <input className=" mr-2" type="checkbox" name="" id="" />I have read
            and agree to the &nbsp;
            <span className="text-blue-700">Terms of Service </span>&nbsp; and{" "}
            &nbsp;
            <span className="text-blue-700">Privacy Policy</span>
          </p>
          <hr className="text-black" />
          <p className="text-center text-black mt-4">
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

export default Signup2;
