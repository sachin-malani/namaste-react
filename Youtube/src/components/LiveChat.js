import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import ChatMessages from "./ChatMessages";
import { data } from "../utils/chatData";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  let i = 0;
  useEffect(() => {
    const getMessage = setInterval(() => {
      dispatch(addMessage(data[i]));
      if (i === 99) i = 0;
      i++;
    }, 1500);

    return () => clearInterval(getMessage);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addMessage({
        name: "Sachin Jain",
        message: liveMessage,
      })
    );
    setLiveMessage("");
  };

  return (
    <div className="w-96 relative">
      <div>
        {chatMessages.map((data, index) => (
          <ChatMessages key={index} name={data.name} message={data.message} />
        ))}
      </div>

      <form
        className="flex border-t border-gray-200 gap-2 items-center sticky bottom-0 z-10 bg-white w-full"
        onSubmit={handleSubmit}
      >
        <input
          className="w-full focus:outline-none px-2 border m-2 border-gray-200 rounded-xl"
          type="text"
          placeholder="Chat..."
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        ></input>
        <button>
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material-rounded/24/sent.png"
            alt="sent"
          />
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
