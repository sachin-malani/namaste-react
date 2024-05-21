import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;

  const { channelTitle, localized, thumbnails } = snippet;
  return (
    <div className="h-72 w-72 mt-4 overflow-hidden">
      <div>
        <img className="rounded-lg h-48 w-full" src={thumbnails.high.url} />
      </div>
      <div className="h-24 flex gap-2 mt-2">
        <div className="rounded-full bg-gray-300 min-w-9 h-9"></div>
        <div className="max-w-72 flex flex-col gap-1">
            <div className="max-h-12 text-ellipsis overflow-hidden">{localized.title}</div>
            <div className="font-light">{channelTitle}</div>
            {/* <div className="font-light"></div> */}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
