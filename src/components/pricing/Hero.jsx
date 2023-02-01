import React from "react";
import HeroImg from "../../assets/pricing1.png";
import FooterImg from "../../assets/pricing2.png";

const Hero = () => {
  return (
    <div className="relative w-full min-h-[800px] bg-zinc-500 flex items-center justify-center ">
      <img
        className="absolute w-full h-full object-cover  mix-blend-overlay "
        src={HeroImg}
        alt=""
      />

      <div className=" bg-white text-center w-3/6 p-14 space-y-9 text-blue-900 font-bold rounded-xl ">
        <h2 className="text-5xl font-bold">Mentafix Pricing</h2>
        <p className="text-2xl leading-relaxed px-10">
          Mentafix gives users with critical state the freedom to meet virtually
          with a therapist when it’s convenient for them. With a token, you can
          choose from online chatting, video, voice messaging, and live
          workshops. Learn more about Mentafix plan options.
        </p>
      </div>
    </div>
  );
};

export default Hero;
