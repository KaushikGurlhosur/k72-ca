import React from "react";

const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        src="/ads.mp4"
        playsInline
        autoPlay
        muted
        loop
        preload="auto"
        className="h-full w-full object-cover block"
      />
    </div>
  );
};

export default Video;
