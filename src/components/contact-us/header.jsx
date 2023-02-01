import React from "react";
import AboutHow from "../../assets/about-how.png";

const Header = () => {
  return (
    <div className="relative w-full -z-10 min-h-[900px] bg-zinc-500 flex items-center justify-center ">
      <img
        className="absolute blur w-full h-full object-cover  mix-blend-overlay "
        src={AboutHow}
        alt=""
      />

      <div className=" flex flex-col justify-center items-center h-full  mx-16 text-3xl text-white leading-normal z-20">
        <p className=" text-6xl underline mb-11">Contact Us</p>

        <div>
          <p className="text-blue-900">Mentafix</p>
          <p>
            235 Jake Williams Avenue, <br /> Mall View, New Castle.
          </p>
          <a className="text-blue-900 underline cursor-pointer" href="">
            contact@mentafix.com
          </a>
        </div>

        <h2 className="my-8">Interested in learning more?</h2>
        <p>
          Take a look at our{" "}
          <a className="text-blue-900 cursor-pointer" href="">
            {" "}
            frequently asked questions
          </a>{" "}
          for some quick answers. If you still <br /> need assistance, please
          fill out the form below and we'd be happy to help!
        </p>
      </div>
    </div>
  );
};

export default Header;
