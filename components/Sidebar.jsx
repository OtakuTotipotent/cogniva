"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";
import { useClerk, UserButton } from "@clerk/nextjs";
import { useAppContext } from "@/config/AppContext";
import ChatLabel from "./ChatLabel";

const Sidebar = ({ expand, setExpand }) => {
  const { openSignIn } = useClerk();
  const { user } = useAppContext();
  const [openMenu, setOpenMenu] = useState({ id: 0, open: false });

  return (
    <div
      className={`flex flex-col justify-between bg-dark/70 backdrop-blur-lg py-5 transition-all z-50 max-md:absolute max-md:h-screen ${expand ? "p-4 w-72" : "md:w-18 w-0 max-md:overflow-hidden items-center"}`}
    >
      <div className="flex flex-col gap-4">
        <div
          className={`flex ${expand ? "justify-between items-center" : "flex-col items-center gap-6"}`}
        >
          {/* logo/branding */}
          <Image
            className={
              expand ? "w-48 -top-1 -translate-x-2 relative" : "w-10 rounded-full"
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
          className={`flex justify-center items-center cursor-pointer ${expand ? "w-fit text-light hover:bg-dark/70 bg-dark/50 rounded-lg gap-3 py-2 px-4 transition" : "group relative h-9 w-9 hover:bg-gray-500/30 rounded-lg"}`}
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
          {expand && <p>New chat</p>}
        </button>

        {/* recent chats */}
        <div className={`text-white/25 text-sm ${expand ? "block" : "hidden"}`}>
          <p className="my-2 ml-2 text-primary cursor-default">Recent Chats</p>
          <ChatLabel openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </div>
      </div>

      {/* bottom buttons */}
      <div>
        <div
          className={`flex items-center cursor-pointer group relative ${expand ? "gap-1 text-primary text-sm p-2.5 border border-primary/70 rounded-lg hover:bg-primary/20 cursor-pointer" : "h-10 w-10 mx-auto hover:bg-gray-500/30 rounded-lg"}`}
        >
          <Image
            className={expand ? "w-5" : "mx-auto w-6.5"}
            src={expand ? assets.phone_icon : assets.phone_icon_dull}
            alt=""
          />
          <div
            className={`absolute -top-60 pb-8 ${!expand && "-right-40"} opacity-0 group-hover:opacity-100 hidden group-hover:block transition`}
          >
            <div className="relative w-max bg-primary text-dark text-sm p-3 rounded-lg shadow-lg">
              <Image src={assets.qrcode} alt="QR Code" className="w-44" />
              <p className="pt-2">Scan to visit GitHub Repo.</p>
              <div
                className={`w-3 h-3 absolute bg-primary rotate-45 ${expand ? "right-1/2" : "left-4"} -bottom-1.5`}
              ></div>
            </div>
          </div>
          {expand && (
            <>
              <span className="px-1 text-primary">Checkout source code</span>
              <Image alt="" src={assets.new_icon} />
            </>
          )}
        </div>

        {/* user account button */}
        <div
          onClick={user ? null : openSignIn}
          className={`flex items-center ${expand ? "border border-primary/70 rounded-lg hover:bg-primary/20" : "justify-center w-full"} gap-3 text-light/60 text-sm px-3 py-2 mt-2 cursor-pointer`}
        >
          {user ? (
            <UserButton />
          ) : (
            <Image src={assets.profile_icon} alt="" className="w-6" />
          )}

          {expand && (
            <span className="text-primary tracking-wide">
              {" "}
              {user?.firstName || "Click icon to login Cogniva"}{" "}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
