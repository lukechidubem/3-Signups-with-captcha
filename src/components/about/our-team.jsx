import React from "react";
import Team1 from "../../assets/team1.png";
import Team2 from "../../assets/team2.png";
import Team3 from "../../assets/team3.png";

const OurTeam = () => {
  return (
    <div className="flex w-full h-full max-h-[600px] mx-auto my-16">
      <div className="flex items-center justify-center flex-col  max-w-[1000px] px-10">
        <p className="text-5xl">Our Team</p>
        <p className="text-2xl my-10 p-10 leading-normal">
          We are passionate and compassionate professionals, driven by the
          mission of helping more people live a better and happier life every
          day. We are growing fast and always looking for new talent. If you
          love people and like challenges - come and join us!
        </p>
        <button className="border-blue-800 border rounded-md bg-white py-3 px-10">
          JOIN US
        </button>
      </div>
      <div className="flex flex-wrap h-full max-h-[600px]">
        <img className="w-56 rounded-lg m-5" src={Team1} alt="" />
        <img className="w-56 rounded-lg m-5" src={Team2} alt="" />
        <img className="w-56 rounded-lg m-5" src={Team3} alt="" />
        <img className="w-56 rounded-lg m-5" src={Team1} alt="" />
        <img className="w-56 rounded-lg m-5" src={Team1} alt="" />
        <img className="w-56 rounded-lg m-5" src={Team1} alt="" />
      </div>
    </div>
  );
};

export default OurTeam;
