import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;

  const { channelTitle, localized, thumbnails } = snippet;

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0).replace(/\.0$/, "") + "k";
    }
    return num.toString();
  };

  return (
    <div className="h-[298] w-72 mt-4 overflow-hidden">
      <div className="h-48">
        <img
          className="rounded-lg h-full w-full m-auto"
          src={thumbnails.high.url}
          alt="thumbnail"
        />
      </div>
      <div className="h-28 flex gap-2 mt-2">
        <div className="rounded-full bg-gray-300 min-w-9 h-9"></div>
        <div className="max-w-72 flex flex-col gap-1">
          <div className="max-h-12 text-ellipsis overflow-hidden">
            {localized.title}
          </div>
          <div className="font-light">{channelTitle}</div>
          <div className="font-light">
            {formatNumber(statistics.viewCount) + " views"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

export const AdVideoCard = ({info}) => {
  return (
    <div className="relative">
      <span className=" absolute top-2 p-2 bg-slate-50 z-10 rounded-lg">Ad</span>
      <VideoCard info={info}/>
    </div>
  );
};
