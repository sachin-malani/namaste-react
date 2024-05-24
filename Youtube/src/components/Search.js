import React from "react";

const Search = (props) => {
  const { searchResult } = props;
  return (
    <li
      key={searchResult}
      className="flex px-4 py-2 bg-white items-center gap-2 hover:bg-gray-200 cursor-default first:rounded-t-lg last:rounded-b-lg"
    >
      <img
        width="16"
        height="16"
        src="https://img.icons8.com/ios-glyphs/24/search--v1.png"
        alt="search--v1"
      />
      <p>{searchResult}</p>
    </li>
  );
};

export default Search;