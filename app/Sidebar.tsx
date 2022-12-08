import React from "react";
import {
  AiOutlineSearch,
  AiOutlineHome,
  AiOutlineLaptop,
  AiOutlinePlus,
  AiOutlineBell,
} from "react-icons/ai";
import { BiShuffle, BiTrendingUp } from "react-icons/bi";
import { FaLaptop, FaShapes } from "react-icons/fa";
import { CgClapperBoard } from "react-icons/cg";
const Sidebar = () => {
  return (
    <div className="group fixed top-0 left-0 h-screen z-10">
      <div className="p-12 h-screen flex justify-between flex-col">
        <div className="invisible group-hover:visible">
          <div className="flex gap-4 items-center mb-4">
            <div className="w-[30px] h-[30px] bg-red-700"></div>
            <div>
              <p>John O.</p>
            </div>
          </div>
          <div className="flex gap-4 items-center mb-4">
            <div className="w-[30px] h-[30px] bg-blue-800"></div>
            <div>
              <p>Joanne O.</p>
            </div>
          </div>
          {/*end*/}
        </div>

        <ul className="flex space-y-8 flex-col">
          <li>
            <a href="#" className="flex gap-3 items-center">
              <div className="w-[24px]">
                <AiOutlineSearch />
              </div>
              <span className="invisible group-hover:visible">Search</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex gap-3 items-center">
              <div className="w-[24px]">
                <AiOutlineHome />
              </div>
              <span className="invisible group-hover:visible">Home</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex gap-3 items-center">
              <div className="w-[24px]">
                <BiTrendingUp />
              </div>
              <span className="invisible group-hover:visible">
                New & Popular
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="flex gap-3 items-center">
              <div className="w-[24px]">
                <CgClapperBoard />
              </div>
              <span className="invisible group-hover:visible">Movies</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex gap-3 items-center">
              <div className="w-[24px]">
                <AiOutlineLaptop />
              </div>
              <span className="invisible group-hover:visible">TV Shows</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex gap-3 items-center">
              <div className="w-[24px]">
                <FaShapes />
              </div>
              <span className="invisible group-hover:visible">Categories</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex gap-3 items-center">
              <div className="w-[24px]">
                <AiOutlinePlus />
              </div>
              <span className="invisible group-hover:visible">My List</span>
            </a>
          </li>
        </ul>

        <div className="invisible group-hover:visible">
          <a href="#" className="flex">
            <AiOutlineBell className="w-[24px]" />
            <span>Notifications</span>
          </a>
        </div>
        <div className="fade h-screen w-full invisible group-hover:visible absolute top-0 left-0 z-[-1]"></div>
      </div>
    </div>
  );
};

export default Sidebar;
