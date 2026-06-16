import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const PromptBox = ({ isLoading, setIsLoading }) => {
  const [prompt, setPrompt] = useState("");

  return (
    <form
      className={`w-full ${false ? "max-w-3xl" : "max-w-2xl"} bg-dark/20 backdrop-blur-md rounded-2xl p-4 mt-8 transition-all`}
    >
      <textarea
        name="prompt"
        rows="2"
        placeholder="Message Cogniva"
        required
        className="outline-none w-full resize-none overflow-hidden wrap-break-word bg-transparent text-dark"
        onChange={(e) => setPrompt(e.target.value)}
        value={prompt}
      />

      <div className="flex items-center justify-between text-sm mt-2">
        {/* Input Buttons */}
        <div className="flex items-center gap-2">
          <p className="flex items-center gap-2 text-xs border bg-dark text-light border-dark/80 px-3 py-1 rounded-full cursor-pointer opacity-80 hover:opacity-100 transition">
            <Image
              src={assets.deepthink_icon}
              alt="deep think icon"
              className="h-5"
            />
            Brainstorm
          </p>

          <p className="flex items-center gap-2 text-xs border bg-dark text-light border-dark/80 px-3 py-1 rounded-full cursor-pointer opacity-80 hover:opacity-100 transition">
            <Image
              src={assets.search_icon}
              alt="deep think icon"
              className="h-5"
            />
            Search
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <Image
            src={assets.pin_icon}
            alt=""
            className="w-6 cursor-pointer bg-dark p-1 rounded-full"
          />
          <button
            className={`${prompt ? "bg-dark/90 hover:bg-dark" : "bg-dark/30"} rounded-full p-2 cursor-pointer`}
          >
            <Image
              src={prompt ? assets.arrow_icon : assets.arrow_icon_dull}
              alt=""
              className="w-4 aspect-square"
            />
          </button>
        </div>
      </div>
    </form>
  );
};

export default PromptBox;
