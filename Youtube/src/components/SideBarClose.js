import React from "react";

const SideBarClose = () => {
  return (
    <div className="w-16 h-16 p-4">
      <ul>
        <li className="listItemsToggle">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material/24/home--v5.png"
            alt="home--v5"
          />
          <div className="text-xs">Home</div>
        </li>
        <li className="listItemsToggle">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material-sharp/24/youtube-shorts.png"
            alt="youtube-shorts"
          />
          <div className="text-xs">Shorts</div>
        </li>
        <li className="listItemsToggle">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-glyphs/30/video-playlist.png"
            alt="video-playlist"
          />
          <div className="text-xs ml-2">Subscriptions</div>
        </li>
      </ul>
    </div>
  );
};

export default SideBarClose;
