import React from "react";
import Typed from "react-typed";
const Banner = () => {
  return (
    <div className="bg-[#87CEFA] w-full py-[100px]">
      <div className="max-w-[1240px] my-[60px] mx-auto  text-center ">
        <div className="text-4xl font-bold ">Learn With Us</div>
        <div className="text-white font-bold text-[50px] ">Grow With Us.</div>
        <div className="text-[50px] font-bold text-white">
          Learn{" "}
          <Typed
            className="p-3"
            strings={["Web Development", "Data Anaylsis"]}
            typeSpeed={80}
            backSpeed={50}
            loop={true}
          />
        </div>
        <button className="bg-black text-white p-3 rounded">Get Started</button>
      </div>
    </div>
  );
};

export default Banner;
