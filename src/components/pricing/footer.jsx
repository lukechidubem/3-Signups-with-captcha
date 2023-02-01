import React from "react";
import FooterImg from "../../assets/pricing2.png";

const Footer = () => {
  return (
    <div className="flex justify-center items-center p-14 bg-blue-100 text-blue-900">
      <div className="pr-16">
        <img src={FooterImg} alt="Gift membership" />
      </div>
      <div className="space-y-11">
        <h2 className="text-4xl font-bold">
          Give the gift of a Mentafix membership
        </h2>
        <p className="text-2xl">
          Therapy is one of the most meaningful gifts you can give <br /> to
          your friends and loved ones.
        </p>
        <button className="border-4 border-blue-800 py-4 px-8 rounded-lg text-2xl">
          Gift A Menbership
        </button>
      </div>
    </div>
  );
};

export default Footer;
