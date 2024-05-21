import React from "react";

const Header = () => {
  return (
    <div className="grid grid-flow-col items-center px-4">
      <div className="flex gap-4 items-center">
        <div>
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/ios-glyphs/24/menu--v1.png"
            alt="menu"
          />
        </div>
        <div>
          <img
            width="90"
            height="24"
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
            alt="logo"
          />
        </div>
      </div>
      <div className="col-span-10 justify-center flex items-center gap-2">
        <div className="w-1/2 flex items-center">
          <input
            className="focus:outline-none w-11/12 ml-2 border border-gray-400 rounded-l-full py-1 px-2"
            type="search"
            placeholder="Search"
          />
          <button className="border border-gray-400 rounded-r-full py-1 px-4 bg-gray-200">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/ios-glyphs/24/search--v1.png"
              alt="search--v1"
            />
          </button>
        </div>
        <div className="bg-gray-200 rounded-full">
          <button>
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/sf-regular-filled/24/000000/microphone.png"
              alt="microphone"
            />
          </button>
        </div>
      </div>
      <div className="flex justify-end">
        <div>
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/ios-filled/40/user-male-circle.png"
            alt="user-male-circle"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
