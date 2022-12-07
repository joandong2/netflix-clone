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
      <div className="p-7 w-[120px]  group-hover:w-[180px] h-screen flex justify-between flex-col border border-white">
        <div className="invisible group-hover:visible">
          <div className="flex gap-4 items-center">
            <div className="w-[30px] h-[30px] bg-red-700 mr-5"></div>
            <div>
              <p>Angel</p>
            </div>
          </div>
          {/*end*/}
        </div>

        <ul>
          <li>
            <a href="#" className="flex">
              <div className="w-[24px]">
                <AiOutlineSearch />
              </div>
              <span className="invisible group-hover:visible">Search</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex">
              <div className="w-[24px]">
                <AiOutlineHome />
              </div>
              <span className="invisible group-hover:visible">Home</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex">
              <div className="w-[24px]">
                <BiTrendingUp />
              </div>
              <span className="invisible group-hover:visible">Popular</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex">
              <div className="w-[24px]">
                <CgClapperBoard />
              </div>
              <span className="invisible group-hover:visible">Movies</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex">
              <div className="w-[24px]">
                <FaShapes />
              </div>
              <span className="invisible group-hover:visible">Categories</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex">
              <div className="w-[24px]">
                <AiOutlinePlus />
              </div>
              <span className="invisible group-hover:visible">My List</span>
            </a>
          </li>
        </ul>

        <div className="invisible group-hover:visible">
          <a href="#" className="">
            <AiOutlineBell />
            <span>Notifications</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
