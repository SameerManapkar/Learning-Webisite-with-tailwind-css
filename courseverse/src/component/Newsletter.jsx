import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-[#87CEFA] p-4">
      <div className="max-w-[1240px] md:flex justify-between mx-auto py-[40px]">
        <div className="m-1">
          <h1 className="text-[40px] font-bold text-[white]">
            Want to learn latest I.T skills ?
          </h1>
          <span className="text-[white]">
            Sign up to our newsletter and stay up to date.
          </span>
        </div>
        <div className="m-1">
          <input
            className="p-3 mr-2 text-state-300 rounded mb-2"
            type="text"
            placeholder="Email"
          />
          <button className="bg-black text-white p-3 rounded">
            Get Started
          </button>
          <br />
          <p>
            We care about the protection of our data.Read our{" "}
            <span className="font-bold text-[black]">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
