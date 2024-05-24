import React from "react";
import "../App.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SideBarClose from "./SideBarClose";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const isWatchPage = useSelector((store) => store.app.isWatchPage);

  return isWatchPage ? null : !isMenuOpen ? (
    <SideBarClose />
  ) : (
    <div className="w-60">
      <div className="border-b-2 border-gray-200 p-4">
        <ul>
          <li className="">
            <Link to={"/"} className="listItems">
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/material/24/home--v5.png"
                alt="home--v5"
              />
              <div>Home</div>
            </Link>
          </li>
          <li className="listItems">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-sharp/24/youtube-shorts.png"
              alt="youtube-shorts"
            />
            <div>Shorts</div>
          </li>
          <li className="listItems">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/video-playlist.png"
              alt="video-playlist"
            />
            <div>Subscriptions</div>
          </li>
        </ul>
      </div>
      <div className="border-b-2 border-gray-200 p-4">
        <div className="font-semibold text-lg">Explore</div>
        <ul>
          <li className="listItems">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/external-anggara-glyph-anggara-putra/24/external-trending-user-interface-basic-anggara-glyph-anggara-putra.png"
              alt="external-trending-user-interface-basic-anggara-glyph-anggara-putra"
            />
            <div>Trending</div>
          </li>
          <li className="listItems">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/24/external-bag-ecommerce-anggara-line-anggara-putra.png"
              alt="external-bag-ecommerce-anggara-line-anggara-putra"
            />
            <div>Shopping</div>
          </li>
          <li className="listItems">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/pastel-glyph/24/christmas-songs--v1.png"
              alt="christmas-songs--v1"
            />
            <div>Music</div>
          </li>
          <li className="listItems">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/fluency-systems-filled/24/clapperboard-2.png"
              alt="clapperboard-2"
            />
            <div>Movies</div>
          </li>
          <li className="listItems">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/windows/24/youtube-live.png"
              alt="youtube-live"
            />
            <div>Live</div>
          </li>
          <li className="listItems">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/ios/50/controller.png"
              alt="controller"
            />
            <div>Gaming</div>
          </li>
          <li className="listItems">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/pixels/24/news--v1.png"
              alt="news--v1"
            />
            <div>News</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
