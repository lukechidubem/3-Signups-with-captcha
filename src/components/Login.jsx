import React, { useState } from "react";
import SigninImg from "../assets/doc-bg.avif";
import logo from "../assets/logo.png";
import { FcGoogle } from "react-icons/fc";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

// git push --set-upstream origin signup

const Login = () => {
  const [verified, setVerified] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full h-screen bg-zinc-900/100">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay"
        src={SigninImg}
        alt=""
      />

      <div className="flex justify-center items-center h-full ">
        <form className="max-w-[500px] w-full z-10 mx-auto bg-white p-8">
          <div className="flex justify-center ">
            <img className="w-30 h-20 rounded-lg" src={logo} alt="" />
          </div>
          <div className="text-center text-indigo-900 mb-4 leading-5">
            <p>
              A Place where you enjoy life time <br /> opportunities
            </p>
          </div>

          <div className="flex flex-col mb-4 ">
            <label>Email</label>
            <input
              style={{ border: "1px solid black" }}
              className="focus:outline-none relative bg-white p-2"
              type="email"
            />
          </div>

          <div className="relative">
            <div className="flex flex-col  mb-2">
              <label>Password</label>
              <input
                style={{ border: "1px solid black" }}
                className="focus:outline-none relative bg-white p-2"
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

          <div className="flex justify-between items-center">
            <div className="flex  text-black items-center mb-2 mt-4">
              <input className="mr-2" type="checkbox" name="" id="" />{" "}
              <p>Remember me</p>
            </div>
            <a className="text-indigo-900" href="">
              Forgot Password?
            </a>
          </div>

          <button
            className={`w-full  py-3 my-5 bg-indigo-700 hover:bg-indigo-500 
               relative text-white`}
          >
            Log in
          </button>

          <p className="text-center">OR</p>
          <div className="flex w-full justify-center py-4">
            <a
              style={{ border: "1px solid black" }}
              href=""
              className="flex w-full bg-white text-indigo-900 py-3 justify-center items-center"
            >
              {" "}
              <FcGoogle className="mr-2" />
              Log in with Google
            </a>
          </div>
          <hr className="text-black" />
          <p className="text-center text-black mt-4">
            Don't have an Account? &nbsp;
            <span className="text-blue-700">
              <a href="">Log in</a>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
