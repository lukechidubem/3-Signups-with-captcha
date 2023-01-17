import React, { useState } from "react";
import SignupImg from "../assets/doc-bg.avif";
import logo from "../assets/logo.png";
import ReCAPTCHA from "react-google-recaptcha";

const Signup = () => {
  const [verified, setVerified] = useState(false);

  function onChange() {
    setVerified(true);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="h-full w-full object-cover" src={SignupImg} alt="" />
      </div>

      <div className="bg-gray-100 flex items-center justify-center ">
        <form className="max-w-[400px] w-full mx-auto bg-white p-4  ">
          <div className="flex justify-center py-1">
            <img className="w-50 h-40" src={logo} alt="" />
          </div>
          <div className="flex flex-col py-2">
            <label>Fullname</label>
            <input className="border p-2" type="text" />
          </div>
          <div className="flex flex-col py-2">
            <label>Email</label>
            <input className="border p-2" type="email" />
          </div>
          <div className="flex flex-col py-2">
            <label>Password</label>
            <input className="border p-2" type="password" />
          </div>
          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey="6Lerxf8jAAAAAKhPAUaMyjTZ-ndtsoprtU1CEn9s
"
              onChange={onChange}
            />
          </div>
          {/* <button className="border w-full my-5 py-2 bg-indigo-700 hover:bg-indigo-500 text-white">
            Sign Up
          </button> */}

          <button
            className={` border w-full py-2 my-5 ${
              verified ? "bg-indigo-700" : "bg-indigo-200"
            } ${
              verified ? "hover:bg-indigo-500" : "hover:bg-indigo-200"
            }   relative text-white`}
            disabled={!verified}
          >
            Sign Up
          </button>
          <div className="flex justify-between">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" name="" id="" /> Remember
              me
            </p>
            <p>Create an account</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
