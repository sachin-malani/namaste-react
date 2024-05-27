import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/config";
import Search from "./Search";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      searchCache[searchQuery]
        ? setSuggestions(searchCache[searchQuery])
        : getSearchSuggestions();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1], 
      })
    );
  };

  return (
    <div className="relative ">
      <div className="fixed w-full top-0 z-20 grid grid-flow-col items-center px-4 bg-white">
        <div className="flex gap-4 items-center">
          <div>
            <img
              onClick={() => toggleMenuHandler()}
              className="cursor-pointer"
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
          <div className="w-1/2 relative">
            <div className="flex items-center">
              <input
                className="focus:outline-none w-11/12 ml-2 border border-gray-400 rounded-l-full py-1 px-2"
                type="search"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setShowSuggestions(false)}
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
            {showSuggestions && (
              <div className="fixed w-[42rem] rounded-lg top-11 ml-4 shadow-lg">
                <ul>
                  {suggestions.map((suggestion) => (
                    <Search key={suggestion} searchResult={suggestion} />
                  ))}
                </ul>
              </div>
            )}
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
    </div>
  );
};

export default Header;
