import React, { useState } from "react";
import SignupImg from "../assets/signup-bg.png";
import logo from "../assets/logo.png";
import { FcGoogle } from "react-icons/fc";
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
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="h-full w-full object-cover" src={SignupImg} alt="" />
      </div>
      <div className="relative w-full h-screen bg-indigo-700">
        {/* <img
          className="absolute w-full h-full object-cover mix-blend-overlay"
          src={SignupImg}
          alt=""
        /> */}

        <div className="flex justify-center items-center h-full ">
          <form className="max-w-[500px] w-full z-10 text-white mx-auto bg-indigo-700 p-8">
            <div className="flex justify-center ">
              <img className="w-30 h-20 rounded-lg" src={logo} alt="" />
            </div>
            <div className="text-center my-6">
              <h2 className="text-2xl">Create an Account</h2>
              <p>And enjoy a life time of opportunities</p>
            </div>

            <div className="flex flex-col mb-2 ">
              <label>Fullname</label>
              <input
                className="border relative bg-indigo-700 p-2 focus:outline-none"
                type="text"
              />
            </div>

            <div className="flex flex-col mb-2 ">
              <label>Email</label>
              <input
                className="border relative bg-indigo-700 p-2 focus:outline-none"
                type="email"
              />
            </div>

            <div className="relative mb-4">
              <div className="flex flex-col  mb-2">
                <label>Password</label>
                <input
                  className="border relative bg-indigo-700 p-2 focus:outline-none"
                  type={showPassword ? "text" : "password"}
                />
              </div>

              <div className="absolute top-11 transform -translate-y-1/2 right-3">
                {showPassword ? (
                  <AiFillEye
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                    className=" w-6 h-8 mr-2"
                  />
                ) : (
                  <AiFillEyeInvisible
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                    className=" w-6 h-8 mr-2"
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
            <p className="flex text-xs text-white items-center mb-2 mt-6">
              <input className=" mr-2" type="checkbox" name="" id="" />I have
              read and agree to the &nbsp;
              <span className=" underline">Terms of Service </span>
              &nbsp; and &nbsp;
              <span className=" underline">Privacy Policy</span>
            </p>

            <button
              className={`w-full  py-3 my-5 ${
                verified ? "bg-white" : "bg-gray-400"
              } ${
                verified ? "hover:bg-indigo-200" : "hover:bg-gray-400"
              }   relative text-indigo-900`}
              disabled={!verified}
            >
              Sign Up
            </button>
            <p className="text-center">OR</p>
            <div className="flex w-full justify-center py-4">
              {/* <p className="border w-full shadow-lg hover:shadow-xl px-10 py-3 flex justify-center items-center"> */}
              <a
                href=""
                className="flex w-full bg-white text-indigo-900 py-3 justify-center items-center"
              >
                {" "}
                <FcGoogle className="mr-2" />
                Sign up with Google
              </a>
              {/* </p> */}
            </div>

            <hr />
            <p className="text-center text-white mt-4">
              Already have an account? &nbsp;
              <span className="text-white">
                <a href="" className="underline">
                  Log in
                </a>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup2;
