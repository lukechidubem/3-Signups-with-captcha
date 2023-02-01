import React from "react";
import Team1 from "../../assets/team1.png";
import Team2 from "../../assets/team2.png";
import Team3 from "../../assets/team3.png";

const Therapists = () => {
  return (
    <div className="flex items-center w-full  h-[750px]  mx-auto  bg-blue-800">
      <div className="flex  justify-center flex-col  max-w-[1000px] text-white px-10 space-y-6 leading-relaxed">
        <h2 className="text-5xl text-start leading-normal">
          Professional and Vetted <br /> therapists who you can trust
        </h2>
        <p className="text-xl leading-relaxed">
          Tap into the world's largest network of licensed, accredited, and
          experienced therapists who can help you with a range of issues
          including depression, anxiety, relationships, trauma, grief, and more.
          With our therapists, you get the same professionalism and quality you
          would expect from an in-office therapist, but with the ability to
          communicate when and how you want.
        </p>
        <button className=" text-blue-800 text-2xl font-bold rounded-md bg-white py-5 px-6 w-1/2">
          Get Started To a Therapy
        </button>
      </div>

      <div className="flex flex-wrap h-full ">
        {/* <div className=" w-52 m-5">
          <img className=" rounded-lg " src={Team1} alt="" />
        </div>
        <div className="w-52  m-5">
          <img className=" rounded-lg " src={Team2} alt="" />
        </div>
        <div className="w-52  m-5">
          <img className=" rounded-lg " src={Team3} alt="" />
        </div>
        <div className="w-52  m-5">
          <img className=" rounded-lg " src={Team1} alt="" />
        </div>
        <div className="w-52  m-5">
          <img className=" rounded-lg " src={Team1} alt="" />
        </div>
        <div className="w-52  m-5">
          <img className=" rounded-lg " src={Team1} alt="" />
        </div> */}
        <img className="w-60 rounded-lg m-5" src={Team1} alt="" />
        <img className="w-60 rounded-lg m-5" src={Team2} alt="" />
        <img className="w-60 rounded-lg m-5" src={Team3} alt="" />
        <img className="w-60 rounded-lg m-5" src={Team1} alt="" />
        <img className="w-60 rounded-lg m-5" src={Team1} alt="" />
        <img className="w-60 rounded-lg m-5" src={Team1} alt="" />
      </div>
    </div>
  );
};

export default Therapists;
