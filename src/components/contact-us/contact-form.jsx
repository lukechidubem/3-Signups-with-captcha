import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Form = () => {
  const [verified, setVerified] = useState(false);

  function onChange() {
    setVerified(true);
  }
  return (
    <div className="flex justify-center  items-center h-full -mt-28 bg-white w-[120vw] -ml-52 rounded-t-[500px]">
      <form className=" max-w-[700px] w-full  mx-auto p-8 mt-40">
        <div className="flex flex-col my-5 ">
          <input
            placeholder="Fullname"
            className="border border-blue-800 rounded-md   p-4 focus:outline-none"
            type="text"
          />
        </div>

        <div className="flex flex-col  ">
          <input
            placeholder="Email"
            className="border border-blue-800 rounded-md my-5  p-4 focus:outline-none"
            type="email"
          />
        </div>

        <div className="flex flex-col my-5">
          <textarea
            className="p-4 border  border-blue-800 rounded-md focus:outline-none"
            placeholder="Write your message..."
            name=""
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <ReCAPTCHA
            sitekey="6Lerxf8jAAAAAKhPAUaMyjTZ-ndtsoprtU1CEn9s
"
            onChange={onChange}
          />
        </div>

        <button
          className={`w-full  py-3 my-5 ${
            verified ? " bg-indigo-900" : "bg-gray-400"
          } ${
            verified ? "hover:bg-indigo-700" : "hover:bg-gray-400"
          }   relative text-white rounded-md`}
          disabled={!verified}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
