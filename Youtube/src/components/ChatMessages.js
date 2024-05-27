import React from "react";

const ChatMessages = (props) => {
  const { name, message } = props;
  return (
    <div className="p-2">
      <img
      className="inline"
        width="24"
        height="24"
        src="https://img.icons8.com/ios-filled/40/user-male-circle.png"
        alt="user-male-circle"
      />
      <span className="font-medium ml-1">{name}</span>
      <span className="font-normal ml-1">{message}</span>
    </div>
  );
};

export default ChatMessages;
