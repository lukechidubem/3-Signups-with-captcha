import React, { useState } from "react";
import SigninImg from "../assets/doc-bg.avif";

const options = [
  { value: "sad", label: "Sad", emoji: "🙁" },
  { value: "verySad", label: "Very sad", emoji: "😠" },
  { value: "notSure", label: "Not sure", emoji: "😮" },
  { value: "happy", label: "Happy", emoji: "😊" },
];

const HealthRoutine = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <div className="relative w-full h-screen bg-zinc-900/100">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay"
        src={SigninImg}
        alt=""
      />
      <div className="flex justify-center items-center h-full flex-col ">
        <p className="text-white mb-10 text-2xl font-bold">
          Hello Dubem Luke !
        </p>
        {selectedValue === null && (
          <div className="max-w-[600px] w-full max-h-[500px] h-full flex flex-col justify-center space-y-10 items-center z-10 mx-auto bg-white p-8 rounded-lg">
            <p>
              To determine your current state of mind, choose the emoji that
              best describes your current mood status
            </p>
            <div className="flex justify-evenly items-center w-[400px]">
              {options.map((option) => {
                return (
                  <div
                    className="flex flex-col items-center justify-center "
                    key={option.value}
                  >
                    <div className="flex items-center justify-center">
                      <input
                        className="m-2 text-2xl"
                        type="radio"
                        name={option.value}
                        value={option.value}
                        checked={selectedValue === option.value}
                        onChange={(e) => setSelectedValue(e.target.value)}
                      />
                      <p className="text-2xl">{option.emoji}</p>
                    </div>
                    <p className="font-bold">{option.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {selectedValue === "sad" && (
          <div className="max-w-[600px] w-full max-h-[500px] h-full flex flex-col justify-center space-y-10 items-center z-10 mx-auto bg-white p-8 rounded-lg">
            <p>
              To determine your mental state, answer the following questions.
            </p>

            <div className="flex flex-col  justify-center space-y-5 ">
              <p>How are you feeling?</p>
              <div className="flex items-center ">
                <input
                  className="m-2"
                  type="checkbox"

                  // checked={selectedValue === option.value}
                  // onChange={(e) => setSelectedValue(e.target.value)}
                />
                <p className="">Sad</p>
              </div>
              <div className="flex items-center ">
                <input className="m-2 " type="checkbox" />
                <p className="">Depressed</p>
              </div>
              <div className="flex items-center ">
                <input className="m-2 " type="checkbox" />
                <p className="">Hopeless</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HealthRoutine;
