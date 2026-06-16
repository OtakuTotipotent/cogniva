import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Sidebar = ({ expand, setExpand }) => {
  return (
    <div
      className={`flex flex-col justify-between bg-dark/80 backdrop-blur-md py-5 transition-all z-50 max-md:absolute max-md:h-screen ${expand ? "p-4 w-72" : "md:w-18 w-0 max-md:overflow-hidden items-center"}`}
    >
      <div className="flex flex-col gap-4 items-center">
        <div
          className={`flex ${expand ? "justify-between items-center" : "flex-col items-center gap-6"}`}
        >
          {/* logo/branding */}
          <Image
            className={
              expand ? "w-48 -top-2 -translate-x-4 relative" : "w-10 rounded-md"
            }
            src={expand ? assets.logo_text : assets.logo_icon_black}
            alt="logo"
          />

          {/* sidebar/menu open/close buttons */}
          <div
            onClick={() => (expand ? setExpand(false) : setExpand(true))}
            className="group relative flex items-center justify-center hover:bg-gray-500/20 transition-all duration-300 h-9 w-9 aspect-square rounded-lg cursor-pointer"
          >
            <Image
              src={assets.menu_icon}
              alt="menu open"
              className="md:hidden"
            />
            <Image
              src={expand ? assets.sidebar_close_icon : assets.sidebar_icon}
              alt="sidebar close"
              className="hidden md:block w-7"
            />
            <div
              className={`absolute w-max ${expand ? "left-1/2 -translate-x-1/2 top-10" : "-top-12 left-0"} opacity-0 group-hover:opacity-100 transition bg-primary text-dark text-sm px-3 py-2 rounded-lg shadow-lg pointer-events-none`}
            >
              {expand ? "Close sidebar" : "Open sidebar"}
              <div
                className={`w-3 h-3 absolute bg-primary rotate-45 ${expand ? "left-1/2 top-0 -translate-1/2" : "left-4 -bottom-1.5"}`}
              ></div>
            </div>
          </div>
        </div>

        {/* new chat button */}
        <button
          className={`flex justify-center cursor-pointer ${expand ? "w-full bg-dark hover:opacity-70 rounded-lg gap-3 p-2.5" : "group relative h-9 w-9 hover:bg-gray-500/30 rounded-lg"}`}
        >
          <Image
            src={expand ? assets.chat_icon : assets.chat_icon_dull}
            alt=""
            className={expand ? "w-6" : "w-7"}
          />
          {/* tooltip */}
          <div className="absolute w-max -top-12 -right-12 opacity-0 group-hover:opacity-100 transition bg-primary text-dark text-sm px-3 py-2 rounded-lg shadow-lg pointer-events-none">
            New Chat
            <div className="w-3 h-3 absolute bg-primary rotate-45 left-4 -bottom-1.5"></div>
          </div>
          {/* expanded button text */}
          {expand && <p className="text-light font-medium">New Chat</p>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
