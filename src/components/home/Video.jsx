import React from "react";

const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        src="/ad.mp4"
        playsInline
        autoPlay
        muted
        loop
        className="h-full w-full object-cover block"
      />
    </div>
  );
};

export default Video;
