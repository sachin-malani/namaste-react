import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Gaming",
    "Display devices",
    "Computer Hardware",
    "Counter-Strike 2",
    "Android",
    "Computers",
    "News",
    "Live",
    "Esports",
    "JavaScript",
  ];

  return (
    <div className="flex gap-3">
      {list.map((btnName, index) => (
        <Button key={index} name={btnName} />
      ))}
    </div>
  );
};

export default ButtonList;
