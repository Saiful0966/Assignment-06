
import React from 'react';
import Image from 'next/image';
import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-[#0f1115] text-white px-6 py-4 border-b border-gray-800">
      {/* Navbar Logo Name */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white pl-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#181a20] rounded-box z-10 mt-3 w-52 p-2 shadow border border-gray-800 text-gray-300"
          >
            <li>
              <a className="text-[#88e700] font-semibold">Workouts</a>
            </li>
            <li>
              <a>My Plan</a>
            </li>
          </ul>
        </div>

        {/* Brand Logo Name */}
        <a className="flex items-center gap-2 text-2xl font-black tracking-wider text-white uppercase cursor-pointer">
          <span className="text-[#88e700]">
            <Image src={logo} alt="FITLOG Logo" width={28} height={28} />
          </span>
          FITLOG
        </a>
      </div>

      {/* Navbar Workouts and  My Plan button */}

      <div className="navbar-center hidden lg:flex">
        <div className="flex items-center gap-6">
          <button className="btn btn-sm border-none bg-[#1e2710] text-[#88e700] hover:bg-[#283514] rounded-full px-5 font-semibold text-xs capitalize">
            Workouts
          </button>
          <button className="btn btn-sm btn-ghost text-gray-400 hover:text-white rounded-full px-3 font-medium text-xs capitalize">
            My Plan
          </button>
        </div>
      </div>

      {/* Navbar Plan */}
      <div className="navbar-end flex items-center gap-6">
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="text-sm font-medium text-gray-300"> Plan </span>
          <span className="badge bg-[#88e700] text-black font-bold text-xs px-2 py-2 rounded-full border-none">
            0
          </span>
        </div>

        {/* Navbar Saved */}
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="text-sm font-medium text-gray-300"> Saved </span>
          <span className="badge bg-[#242730] text-gray-300 border border-gray-700 font-bold text-xs px-2 py-2 rounded-full">
            0
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;