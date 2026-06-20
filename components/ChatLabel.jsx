import { assets } from "@/assets/assets";
import { useAppContext } from "@/context/AppContext";
import axios from "axios";
import Image from "next/image";
import { toast } from "react-hot-toast";

const ChatLabel = ({ openMenu, setOpenMenu, id, name }) => {
  const { fetchUsersChats, chats, setSelectedChat } = useAppContext;

  const selectChat = () => {
    const chatData = chats.fnd((chat) => chat._id === id);
    setSelectedChat(chatData);
    console.log(chatData);
  };

  const renameHandler = async () => {
    try {
      const newName = prompt("Enter new name");
      if (!newName) return;

      const { data } = await axios.post("/api/chat/rename", {
        chatId: id,
        name: newName,
      });

      if (data.success) {
        fetchUsersChats();
        setOpenMenu({ id: 0, open: false });
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const deleteHandler = async () => {
    try {
      const confirm = window.confirm("Are you sure for delete?");
      if (!confirm) return;

      const { data } = await axios.post("/api/chat/delete", { chatId: id });

      if (data.success) {
        setOpenMenu({ id: o, open: false });
        toast.success(data.message);
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div
      onClick={selectChat}
      className="flex items-center justify-between p-2 text-light hover:bg-dark/50 rounded-lg text-sm group cursor-pointer"
    >
      <p className="group-hover:max-w-5/6 truncate">{name}</p>
      <div
        onClick={(e) => {
          e.stopPropagation();
          setOpenMenu({ id: id, open: !openMenu.open });
        }}
        className="group relative flex items-center justify-center h-6 w-6 aspect-square hover:bg-dark rounded-full"
      >
        <Image
          alt=""
          src={assets.three_dots}
          className={`w-4 ${openMenu.id === id && openMenu.open ? "" : "hidden"} group-hover:block`}
        />
        <div
          className={`absolute ${openMenu.id === id && openMenu.open ? "block" : "hidden"} -right-36 top-6 bg-dark rounded-xl w-max p-2`}
        >
          <div
            onClick={renameHandler}
            className="flex items-center gap-3 hover:bg-white/10 text-gray-400 px-3 py-2 rounded-lg"
          >
            <Image src={assets.pencil_icon} alt="" className="w-4" />
            <p>Rename</p>
          </div>
          <div
            onClick={deleteHandler}
            className="flex items-center gap-3 text-red-400/80 hover:bg-white/10 px-3 py-2 rounded-lg"
          >
            <Image src={assets.delete_icon} alt="" className="w-4" />
            <p>Delete</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatLabel;
