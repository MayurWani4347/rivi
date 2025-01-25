import React from "react";
import "../styles/video2.css"; // Make sure to create this file

const VideoComponent2 = () => {
  return (
    <div className="video-section">
      <h1 className="heading">
        Recommendation systems that truly personalize travel.
      </h1>
      <video
        className="video-player"
        src="https://storage.googleapis.com/rivi-website-content/Screen%20Recording%202024-09-20%20at%201%20(1).mp4"
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
};

export default VideoComponent2;
