import { assets } from "@/assets/assets";
import Image from "next/image";

const ChatLabel = ({ openMenu, setOpenMenu }) => {
  return (
    <div className="flex items-center justify-between p-2 text-light hover:bg-dark/50 rounded-lg text-sm group cursor-pointer">
      <p className="group-hover:max-w-5/6 truncate">Chat title comes here</p>
      <div className="group relative flex items-center justify-center h-6 w-6 aspect-square hover:bg-dark rounded-full">
        <Image
          alt=""
          src={assets.three_dots}
          className={`w-4 ${openMenu.open ? "" : "hidden"} group-hover:block`}
        />
        <div
          className={`absolute ${openMenu.open ? "block" : "hidden"} -right-36 top-6 bg-dark rounded-xl w-max p-2`}
        >
          <div className="flex items-center gap-3 hover:bg-white/10 text-gray-400 px-3 py-2 rounded-lg">
            <Image src={assets.pencil_icon} alt="" className="w-4" />
            <p>Rename</p>
          </div>
          <div className="flex items-center gap-3 text-red-400/80 hover:bg-white/10 px-3 py-2 rounded-lg">
            <Image src={assets.delete_icon} alt="" className="w-4" />
            <p>Delete</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatLabel;
