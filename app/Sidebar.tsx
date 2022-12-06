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
    <>
      <div className="group p-7 absolute top-0 left-0 w-[120px] border border-white hover:w-[250px] h-screen flex justify-between flex-col">
        <div className="hidden group-hover:block">
          <div className="flex">
            <div></div>
            <div>
              <p>Angel</p>
            </div>
          </div>
          <div className="flex">
            <div></div>
            <div>
              <p>Angel</p>
            </div>
          </div>
        </div>
        <ul className="">
          <li>
            <a href="#" className="flex gap-2">
              <AiOutlineSearch />
              <span className="hidden group-hover:block">Search</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex gap-2">
              <AiOutlineHome />
              <span className="hidden group-hover:block">Home</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex gap-2">
              <BiShuffle />
              <span className="hidden group-hover:block">Surprise Me</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex gap-2">
              <BiTrendingUp />
              <span className="hidden group-hover:block">New & Popular</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex gap-2">
              <FaLaptop />
              <span className="hidden group-hover:block">TV Shows</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex gap-2">
              <CgClapperBoard />
              <span className="hidden group-hover:block">Movies</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex gap-2">
              <FaShapes />
              <span className="hidden group-hover:block">Categories</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex gap-2">
              <AiOutlinePlus />
              <span className="hidden group-hover:block">My List</span>
            </a>
          </li>
        </ul>
        <div className="hidden group-hover:block">
          <a>
            <AiOutlineBell />
            <span className="hidden group-hover:block">Notifications</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
