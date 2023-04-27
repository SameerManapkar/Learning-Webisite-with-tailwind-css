import React from "react";

const Experts = () => {
  return (
    <div className="max-w-[1240px] my-10 mx-auto md:grid grid-cols-3 p-2 flex flex-col justify-center items-center">
      <div className="col-span-1 w-[80%]">
        <img
          src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
          alt="laptop"
        />
      </div>
      <div className="col-span-2 flex flex-col justify-center w-[80%] m:w-[100%]">
        <h1 className="text-[#00df9a] font-bold my-2">LEARN FROM EXPERTS</h1>
        <p className="text-justify">
          Our courses include web development and data analysis. Learn web
          technologies like HTML, CSS, and JavaScript, or develop your data
          analysis skills with Python and R. Advance your career in high-demand
          industries.
        </p>
        <button className="w-[30%] bg-black text-white p-3 rounded mt-2">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Experts;
