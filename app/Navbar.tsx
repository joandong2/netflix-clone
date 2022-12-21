"use client";
import React, { useState, useEffect } from "react";

import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai";

const Navbar = () => {
  const [fixedNavbar, setfixedNavbar] = useState<boolean>(false);

  const changeNavbar = () => {
    //console.log(window.scrollY);
    if (window.scrollY >= 66) {
      setfixedNavbar(true);
    } else {
      setfixedNavbar(false);
    }
  };

  useEffect(() => {
    changeNavbar();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeNavbar);
  });

  return (
    <>
      <div
        className={`flex px-12 py-6 mb-[15em] justify-between items-center ${
          fixedNavbar ? "active" : ""
        }`}
      >
        <div className="flex justify-betweeen gap-6 items-center">
          <img src="./R.png" alt="netflix logo" className="max-h-[30px] mr-7" />
          <ul className="flex gap-3 font-bold transition ease-in duration-150 ">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">TV Shows</a>
            </li>
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">Recently Added</a>
            </li>
            <li>
              <a href="#">My List</a>
            </li>
          </ul>
        </div>

        <ul className="flex gap-4 items-center">
          <li>
            <a href="#">
              <AiOutlineSearch />
            </a>
          </li>
          <li>
            <a href="#">Kids</a>
          </li>
          <li>
            <a href="#">DVD</a>
          </li>
          <li>
            <a href="#">
              <AiOutlineBell />
            </a>
          </li>
          <li>
            <a href="#">
              <div className="h-[30px] w-[30px] bg-red-600"></div>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
