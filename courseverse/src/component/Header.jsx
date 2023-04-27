import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="bg-[#87CEFA] p-4">
      <div className="max-w-[1240px] flex justify-between mx-auto items-center py-[13px]">
        <div className="text-3xl font-bold">Course Verse</div>

        {toggle ? (
          <AiOutlineClose
            onClick={handleToggle}
            className="text-white text-2xl md:hidden block"
          />
        ) : (
          <AiOutlineMenu
            onClick={handleToggle}
            className="text-white text-2xl md:hidden block"
          />
        )}

        <ul className="hidden md:flex text-white gap-10 text-[20px]">
          <li>Home</li>
          <li>Company</li>
          <li>Resources</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        {/* mobile size menu */}
        <ul
          className={`duration-300 md:hidden w-full h-screen text-white gap-10 fixed bg-black top-[94px] ${
            toggle ? "left-[0]" : "left-[-100%]"
          }`}
        >
          <li className="p-5">Home</li>
          <li className="p-5">Company</li>
          <li className="p-5">Resources</li>
          <li className="p-5">About</li>
          <li className="p-5">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
